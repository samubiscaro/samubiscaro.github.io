import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export async function GET(context) {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  const notes = await getCollection("notes");

  // 1. Progetti
  const projectItems = projects.map((item) => ({
    title: `[Project] ${item.data.title}`,
    pubDate: item.data.pubDate,
    description: item.data.description,
    link: `/projects/${item.slug}/`,
    // Usiamo lo slug come ID univoco per evitare duplicati
    id: `${context.site}projects/${item.slug}/`,
  }));

  // 2. Note
  const noteItems = notes.map((item) => {
    const startYear = item.data.year.split('-')[0] || "2025";
    return {
      title: `[Notes] ${item.data.title} - Prof. ${item.data.professor}`,
      pubDate: new Date(`${startYear}-09-01`),
      description: `Course at ${item.data.university}. Academic Year: ${item.data.year}`,
      link: item.data.url, 
      // ID univoco basato sulla collezione e lo slug
      id: `${context.site}notes/${item.slug}/`,
    };
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...projectItems, ...noteItems].sort((a, b) => b.pubDate - a.pubDate),
    // Risolve l'errore "Missing atom:link" aggiungendo il riferimento self nell'header XML
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom"/>`,
  });
}
