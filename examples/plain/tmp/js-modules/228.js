__d(function(g,r,i,a,m,e,d){'use strict';var n,u=r(d[0]),t=r(d[1]),o=(function(){function o(){u(this,o)}return t(o,null,[{key:"step0",value:function(n){return n>0?1:0}},{key:"step1",value:function(n){return n>=1?1:0}},{key:"linear",value:function(n){return n}},{key:"ease",value:function(u){return n||(n=o.bezier(.42,0,1,1)),n(u)}},{key:"quad",value:function(n){return n*n}},{key:"cubic",value:function(n){return n*n*n}},{key:"poly",value:function(n){return function(u){return Math.pow(u,n)}}},{key:"sin",value:function(n){return 1-Math.cos(n*Math.PI/2)}},{key:"circle",value:function(n){return 1-Math.sqrt(1-n*n)}},{key:"exp",value:function(n){return Math.pow(2,10*(n-1))}},{key:"elastic",value:function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*Math.PI;return function(u){return 1-Math.pow(Math.cos(u*Math.PI/2),3)*Math.cos(u*n)}}},{key:"back",value:function(n){return void 0===n&&(n=1.70158),function(u){return u*u*((n+1)*u-n)}}},{key:"bounce",value:function(n){return n<.36363636363636365?7.5625*n*n:n<.7272727272727273?7.5625*(n-=.5454545454545454)*n+.75:n<.9090909090909091?7.5625*(n-=.8181818181818182)*n+.9375:7.5625*(n-=.9545454545454546)*n+.984375}},{key:"bezier",value:function(n,u,t,o){return r(d[2])(n,u,t,o)}},{key:"in",value:function(n){return n}},{key:"out",value:function(n){return function(u){return 1-n(1-u)}}},{key:"inOut",value:function(n){return function(u){return u<.5?n(2*u)/2:1-n(2*(1-u))/2}}}]),o})();m.exports=o},228,[15,16,229]);