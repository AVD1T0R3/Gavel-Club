import { History, Users, Mail } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#692528] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">About Us</h1>
          <p className="text-xl text-[#E0F3FF]">
            Empowering young leaders in the art of Public Speaking
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Introduction */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-[#692528] mb-6">Who We Are</h2>
              <p className="text-gray-700 mb-4 text-lg">
                Gavel Club of Kyambogo is an organisation created with the aim
                of helping young people develop essential skills in public
                speaking, leadership, and critical thinking.
              </p>
              <p className="text-gray-700 mb-4">
                As an affiliate of Toastmasters International, we provide a
                supportive environment where members can practice and improve on
                the art of public speaking through prepared speeches, impromptu
                table topics, and speech evaluations.
              </p>
              <p className="text-gray-700">
                We welcome students and young professionals who are eager to
                grow personally and professionally while building lasting
                friendships with like-minded individuals.
              </p>
            </div>
            <div className="bg-[#E0F3FF] p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FAD45F] rounded-full flex items-center justify-center flex-shrink-0">
                    <History size={24} className="text-[#692528]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#692528] mb-2">Our History</h3>
                    <p className="text-gray-700">
                      Founded with a vision to develop young leaders, our club
                      has been instrumental in shaping the communication skills
                      of countless members.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FAD45F] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-[#692528]" />
                  </div>
                  <div>
                    <h3 className="text-xl text-[#692528] mb-2">
                      Our Community
                    </h3>
                    <p className="text-gray-700">
                      A diverse group of passionate individuals dedicated to
                      personal growth and supporting each other's journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#692528] text-white p-8 rounded-lg">
            <h2 className="text-2xl mb-4 text-[#FAD45F]">Our Mission</h2>
            <p className="text-[#E0F3FF]">
              To empower individuals by fostering a supportive environment to
              develop public speaking, communication, and leadership skills.
              Thereby boosting self-confidence, encouraging personal growth, and
              helping members become effective leaders and communicators.
            </p>
          </div>
          <div className="bg-[#E0F3FF] p-8 rounded-lg">
            <h2 className="text-2xl text-[#692528] mb-4">Our Vision</h2>
            <p className="text-gray-700">
              We provide a supportive and positive learning experience in which
              members are empowered to develop communication and leadership
              skills, resulting in greater self-confidence and personal growth.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl text-[#692528] mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Respect",
                description:
                  "We honor each member's unique perspective and journey",
              },
              {
                title: "Growth",
                description: "We encourage continuous learning and development",
              },
              {
                title: "Excellence",
                description: "We strive for quality in everything we do",
              },
              {
                title: "Support",
                description:
                  "We create a nurturing environment for all members",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="border-2 border-[#FAD45F] p-6 rounded-lg text-center hover:bg-[#E0F3FF] transition-colors"
              >
                <h3 className="text-xl text-[#692528] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#692528] to-[#8a3033] text-white p-8 rounded-lg text-center">
          <Mail size={48} className="mx-auto mb-4 text-[#FAD45F]" />
          <h2 className="text-2xl mb-4">Get in Touch</h2>
          <p className="text-[#E0F3FF] mb-6">
            Interested in joining or learning more about our club? We'd love to
            hear from you!
          </p>
          <a
              href="/contact"
              className="inline-block bg-[#FAD45F] text-[#692528] px-8 py-3 rounded-lg hover:bg-[#f5ca3d] transition-colors"
            >
              Contact Us
            </a>
        </div>
      </div>
    </div>
  );
}
