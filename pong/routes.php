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

	$app->router->map("/mailchimpLists", function() use ($app) {
		if($app->isDevelopment()){
			echo '<pre>';
			$lists = $app->mc->lists->getList();
			foreach ($lists["data"] as $list) {
				if(isset($list["id"])){
					echo $list["name"] . " : " . $list["id"]; 
					echo "<hr>";
				}
			}
		}else{
			echo 'Please visit page on develop machine';
		}
	})->via('GET');
?>