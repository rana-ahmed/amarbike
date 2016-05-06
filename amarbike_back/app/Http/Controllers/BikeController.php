<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Bike;
use App\Http\Requests;

class BikeController extends Controller
{
  public function index()
  {
    return response()->json(Bike::all());
  }

  public function store(Request $request)
  {
    //$this->validate($request, Bike::rules());
    try {
      $bike = $this->setBikeData($request, new Bike);
      $bike->save();
      return response()->json($bike);
    } catch (\Exception $e) {
      return response()->json($e->getMessage(), 404);
    }
  }

  public function show($id)
  {
    return response()->json(Bike::findOrFail($id));
  }

  public function update(Request $request, $id)
  {
    //$this->validate($request, Bike::rules());
    try {
      $bike = Bike::findOrFail($id);
      $bike = $this->setBikeData($request, $bike);
      return response()->json($bike->save());
    } catch (\Exception $e) {
      return response()->json($e->getMessage(), 404);
    }
  }

  public function destroy($id)
  {
    try {
      $driver = Bike::findOrFail($id);
      return response()->json(Bike::destroy($id));
    } catch (\Exception $e) {
      return response()->json("Bike not found", 404);
    }
  }

  private function setBikeData(Request $request, Bike $bike)
  {
    $bike->registarion_no = $request->input('registarion_no');
    $bike->cessis_no = $request->input('cessis_no');
    $bike->engine_no = $request->input('engine_no');
    return $bike;
  }
}
