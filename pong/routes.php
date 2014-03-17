<?php
	// $app->router->map('/', function() use ($app) {
	// 	if($app->data['deviceType'] == "computer"){
	// 		if($app->isDevelopment()){
	// 			$app->router->redirect( $app->config['routes']['desktop'].'?'.http_build_query($app->request->params()));
	// 		}else{
	// 			$app->router->redirect($app->data['tabUrl'].'?app_data='.fbtab_encode($app->request->params()));
	// 		}
	// 	}else{
	// 		$app->router->redirect($app->config['routes']['mobile'].'?'.http_build_query($app->request->params()));
	// 	}
	// })->via('GET', 'POST');

	$app->router->map("/addTab", function() use ($app) {

		if($app->isDevelopment()){
			if(empty($app->data["url"])){
				echo 'Please set url first';
			}else{
				$app->render('addTab', $app->data);
			}
			
		}else{
			echo 'Please visit page on develop machine';
		}
	})->via('GET');

?>