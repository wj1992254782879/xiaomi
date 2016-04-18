
window.onload=function(){
function getClass(classname,obj){
  obj=obj||document;
  if (document.getElementsByClassName!=undefined) {
   return obj.getElementsByClassName(classname)
  } else{
    var arr=[];
     var all=obj.getElementsByTagName("*");
     for (var i = 0; i < all.length; i++) {
      if(check[i].classname,classname){
        arr.push(all[i]);
      }
     }
     return arr;
  }
}



function check(){
  var arr=oldclass.split()
     for (var i = 0; i < arr.length; i++) {
      if(arr[i]==newclass){
        return true;
      }
     }
  return false;
}


// 获取行内样式与外部样式

function getStyle(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];
  }
  else{
    return getComputedStyle(obj,null)[attr];
  }
}


  // 选项卡按钮

var banner34s=getClass("banner34");
var banners=getClass("banner")[0].getElementsByTagName("img");

for (var i = 0; i < banner34s.length; i++) {
	  banner34s[i].index=i;
    banner34s[i].onclick=function() {
     for (var j = 0; j< banners.length; j++) {
     banners[j].style.display="none";
    
     }
     banners[this.index].style.display="block";
 
     }
   
   }







// 轮播图






var mingxing1s=
getClass("mingxing1",getClass("mx")[0]);
  // console.dir(mingxing1s)
// console.dir(mx);

var num=0;
setInterval(function(){
  num++;
  if(num>=2){
    num=0;
  }
 for (var i = 0; i < mingxing1s.length; i++) {
    mingxing1s[i].style.display="none";
    // divs[i].className="";
 }
    mingxing1s[num].style.display="block";
    // divs[num].className="au";
},2000)







// 选项卡按钮


var tit1s=getClass("tit1")[0].
getElementsByTagName("a");
// var xxks=getClass("xxk")[0].
// getElementsByTagName("img");
var znyjrights=
getClass("znyjright",getClass("xxk")[0]);

for (var i = 0; i < tit1s.length; i++) {
  tit1s[i].index=i;
    tit1s[i].onmouseover=function() {
     for (var j = 0; j< znyjrights.length; j++) {
     znyjrights[j].style.display="none";
     tit1s[j].className="";
     }
     znyjrights[this.index].style.display="block";
     tit1s[this.index].className="cc";
     }
   }










var tit1as=getClass("tit1a")[0].
getElementsByTagName("a");
// var xxks=getClass("xxk")[0].
// getElementsByTagName("img");
var znyjrightas=
getClass("znyjrighta",getClass("xxks")[0]);

for (var i = 0; i < tit1as.length; i++) {
  tit1as[i].index=i;
    tit1as[i].onmouseover=function() {
     for (var j = 0; j< znyjrightas.length; j++) {
     znyjrightas[j].style.display="none";
     tit1as[j].className="";
     }
     znyjrightas[this.index].style.display="block";
      tit1as[this.index].className="dd";
     }
   }






 var tit1bs=getClass("tit1b")[0].
getElementsByTagName("a");
var znyjrightbs=
getClass("znyjrightb",getClass("xxxk")[0]);

for (var i = 0; i < tit1s.length; i++) {
  tit1bs[i].index=i;
    tit1bs[i].onmouseover=function() {
     for (var j = 0; j< znyjrightbs.length; j++) {
     znyjrightbs[j].style.display="none";
    tit1bs[j].className="";
     }
     znyjrightbs[this.index].style.display="block";
     tit1bs[this.index].className="ee";
     }
   }





// 图片加载





 var jiazai=getClass("jiazai");
 // console.log(jiazai)
   var off=[];
   var h=document.documentElement.clientHeight;
 for (var i = 0; i <jiazai.length; i++) {
  off.push(jiazai[i].offsetTop)
    // console.dir(off)
 }  

 window.onscroll=function(){
var stop=document.body.scrollTop?document.body:document.documentElement; 
 // console.log(stop)
   for (var i = 0; i < off.length; i++) {
    
      var img=jiazai[i].getElementsByTagName("img");


      if(stop.scrollTop+h>off[i]){
      for (var j=0;j<img.length;j++) {  
      img[j].src=img[j].getAttribute("srcc");


        }
       }
     }
   
   }
 window.onscroll()
 

 


}



