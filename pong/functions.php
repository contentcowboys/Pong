<?php
	function fbtab_encode($array){
		if(empty($array)) return "";
		if(isset($array['signed_request'])) unset($array['signed_request']);
		if(isset($array['fb_locale'])) unset($array['fb_locale']);
		$string = "";
		foreach ($array as $key => $value) {
			$string .= $key.'='.$value.",";
		}
		return substr($string, 0, strlen($string) - 1);
	}

	function fbtab_decode($string){
		$array = array();
		foreach (explode(',', $string) as $value){
			$temp = explode('=', $value);
			$array[$temp[0]] = $temp[1];
		}
		return $array;
	}


	function fbtab_language($locale){
		return substr($locale, 0, 2);
	}
?>