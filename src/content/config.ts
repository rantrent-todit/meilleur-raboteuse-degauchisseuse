import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const produits = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/produits" }),
  schema: z.object({
    titre: z.string(),
    titre_h1: z.string().optional(),
    description_courte: z.string(),
    description_longue: z.string(),
    image_url: z.string(),
    lien_affiliation: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    categories: z.array(z.string()),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/categories" }),
  schema: z.object({
    titre_seo: z.string(),
    titre_h1: z.string().optional(),
    description_seo: z.string(),
    faq: z.array(z.object({
      q: z.string(),
      r: z.string(),
    })).optional(),
  }),
});

export const collections = { produits, categories };
