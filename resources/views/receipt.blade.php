<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Recibo de Compra - {{ $transaction_id }}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .header { text-align: center; margin-bottom: 20px; }
        .header h1 { color: #2d3748; }
        .details { margin: 30px 0; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f7fafc; }
        .total { font-weight: bold; font-size: 1.2em; margin-top: 20px; }
        .footer { margin-top: 50px; text-align: center; font-size: 0.9em; color: #718096; }
        .section { margin-bottom: 30px; }
        .section-title { font-weight: bold; margin-bottom: 10px; color: #2d3748; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Recibo de Compra</h1>
        <p>N° Transacción: {{ $transaction_id }}</p>
        <p>Fecha: {{ $date }}</p>
    </div>
    
    <div class="section">
        <div class="section-title">Datos del Cliente</div>
        <p>Nombre: {{ $user->name }}</p>
        <p>Email: {{ $email }}</p>
    </div>
    
    <div class="section">
        <div class="section-title">Detalles del Pago</div>
        <p>Método: {{ ucfirst(str_replace('_', ' ', $payment_method)) }}</p>
        <p>Notas: {{ $notes ?: 'Ninguna' }}</p>
    </div>
    
    <div class="section">
        <div class="section-title">Detalles del Producto</div>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $product->name }}</td>
                    <td>{{ $quantity }}</td>
                    <td>${{ number_format($product->price, 2) }}</td>
                    <td>${{ number_format($product->price * $quantity, 2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <div class="total">
        <p>Total: ${{ number_format($total, 2) }}</p>
    </div>
    
    <div class="footer">
        <p>Gracias por su compra en {{ config('app.name') }}</p>
        <p>Para cualquier consulta, contacte a soporte@tienda.com</p>
    </div>
</body>
</html>