<?php

	return array(
		/**
		 * Add your Google analytics tracking code here: change UA-XXXXX-X to be your site's ID.
		 * You can create one or find yours on www.google.com/analytics/‎
		 * 
		 */
		'googleAnalyticsCode' => 'UA-XXXXX-X',

		/**
		 * You can set your default routes here. 
		 * There is an built in device check that will redirect to the corresponding route
		 *
		 * There are two variables
		 * The first one is mobile, all mobile and tablet devices will be redirected 
		 * to the corresponding route. This route will direct to the mini-website
		 *
		 * The second one is for desktop, all desktop users will be redirected to here.
		 * This route is what you link to your facebook tab
		 */
		'routes' => array(
			'mobile' 	=> 'mobile/',
			'desktop' 	=> 'facebook/'
		)

 	);

?>