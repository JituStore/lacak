<?php

header("Content-Type: application/json");

$resi = $_GET['resi'] ?? '';

if(!$resi){
echo json_encode(["error"=>"resi kosong"]);
exit;
}

$url="https://app.mengantar.com/api/order/getPublic?tracking_number=".$resi."&courier=JNE";

$ch=curl_init();

curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);

$result=curl_exec($ch);

curl_close($ch);

echo $result;

?>
