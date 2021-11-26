let displayValue=(num)=>result.value+=num
// function displayValue(num){
//     let txt_box= document.querySelector("#result")
//     txt_box.value+=num
// }
let clearScreen=()=>result.value=""
// function clearScreen(){
//     document.querySelector('#result').value=""
// }
let evaluateExpression=()=>result.value=eval(result.value)
// function evaluateExpression(){
//     let txt_box= document.querySelector("#result")
//     txt_box.value=eval(txt_box.value)

// }
let removeElement=()=>result.value=result.value.slice(0,-1)
// function removeElement(){
//    let txt_box=document.querySelector('#result')
//     txt_box.value=txt_box.value.slice(0,-1)

// }