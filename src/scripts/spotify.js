const NOW_PLAYING_URL = 'https://spotify-bridge.vercel.app/api/now-playing.js';
const POLL_INTERVAL = 30_000;
const FADE_DURATION = 400;

/** Keep one mounted widget up to date; dispose it when its sidebar is removed. */
export function createSpotifyWidget(container) {
  const content = container.querySelector('#spotify-content');
  const art = container.querySelector('#spotify-art');
  const title = container.querySelector('#spotify-title');
  const artist = container.querySelector('#spotify-artist');
  const link = container.querySelector('#spotify-link-element');
  if (!content || !art || !title || !artist || !link) return () => {};

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let disposed = false;
  let inFlight = false;
  let controller;
  let hideTimer;
  let trackTimer;
  let currentTrack = '';

  function cancelTransitions() {
    clearTimeout(hideTimer);
    clearTimeout(trackTimer);
    content.classList.remove('fade-out');
  }

  function updateArtwork(url) {
    // Do not hide or reassign an unchanged image on every poll.
    if (art.getAttribute('src') === url) return;

    art.onload = null;
    art.onerror = null;
    if (!url) {
      art.classList.add('hidden');
      art.classList.remove('invisible');
      art.removeAttribute('src');
      return;
    }

    // Reserve the cover's space while a new image loads, without a broken icon.
    art.classList.remove('hidden');
    art.classList.add('invisible');
    art.onload = () => {
      if (!disposed) art.classList.remove('invisible');
    };
    art.onerror = () => {
      if (!disposed) art.classList.add('hidden');
    };
    art.src = url;
  }

  function updateTrack(data, key) {
    title.textContent = data.title;
    artist.textContent = data.artist;
    link.href = data.songUrl;
    updateArtwork(data.albumArt || null);
    currentTrack = key;
  }

  function hide() {
    cancelTransitions();
    container.inert = true;
    container.setAttribute('aria-hidden', 'true');
    container.classList.remove('is-visible');
    if (reducedMotion.matches) {
      container.classList.add('hidden');
    } else {
      hideTimer = setTimeout(() => container.classList.add('hidden'), FADE_DURATION);
    }
  }

  function show(data) {
    const wasVisible = container.classList.contains('is-visible');
    const key = JSON.stringify([data.songUrl, data.title, data.artist, data.albumArt]);
    cancelTransitions();

    if (!wasVisible) {
      updateTrack(data, key);
      container.classList.remove('hidden');
      // Commit the initial transparent state before fading the widget in.
      void container.offsetWidth;
      container.classList.add('is-visible');
    } else if (key !== currentTrack && !reducedMotion.matches) {
      content.classList.add('fade-out');
      trackTimer = setTimeout(() => {
        updateTrack(data, key);
        content.classList.remove('fade-out');
      }, FADE_DURATION);
    } else {
      updateTrack(data, key);
    }
    container.inert = false;
    container.setAttribute('aria-hidden', 'false');
  }

  async function update() {
    if (disposed || document.hidden || inFlight) return;
    inFlight = true;
    controller = new AbortController();
    const requestTimeout = setTimeout(() => controller.abort(), 10_000);

    try {
      const response = await fetch(NOW_PLAYING_URL, { signal: controller.signal });
      if (!response.ok) throw new Error('Now Playing request failed');
      const data = await response.json();
      if (disposed) return;

      if (data?.isPlaying && typeof data.title === 'string' &&
          typeof data.artist === 'string' && typeof data.songUrl === 'string') {
        show(data);
      } else {
        hide();
      }
    } catch {
      if (!disposed) hide();
    } finally {
      clearTimeout(requestTimeout);
      inFlight = false;
    }
  }

  const onVisibilityChange = () => { void update(); };
  document.addEventListener('visibilitychange', onVisibilityChange);
  const interval = setInterval(() => { void update(); }, POLL_INTERVAL);
  void update();

  return () => {
    disposed = true;
    clearInterval(interval);
    cancelTransitions();
    controller?.abort();
    art.onload = null;
    art.onerror = null;
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
}
