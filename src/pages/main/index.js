import Main from './Main';


var number = document.getElementsByClassName("number");
window.alert(number.length);
for(var i =0; i<number.length;i++){
  number[i].addEventListener('click',function(){
    alert("The Number clicked:"+this.id);
    
  });
}



export default Main;