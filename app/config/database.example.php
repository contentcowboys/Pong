<?php

	return array(
		/**
		 * Database settings for development app, 
		 * This is only used for development on local machine
		 * Wich devices use the development settings can be set in 'app/config/environments.php'
		 * 
		 */
		'development' => array(
			'user' => 'root',
			'password' => 'root',
			'host' => 'localhost',
			'database' => ''
	 	),

		/**
		 * Database settings for the online app, 
		 * This is the app the end user will be using, 
		 * and will only be available in the online environment
		 */
	 	'online' => array(
			'user' => '',
			'password' => '',
			'host' => 'localhost',
			'database' => ''
	 	)
 	);

?>
