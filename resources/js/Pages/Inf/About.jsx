import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Fooder';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow p-4 bg-gray-50">
                {/* Hero Section */}
                <div className="relative bg-blue-600 text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nuestra Tienda</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Descubre la pasión y dedicación detrás de cada producto que ofrecemos
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-white transform skew-y-1"></div>
                </div>

                {/* Nuestra Historia */}
                <section className="container mx-auto px-4 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <img 
                                src="img/ITSS.png" 
                                alt="Nuestro equipo" 
                                className="rounded-lg shadow-xl w-full h-auto"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
                            <p className="text-gray-600 mb-4">
                                Fundada en 2023, nuestra tienda nació de la pasión por ofrecer productos de calidad a precios accesibles. 
                                Lo que comenzó como un pequeño emprendimiento entre amigos, hoy se ha convertido en una de las tiendas 
                                online más confiables de la región.
                            </p>
                            <p className="text-gray-600 mb-4">
                                Nos especializamos en productos tecnológicos, desde accesorios hasta dispositivos electrónicos, 
                                siempre buscando las mejores marcas y garantías para nuestros clientes.
                            </p>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-blue-700 font-medium">
                                    "Nuestra misión es hacer la tecnología accesible para todos, con servicio excepcional y soporte personalizado."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Valores */}
                <section className="bg-gray-100 py-12 md:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Valores</h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Valor 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <span className="text-blue-600 text-2xl">✓</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
                                <p className="text-gray-600">
                                    Todos nuestros productos pasan por rigurosos controles de calidad antes de llegar a ti.
                                </p>
                            </div>
                            
                            {/* Valor 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <span className="text-blue-600 text-2xl">💚</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Servicio al Cliente</h3>
                                <p className="text-gray-600">
                                    Soporte 24/7 y garantía extendida en todos nuestros productos.
                                </p>
                            </div>
                            
                            {/* Valor 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <span className="text-blue-600 text-2xl">🚀</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Envíos Rápidos</h3>
                                <p className="text-gray-600">
                                    Entrega express en 24-48 horas en la mayoría de nuestras ubicaciones.
                                </p>
                            </div>
                            
                            {/* Valor 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                    <span className="text-blue-600 text-2xl">🔄</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Devoluciones Fáciles</h3>
                                <p className="text-gray-600">
                                    Política de devolución sin complicaciones dentro de los 30 días.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equipo */}
                <section className="container mx-auto px-4 py-12 md:py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Conoce al Equipo</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                        {/* Miembro 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                            <img src="img/Ren.jpeg" alt="Miembro del equipo" className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Ren</h3>
                                <p className="text-blue-600 mb-2">CEO & Fundador</p>
                                <p className="text-gray-600 text-sm">
                                    Apasionado por la tecnología y el servicio al cliente.
                                </p>
                            </div>
                        </div>
                        
                        {/* Miembro 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                            <img src="img/Batalla.jpeg" alt="Miembro del equipo" className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Batalla</h3>
                                <p className="text-blue-600 mb-2">Director de Operaciones</p>
                                <p className="text-gray-600 text-sm">
                                    Experto en logística y cadena de suministro.
                                </p>
                            </div>
                        </div>

                        {/* Miembro 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                            <img src="img/Fer.jpeg" alt="Miembro del equipo" className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Fernando</h3>
                                <p className="text-blue-600 mb-2">Director de Operaciones</p>
                                <p className="text-gray-600 text-sm">
                                    Experto en logística y cadena de suministro.
                                </p>
                            </div>
                        </div>
                        
                        {/* Miembro 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                            <img src="img/Cyndi.jpeg" alt="Miembro del equipo" className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Cyndi</h3>
                                <p className="text-blue-600 mb-2">Directora de Marketing</p>
                                <p className="text-gray-600 text-sm">
                                    Especialista en branding y redes sociales.
                                </p>
                            </div>
                        </div>
                        
                        {/* Miembro 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                            <img src="img/luis.jpeg" alt="Miembro del equipo" className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">Luis</h3>
                                <p className="text-blue-600 mb-2">CTO</p>
                                <p className="text-gray-600 text-sm">
                                    Desarrollador de la plataforma y experto en TI.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-blue-600 text-white py-12 md:py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">¿Listo para una experiencia de compra excepcional?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Descubre nuestra amplia selección de productos y únete a miles de clientes satisfechos.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a 
                                href="/" 
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                            >
                                Ver Productos
                            </a>
                            <a 
                                href="/contact" 
                                className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                            >
                                Contáctanos
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
}