<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage; // Añade esta línea
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function process(Request $request, $productId)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1',
            'email' => 'required|email',
            'payment_method' => 'required|string',
        ]);

        $product = Product::findOrFail($productId);
        $user = Auth::user();
        $total = $product->price * $request->quantity;

        $transactionData = [
            'product' => $product,
            'user' => $user,
            'quantity' => $request->quantity,
            'total' => $total,
            'payment_method' => $request->payment_method,
            'email' => $request->email,
            'notes' => $request->notes ?? '',
            'date' => now()->format('d/m/Y H:i:s'),
            'transaction_id' => 'TRX-' . uniqid()
        ];

        $pdf = Pdf::loadView('receipt', $transactionData);
        $pdfPath = 'receipts/' . $transactionData['transaction_id'] . '.pdf';
        Storage::put($pdfPath, $pdf->output());

        return response()->json([
            'success' => true,
            'message' => 'Compra realizada con éxito',
            'receipt' => $transactionData,
            'pdf_url' => route('download.receipt', $transactionData['transaction_id'])
        ]);
    }

    public function downloadReceipt($transactionId)
    {
        $pdfPath = 'receipts/' . $transactionId . '.pdf';

        if (!Storage::exists($pdfPath)) {
            abort(404);
        }

        return Storage::download($pdfPath, 'recibo-' . $transactionId . '.pdf');
    }
}
