<?php 
require_once("./connect_pdo.php");
$menu_output = array();
$query = "SELECT *
FROM menu
ORDER BY food_name";
foreach ($dbo->query($query) as $row) {
    $row_info = array(
        "food_name"=>stripslashes($row["food_name"]),
        "food_price"=>stripslashes($row["food_price"]),
        "food_calories"=>stripslashes($row["food_calories"])
    );
    //echo($row_info);
    //var_dump($row_info);
    array_push($menu_output, $row_info);    
};
//echo("bork!");
$json = json_encode($menu_output);
echo($json);
?>