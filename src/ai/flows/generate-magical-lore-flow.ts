'use server';
/**
 * @fileOverview A Genkit flow for the 'Lore Weaver Tool' that generates personalized magical lore or character backstories.
 *
 * - generateMagicalLore - A function that handles the lore generation process.
 * - GenerateMagicalLoreInput - The input type for the generateMagicalLore function.
 * - GenerateMagicalLoreOutput - The return type for the generateMagicalLore function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMagicalLoreInputSchema = z.object({
  themesOrTraits: z
    .string()
    .describe(
      'Magical themes, keywords, or character traits to inspire the lore. This can be a comma-separated list of words or short phrases.'
    ),
});
export type GenerateMagicalLoreInput = z.infer<typeof GenerateMagicalLoreInputSchema>;

const GenerateMagicalLoreOutputSchema = z.object({
  lore: z.string().describe('The beautifully crafted magical lore or character backstory.'),
});
export type GenerateMagicalLoreOutput = z.infer<typeof GenerateMagicalLoreOutputSchema>;

export async function generateMagicalLore(
  input: GenerateMagicalLoreInput
): Promise<GenerateMagicalLoreOutput> {
  return generateMagicalLoreFlow(input);
}

const generateMagicalLorePrompt = ai.definePrompt({
  name: 'generateMagicalLorePrompt',
  input: {schema: GenerateMagicalLoreInputSchema},
  output: {schema: GenerateMagicalLoreOutputSchema},
  prompt: `You are a master storyteller and world-builder for the Arcanum Prime universe, a world of dark fantasy elegance and immersive magic.
Your task is to generate a unique, beautifully crafted piece of magical lore or a detailed character backstory.

The lore should embody a cinematic, immersive, and premium storytelling experience, akin to a AAA video game narrative.
It must reflect the aesthetics of Hogwarts Legacy combined with high-end luxury branding and modern SaaS-level UI quality in its descriptive style.
Focus on creating a dark fantasy elegance, incorporating elements of arcane energy, mystical fog, and a sense of ancient, powerful magic.
Ensure the narrative is compelling, grand, and personal, ready to deepen a user's immersion in a world of mystery and wonder.

Given the following inspirations, craft a compelling narrative for the 'lore' field:

Inspirations: {{{themesOrTraits}}}`,
});

const generateMagicalLoreFlow = ai.defineFlow(
  {
    name: 'generateMagicalLoreFlow',
    inputSchema: GenerateMagicalLoreInputSchema,
    outputSchema: GenerateMagicalLoreOutputSchema,
  },
  async input => {
    const {output} = await generateMagicalLorePrompt(input);
    return output!;
  }
);
