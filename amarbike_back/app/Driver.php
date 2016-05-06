<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
  public static function rules()
  {
    return array(
      'name'          => 'required|min:4|max:25',
      'contact'       => 'required|digits:11',
      'address'       => 'required|min:5|max:80',
      'nid'           => 'required|digits_between:13,17',
      'license_id'    => 'required|min:15|max:20',
      'driver_photo'  => 'required|image',
      'license_photo' => 'required|image',
      'nid_photo'     => 'required|image'
    );
  }

  public function bike()
  {
      return $this->hasOne('App\Bike');
  }
}
