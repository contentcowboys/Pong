<?php
	//error_reporting(E_ALL);
	require '../vendor/autoload.php';
	$app = new App();
	$app->run();
	require 'routes.php';
	require '../app/routes/views.php';
	require '../app/routes/api.php';
	$app->router->run();

?>