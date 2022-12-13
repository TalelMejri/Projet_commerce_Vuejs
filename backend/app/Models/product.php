<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model

  {
    public $timestamps = false;
    use HasFactory;
    protected $fillable=[
        "name_product",
        "color",
        "type",
        "prix",
        "file",
        "Quantity"
    ];
  }
