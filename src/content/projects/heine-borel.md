---
title: "Heine Borel in Lean"
description: "A formalization using LEAN of the Heine-Borel theorem for metric spaces, developed as the final exam project for MAT740. The constraint was to avoid Mathlib.Topology, requiring the construction of all topological foundations entirely from scratch."
heroImage: "../../assets/images/projects/xuTJZ7uD7PI.jpg"
url: "/projects/heine-borel"
pubDate: 2026-01-08
#badge: "NEW"
draft: false
---

In this project gives a forzalisation using LEAN of the *Heine-Borel theorem*. It was developed as the final project for the *Topology in LEAN* course under a strict constraint: no reliance on the standard `Mathlib.Topology` library. Every foundation was constructed from first principles.

### The Heine-Borel Theorem

In metric spaces, the *Heine-Borel theorem* is one of the most classical results, characterizing compactness in terms of completeness and total boundedness. 

**Theorem:** A metric space $X$ is compact if and only if it is complete and totally bounded.

### Using Filters

While informal proofs of this theorem often rely on subsequence extraction and diagonal arguments, such approaches can become very hard to handle when formalized. This project adopts an approach based on *Filters*. This abstraction provides a more elegant and powerful framework for "classical" topological notions. The proof of Heine-Borel becomes a study of the interaction between compacteness (where maximal filters congerge), completeness (where Cauchy filters converge) and total boundedness (where every ultrafilter is Cauchy filter).

### Resources

<div class="flex flex-wrap gap-4 not-prose mt-8">
  <a href="/heine-borel-report.pdf" target="_blank" class="btn btn-outline btn-primary">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    Read Full Report
  </a>
  <a href="https://github.com/samubiscaro/heine-borel" target="_blank" class="btn btn-outline">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    Source Code
  </a>
</div>

---

**Selected Bibliography:**
* **de Moura, L., & Ullrich, S.**, *The Lean 4 Theorem Prover and Programming Language.* CADE 28, 2021.
* **Ambrosio, L., Mantegazza, C., & Ricci, F.**, *Complementi di matematica*, 2021.
* **Kelley, J. L.**, *General Topology*, Springer Graduate Texts in Mathematics, 1975.
* **Munkres, J.**, *Topology (Classic Version)*, Pearson, 2017.