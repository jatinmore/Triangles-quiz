var sideInput=document.querySelectorAll('.side-inputs');
var btnHypotenuse=document.querySelector('#btn-hypotenuse');
var output=document.querySelector('#outputAns');

btnHypotenuse.addEventListener('click',calculateHypotenuse);

function calculateHypotenuse()
{
    const a=Number(sideInput[0].value);
    const b=Number(sideInput[1].value);
    const sumOfSides=a*a + b*b;
    const hypotenuseVal=Math.sqrt(sumOfSides)
    if(a<0 || b<0){
        alert('Invalid Values');

    }
    else{
        output.innerText= 'The length of the hypotenuse is = '+ hypotenuseVal;
    }

  
    console.log(sumOfSides)
}