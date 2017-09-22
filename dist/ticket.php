<?php

require '../vendor/autoload.php';

use Zendesk\API\HttpClient as ZendeskAPI;

$credentials = require('../credentials.php');
$zd = $credentials['zendesk'];

$client = new ZendeskAPI($zd['subdomain'], $zd['username']);
$client->setAuth('basic', [
    'username' => $zd['username'],
    'token' => $zd['token']
]);

$json = json_encode($_POST);

$message = "$_POST[raison_sociale]
$_POST[civilite] $_POST[prenom] $_POST[nom]
$_POST[age] ans

Objet de la demande : $_POST[objet]
Pour : $_POST[pour] ($_POST[pour_autre])
Trouble : $_POST[trouble]
Horaires de rappel : $_POST[horaires]
 
Adresse :
$_POST[adresse_1]
$_POST[adresse_2]
$_POST[code_postal] $_POST[ville] $_POST[pays]

===JSON===
$json
";

try {
    $result = $client->requests()->create([
        "requester" => ["name" => "$_POST[civilite] $_POST[prenom] $_POST[nom] <$_POST[email]>"],
        "subject" => "[$_POST[objet]] Demande site internet",
        "description" => $message,
    ]);
} catch (Exception $exc) {
    mail(
        "support@resilient-innovation.zendesk.com",
        "[$_POST[objet]] Demande site internet",
        $message,
        "Content-type:text/plain;charset=utf-8"
    );
}

echo $message;
