<?php
	/*
	*	Pong main routing file |  https://github.com/contentcowboys/Pong 
	* 	
	*	( Api end points shoulden't be made here, but in 'app/routes/api.php' )
	*/

	/**
	 * Alias for database ORM
	 */
	use Illuminate\Database\Capsule\Manager as DB;

	$app->router->map('/', function() use ($app) 
	{
		$app->render('main', $app->data);
	})->via('GET', 'POST');
?>