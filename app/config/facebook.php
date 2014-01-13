<?php

	return array(
		/**
		 * Facebook app id and secret of the development version of the Facebook app,
		 * This is only used for development on local machine
		 *
		 * These can be found here: https://developers.facebook.com/apps
		 * 
		 */
		'development' =>  array(
			'appId' => '456545646456',
			'secret' => '456545646456'
	 	),

	 	/**
		 * Facebook app id and secret of the online versionof the Facebook app,
		 * This is the app the end user will be using, 
		 * and will only be available in the online envirement
		 *
		 * These can be found here: https://developers.facebook.com/apps
		 * 
		 */
	 	'online' => array(
			'appId' => '',
			'secret' => ''
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