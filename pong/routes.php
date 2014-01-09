<?php
	$app->router->map('/', function() use ($app) {
		$app->data['mobileUrl'] = 'mobile?'.http_build_query($app->request->params());
		if($app->isDevelopment()){
			$app->data['tabUrl'] = 'facebook/?'.http_build_query($app->request->params());
		}else{
			$app->data['tabUrl'] = $app->data['tabUrl'].'?app_data='.fbtab_encode($app->request->params());
		}
		$app->render('mobileCheck', $app->data);
	})->via('GET', 'POST');

?>