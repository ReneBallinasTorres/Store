import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Fooder';

export default function UserType() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head title="Selecciona tipo de usuario" />
            <Navbar />

            <main className="flex-grow bg-gray-50">
                {/* Cards de acceso */}
                <div className="container mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Accede como:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                        {/* Card Cliente */}
                        <div
                            onClick={() => window.location.href = '/login'}
                            className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-blue-600 mb-2">Cliente</h3>
                            <p className="text-gray-700">Accede para comprar productos y ver tus pedidos.</p>
                        </div>

                        {/* Card Admin */}
                        <div
                            onClick={() => window.location.href = '/admin/login'}
                            className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-xl font-semibold text-red-600 mb-2">Administrador</h3>
                            <p className="text-gray-700">Gestiona el sistema, usuarios y productos.</p>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
