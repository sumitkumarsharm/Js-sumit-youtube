# This is Color Changer project Here I uploade all Source Code. CSS,JS,HTML

## Code Link:-
[click Here](https://github.com/sumitkumarsharm/Js-sumit-youtube)

### HTML
``` HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Your Local Time</title>

</head>

<body>
    <div class="center">
        <div id="banner"><span>Your local time</span></div>
        <div id="clock"></div>

    </div>
    <script src="scripts.js"></script>
</body>

</html>
```

### CSS
``` css
body {
    background-color: #0e0e0e;
    color: #fff;
  }
  .center {
    display: flex;
    height: 400px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  #clock {
    font-size: 50px;
    background-color: orange;
    padding: 40px 70px;
    margin-top: 10px;
    border-radius: 10px;
  }
```

### Javascript
``` javascript
const clock = document.getElementById('clock')
const stop = document.querySelector('#Stop')
// const Dclock = document.querySelector('#clock')
// We can also use querySelector but here we use get method also 

setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
        
},1000)
```