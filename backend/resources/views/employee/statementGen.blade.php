<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Statement</title>
</head>
<body>

<div class="container">
<br/>

    <center>
        <h1 style="color:#2e4154;"> Income Statement</h1>
        <?php

            // Prints the day, date, month, year, time, AM or PM
            echo date("l jS \of F Y h:i:s A");
        ?>
    </center>
    
    
    <table id = "table">
    
        <tr>
            <th>ID</th>
            <th>Month</th>
            <th>Revenue</th>
            <th>Cost</th>
            <th>Profit</th>
        </tr>

        @foreach ($incomes as $income)

        <tr>
            <td>{{$income->id}}</td>
            <td>{{$income->month}}</td>
            <td>{{$income->revenue}}</td>
            <td>{{$income->cost}}</td>
            <td>{{$income->profit}}</td>
        </tr>

        @endforeach

    </table>

</div>
    <style>
        body{
            color: black;
            background-color:white;
        }

        #table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 70%;
            margin: auto;
            color: #34495e;
            border-radius: 0px;
            text-align: center;
            font-weight: bold;
            box-shadow: 0px 0px 30px black;
            margin-top: 5vh;
            }

            #table td, #table th {
            padding: 10px;
            }

            #table tr:nth-child(even){
            background-color: #f2f2f2;
            }
            #table tr:nth-child(odd){
            background-color: #cdcfd0;
            }

            #table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;	
            background-color: #2e4154;
            color: white;
            }

        #table tr td a{
            color: #34495e;
            cursor: pointer;
            transition: 0.3s;
            transition-property: color;
        }



    </style>
</body>
</html>