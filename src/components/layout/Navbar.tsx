import { AlignLeft, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((p) => !p);

  const navItems = [
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Links", link: "#links" }
  ];

  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-5 md:px-30 py-4 md:py-6 backdrop-blur-md border-b bg-white border-slate-200/60 transition-colors duration-300">
        <div className="flex items-center justify-between md:hidden">
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition"
          >
            <AlignLeft size={26} />
          </button>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Suddala <span className="text-indigo-700">Pavan Kalyan</span>.
          </span>
        </div>

        <div className="hidden md:flex items-center justify-between">
          <span className="text-3xl font-bold tracking-tight text-slate-900">
            Suddala <span className="text-indigo-700">Pavan Kalyan</span>.
          </span>
          <nav>
            <ul className="flex items-center gap-10">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className="relative text-[15px] font-medium text-slate-600 hover:text-indigo-600 transition group"
                >
                  <a href={item.link}>{item.label}</a>
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 rounded-full transition-all duration-300 group-hover:w-full" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-white text-slate-900 transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Suddala <span className="text-indigo-700">Pavan Kalyan</span>.
          </span>
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 active:scale-95 transition"
          >
            <X size={32} />
          </button>
        </header>

        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <ul className="space-y-6">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="text-xl font-medium text-slate-700 hover:text-indigo-600 transition"
              >
                <a href={item.link} onClick={toggle}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="px-6 py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Pavan Kalyan. All rights reserved.
        </footer>
      </div>
    </>
  );
}
