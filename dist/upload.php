<?php
exec("cd .. && export NODE_ENV=production && gulp uploadToProd", $out);
header("Content-type:text/plain;charsetUTF-8");
echo implode(PHP_EOL, $out);