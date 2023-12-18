# This is a BMI calculator project 
## Here I uploade all Source Code like:- 
## CSS,JS,HTML

## Code Link:-
[click Here](https://github.com/sumitkumarsharm/Js-sumit-youtube)

### JavaScripts Code
```Javascripts  
const Form = document.querySelector('form');

Form.addEventListener('submit', function(event){
    event.preventDefault()

    const Height = parseInt(document.querySelector('#height').value)
    const Weight = parseInt(document.querySelector('#weight').value)
    const Results = document.querySelector('#results')

    if(Height === '' || Height < 0 || isNaN(Height)){
        Results.innerHTML = `Please give a valid Height ${Height}`
    }
    else if(Weight === '' || Weight < 0 || isNaN(Weight)){
        Results.innerHTML = `Please give a valid Weight ${Weight}`
    }else{
        const BMI = (Weight / ((Height*Height)/10000)).toFixed(2)
        // show the result
        Results.innerHTML = `<span>${BMI}</span>`
    
    }
    
   
 
})
```
### HTML Code
``` Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div class="container">
        <h1>BMI Calculator</h1>
        <form>
          <p><label>Height in CM: </label><input type="text" id="height" /></p>
          <p><label>Weight in KG: </label><input type="text" id="weight" /></p>
          <button>Calculate</button>
          <div id="results"></div>
          <div id="weight-guide">
            <h3>BMI Weight Guide</h3>
            <p>Under Weight = Less than 18.6</p>
            <p>Normal Range = 18.6 and 24.9</p>
            <p>Overweight = Greater than 24.9</p>
          </div>
        </form>
      </div>

      <script src="scripts.js"></script>
</body>
</html>
 ```

### CSS Code
``` css
.container {
    width: 575px;
    height: 825px;
  
    background-color: #797978;
    padding-left: 30px;
  }
  #height,
  #weight {
    width: 150px;
    height: 25px;
    margin-top: 30px;
  }
  
  #weight-guide {
    margin-left: 75px;
    margin-top: 25px;
  }
  
  #results {
    font-size: 35px;
    margin-left: 90px;
    margin-top: 20px;
    color: rgb(241, 241, 241);
  }
  
  button {
    width: 150px;
    height: 35px;
    margin-left: 90px;
    margin-top: 25px;
    background-color: #fff;
    padding: 1px 30px;
    border-radius: 8px;
    color: #212121;
    text-decoration: none;
    border: 2px solid #212121;
  
    font-size: 25px;
  }
  
  h1 {
    padding-left: 15px;
    padding-top: 25px;
    
  }
  
```