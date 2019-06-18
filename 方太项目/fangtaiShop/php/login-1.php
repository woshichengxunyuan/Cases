<?php

header("Content-type:text/html;charset=utf-8");
	
	$num=$_POST['num'];
	$pd=$_POST['pd'];

	$con=mysql_connect('localhost','root','root');

	if (!$con) {
		die('Could not connect:' . mysql_errno());
	}else{
		mysql_select_db('fangtai',$con);

		$sqlstr="insert into user(num,pd) values ('$num','$pd')";

		$result=mysql_query($sqlstr,$con);

		mysql_close($con);
	}

	if ($result=='1') {
		
		echo "<script>alert('恭喜您，注册成功！');
				location.href='../dengL.html'</script>";
		
	}else{
		echo "<script>alert('抱歉，注册失败！');location.href='../login.html'</script>";
	}
?>