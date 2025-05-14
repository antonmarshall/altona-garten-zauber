import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { useToast } from './ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen haben.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().min(6, {
    message: "Telefonnummer muss mindestens 6 Zeichen haben.",
  }),
  message: z.string().min(10, {
    message: "Nachricht muss mindestens 10 Zeichen haben.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Anfrage gesendet!",
      description: "Vielen Dank für Ihre Nachricht. Wir melden uns umgehend bei Ihnen.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Kontakt</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-700">
          Haben Sie Fragen oder wünschen eine Beratung? Kontaktieren Sie uns - wir freuen uns auf Ihre Anfrage!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-garden-primary">Schreiben Sie uns</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Ihr Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input placeholder="Ihre E-Mail" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input placeholder="Ihre Telefonnummer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachricht</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage" 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="btn-primary w-full">Nachricht senden</Button>
              </form>
            </Form>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6 text-garden-primary">Kontaktdaten</h3>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
              <div className="flex items-start mb-4">
                <Phone className="mr-4 text-garden-primary" />
                <div>
                  <h4 className="font-medium text-garden-primary mb-1">Telefon</h4>
                  <p>(040) 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Mail className="mr-4 text-garden-primary" />
                <div>
                  <h4 className="font-medium text-garden-primary mb-1">E-Mail</h4>
                  <p>info@altona-garten-zauber.de</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <MapPin className="mr-4 text-garden-primary" />
                <div>
                  <h4 className="font-medium text-garden-primary mb-1">Adresse</h4>
                  <p>Musterstraße 123<br />22765 Hamburg-Altona</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="mr-4 text-garden-primary" />
                <div>
                  <h4 className="font-medium text-garden-primary mb-1">Öffnungszeiten</h4>
                  <p>Mo-Fr: 8:00 - 17:00 Uhr<br />Sa: Nach Vereinbarung</p>
                </div>
              </div>
            </div>
            
            <div className="bg-garden-yellow/20 p-6 rounded-lg border border-garden-yellow/30">
              <h4 className="font-serif font-semibold mb-4 text-garden-primary text-lg">Gartenberatung vereinbaren</h4>
              <p className="mb-4">Möchten Sie einen Termin für eine kostenlose Erstberatung in Ihrem Garten vereinbaren?</p>
              <Button className="bg-garden-yellow text-garden-primary hover:bg-garden-yellow/90 transition-colors rounded-full px-6 py-3 font-medium shadow-md hover:shadow-lg w-full">
                Garten-Termin buchen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
