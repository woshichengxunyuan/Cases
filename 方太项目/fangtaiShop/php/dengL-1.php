<?php

header("Content-type:text/html;charset=utf-8");
	
	$num=$_POST['num'];
	$pd=$_POST['pd'];

	$con=mysql_connect('localhost','root','root');

	if (!$con) {
		die('Could not connect:' . mysql_errno());
	}else{
		mysql_select_db('fangtai',$con);

		$sqlstr="select * from user where num='$num' and pd='$pd'";

		$result=mysql_query($sqlstr,$con);

		mysql_close($con);
	}


	$rows=mysql_num_rows($result);
	if ($rows==1) {
		echo "<script>alert('登录成功！');
		location.href='../index.html'</script>";
	}else{
		echo "<script>alert('登录失败，请重新登录！');location.href='../dengL.html'</script>";
	}
?>