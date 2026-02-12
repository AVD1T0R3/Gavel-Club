import { useState } from "react";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const cabinets = {
  present: {
    year: "2025-2026",
    members: [
      // { role: 'President', name: 'Edigu Gregory Michael', email: 'alex.martinez@email.com' },
      // (commented out for reference in case of later editing)
      { role: "President", name: "Edigu Gregory Michael" },
      { role: "Vice President", name: "Anyuru Dorothy Alum" },
      { role: "General Secretary", name: "Tenywa Elsie" },
      { role: "Sergeant At Arms", name: "Kabaga Joseph" },
      { role: "Treasurer", name: "Akankiza Rosette" },
      { role: "Representative PWDs", name: "Nuwagumya honest" },
      { role: "Vice President-Education", name: "Abaho Abel Kambona" },
      { role: "Vice President-Education", name: "Kato .W. Hannington" },
      { role: "Vice President-Membership", name: "Nekesa Constance .M" },
      { role: "Vice President-Membership", name: "Olara Joseph" },
      { role: "Vice President-Public Relations", name: "Kamba Timothy Handy" },
      { role: "Vice President-Public Relations", name: "Ssemwezi Benjamin" },
    ],
  },
  past: [
    {
      year: "2024-2025",
      members: [
        { role: "President", name: "Winena Joann Jo" },
        { role: "General Secretary", name: "Kabeera Agatha" },
        { role: "Sergeant At Arms", name: "Amgulo Martin King" },
        { role: "Treasurer", name: "Ainembabazi Daisy" },
        { role: "Vice President-Education", name: "Anyuru Dorothy Alum" },
        { role: "Vice President-Education", name: "Nabugodi Cinderella Meera" },
        { role: "Vice President-Membership", name: "Edigu Gregory Michael" },
        { role: "Vice President-Membership", name: "Aceng Lorraine" },
        { role: "Vice President-Public Relations", name: "Atukunda Tracy" },
        { role: "Vice President-Public Relations", name: "Wabwire .B. Samuel" },
      ],
    },
    // {
    //   year: "2023-2024",
    //   members: [
    //     {
    //       role: "President",
    //       name: "Jennifer Lee",
    //       email: "jennifer.lee@email.com",
    //     },
    //     {
    //       role: "Vice President Education",
    //       name: "Robert Brown",
    //       email: "robert.b@email.com",
    //     },
    //     {
    //       role: "Vice President Membership",
    //       name: "Amanda Garcia",
    //       email: "amanda.g@email.com",
    //     },
    //     { role: "Secretary", name: "Kevin Nguyen", email: "kevin.n@email.com" },
    //     {
    //       role: "Treasurer",
    //       name: "Rachel Cohen",
    //       email: "rachel.c@email.com",
    //     },
    //     {
    //       role: "Sergeant at Arms",
    //       name: "Christopher Davis",
    //       email: "chris.d@email.com",
    //     },
    //   ],
    // },
    // {
    //   year: "2022-2023",
    //   members: [
    //     {
    //       role: "President",
    //       name: "Daniel Park",
    //       email: "daniel.park@email.com",
    //     },
    //     {
    //       role: "Vice President Education",
    //       name: "Olivia Martinez",
    //       email: "olivia.m@email.com",
    //     },
    //     {
    //       role: "Vice President Membership",
    //       name: "Tyler Anderson",
    //       email: "tyler.a@email.com",
    //     },
    //     {
    //       role: "Secretary",
    //       name: "Michelle Wong",
    //       email: "michelle.w@email.com",
    //     },
    //     {
    //       role: "Treasurer",
    //       name: "Brandon Taylor",
    //       email: "brandon.t@email.com",
    //     },
    //     {
    //       role: "Sergeant at Arms",
    //       name: "Jessica Miller",
    //       email: "jessica.m@email.com",
    //     },
    //   ],
    // },
  ],
};

function CabinetCard({ cabinet, year }: { cabinet: any; year: string }) {
  return (
    <div className="mb-8">
      <div className="bg-[#692528] text-white p-4 rounded-t-lg">
        <h3 className="text-2xl flex items-center gap-2">
          <Users size={24} className="text-[#FAD45F]" />
          Cabinet {year}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white border-2 border-[#692528]/10 rounded-b-lg">
        {cabinet.map((member: any, index: number) => (
          <Card
            key={index}
            className="border-2 border-[#E0F3FF] hover:border-[#FAD45F] transition-colors"
          >
            <CardHeader>
              <CardTitle className="text-lg text-[#692528]">
                {member.role}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-1">{member.name}</p>
              <p className="text-sm text-gray-500">{member.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function Cabinets() {
  const [activeTab, setActiveTab] = useState("present");

  return (
    <div className="min-h-screen bg-[#E0F3FF]/30">
      <div className="bg-[#692528] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-4">Club Cabinets</h1>
          <p className="text-xl text-[#E0F3FF]">
            The leaders who have shaped our club
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 bg-[#E0F3FF]">
            <TabsTrigger
              value="present"
              className="data-[state=active]:bg-[#692528] data-[state=active]:text-white"
            >
              Present Cabinet
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-[#692528] data-[state=active]:text-white"
            >
              Past Cabinets
            </TabsTrigger>
          </TabsList>

          <TabsContent value="present">
            <CabinetCard
              cabinet={cabinets.present.members}
              year={cabinets.present.year}
            />
          </TabsContent>

          <TabsContent value="past">
            {cabinets.past.map((cabinet, index) => (
              <CabinetCard
                key={index}
                cabinet={cabinet.members}
                year={cabinet.year}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
