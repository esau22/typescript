"use client";
import Link from "next/link";
import MainMenu from "@/components/shared-portafolio/main-menu";
import { cn } from "@/libs/utils";

interface SidebarProps {
  showMenu: boolean;
  onClose: () => void;
}

const Sidebar = ({ showMenu, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:left-0 bg-dark w-[70vw] md:w-[30vw] lg:w-[20vw] xl:w-[13vw] h-full border-r border-gray-500/30 transition-all duration-300 ease-in-out z-50",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="p-8 border-b border-gray-500/30">
          <Link
            href="/"
            className="text-xl text-white hover:text-secundary transition-colors duration-300"
          >
            Emer Espiritu
          </Link>
          <h3 className="text-gray-500 font-light">Web developer</h3>
        </section>
        <section className="">
          <MainMenu />
        </section>
      </aside>
      <div
        onClick={onClose}
        className={cn(
          "fixed bg-black/10 z-40 left-0 top-0 w-full h-full lg:hidden",
          showMenu ? "block" : "hidden"
        )}
      ></div>
    </>
  );
};

export default Sidebar;
