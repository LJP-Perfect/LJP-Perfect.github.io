<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"><script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="https://unpkg.com/meting@2.0.1/dist/Meting.min.js"></script>function move(e,t,n,l,o){clearInterval(e.timer),parseInt(getStyle(e,t))>n&&(l=-l),e.timer=setInterval(function(){var r=parseInt(getStyle(e,t))+l;(l<0&&r<n||l>0&&r>n)&&(r=n),e.style[t]=r+"px",r==n&&(clearInterval(e.timer),o&&o())},30)}function getStyle(e,t){return window.getComputedStyle?getComputedStyle(e,null)[t]:e.currentStyle[t]}window.onload=function(){var e=document.getElementById("imgList"),t=document.getElementsByName("dog");e.style.width=540*t.length+"px";var n=document.getElementById("navDiv"),l=document.getElementById("outer");n.style.left=(l.offsetWidth-n.offsetWidth)/2+"px";var o,r=0,c=document.getElementsByTagName("a");c[r].style.backgroundColor="black";for(var a=0;a<c.length;a++)c[a].num=a,c[a].onclick=function(){clearinterval(o),r=this.num,g(),move(e,"left",-540*r,20,function(){i()})};function g(){r="">=t.length-1&&(r=0,e.style.left=0);for(var n=0;n</c.length;a++)c[a].num=a,c[a].onclick=function(){clearinterval(o),r=this.num,g(),move(e,"left",-540*r,20,function(){i()})};function></0&&r<n||l>