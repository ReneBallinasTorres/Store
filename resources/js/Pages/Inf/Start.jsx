import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Fooder';
import { Link } from '@inertiajs/react';

export default function Start() {
    const { products = [], searchQuery, activeCategory } = usePage().props;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-6 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
                    {searchQuery
                        ? `Resultados para: "${searchQuery}"`
                        : activeCategory
                            ? `Categoría: ${activeCategory}`
                            : 'Catálogo de Productos'}
                </h1>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto pb-4">
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={route('products.show', product.id)}
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
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        {searchQuery ? 'No se encontraron productos que coincidan con tu búsqueda.' : 'No hay productos disponibles.'}
                    </p>
                )}
            </main>
            <Footer />
        </div>
    );
}