import { Download, FileText, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Constitution() {
  const constitutionPdfUrl = "/documents/Gavel Club of Kyambogo_Constitution.pdf";

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#692528] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Club Constitution</h1>
          <p className="text-xl text-[#E0F3FF]">
            Our guiding principles and bylaws
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Download Card */}
        <Card className="mb-12 border-2 border-[#692528]">
          <CardHeader className="bg-[#E0F3FF]">
            <CardTitle className="flex items-center gap-3 text-[#692528] text-2xl">
              <FileText size={32} />
              Download the Gavel Club Constitution
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-6">
              Our constitution outlines the mission, structure, and operating
              procedures of our Gavel Club. It serves as the foundation for all
              club activities and decisions.
            </p>
            <a
              href={constitutionPdfUrl}
              download
              className="inline-flex items-center gap-2 bg-[#692528] text-white px-6 py-3 rounded-lg hover:bg-[#8a3033] transition-colors"
            >
              <Download size={20} />
              Download Constitution (PDF)
            </a>
          </CardContent>
        </Card>

        {/* Constitution Overview */}
        <div className="mb-12">
          <h2 className="text-3xl text-[#692528] mb-6 flex items-center gap-3">
            <BookOpen size={32} className="text-[#FAD45F]" />
            Constitution Overview
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">Article 1: Name</h3>
              <p className="text-gray-700">
                Establishes the official name of the club as the Kyambogo Gavel
                Club (KGC) and confirms that it operates within Kyambogo
                University.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article 2: Supremacy of the Constitution
              </h3>
              <p className="text-gray-700">
                Declares the constitution as the supreme and binding authority of
                the club. Any resolution, decision or policy inconsistent with
                it must be brought into alignment with the constitution.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Articles 3–6: Membership, Rights and Termination
              </h3>
              <p className="text-gray-700">
                Defines key terms and sets out who can be a member of KGC,
                including standard, associate and honorary members. It explains
                their rights and duties, how one becomes a member, and how
                membership may be withdrawn or terminated.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Articles 7–9: Leadership and Weekly Meetings
              </h3>
              <p className="text-gray-700">
                Describes the patron, executive committee and key leadership
                roles, together with their responsibilities. It also details the
                structure, format and purpose of the club&apos;s weekly meetings,
                including the different roles members take on during a session.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Articles 10–11: Elections and Resignations
              </h3>
              <p className="text-gray-700">
                Sets out how executive members and honorary members are elected,
                eligibility requirements for office, terms of service and how
                vacancies are filled. It also explains how members of the
                executive, including the President, may resign and how their
                duties are reassigned.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article 12: Finance and Audit
              </h3>
              <p className="text-gray-700">
                Outlines the club&apos;s sources of funds, how money is banked and
                managed, who may sign for withdrawals, and how financial records
                are audited and reported to members.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article 13: Discipline and Dispute Resolution
              </h3>
              <p className="text-gray-700">
                Provides procedures for suspension, dismissal, motions of
                censure and votes of no confidence. It also sets out how
                disputes among members and between members and the association
                are to be mediated and, where necessary, referred to higher
                university authorities.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Articles 14–15: Amendments and Interpretation
              </h3>
              <p className="text-gray-700">
                Explains how the constitution can be amended by the general
                meeting and the notice required for such changes. It also
                clarifies who is responsible for interpreting the constitution
                and how contested interpretations are resolved.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-[#E0F3FF] p-6 rounded-lg">
          <h3 className="text-xl text-[#692528] mb-4">Important Notes</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#692528] mt-1">•</span>
              <span>
                All members are expected to be familiar with the constitution
                and abide by its provisions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#692528] mt-1">•</span>
              <span>
                The constitution is reviewed annually to ensure it remains
                relevant and effective.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#692528] mt-1">•</span>
              <span>
                Questions about the constitution should be directed to the club
                President or Secretary.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
