'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Zod Schema for Suburb Analytics
const SuburbAnalyticsSchema = z.object({
    demographics: z.array(z.object({
        year: z.number(),
        population: z.number(),
        ageDistribution: z.object({
            "0-19": z.number(),
            "20-39": z.number(),
            "40-59": z.number(),
            "60+": z.number(),
        }),
    })),
    crime: z.array(z.object({
        year: z.number(),
        totalIncidents: z.number(),
        incidentsByType: z.object({
            theft: z.number(),
            assault: z.number(),
            propertyDamage: z.number(),
            other: z.number(),
        }),
    })),
    electionResults: z.array(z.object({
        year: z.number(),
        alp: z.number().describe('Australian Labor Party'),
        lnp: z.number().describe('Liberal/National Coalition'),
        grn: z.number().describe('The Greens'),
        oth: z.number().describe('Other'),
    })),
});
export type SuburbAnalytics = z.infer<typeof SuburbAnalyticsSchema>;

// Zod Schema for Valuation Report
const ValuationReportSchema = z.object({
    estimatedValue: z.number().describe('The AI-estimated market value of the property.'),
    valueRange: z.object({
        min: z.number(),
        max: z.number(),
    }).describe('The lower and upper bounds of the estimated value.'),
    confidenceScore: z.number().min(0).max(1).describe('A score from 0 to 1 indicating the AI\'s confidence in its valuation.'),
    propertyDetails: z.object({
        bedrooms: z.number(),
        bathrooms: z-number(),
        squareMeters: z.number(),
        yearBuilt: z.number(),
    }),
    comparableSales: z.array(z.object({
        address: z.string(),
        price: z.number(),
        date: z.string().describe('In YYYY-MM-DD format.'),
        bedrooms: z.number(),
        bathrooms: z.number(),
        squareMeters: z.number(),
    })).describe('A list of at least 5 recent, comparable property sales in the area.'),
    priceHistory: z.array(z.object({
        year: z.number(),
        price: z.number(),
    })).describe('A 20-year history of the median property price for the suburb.'),
    renovationAnalysis: z.object({
        summary: z.string().describe('A brief, engaging summary of the property\'s renovation potential and history.'),
    }).describe('Analysis of potential and historical renovations.'),
});

export type ValuationReport = z.infer<typeof ValuationReportSchema>;

const ValuationInputSchema = z.object({
    address: z.string(),
    photoDataUri: z.string().optional(),
});
export type ValuationInput = z.infer<typeof ValuationInputSchema>;

const analyticsPrompt = ai.definePrompt({
    name: 'suburbAnalyticsPrompt',
    input: { schema: z.object({ address: z.string() }) },
    output: { schema: SuburbAnalyticsSchema },
    prompt: `Generate a 20-year time-series dataset for the suburb of the following Australian address: {{{address}}}.

You must provide data for demographics (population, age distribution), crime statistics (total incidents, types of incidents), and federal election results (voting percentages for major parties: ALP, LNP, GRN, OTH).

The data must span the last 20 years, with one entry per year. Ensure the data is plausible and reflects realistic trends for an Australian suburb. Adhere strictly to the JSON output schema.`,
});

const valuationPrompt = ai.definePrompt({
    name: 'propertyValuationPrompt',
    input: { schema: ValuationInputSchema },
    output: { schema: ValuationReportSchema },
    tools: [],
    prompt: `You are ValuVista, an expert AI real estate analyst for the Australian market. Provide a comprehensive valuation report for the property at this address: {{{address}}}.

Key Instructions:
1.  **Renovation Grounding**: Your primary task is to find real-world renovation history. Use the Google Search tool to find verifiable building permits or development applications (DAs) from official Australian local council websites for the given address. If you find any, mention them in the renovation summary. If you cannot find any, state that no public permits were found and base the renovation analysis on the property's other details.
2.  **Plausible Data Synthesis**: For all other fields (e.g., property details, comparable sales, price history), synthesize realistic and plausible data. Create a compelling and coherent report.
3.  **Image Analysis (If provided)**: If a photo is included, analyze it for features like architectural style, condition, and notable amenities (e.g., "modern kitchen," "swimming pool," "well-maintained garden") and factor these observations into your valuation and summaries.
{{#if photoDataUri}}
Photo of the property: {{media url=photoDataUri}}
{{/if}}
Adhere strictly to the JSON output schema.`,
});

const analyticsFlow = ai.defineFlow(
    {
        name: 'analyticsFlow',
        inputSchema: z.object({ address: z.string() }),
        outputSchema: SuburbAnalyticsSchema,
    },
    async (input) => {
        const { output } = await analyticsPrompt(input);
        return output!;
    }
);

const valuationFlow = ai.defineFlow(
    {
        name: 'valuationFlow',
        inputSchema: ValuationInputSchema,
        outputSchema: ValuationReportSchema,
    },
    async (input) => {
        const { output } = await valuationPrompt(input);
        return output!;
    }
);

export async function getSuburbAnalytics(address: string): Promise<SuburbAnalytics> {
    return await analyticsFlow({ address });
}

export async function getValuationReport(input: ValuationInput): Promise<ValuationReport> {
    return await valuationFlow(input);
}
