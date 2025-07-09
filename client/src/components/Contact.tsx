import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export default function Contact() {
  const contactRef = useIntersectionObserver();
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      bgColor: 'bg-emerald-500',
      title: 'Email',
      value: 'dhawalmannu@gmail.com'
    },
    {
      icon: 'fab fa-linkedin',
      bgColor: 'bg-blue-500',
      title: 'LinkedIn',
      value: 'linkedin.com/in/dhawalshukl'
    },
    {
      icon: 'fab fa-github',
      bgColor: 'bg-gray-700',
      title: 'GitHub',
      value: 'github.com/DhawalShankar'
    },
    {
      icon: 'fas fa-code',
      bgColor: 'bg-amber-500',
      title: 'LeetCode',
      value: 'leetcode.com/u/dhawalshankar'
    }
  ];

  const availableFor = [
    'Software Development Projects',
    'Web Development Work',
    'Technical Consulting',
    'Learning Collaborations'
  ];

  return (
    <section id="contact" style={{ 
      padding: '80px 24px', 
      background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.4))' 
    }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Get In Touch</h2>
          <div style={{ width: '96px', height: '4px', background: 'linear-gradient(to right, #10b981, #f59e0b)', margin: '0 auto', marginBottom: '24px' }}></div>
          <p style={{ color: '#cbd5e1', fontSize: '18px', maxWidth: '512px', margin: '0 auto' }}>
            Ready to collaborate on exciting projects or discuss opportunities? Let's connect and create something amazing together.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
          {/* Contact Form */}
          <div>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.08)', 
              backdropFilter: 'blur(16px)', 
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px', 
              padding: '32px'
            }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: 'white' }}>Send a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="form-input text-white placeholder-primary-400" 
                              placeholder="Your Name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="form-input text-white placeholder-primary-400" 
                              placeholder="your@email.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="form-input text-white placeholder-primary-400" 
                            placeholder="Project Discussion"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={6}
                            className="form-input text-white placeholder-primary-400 resize-none" 
                            placeholder="Tell me about your project or idea..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="btn-primary w-full px-6 py-4 rounded-lg font-semibold text-lg"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.08)', 
                backdropFilter: 'blur(16px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px', 
                padding: '32px'
              }}>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', color: 'white' }}>Let's Connect</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {contactInfo.map((info, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ 
                        width: '48px', 
                        height: '48px', 
                        background: info.bgColor === 'bg-emerald-500' ? '#10b981' :
                          info.bgColor === 'bg-blue-500' ? '#3b82f6' :
                          info.bgColor === 'bg-gray-700' ? '#374151' :
                          info.bgColor === 'bg-gray-800' ? '#1f2937' :
                          '#f59e0b',
                        borderRadius: '8px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        marginRight: '16px' 
                      }}>
                        <i className={info.icon} style={{ color: 'white' }}></i>
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: 'white' }}>{info.title}</p>
                        <a 
                          href={
                            info.title === 'Email' ? `mailto:${info.value}` :
                            info.title === 'LinkedIn' ? `https://${info.value}` :
                            info.title === 'GitHub' ? `https://${info.value}` :
                            info.title === 'LeetCode' ? `https://${info.value}` :
                            '#'
                          }
                          target={info.title === 'Email' ? '_self' : '_blank'}
                          rel={info.title === 'Email' ? '' : 'noopener noreferrer'}
                          style={{ 
                            color: '#10b981', 
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#34d399'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#10b981'}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ 
                background: 'rgba(255, 255, 255, 0.08)', 
                backdropFilter: 'blur(16px)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px', 
                padding: '32px'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: 'white' }}>Available For</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {availableFor.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      <i className="fas fa-check" style={{ color: '#10b981', marginRight: '12px' }}></i>
                      <span style={{ color: 'white' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
