__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),s=r(d[1]),n=r(d[2]),o=r(d[3]),h=r(d[4]),_=r(d[5]),l=(r(d[6]),r(d[7]),r(d[8])),f=r(d[9]),c=r(d[10]),u=r(d[11]).shouldUseNativeDriver;function v(t,s){return void 0===t||null===t?s:t}var p=(function(p){function y(s){var h;if(t(this,y),(h=n(this,o(y).call(this)))._overshootClamping=v(s.overshootClamping,!1),h._restDisplacementThreshold=v(s.restDisplacementThreshold,.001),h._restSpeedThreshold=v(s.restSpeedThreshold,.001),h._initialVelocity=v(s.velocity,0),h._lastVelocity=v(s.velocity,0),h._toValue=s.toValue,h._delay=v(s.delay,0),h._useNativeDriver=u(s),h.__isInteraction=void 0===s.isInteraction||s.isInteraction,h.__iterations=void 0!==s.iterations?s.iterations:1,void 0!==s.stiffness||void 0!==s.damping||void 0!==s.mass)c(void 0===s.bounciness&&void 0===s.speed&&void 0===s.tension&&void 0===s.friction,'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one'),h._stiffness=v(s.stiffness,100),h._damping=v(s.damping,10),h._mass=v(s.mass,1);else if(void 0!==s.bounciness||void 0!==s.speed){c(void 0===s.tension&&void 0===s.friction&&void 0===s.stiffness&&void 0===s.damping&&void 0===s.mass,'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one');var _=f.fromBouncinessAndSpeed(v(s.bounciness,8),v(s.speed,12));h._stiffness=_.stiffness,h._damping=_.damping,h._mass=1}else{var l=f.fromOrigamiTensionAndFriction(v(s.tension,40),v(s.friction,7));h._stiffness=l.stiffness,h._damping=l.damping,h._mass=1}return c(h._stiffness>0,'Stiffness value must be greater than 0'),c(h._damping>0,'Damping value must be greater than 0'),c(h._mass>0,'Mass value must be greater than 0'),h}return _(y,l),s(y,[{key:"__getNativeAnimationConfig",value:function(){return{type:'spring',overshootClamping:this._overshootClamping,restDisplacementThreshold:this._restDisplacementThreshold,restSpeedThreshold:this._restSpeedThreshold,stiffness:this._stiffness,damping:this._damping,mass:this._mass,initialVelocity:v(this._initialVelocity,this._lastVelocity),toValue:this._toValue,iterations:this.__iterations}}},{key:"start",value:function(t,s,n,o,h){var _=this;if(this.__active=!0,this._startPosition=t,this._lastPosition=this._startPosition,this._onUpdate=s,this.__onEnd=n,this._lastTime=Date.now(),this._frameTime=0,o instanceof y){var l=o.getInternalState();this._lastPosition=l.lastPosition,this._lastVelocity=l.lastVelocity,this._initialVelocity=this._lastVelocity,this._lastTime=l.lastTime}var f=function(){_._useNativeDriver?_.__startNativeAnimation(h):_.onUpdate()};this._delay?this._timeout=setTimeout(f,this._delay):f()}},{key:"getInternalState",value:function(){return{lastPosition:this._lastPosition,lastVelocity:this._lastVelocity,lastTime:this._lastTime}}},{key:"onUpdate",value:function(){var t=Date.now();t>this._lastTime+64&&(t=this._lastTime+64);var s=(t-this._lastTime)/1e3;this._frameTime+=s;var n=this._damping,o=this._mass,h=this._stiffness,_=-this._initialVelocity,l=n/(2*Math.sqrt(h*o)),f=Math.sqrt(h/o),c=f*Math.sqrt(1-l*l),u=this._toValue-this._startPosition,v=0,p=0,y=this._frameTime;if(l<1){var V=Math.exp(-l*f*y);v=this._toValue-V*((_+l*f*u)/c*Math.sin(c*y)+u*Math.cos(c*y)),p=l*f*V*(Math.sin(c*y)*(_+l*f*u)/c+u*Math.cos(c*y))-V*(Math.cos(c*y)*(_+l*f*u)-c*u*Math.sin(c*y))}else{var T=Math.exp(-f*y);v=this._toValue-T*(u+(_+f*u)*y),p=T*(_*(y*f-1)+y*u*(f*f))}if(this._lastTime=t,this._lastPosition=v,this._lastVelocity=p,this._onUpdate(v),this.__active){var b=!1;this._overshootClamping&&0!==this._stiffness&&(b=this._startPosition<this._toValue?v>this._toValue:v<this._toValue);var M=Math.abs(p)<=this._restSpeedThreshold,D=!0;if(0!==this._stiffness&&(D=Math.abs(this._toValue-v)<=this._restDisplacementThreshold),b||M&&D)return 0!==this._stiffness&&(this._lastPosition=this._toValue,this._lastVelocity=0,this._onUpdate(this._toValue)),void this.__debouncedOnEnd({finished:!0});this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this))}}},{key:"stop",value:function(){h(o(y.prototype),"stop",this).call(this),this.__active=!1,clearTimeout(this._timeout),g.cancelAnimationFrame(this._animationFrame),this.__debouncedOnEnd({finished:!1})}}]),y})();m.exports=p},225,[15,16,17,20,49,21,205,222,224,226,28,208]);