import React from 'react';
import { Users, Award, Globe2, BookOpen, Briefcase, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/sections/header';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Seungheon Lee",
    role: "Co-Founder", 
    initials: "SL",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755790777416-98qg8a7135g.png",
    expertise: ["Democratic Leadership", "International Relations", "Youth Engagement"],
    background: "Student at University of Michigan"
  },
  {
    name: "Seongbeen Bae",
    role: "Program Manager",
    initials: "SB",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755790807992-brg3zc6sg35.png",
    expertise: ["Program Management", "Educational Design", "Event Coordination"],
    background: "Student at Georgetown University"
  },
  {
    name: "Brandon Lee",
    role: "Co-Founder",
    initials: "BL",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755790821239-6e6w3co9lex.png",
    expertise: ["Democratic Innovation", "Cross-cultural Dialogue", "Strategic Planning"],
    background: "Student at Yale University"
  },
  {
    name: "Jeewon Kim",
    role: "Communications Manager",
    initials: "JK",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1755790830627-xgl8t6048y.png",
    expertise: ["Strategic Communications", "Public Relations", "Community Engagement"],
    background: "Student at Yonsei University"
  }
];

const teamStats = [
  { icon: Users, label: "Team Members", value: "4+" },
  { icon: Globe2, label: "Countries Represented", value: "3" },
  { icon: Award, label: "Universities Connected", value: "4" },
  { icon: BookOpen, label: "Programs Developed", value: "5+" }
];

export default function TeamPage() {
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
                OUR<br />
                <span className="text-[#E44A2C]">TEAM</span>
              </h1>
              <div className="w-16 h-1 bg-[#E44A2C] mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Meet the passionate student leaders driving democratic innovation and international 
                cooperation across the Asia-Pacific region.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-[#F5F5F5] mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#E44A2C] mb-2">4</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wider">Core Members</div>
                  <div className="text-xs text-gray-500 mt-2">From 3 Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
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

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <div className="w-16 h-1 bg-[#E44A2C] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8">
                  {/* Profile Photo */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto group-hover:scale-105 transition-transform duration-300 border-4 border-[#E44A2C] border-opacity-20">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority={index < 3}
                      />
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-[#E44A2C] font-semibold text-sm uppercase tracking-wider mb-3">{member.role}</p>
                  </div>
                  
                  {/* Background */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">Education</div>
                    <div className="text-xs text-gray-600">{member.background}</div>
                  </div>
                  
                  {/* Expertise Tags */}
                  <div>
                    <div className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">Focus Areas</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-[#F5F5F5] text-gray-600 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Mission Statement */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <Heart className="w-12 h-12 text-[#E44A2C] mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              United by Purpose
            </h2>
            <div className="w-16 h-1 bg-[#E44A2C] mx-auto mb-8"></div>
          </div>
          
          <blockquote className="text-2xl italic text-[#E44A2C] leading-relaxed mb-8 font-light">
            "Our diverse team of student leaders brings fresh perspectives and innovative approaches 
            to democratic engagement and international cooperation."
          </blockquote>
          
          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              As students from prestigious universities across the United States and South Korea, our team 
              combines academic excellence with practical experience in democratic leadership. We represent 
              the next generation of leaders committed to strengthening democratic institutions.
            </p>
            
            <p className="text-base leading-relaxed">
              Together, we work to create meaningful opportunities for cross-cultural dialogue, democratic 
              education, and leadership development. Our initiatives focus on building bridges between 
              diverse communities and fostering understanding across the Asia-Pacific region.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              University Partnerships
            </h2>
            <div className="w-16 h-1 bg-[#E44A2C] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team's diverse educational backgrounds enable strong partnerships with leading 
              universities across the Asia-Pacific region.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* University Partnerships */}
            <Card className="bg-gradient-to-br from-[#E44A2C] to-[#d63d25] border-none text-white">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-3">US Universities</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Strong connections with Notre Dame, Yale, and Georgetown Universities 
                  provide access to diverse academic resources and networks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Globe2 className="w-12 h-12 mx-auto mb-4 text-[#E44A2C]" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Korean Universities</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Partnership with Yonsei University strengthens our regional presence 
                  and understanding of East Asian perspectives.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-[#E44A2C]" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">Student Networks</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Extensive networks across multiple campuses facilitate broad 
                  participation in our democratic leadership programs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}