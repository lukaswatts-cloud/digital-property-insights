"use client";

import { ValuationReport } from '@/ai/flows/valuvista-flow';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AreaChart, BarChart, LineChart, TrendingUp, Home, Building, FileText } from 'lucide-react';
import { Bar, BarChart as RechartsBarChart, Line, LineChart as RechartsLineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Area, AreaChart as RechartsAreaChart } from 'recharts';
import { ChartTooltip, ChartTooltipContent, ChartContainer } from '@/components/ui/chart';
import { Badge } from '@/components/ui/badge';

const formatCurrency = (value: number) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);

export function ValuationReportDisplay({ report }: { report: ValuationReport }) {
    
  const chartConfig = {
    price: {
      label: "Median Price",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle>AI Valuation Summary</CardTitle>
                    <CardDescription>AI-powered estimated market value for the property.</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-secondary">
            <h3 className="text-sm font-medium text-muted-foreground">Estimated Value</h3>
            <p className="text-3xl font-bold text-primary">{formatCurrency(report.estimatedValue)}</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary">
            <h3 className="text-sm font-medium text-muted-foreground">Value Range</h3>
            <p className="text-2xl font-semibold">{formatCurrency(report.valueRange.min)} - {formatCurrency(report.valueRange.max)}</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary">
            <h3 className="text-sm font-medium text-muted-foreground">Confidence</h3>
            <p className="text-2xl font-semibold">{Math.round(report.confidenceScore * 100)}%</p>
            <Badge variant={report.confidenceScore > 0.8 ? "default" : "secondary"}>
              {report.confidenceScore > 0.8 ? 'High' : report.confidenceScore > 0.6 ? 'Medium' : 'Low'}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Home className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle>Property Details</CardTitle>
                        <CardDescription>Key attributes of the subject property.</CardDescription>
                    </div>
                </div>
            </CardHeader>
          <CardContent className="space-y-4 text-sm">
             <div className="flex justify-between"><span>Bedrooms:</span> <span className="font-medium">{report.propertyDetails.bedrooms}</span></div>
             <div className="flex justify-between"><span>Bathrooms:</span> <span className="font-medium">{report.propertyDetails.bathrooms}</span></div>
             <div className="flex justify-between"><span>Area (sqm):</span> <span className="font-medium">{report.propertyDetails.squareMeters}</span></div>
             <div className="flex justify-between"><span>Year Built:</span> <span className="font-medium">{report.propertyDetails.yearBuilt}</span></div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                        <CardTitle>Renovation Analysis</CardTitle>
                        <CardDescription>Summary of renovation history and potential.</CardDescription>
                    </div>
                </div>
            </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{report.renovationAnalysis.summary}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <LineChart className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle>20-Year Suburb Price History</CardTitle>
                    <CardDescription>Median property price trend for the suburb over the last 20 years.</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
                <RechartsAreaChart data={report.priceHistory}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis tickFormatter={(value) => formatCurrency(value as number)} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                    <Area dataKey="price" type="natural" fill="var(--color-price)" fillOpacity={0.4} stroke="var(--color-price)" />
                </RechartsAreaChart>
            </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                <Building className="h-8 w-8 text-primary" />
                <div>
                    <CardTitle>Comparable Sales</CardTitle>
                    <CardDescription>Recent sales of similar properties in the area.</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Address</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Date</TableHead>
                <TableHead className="text-right">Beds</TableHead>
                <TableHead className="text-right">Baths</TableHead>
                <TableHead className="text-right">sqm</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {report.comparableSales.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{sale.address}</TableCell>
                  <TableCell className="text-right">{formatCurrency(sale.price)}</TableCell>
                  <TableCell className="text-right">{new Date(sale.date).toLocaleDateString('en-AU')}</TableCell>
                  <TableCell className="text-right">{sale.bedrooms}</TableCell>
                  <TableCell className="text-right">{sale.bathrooms}</TableCell>
                  <TableCell className="text-right">{sale.squareMeters}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
