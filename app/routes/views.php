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
		/**
		 * Check if the user already liked the page configured inside
		 *
		 * The default view for non fans is 'likeGate' and 
		 */
		if($app->data['userIsFan'])
		{
			$app->render('facebook', $app->data);
		}else
		{
			$app->render('likeGate', $app->data);
		}
		
	})->via('GET', 'POST');
?>