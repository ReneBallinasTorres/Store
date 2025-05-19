<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    //
    public function store(Request $request)
    {
        // Validar datos
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // Intentar iniciar sesión
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate(); // Muy importante: para prevenir ataques de sesión
            return redirect()->intended('/start'); // Redirige a start
        }

        // Si falla el login
        return back()->withErrors([
            'email' => 'Las credenciales proporcionadas no coinciden con nuestros registros.',
        ]);
    }

    protected function redirectTo()
    {
        return route('start');
    }
}
