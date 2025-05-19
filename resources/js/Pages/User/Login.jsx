import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login"); // Ruta de autenticación en Laravel
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Iniciar Sesión</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Campo de Correo */}
                    <div>
                        <label className="block text-gray-700 font-medium">Correo Electrónico</label>
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                className="w-full border rounded-md px-10 py-2 focus:ring-2 focus:ring-blue-400"
                                placeholder="correo@ejemplo.com"
                                required
                            />
                            <span className="absolute left-3 top-3 text-gray-500">📧</span>
                        </div>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Campo de Contraseña */}
                    <div>
                        <label className="block text-gray-700 font-medium">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className="w-full border rounded-md px-10 py-2 focus:ring-2 focus:ring-blue-400"
                                placeholder="********"
                                required
                            />
                            <span className="absolute left-3 top-3 text-gray-500">🔒</span>
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-500"
                            >
                                {showPassword ? "👁️" : "🙈"}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    {/* Botón de Iniciar Sesión */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition"
                        disabled={processing}
                    >
                        {processing ? "Ingresando..." : "Iniciar Sesión"}
                    </button>

                    {/* Enlaces */}
                    <div className="text-center text-sm text-gray-600 mt-4">
                        <Link href="/register" className="text-blue-500 hover:underline">¿No tienes cuenta? Regístrate</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
