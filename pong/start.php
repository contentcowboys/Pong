<?php
	require '../vendor/autoload.php';
	$app = new App();
	$app->run();
	require '../app/routes.php';
	$app->router->run();
?>