import { Users, Target, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E0F3FF] to-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-[#692528] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3MDU5NTk1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gavel Club Members"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl text-white mb-4">
              Gavel Club Of Kyambogo University
            </h1>
            <p className="text-xl md:text-2xl text-[#FAD45F] mb-8">
              Building Leaders Through Communication and Leadership Skills
            </p>
            <a
              href="/about"
              className="inline-block bg-[#FAD45F] text-[#692528] px-8 py-3 rounded-lg hover:bg-[#f5ca3d] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#692528] mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We are dedicated to helping young people develop communication and
            leadership skills in a supportive and encouraging environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 border-[#692528]/10 hover:border-[#FAD45F] transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-[#FAD45F] rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-[#692528]" />
              </div>
              <CardTitle className="text-[#692528]">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Join a vibrant community of aspiring leaders and communicators
                who support each other's growth and development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#692528]/10 hover:border-[#FAD45F] transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-[#FAD45F] rounded-full flex items-center justify-center mb-4">
                <Target size={32} className="text-[#692528]" />
              </div>
              <CardTitle className="text-[#692528]">Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Develop essential communication, leadership, and critical
                thinking skills through structured programs and activities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#692528]/10 hover:border-[#FAD45F] transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-[#FAD45F] rounded-full flex items-center justify-center mb-4">
                <Award size={32} className="text-[#692528]" />
              </div>
              <CardTitle className="text-[#692528]">Achievement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Celebrate milestones and achievements as you progress through
                your personal and professional development journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#692528] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">Ready to Join Us?</h2>
          <p className="text-[#E0F3FF] text-lg mb-8">
            Discover the roles available and how you can contribute to our club.
          </p>
          <a
            href="/roles"
            className="inline-block bg-[#FAD45F] text-[#692528] px-8 py-3 rounded-lg hover:bg-[#f5ca3d] transition-colors"
          >
            Explore Roles
          </a>
        </div>
      </div>
    </div>
  );
}
