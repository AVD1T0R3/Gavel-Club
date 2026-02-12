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
              Download Constitution
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
              Download PDF
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
              <h3 className="text-xl text-[#692528] mb-2">
                Article I: Name and Purpose
              </h3>
              <p className="text-gray-700">
                Establishes the official name of the club and outlines its
                primary purpose of developing communication and leadership
                skills among young people.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article II: Membership
              </h3>
              <p className="text-gray-700">
                Defines membership eligibility, requirements, and the rights and
                responsibilities of club members.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article III: Officers and Duties
              </h3>
              <p className="text-gray-700">
                Outlines the officer positions, their election process, terms of
                service, and specific responsibilities for each role.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article IV: Meetings
              </h3>
              <p className="text-gray-700">
                Specifies meeting frequency, format, quorum requirements, and
                procedures for conducting club business.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article V: Committees
              </h3>
              <p className="text-gray-700">
                Describes the various committees within the club, their
                purposes, and how they support club operations.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article VI: Finances
              </h3>
              <p className="text-gray-700">
                Details membership dues, financial management practices, and
                procedures for handling club funds.
              </p>
            </div>

            <div className="border-l-4 border-[#FAD45F] pl-6 py-2">
              <h3 className="text-xl text-[#692528] mb-2">
                Article VII: Amendments
              </h3>
              <p className="text-gray-700">
                Outlines the process for proposing and ratifying amendments to
                the constitution.
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
