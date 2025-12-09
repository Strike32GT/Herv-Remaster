import { LogIn } from "lucide-react";




export default function Nav() {
  return (
    <header className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-slate-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">HERV</span>
          <span className="text-[11px] leading-tight text-slate-200/80">
            Crecer sin Limites
          </span>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex gap-8 text-[0.95rem]">
            <a href="#" className="relative pb-0.5 hover:text-white">
              <span className="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-200 hover:after:w-full">
                Inicio
              </span>
            </a>

            <a href="#" className="relative pb-0.5 hover:text-white">
              <span className="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-200 hover:after:w-full">
                Conocenos
              </span>
            </a>

            <a href="#" className="relative pb-0.5 hover:text-white">
              <span className="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-200 hover:after:w-full">
                Busquedas
              </span>
            </a>

            <a href="#" className="relative pb-0.5 hover:text-white">
              <span className="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-200 hover:after:w-full">
                Donaciones
              </span>
            </a>

            <a href="#" className="relative pb-0.5 hover:text-white">
              <span className="after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-200 hover:after:w-full">
                Foro
              </span>
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-7 py-2.5 text-sm font-medium text-slate-900 transition-all hover:bg-amber-300 hover:-translate-y-[1px]"
          >
            <LogIn size={18} className="mt-[1px]" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </header>
  );
}