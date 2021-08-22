var inputValue = document.querySelectorAll('.angle-input');
var btnCheckTriangle = document.querySelector('#btn-triangle');
var output = document.querySelector('#show-output');
btnCheckTriangle.addEventListener('click',function isTriangle()
{
    calculateSum();

})

function calculateSum()
{
    var sum=0;
   

    for(let i=0;i<inputValue.length;i++)
    {
        var num = Number(inputValue[i].value);
        sum = sum + num;
          
    }
    if(sum===180)
    {
        output.innerText="Kudos 👏 This will form triangle";
    }
    else
    {
        output.innerText="❌sum of angles is wrong!! ,please try again";
    }
    return sum;
}