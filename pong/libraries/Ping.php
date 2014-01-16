<?php

class Ping
{
	protected $command;

	public function run($arguments = NULL)
	{
		//check if the command class excists
		if (class_exists($this->command)) {
		    $myclass = new $this->command($arguments);
		}else
		{
			Ping::error($this->command. " command is not found!");
			die();
		}
	}

	public function setCommand($command)
	{
		$this->command = ucfirst($command);
	}

	static function log($message)
	{
		echo "\033[01;31m ".$message." \033[0m \n";
	}

	static function error($message)
	{
		echo "\033[01;31m ".$message." \033[0m \n";
	}

	public function sterf()
	{
		echo "\033[01;31m \033[0m";
	}
}