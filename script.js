/* Task 1 */
var heading = document.getElementById('heading');
console.log(heading.innerText);
heading.innerText="change it";
/* Task 2 using plain JavaScript */

var textBtn = document.getElementById('addText2a');
textBtn.addEventListener('click',function(event){
    var task2=document.getElementById('task2a');
    var paragraph= document.createElement('p');
    task2.innerText="hello world";
    task2.appendChild(paragraph);
    
});

function changeBGcolor(event){
    var body= document.getElementsByTagName('body')[0];
    if (event.target.innerText=="Red") {
        body.style.backgroundColor='red';
        
    }
     if (event.target.innerText=="Green") {
        body.style.backgroundColor='green';
        
    }
    
}

//task2c

function redirectToGoogle(event){
    
    window.location.assign("https://www.google.com/")
}

/* Task 4 using jQuery */
//task4a

$('#addText4').click(function(event){
    
    var paragraph = $('<p>').text('hello world');
    $('#task4a').append(paragraph);
});

//task4b

function changeBG(event){
    var color = event.target.innerText.toLowerCase ()
    $('body').css('background-color', color);
    
}
//task4c
$("#sum").click(function(event){
var sum = Number($("#num1").val()) +Number ($("#num2").val());
$('#result').text(sum);
})