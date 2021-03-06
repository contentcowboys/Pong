<?php

/**
 * Alias for database ORM
 */
use Illuminate\Database\Capsule\Manager as DB;

DB::schema()->create('entries', function($table){
	$table->increments('id');
	$table->bigInteger('tiebreaker');
	$table->bigInteger('tiebreaker_extra');
	$table->string('first_name');
	$table->string('last_name');
	$table->string('lang_set_id');
	$table->string('email');
	$table->string('gsm');
	$table->string('lang');
	$table->string('adres');
	$table->string('zip');
	$table->string('city');
	$table->string('ip');
	$table->string('optin');
	$table->string('birthdate');
	$table->string('selected');
	$table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'));
	 echo "done";
});
