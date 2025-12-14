import { LogIn } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Nav() {

  const [usuario, setUsuario] = useState(null);
  const [abierto, setAbierto] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("usuario");
    if (stored) {
      try {
        setUsuario(JSON.parse(stored));
      }catch {
        setUsuario(null);
      }
    }
  },[]);


  const handleLogout = () => {
    console.log("HANDLE_LOGOUT");
    localStorage.removeItem("usuario");
    setUsuario(null);
    setAbierto(false);
    navigate("/");
  };

  const handlePerfil = () => {
    setAbierto(false);
  };



  return (
    <header className="relative z-50 w-full bg-gradient-to-r from-slate-900 to-slate-800 text-slate-50">
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

          {!usuario ? (
            <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-7 py-2.5 text-sm font-medium text-slate-900 transition-all hover:bg-amber-300 hover:-translate-y-[1px]"
          >
            <LogIn size={18} className="mt-[1px]" />
            <span>Login</span>
          </button>
          ): (
            <div className="relative">
              <button type="button"
              onClick={() =>setAbierto((prev)=> !prev)}
              className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-medium text-slate-900 transition-all hover:bg-amber-300 hover:-translate-y-[1px]"
              >
                <span>{usuario.nombre_completo}</span>
              </button>

              {abierto && (
                <div className="absolute right-0 mt-2 w-40 rounded-xl bg-white py-2 text-xs text-slate-700 shadow-lg">
                  <button type="button"
                  onClick={handlePerfil}
                  className="block w-full px-3 py-2 text-left hover:bg-slate-100"
                  >
                    Config.Perfil
                  </button>

                  <button type="button" onClick={handleLogout} className="block w-full px-3 py-2 text-left text-red-500 hover:bg-red-50">
                    Cerrar Sesion
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}