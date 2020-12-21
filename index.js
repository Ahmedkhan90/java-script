//function input(){
//var firstName = document .getElementById("naveed").value
//var lastName = document .getElementById("ahmed").value
//alert(firstName + " "+ lastName)



//function total(){
  //  var tarjma = document .getElementById("q").Value
   // var hadees = document .getElementById("h").Value
    //var sarf = document .getElementById("s").Value
   // var mateh = document .getElementById("m").Value
   // var fiqh = document .getElementById("f").Value
   // var total = +tarjma + +hadees + +sarf + +mateh + +fiqh


   // if(total >=450){
  //    alert('grade a')
    //}else if(total >= 300 && total < 450){
   // alert('grade b')
//}else if(total >=200 && total <300){
   // alert('grad c')

//}else{
  //  alert('nakam')
//}

//}






// function total(){
    // var science = document .getElementById ('s').value
    // var english = document .getElementById ('e').value
    // var sindhi = document .getElementById ('si').value
    // var urdu = document .getElementById ('u').value
    // var tafseer = document .getElementById ('t').value
// var number= +science + +english + +sindhi + +urdu + +tafseer
// var total =500;
// var per = (number/total) * 100 
// alert(per +"%")

// if(per >=45 ){
    // alert('A')
// }else if(per >= 30 && per < 45)
// {
    // alert('B')
// }else if(per >20 && per <30)
// {
    // alert('c')
// }else{
    // alert('nakam')
// }
// }


function total(){

var sindhi= document .getElementById ('s').value
var urdu= document .getElementById ('u').value
var science = document .getElementById ('sc').value
var english =document .getElementById ('e').value
var arabic = document.getElementById ('a').value

var number=+ sindhi + +urdu+ +science + +english + +arabic
var total =500;

var per=(number / total) *100 
alert( per +"%")

if( per>=500){

}else if(per >80 && per <100){
    alert('A')
}else if(per >60 && per <80)
{
    alert('B')

}else if(per >35 && per <60)
{
    alert('C')
}else if(per >30 && per <35){
    alert('Nakam')
}






}


