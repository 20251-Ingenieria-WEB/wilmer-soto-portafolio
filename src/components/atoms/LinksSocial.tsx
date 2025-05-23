import Link from "next/link";

export default function LinksSocial({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return <Link href={href}>{children}</Link>;
}
