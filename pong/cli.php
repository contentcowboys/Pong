<?php
	error_reporting(E_ALL);
	require 'vendor/autoload.php';
	
	if(!isset($argv[1])){
		Ping::error("You need to specify a command!");
		die();
	}

	URL::setPath(  __DIR__ );

	$app = new App();
	$app->cli($argv);
?>