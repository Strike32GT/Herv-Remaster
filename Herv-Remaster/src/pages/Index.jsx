import Nav from "../components/Nav";
import heroImg from "../images/HervPublic.jpg";

export default function Index() {
    return (
        <>
        <Nav />
        <main className="relative min-h-[calc(100vh-64px)] text-white">
            <div className="absolute inset-0 -z-10">
                <img src={heroImg} alt="Herv Publicidad"  className="h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-black/45"/>
            </div>

            <div className="mx-auto flex max-w-6xl items-center justify-between gap-16 px-10 py-20 lg:flex-row">
                <section className="max-w-lg space-y-4">
                    <h1 className="text-4xl font-bold md:text-5xl">Bienvenido</h1>
                    <p className="text-base md:text-lg leading-relaxed">Aqui encontraras varias carreras universitarias o trabajos, de acuerdo a sus habilidades.</p>
                </section>

                <section className="w-full max-w-md rounded-3xl bg-white/95 p-8 text-slate-800 shadow-2xl backdrop-blur">
                    <h2 className="mb-1 text-center text-sm font-semibold text-sky-700">Descubre tu carrera ideal</h2>
                    <p className="mb-6 text-center text-xs text-slate-500">Ingrese 3 o 4 habilidades</p>

                    <div className="mb-6 flex items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-white">
                        <input type="text" placeholder="Ej: programar, musica, ..." className="w-full px-4 py-3 text-sm outline-none placeholder:text-slate-400"/>
                        <button type="button" className="flex items-center justify-center bg-slate-100 px-4 text-xl text-slate-500 hover:bg-slate-200">+</button>
                    </div>

                    <p className="mb-4 text-right text-[11px] text-slate-500">
                        Habilidades: 0/4 (minimo 3)
                    </p>

                    <button type="button" className="mt-2 w-full rounded-2xl bg-slate-300 py-3 text-sm font-medium text-slate-700 hover:bg-slate-400">
                        Agrega 3 Mas 
                    </button>
                </section>
            </div>
        </main>
        </>
    );
}