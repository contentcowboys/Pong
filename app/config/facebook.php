<?php

	return array(
		/**
		 * Facebook app id and secret of the development version of the Facebook app,
		 * This is only used for development on local machine
		 * Wich devices use the development settings can be set in 'app/config/environments.php'
		 *
		 * These can be found here: https://developers.facebook.com/apps
		 * 
		 */
		'development' =>  array(
			'appId' => '199353350255638',
			'secret' => '214d8ce5e8acf83ce4558c99de54e619'
	 	),

	 	/**
		 * Facebook app id and secret of the online versionof the Facebook app,
		 * This is the app the end user will be using, 
		 * and will only be available in the online environment
		 *
		 * These can be found here: https://developers.facebook.com/apps
		 * 
		 */
	 	'online' => array(
			'appId' => '798641053498883',
			'secret' => '797ec95d0d1cca35e2b9ca52091360c6'
	 	),

	 	/**
	 	 * The url which is set as the tab url on: 
	 	 * //developers.facebook.com/apps 
	 	 * 
	 	 */
	 	'tabUrl' => '',

	 	/*
	 	 * The page of wich want to check if the user has liked for the like gate
	 	 *
	 	 * This can be found on: 
	 	 * https://developers.facebook.com/tools/explorer/?method=GET&path=me%2Faccounts
	 	 * 
	 	 */
	 	'pageId' => ''

 	);

?>