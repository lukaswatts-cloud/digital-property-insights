import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-muted-foreground">Fill out the form or contact us via the details below.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-md">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-md">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                     <a href="mailto:hello@dpi.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@digitalproperty.insights
                    </a>
                  </div>
                </div>
                 <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground p-3 rounded-md">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">
                      123 Tech Avenue, Suite 100<br />
                      Innovation City, 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="p-8 border rounded-lg bg-background shadow-sm">
                 <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
