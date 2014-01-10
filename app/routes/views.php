<?php
	//setup DB
	use Illuminate\Database\Capsule\Manager as Db;

	//facebook tab
	//can be local or online
	$app->router->map('/facebook/', function() use ($app) {
		//check if user liked page
		if($app->data['userIsFan']){
			//show tab
			$app->render('facebook', $app->data);
		}else{
			//show likegate
			$app->render('likeGate', $app->data);
		}
	})->via('GET', 'POST');


	//mobile website
	$app->router->get('/mobile/', function() use ($app) {
		dd($app->data);
	});

	$app->router->get('/test/', function() use ($app) {
		$app->render('example.template', $app->data);
	});
	
?>