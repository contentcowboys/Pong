<?php
	ini_set('display_startup_errors',1);
	ini_set('display_errors',1);
	error_reporting(-1);
	date_default_timezone_set ("Europe/Brussels");
	require '../vendor/autoload.php';
	//set the app url root
	URL::setPath( __DIR__ );
	URL::setRoot( $_SERVER["SERVER_NAME"] . $_SERVER["REQUEST_URI"] );
	$app = new App();
	$app->run();
	require 'routes.php';
	require '../app/routes/views.php';
	require '../app/routes/api.php';
	
	$app->router->run();
?>