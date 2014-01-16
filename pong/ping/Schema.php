<?php

class Schema{

	protected $arguments;
	protected $buildFile;

	function __construct($arguments)
	{
		$this->arguments = $arguments;
		$this->setBuildFile();
		$this->run();
	}

	protected function run()
	{
		require_once(URL::path()."app\schema\\" . $this->buildFile .".php");
	}

	protected function setBuildFile()
	{
		//chjeck if build file parameter is set
		if(!isset($this->arguments[0]))
		{
			Ping::error('No build file specified!');
			die();
		}
		//check if build file excists
		if(!file_exists(URL::path()."app\schema\\".$this->arguments[0] .".php"))
		{
			Ping::error('Build file not found!');
			die();
		}

		$this->buildFile = $this->arguments[0];

	}
}