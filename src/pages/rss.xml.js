import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export async function GET(context) {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  const notes = await getCollection("notes");

  // 1. Elaborazione PROGETTI (Link interni al sito)
  const projectItems = projects.map((item) => ({
    title: `[Project] ${item.data.title}`,
    pubDate: item.data.pubDate,
    description: item.data.description,
    link: `/projects/${item.slug}/`,
  }));

  // 2. Elaborazione NOTE (Link diretti a Google Drive)
  const noteItems = notes.map((item) => {
    // Estraiamo l'anno di inizio dall'anno accademico (es. "2024-2025" -> 2024)
    const startYear = item.data.year.split('-')[0] || "2025";
    
    return {
      title: `[Notes] ${item.data.title} - Prof. ${item.data.professor}`,
      // Usiamo il 1° Settembre dell'anno accademico come data tecnica
      pubDate: new Date(`${startYear}-09-01`),
      description: `Course at ${item.data.university}. Academic Year: ${item.data.year}`,
      // MANDIAMO L'UTENTE DIRETTAMENTE SU DRIVE
      link: item.data.url, 
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...projectItems, ...noteItems].sort((a, b) => b.pubDate - a.pubDate),
  });
}
