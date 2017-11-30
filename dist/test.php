<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$test = mail(
    "test-resilient@maildrop.cc",
    "Test mail",
    "hello",
    "Content-type:text/plain;charset=utf-8"
);
var_dump($test);