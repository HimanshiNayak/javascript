<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
        *{
            margin:10px;
            padding :5px;
            
        }
        body{
            background-color: rgb(30, 2, 11);
        }
        div{
            background-color: rgb(238, 212, 225);
            border:5px double rgb(12, 2, 5);
            border-radius: 100%;
            text-align: center;
            justify-content: center;
            width:900px;
            height:fit-content;
            margin-top:15%;
            margin-left: 15%;
            box-shadow:10px 10px 8px rgb(208, 205, 205);
        }
h1{
    font-size: 50px;
    color:rgb(61, 6, 17);
    font-weight: 900;
    text-decoration:underline ;
}
p{
    font-size: 30px;
    color:rgb(67, 14, 49);
    font-weight: 300;
}
button{
box-shadow: 5px 5px 5px black;
background-color: rgb(250, 206, 148);
cursor:pointer;
transition:0.6s;
}
button:hover{
    width: 135px;
    font-weight: 500;
    font-size: 16px;
}
#div2{
            background-color: rgb(238, 212, 225);
            border:5px double rgb(12, 2, 5);
            border-radius: 100%;
            text-align: center;
            justify-content: center;
            width:900px;
            height:fit-content;
            margin-top:15%;
            margin-left: 15%;
            box-shadow:10px 10px 8px rgb(208, 205, 205);
        }

    </style>
</head>
<body>
<div>
    <h1>Welcome to the popups page</h1>
    <p>These are a part of javascript popups</p>
    <button onclick = "alerting()"><b>Click here!</b></button>
    <button onclick = "prompting()"><b>Click here!</b></button>
    <button onclick = "confirming()"><b>Click here!</b></button>
    </div>
    <div id ="div2"></div2>
    <script>
        function alerting(){
            alert("This is a page");
        }
        function prompting(){
            let newdiv = document.getElementById('div2');
            
            let a = prompt("Are you older than 18 ?","No");
            if(a.toLowerCase()==="yes"){
               let para = document.createElement('p')
                para.textContent="You are eligible to drive";
                para.style.fontSize="25px";
                para.style.color="Green";
                newdiv.appendChild(para)
            }
            else{
                let para2 = document.createElement('p')
            para2.textContent="you cannot drive!";
            para2.style.fontSize="25px";
                para2.style.color="Red";
            newdiv.appendChild(para2)
            }
        }
        function confirming(){
            let newdiv = document.getElementById('div2');
            
            let b = confirm("Are you sure u want to disconnect the wifi!");
            if(b!==true){
            let p1 = document.createElement('p');
            p1.textContent = "Disconnecting the wifi";
            p1.style.fontSize="25px";
                p1.style.color="Red";
            newdiv.appendChild(p1);
            }
            else{
                let p2 = document.createElement('p');
                p2.textContent ="Mainting the wifi connection";
                p2.style.fontSize="25px";
                p2.style.color="Blue";
               newdiv.appendChild(p2);
            }
        }
    </script>
</body>
</html>
