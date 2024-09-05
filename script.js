const btnsEle = document.querySelectorAll("button");
//console.log(btnsEle)
const inputEle = document.getElementById("result");

for(let i =0;i<btnsEle.length; i++)
{
  btnsEle[i].addEventListener("click",()=>{
   const buttonvalue = btnsEle[i].textContent;
  if(buttonvalue === "AC")
  {
    clearResult();
  }
  else if(buttonvalue === "=")
  {
    calculateResult();
  }
  else if(buttonvalue === "C")
    {
      removeLast();
    }
  else {
    appendValue(buttonvalue);
  }
  })
}
function removeLast() {
  const inputEle = document.getElementById("result");
  inputEle.value = inputEle.value.slice(0, -1);
}

function clearResult(){
  inputEle.value ="";
}
function calculateResult(){
  inputEle.value = eval(inputEle.value);
}
function appendValue(buttonvalue){
  inputEle.value += buttonvalue;
}
