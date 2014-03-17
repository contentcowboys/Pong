<?php
	ini_set('display_startup_errors',1);
	ini_set('display_errors',1);
	error_reporting(-1);
	require '../vendor/autoload.php';

	$app = new App();
	$app->run();
	require 'routes.php';
	require '../app/routes/views.php';
	require '../app/routes/api.php';
	//set the app url root
	URL::setRoot(  '//' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] );

	$app->router->run();
?>