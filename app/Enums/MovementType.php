<?php


namespace App\Enums;


enum MovementType: string {
    case In = 'entry';
    case Out = 'exit';
}