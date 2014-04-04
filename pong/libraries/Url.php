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