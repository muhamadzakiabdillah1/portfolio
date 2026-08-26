import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string().optional(),
      category: z.enum(['ui-ux', 'graphic', 'poster']),
      categoryLabel: z.string(),
      year: z.string(),
      summary: z.string(),
      summaryEn: z.string().optional(),
      tools: z.array(z.string()),
      thumbnail: image(),
      problem: z.string(),
      problemEn: z.string().optional(),
      solution: z.string(),
      solutionEn: z.string().optional(),
      note: z.string(),
      noteEn: z.string().optional(),
      processImages: z.array(image()).optional(),
    }),
});

export const collections = { projects };
