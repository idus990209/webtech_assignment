<?php
require_once("Rest.php");
require_once("../model/Question1Model.php");

class Question1Service extends Rest
{


    function getAllUsers()
    {
        $question1 = new Question1Model();
        $rawData = $question1->getAllUsers();
        if (empty($rawData)) {
            $statusCode = 404;
            $rawData = array('error' => 'No Users Found!');
        } else {
            $statusCode = 200;
        }

        // Select format type JSON or XML
        $requestContentType = 'application/json';


        $this->setHttpHeaders($requestContentType, $statusCode);
        $this->setEncoder($requestContentType, $rawData);
    }

    function getChatById($id)
    {
        $question1 = new Question1Model();
        $rawData = $question1->getChatById($id);
        if (empty($rawData)) {
            $statusCode = 404;
            $rawData = array('error' => 'No Chat Found!');
        } else {
            $statusCode = 200;
        }

        // Select format type JSON or XML
        $requestContentType = 'application/json';
        $this->setHttpHeaders($requestContentType, $statusCode);
        $this->setEncoder($requestContentType, $rawData);
    }

    function getVideos() {
        $question1 = new Question1Model();
        $rawData = $question1->getVideos();
        if (empty($rawData)) {
            $statusCode = 404;
            $rawData = array('error' => 'No Chat Found!');
        } else {
            $statusCode = 200;
        }
        $requestContentType = 'application/json';
        // echo json_encode($rawData, JSON_PRETTY_PRINT);
        $this->setHttpHeaders($requestContentType, $statusCode);
        $this->setEncoder($requestContentType, $rawData);
    }

    function getParticipants() {
        $question1 = new Question1Model();
        $rawData = $question1->getParticipants();
        if (empty($rawData)) {
            $statusCode = 404;
            $rawData = array('error' => 'No Chat Found!');
        } else {
            $statusCode = 200;
        }
        $requestContentType = 'application/json';
        // echo json_encode($rawData, JSON_PRETTY_PRINT);
        $this->setHttpHeaders($requestContentType, $statusCode);
        $this->setEncoder($requestContentType, $rawData);
    }
}
