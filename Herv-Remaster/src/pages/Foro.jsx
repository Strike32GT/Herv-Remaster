import Nav from "../components/Nav";
import {ThumbsUp, User, GraduationCap} from "lucide-react";


export default function Foro() {
    return(
        <>
        <Nav />
        <div className="mx-auto max-w-4xl px-6 py-10">
            <header className="mb-6">
                <h1 className="text-sm font-semibold text-slate-700">Foro de Estudiantes</h1>
                <p className="mt-1 text-xs text-slate-500">Consulta tu experiencia y conecta con otros estudiantes</p>
            </header>

            <div className="mb-6">
                <input type="text" placeholder="Comparte tu experiencia ..." className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:ring-1 focus:ring-sky-300"/>
            </div>

            <article className="mb-4 rounded-3xl bg-white px-6 py-5 shadow-sm">
                <header className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xl">
                            <GraduationCap />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-800">Maria Gonzales</p>
                            <p className="text-[11px] text-slate-500">Ingenieria de Sistemas PUCP</p>
                        </div>
                    </div>
                    <p className="text-[11px] text-slate-400">Hace 2 horas</p>
                </header>

                <h2 className="mb-1 text-sm font-semibold text-slate-800">
                    ¿Vale la pena estudiar Ingeniería de Sistemas en 2024?
                </h2>

                <p className="mb-4 text-xs leading-relaxed text-slate-600">
                    Estoy en mi tercer ciclo y puedo decir que la carrera es exigente pero muy gratificante.
                    Las oportunidades laborales son excelentes y el campo es muy dinámico. ¿Alguien más tiene
                    experiencias similares?
                </p>

                <footer className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                    <div className="flex items-center gap-4">
                        <button type="button" className="flex items-center gap-1 hover:text-slate-700">
                            <ThumbsUp/>
                            <span>45</span>
                        </button>

                        <button type="button" className="flex items-center gap-1 hover:text-slate-700">
                            <span>Mensaje Burbuja</span>
                            <span>12 Comentarios</span>
                        </button>
                    </div>
                    <button type="button" className="flex items-center gap-1 hover:text-slate-700">
                        <span>Estadistica</span>
                        <span>Compartir</span>
                    </button>
                </footer>
            </article>

            <article className="mb-4 rounded-3xl bg-white px-6 py-5 shadow-sm">
                <header className="mb-3 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-xl">
                            <User />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-800">Carlos Mendoza</p>
                            <p className="text-[11px] text-slate-500">Administracion Universidad de Lima</p>
                        </div>
                    </div>
                    <p className="text-[11px] text-slate-400">Hace 5 horas</p>
                </header>

                <h2 className="mb-1 text-sm font-semibold text-slate-800">
                    Mi experiencia pasando de la universidad al mundo laboral
                </h2>

                <p className="mb-4 text-xs leading-relaxed text-slate-600">
                    Recién me gradué hace 6 meses y conseguí trabajo en una empresa multinacional.
                    Los consejos que daría: hagan prácticas, networking es clave, y nunca dejen de aprender.
                </p>

                <footer className="mt-2 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] text-slate-500">
                    <div className="flex items-center gap-4">
                        <button type="button" className="flex items-center gap-1 hover:text-slate-700">
                            <ThumbsUp/>
                            <span>38</span>
                        </button>

                        <button type="button" className="flex items-center gap-1 hover:text-slate-700">
                            <span>Mensaje Burbuja</span>
                            <span>12 Comentarios</span>
                        </button>
                    </div>
                    <button type="button" className="flex items-center gap-1 hover:text-slate-700">
                        <span>Estadistica</span>
                        <span>Compartir</span>
                    </button>
                </footer>
            </article>


        </div>
        </>
    );
}