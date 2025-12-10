import { FaHeart, FaStar,FaGlobe, FaLightbulb, FaSpinner } from "react-icons/fa";


export default function Conocer() {
    return(
        <>
            <div className="mx-auto max-w-6xl px-6 py-10">
                <section className="mb-10 text-center">
                    <h2 className="text-xs font-semibold tracking-wide text-slate-500">Conocenos</h2>
                    <p className="mt-3 text-sm text-slate-600 md:text-base">Herv es una plataforma dedicada a ayudar a estudiantes a descubrir su camino profesional ideal basandose en sus habilidades unicas</p>
                </section>

                <section className="mb-12 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl bg-gradient-to-br from-sky-100 to-blue-50 p-6 shadow-sm">
                        <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white text-xl">
                                <FaSpinner/>
                            </div>
                            <h3 className="text-sm font-semibold text-slate-800">Nuestra Mision</h3>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-600">Empoderar a los jovenes peruanos para que tomen decisiones informadas sobre el futuro academico y profesional, conectando sus habilidades con las mejores oportunidades educativas del pais.</p>
                    </div>

                    <div className="rounded-3xl bg-gradient-to-br from-fuchsia-100 to-purple-50 p-6 shadow-sm">
                        <div className="mb-3 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500 text-white text-xl">
                                <FaLightbulb/>
                            </div>
                            <h3 className="text-sm font-semibold text-slate-800">Nuestra Vision</h3>
                        </div>
                        <p className="text-xs leading-relaxed text-slate-600">Ser la plataforma lider en orientacion vocacional en Peru, ayudando a miles de estudiantes cada año a encontrar su vocacion y alcanzar sus metas profesionales con confianza</p>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="mb-6 text-center text-xs font-semibold text-slate-500">Nuestros valores</h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                            <div className="mb-3 flex items-center justify-center">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-lg text-amber-500">
                                    <FaHeart />
                                </span>
                            </div>
                            <h3 className="mb-1 text-sm font-semibold text-slate-800">Empatia</h3>
                            <p className="text-[11px] text-slate-500">Entendemos las dudas y miedos de cada estudiante</p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                            <div className="mb-3 flex items-center justify-center">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-500"><FaGlobe/></span>
                            </div>
                            <h3 className="mb-1 text-sm font-semibold text-slate-800">Inclusion</h3>
                            <p className="text-[11px] text-slate-500">Educacion accesible para todos, sin barreras</p>
                        </div>

                        <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
                            <div className="mb-3 flex items-center justify-center">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-lg text-sky-500"><FaStar /></span>
                            </div>
                            <h3 className="mb-1 text-sm font-semibold text-slate-800">Excelencia</h3>
                            <p className="text-[11px] text-slate-500">Informacion precisa y actualizacion siempre</p>
                        </div>
                    </div>
                </section>


                <section className="space-y-6">
                    <div className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-8 text-center text-slate-50 shadow-md">
                        <p className="mb-2 text-xs font-medium text-slate-200">Quienes Somos?</p>
                        <p className="mb-2 text-xs text-slate-200">
                            Somos un equipo de educadores, desarrolladores y orientadores
                            vocacionales apasionados por ayudar a la próxima generación de
                            profesionales peruanos.
                        </p>
                        <p className="mt-3 text-xs font-semibold text-amber-400">Crecer sin Limites</p>
                    </div>

                    <div className="grid gap-4 text-center text-xs text-slate-500 md:grid-cols-3">
                        <div>
                            <p className="text-lg font-semibold text-sky-600">1000+</p>
                            <p>Estudiantes Ayudados</p>
                        </div>

                        <div>
                            <p className="text-lg font-semibold text-sky-600">50+</p>
                            <p>Carreras Analizadas</p>
                        </div>

                        <div>
                            <p className="text-lg font-semibold text-sky-600">30+</p>
                            <p>Universidades asociadas</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}