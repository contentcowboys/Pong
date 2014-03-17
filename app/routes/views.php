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
		if( !$app->isDevelopment() && $app->data['deviceType'] == "computer" && !$app->data['onFacebook'] ){
			$app->router->redirect( $app->data['tabUrl'].'?'.http_build_query($app->request->params()));
		}
		$app->render('main', $app->data);
	})->via('GET', 'POST');
?>