import Nav from "../components/Nav.jsx";
import { Timer } from "lucide-react";


export default function Busquedas() {
    return(
        <>
            <Nav/>

            <div className="mx-auto max-w-4xl px-6 py-10">
                <header className="mb-6">
                    <h1 className="text-sm font-semibold text-slate-700">
                        Historial de Busquedas
                    </h1>
                    
                    <p className="mt-1 text-xs text-slate-500">Revisa y vuelve a cargar tus busquedas anteriores</p>
                </header>

                <section className="rounded-3xl bg-white px-10 py-12 shadow-sm">
                    <div className="flex flex-col items-center text-center text-slate-500">
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 text-2xl">
                            <Timer size={32} />
                        </div>

                        <p className="mb-1 text-sm font-semibold text-slate-600">No hay busquedas aun</p>
                        <p className="text-xs text-slate-500">Comienza a explorar tus opciones de carrera para ver historial aqui</p>
                    </div>
                </section>
            </div>
        </>
    );
}