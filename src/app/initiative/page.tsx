import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/sections/header';
import RegisterButton from '@/components/sections/register-button';

const initiatives = [
  {
    title: "Tech Rivalry & Democratic Futures",
    subtitle: "Chips, Chains, and Choices",
    date: "September 2025",
    participants: "50 Tech Leaders & Students",
    format: "Hybrid Program",
    number: "01",
    description: "U.S.–China semiconductor race and why your phone, TikTok, and future job depend on it. How supply chains (chips, AI, cybersecurity) are shaping democracy and freedom in Asia.",
    studentAngle: "What happens to your digital life if tech standards are set by Beijing vs Washington?",
    featured: true
  },
  {
    title: "Digital Authoritarianism & Information Integrity",
    subtitle: "Memes, Deepfakes, and Elections",
    date: "December 2025",
    participants: "75 Digital Citizens", 
    format: "Interactive Workshop",
    number: "02",
    description: "How AI-generated disinformation is transforming political campaigns. Taiwan, Philippines, and Korea as case studies of foreign interference.",
    studentAngle: "Could your vote be hacked by a meme? What role can students play in digital literacy?",
    featured: false
  },
  {
    title: "Economic Statecraft & Democracy",
    subtitle: "Votes, Jobs, and Chips",
    date: "March 2026",
    participants: "60 Policy Students",
    format: "Policy Simulation",
    number: "03", 
    description: "Elections as battlegrounds for economic choices: trade wars, chips investments, sanctions. How governments use tech investment and economic pressure to sway politics.",
    studentAngle: "How do economic strategies decide not just national policy but your career path?",
    featured: false
  },
  {
    title: "Security, Alliances & Democratic Order",
    subtitle: "War Games and Democracy",
    date: "June 2026",
    participants: "40 Future Leaders",
    format: "Cabinet Simulation",
    number: "04",
    description: "How security crises (Taiwan Strait, North Korea, South China Sea) intersect with democratic decision-making. U.S.–Japan–Korea trilateralism, Quad, and youth perspectives on peace and security.",
    studentAngle: "Mini policy simulation/wargame — if you were in the cabinet, how would you decide?",
    featured: false
  }
];

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Visual Elements */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#E44A2C] opacity-10"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 rounded-full bg-[#E44A2C] opacity-5"></div>
        
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                UPCOMING<br />
                <span className="text-[#E44A2C]">INITIATIVES</span>
              </h1>
              <div className="w-16 h-1 bg-[#E44A2C] mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join our groundbreaking programs exploring tech rivalry, digital democracy, and security challenges 
                shaping the Asia-Pacific region.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-[#F5F5F5] mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#E44A2C] mb-2">4</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Active Programs</div>
                  <div className="text-xs text-gray-500 mt-2">2025-2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Initiative */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container max-w-6xl mx-auto px-6">
          {initiatives.filter(initiative => initiative.featured).map((initiative, index) => (
            <Card key={index} className="bg-white border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="p-12 lg:p-16">
                    <div className="text-[#E44A2C] text-sm font-medium italic mb-4 uppercase tracking-wider">
                      Featured Program • {initiative.number}
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">
                      {initiative.title}
                    </h2>
                    
                    <div className="text-xl text-[#E44A2C] mb-6 italic font-medium">
                      💡 "{initiative.subtitle}"
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {initiative.description}
                    </p>
                    
                    <div className="bg-[#F5F5F5] p-4 rounded-lg mb-8">
                      <div className="text-sm font-medium text-gray-700 mb-2">Student Perspective:</div>
                      <div className="text-gray-600 italic">{initiative.studentAngle}</div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-gray-500">
                        <Calendar className="w-5 h-5 text-[#E44A2C]" />
                        <span className="font-medium">{initiative.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500">
                        <Users className="w-5 h-5 text-[#E44A2C]" />
                        <span className="font-medium">{initiative.participants}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-500">
                        <MapPin className="w-5 h-5 text-[#E44A2C]" />
                        <span className="font-medium">{initiative.format}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-2 text-[#E44A2C] font-medium hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Visual Side */}
                  <div className="bg-gradient-to-br from-[#E44A2C] to-[#d63d25] p-12 lg:p-16 flex items-center justify-center relative">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold mb-4 opacity-90">01</div>
                      <div className="text-lg uppercase tracking-wider opacity-80">Tech &</div>
                      <div className="text-lg uppercase tracking-wider opacity-80">Democracy</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Initiatives */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Programs
            </h2>
            <div className="w-16 h-1 bg-[#E44A2C] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.filter(initiative => !initiative.featured).map((initiative, index) => (
              <Card key={index} className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-[#E44A2C] text-3xl font-bold mb-4 group-hover:scale-110 transition-transform duration-200">
                    {initiative.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {initiative.title}
                  </h3>
                  
                  <div className="text-sm text-[#E44A2C] mb-4 italic font-medium">
                    💡 "{initiative.subtitle}"
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {initiative.description}
                  </p>
                  
                  <div className="bg-[#F9F9F9] p-3 rounded mb-6">
                    <div className="text-xs font-medium text-gray-700 mb-1">Student Focus:</div>
                    <div className="text-xs text-gray-600 italic">{initiative.studentAngle}</div>
                  </div>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{initiative.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      <span>{initiative.participants}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{initiative.format}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#E44A2C] mb-2">225+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Total Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#E44A2C] mb-2">4</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Strategic Themes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#E44A2C] mb-2">21</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">Months Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Navigate Tech & Democracy?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our cutting-edge programs exploring how technology, economics, and security shape 
            democratic governance in the Asia-Pacific region.
          </p>
          <RegisterButton />
        </div>
      </section>
    </div>
  );
}