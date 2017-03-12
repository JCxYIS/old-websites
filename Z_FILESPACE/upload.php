<?php

echo "<head><style type='text/css'> <!-- @import url('drive.css'); --> </style></head>";

date_default_timezone_set("Asia/Taipei");  //設定時區 
  

    echo "檔案名稱: " . $_FILES["file"]["name"]."<br>"; 
    echo "檔案類型: " . $_FILES["file"]["type"]."<br>";

    if($_FILES["file"]["size"] < 1024){
    echo "檔案大小: " . ($_FILES["file"]["size"])." Byte<br>";
}
	else if($_FILES["file"]["size"] > 1024*1024){
    echo "檔案大小: " . ($_FILES["file"]["size"] / 1024 / 1024)." MB<br>";
}
	else{
    echo "檔案大小: " . ($_FILES["file"]["size"] / 1024)." KB<br>";
}

    echo "上傳時間: " . date("Y年n月j日 G時i分s秒") . "<br>";
    //第1個參數是時間格式；第2個參數是引數，沒有引數時，默認為現在時間。 
    //date("Y-n-j G:i:s",1393224543);  //逗點之後的數值為引數 

    $target_path = "filespace/"; //指定上傳資料夾
    $target_path .= $_FILES['file']['name']; //上傳檔案名稱

    if(move_uploaded_file($_FILES['file']['tmp_name'],
       iconv("UTF-8", "big5", $target_path ))) {
       echo "<br>檔案狀況：". $_FILES['file']['name'] . " 上傳成功!";
} 
    else{
       echo "檔案上傳失敗，請再試一次!";
}
echo "<br><br><br><a href='index.html'>回上頁</a>";
?>
<!--
$_FILES["file"]["name"]：上傳檔案的原始名稱。
$_FILES["file"]["type"]：上傳的檔案類型。
$_FILES["file"]["size"]：上傳的檔案原始大小。
$_FILES["file"]["tmp_name"]：上傳檔案後的暫存資料夾位置。
$_FILES["file"]["error"]：如果檔案上傳有錯誤，可以顯示錯誤代碼。
-->