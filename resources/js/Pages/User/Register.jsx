import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        phone: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register"); // Ruta de registro en Laravel
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Crear Cuenta</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Campo de Nombre */}
                    <div>
                        <label className="block text-gray-700 font-medium">Nombre / Usuario</label>
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className="w-full border rounded-md px-10 py-2 focus:ring-2 focus:ring-blue-400"
                                placeholder="Tu nombre"
                                required
                            />
                            <span className="absolute left-3 top-3 text-gray-500">👤</span>
                        </div>
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

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

                    {/* Confirmación de Contraseña */}
                    <div>
                        <label className="block text-gray-700 font-medium">Confirmar Contraseña</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) => setData("password_confirmation", e.target.value)}
                                className="w-full border rounded-md px-10 py-2 focus:ring-2 focus:ring-blue-400"
                                placeholder="********"
                                required
                            />
                            <span className="absolute left-3 top-3 text-gray-500">🔒</span>
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-3 text-gray-500"
                            >
                                {showConfirmPassword ? "👁️" : "🙈"}
                            </button>
                        </div>
                        {errors.password_confirmation && (
                            <p className="text-red-500 text-sm">{errors.password_confirmation}</p>
                        )}
                    </div>

                    {/* Botón de Registro */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition"
                        disabled={processing}
                    >
                        {processing ? "Registrando..." : "Registrarse"}
                    </button>

                    {/* Enlace a Login */}
                    <div className="text-center text-sm text-gray-600 mt-4">
                        <Link href="/login" className="text-blue-500 hover:underline">
                            ¿Ya tienes cuenta? Inicia sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
