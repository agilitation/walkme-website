<?php
exec("cd .. && gulp templates", $out);
header("Content-type:text/plain;charsetUTF-8");
echo implode(PHP_EOL, $out);