(this["webpackJsonpthreejs-journey-level-1"]=this["webpackJsonpthreejs-journey-level-1"]||[]).push([[0],{59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(31),c=a(4),o=a(73),n=(a(59),a(19)),i=a(14),s=a(10),j=a(11),u=a(68),l=a(72),b=a(70),d=a(13),h=a(69),p=(a(23),a(8));var O=a(0);a(66);a(71);var m=a(67);function f(e){var t=e.keys,a=e._ready,r=e._setReady,o=e.start,n=e.clicked,i=e.props,u=t.forward,l=t.backward,b=t.left,f=t.right,g=(t.jump,t.buttonB),x=t.buttonR,y=t.buttonG,M=(t.Escape,Object(c.useRef)()),v=(Object(c.useRef)(),Object(c.useRef)()),w=Object(c.useRef)(),P=Object(c.useRef)(),k=Object(c.useRef)(),S=new O.Vector3;Object(d.d)((function(e){o?(e.camera.position.lerp(S.set(0,.2,1.2),.05),e.camera.lookAt(0,.04,0),e.camera.updateProjectionMatrix()):(e.camera.position.lerp(S.set(4.5,4,7),.05),e.camera.lookAt(0,0,0),e.camera.updateProjectionMatrix())}));var I=Object(c.useState)((function(){return Object.assign(document.createElement("video"),{src:"/drei.mp4",crossOrigin:"Anonymous",loop:!0})})),A=Object(j.a)(I,1)[0];Object(c.useEffect)((function(){n&&A.play()}),[A,n]);var R=Object(h.a)("https://CS6.github.io/Arcade/arcade_Draco.glb"),_=R.nodes;R.materials;return Object(p.jsxs)("group",Object(s.a)(Object(s.a)({ref:M},i),{},{dispose:null,children:[Object(p.jsx)("mesh",{geometry:_.arcade.geometry,material:_.arcade.material,position:[.25,.69,-.01],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:v,geometry:_.Button_PP.geometry,material:_.Button_PP.material,position:[.24,g?.665:.67,.15],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{geometry:_.joy.geometry,material:_.joy.material,position:[.25,.68,-.12],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:P,geometry:_.Button_GG.geometry,material:_.Button_GG.material,position:[.24,y?.665:.67,.02],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:w,geometry:_.Button_YY.geometry,material:_.Button_YY.material,position:[.24,x?.665:.67,.08],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:k,geometry:_.joy001.geometry,material:_.joy001.material,position:[.24,.65,-.12],"rotation-x":b&&!f?Math.PI/2+.5:!b&&f?Math.PI/2-.5:Math.PI/2,"rotation-y":u&&!l?-Math.PI/9+.5:!u&&l?-Math.PI/9-.5:-Math.PI/9}),Object(p.jsx)("group",{position:[.11,.83,-.02],rotation:[Math.PI/2,.33,0]}),Object(p.jsxs)("mesh",{rotation:[0,Math.PI/2,0],position:[.05,.8,0],children:[Object(p.jsx)("planeGeometry",{args:[.4,.4]}),Object(p.jsx)("meshStandardMaterial",{color:"#585361"}),a&&Object(p.jsx)(m.a,{className:"content",rotation:[-.2,0,0],position:[-.15,.165,0],scale:.009,transform:!0,children:Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)("iframe",{style:{width:"110%",height:"110%",margin:0,padding:0,border:0,top:0,left:0,borderRadius:"15%"},className:"relative w-full h-full",src:"https://flappybacon.netlify.app/",title:"W3Schools Free Online Web Tutorials"})})})]}),Object(p.jsxs)("mesh",{onClick:function(){r(!0)},geometry:_.screen01.geometry,position:[.11,.83,-.02],rotation:[Math.PI/2,-.34,0],children:[!a&&Object(p.jsx)("meshPhysicalMaterial",{clearcoat:1,clearcoatRoughness:0,toneMapped:!1,children:Object(p.jsx)("videoTexture",{attach:"map",args:[A],flipY:!1,repeat:[1,1],offset:[0,0],wrapT:O.RepeatWrapping,wrapS:O.RepeatWrapping,encoding:O.sRGBEncoding})}),a&&Object(p.jsx)("meshPhysicalMaterial",{thickness:5,roughness:.1,clearcoat:.9,clearcoatRoughness:1,transmission:1,ior:1,envMapIntensity:9,color:"#050505",attenuationTint:"#0096ff",attenuationDistance:.8})]})]}))}function g(e){var t=Object(c.useRef)(),a=Object(h.a)("https://CS6.github.io/Arcade/80s_Draco.glb"),r=a.nodes,o=a.materials;return Object(p.jsx)("group",Object(s.a)(Object(s.a)({ref:t},e),{},{dispose:null,children:Object(p.jsx)("mesh",{geometry:r.Island013.geometry,material:o["mt_palette_main.003"],position:[0,0,-5.54],scale:2.13})}))}function x(e){var t=Object(c.useRef)(),a=Object(h.a)("https://CS6.github.io/Arcade/mountains_Draco.glb"),r=a.nodes,o=a.materials;return Object(p.jsx)("group",Object(s.a)(Object(s.a)({ref:t},e),{},{dispose:null,children:Object(p.jsxs)("group",{rotation:[-Math.PI/2,0,0],children:[Object(p.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_4.geometry,material:o["Material.001"]})}),Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_6.geometry,material:o["Material.002"]})})]}),Object(p.jsxs)("group",{rotation:[Math.PI/2,0,0],position:[-15,0,0],children:[Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_4.geometry,material:o["Material.001"]})}),Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_6.geometry,material:o["Material.002"]})})]})]})}))}h.a.preload("https://CS6.github.io/Arcade/arcade_Draco.glb"),h.a.preload("https://CS6.github.io/Arcade/80s_Draco.glb"),h.a.preload("https://CS6.github.io/Arcade/mountains_Draco.glb");var y=a(18),M=a(25),v=a(45),w=["url","y","space","width","height","obj"];function P(e){var t=e.url,a=e.y,r=void 0===a?2500:a,o=e.space,i=void 0===o?1.8:o,j=e.width,u=void 0===j?.01:j,l=e.height,b=void 0===l?.05:l,h=e.obj,m=void 0===h?new O.Object3D:h,f=Object(n.a)(e,w),g=Object(c.useRef)(),x=Object(v.a)((function(){return k(t)}),[t]),y=x.gain,M=x.context,P=x.update,S=x.data;return Object(c.useEffect)((function(){return y.connect(M.destination),y.gain.value=.3,function(){return y.disconnect()}}),[y,M]),Object(d.d)((function(e){for(var t=P(),a=0;a<S.length;a++)m.position.set(a*u*i-S.length*u*i/2,S[a]/r,0),m.updateMatrix(),g.current.setMatrixAt(a,m.matrix);g.current.material.color.setHSL(t/500,.75,.75),g.current.instanceMatrix.needsUpdate=!0})),Object(p.jsxs)("instancedMesh",Object(s.a)(Object(s.a)({castShadow:!0,ref:g,args:[null,null,S.length]},f),{},{children:[Object(p.jsx)("planeGeometry",{args:[u,b]}),Object(p.jsx)("meshBasicMaterial",{toneMapped:!1})]}))}function k(e){return S.apply(this,arguments)}function S(){return(S=Object(M.a)(Object(y.a)().mark((function e(t){var a,r,c,o,n,i,s;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.arrayBuffer();case 5:return r=e.sent,c=new(window.AudioContext||window.webkitAudioContext),o=c.createBufferSource(),e.next=10,new Promise((function(e){return c.decodeAudioData(r,e)}));case 10:return o.buffer=e.sent,o.loop=!0,o.start(0),n=c.createGain(),(i=c.createAnalyser()).fftSize=64,o.connect(i),i.connect(n),s=new Uint8Array(i.frequencyBinCount),e.abrupt("return",{context:c,source:o,gain:n,data:s,update:function(){return i.getByteFrequencyData(s),s.avg=s.reduce((function(e,t){return e+t/s.length}),0)}});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=["clicked"];function A(e){e.ready;var t=function(){var e={KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",Space:"jump",KeyJ:"buttonB",KeyK:"buttonR",KeyL:"buttonG",Escape:"Escape",ArrowLeft:"left",ArrowUp:"forward",ArrowRight:"right",ArrowDown:"backward"},t=function(t){return e[t]},a=Object(c.useState)({forward:!1,backward:!1,left:!1,right:!1,jump:!1,buttonB:!1,buttonR:!1,buttonG:!1,Escape:!1}),r=Object(j.a)(a,2),o=r[0],n=r[1];return Object(c.useEffect)((function(){var e=function(e){n((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},t(e.code),!0))}))},a=function(e){n((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},t(e.code),!1))}))};return document.addEventListener("keydown",e),document.addEventListener("keyup",a),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",a)}}),[]),o},a=t(),r=a.forward,o=a.backward,n=a.left,b=a.right,h=a.jump,O=a.buttonB,m=a.buttonR,y=a.buttonG,M=a.Escape;Object(c.useEffect)((function(){M&&(C(!1),S(!1),G(!0))}),[r,o,n,b,h,O,m,y,M]);var v=Object(c.useState)(!1),w=Object(j.a)(v,2),k=w[0],S=w[1],I=Object(c.useState)(!1),A=Object(j.a)(I,2),_=A[0],C=A[1],B=Object(c.useState)(!1),E=Object(j.a)(B,2),D=E[0],G=E[1];return Object(p.jsxs)(d.a,{flat:!0,dpr:[1,2],camera:{fov:25,position:[0,0,8]},children:[Object(p.jsx)("color",{attach:"background",args:["#e63946"]}),Object(p.jsx)(c.Suspense,{fallback:null,children:Object(p.jsxs)("group",{position:[2.5,-.5,0],children:[Object(p.jsx)(P,{"position-z":-.5,url:"".concat("https://CS6.github.io/Arcade","/comping1.mp3")}),Object(p.jsx)(P,{"position-z":-.25,url:"".concat("https://CS6.github.io/Arcade","/synth.mp3")}),Object(p.jsx)(P,{"position-z":0,url:"".concat("https://CS6.github.io/Arcade","/snare.mp3")}),Object(p.jsx)(P,{"position-z":.25,url:"".concat("https://CS6.github.io/Arcade","/drums.mp3")})]})}),Object(p.jsx)("ambientLight",{}),Object(p.jsxs)(u.a,{global:!0,zoom:.1,rotation:[0,-Math.PI/2,0],polar:[0,Math.PI/4],azimuth:[-Math.PI/4,Math.PI/4],children:[Object(p.jsx)("group",{onClick:function(){C(!0)},"position-y":-.75,dispose:null,children:Object(p.jsx)(f,{keys:t(),_ready:k,_setReady:S,start:_,clicked:D})}),Object(p.jsxs)(c.Suspense,{fallback:null,children:[Object(p.jsx)(x,{position:[1,-.6,0],rotation:[0,0,0],scale:.8}),Object(p.jsx)(g,{position:[-5,-.1,0],rotation:[0,Math.PI/2,0],scale:.8})]}),Object(p.jsx)(R,{onClick:function(){G(!0)},rotation:[0,Math.PI/2,0],position:[0,-.1,.18]}),Object(p.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.75,0],children:[Object(p.jsx)("planeGeometry",{args:[50,50]}),Object(p.jsx)("meshStandardMaterial",{color:"#023047"})]})]}),Object(p.jsx)(l.a,{})]})}function R(e){e.clicked;var t=Object(n.a)(e,I);return Object(p.jsxs)(b.a,Object(s.a)(Object(s.a)({font:"".concat("https://CS6.github.io/Arcade","/Inter-Bold.woff"),fontSize:1.25,letterSpacing:-.1},t),{},{children:["Arcade",Object(p.jsx)("meshStandardMaterial",{color:"#c9ffed"})]}))}function _(e){var t=e.children,a=Object(c.useState)(!1),r=Object(j.a)(a,2),o=r[0],n=r[1];return Object(p.jsxs)(p.Fragment,{children:[o&&t,Object(p.jsx)("div",{className:'fullscreen bg ready"} '.concat(o&&"clicked"),children:Object(p.jsxs)("a",{onClick:function(){return n(!0)},children:[Object(p.jsx)("h1",{class:"close",children:"<Click>"})," "]})})]})}var C=a(54);console.log("APP_URL","https://CS6.github.io/Arcade"),Object(r.render)(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(_,{children:Object(p.jsx)(c.Suspense,{fallback:null,children:Object(p.jsx)(A,{})})}),Object(p.jsx)(C.a,{date:"30. May",year:"2022",link1:Object(p.jsx)("a",{href:"https://github.com/dayuan/Demo",children:"dayuan/Demo"}),link2:Object(p.jsx)("a",{href:"https://codesandbox.io/s/duo-ge-demotheatre-iphone-reflector-variant-pf-demo-forked-2x4mw7",children:"Code Lab"})}),Object(p.jsx)(o.a,{})]}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.eece4d1a.chunk.js.map