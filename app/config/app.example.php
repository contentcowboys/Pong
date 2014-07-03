<?php
	return array(
		'googleAnalyticsCode' => '',

		//online url

		'url' => '',

        'typekit' => '',


		'endDate' => '',

		//Set end date format

		'format' => 'd-m-Y H',

		//is this is set to false defaultLanguage is always selected
		'multiLanguage' => false,

		//these are the allowed languages, if facebook returns another language that isn't in the array
		//the app selects the default language
		'allowedLanguages' => [
		],

		//default language for the app
		'defaultLanguage' => "",

		//if like gate should be shown
		'showLikeGate' => true,

		//if mobile is enabled
		'mobileEnabled' => true,

		//default page to show after likegate
		'landingPage' => "info",

		//show loading screen
        'showLoading' => true,

        //preload images ( only works if showLoading is true)
        'preloadImages' => true

 	);
?>