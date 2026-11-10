<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration {
    
    public function up(): void {
        Schema::create('movements', function (Blueprint $table) {
            $table->id();
            $table->enum('type', ['in', 'out']);
            $table->string('reason', 100);
            $table->unsignedInteger('quantity');
            $table->timestamps();
            $table->foreignId('product_id')
                ->constrained()
                ->restrictOnDelete();
            $table->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();
        });
    }

    public function down(): void {
        Schema::dropIfExists('movements');
    }

};