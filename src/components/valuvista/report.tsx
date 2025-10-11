"use client";

import type { ValuationReport } from '@/ai/flows/valuvista-flow';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Home, Bath, Square, Calendar, CheckCircle } from 'lucide-react';

interface ValuationReportDisplayProps {
  report: ValuationReport;
}

const formatCurrency = (value: number) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
const formatSquareMeters = (value: number) => `${value.toLocaleString()} m²`;

export function ValuationReportDisplay({ report }: ValuationReportDisplayProps) {
  const confidenceColor = report.confidenceScore > 0.85 ? 'bg-green-500' : report.confidenceScore > 0.7 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="space-y-8">
      <Card className="bg-primary text-primary-foreground text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Estimated Market Value</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-5xl font-bold">{formatCurrency(report.estimatedValue)}</p>
          <p className="mt-2 text-primary-foreground/80 text-lg">
            {formatCurrency(report.valueRange.min)} - {formatCurrency(report.valueRange.max)}
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Confidence Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-muted rounded-full h-4">
              <div className={`h-4 rounded-full ${confidenceColor}`} style={{ width: `${report.confidenceScore * 100}%` }} />
            </div>
            <p className="text-center mt-2 text-2xl font-semibold">{(report.confidenceScore * 100).toFixed(0)}%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Property Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2"><Home className="w-4 h-4 text-muted-foreground" /> <span>{report.propertyDetails.bedrooms} beds</span></div>
            <div className="flex items-center gap-2"><Bath className="w-4 h-4 text-muted-foreground" /> <span>{report.propertyDetails.bathrooms} baths</span></div>
            <div className="flex items-center gap-2"><Square className="w-4 h-4 text-muted-foreground" /> <span>{formatSquareMeters(report.propertyDetails.squareMeters)}</span></div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-muted-foreground" /> <span>Built {report.propertyDetails.yearBuilt}</span></div>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Renovation Analysis</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{report.renovationAnalysis.summary}</p>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Suburb Price History (20 years)</CardTitle>
          <CardDescription>Median property price for the suburb over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={report.priceHistory} margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => formatCurrency(value)} />
              <Tooltip formatter={(value: number) => [formatCurrency(value), "Median Price"]} />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comparable Sales</CardTitle>
          <CardDescription>Recently sold properties in the same area.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Address</TableHead>
                <TableHead>Sold Date</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Specs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {report.comparableSales.map((sale, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{sale.address}</TableCell>
                  <TableCell>{new Date(sale.date).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">{formatCurrency(sale.price)}</TableCell>
                  <TableCell className="text-right">{sale.bedrooms}b/{sale.bathrooms}b, {formatSquareMeters(sale.squareMeters)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}