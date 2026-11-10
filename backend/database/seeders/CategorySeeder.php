<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
  
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Eletrônicos',
                'description' => 'Produtos eletrônicos em geral.'
            ],
            [
                'name' => 'Informática',
                'description' => 'Computadores e equipamentos de informática.'
            ],
            [
                'name' => 'Periféricos',
                'description' => 'Periféricos para computadores.'
            ],
            [
                'name' => 'Acessórios',
                'description' => 'Acessórios e complementos diversos.'
            ],
            [
                'name' => 'Escritório',
                'description' => 'Materiais e equipamentos de escritório.'
            ]
        ];
        foreach ($categories as $category) {
            Category::firstOrCreate(
                ['name' => $category['name']],
                ['description' => $category['description']]
            );
        }
    }
}
