<?php
if($_POST["Auther"] == "" and $_POST["Message"] == ""){
    //echo "Auther and Message was not set \n";
    echo file_get_contents('Data.json');
}else{
    $DataFromJson = file_get_contents('Data.json');
    $Data = json_decode($DataFromJson, true);
    $Data[] = $_POST;
    $NewData = json_encode($Data);
    file_put_contents('Data.json', $NewData);
    echo file_get_contents('Data.json');
}
?>