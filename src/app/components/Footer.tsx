import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: "http://x.com/GavelKyu", label: "Twitter" },

    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/kyambogo-gavel/",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/meetings", label: "Meetings" },
    { path: "/contact", label: "Contact" },
  ];

  const resourceLinks = [
    { path: "/blogs", label: "Blog" },
    { path: "/cabinets", label: "Cabinets" },
    { path: "/constitution", label: "Constitution" },
    { path: "/roles", label: "Roles" },
  ];

  return (
    <footer className="bg-[#692528] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Icons/logo.png"
                className="w-20 h-auto"
                alt="Kyu_Gavel_Logo"
              />
              <br />{" "}
              <h3 className="text-2xl text-[#FAD45F]">
                Gavel Club of Kyambogo
              </h3>
            </div>
            <p className="text-[#E0F3FF] mb-4">
              Empowering young leaders to develop communication and leadership
              skills in a supportive and encouraging environment.
            </p>
            <div className="flex items-center gap-2 text-[#E0F3FF]">
              <Mail size={18} />
              <a
                href="mailto:info@gavelclub.org"
                className="hover:text-[#FAD45F] transition-colors"
              >
                info@gavelclub.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-[#FAD45F]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#E0F3FF] hover:text-[#FAD45F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg mb-4 text-[#FAD45F]">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#E0F3FF] hover:text-[#FAD45F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Links & Copyright */}
        <div className="border-t border-[#8a3033] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#E0F3FF] text-sm order-2 md:order-1 text-center md:text-left">
              © {currentYear} Gavel Club of Kyambogo. <br /> All rights
              reserved.
              <br />
              Powered by{" "}
              <strong className="text-[#d6ab00]">The Design Lab</strong>
            </p>

            <div className="flex items-center gap-4 order-1 md:order-2">
              <span className="text-[#E0F3FF] text-sm">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-[#8a3033] rounded-full flex items-center justify-center hover:bg-[#FAD45F] hover:text-[#692528] transition-colors"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
