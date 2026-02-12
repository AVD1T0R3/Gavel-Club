import { Clock, Users, MessageSquare, Award, CheckCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Meetings() {
  const schedule = [
    {
      time: '6:30 PM - 6:40 PM',
      duration: '10 min',
      activity: 'Opening & Introductions',
      icon: Users,
      description: 'Meeting called to order, guests introduced, and meeting roles announced.',
    },
    {
      time: '6:40 PM - 7:00 PM',
      duration: '20 min',
      activity: 'Table Topics Session',
      icon: MessageSquare,
      description: 'Impromptu speaking practice where members respond to surprise questions, developing quick thinking skills.',
    },
    {
      time: '7:00 PM - 7:40 PM',
      duration: '40 min',
      activity: 'Prepared Speeches',
      icon: Award,
      description: 'Members deliver prepared speeches (5-7 minutes each) to practice and showcase their speaking skills.',
    },
    {
      time: '7:40 PM - 8:10 PM',
      duration: '30 min',
      activity: 'Evaluations',
      icon: CheckCircle,
      description: 'Evaluators provide constructive feedback on speeches, helping speakers improve and grow.',
    },
    {
      time: '8:10 PM - 8:25 PM',
      duration: '15 min',
      activity: 'Reports & Business',
      icon: Calendar,
      description: 'General Evaluator provides overall meeting feedback, reports from officers, and club announcements.',
    },
    {
      time: '8:25 PM - 8:30 PM',
      duration: '5 min',
      activity: 'Closing Remarks',
      icon: Clock,
      description: 'President shares final thoughts and adjourns the meeting.',
    },
  ];

  const meetingRoles = [
    {
      role: 'Toastmaster',
      description: 'Serves as the master of ceremonies, introduces speakers, and keeps the meeting flowing smoothly.',
    },
    {
      role: 'Table Topics Master',
      description: 'Prepares and asks impromptu speaking questions to help members practice thinking on their feet.',
    },
    {
      role: 'Speakers',
      description: 'Deliver prepared speeches based on educational pathways to develop specific skills.',
    },
    {
      role: 'Evaluators',
      description: 'Provide constructive feedback to speakers, highlighting strengths and areas for improvement.',
    },
    {
      role: 'General Evaluator',
      description: 'Evaluates the entire meeting, including all functional roles and overall meeting quality.',
    },
    {
      role: 'Timer',
      description: 'Tracks speaking times and signals speakers to help them stay within time limits.',
    },
    {
      role: 'Ah-Counter',
      description: 'Counts filler words and repetitive phrases to help members become aware of their speech patterns.',
    },
    {
      role: 'Grammarian',
      description: 'Introduces a word of the day and notes outstanding language usage throughout the meeting.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#E0F3FF]/30">
      <div className="bg-[#692528] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Meeting Format</h1>
          <p className="text-xl text-[#E0F3FF]">
            Discover what happens at our club meetings
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Meeting Overview */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-[#692528] mb-4">Our Meeting Structure</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every meeting follows a carefully designed format that maximizes
              learning opportunities while keeping things fun and engaging. Here's
              what you can expect when you attend one of our meetings.
            </p>
          </div>

          <div className="bg-white border-2 border-[#692528] rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Calendar size={32} className="text-[#FAD45F]" />
              <div>
                <h3 className="text-2xl text-[#692528]">Weekly Meetings</h3>
                <p className="text-gray-600">Every Tuesday, 5:00 PM - 7:00 PM</p>
                <p className="text-gray-600"><strong>Location: </strong>RAC F</p>
              </div>
            </div>
          </div>
        </div>

        {/* Meeting Schedule */}
        <div className="mb-16">
          <h2 className="text-3xl text-[#692528] mb-8 text-center">
            Typical Meeting Schedule
          </h2>
          <div className="space-y-4">
            {schedule.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[#E0F3FF] hover:border-[#FAD45F] transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-[#FAD45F] rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent size={28} className="text-[#692528]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl text-[#692528]">
                            {item.activity}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="bg-[#E0F3FF] px-3 py-1 rounded-full">
                              {item.duration}
                            </span>
                            <span>{item.time}</span>
                          </div>
                        </div>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Meeting Roles */}
        <div className="mb-16">
          <h2 className="text-3xl text-[#692528] mb-8 text-center">
            Meeting Roles
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Each meeting features various roles that members can volunteer for.
            These roles provide hands-on learning opportunities and help develop
            specific skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meetingRoles.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-[#E0F3FF] hover:border-[#FAD45F] transition-colors"
              >
                <CardHeader className="bg-[#E0F3FF]">
                  <CardTitle className="text-[#692528]">{item.role}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl text-[#692528] mb-8 text-center">
            What to Expect as a First-Time Guest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#692528]/10">
              <CardHeader>
                <CardTitle className="text-[#692528] text-center">
                  1. Warm Welcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  You'll be greeted by our Sergeant at Arms and introduced to
                  the club. Feel free to just observe or participate as much as
                  you're comfortable with.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#692528]/10">
              <CardHeader>
                <CardTitle className="text-[#692528] text-center">
                  2. No Pressure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  Guests are welcome to participate in Table Topics if they'd
                  like, but there's absolutely no obligation. Come and observe
                  at your own pace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#692528]/10">
              <CardHeader>
                <CardTitle className="text-[#692528] text-center">
                  3. Questions Welcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">
                  After the meeting, members will be happy to answer questions
                  about the club, membership, and how to get involved.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#692528] to-[#8a3033] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl mb-4">Ready to Experience a Meeting?</h2>
          <p className="text-[#E0F3FF] mb-6 max-w-2xl mx-auto">
            Come visit us and see what a Gavel Club meeting is all about. We meet
            every Tuesday evening and guests are always welcome!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FAD45F] text-[#692528] px-8 py-3 rounded-lg hover:bg-[#f5ca3d] transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
