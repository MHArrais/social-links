import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"


export const SocialLinks = () => {
    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
            <div className="bg-white/15 backdrop-blur-none rounded-md hover:bg-white/20 w-120 h-180 flex flex-col items-center justify-center px-4">

                <img
                    src="/img_perfil.jpeg"
                    alt="foto perfil"
                    className="w-60 h-60 rounded-full mb-4 border-4 border-white shadow-md"
                />

                <h1 className="text-4xl font-bold mb-1 text-stroke-white text-gray-800">Márcio Henrique Arrais</h1>
                <p className="mb-10 text-sm font-style: italic p-0">Desenvolvedor Front-end - Support Hardware</p>

                <div className="w-full max-w-sm flex flex-col gap-4">
                    <a
                        href="www.google.com"
                        target="_black"
                        className="flex items-center justify-center gap-3 bg-amber-600  py-3 px-4 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-amber-700"
                    >
                        <FaInstagram size={24} />Instagram
                    </a>
                    <a
                        href="www.google.com"
                        target="_black"
                        className="flex items-center justify-center gap-3 bg-gray-500 py-3 px-4 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-gray-600"
                    >
                        <FaGithub size={24} />GitHub
                    </a>
                    <a
                        href="www.google.com"
                        target="_black"
                        className="flex items-center justify-center gap-3 bg-blue-500 py-3 px-4 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-600"
                    >
                        <FaLinkedin size={24} />LinkedIn
                    </a>
                    <a
                        href="www.google.com"
                        target="_black"
                        className="flex items-center justify-center gap-3 bg-green-500 py-3 px-4 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-green-600"
                    >
                        <FaWhatsapp size={24} />Whatsapp
                    </a>
                </div>
            </div>
            <footer className="bg-white/10 backdrop-blur-none text-white py-6 mt-10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} M.H Arrais. Todos os direitos reservados.
                    </p>

                    
                </div>
            </footer>
        </div>
    )
}