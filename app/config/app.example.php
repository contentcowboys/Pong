<?php
	return array(
		/**
		 * Add your Google analytics tracking code here: change UA-XXXXX-X to be your site's ID.
		 * You can create one or find yours on www.google.com/analytics/‎
		 * 
		 */
		'googleAnalyticsCode' => '',

		/**
		* Online url
		*/
		'url' => '',

		/**
		* Set end date
		*/

		'endDate' => '',
		/**
		* Set end date format
		*/

		'format' => 'd-m-Y H',

		//is this is set to false defaultLanguage is always selected
		'multiLanguage' => false,

		//these are the allowed languages, if facebook returns another language that isen't in the array
		//the app selects the default language
		'allowedLanguages' => [
		],

		//default language for the app
		'defaultLanguage' => ""

 	);
?>