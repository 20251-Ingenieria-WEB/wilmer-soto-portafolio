import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Header1 from "@/components/atoms/Header1";

export default function LinksSidebar() {
  return (
    <div className="flex w-10 flex-col items-center gap-y-3 bg-white pt-4">
      <Header1 className="text-xs">Links</Header1>
      <Link
        href="https://www.instagram.com/wsoto23/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="h-6 w-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/wilmer-soto-04346a367/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="h-6 w-6" />
      </Link>
    </div>
  );
}
