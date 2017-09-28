window.addEventListener("load",bindEvent);
function bindEvent(){
  var bt=document.getElementsByClassName("opr");  
    Array.prototype.forEach.apply(bt,[function(currentBtn){
            currentBtn.addEventListener("click",doOperation);
    }]);
    document.getElementById("clear").addEventListener("click",clear);
    
}
function clear(){
        document.getElementById("firstno").value="";
    document.getElementById("secondno").value="";
document.getElementById("result").value="";
    document.getElementById("firstno").focus;
}
function doOperation(){
    var result=0;
    var x=document.getElementById("firstno").value;
    var y=document.getElementById("secondno").value;
    var op=this.innerHTML;
    result = evaluate(x,op,y);
    document.getElementById("result").innerHTML=result;
}