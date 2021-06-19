<?php
class DatabaseConn
{

    public function initialize()
    {
        $servername = "localhost"; //change this to something else
        $username = "root";
        $password = "";
        $dbname = "assignment3";

        // Create connection
        return mysqli_connect($servername, $username, $password, $dbname);
        // Check connection

    }
}
