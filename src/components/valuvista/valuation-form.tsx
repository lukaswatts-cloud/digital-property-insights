"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Upload } from 'lucide-react';
import type { ValuationInput } from '@/ai/flows/valuvista-flow';

const formSchema = z.object({
  address: z.string().min(10, { message: "Please enter a full address." }),
  photo: z.instanceof(File).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ValuationFormProps {
  onSubmit: (data: ValuationInput) => void;
  isLoading: boolean;
}

export function ValuationForm({ onSubmit, isLoading }: ValuationFormProps) {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      form.setValue("photo", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (values: FormValues) => {
    let photoDataUri: string | undefined = undefined;
    if (values.photo) {
       photoDataUri = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(values.photo!);
      });
    }
    onSubmit({ address: values.address, photoDataUri });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Details</CardTitle>
        <CardDescription>Enter the address of the property you want to value.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Address</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 42 Wallaby Way, Sydney, NSW" {...field} />
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
                    <div className="flex items-center gap-4">
                      <Button asChild variant="outline" className="relative">
                        <div>
                           <Upload className="mr-2 h-4 w-4" />
                           <span>Upload Image</span>
                           <input 
                             type="file" 
                             accept="image/*"
                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                             onChange={handlePhotoChange}
                           />
                        </div>
                      </Button>
                       {photoPreview && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={photoPreview} alt="Property preview" className="h-16 w-16 object-cover rounded-md border" />
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Report...
                </>
              ) : (
                'Generate Valuation Report'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}