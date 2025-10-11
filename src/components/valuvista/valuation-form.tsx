"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader, Upload } from 'lucide-react';
import { getValuationReport, ValuationReport, ValuationInput } from '@/ai/flows/valuvista-flow';
import { ValuationReportDisplay } from './report';

const formSchema = z.object({
  address: z.string().min(10, { message: 'Please enter a full property address.' }),
  photo: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

function fileToDataUri(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function ValuationForm() {
  const [report, setReport] = useState<ValuationReport | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setError(null);
    setReport(null);

    try {
      const input: ValuationInput = { address: values.address };
      if (values.photo && values.photo.length > 0) {
        const photoFile = values.photo[0];
        input.photoDataUri = await fileToDataUri(photoFile);
      }
      
      const result = await getValuationReport(input);
      setReport(result);
    } catch (e) {
      console.error(e);
      setError('An error occurred while generating the report. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      form.setValue('photo', event.target.files);
    } else {
      setFileName('');
      form.setValue('photo', null);
    }
  };


  return (
    <div>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Generate Valuation Report</CardTitle>
          <CardDescription>Enter a property address to get started.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Address</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 123 Main St, Sydney, NSW 2000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="photo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Photo (Optional)</FormLabel>
                    <FormControl>
                      <label className="flex items-center gap-4 cursor-pointer text-sm p-3 border border-input rounded-md hover:bg-accent">
                         <Upload className="h-5 w-5 text-muted-foreground" />
                        <span>{fileName || "Upload an image"}</span>
                        <input
                          type="file"
                          className="hidden"
                          accept="image/png, image/jpeg, image/webp"
                          onChange={handleFileChange}
                        />
                      </label>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Generating Report...
                  </>
                ) : (
                  'Get Report'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="mt-8 text-center">
          <Loader className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-2 text-muted-foreground">Analyzing property data, please wait...</p>
        </div>
      )}

      {error && (
        <div className="mt-8 text-center text-destructive">
          <p>{error}</p>
        </div>
      )}

      {report && !isLoading && (
        <div className="mt-12">
          <ValuationReportDisplay report={report} />
        </div>
      )}
    </div>
  );
}