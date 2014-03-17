<?php
	use Illuminate\Database\Capsule\Manager as Db;
	use Handlebars\Handlebars;

	class App 
	{
		
		public $router;
		public $facebook;
		public $request;
		public $data;
		public $config;
		protected $twig;
		
		public function run()
		{
			$this->initalize();
		}

		public function cli($argv = NULL)
		{
			
			
			$ping = New Ping();
			
			$ping->setCommand($argv[1]);

			unset($argv[0]);
			unset($argv[1]);

			$ping->run(array_values($argv));
			$ping->sterf();
		}

		protected function initalize()
		{
			//set up variables
			$this->data = array();

			//detect if we are on dev machine or live machine
			$this->detectEnvironment();
			
			//detect mobile/tablet/pc
			$this->detectDevice();

			//get config
			$this->getConfig();
			
			//setup modules
			$this->initalizeRouter();
			$this->initalizeWhoops();
			$this->initalizeFacebook();
			$this->initalizeHandlebars();
			$this->initalizeORM();
		}

		protected function getConfig(){
			//fetch config from file
			$config = require('../app/config/app.php');
			//set google analytiocs code to app data
			$this->data['googleAnalyticsCode'] = $config['googleAnalyticsCode'];
			$this->data['url'] = $config['url'];
		}

		protected function initalizeWhoops()
		{			
			$this->router->config('whoops.editor', 'sublime');  // add this line
			$this->router->add(new \Zeuxisoo\Whoops\Provider\Slim\WhoopsMiddleware);
		}


		protected function initalizeHandlebars()
		{
			//dd(__DIR__.'/../app/views');
			$this->handleBars = new Handlebars(array(
			    'loader' => new \Handlebars\Loader\FilesystemLoader(__DIR__.'/../app/views'),
			    'partials_loader' => new \Handlebars\Loader\FilesystemLoader(
			        __DIR__.'/../app/views',
			        array(
			            'prefix' => '_'
			        )
			    )
			));
		}

		public function render($template, $data = null)
		{
			if(!$data) $data =  array();
			echo $this->handleBars->render($template,$data);
		}

		protected function initalizeRouter()
		{
			$this->router = new \Slim\Slim(array('debug' => $this->isDevelopment()));
			$this->request = $this->router->request;
		}

		protected function initalizeFacebook()
		{
			$config = require('../app/config/facebook.php');
			$debug = require('../app/config/debug.php');
			
			if(empty($config[$this->environment]['appId']) || empty($config[$this->environment]['secret'])) throw new Exception('Please set facebook config!');

			$this->facebook = new Facebook(array(
			  'appId'  => $config[$this->environment]['appId'],
			  'secret' => $config[$this->environment]['secret'],
			));

			// get signed request
        	$signedRequest = $this->facebook->getSignedRequest();

        	if($signedRequest)
        	{
	            if(isset($signedRequest['app_data'])) $this->data['get'] = fbtab_decode($signedRequest['app_data']);
	            $this->data['userIsFan'] = isset($signedRequest['page']['liked']) && $signedRequest['page']['liked'];
	            $this->data['userLanguage'] = fbtab_language($signedRequest['user']['locale']);
	            $this->data['onFacebook'] = true;
	        }else{
	        	$this->data['userIsFan'] = $debug['userIsFan'];
	            $this->data['userLanguage'] = $debug['userLanguage'];
	            $this->data['get'] =  $this->request->params();
	            $this->data['onFacebook'] = false;
	        }

			$this->data['appId'] = $config[$this->environment]['appId'];
			$this->data["onlineAppId"] = $config["online"]['appId'];
			$this->data['tabUrl'] = $config['tabUrl'];

		}

		protected function detectEnvironment()
		{
			$environment = require('../app/config/environments.php');

			if(in_array(gethostname(), $environment['development']))
			{
				$this->environment = 'development';
			}else
			{
				$this->environment = 'online';
			}
			$this->data['environment'] = $this->environment;
			$this->data['isDevelopment'] = $this->isDevelopment();
		}

		protected function initalizeORM()
		{
			$config = require('../app/config/database.php');
			$config = $config[$this->environment];

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

		protected function detectDevice()
		{
			$detect = new Mobile_Detect;
			$this->data['deviceType'] = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
		}


		public function isDevelopment()
		{
			return $this->environment == 'development' ? true : false;
		}

	}
?>