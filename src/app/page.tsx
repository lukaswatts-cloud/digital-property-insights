import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  DollarSign,
  LineChart,
  Home as HomeIcon,
  Wrench,
  BarChart,
  Star,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

const featureCards = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Valuations',
    description: 'Leverage cutting-edge AI for instant, accurate property valuations with ValuVista.',
    link: '/valuvista',
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: 'Renovation ROI Analysis',
    description: 'Plan and budget renovations effectively to maximize your return on investment with RenoScope.',
    link: '/renoscope',
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Market Trend Insights',
    description: 'Stay ahead of the curve with real-time market data and predictive analytics.',
    link: '#',
  },
  {
    icon: <HomeIcon className="h-8 w-8 text-primary" />,
    title: 'Comprehensive Property Data',
    description: 'Access a vast database of property details, historical sales, and neighborhood information.',
    link: '#',
  },
];

const whyChooseUsPoints = [
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: 'Data-Driven Decisions',
    description: 'Make informed choices backed by comprehensive data and advanced analytics.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'User-Centric Design',
    description: 'Our tools are designed to be intuitive and easy to use for professionals and homeowners alike.',
  },
  {
    icon: <Star className="h-10 w-10 text-primary" />,
    title: 'Unmatched Accuracy',
    description: 'Rely on our industry-leading AI models for valuations and forecasts you can trust.',
  },
];

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Real Estate Agent',
    quote: 'ValuVista has transformed how I advise my clients. The speed and accuracy of the valuations are simply unmatched. It\'s a game-changer for my business.',
    avatar: 'SL'
  },
  {
    name: 'Mike R.',
    title: 'Property Investor',
    quote: 'RenoScope is my secret weapon. I can now quickly assess the potential ROI on any renovation project, which has significantly boosted my profits.',
    avatar: 'MR'
  },
  {
    name: 'Jessica Chen',
    title: 'Homeowner',
    quote: 'As a first-time home buyer, the insights from Digital Property Insights gave me the confidence I needed to make a competitive offer. I can\'t imagine going through the process without it.',
    avatar: 'JC'
  },
];

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Unlock the Future of Real Estate
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/90">
            Harness the power of AI for smarter property valuation, investment analysis, and renovation planning.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/#features">Explore Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background" asChild>
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your All-in-One Real Estate Intelligence Platform</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From valuation to renovation, our suite of tools provides the insights you need to succeed.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  {feature.icon}
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={feature.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Digital Property Insights?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We empower you with tools that are not just powerful, but also intelligent and intuitive.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="mt-2 text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Trusted by Industry Leaders</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See what our users are saying about the impact of our platform.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto mt-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar>
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.avatar}`} />
                            <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                      </CardContent>
                      <div className="p-6 pt-0 flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Elevate Your Real Estate Strategy?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Join thousands of professionals who are making smarter, faster, and more profitable decisions with Digital Property Insights.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
