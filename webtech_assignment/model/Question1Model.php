<?php

require_once('DatabaseConn.php');

class Question1Model
{


    //every class will init the database conn however
    //implement the singleton func
    //to make sure that this model only creating
    //one connection at a time.

    public $conn;

    public function __construct()
    {

        $db = new DatabaseConn();
        $this->conn = $db->initialize();
        if (!$this->conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
    }
    
    public function getVideos() {
        $sql = "SELECT * FROM question1";
        $result = $this->conn->query($sql);

        if ($result !== null) {
            $rows = array();
            while ($r = mysqli_fetch_assoc($result)) {
                $rows[] = $r;
            }
            return $rows;
        }
    }

    public function getParticipants() {
        $sql = "SELECT * FROM question1_participants";
        $result = $this->conn->query($sql);

        if ($result !== null) {
            $rows = array();
            while ($r = mysqli_fetch_assoc($result)) {
                $rows[] = $r;
            }
            return $rows;
        }
    }

    public function getChatById($id)
    {
        $sql = "select * from question2_chat WHERE chat_id =" . $id . "";
        // $result = $this->conn->query($sql);
        $result = $this->conn->query($sql);
        $rows = array();
        while ($r = mysqli_fetch_assoc($result)) {
            $rows[] = $r;
        }

        return $rows;
    }

    public function getAllUsers()
    {
        $sql = "select * from question2_users";
        $result = $this->conn->query($sql);

        if ($result !== null) {
            $rows = array();
            while ($r = mysqli_fetch_assoc($result)) {
                $rows[] = $r;
            }
            //echo json_encode($rows, JSON_PRETTY_PRINT);
            return $rows;
        }
    }
}
