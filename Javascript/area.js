var side = document.querySelectorAll('.sides');
var outputDisplay = document.querySelector('#output');
var btnArea = document.querySelector('#btn-area');

btnArea.addEventListener('click',function calculateAot(){
    console.log('clicked')
    
    
    const base=Number(side[0].value);
    const height=Number(side[1].value);
    const areaOfTriangle=base*height/2;

    outputDisplay.innerText='The area of the triangle is = '+ areaOfTriangle;
    console.log(areaOfTriangle)
})