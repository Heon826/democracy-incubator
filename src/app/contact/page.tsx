"use client";

import React, { useState } from 'react';
import Header from '@/components/sections/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Users, Instagram, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      category: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', category: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container py-20">
        {/* Learn More Section */}
        <section className="mb-20">
          <h2 className="mb-16 text-center">LEARN MORE</h2>
          
          <div className="max-w-2xl mx-auto mb-16">
            {/* Contact Form */}
            <Card className="border border-[#e5e5e5]">
              <CardContent className="p-8">
                <h3 className="mb-8 text-[#333333]">GET IN TOUCH</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">Thank you for your message! We'll get back to you soon.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[#333333] font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-[#e5e5e5] focus:border-[#e44a2c] focus:ring-1 focus:ring-[#e44a2c]"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[#333333] font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-[#e5e5e5] focus:border-[#e44a2c] focus:ring-1 focus:ring-[#e44a2c]"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="category" className="text-[#333333] font-medium">Category *</Label>
                    <Select onValueChange={handleSelectChange} value={formData.category}>
                      <SelectTrigger className="mt-2 border-[#e5e5e5] focus:border-[#e44a2c] focus:ring-1 focus:ring-[#e44a2c]">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-[#333333] font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2 border-[#e5e5e5] focus:border-[#e44a2c] focus:ring-1 focus:ring-[#e44a2c]"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-[#333333] font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-2 border-[#e5e5e5] focus:border-[#e44a2c] focus:ring-1 focus:ring-[#e44a2c] resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e44a2c] hover:bg-[#d63821] text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* General Inquiries */}
            <div className="flex items-start gap-4 mt-8 p-6 bg-gray-50 rounded-lg">
              <Mail className="w-6 h-6 text-[#e44a2c] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#333333] mb-1">General Inquiries</p>
                <p className="text-[#666666]">info@apdemocracyincubator.org</p>
              </div>
            </div>
          </div>

          {/* Partnerships and Social Media */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Partnership Card - New Design */}
              <div className="bg-gradient-to-br from-[#e44a2c] to-[#d63821] rounded-xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 mr-4" />
                  <h4 className="text-2xl font-bold">Partnerships</h4>
                </div>
                <p className="text-white/90 mb-6 leading-relaxed text-lg">
                  Join us in advancing democratic values across the Asia-Pacific region through strategic collaborations.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Academic Collaborations
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Institutional Partnerships
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Democracy Initiatives
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <Card className="border border-[#e5e5e5]">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center gap-6 mb-8">
                    <a 
                      href="https://www.instagram.com/apdemocracyinc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-[#e44a2c]/10 rounded-full hover:bg-[#e44a2c]/20 transition-colors cursor-pointer"
                    >
                      <Instagram className="w-8 h-8 text-[#e44a2c]" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/asia-pacific-democracy-incubator/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-[#e44a2c]/10 rounded-full hover:bg-[#e44a2c]/20 transition-colors cursor-pointer"
                    >
                      <Linkedin className="w-8 h-8 text-[#e44a2c]" />
                    </a>
                  </div>
                  <h4 className="text-xl font-semibold text-[#333333] mb-4">Follow Us</h4>
                  <p className="text-[#666666] leading-relaxed">
                    Stay connected for the latest updates and democracy initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}