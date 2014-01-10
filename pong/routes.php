<?php
	$app->router->map('/', function() use ($app) {
		if($app->data['deviceType'] == "computer"){
			if($app->isDevelopment()){
				$app->router->redirect('facebook/?'.http_build_query($app->request->params()));
			}else{
				$app->router->redirect($app->data['tabUrl'].'?app_data='.fbtab_encode($app->request->params()));
			}
		}else{
			$app->router->redirect('mobile?'.http_build_query($app->request->params()));
		}
	})->via('GET', 'POST');

?>