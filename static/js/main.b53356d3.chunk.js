(this["webpackJsonpthreejs-journey-level-1"]=this["webpackJsonpthreejs-journey-level-1"]||[]).push([[0],{59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var r=a(31),n=a(4),c=a(73),o=(a(59),a(19)),s=a(14),i=a(10),j=a(11),l=a(68),u=a(72),b=a(70),d=a(13),h=a(69),p=(a(23),a(8));var O=a(0);a(66);a(71);var m=a(67);function f(e){var t=e.keys,a=e._ready,r=e._setReady,c=e.start,o=e.clicked,s=e.props,l=t.forward,u=t.backward,b=t.left,f=t.right,g=(t.jump,t.buttonB),x=t.buttonR,y=t.buttonG,M=(t.Escape,Object(n.useRef)()),v=(Object(n.useRef)(),Object(n.useRef)()),w=Object(n.useRef)(),P=Object(n.useRef)(),k=Object(n.useRef)(),I=new O.Vector3;Object(d.d)((function(e){c?(e.camera.position.lerp(I.set(0,.2,1.2),.05),e.camera.lookAt(0,.04,0),e.camera.updateProjectionMatrix()):(e.camera.position.lerp(I.set(4.5,4,7),.05),e.camera.lookAt(0,0,0),e.camera.updateProjectionMatrix())}));var R=Object(n.useState)((function(){return Object.assign(document.createElement("video"),{src:"/drei.mp4",crossOrigin:"Anonymous",loop:!0})})),_=Object(j.a)(R,1)[0];Object(n.useEffect)((function(){o&&_.play()}),[_,o]);var S=Object(h.a)("/arcade_Draco.glb"),B=S.nodes;S.materials;return Object(p.jsxs)("group",Object(i.a)(Object(i.a)({ref:M},s),{},{dispose:null,children:[Object(p.jsx)("mesh",{geometry:B.arcade.geometry,material:B.arcade.material,position:[.25,.69,-.01],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:v,geometry:B.Button_PP.geometry,material:B.Button_PP.material,position:[.24,g?.665:.67,.15],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{geometry:B.joy.geometry,material:B.joy.material,position:[.25,.68,-.12],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:P,geometry:B.Button_GG.geometry,material:B.Button_GG.material,position:[.24,y?.665:.67,.02],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:w,geometry:B.Button_YY.geometry,material:B.Button_YY.material,position:[.24,x?.665:.67,.08],rotation:[Math.PI/2,-Math.PI/9,0]}),Object(p.jsx)("mesh",{ref:k,geometry:B.joy001.geometry,material:B.joy001.material,position:[.24,.65,-.12],"rotation-x":b&&!f?Math.PI/2+.5:!b&&f?Math.PI/2-.5:Math.PI/2,"rotation-y":l&&!u?-Math.PI/9+.5:!l&&u?-Math.PI/9-.5:-Math.PI/9}),Object(p.jsx)("group",{position:[.11,.83,-.02],rotation:[Math.PI/2,.33,0]}),Object(p.jsxs)("mesh",{rotation:[0,Math.PI/2,0],position:[.05,.8,0],children:[Object(p.jsx)("planeGeometry",{args:[.4,.4]}),Object(p.jsx)("meshStandardMaterial",{color:"#585361"}),a&&Object(p.jsx)(m.a,{className:"content",rotation:[-.2,0,0],position:[-.15,.165,0],scale:.009,transform:!0,children:Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)("iframe",{style:{width:"110%",height:"110%",margin:0,padding:0,border:0,top:0,left:0,borderRadius:"15%"},className:"relative w-full h-full",src:"https://flappybacon.netlify.app/",title:"W3Schools Free Online Web Tutorials"})})})]}),Object(p.jsxs)("mesh",{onClick:function(){r(!0)},geometry:B.screen01.geometry,position:[.11,.83,-.02],rotation:[Math.PI/2,-.34,0],children:[!a&&Object(p.jsx)("meshPhysicalMaterial",{clearcoat:1,clearcoatRoughness:0,toneMapped:!1,children:Object(p.jsx)("videoTexture",{attach:"map",args:[_],flipY:!1,repeat:[1,1],offset:[0,0],wrapT:O.RepeatWrapping,wrapS:O.RepeatWrapping,encoding:O.sRGBEncoding})}),a&&Object(p.jsx)("meshPhysicalMaterial",{thickness:5,roughness:.1,clearcoat:.9,clearcoatRoughness:1,transmission:1,ior:1,envMapIntensity:9,color:"#050505",attenuationTint:"#0096ff",attenuationDistance:.8})]})]}))}function g(e){var t=Object(n.useRef)(),a=Object(h.a)("/80s_Draco.glb"),r=a.nodes,c=a.materials;return Object(p.jsx)("group",Object(i.a)(Object(i.a)({ref:t},e),{},{dispose:null,children:Object(p.jsx)("mesh",{geometry:r.Island013.geometry,material:c["mt_palette_main.003"],position:[0,0,-5.54],scale:2.13})}))}function x(e){var t=Object(n.useRef)(),a=Object(h.a)("/mountains_Draco.glb"),r=a.nodes,c=a.materials;return Object(p.jsx)("group",Object(i.a)(Object(i.a)({ref:t},e),{},{dispose:null,children:Object(p.jsxs)("group",{rotation:[-Math.PI/2,0,0],children:[Object(p.jsxs)("group",{rotation:[Math.PI/2,0,0],children:[Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_4.geometry,material:c["Material.001"]})}),Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_6.geometry,material:c["Material.002"]})})]}),Object(p.jsxs)("group",{rotation:[Math.PI/2,0,0],position:[-15,0,0],children:[Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_4.geometry,material:c["Material.001"]})}),Object(p.jsx)("group",{scale:8,children:Object(p.jsx)("mesh",{geometry:r.Object_6.geometry,material:c["Material.002"]})})]})]})}))}h.a.preload("/arcade_Draco.glb"),h.a.preload("/80s_Draco.glb"),h.a.preload("/mountains_Draco.glb");var y=a(18),M=a(25),v=a(45),w=["url","y","space","width","height","obj"];function P(e){var t=e.url,a=e.y,r=void 0===a?2500:a,c=e.space,s=void 0===c?1.8:c,j=e.width,l=void 0===j?.01:j,u=e.height,b=void 0===u?.05:u,h=e.obj,m=void 0===h?new O.Object3D:h,f=Object(o.a)(e,w),g=Object(n.useRef)(),x=Object(v.a)((function(){return k(t)}),[t]),y=x.gain,M=x.context,P=x.update,I=x.data;return Object(n.useEffect)((function(){return y.connect(M.destination),y.gain.value=.3,function(){return y.disconnect()}}),[y,M]),Object(d.d)((function(e){for(var t=P(),a=0;a<I.length;a++)m.position.set(a*l*s-I.length*l*s/2,I[a]/r,0),m.updateMatrix(),g.current.setMatrixAt(a,m.matrix);g.current.material.color.setHSL(t/500,.75,.75),g.current.instanceMatrix.needsUpdate=!0})),Object(p.jsxs)("instancedMesh",Object(i.a)(Object(i.a)({castShadow:!0,ref:g,args:[null,null,I.length]},f),{},{children:[Object(p.jsx)("planeGeometry",{args:[l,b]}),Object(p.jsx)("meshBasicMaterial",{toneMapped:!1})]}))}function k(e){return I.apply(this,arguments)}function I(){return(I=Object(M.a)(Object(y.a)().mark((function e(t){var a,r,n,c,o,s,i;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.arrayBuffer();case 5:return r=e.sent,n=new(window.AudioContext||window.webkitAudioContext),c=n.createBufferSource(),e.next=10,new Promise((function(e){return n.decodeAudioData(r,e)}));case 10:return c.buffer=e.sent,c.loop=!0,c.start(0),o=n.createGain(),(s=n.createAnalyser()).fftSize=64,c.connect(s),s.connect(o),i=new Uint8Array(s.frequencyBinCount),e.abrupt("return",{context:n,source:c,gain:o,data:i,update:function(){return s.getByteFrequencyData(i),i.avg=i.reduce((function(e,t){return e+t/i.length}),0)}});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=["clicked"];function _(e){e.ready;var t=function(){var e={KeyW:"forward",KeyS:"backward",KeyA:"left",KeyD:"right",Space:"jump",KeyJ:"buttonB",KeyK:"buttonR",KeyL:"buttonG",Escape:"Escape",ArrowLeft:"left",ArrowUp:"forward",ArrowRight:"right",ArrowDown:"backward"},t=function(t){return e[t]},a=Object(n.useState)({forward:!1,backward:!1,left:!1,right:!1,jump:!1,buttonB:!1,buttonR:!1,buttonG:!1,Escape:!1}),r=Object(j.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var e=function(e){o((function(a){return Object(i.a)(Object(i.a)({},a),{},Object(s.a)({},t(e.code),!0))}))},a=function(e){o((function(a){return Object(i.a)(Object(i.a)({},a),{},Object(s.a)({},t(e.code),!1))}))};return document.addEventListener("keydown",e),document.addEventListener("keyup",a),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",a)}}),[]),c},a=t(),r=a.forward,c=a.backward,o=a.left,b=a.right,h=a.jump,O=a.buttonB,m=a.buttonR,y=a.buttonG,M=a.Escape;Object(n.useEffect)((function(){M&&(A(!1),I(!1),L(!0))}),[r,c,o,b,h,O,m,y,M]);var v=Object(n.useState)(!1),w=Object(j.a)(v,2),k=w[0],I=w[1],R=Object(n.useState)(!1),_=Object(j.a)(R,2),B=_[0],A=_[1],E=Object(n.useState)(!1),D=Object(j.a)(E,2),G=D[0],L=D[1];return Object(p.jsxs)(d.a,{flat:!0,dpr:[1,2],camera:{fov:25,position:[0,0,8]},children:[Object(p.jsx)("color",{attach:"background",args:["#e63946"]}),Object(p.jsx)(n.Suspense,{fallback:null,children:Object(p.jsxs)("group",{position:[2.5,-.5,0],children:[Object(p.jsx)(P,{"position-z":-.5,url:"".concat("","/comping1.mp3")}),Object(p.jsx)(P,{"position-z":-.25,url:"".concat("","/synth.mp3")}),Object(p.jsx)(P,{"position-z":0,url:"".concat("","/snare.mp3")}),Object(p.jsx)(P,{"position-z":.25,url:"".concat("","/drums.mp3")})]})}),Object(p.jsx)("ambientLight",{}),Object(p.jsxs)(l.a,{global:!0,zoom:.1,rotation:[0,-Math.PI/2,0],polar:[0,Math.PI/4],azimuth:[-Math.PI/4,Math.PI/4],children:[Object(p.jsx)("group",{onClick:function(){A(!0)},"position-y":-.75,dispose:null,children:Object(p.jsx)(f,{keys:t(),_ready:k,_setReady:I,start:B,clicked:G})}),Object(p.jsxs)(n.Suspense,{fallback:null,children:[Object(p.jsx)(x,{position:[1,-.6,0],rotation:[0,0,0],scale:.8}),Object(p.jsx)(g,{position:[-5,-.1,0],rotation:[0,Math.PI/2,0],scale:.8})]}),Object(p.jsx)(S,{onClick:function(){L(!0)},rotation:[0,Math.PI/2,0],position:[0,-.1,.18]}),Object(p.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.75,0],children:[Object(p.jsx)("planeGeometry",{args:[50,50]}),Object(p.jsx)("meshStandardMaterial",{color:"#023047"})]})]}),Object(p.jsx)(u.a,{})]})}function S(e){e.clicked;var t=Object(o.a)(e,R);return Object(p.jsxs)(b.a,Object(i.a)(Object(i.a)({font:"".concat("","/Inter-Bold.woff"),fontSize:1.25,letterSpacing:-.1},t),{},{children:["Arcade",Object(p.jsx)("meshStandardMaterial",{color:"#c9ffed"})]}))}function B(e){var t=e.children,a=Object(n.useState)(!1),r=Object(j.a)(a,2),c=r[0],o=r[1];return Object(p.jsxs)(p.Fragment,{children:[c&&t,Object(p.jsx)("div",{className:'fullscreen bg ready"} '.concat(c&&"clicked"),children:Object(p.jsxs)("a",{onClick:function(){return o(!0)},children:[Object(p.jsx)("h1",{class:"close",children:"<Click>"})," "]})})]})}var A=a(54);console.log("APP_URL",""),Object(r.render)(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(B,{children:Object(p.jsx)(n.Suspense,{fallback:null,children:Object(p.jsx)(_,{})})}),Object(p.jsx)(A.a,{date:"30. May",year:"2022",link1:Object(p.jsx)("a",{href:"https://github.com/dayuan/Demo",children:"dayuan/Demo"}),link2:Object(p.jsx)("a",{href:"https://codesandbox.io/s/duo-ge-demotheatre-iphone-reflector-variant-pf-demo-forked-2x4mw7",children:"Code Lab"})}),Object(p.jsx)(c.a,{})]}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b53356d3.chunk.js.map