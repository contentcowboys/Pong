<?php
	class App {
		
		public $router;
		public $language;
		public $liked;
		public $facebook;
		
		public function run(){
			$this->initalize();
		}

		protected function initalize(){
			//setup whoops
			$this->initalizeWhoops();
			$this->initalizeRouter();
			$this->initalizeFacebook();
		}

		protected function initalizeWhoops(){
			$whoops = new Whoops\Run();
			$whoops->pushHandler(new Whoops\Handler\PrettyPageHandler());
			$whoops->register();
		}

		protected function initalizeRouter(){
			$this->router = new \Slim\Slim();
		}

		protected function initalizeFacebook(){
			$config = require('../app/config/facebook.php');
			
			if(empty($config['appId']) || empty($config['secret'])) throw new Exception('Please set facebook config!');

			$this->facebook = new Facebook(array(
			  'appId'  => $config['appId'],
			  'secret' => $config['secret'],
			));
		}
	}
?>