import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle, Lightbulb, Target, Handshake } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const storyImage = PlaceHolderImages.find(img => img.id === 'about-us-story');
const teamMember1 = PlaceHolderImages.find(img => img.id === 'team-member-1');
const teamMember2 = PlaceHolderImages.find(img => img.id === 'team-member-2');
const teamMember3 = PlaceHolderImages.find(img => img.id === 'team-member-3');

const team = [
  {
    name: "Alex Johnson",
    title: "Founder & CEO",
    avatar: teamMember1,
    fallback: "AJ",
  },
  {
    name: "Maria Garcia",
    title: "Head of Engineering",
    avatar: teamMember2,
    fallback: "MG",
  },
  {
    name: "David Chen",
    title: "Lead Data Scientist",
    avatar: teamMember3,
    fallback: "DC",
  },
];

const values = [
  { icon: <Lightbulb className="h-6 w-6 text-primary" />, text: "Innovation at our core" },
  { icon: <CheckCircle className="h-6 w-6 text-primary" />, text: "Unwavering commitment to accuracy" },
  { icon: <Target className="h-6 w-6 text-primary" />, text: "Customer-centric solutions" },
  { icon: <Handshake className="h-6 w-6 text-primary" />, text: "Integrity and transparency in all we do" },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Digital Property Insights</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're a team of technologists, data scientists, and real estate experts passionate about bringing clarity and intelligence to the property market.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2020, Digital Property Insights was born from a simple observation: the real estate industry was ripe for disruption. Decisions worth millions were being made with outdated tools and incomplete data.
            </p>
            <p className="mt-4 text-muted-foreground">
              We assembled a team dedicated to solving this problem by leveraging the power of artificial intelligence and big data. Our goal is to empower everyone—from individual homeowners to large investment firms—with the insights they need to navigate the complexities of the property market with confidence.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            {storyImage && (
              <Image
                src={storyImage.imageUrl}
                alt={storyImage.description}
                width={600}
                height={400}
                className="object-cover"
                data-ai-hint={storyImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-8">
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">To democratize real estate data and provide powerful, intuitive tools that enable smarter property decisions for everyone.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">To become the world's most trusted platform for real estate intelligence, driving a more efficient, transparent, and accessible property market.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The brilliant minds behind our innovative technology.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    {member.avatar && <AvatarImage src={member.avatar.imageUrl} alt={member.name} />}
                    <AvatarFallback>{member.fallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
           <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our work and culture.
            </p>
          </div>
          <div className="mt-12 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-background">
                {value.icon}
                <span className="font-medium">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
