import { useState } from "react";
import { LinkList } from "./shared/LinkList";
import { Logo } from "./shared/Logo";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <nav className="flex w-full items-center justify-around bg-sky-50 p-2">
      {/* pass menuOpen dinamically to the Logo component */}
      <Logo menuOpen={menuOpen} />

      <div className="hidden md:block">
        <LinkList />
      </div>
      <div className="group h-full rounded-md p-2 shadow-md transition-all duration-300 hover:bg-slate-300 hover:shadow-xl lg:hidden">
        <div
          className={`flex h-6 w-8 cursor-pointer flex-col items-center justify-around gap-1 transition-all duration-150 
            ${menuOpen ? "-translate-x-1" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-1  rounded-full bg-slate-900 transition-all duration-150 ${
              menuOpen ? "w-5 translate-x-2 rotate-45" : "w-6 "
            }`}
          ></div>
          <div
            className={`h-1 rounded-full bg-slate-900 transition-all duration-150 ${
              menuOpen ? "w-5 translate-x-[2px]" : "w-7 "
            }`}
          ></div>
          <div
            className={`h-1 rounded-full bg-slate-900 transition-all duration-150 ${
              menuOpen ? "w-5 translate-x-2 -rotate-45" : " w-6 "
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
}
