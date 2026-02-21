import { useState } from 'react';
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_lt2y5qs', 
        'template_e2wsm2g', 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Markandey Krishna Mishra',
        },
        '1O7oioKD4db_Ux_D2'
      );

      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="contact" className="bg-black">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-display uppercase">
              Let's build something <span className="text-zinc-500">amazing.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </p>
            
            <div className="space-y-6 pt-8">
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-blue-400"><Mail size={20}/></div>
                    <div>
                        <p className="text-sm text-zinc-500">Email</p>
                        <p className="text-white">krishnamk2310@gmail.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-green-400"><Phone size={20}/></div>
                    <div>
                        <p className="text-sm text-zinc-500">Phone</p>
                        <p className="text-white">+91-9336186891</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                     <div className="p-3 rounded-full bg-zinc-900 border border-white/5 text-purple-400"><MapPin size={20}/></div>
                    <div>
                        <p className="text-sm text-zinc-500">Location</p>
                        <p className="text-white">Greater Noida / Lucknow, India</p>
                    </div>
                </div>
            </div>
        </div>
            
             {/* Social links removed as per request */}
        
        <div className="bg-zinc-900/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-2">
                       <label className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">Name</label>
                       <Input 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="bg-black/50 border-white/10 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all h-11" 
                        placeholder="John Doe" 
                       />
                   </div>
                   <div className="space-y-2">
                       <label className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">Email</label>
                       <Input 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="bg-black/50 border-white/10 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all h-11" 
                        placeholder="john@example.com" 
                       />
                   </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">Subject</label>
                    <Input 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        required 
                        className="bg-black/50 border-white/10 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all h-11" 
                        placeholder="Project Inquiry" 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs uppercase text-zinc-500 tracking-wider font-semibold">Message</label>
                    <Textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        rows={4} 
                        className="bg-black/50 border-white/10 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none" 
                        placeholder="Tell me about your project..." 
                    />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full bg-white text-black hover:bg-zinc-200 font-medium h-11 shadow-lg shadow-white/5">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : "Send Message"}
                </Button>
            </form>
        </div>
      </div>
      
       <footer className="mt-20 pt-8 border-t border-white/5 text-center text-zinc-600 text-sm">
            © {new Date().getFullYear()} Markandey Krishna Mishra. All rights reserved.
        </footer>
    </Section>
  );
};
