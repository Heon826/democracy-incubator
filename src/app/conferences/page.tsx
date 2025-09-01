import React from 'react';
import { Calendar, Globe, Users, Video, Award, Target, TrendingUp, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/sections/header';
import RegisterButton from '@/components/sections/register-button';

const pastConferences = [
  {
    id: 2,
    title: "Digital Governance & AI Innovation Summit", 
    date: "December 2024",
    participants: 54,
    countries: 4,
    format: "Virtual Conference",
    theme: "Shaping the Future of Democratic Technology",
    description: "Our second major conference brought together leading voices in digital governance and AI innovation. Featuring key speaker Dr. Cha Jiho, current member of the National Assembly, alongside Representative Jake Auchincloss from Massachusetts and AI researcher Kenta Kawashima, the summit explored how artificial intelligence and digital technologies are reshaping democratic processes and governance structures across the Asia-Pacific region.",
    outcomes: [
      "Framework for AI ethics in democratic governance established at Yale University, Boston University, and Yonsei University",
      "Cross-border digital democracy initiatives launched with Harvard, MIT, and Korea University participation",
      "Student-led policy recommendations developed for AI regulation across Stanford, Oxford, and Tokyo University networks"
    ],
    speakers: [
      "Dr. Cha Jiho (Current Member of National Assembly, Republic of Korea)",
      "Rep. Jake Auchincloss (U.S. House of Representatives, Massachusetts)", 
      "Kenta Kawashima (AI Research Specialist)",
      "Digital governance experts from Asia-Pacific region"
    ],
    universities: 5,
    featured: true
  },
  {
    id: 1,
    title: "Intersectional Leadership & Technological Innovation",
    date: "2024",
    participants: 32,
    countries: 3,
    format: "Virtual Forum",
    theme: "Public Health and AI in Democratic Governance",
    description: "Our inaugural conference featured Dr. Cha Jiho, a distinguished speaker bridging medical expertise, WHO experience, and current National Assembly membership. The dialogue explored the intersection of public health and artificial intelligence, demonstrating how professional expertise translates into meaningful public service.",
    outcomes: [
      "Cross-disciplinary dialogue on health AI established at Yale University and Boston University",
      "Student network formed across Yonsei University, Korea University, and UC Irvine campuses",
      "Framework for humanitarian service to political engagement developed with Oxford and Johns Hopkins alumni"
    ],
    speakers: [
      "Dr. Cha Jiho (22nd National Assembly Member, Republic of Korea)",
      "Former WHO Specialist & Public Health Physician",
      "Oxford & Johns Hopkins Alumni"
    ],
    universities: 5,
    featured: false
  }
];

const conferenceStats = [
  { icon: Users, label: "Total Participants", value: "86+" },
  { icon: Globe, label: "Countries Represented", value: "4" },
  { icon: Award, label: "Universities Engaged", value: "15+" },
  { icon: TrendingUp, label: "Student Leaders", value: "86+" }
];

const pastSpeakers = [
  {
    name: "DR. CHA JI HO",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755793200995-2m8fs28n5l8.png",
    role: "National Assembly Member",
    conference: "Featured Speaker"
  },
  {
    name: "DR. LAODE M SYARIF", 
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755793273491-4hsijarp2oi.png",
    role: "Policy Expert",
    conference: "Digital Governance Summit"
  },
  {
    name: "MARJEELA BASIJ-RASIKH",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755793336132-lcwn0w3j68.png", 
    role: "Educational Leader",
    conference: "Innovation Summit"
  }
];

export default function ConferencesPage() {
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
                PAST<br />
                <span className="text-[#E44A2C]">CONFERENCES</span>
              </h1>
              <div className="w-16 h-1 bg-[#E44A2C] mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore our successful conferences that have brought together democratic leaders 
                from across the Asia-Pacific region.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-[#F5F5F5] mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#E44A2C] mb-2">2</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Major Conferences</div>
                  <div className="text-xs text-gray-500 mt-2">Since 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Stats */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {conferenceStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#E44A2C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#E44A2C] mb-2">{stat.value}</div>
                <div className="text-gray-600 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Speakers Showcase */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#E44A2C] opacity-5"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 rounded-full bg-[#E44A2C] opacity-5"></div>
        
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wider">
              PREVIOUS SPEAKERS
            </h2>
            <div className="w-16 h-1 bg-[#E44A2C] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {pastSpeakers.map((speaker, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 mx-auto">
                    <img 
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-full border-2 border-[#E44A2C] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="font-bold text-gray-900 text-lg mb-2 uppercase tracking-wide">
                  {speaker.name}
                </h3>
                <p className="text-gray-600 mb-1 font-medium">{speaker.role}</p>
                <p className="text-[#E44A2C] font-medium text-sm italic">{speaker.conference}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Conferences Summary */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Past Conference Summary
            </h2>
            <div className="w-16 h-1 bg-[#E44A2C] mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {pastConferences.map((conference, index) => (
              <Card key={index} className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Simple Header */}
                    <div className="bg-gradient-to-r from-[#E44A2C] to-[#d63d25] p-6 text-white">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl font-bold">
                          {String(conference.id).padStart(2, '0')}
                        </span>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{conference.participants}</div>
                          <div className="text-xs uppercase tracking-wider opacity-90">Participants</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold leading-tight mb-2">
                        {conference.title}
                      </h3>
                      
                      <p className="text-sm opacity-90 italic">
                        {conference.theme}
                      </p>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {conference.description}
                      </p>
                      
                      {/* Speakers Section */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Key Speakers</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {conference.speakers.map((speaker, speakerIndex) => (
                            <div key={speakerIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <Users className="w-3 h-3 text-[#E44A2C] mt-1 flex-shrink-0" />
                              <span>{speaker}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-[#E44A2C]" />
                          <span>{conference.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-3 h-3 text-[#E44A2C]" />
                          <span>{conference.countries} Countries</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Video className="w-3 h-3 text-[#E44A2C]" />
                          <span>{conference.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-[#E44A2C]" />
                          <span>{conference.universities} Universities</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <div className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">Key Outcomes</div>
                        <ul className="space-y-2">
                          {conference.outcomes.map((outcome, outIndex) => (
                            <li key={outIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <Target className="w-3 h-3 text-[#E44A2C] mt-1 flex-shrink-0" />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Testimonial */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-[#E44A2C] to-[#d63d25] rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-white text-2xl font-bold">💬</span>
            </div>
            
            <blockquote className="text-2xl italic text-[#E44A2C] leading-relaxed mb-8 font-light">
              "The Asia-Pacific Democracy Incubator has successfully created a platform that attracts students from diverse academic backgrounds and encourages critical dialogue about democracy beyond traditional political frameworks."
            </blockquote>
            
            <div className="text-center">
              <p className="font-semibold text-gray-900 mb-1">Conference Alumni</p>
              <p className="text-sm text-gray-600 mb-2">Yale, Boston University, Yonsei & Korea University</p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  86 Participants
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  2024 Cohort
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be part of the next generation of democratic leaders. Register for upcoming conferences 
            and connect with our community of change-makers across the Asia-Pacific region.
          </p>
          <RegisterButton />
        </div>
      </section>
    </div>
  );
}