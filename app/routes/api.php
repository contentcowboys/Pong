<?php

	use Illuminate\Database\Capsule\Manager as DB;

	$app->router->post('/api/entry', function() use ($app) {
		//CLEAN UP PLEASE
		$post = $app->router->request->post();
		$prev = DB::table('entries')->whereEmail($post['email'])->get();
		if(!$prev){
			if(isset($post['voorwaarden'])) unset($post['voorwaarden']);
			if(isset($post['bday'])){
                $post['birthdate'] = $post['bday'] . " " . $post['bmonth'] . " " . $post['byear'];
                unset($post['bday']);
                unset($post['bmonth']);
                unset($post['byear']);
            }
			$post["ip"] = $_SERVER['REMOTE_ADDR'];
			DB::table('entries')->insert($post);
			if(isset($app->mc) && $app->mcConfig['optIn'] && isset($post["optin"])){
				try {
					$app->mc->lists->subscribe(
						$app->mcConfig['listId'], 
						[ "email" => $post['email'] ],
						[ "FNAME" => $post['first_name'] , "LNAME" => $post['last_name'] ]
					);
				} catch (Exception $e) {
					//when fails do nothing
				}
				
			}
			$app->router->response->setStatus(200);
		}else{
			$app->router->response->setStatus(409);
		}
	});
?>