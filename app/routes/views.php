<?php
	/*
	*	Pong main routing file |  https://github.com/contentcowboys/Pong 
	*
	* 	Add al your Routing to specific pages here.
	* 	There is an example to create your own routing and adding template at the bottom of the file
	* 	
	*	( Api end points shoulden't be made here, but in 'app/routes/api.php' )
	*/

	/**
	 * Alias for database ORM
	 */
	use Illuminate\Database\Capsule\Manager as Db;

	/**
	 * Routing to the facebook tab for desktop users
	 *
	 * The default url route is '/facebook', if you want to change this you also need to 
	 * change the route in 'pong/routes.php'
	 * 
	 */
	$app->router->map('/facebook/', function() use ($app) {
		/**
		 * Check if the user already liked the page configured inside
		 */
		if($app->data['userIsFan']){
			//show tab
			$app->render('facebook', $app->data);
		}else{
			//show likegate
			$app->render('likeGate', $app->data);
		}
	})->via('GET', 'POST');


	/**
	 * Routing for the mobile part of the facebook tab
	 *
	 * The default url route is '/mobile', if you want to change this you also need to 
	 * change the route in 'pong/routes.php'
	 * 
	 */
	$app->router->get('/mobile/', function() use ($app) {
		dd($app->data);
	});

	/**
	 * This is an example route
	 */
	$app->router->get('/example/', function() use ($app) {
		$app->render('example.template', $app->data);
	});
	
?>