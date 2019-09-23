<?php 

$site = $_POST['site'];
$email = $_POST['email'];
$filed = "info.txt";
if(preg_match("/[0-9a-z_-]+@[a-z0-9-]+\.[a-z]/", $email) && preg_match("/(w{3}\.)?[a-z0-9_-]+\.[a-z]{2,4}/", $site)){
	file_put_contents($filed, 'Site: ' . $site. '  Email: ' . $email);
}
?>
