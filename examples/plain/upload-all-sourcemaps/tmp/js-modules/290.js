__d(function(g,r,i,a,m,e,d){'use strict';var n=r(d[0]),o=r(d[1]),t=o.currentCentroidXOfTouchesChangedAfter,u=o.currentCentroidYOfTouchesChangedAfter,s=o.previousCentroidXOfTouchesChangedAfter,c=o.previousCentroidYOfTouchesChangedAfter,p=o.currentCentroidX,v=o.currentCentroidY,h={_initializeGestureState:function(n){n.moveX=0,n.moveY=0,n.x0=0,n.y0=0,n.dx=0,n.dy=0,n.vx=0,n.vy=0,n.numberActiveTouches=0,n._accountsForMovesUpTo=0},_updateGestureStateOnMove:function(n,o){n.numberActiveTouches=o.numberActiveTouches,n.moveX=t(o,n._accountsForMovesUpTo),n.moveY=u(o,n._accountsForMovesUpTo);var p=n._accountsForMovesUpTo,v=s(o,p),h=t(o,p),S=c(o,p),R=u(o,p),l=n.dx+(h-v),T=n.dy+(R-S),f=o.mostRecentTimeStamp-n._accountsForMovesUpTo;n.vx=(l-n.dx)/f,n.vy=(T-n.dy)/f,n.dx=l,n.dy=T,n._accountsForMovesUpTo=o.mostRecentTimeStamp},create:function(o){var t={handle:null},u={stateID:Math.random()};return h._initializeGestureState(u),{panHandlers:{onStartShouldSetResponder:function(n){return void 0!==o.onStartShouldSetPanResponder&&o.onStartShouldSetPanResponder(n,u)},onMoveShouldSetResponder:function(n){return void 0!==o.onMoveShouldSetPanResponder&&o.onMoveShouldSetPanResponder(n,u)},onStartShouldSetResponderCapture:function(n){return 1===n.nativeEvent.touches.length&&h._initializeGestureState(u),u.numberActiveTouches=n.touchHistory.numberActiveTouches,void 0!==o.onStartShouldSetPanResponderCapture&&o.onStartShouldSetPanResponderCapture(n,u)},onMoveShouldSetResponderCapture:function(n){var t=n.touchHistory;return u._accountsForMovesUpTo!==t.mostRecentTimeStamp&&(h._updateGestureStateOnMove(u,t),!!o.onMoveShouldSetPanResponderCapture&&o.onMoveShouldSetPanResponderCapture(n,u))},onResponderGrant:function(s){return t.handle||(t.handle=n.createInteractionHandle()),u.x0=p(s.touchHistory),u.y0=v(s.touchHistory),u.dx=0,u.dy=0,o.onPanResponderGrant&&o.onPanResponderGrant(s,u),void 0===o.onShouldBlockNativeResponder||o.onShouldBlockNativeResponder()},onResponderReject:function(n){S(t,o.onPanResponderReject,n,u)},onResponderRelease:function(n){S(t,o.onPanResponderRelease,n,u),h._initializeGestureState(u)},onResponderStart:function(n){var t=n.touchHistory;u.numberActiveTouches=t.numberActiveTouches,o.onPanResponderStart&&o.onPanResponderStart(n,u)},onResponderMove:function(n){var t=n.touchHistory;u._accountsForMovesUpTo!==t.mostRecentTimeStamp&&(h._updateGestureStateOnMove(u,t),o.onPanResponderMove&&o.onPanResponderMove(n,u))},onResponderEnd:function(n){var s=n.touchHistory;u.numberActiveTouches=s.numberActiveTouches,S(t,o.onPanResponderEnd,n,u)},onResponderTerminate:function(n){S(t,o.onPanResponderTerminate,n,u),h._initializeGestureState(u)},onResponderTerminationRequest:function(n){return void 0===o.onPanResponderTerminationRequest||o.onPanResponderTerminationRequest(n,u)}},getInteractionHandle:function(){return t.handle}}}};function S(o,t,u,s){o.handle&&(n.clearInteractionHandle(o.handle),o.handle=null),t&&t(u,s)}m.exports=h},290,[210,291]);