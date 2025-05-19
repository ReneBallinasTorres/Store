export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Información de la empresa */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-400">Web Store</h2>
                    <p className="text-gray-400 mt-2">
                        Innovación, calidad y confianza en compras en Línea. Explora nuestra tienda con los mejores recursos y productos.
                    </p>
                </div>

                {/* Enlaces Rápidos */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-400">Enlaces Rápidos</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/" className="text-gray-400 hover:text-white">Inicio</a></li>
                        <li><a href="/about" className="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white">Contacto</a></li>
                        <li><a href="/" className="text-gray-400 hover:text-white">Tienda</a></li>
                    </ul>
                </div>

                {/* Redes Sociales */}
                <div>
                    <h2 className="text-xl font-semibold text-blue-400">Síguenos</h2>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.facebook.com/share/15XXHXzaW7/" className="text-gray-400 hover:text-white text-xl">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/TecNMRegionS" className="text-gray-400 hover:text-white text-xl">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/explore/locations/190874770988922/tecnm-region-sierra/" className="text-gray-400 hover:text-white text-xl">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    {/* Integrantes */}
                    <h2 className="text-xl font-semibold text-blue-400 mt-4">Integrantes</h2>
                    <div className="flex justify-center gap-6 items-center pb-5 flex-wrap md:flex-nowrap">
                        <div className="flex flex-col items-center text-center">
                            <img src="/img/Ren.jpeg" alt="Miembro 1" className="w-16 h-16 rounded-full mb-2" />
                            <span className="text-sm text-white">Desarrollador 1</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/img/Batalla.jpeg" alt="Miembro 2" className="w-16 h-16 rounded-full mb-2" />
                            <span className="text-sm text-white">Desarrollador 2</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/img/Cyndi.jpeg" alt="Miembro 3" className="w-16 h-16 rounded-full mb-2" />
                            <span className="text-sm text-white">Desarrollador 3</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/img/Fer.jpeg" alt="Miembro 4" className="w-16 h-16 rounded-full mb-2" />
                            <span className="text-sm text-white">Desarrollador 4</span>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img src="/img/luis.jpeg" alt="Miembro 4" className="w-16 h-16 rounded-full mb-2" />
                            <span className="text-sm text-white">Desarrollador 5</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Línea Divisoria y Copyright */}
            <hr className="border-gray-700 my-6" />
            <p className="text-center text-gray-400">© 2025 Web Store. Todos los derechos reservados.</p>
        </footer>
    );
}
