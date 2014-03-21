<?php
	ini_set('display_startup_errors',1);
	ini_set('display_errors',1);
	error_reporting(-1);
	date_default_timezone_set ("Europe/Brussels");
	require 'vendor/autoload.php';
	
	if(!isset($argv[1])){
		
		Ping::error("You need to specify a command!");
		die();
	}

	URL::setPath(  __DIR__ );

	$app = new App();
	$app->cli($argv);

?>