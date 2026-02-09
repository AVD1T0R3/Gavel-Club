import { Clock, User, X, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Mastering the Art of Public Speaking',
    excerpt:
      'Discover effective techniques to overcome stage fright and deliver compelling speeches that captivate your audience.',
    author: 'Sarah Johnson',
    date: 'February 5, 2026',
    image: 'https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzA1OTU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    fullArticle: `
      <p>Public speaking is often cited as one of the most common fears, ranking even higher than the fear of death for many people. Yet, it's also one of the most valuable skills you can develop, both personally and professionally. Through my journey in the Gavel Club, I've discovered that mastering public speaking isn't about being perfect—it's about being authentic, prepared, and resilient.</p>

      <h3>Understanding Stage Fright</h3>
      <p>The first step in conquering stage fright is understanding that it's completely normal. Even experienced speakers feel nervous before taking the stage. The key difference is that they've learned to channel that nervous energy into enthusiasm and passion for their message. Your body's physical response—increased heart rate, sweaty palms, butterflies in your stomach—is simply your body preparing you to perform at your best.</p>

      <h3>Preparation is Your Foundation</h3>
      <p>There's no substitute for thorough preparation. Know your material inside and out. Practice your speech multiple times, but don't memorize it word-for-word. Instead, familiarize yourself with the key points and transitions. This allows you to be flexible and natural in your delivery while ensuring you cover all the important content.</p>

      <h3>The Power of Body Language</h3>
      <p>Your body speaks before you even say a word. Stand tall, make eye contact with different members of your audience, and use purposeful gestures to emphasize your points. Movement on stage can help dissipate nervous energy, but make sure it's intentional rather than pacing. Ground yourself with a confident stance and let your passion show through your physical presence.</p>

      <h3>Connect with Your Audience</h3>
      <p>Remember that your audience wants you to succeed. They're not hoping you'll fail—they're rooting for you. Make eye contact, smile, and speak as if you're having a conversation with friends. Use stories and examples that your audience can relate to. When you connect emotionally with your listeners, you create a memorable experience for everyone involved.</p>

      <h3>Practice Makes Progress</h3>
      <p>The Gavel Club provides a safe, supportive environment to practice these skills regularly. Every speech you deliver, every role you take on, and every piece of feedback you receive brings you one step closer to becoming a confident, compelling speaker. Embrace the journey, celebrate your progress, and keep pushing yourself to grow.</p>

      <p>Public speaking is a skill that develops over time. Be patient with yourself, stay committed to improvement, and remember that every great speaker started exactly where you are now.</p>
    `,
  },
  {
    id: 2,
    title: 'Leadership Lessons from Our Club Presidents',
    excerpt:
      'Past and present presidents share their insights on leading a successful Gavel Club and fostering a positive environment.',
    author: 'Michael Chen',
    date: 'January 28, 2026',
    image: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3MDU5NTk1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    fullArticle: `
      <p>Leading a Gavel Club is one of the most rewarding experiences I've had in my personal development journey. After interviewing several past presidents and reflecting on my own term, I've compiled the most valuable leadership lessons we've learned along the way.</p>

      <h3>Lead by Example</h3>
      <p>As president, you set the tone for the entire club. If you want members to be punctual, enthusiastic, and committed, you must embody these qualities yourself. Show up early to meetings, participate actively, and demonstrate genuine excitement for the club's mission. Your energy and dedication will inspire others to match your commitment.</p>

      <h3>Listen More Than You Speak</h3>
      <p>Great leaders are great listeners. Make time to hear from your members—their ideas, concerns, and aspirations. Create multiple channels for feedback and make it clear that every voice matters. Some of our best club initiatives have come from members who felt comfortable sharing their thoughts because they knew they would be heard.</p>

      <h3>Empower Your Officers</h3>
      <p>You can't do everything yourself, nor should you try. Trust your officers to fulfill their roles and give them the autonomy to make decisions. Provide support and guidance when needed, but resist the urge to micromanage. When officers feel trusted and empowered, they'll exceed your expectations and develop their own leadership skills in the process.</p>

      <h3>Celebrate Small Wins</h3>
      <p>Don't wait for major milestones to celebrate. Acknowledge members who take on their first role, deliver their first speech, or show improvement in their skills. Recognition fuels motivation and creates a positive culture where everyone feels valued for their contributions, no matter how small.</p>

      <h3>Handle Conflict with Grace</h3>
      <p>Not everything will go smoothly, and that's okay. When conflicts arise—and they will—address them promptly and privately. Focus on solutions rather than blame. Remember that most conflicts stem from miscommunication or differing expectations. Approach these situations with empathy and a genuine desire to understand all perspectives.</p>

      <h3>Build Community Beyond Meetings</h3>
      <p>Some of the strongest bonds in our club were formed outside of regular meetings. Organize social events, study groups, or community service projects. These activities strengthen relationships and create a sense of belonging that keeps members engaged and committed.</p>

      <h3>Plan for Succession</h3>
      <p>One of your most important responsibilities is preparing the next generation of leaders. Identify potential future officers early and give them opportunities to develop their skills. Share your knowledge, introduce them to key responsibilities gradually, and ensure a smooth transition when your term ends.</p>

      <p>Leadership in a Gavel Club isn't about authority—it's about service. It's about creating an environment where every member can thrive, learn, and grow. The skills you develop as a club president will serve you well in every aspect of your life and career.</p>
    `,
  },
  {
    id: 3,
    title: 'The Power of Impromptu Speaking',
    excerpt:
      'Learn how Table Topics sessions can dramatically improve your ability to think on your feet and speak with confidence.',
    author: 'Emily Rodriguez',
    date: 'January 20, 2026',
    image: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3MDU5NTk1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    fullArticle: `
      <p>When I first joined the Gavel Club, Table Topics terrified me. The thought of standing up and speaking about a topic I'd just heard seconds ago seemed impossible. Fast forward six months, and Table Topics has become my favorite part of every meeting. Here's why impromptu speaking is such a powerful skill and how you can master it.</p>

      <h3>What is Table Topics?</h3>
      <p>Table Topics is a segment of our meetings where members are asked to speak for 1-2 minutes on a question or topic they've just been given. There's no preparation time—just you, your thoughts, and your ability to organize them on the spot. It sounds intimidating, but it's actually one of the most valuable learning experiences the club offers.</p>

      <h3>Why Impromptu Speaking Matters</h3>
      <p>In real life, you won't always have time to prepare. Whether it's an unexpected question in a job interview, a sudden request to share your thoughts in a meeting, or a toast at a friend's wedding, impromptu speaking situations arise frequently. Developing this skill gives you confidence in any scenario where you need to communicate on the spot.</p>

      <h3>Embrace the Pause</h3>
      <p>The most important lesson I've learned: it's okay to pause and think. When you're given a Table Topics question, take a breath. A brief silence while you gather your thoughts seems much longer to you than it does to the audience. Use this pause to choose your direction and your opening line.</p>

      <h3>Structure is Your Friend</h3>
      <p>Even in impromptu speaking, structure helps. I use a simple framework: make a clear opening statement, provide two or three supporting points or examples, and then conclude by restating your main idea. This structure works for almost any question and helps you organize your thoughts quickly.</p>

      <h3>Use Personal Examples</h3>
      <p>When in doubt, draw from your own experiences. Personal stories are easier to recall than abstract ideas, and they make your response more authentic and engaging. Plus, they buy you time to think while you're talking about something familiar.</p>

      <h3>Practice Makes Comfortable</h3>
      <p>The more you do Table Topics, the more comfortable you become with uncertainty. Start practicing outside of club meetings. When you're reading the news, pause and imagine you've been asked to speak about that topic. When talking with friends, challenge yourself to speak more off-the-cuff rather than carefully planning every sentence.</p>

      <h3>Learn from Every Response</h3>
      <p>After each Table Topics session, reflect on what worked and what didn't. Did you ramble? Make note to be more concise next time. Did you freeze? Remember to embrace the pause. Did you nail it? Identify what you did right so you can repeat it.</p>

      <p>Table Topics has transformed how I communicate in everyday life. I'm more confident in conversations, better at meetings, and far less anxious about unexpected speaking situations. Give yourself permission to be imperfect, stay curious, and watch your impromptu speaking skills soar.</p>
    `,
  },
  {
    id: 4,
    title: 'Building Confidence Through Evaluation',
    excerpt:
      'Understanding how constructive feedback helps us grow and why giving evaluations is as valuable as receiving them.',
    author: 'David Kumar',
    date: 'January 15, 2026',
    image: 'https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzA1OTU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    fullArticle: `
      <p>Evaluation is the heartbeat of growth in the Gavel Club. It's what separates us from casual speaking clubs and makes us a true developmental organization. Yet many new members approach evaluations with trepidation—both giving and receiving them. Let me share why evaluations are actually your secret weapon for rapid improvement.</p>

      <h3>The Art of Constructive Feedback</h3>
      <p>Good evaluation isn't about criticism—it's about growth. The best evaluators follow a proven formula: start with genuine praise for what the speaker did well, offer specific suggestions for improvement, and end with encouragement. This "sandwich" approach ensures that feedback is both honest and motivating.</p>

      <h3>Receiving Evaluations: The Gift of Perspective</h3>
      <p>When you deliver a speech, you're focused on so many things that you can't possibly be aware of everything you're doing. Evaluators give you the gift of an outside perspective. They notice your strengths that you might take for granted and spot habits you didn't even know you had.</p>

      <p>The key to benefiting from evaluations is to listen with an open mind. Don't get defensive when someone points out an area for improvement—that's valuable information! Take notes, ask clarifying questions, and choose one or two specific things to work on in your next speech.</p>

      <h3>Giving Evaluations: Developing Your Critical Eye</h3>
      <p>Here's what surprised me: giving evaluations has improved my own speaking as much as receiving them. When you evaluate someone else, you start noticing what works and what doesn't. You become aware of effective techniques you can incorporate and pitfalls you should avoid.</p>

      <p>Evaluating also develops your ability to think critically and communicate diplomatically—skills that are valuable in every professional setting. Learning to deliver honest feedback in a constructive way is a leadership skill that will serve you throughout your career.</p>

      <h3>The Evaluation Framework</h3>
      <p>When evaluating a speech, I focus on three main areas: content (was the message clear and well-organized?), delivery (was the speaker engaging and effective?), and language (did they use powerful, precise words?). Within each area, I note both strengths and opportunities for improvement.</p>

      <h3>Be Specific and Actionable</h3>
      <p>Vague feedback like "good job" or "work on your delivery" isn't helpful. Instead, say things like "Your opening story about your grandmother immediately captured our attention" or "Try varying your pace—speak more slowly during serious points to let them sink in." Specific feedback gives speakers concrete actions they can take.</p>

      <h3>Create a Safe Learning Environment</h3>
      <p>Remember that your evaluation sets the tone for how safe people feel taking risks in the club. If you're harsh or only focus on negatives, speakers will be afraid to try new techniques. If you're only positive without offering real feedback, speakers won't improve. Strike a balance that encourages growth while maintaining confidence.</p>

      <h3>Track Your Progress</h3>
      <p>Keep all the evaluations you receive. Looking back at feedback from your early speeches compared to recent ones shows how far you've come. It's incredibly motivating and helps you see patterns in your development.</p>

      <p>Evaluation is where the magic happens in our club. It's the mechanism that turns practice into improvement and effort into excellence. Embrace both sides of the process—giving and receiving feedback—and watch your skills accelerate beyond what you thought possible.</p>
    `,
  },
  {
    id: 5,
    title: 'Networking: Making Connections That Matter',
    excerpt:
      'Explore strategies for building meaningful professional relationships within and beyond the Gavel Club community.',
    author: 'Lisa Thompson',
    date: 'January 10, 2026',
    image: 'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3MDU5NTk1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    fullArticle: `
      <p>When I joined the Gavel Club, I came for the public speaking practice. What I didn't expect was the incredible network of relationships I would build. The connections I've made through the club have opened doors professionally, enriched my life personally, and taught me that networking isn't about collecting business cards—it's about building genuine relationships.</p>

      <h3>Networking Starts with Authenticity</h3>
      <p>The best networking happens when you're genuinely interested in other people. Instead of thinking "what can this person do for me?", ask yourself "how can we help each other grow?" This mindset shift changes everything. When you approach people with authentic curiosity and a spirit of mutual benefit, connections form naturally.</p>

      <h3>The Club as Your Practice Ground</h3>
      <p>The Gavel Club provides a perfect environment to develop networking skills. Everyone there shares a common interest in personal development, which gives you an easy conversation starter. Use meeting breaks, before-meeting time, and post-meeting socials to get to know fellow members beyond their roles in the club.</p>

      <h3>Go Beyond Small Talk</h3>
      <p>Small talk has its place, but meaningful connections require deeper conversations. Ask about people's goals, challenges, and passions. Share your own experiences and be vulnerable. Some of my strongest professional relationships started with conversations about the struggles we faced in our careers or the dreams we were working toward.</p>

      <h3>Follow Up and Follow Through</h3>
      <p>The real networking happens after the initial meeting. If someone mentions they're looking for information about a particular career field, send them a relevant article. If you meet someone working in an industry you're interested in, ask if you can buy them coffee to learn more. Most importantly, when you say you'll do something, actually do it. Reliability builds trust.</p>

      <h3>Give More Than You Take</h3>
      <p>The most effective networkers are generous with their time, knowledge, and connections. Introduce people who could benefit from knowing each other. Share opportunities even when they're not right for you. Offer help before being asked. When you establish yourself as someone who adds value to others' lives, people will naturally want to stay connected with you.</p>

      <h3>Leverage the Extended Network</h3>
      <p>Remember that your network extends beyond the people you know directly. Your club members have their own networks, and so do they. When you build strong relationships within the club, you gain access to this extended network. Need an introduction to someone in a particular company? There's a good chance someone in your network knows someone who works there.</p>

      <h3>Stay in Touch</h3>
      <p>Professional relationships require maintenance. Check in with people periodically, even when you don't need anything. Share interesting articles, congratulate them on achievements you see on social media, or simply ask how they're doing. These small touchpoints keep relationships alive and strong.</p>

      <h3>Attend Beyond Required Meetings</h3>
      <p>While regular meetings are important, the real bonding often happens at optional events—social gatherings, inter-club competitions, conferences, or community service projects. These relaxed settings allow for longer, more natural conversations where real friendships form.</p>

      <p>The network I've built through the Gavel Club has been invaluable. These aren't just contacts in my phone—they're friends, mentors, and colleagues who have influenced my career trajectory and enriched my life. Invest in relationships with the same commitment you invest in developing your speaking skills, and you'll find that the connections you make become one of the club's greatest benefits.</p>
    `,
  },
  {
    id: 6,
    title: "Preparing Your First Speech: A Beginner's Guide",
    excerpt:
      'Step-by-step guidance for new members preparing their Icebreaker speech and what to expect during your debut.',
    author: 'James Wilson',
    date: 'January 5, 2026',
    image: 'https://images.unsplash.com/photo-1759922378092-14917cba3f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzA1OTU5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    fullArticle: `
      <p>I still remember the mix of excitement and terror I felt preparing for my Icebreaker speech. It was my first formal speech ever, and I had no idea what I was doing. Looking back now, after delivering dozens of speeches, I wish I could tell my former self to relax and enjoy the experience. Since I can't do that, let me share what I've learned to help you prepare for your first speech with confidence.</p>

      <h3>What is the Icebreaker?</h3>
      <p>The Icebreaker is your first speech in the Gavel Club. Its purpose is simple: introduce yourself to the club. That's it. You're not expected to deliver a perfect, polished presentation. You're just sharing your story with a supportive audience who wants to get to know you better.</p>

      <h3>Choosing Your Content</h3>
      <p>You have 4-6 minutes to tell your story. You can't cover everything, so choose highlights that define who you are. Consider including: where you're from, your educational or career journey, significant experiences that shaped you, your hobbies and interests, and why you joined the Gavel Club.</p>

      <p>Don't try to cram in your entire life story. Instead, pick 3-4 main points and develop them with specific examples or brief stories. Audiences remember stories far better than facts.</p>

      <h3>Structure Your Speech</h3>
      <p>Every good speech has three parts: opening, body, and conclusion. Start with something attention-grabbing—a surprising fact about yourself, a brief story, or a thought-provoking question. In the body, develop your main points in a logical sequence. End with a memorable conclusion that reinforces who you are and what you hope to achieve in the club.</p>

      <h3>Write It Down, But Don't Memorize</h3>
      <p>Write out your speech initially to organize your thoughts, but don't try to memorize it word-for-word. Instead, create an outline of your main points and practice until you can talk through them naturally. If you memorize exactly, you'll panic if you forget a word. If you know your points, you can adapt and keep going.</p>

      <h3>Practice, But Not Too Much</h3>
      <p>Practice your speech enough to feel comfortable with the content and flow—usually 5-7 run-throughs is sufficient. Practice out loud, ideally in front of a mirror or a friend. Time yourself to ensure you're within the 4-6 minute range. But don't over-practice to the point where you sound robotic. You want to sound conversational, not rehearsed.</p>

      <h3>Managing Nerves</h3>
      <p>Everyone is nervous before their first speech. That's normal and actually helpful—nervous energy can enhance your performance when channeled properly. Before your speech, take deep breaths, do some light stretching, and remind yourself that this is a friendly, supportive environment. No one is judging you harshly; everyone remembers being in your shoes.</p>

      <h3>During the Speech</h3>
      <p>When you're introduced, walk to the front with confidence (even if you have to fake it). Make eye contact with different people in the audience—they're your friends, not your critics. Speak clearly and loudly enough for everyone to hear. If you make a mistake, don't apologize or draw attention to it—just keep going. The audience probably didn't even notice.</p>

      <h3>The Evaluation</h3>
      <p>After your speech, an experienced member will give you an evaluation. This is one of the most valuable parts of the experience. They'll point out what you did well (probably more than you realize) and offer suggestions for improvement. Listen with an open mind and take notes. This feedback is a gift that will help you grow.</p>

      <h3>After the Speech</h3>
      <p>You did it! Take a moment to feel proud of yourself. Delivering your first speech is a significant accomplishment. Reflect on how it felt, what went well, and what you'd like to work on for next time. Then start thinking about your second speech—because now that you've broken the ice, the real fun begins.</p>

      <p>Your Icebreaker speech is the beginning of an exciting journey in communication and leadership development. Embrace the experience, be yourself, and remember that everyone in that room is rooting for your success. You've got this!</p>
    `,
  },
];

export function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogPosts[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#E0F3FF]/30">
      <div className="bg-[#692528] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Our Blog</h1>
          <p className="text-xl text-[#E0F3FF]">
            Insights, tips, and stories from our Gavel Club community
          </p>
        </div>
      </div>

      {!selectedBlog ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                onClick={() => setSelectedBlog(post)}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-2 border-transparent hover:border-[#FAD45F]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#692528] line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="mt-4 text-[#692528] hover:text-[#8a3033] transition-colors">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            onClick={() => setSelectedBlog(null)}
            className="flex items-center gap-2 text-[#692528] hover:text-[#8a3033] mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to all articles
          </button>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h1 className="text-4xl text-[#692528] mb-4">
                {selectedBlog.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b-2 border-[#E0F3FF]">
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span>{selectedBlog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span>{selectedBlog.date}</span>
                </div>
              </div>

              <div 
                className="prose prose-lg max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: selectedBlog.fullArticle }}
              />
            </div>
          </article>
        </div>
      )}

      <style>{`
        .blog-content h3 {
          color: #692528;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content p {
          color: #374151;
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }
      `}</style>
    </div>
  );
}
