<?php
	error_reporting(E_ALL);
	require '../vendor/autoload.php';
	$app = new App();
	$app->run();
	require 'routes.php';
	require '../app/routes/views.php';
	require '../app/routes/api.php';
	//set the app url root
	URL::setRoot(  '//' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] );
	//URL::setRoot( (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] );
	$app->router->run();

?>