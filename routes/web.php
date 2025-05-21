<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Support\Facades\Auth; 
// use Illuminate\Container\Attributes\Auth;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/* Ruta de inicio condicional */
Route::get('/', function () {
    if (Auth::check()) return redirect('/start');

    $products = Product::take(3)->get();
    // $products = Product::all();
    $categories = Product::select('category')->distinct()->pluck('category');
    
    return Inertia::render('Home', [
        'products' => $products->map(function($product) {
            return [
                'name' => $product->name,
                'price' => $product->price,
                'description' => $product->description,
                'image' => url('/').'/storage/'.$product->image,
                'category' => $product->category
            ];
        }),
        'categories' => $categories // Añadir categorías a Home
    ]);
});

/* Rutas de Autenticación (User) */
Route::get('/login', function () {
    return Auth::check() ? redirect('/start') : Inertia::render('User/Login');
});
Route::post('/login', [LoginController::class, 'store']);
Route::get('/register', [RegisteredUserController::class, 'create']);
Route::post('/register', [RegisteredUserController::class, 'store']);

/* Rutas de Información (Inf) */
Route::get('public/about', function () {
    return Inertia::render('Inf/About');
});

Route::get('public/User', function () {
    return Inertia::render('User/UserType');
});

Route::get('public/contact', function () {
    return Inertia::render('Inf/Contact');
});

/* Ruta protegida /start que carga productos */
Route::get('/start', function () {
    if (!Auth::check()) return redirect('/');

    $products = Product::all();
    $categories = Product::select('category')->distinct()->pluck('category');
    
    return Inertia::render('Inf/Start', [
        'products' => $products->map(function($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'description' => $product->description,
                'image' => url('/').'/storage/'.$product->image,
                'category' => $product->category
            ];
        }),
        'categories' => $categories // Añadir categorías a Start
    ]);
})->name('start');

Route::get('/search', function () {
    if (!Auth::check()) return redirect('/login');

    $searchTerm = request('query');
    
    $products = Product::when($searchTerm, function ($query) use ($searchTerm) {
        return $query->where('name', 'like', "%{$searchTerm}%")
                    ->orWhere('description', 'like', "%{$searchTerm}%")
                    ->orWhere('category', 'like', "%{$searchTerm}%");
    })->get();

    return Inertia::render('Inf/Start', [
        'products' => $products->map(function($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'description' => $product->description,
                'image' => url('/').'/storage/'.$product->image,
                'category' => $product->category
            ];
        }),
        'searchQuery' => $searchTerm // Opcional: para mantener el término de búsqueda
    ]);
})->name('products.search');

Route::get('/products/category/{category}', function ($category) {
    if (!Auth::check()) {
        return redirect('/login');
    }

    $products = Product::where('category', $category)->get();
    $categories = Product::select('category')->distinct()->pluck('category');

    // Determinar qué vista renderizar basado en autenticación
    $view = Auth::check() ? 'Inf/Start' : 'Home';
    
    return Inertia::render($view, [
        'products' => $products->map(function($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'price' => $product->price,
                'description' => $product->description,
                'image' => url('/').'/storage/'.$product->image,
                'category' => $product->category
            ];
        }),
        'categories' => $categories,
        'activeCategory' => $category
    ]);
})->name('products.category');

Route::get('/products/{id}', function ($id) {
    if (!Auth::check()) return redirect('/login');

    $product = Product::findOrFail($id);
    
    return Inertia::render('Product/Show', [
        'product' => [
            'name' => $product->name,
            'price' => $product->price,
            'description' => $product->description,
            'image' => url('/').'/storage/'.$product->image,
            'category' => $product->category
        ]
    ]);
})->name('products.show');

Route::get('/api/check-admin', function () {
    return response()->json([
        'isAdmin' => Auth::check() && Auth::user()->is_admin
    ]);
})->middleware('web');

/* Ruta de Logout */
Route::post('/logout', function () {
    Auth::logout();
    return redirect('/');
});

// Route::post('/payment/process/{product}', [PaymentController::class, 'process'])
//     ->middleware('auth')
//     ->name('payment.process');

// Route::get('/receipt/download/{transactionId}', [PaymentController::class, 'downloadReceipt'])
//     ->name('download.receipt');


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
