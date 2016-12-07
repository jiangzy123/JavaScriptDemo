<?php
	// $str='{"name":"老王","sex":"女","age":19,"score":66}';
	// echo $str;
	$str=$_GET['age'];
	switch ($str) {
		case '21':
			echo "老王";
			break;
		case '22':
			echo "老刘";
			break;
		case '23':
			echo "老李";
			break;
		case '24':
			echo "老张";
			break;
		default:
			echo "人妖";
			break;
	}
?>