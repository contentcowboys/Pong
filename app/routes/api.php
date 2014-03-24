<?php

	use Illuminate\Database\Capsule\Manager as DB;

	$app->router->post('/api/entry', function() use ($app) {
		$post = $app->router->request->post();
		$prev = DB::table('entries')->whereEmail($post['email'])->get();
		if(!$prev){
			$new = DB::table('entries')->insert($post);
			$app->router->response->setStatus(200);
		}else{
			$app->router->response->setStatus(409);
		}
	});
?>