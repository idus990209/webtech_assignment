<?php 
// require_once("db_connect.php"); 
?>
<?php
$conn = mysqli_connect("localhost","root","","assignment3"); //connect database

$dbOutput = array();
if ($conn) {
    $sql = "select * from question1";
    $result = mysqli_query($conn,$sql); //make it a query, so to store many data
    if($result){
        header("Content-Type: application/JSON");
        $i = 0;
        while($row = mysqli_fetch_assoc($result)){ //fetcj the data
            $dbOutput[$i]['id'] = $row['id']; //put the data inside output.
            $dbOutput[$i]['video_path'] = $row['video_path'];
            $i++;
        }
        echo json_encode($dbOutput, JSON_PRETTY_PRINT);
    }
} else {
    echo "Database connection failed";
}
?>