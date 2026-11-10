<?php


namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class AuthenticationController extends Controller {

    public function login(Request $request) {
        $email = $request->input('email');
        $password = $request->input('password');
        if( !is_string($email) || !is_string($password) || $email === '' || $password === '' ) {
            return response()->json(['message' => 'Informe o e-mail e a senha.'], 422);
        }
        $user = User::where('email', $email)->first();
        if( !($user) || !(Hash::check($password, $user->password)) ) {
            return response()->json(['message' => 'Credenciais inválidas.'], 401);
        }
        Auth::login($user);
        $request->session()->regenerate();
        return response()->json([
            'message' => 'Login realizado com sucesso.',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role->value,
            ]
        ]);
    }

    public function logout(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(['message' => 'Logout realizado com sucesso.']);
    }

}