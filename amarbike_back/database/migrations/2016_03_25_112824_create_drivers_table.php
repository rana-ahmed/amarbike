<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;


class CreateDriversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drivers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('contact');
            $table->string('address');
            $table->string('nid');
            $table->string('license_id');
            $table->string('driver_photo');
            $table->string('license_photo');
            $table->string('nid_photo');
            $table->enum('status', ['pending', 'verified', 'declined'])->default('pending');
            $table->string('bike_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('drivers');
    }
}
