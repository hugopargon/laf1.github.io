<?php
    header('Access-Control-Allow-Origin: *'); 
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    // $input = json_decode($_POST["json"]);
    // $input = json_decode(file_get_contents("php://input"), true);
    // echo $_POST["json"];
    // echo $input;
    $input = $_POST["json"];
    $file = 'cuentas.json';
    if (file_exists($file)){
        $contenido = substr(file_get_contents($file), 0, -2);
        
        if(substr($contenido,-1) == "{")
            $input = $contenido . $input . "]}";
        else
            $input = $contenido . "," . $input . "]}";
    }else{
        $input = "{\"cuentas\":[".$input."]}";
    }


// $a=json_encode($input);
// file_put_contents($file,$a);
file_put_contents($file,$input);

echo $input;
