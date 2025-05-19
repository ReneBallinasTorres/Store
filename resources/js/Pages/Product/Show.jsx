import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Fooder';
import { useState } from 'react';
import PaymentModal from '@/Components/PaymentModal';

export default function Show() {
    const { product } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [isPurchaseSuccess, setIsPurchaseSuccess] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-6 bg-gray-100">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <div className="p-8 md:w-1/2">
                            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
                            <div className="mt-4">
                                <span className="text-3xl font-bold text-blue-500">${product.price}</span>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-gray-700">Descripción</h2>
                                <p className="mt-2 text-gray-600">{product.description}</p>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-lg font-semibold text-gray-700">Categoría</h2>
                                <p className="mt-2 text-gray-600">{product.category}</p>
                            </div>
                            <button 
                                onClick={() => setShowModal(true)}
                                className="mt-8 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition"
                            >
                                Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            
            {showModal && (
                <PaymentModal 
                    product={product} 
                    onClose={() => {
                        setShowModal(false);
                        setIsPurchaseSuccess(false); // Resetear estado al cerrar
                    }}
                    isSuccess={isPurchaseSuccess}
                    setIsSuccess={setIsPurchaseSuccess}
                />
            )}
            
            <Footer />
        </div>
    );
}