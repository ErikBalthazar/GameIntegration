<h2>
<?php
echo "\n\n";
$path = ".";
$dh = opendir($path);
$i=1;
while (($file = readdir($dh)) !== false) {
    if($file != "." && $file != ".." && $file != ".common" && $file != "index.php" && $file != "index.html" && $file != ".htaccess" && $file != "error_log" 
       && $file != "cgi-bin") {
        echo "<a href='$path/$file'>$file</a><br /><br />";
        $i++;
    }
}
closedir($dh);
?>
</h2>