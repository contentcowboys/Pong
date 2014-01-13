<?php
	/**
	 * All these settings only reflect on the development version of 
	 * the app wich is running on your localhost
	 *
	 * This is done to fake the Facebook's signed request
	 * 
	 */
	
	return array(
		/**
		 * This will define if the faked user is a fan or not
		 * You can change this to test the likeGate
		 * 
		 */
		'userIsFan' => true,

		/**
		 * This will define teh language of teh faked user
		 * You can change this to test your multilanguage facebook tab
		 * 
		 */
		'userLanguage' => "nl"
	);

?>