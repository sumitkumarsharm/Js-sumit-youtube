# This is Color Changer project Here I uploade all Source Code. CSS,JS,HTML

## Code Link:-
[click Here](https://github.com/sumitkumarsharm/Js-sumit-youtube)

### HTML
``` html 
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="../styles.css" />
  <title>JavaScript Background Color Switcher</title>
</head>

<body>
  <h1>Color Scheme Switcher</h1>
  <span class="button" id="grey"></span>
  <span class="button" id="white"></span>
  <span class="button" id="blue"></span>
  <span class="button" id="yellow"></span>
  <h2>
    Try clicking on one of the colors above
    <span>to change the background color of this page!</span>
  </h2>
  </div>
  <script src="scripts.js"></script>
</body>

</html>
```
### CSS
``` css 
html {
    margin: 0;
  }
  
  span {
    display: block;
  }
  .canvas {
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
  }
  
  .button {
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
  }
  
  #grey {
    background: grey;
  }
  
  #white {
    background: white;
  }
  #blue {
    background: blue;
  }
  #yellow {
    background: yellow;
  }
  
```
### Javascript
``` javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event);
        console.log(event.target);
        if(event.target.id === 'grey'){
            body.style.backgroundColor = event.target.id
        }else if (event.target.id === 'white') {
            body.style.backgroundColor = event.target.id        
        } else if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id  
        }
        else if(event.target.id === 'yellow'){
            body.style.backgroundColor = event.target.id  
        }else{
            body.style.backgroundColor = "white"
        }           
        // here you must have to try it using switch case and if statement and any other method
        
        
    })
})

```