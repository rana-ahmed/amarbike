<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\User;

class UserController extends Controller
{
  public function store(Request $request)
  {
    $user = $this->setUserData($request, new User);
    $user->save();
    $user->ref_id = (int)$user->id + 10000;
    $user->save();
    if($request->input('ref_by'))
      $user = $this->hasRefKey($request, $user);
    return response()->json($user);
  }

  public function show($id)
  {
    return response()->json(User::findOrFail($id));
  }

  public function update(Request $request, $id)
  {
    $user = User::findOrFail($id);
    $user = $this->setUserData($request, $user);
    $user->save();
    return response()->json($user);
  }

  private function setUserData(Request $request, User $user)
  {
    $user->email = $request->input('email');
    $user->password = $request->input('password');
    $user->name = $request->input('name');
    $user->contact = $request->input('contact');
    return $user;
  }

  private function hasRefKey(Request $request, User $user)
  {
    $ref = User::where('ref_id', $request->input('ref_by'))->get()->first();
    $ref->balance = $ref->balance + 50;
    $ref->save();
    $user->ref_by()->save($ref);
    $user->balance = $user->balance + 100;
    $user->save();
    return $user;
  }
}
