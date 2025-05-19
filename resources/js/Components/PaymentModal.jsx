import { useState } from 'react';

export default function PaymentModal({ product, onClose }) {
    const [formData, setFormData] = useState({
        quantity: 1,
        email: '',
        payment_method: 'credit_card' // Valor por defecto
    });
    
    const [isSuccess, setIsSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        setIsProcessing(true);
        
        try {
            // Simulamos el procesamiento del pago
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Validación básica del correo
            if (!formData.email.includes('@')) {
                throw new Error('Por favor ingresa un correo electrónico válido');
            }
            
            setIsSuccess(true);
        } catch (error) {
            alert(error.message);
        } finally {
            setIsProcessing(false);
        }
    };

    const total = product.price * formData.quantity;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">
                            {isSuccess ? 'Compra Exitosa' : 'Detalles de Compra'}
                        </h2>
                        <button 
                            onClick={onClose} 
                            className="text-gray-500 hover:text-gray-700"
                            type="button"
                        >
                            &times;
                        </button>
                    </div>

                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="space-y-4">
                                {/* Campo de cantidad */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Cantidad
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        min="1"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    />
                                </div>

                                {/* Campo de correo electrónico */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        required
                                        placeholder="ejemplo@correo.com"
                                    />
                                </div>

                                {/* Selector de método de pago */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Método de Pago
                                    </label>
                                    <select
                                        name="payment_method"
                                        value={formData.payment_method}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded"
                                        required
                                    >
                                        <option value="credit_card">Tarjeta de Crédito</option>
                                        <option value="debit_card">Tarjeta de Débito</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="bank_transfer">Transferencia Bancaria</option>
                                        <option value="cash">Efectivo</option>
                                    </select>
                                </div>

                                {/* Resumen de compra */}
                                <div className="bg-gray-50 p-4 rounded">
                                    <p className="font-semibold">Resumen:</p>
                                    <p>{product.name} x {formData.quantity}</p>
                                    <p className="text-lg font-bold mt-2">
                                        Total: ${total.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className={`w-full py-2 px-4 rounded ${isProcessing ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                                >
                                    {isProcessing ? 'Procesando...' : 'Confirmar Compra'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-4">
                            <div className="text-center">
                                <div className="text-green-500 text-5xl mb-4">✓</div>
                                <h3 className="text-xl font-bold mb-2">¡Compra Exitosa!</h3>
                                <p className="mb-6">Tu pedido ha sido registrado correctamente.</p>
                            </div>

                            <div className="border rounded-lg p-4">
                                <h4 className="font-bold mb-2">Resumen de Compra</h4>
                                <div className="space-y-2">
                                    <p><span className="font-semibold">Producto:</span> {product.name}</p>
                                    <p><span className="font-semibold">Cantidad:</span> {formData.quantity}</p>
                                    <p><span className="font-semibold">Total:</span> ${total.toFixed(2)}</p>
                                    <p><span className="font-semibold">Método de Pago:</span> {
                                        formData.payment_method === 'credit_card' ? 'Tarjeta de Crédito' :
                                        formData.payment_method === 'debit_card' ? 'Tarjeta de Débito' :
                                        formData.payment_method === 'paypal' ? 'PayPal' :
                                        formData.payment_method === 'bank_transfer' ? 'Transferencia Bancaria' : 'Efectivo'
                                    }</p>
                                    <p><span className="font-semibold">Correo:</span> {formData.email}</p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="w-full bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded"
                                type="button"
                            >
                                Cerrar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}