<?php

namespace App\Http\Controllers;

use Storage;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Driver;
use App\Bike;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;


class DriverController extends Controller
{

  public function index()
  {
    return response()->json(Driver::all());
  }

  public function store(Request $request)
  {
    try {
      $this->validate($request, Driver::rules());
      $filePaths = $this->fileUpload($request);
      $driver = $this->setDriverData($request, new Driver, $filePaths);
      $driver->save();
      return Redirect::to($this->getFrontEndUrl().$driver->id);
    } catch (\Exception $e) {
      return response()->json($e->getMessage(), 404);
    }
  }

  public function show($id)
  {
    $driver = Driver::findOrFail($id);
    $driver->driver_photo = $this->getImageUrl().$driver->driver_photo;
    $driver->license_photo = $this->getImageUrl().$driver->license_photo;
    $driver->nid_photo = $this->getImageUrl().$driver->nid_photo;
    return response()->json($driver);
  }

  public function update(Request $request, $id)
  {
    try {
      $this->validate($request, Driver::rules());
      $driver = Driver::findOrFail($id);
      Storage::delete($driver->driver_photo);
      Storage::delete($driver->license_photo);
      Storage::delete($driver->nid_photo);

      $filePaths = $this->fileUpload($request);
      $driver = $this->setDriverData($request, $driver, $filePaths);
      $driver->save();
      return Redirect::to($this->getFrontEndUrl().$driver->id);
    } catch (\Exception $e) {
      return response()->json($e->getMessage(), 404);
    }
  }

  public function destroy($id)
  {
    try {
      $driver = Driver::findOrFail($id);
      Storage::delete($driver->driver_photo);
      Storage::delete($driver->license_photo);
      Storage::delete($driver->nid_photo);
      return response()->json(Driver::destroy($id));
    } catch (\Exception $e) {
      return response()->json("Driver not found", 404);
    }
  }

  public function assignBike(Request $request, $id)
  {
    try {
      $driver = Driver::findOrFail($id);
      $bike = Bike::findOrFail($request->input('bike_id'));

      $this->ifBikeHasDriver($bike);

      $driver->bike()->save($bike);
      $bike->driver()->save($driver);
      return response()->json("OK");
    } catch (\Exception $e) {
      return response()->json($e->getMessage(), 404);
    }
  }

  private function fileUpload(Request $request)
  {
    $photo      = $request->file('driver_photo');
    $nid        = $request->file('nid_photo');
    $license    = $request->file('license_photo');
    $fileHash   = md5($request->input('nid').$request->input('license_id').time());

    $photo_name     = 'photo_'.$fileHash.'.'.$photo->getClientOriginalExtension();
    $nid_name       = 'nid_'.$fileHash.'.'.$nid->getClientOriginalExtension();
    $license_name   = 'license_'.$fileHash.'.'.$license->getClientOriginalExtension();

    Storage::put($photo_name, File::get($photo));
    Storage::put($nid_name, File::get($nid));
    Storage::put($license_name, File::get($license));

    return array(
      'photo' => $photo_name,
      'nid' => $nid_name,
      'license' => $license_name
    );
  }

  private function setDriverData(Request $request, Driver $driver, $filePaths)
  {
    $driver->name = $request->input('name');
    $driver->contact = $request->input('contact');
    $driver->address = $request->input('address');
    $driver->nid = $request->input('nid');
    $driver->license_id = $request->input('license_id');
    $driver->driver_photo = $filePaths['photo'];
    $driver->license_photo = $filePaths['license'];
    $driver->nid_photo = $filePaths['nid'];
    return $driver;
  }

  private function ifBikeHasDriver($bike)
  {
    if ($bike->driver) {
      $driver = $bike->driver;
      $driver->bike_id = null;
      $driver->save();
    }
  }

  private function getFrontEndUrl()
  {
    return "http://localhost:8080/#/tables/";
  }

  private function getImageUrl()
  {
    return "http://localhost:8000/upload/";
  }

}
