import LinksSocial from "@/components/atoms/LinksSocial";
import { Instagram, Linkedin } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function LinksSidebar() {
  return (
    <div className="flex w-9 flex-col items-center gap-y-3 bg-white pt-4">
      <LinksSocial href="https://www.instagram.com/wsoto23/">
        <FaInstagram className="h-6 w-6" />
      </LinksSocial>
      <LinksSocial href="https://www.linkedin.com/in/wilmer-soto-04346a367/">
        <FaLinkedin className="h-6 w-6" />
      </LinksSocial>
    </div>
  );
}
