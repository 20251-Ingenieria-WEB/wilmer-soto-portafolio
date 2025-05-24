import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Header1 from "@/components/atoms/Header1";

const LinksData = [
  {
    href: "https://www.instagram.com/wsoto23/",
    Icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/wilmer-soto-04346a367/",
    Icon: FaLinkedin,
  },
  {
    href: "https://github.com/WilmerSoto",
    Icon: FaGithub,
  },
];

export default function LinksSidebar() {
  return (
    <div className="flex w-10 flex-col items-center gap-y-3 bg-white pt-4">
      {LinksData.map((entry, index) => (
        <Link
          key={index}
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <entry.Icon className="h-6 w-6" />
        </Link>
      ))}
    </div>
  );
}
