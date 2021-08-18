function getpin(){
    const pic=Math.round(Math.random() * 10000);
    const pintext=pic + '';
    if(pintext.length==4){
        return pic;
    }
    else{
        return getpin()
    }
}


document.getElementById('pin-id').addEventListener('click',function(){
    const pin=getpin();
    const pininput=document.getElementById('inputpin');
    const inputpin=pininput.value;
    pininput.value=pin;

})
document.getElementById('btn-id').addEventListener('click',function(event){  const number=event.target.innerText;
    const numberInput=document.getElementById('input-btn');

    if(isNaN(number)){
        if(number=='C'){
            numberInput.value='';

        }
    }
    else{
   const prevNumber=numberInput.value;
        const output=prevNumber+number
        numberInput.value=output;
    }

})
function verify(){
   const getneratepin=document.getElementById('inputpin').value;
   const inputNumber=document.getElementById('input-btn').value;
   const error=document.getElementById('pinNotMatched');
   const pinMatched=document.getElementById('pinMatched');
   if(getneratepin==inputNumber){
       pinMatched.style.display='block';
       error.style.display='none'
   }
   else{
    pinMatched.style.display='none';
    error.style.display='block'
   }
  
    
}