<?php
require_once('../services/question_1_service.php');
$view = "";
if (isset($_GET["query"]))
    $view = $_GET["query"];

/*
controls the RESTful services
URL mapping
*/

$question1RestController = new Question1Service();
switch ($view) {
        //query=users
    case "users":
        $question1RestController->getAllUsers();
        break;

        //query=chats&id=1
    case "chats":
        $question1RestController->getChatById($_GET["id"]);
        break;

    case "videos":
        $question1RestController->getVideos();
        break;

    case "participants":
        $question1RestController->getParticipants();
        break;

    case "":
        //404 - not found;
        echo ("Seems like a non-existent path. Try again");
        break;
}
