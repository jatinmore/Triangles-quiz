var inputValue = document.querySelectorAll('.angle-input');
var btnCheckTriangle = document.querySelector('#btn-check');
var outputEl = document.querySelector('#show-output');




btnCheckTriangle.addEventListener('click',function calculateSum()
{
    
    
    var sum=0;
   

    for(let i=0;i<inputValue.length;i++)
    {
        var num = Number(inputValue[i].value);
        sum = sum + num;
          
    }
    if(sum===180)
    {
        outputEl.innerText="Kudos 👏 This will form triangle";
    }
    else
    {
        outputEl.innerText="❌sum of angles is wrong!! ,please try again";
    }
    return sum;

});




