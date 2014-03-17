<?php
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