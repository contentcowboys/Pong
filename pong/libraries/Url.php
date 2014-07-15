<?php

class URL
{
	protected static $baseUrl;
	protected static $basePath;

	public static function setRoot($url)
	{
		self::$baseUrl = $url;
	}

	public static function setPath($path)
	{
		//remove /pong
		 if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
		    $path = substr($path, 0, - strlen(substr(strrchr($path,'\\'), 1)));
        	}else{
        		 $path = substr($path, 0, - strlen(substr(strrchr($path,'/'), 1)));
        	}
		self::$basePath = $path;
	}

	public static function path()
	{
		return self::$basePath;
	}

	public static function asset($path)
	{

		return self::$baseUrl .'public/'. $path;
	}

	public static function root()
	{
		return self::$baseUrl;
	}
}
