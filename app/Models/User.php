<?php

namespace App\Models;

use App\Enums\UserRole;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{

    use HasFactory, Notifiable;

    protected $fillable = [
        'cpf',
        'name', 
        'email',
        'password'
    ];

    protected $hidden = [
        'password',
        'remember_token'
    ];

    public function movements(): HasMany 
    {
        return $this->hasMany(Movement::class);
    }

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
            'role' => UserRole::class
        ];
    }
}
