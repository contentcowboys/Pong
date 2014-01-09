<?php
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

	$app->router->get('/mobile', function() use ($app) {
		
	});
	
?>