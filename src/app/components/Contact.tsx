import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#692528] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-[#E0F3FF]">
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-2 border-[#E0F3FF] hover:border-[#FAD45F] transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-[#FAD45F] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Mail size={32} className="text-[#692528]" />
              </div>
              <CardTitle className="text-center text-[#692528]">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-2">General Inquiries:</p>
              <a href="mailto:info@gavelclub.org" className="text-[#692528] hover:text-[#8a3033]">
                info@gavelclub.org
              </a>
              <p className="text-gray-600 mt-4 mb-2">Membership:</p>
              <a href="mailto:membership@gavelclub.org" className="text-[#692528] hover:text-[#8a3033]">
                membership@gavelclub.org
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#E0F3FF] hover:border-[#FAD45F] transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-[#FAD45F] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Phone size={32} className="text-[#692528]" />
              </div>
              <CardTitle className="text-center text-[#692528]">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-2">Club President:</p>
              <a href="tel:+1234567890" className="text-[#692528] hover:text-[#8a3033]">
                0700 123 456
              </a>
              <p className="text-gray-600 mt-4 mb-2">Vice President-Membership :</p>
              <a href="tel:+1234567891" className="text-[#692528] hover:text-[#8a3033]">
                0700 123 456
              </a>
            </CardContent>
          </Card>

          <Card className="border-2 border-[#E0F3FF] hover:border-[#FAD45F] transition-colors">
            <CardHeader>
              <div className="w-16 h-16 bg-[#FAD45F] rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin size={32} className="text-[#692528]" />
              </div>
              <CardTitle className="text-center text-[#692528]">Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-2">We meet every Tuesday</p>
              <p className="text-gray-600 mb-2">5:00 PM - 7:00 PM</p>
              <p className="text-gray-600">
                RAC F
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-[#692528]">
            <CardHeader className="bg-[#E0F3FF]">
              <CardTitle className="text-2xl text-[#692528] flex items-center gap-2">
                <Send size={24} />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-[#692528]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#FAD45F] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-[#692528]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#FAD45F] focus:outline-none"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 text-[#692528]">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#FAD45F] focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="speaker">Speaker Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-[#692528]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#FAD45F] focus:outline-none resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#692528] text-white py-3 rounded-lg hover:bg-[#8a3033] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-[#E0F3FF] p-8 rounded-lg">
          <h2 className="text-2xl text-[#692528] mb-4 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg text-[#692528] mb-2">
                How do I join the Gavel Club?
              </h3>
              <p className="text-gray-700">
                You can attend one of our meetings as a guest to see if our club
                is the right fit for you. After that, simply maintain regular attendance and when prompted, pay the membership dues.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-[#692528] mb-2">
                How much are the membership fees?
              </h3>
              <p className="text-gray-700">
                Our membership fees are UGX.5000 per semester, which covers meeting
                materials, educational resources, and club activities.
              </p>
            </div>
            <div>
              <h3 className="text-lg text-[#692528] mb-2">
                Do I need public speaking experience?
              </h3>
              <p className="text-gray-700">
                Not at all! Our club welcomes members of all skill levels, from
                complete novices to experienced speakers. We're here to support
                your growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
