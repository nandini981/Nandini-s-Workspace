'use server';

/**
 * @fileOverview An AI content assistant for generating engaging descriptions and taglines.
 *
 * - generateContent - A function that generates content based on the provided prompt and desired length.
 * - ContentGenerationInput - The input type for the generateContent function.
 * - ContentGenerationOutput - The return type for the generateContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentGenerationInputSchema = z.object({
  prompt: z.string().describe('The prompt for generating content.'),
  desiredLength: z
    .string()
    .describe(
      'The desired length of the content (short, medium, or long). Defaults to medium.'
    )
    .optional(),
});
export type ContentGenerationInput = z.infer<typeof ContentGenerationInputSchema>;

const ContentGenerationOutputSchema = z.object({
  content: z.string().describe('The generated content.'),
});
export type ContentGenerationOutput = z.infer<typeof ContentGenerationOutputSchema>;

export async function generateContent(
  input: ContentGenerationInput
): Promise<ContentGenerationOutput> {
  return generateContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'contentGenerationPrompt',
  input: {schema: ContentGenerationInputSchema},
  output: {schema: ContentGenerationOutputSchema},
  prompt: `You are a content creation assistant. Generate content based on the following prompt, following requested length:

Prompt: {{{prompt}}}
Length: {{{desiredLength}}}`,
});

const generateContentFlow = ai.defineFlow(
  {
    name: 'generateContentFlow',
    inputSchema: ContentGenerationInputSchema,
    outputSchema: ContentGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
