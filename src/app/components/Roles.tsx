import { Clock, BookOpen, Lightbulb, Users, CheckSquare, Volume2, Star, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const meetingRoles = [
  {
    title: 'Toastmaster of the Day',
    icon: Megaphone,
    description: 'The master of ceremonies who conducts the meeting and ensures smooth flow.',
    responsibilities: [
      'Open and close the meeting',
      'Introduce all speakers and role-takers',
      'Maintain energy and enthusiasm',
      'Keep the meeting on schedule',
      'Create transitions between segments',
    ],
    skills: ['Public Speaking', 'Time Management', 'Energy Management', 'Improvisation'],
    duration: 'Throughout meeting',
  },
  {
    title: 'Timekeeper',
    icon: Clock,
    description: 'Tracks and signals speaking times to help speakers stay within limits.',
    responsibilities: [
      'Time all speakers and evaluators',
      'Display timing signals (green, yellow, red)',
      'Record exact times for each speaker',
      'Report timing summary at end of meeting',
    ],
    skills: ['Attention to Detail', 'Organization', 'Time Management', 'Reliability'],
    duration: 'Throughout meeting',
  },
  {
    title: 'Grammarian',
    icon: BookOpen,
    description: 'Introduces a word of the day and notes outstanding language usage.',
    responsibilities: [
      'Choose and introduce word of the day',
      'Track usage of the word',
      'Note excellent word choices',
      'Identify grammatical errors tactfully',
      'Provide language report',
    ],
    skills: ['Vocabulary', 'Attention to Detail', 'Language Skills', 'Listening'],
    duration: 'Throughout meeting',
  },
  {
    title: 'Ah-Counter',
    icon: Volume2,
    description: 'Counts filler words and sounds to increase speaker awareness.',
    responsibilities: [
      'Track filler words (um, ah, like, you know)',
      'Note repetitive phrases',
      'Count long pauses and verbal crutches',
      'Provide ah-counter report',
    ],
    skills: ['Active Listening', 'Concentration', 'Pattern Recognition', 'Diplomacy'],
    duration: 'Throughout meeting',
  },
  {
    title: 'Table Topics Master',
    icon: Lightbulb,
    description: 'Conducts the impromptu speaking session with thought-provoking questions.',
    responsibilities: [
      'Prepare interesting table topics questions',
      'Create a theme or connection between topics',
      'Invite participants to speak',
      'Keep session engaging and fun',
      'Manage timing (1-2 minutes per speaker)',
    ],
    skills: ['Creativity', 'Facilitation', 'Spontaneity', 'Engagement'],
    duration: '15-20 minutes',
  },
  {
    title: 'General Evaluator',
    icon: Star,
    description: 'Evaluates the entire meeting and coordinates the evaluation team.',
    responsibilities: [
      'Oversee all evaluation roles',
      'Provide overall meeting assessment',
      'Note what worked well in the meeting',
      'Suggest improvements for future meetings',
      'Introduce and thank evaluators',
    ],
    skills: ['Critical Thinking', 'Leadership', 'Comprehensive Analysis', 'Constructive Feedback'],
    duration: '3-5 minutes',
  },
  {
    title: 'Speech Evaluator',
    icon: CheckSquare,
    description: 'Provides constructive feedback on prepared speeches.',
    responsibilities: [
      'Listen carefully to assigned speech',
      'Note strengths and areas for improvement',
      'Provide balanced, specific feedback',
      'Deliver 2-3 minute evaluation',
      'Encourage and motivate the speaker',
    ],
    skills: ['Active Listening', 'Constructive Criticism', 'Public Speaking', 'Analytical Thinking'],
    duration: '2-3 minutes per evaluation',
  },
  {
    title: 'Prepared Speaker',
    icon: Users,
    description: 'Delivers a prepared speech based on educational pathways.',
    responsibilities: [
      'Prepare speech according to project objectives',
      'Practice and time the speech',
      'Deliver engaging presentation',
      'Apply feedback from previous speeches',
      'Work on specific skill development',
    ],
    skills: ['Public Speaking', 'Organization', 'Storytelling', 'Confidence Building'],
    duration: '5-7 minutes',
  },
];

export function Roles() {
  return (
    <div className="min-h-screen bg-[#E0F3FF]/30">
      <div className="bg-[#692528] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Meeting Roles</h1>
          <p className="text-xl text-[#E0F3FF]">
            Hands-on learning opportunities at every meeting
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700">
            Each meeting features various roles that members can volunteer for.
            These roles provide practical experience and help develop specific
            communication and leadership skills. Every role is important and
            contributes to a successful meeting.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {meetingRoles.map((role, index) => {
            const IconComponent = role.icon;
            return (
              <Card
                key={index}
                className="border-2 border-[#692528]/10 hover:border-[#FAD45F] transition-all hover:shadow-lg"
              >
                <CardHeader className="bg-[#E0F3FF]">
                  <div className="flex items-start justify-between">
                    <CardTitle className="flex items-center gap-3 text-[#692528]">
                      <div className="w-12 h-12 bg-[#FAD45F] rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent size={24} className="text-[#692528]" />
                      </div>
                      <span>{role.title}</span>
                    </CardTitle>
                    <span className="bg-white text-[#692528] text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {role.duration}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-4">{role.description}</p>

                  <div className="mb-4">
                    <h4 className="text-[#692528] mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-[#FAD45F] mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#692528] mb-2">Skills Developed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#FAD45F] text-[#692528] text-xs px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl text-[#692528] mb-8 text-center">
            Why Take on Meeting Roles?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#692528]/10 text-center">
              <CardHeader>
                <CardTitle className="text-[#692528]">Practice Makes Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Every role you take helps you develop new skills and gain
                  confidence. The more roles you try, the more well-rounded you
                  become as a communicator and leader.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#692528]/10 text-center">
              <CardHeader>
                <CardTitle className="text-[#692528]">Low-Pressure Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our meetings provide a supportive environment where you can try
                  new things without high stakes. It's okay to make mistakes—
                  that's how we learn and grow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#692528]/10 text-center">
              <CardHeader>
                <CardTitle className="text-[#692528]">Immediate Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You'll receive constructive feedback that helps you improve
                  quickly. This accelerated learning process is one of the key
                  benefits of regular participation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-white border-2 border-[#692528] rounded-lg p-8 mb-8">
          <h2 className="text-2xl text-[#692528] mb-6 text-center">
            Getting Started with Meeting Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FAD45F] rounded-full flex items-center justify-center text-[#692528] text-xl mx-auto mb-3">
                1
              </div>
              <h3 className="text-[#692528] mb-2">Start Simple</h3>
              <p className="text-sm text-gray-600">
                Begin with roles like Timekeeper or Ah-Counter to get comfortable
                with meeting participation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FAD45F] rounded-full flex items-center justify-center text-[#692528] text-xl mx-auto mb-3">
                2
              </div>
              <h3 className="text-[#692528] mb-2">Volunteer Early</h3>
              <p className="text-sm text-gray-600">
                Sign up for roles in advance so you have time to prepare and feel
                confident.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FAD45F] rounded-full flex items-center justify-center text-[#692528] text-xl mx-auto mb-3">
                3
              </div>
              <h3 className="text-[#692528] mb-2">Ask Questions</h3>
              <p className="text-sm text-gray-600">
                Don't hesitate to ask experienced members for guidance before
                taking on a new role.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#FAD45F] rounded-full flex items-center justify-center text-[#692528] text-xl mx-auto mb-3">
                4
              </div>
              <h3 className="text-[#692528] mb-2">Reflect & Improve</h3>
              <p className="text-sm text-gray-600">
                After each role, think about what went well and what you'd like to
                improve next time.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#692528] to-[#8a3033] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl mb-4">Ready to Take on a Role?</h2>
          <p className="text-[#E0F3FF] mb-6 max-w-2xl mx-auto">
            Every meeting is an opportunity to learn and grow. Volunteer for a
            role at our next meeting and experience the benefits firsthand!
          </p>
          <a
            href="/meetings"
            className="inline-block bg-[#FAD45F] text-[#692528] px-8 py-3 rounded-lg hover:bg-[#f5ca3d] transition-colors"
          >
            Learn About Our Meetings
          </a>
        </div>
      </div>
    </div>
  );
}
