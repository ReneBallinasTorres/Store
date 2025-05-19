import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Fooder';
import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head title="Contacto" />
            <Navbar />
            
            <main className="flex-grow bg-gray-50">
                {/* Hero Section */}
                <div className="relative bg-blue-600 text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                            Estamos aquí para ayudarte. Encuéntranos a través de estos medios.
                        </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-white transform skew-y-1"></div>
                </div>

                {/* Contenido Principal */}
                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Información de contacto</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Columna izquierda */}
                                <div className="space-y-6">
                                    {/* Dirección */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-800">Dirección</h3>
                                            <p className="text-gray-600">Carretera Teapa-Tacotalpa, 5,</p>
                                            <p className="text-gray-600">Francisco Javier Mina Km 4, 86801</p>
                                            <p className="text-gray-600">Teapa, Tab.</p>
                                        </div>
                                    </div>

                                    {/* Teléfono */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-800">Teléfono</h3>
                                            <p className="text-gray-600">
                                                <a href="tel:+11234567890" className="hover:text-blue-500">+52 (932) 114-8706</a>
                                            </p>
                                            <p className="text-gray-600">
                                                <a href="tel:+19876543210" className="hover:text-blue-500">+52 (932) 117-5568</a>
                                            </p>
                                            <p className="text-gray-600">
                                                <a href="tel:+11234567890" className="hover:text-blue-500">+52 (993) 426-7949</a>
                                            </p>
                                            <p className="text-gray-600">
                                                <a href="tel:+11234567890" className="hover:text-blue-500">+52 (932) 104-0897</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Columna derecha */}
                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-800">Correo electrónico</h3>
                                            <p className="text-gray-600">
                                                <a href="mailto:info@tutienda.com" className="hover:text-blue-500">info@tutienda.com</a>
                                            </p>
                                            <p className="text-gray-600">
                                                <a href="mailto:soporte@tutienda.com" className="hover:text-blue-500">soporte@tutienda.com</a>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Horario */}
                                    <div className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-800">Horario de atención</h3>
                                            <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
                                            <p className="text-gray-600">Sábados: 8:00 AM - 2:00 PM</p>
                                            <p className="text-gray-600">Domingos: Cerrado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mapa */}
                            <div className="mt-12">
                                <h3 className="font-semibold text-lg text-gray-800 mb-4 text-center">Ubicación</h3>
                                <div className="aspect-w-16 aspect-h-9">
                                    
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.1805849505736!2d-92.9117736!3d17.5465869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edba26af875131%3A0xc124cf73d391e65!2sTecNM%20Campus%20de%20la%20Region%20sierra!5e0!3m2!1ses-419!2smx!4v1745803253840!5m2!1ses-419!2smx"
                                        width="100%" 
                                        height="400" 
                                        style={{ border: 0 }}
                                        allowFullScreen="" 
                                        loading="lazy" 
                                        className="rounded-lg"
                                        title="Ubicación en mapa"
                                    ></iframe>
                                </div>
                            </div>

                            {/* Redes Sociales */}
                            <div className="mt-12 text-center">
                                <h3 className="font-semibold text-lg text-gray-800 mb-4">Síguenos en redes sociales</h3>
                                <div className="flex justify-center gap-6">
                                    <a href="https://www.facebook.com/share/15XXHXzaW7/" className="text-blue-600 hover:text-blue-800 text-2xl">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="https://twitter.com/TecNMRegionS" className="text-blue-400 hover:text-blue-600 text-2xl">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/explore/locations/190874770988922/tecnm-region-sierra/" className="text-pink-600 hover:text-pink-800 text-2xl">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@tecnmcampusregionsierra8094" className="text-red-600 hover:text-red-800 text-2xl">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}