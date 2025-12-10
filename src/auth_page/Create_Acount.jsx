import { FaLock } from "react-icons/fa";

export default function CrearCuenta() {
  return (
    <div className="flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-md rounded-3xl bg-white px-8 py-8 shadow-xl">
        

        <div className="mb-6 text-center">
          <h1 className="text-base font-semibold text-slate-800">
            Crear Cuenta
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Únete a Herv y crece sin límites
          </p>
        </div>

        
        <form className="space-y-4">
          

          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-300"
            />
          </div>

          
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="tu@email.com"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-300"
            />
          </div>

          
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Contraseña
            </label>
            <div className="flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-300">
              <span className="mr-2 text-slate-400">
                <FaLock />
              </span>
              <input
                type="password"
                className="w-full bg-transparent text-sm text-slate-700 outline-none"
                placeholder="********"
              />
              <button
                type="button"
                className="ml-2 text-xs text-slate-400 hover:text-slate-600"
              >
                Mostrar
              </button>
            </div>
          </div>

          
          <div className="space-y-1">
            <label className="block text-xs font-medium text-slate-600">
              Confirmar contraseña
            </label>
            <div className="flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-300">
              <span className="mr-2 text-slate-400">
                <FaLock />
              </span>
              <input
                type="password"
                className="w-full bg-transparent text-sm text-slate-700 outline-none"
                placeholder="********"
              />
              <button
                type="button"
                className="ml-2 text-xs text-slate-400 hover:text-slate-600"
              >
                Mostrar
              </button>
            </div>
          </div>

          
          <div className="flex items-start gap-2 pt-1">
            <input
              id="terms"
              type="checkbox"
              className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-sky-600 focus:ring-sky-400"
            />
            <label
              htmlFor="terms"
              className="text-[11px] text-slate-600 leading-snug"
            >
              Acepto los{" "}
              <span className="cursor-pointer text-sky-600 hover:text-sky-700">
                términos y condiciones
              </span>{" "}
              y la{" "}
              <span className="cursor-pointer text-sky-600 hover:text-sky-700">
                política de privacidad
              </span>
            </label>
          </div>

          
          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
          >
            Crear Cuenta
          </button>
        </form>


        <div className="mt-4 text-center text-[11px] text-slate-500">
          ¿Ya tienes cuenta?{" "}
          <button
            type="button"
            className="font-medium text-sky-600 hover:text-sky-700"
          >
            Iniciar sesión
          </button>
        </div>
      </section>
    </div>
  );
}