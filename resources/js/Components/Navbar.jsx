import React, { useState, useEffect  } from "react";
import { Link, usePage, useForm, router } from "@inertiajs/react";

export default function Navbar() {
    const [cartCount, setCartCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const { auth, categories = [] } = usePage().props;
    const { post } = useForm();

    const handleLogout = () => {
        post("/logout");
    };

    const handleSearch = (e) => {
        e.preventDefault();

        // Si hay categoría seleccionada pero no término de búsqueda
        if (selectedCategory && !searchTerm) {
            router.get(route('products.category', { category: selectedCategory }));
        }
        // Si hay término de búsqueda (con o sin categoría)
        else if (searchTerm) {
            router.get(route('products.search'), {
                query: searchTerm,
                category: selectedCategory
            });
        }
        // Si no hay nada, recargar la página inicial
        else {
            router.get(auth.user ? '/start' : '/');
        }
    };

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Verificar si el usuario es admin
        const checkAdminStatus = async () => {
            try {
                const response = await fetch('/api/check-admin');
                if (response.ok) {
                    const data = await response.json();
                    setIsAdmin(data.isAdmin);
                }
            } catch (error) {
                console.error("Error checking admin status:", error);
            }
        };

        checkAdminStatus();
    }, []);

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Link
                    href={auth.user ? "/start" : "/"}
                    onClick={() => setMenuOpen(false)}
                >
                    <img
                        src="/img/logoNew-WebStore.png"
                        alt="Logo"
                        className="h-14 cursor-pointer"
                    />
                </Link>
            </div>

            {/* Menú hamburguesa en móvil */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
                    {menuOpen ? "✖️" : "☰"}
                </button>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center gap-6">
                {/* Búsqueda */}
                <form onSubmit={handleSearch} className="flex gap-2">
                    {/* <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border px-2 py-1 rounded-md"
                    >
                        <option value="">Todas las categorías</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select> */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="border rounded-md px-12 py-1"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                            🔍
                        </button>
                    </div>
                </form>
                {/* Carrito */}
                {/* <div className="relative cursor-pointer text-2xl">
                    🛒
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </div> */}
            </div>

            {/* Links navegación + login */}
            <div className="hidden md:flex items-center gap-6">
                <ul className="flex gap-6 text-gray-700 font-medium">
                    <li><Link href={auth.user ? "/start" : "/"} className="hover:text-blue-500">Inicio</Link></li>
                    
                    {/* Mostrar enlace de administración solo si es admin */}
                    {(isAdmin || auth.user?.is_admin) && (
                        <li>
                            <Link 
                                href="/admin" 
                                className="hover:text-blue-500"
                            >
                                Administración
                            </Link>
                        </li>
                    )}
                    
                    <li><Link href="/about" className="hover:text-blue-500">Sobre Nosotros</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-500">Contacto</Link></li>
                </ul>

                {auth.user ? (
                    <div className="flex items-center gap-8">
                        <span className="flex items-center gap-2 text-gray-700 font-semibold">
                            👤 {auth.user.name}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Link href="/User" className="border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-100">
                            Iniciar Sesión
                        </Link>
                        <Link href="/register" className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
                            Registrarse
                        </Link>
                    </div>
                )}
            </div>

            {/* Menú Móvil */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50">
                    <form onSubmit={handleSearch} className="w-3/4 flex flex-col gap-2">
                        {/* <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border px-2 py-1 rounded-md"
                        >
                            <option value="">Todas las categorías</option>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select> */}

                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="border rounded-md px-12 py-1 w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            >
                                🔍
                            </button>
                        </div>
                    </form>

                    {/* <div className="relative text-2xl">
                        🛒
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div> */}

                    <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                        <li><Link href="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                        <li><Link href="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                    </ul>

                    {auth.user ? (
                        <div className="flex flex-col items-center gap-2">
                            <span className="flex items-center gap-2 text-gray-700 font-semibold">
                                👤 {auth.user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <Link href="/User" className="border border-blue-500 text-blue-500 px-4 py-1 rounded-md hover:bg-blue-100">
                                Iniciar Sesión
                            </Link>
                            <Link href="/register" className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
                                Registrarse
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
