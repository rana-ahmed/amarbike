<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
  public function ref_by()
  {
    return $this->hasOne('App\User');
  }
}
