<?php
	use Illuminate\Database\Capsule\Manager as Db;

	class App {
		
		public $router;
		public $facebook;
		public $request;
		public $data;
		protected $twig;
		
		public function run(){
			$this->initalize();
		}

		public function render($template, $data = null){
			if(!$data) $data =  array();
			echo $this->twig->render($template.".html", $data);
		}

		protected function initalize(){
			//set up variables
			$this->data = array();

			//detect if we are on dev machine or live machine
			$this->detectEnvironment();
			
			//detect mobile/tablet/pc
			$this->detectDevice();
			
			//setup modules
			$this->initalizeRouter();
			$this->initalizeWhoops();
			$this->initalizeFacebook();
			$this->initalizeTwig();
			$this->initalizeORM();
		}

		protected function initalizeWhoops(){
			
			$this->router->config('whoops.editor', 'sublime');  // add this line
			$this->router->add(new \Zeuxisoo\Whoops\Provider\Slim\WhoopsMiddleware);
		}


		protected function initalizeTwig(){
			$loader = new Twig_Loader_Filesystem('../app/views');
			$this->twig = new Twig_Environment($loader);
		}

		protected function initalizeRouter(){
			$this->router = new \Slim\Slim(array('debug' => $this->isDevelopment()));
			$this->request = $this->router->request;
		}

		protected function initalizeFacebook(){
			$config = require('../app/config/'.$this->environment.'/facebook.php');
			$debug = require('../app/config/debug.php');
			
			if(empty($config['appId']) || empty($config['secret'])) throw new Exception('Please set facebook config!');

			$this->facebook = new Facebook(array(
			  'appId'  => $config['appId'],
			  'secret' => $config['secret'],
			));

			// get signed request
        	$signedRequest = $this->facebook->getSignedRequest();

        	if($signedRequest){
	            if(isset($signedRequest['app_data'])) $this->data['get'] = fbtab_decode($signedRequest['app_data']);
	            $this->data['userIsFan'] = isset($signedRequest['page']['liked']) && $signedRequest['page']['liked'];
	            $this->data['userLanguage'] = fbtab_language($signedRequest['user']['locale']);
	        }else{
	        	$this->data['userIsFan'] = $debug['userIsFan'];
	            $this->data['userLanguage'] = $debug['userLanguage'];
	            $this->data['get'] =  $this->request->params();
	        }

			$this->data['appId'] = $config['appId'];
			$this->data['tabUrl'] = $config['tabUrl'];

		}

		protected function detectEnvironment(){

			$environment = require('../app/config/environments.php');
			if(in_array(gethostname(), $environment['development'])){
				$this->environment = 'development';
			}else{
				$this->environment = 'online';
			}
			$this->data['environment'] = $this->environment;
		}

		protected function initalizeORM(){

			$config = require('../app/config/'.$this->environment.'/database.php');

			if(empty($config['user'])) return false;
			
			$db = new Db;

			$db->addConnection([
			    'driver'    => 'mysql',
			    'host'      => $config['host'],
			    'database'  => $config['database'],
			    'username'  => $config['user'],
			    'password'  => $config['password'],
			    'charset'   => 'utf8',
			    'collation' => 'utf8_unicode_ci',
			    'prefix'    => '',
			]);

			$db->setAsGlobal();

		}

		protected function detectDevice(){
			$detect = new Mobile_Detect;
			$this->data['deviceType'] = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
		}


		public function isDevelopment(){
			return $this->environment == 'development' ? true : false;
		}





	}
?>