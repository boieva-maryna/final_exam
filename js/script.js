function getImg(e){var t=new XMLHttpRequest;t.open("GET",e,!1),t.send(null);var r=t.responseText;return r=JSON.parse(r)}function init(e){var t=getImg(e),r=document.querySelector(".grid");r.innerHTML="";for(var i=0;i<7;i++){var a=document.createElement("figure"),n=document.createElement("figcaption");a.setAttribute("class","grid-item"),n.setAttribute("class","title--white"),4!==i&&5!==i||a.setAttribute("class","grid-item grid-item--2"),r.appendChild(a),a.appendChild(n),a.setAttribute("style","background-image:url("+t.hits[i].webformatURL+")"),n.innerHTML=t.hits[i].tags}new Masonry(r,{containerStyle:null,columnWidth:".grid-item",itemSelector:".grid-item",gutter:10})}function getNewQuery(){var e=document.querySelector(".ideas__input"),t=e.value;null!=t&&init("https://pixabay.com/api/?key=3429450-a383cae33a92ccea1a1e14e3a&&image_type=photo&pretty=true&per_page=7&min_height=310&min_width=600&orientation=horisontal&page=2&q="+t),e.value=""}if(!XMLHttpRequest)var XMLHttpRequest=function(){for(var e=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP","Microsoft.XMLHTTP"],t=0,r=e.length;t<r;t++)try{return new ActiveXObject(e[t])}catch(e){}return null};$(function(){$(".slide__hider").jcarousel({scroll:1,wrap:"circular",list:".slide__container"}),$(".slide__control--left").jcarouselControl({target:"-=1"}),$(".slide__control--right").jcarouselControl({target:"+=1"}),$(".ideas__button").on("click",function(e){e.preventDefault(),getNewQuery()});var e=["sunset","mountain","holland","fjords","venice+canal","ireland+lake","alps+nature"];category=e[Math.floor(Math.random()*e.length)],init("https://pixabay.com/api/?key=3429450-a383cae33a92ccea1a1e14e3a&&image_type=photo&pretty=true&per_page=7&min_height=300&min_width=610&orientation=horisontal&page=1&q="+category)});
