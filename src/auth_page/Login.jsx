import {FaGoogle,FaFacebook, FaLock} from "react-icons/fa";

export default function Login(){
    return(
        <div className="flex items-center justify-center px-4 py-12">
            <section className="w-full max-w-md rounded-3xl bg-white px-8 py-8 shadow-xl">
                <div className="mb-6 text-center">
                    <h1 className="text-base font-semibold text-slate-800">Iniciar Sesion</h1>
                    <p className="mt-1 text-xs text-slate-500">Bienvenido De Nuevo</p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-1">
                        <label className="block text-xs font-medium text-slate-600">Correo Electronico</label>
                        <input type="email" placeholder="tu@email.com" className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-300"/>
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs font-medium text-slate-600">Password</label>
                        <div className="flex items-center rounded-lg border border-slate-200 bg-white px-3 py-2.5 focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-300">
                            <span className="mr-2 text-slate-400"><FaLock/></span>
                            <input type="password" className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="********" />
                            <button type="button" className="ml-2 text-xs text-slate-400 hover:text-slate-600">
                                Mostrar
                            </button>
                        </div>
                        <div className="mt-1 text-right">
                            <button type="button" className="text-[11px] font-medium text-sky-600 hover:text-sky-700">¿Olvidaste la contraseña?</button>
                        </div>
                    </div>

                    {/*check de recordar*/}

                    <button type="submit" className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700">Iniciar Sesion</button>
                </form>

                <div className="mt-4 text-center text-[11px] text-slate-500">
                    ¿No tienes cuenta?{" "}
                    <button type="button" className="font-medium text-sky-600 hover:text-sky-700">Crear Cuenta</button>
                </div>

                <div className="my-4 flex items-center justify-center gap-3 text-[11px] text-slate-400">
                    <span className="h-px flex-1 bg-slate-200" />
                    <span>O continuar con?</span>
                    <span className="h-px flex-1 bg-slate-200" />
                </div>

                <div className="flex gap-3">
                    <button type="button" className="flex-1 rounded-lg border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center">
                        <FaGoogle className="mr-1.5 text-red-500" size={25}/>
                        Google
                    </button>
                    <button type="button" className="flex-1 rounded-lg border border-slate-200 bg-white py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center">
                        <FaFacebook className="mr-1.5 text-sky-700" size={25}/>
                        Facebook
                    </button>
                </div>
            </section>
        </div>
    );
}