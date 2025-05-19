import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Fooder';
import { usePage } from '@inertiajs/react';

export default function Home() {
    const { products = [] } = usePage().props;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Productos Destacados</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map(product => (
                        <a
                            key={product.index}
                            href="/User"
                            className="bg-white p-4 rounded shadow hover:shadow-lg transition text-center block"
                        >
                            {product.image && (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded mb-3"
                                />
                            )}
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="text-gray-600 truncate">{product.description}</p>
                            <p className="text-blue-500 font-bold mt-2">${product.price}</p>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-6">
                    <a
                        href="/User"
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Inicia sesión para ver más productos
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
