import React from 'react';
import { Calendar, MapPin, Users, ArrowRight, Target, Globe2, BookOpen, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/sections/header';

const missionStats = [
  { icon: Globe2, label: "Regional Impact", value: "15+ Countries" },
  { icon: Users, label: "Leaders Trained", value: "500+" },
  { icon: Target, label: "Policy Initiatives", value: "35+" },
  { icon: BookOpen, label: "Educational Programs", value: "12" }
];

export default function MissionPage() {
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
                <span className="text-[#E44A2C]">MISSION</span>
              </h1>
              <div className="w-16 h-1 bg-[#E44A2C] mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Strengthening democratic institutions and fostering democratic values across 
                the Asia-Pacific region through education, dialogue, and collaboration.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden mx-auto shadow-2xl border-4 border-white">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0a81aefa-006b-45bc-86ef-4ca6a005b03e-democracyincubator-org/assets/images/mission-image-2.png"
                  alt="Democracy in action"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Stats */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {missionStats.map((stat, index) => (
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

      {/* Core Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6">
          <blockquote className="text-3xl lg:text-4xl italic text-[#E44A2C] leading-relaxed font-light text-center mb-12">
            "The Asia-Pacific Democracy Incubator is dedicated to strengthening democratic institutions 
            and fostering democratic values across the Asia-Pacific region through education, dialogue, and collaboration."
          </blockquote>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-[#E44A2C] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              We believe the foundation of strengthening democratic governance in the region is to build a network 
              of legislative professionals and to partner with future leaders. The future generation holds the key 
              to securing sustainable democracy in a region where democracy is often threatened.
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Education that can amplify their role in society through inclusion of diverse perspectives and 
              fostering the next generation of democratic leaders is what we believe in. The Asia-Pacific Democracy 
              Incubator is an international, non-partisan platform that aims to build a welcoming community for 
              the next generation to be critical, diverse, and innovative leaders of democracy.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Achieve This
            </h2>
            <div className="w-16 h-1 bg-[#E44A2C] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our mission is built on three fundamental pillars that guide all our programs and initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Card className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E44A2C] to-[#d63d25] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Strengthening Democratic Alliance
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Build and sustain a network of legislative and policy-making professionals dedicated to fostering 
                  regional cooperation, ensuring mutual understanding, and leveraging unique experiences to share 
                  innovative legislative solutions from diverse perspectives.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="bg-gradient-to-br from-[#E44A2C] to-[#d63d25] border-none text-white group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black text-2xl font-bold">2</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-center">
                  Cultivating Young Leaders
                </h3>
                
                <p className="text-white text-opacity-90 text-sm leading-relaxed text-center">
                  Engage and empower young leaders by providing educational opportunities and foundations of 
                  democratic governance through sharing best practices in transparency, accountability, and 
                  citizen engagement with a focus on involving emerging leaders.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#E44A2C] to-[#d63d25] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Continuous Learning & Development
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  Provide ongoing leadership development fellowship that fosters networks and mentorships for 
                  next generations to become long-term contributors of democracy, engaging young leaders to be 
                  committed to their civic duties as democratic citizens.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(228,74,44,0.1)_50%,transparent_75%)]"></div>
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Visual */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#E44A2C] to-[#d63d25] flex items-center justify-center mx-auto shadow-2xl border-4 border-white border-opacity-20">
                <div className="text-center text-white">
                  <div className="text-7xl font-bold mb-4 bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent">2024</div>
                  <div className="text-2xl font-semibold tracking-wider">FOUNDED</div>
                  <div className="mt-4 w-16 h-0.5 bg-white bg-opacity-60 mx-auto"></div>
                </div>
              </div>
            </div>
            
            {/* Story Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-white bg-opacity-10 rounded-full mb-6">
                <span className="text-[#E44A2C] font-semibold text-sm uppercase tracking-wide">Our Journey</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
                OUR STORY
              </h2>
              <div className="w-16 h-1 bg-[#E44A2C] mb-8"></div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded in 2024, the Asia-Pacific Democracy Incubator emerged from recognition that the region 
                  needed a dedicated platform for nurturing democratic leadership and fostering cross-border 
                  collaboration among emerging civic leaders.
                </p>
                
                <p className="text-base text-gray-400 leading-relaxed">
                  Our founders, democracy advocates and educators from across the Asia-Pacific, saw the need for 
                  innovative educational programs that could bridge cultural divides while strengthening democratic 
                  institutions. What started as a small initiative has grown into a comprehensive platform reaching 
                  hundreds of future leaders.
                </p>
                
                <blockquote className="border-l-4 border-[#E44A2C] pl-6">
                  <p className="text-xl italic text-[#E44A2C] leading-relaxed font-light">
                    "Democracy is not a spectator sport. It requires active participation, continuous learning, 
                    and unwavering commitment to the principles of freedom, equality, and justice."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <Heart className="w-12 h-12 text-[#E44A2C] mx-auto mb-6" />
          
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Our Vision for the Future
          </h2>
          <div className="w-16 h-1 bg-[#E44A2C] mx-auto mb-12"></div>
          
          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              We envision an Asia-Pacific region where democratic institutions are resilient, inclusive, 
              and responsive to the needs of all citizens. Our programs continue to evolve, incorporating 
              new technologies and methodologies to ensure participants receive the most relevant and 
              impactful training possible.
            </p>
            
            <p className="text-base leading-relaxed">
              Through our growing network of alumni and partners, we're building bridges across borders, 
              cultures, and generations. Together, we're working toward a future where democracy thrives 
              through the active participation of informed, committed, and collaborative leaders.
            </p>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-3 text-[#E44A2C] font-medium text-lg">
            <span>Join Our Mission</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </section>
    </div>
  );
}