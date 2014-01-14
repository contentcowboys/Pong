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
	$app->router->map('/facebook/', function() use ($app) 
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



	/**
	 * Routing for the mobile part of the facebook tab
	 *
	 * The default url route is '/mobile', if you want to change this you also need to 
	 * change the route in 'pong/routes.php'
	 * 
	 */
	$app->router->get('/mobile/', function() use ($app) 
	{
		dd($app->data);
	});

	/**
	 * This is an example route
	 *
	 * the '/example/' after '$app->router->get' is the URI that you would want to use, 
	 * you can change this in anything you want, you can even add multilayered URi's,
	 * for example '/lorem/ipsum/do'
	 *
	 * Add what you want this route to do inside it's closure 
	 * after 'use ($app){' en before '});'
	 *
	 * To show an page you can use our rendering engine.
	 * It is called by using the '$app->render()' method. 
	 * 
	 * This method accepts two parameters
	 * the first one is witch view you want to use, this can ba a native html or twig.
	 * you dont have to add the extension (.html)
	 *
	 * The second parameter is the data you want to pass to the view
	 * Default this is $app->data, this variable contains some handy default variables
	 * To add your own to this variable use the following syntax:
	 * $app->data['key'] = "value";
	 * 
	 */
	$app->router->get('/example/', function() use ($app) 
	{
		$app->data['foo'] = "bar";
		$app->render('examples/template', $app->data);
	});
	
?>