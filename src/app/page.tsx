import Main from "@/components/templates/Main";
import Sidebar from "@/components/templates/Sidebar";
import LinksSidebar from "@/components/organisms/LinksSidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Main />
      <LinksSidebar />
    </div>
  );
}
