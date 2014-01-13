<?php

class URL
{
	protected static $baseUrl;

	public static function setRoot($url)
	{
		self::$baseUrl = substr($url, 0, strpos($url, "public/"));
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