(this.webpackJsonpus=this.webpackJsonpus||[]).push([[0],{58:function(e){e.exports=JSON.parse('{"tab.history":"History","tab.home":"Home","tab.promise":"Promessa","tab.us":"Us","tab.wedding":"Matrimonio","tab.weddingList":"Wedding List","us.title":"Gabry e Enzo","weddingList.title":"Aperta presso \\"Expert Mallardo\\"","weddingList.description":"\xc9 possibile recarsi direttamente in sede o effettuare un bonifico comodamente da casa.\\nIl Bonifico andr\xe0 intestato a: MALLARDO e C SRL\\nCAUSALE: Regalo lista nr\xb0 5232 - filiale 031\\nIstituto Bancario: BPER - BANCA POPOLARE DELL\'EMILIA ROMAGNA\\nIBAN: IT31Z0538703402000003225854"}')},59:function(e){e.exports=JSON.parse('{"tab.history":"Storia","tab.home":"Home","tab.promise":"Promessa","tab.us":"Noi","tab.wedding":"Matrimonio","tab.weddingList":"Lista Nozze","us.title":"Gabry e Enzo","weddingList.title":"Aperta presso \\"Expert Mallardo\\"","weddingList.description":"\xc9 possibile recarsi direttamente in sede o effettuare un bonifico comodamente da casa.\\nIl Bonifico andr\xe0 intestato a: MALLARDO e C SRL\\nCAUSALE: Regalo lista nr\xb0 5232 - filiale 031\\nIstituto Bancario: BPER - BANCA POPOLARE DELL\'EMILIA ROMAGNA\\nIBAN: IT31Z0538703402000003225854"}')},85:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n,i=a(0),c=a.n(i),r=a(31),o=a.n(r),s=a(23),l=a(60),d=a.n(l),b=a(69),j=a(25),u="SET_SELECTED_TAB";function m(e){return{type:u,payload:{selectedTab:e}}}!function(e){e[e.US=0]="US",e[e.PROMISE=1]="PROMISE",e[e.WEDDING=2]="WEDDING",e[e.WEDDING_LIST=3]="WEDDING_LIST",e[e.NONE=4]="NONE"}(n||(n={}));var O={selectedTab:n.NONE};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{selectedTab:t.payload.selectedTab});default:return e}}var p={tab:O};function x(e,t){return e||(e=p),{tab:h(e.tab,t)}}a(85);var f=a(51),g=a(66),v=a(11),N=a(112),y=a(127),w=a(68),E=a(33),S=a(37),C=a(43),I=a(114),T=a(65),k=a(115),L=a(15),D=Object(N.a)((function(e){var t;return{indicator:{display:"none"},desktopTab:{fontFamily:"Freehand 591 BT"},mobileTab:(t={fontFamily:"Freehand 591 BT"},Object(L.a)(t,e.breakpoints.up("sm"),{minWidth:"100px"}),Object(L.a)(t,e.breakpoints.down("xs"),{minWidth:"64px"}),t)}})),A=a(2);function M(e){e.icon;var t=e.label,a=e.onClick,n=e.value,i=Object(C.a)(e,["icon","label","onClick","value"]),c=D();return Object(A.jsx)(k.a,Object(j.a)({className:c.desktopTab,label:t,onClick:a,value:n},i))}function R(e){var t=e.icon,a=(e.label,e.onClick),n=e.value,i=Object(C.a)(e,["icon","label","onClick","value"]),c=D();return Object(A.jsx)(k.a,Object(j.a)({className:c.mobileTab,icon:t,onClick:a,value:n},i))}var B=function(e){var t=Object(I.a)(Object(T.a)().breakpoints.down("sm"));return Object(A.jsx)(c.a.Fragment,{children:t?Object(A.jsx)(R,Object(j.a)({},e)):Object(A.jsx)(M,Object(j.a)({},e))})},G=Object(N.a)((function(e){return{freehand:{color:e.palette.common.black,textAlign:"center",whiteSpace:"pre-line"}}})),F=a(125),P=a(116),W=a(117),V=a(118),z=a(119),U=Object(E.a)({home:{id:"tab.home"},history:{id:"tab.history"},promise:{id:"tab.promise"},wedding:{id:"tab.wedding"},weddingList:{id:"tab.weddingList"},us:{id:"tab.us"}});var _=function(){var e=c.a.useState(n.US),t=Object(w.a)(e,2),a=t[0],i=t[1],r=Object(S.a)().formatMessage,o=Object(s.c)(),l=D(),d=G(),b=c.a.useCallback((function(e,t){i(t)}),[]),j=c.a.useCallback((function(){o(m(n.US))}),[]),u=c.a.useCallback((function(){o(m(n.PROMISE))}),[]),O=c.a.useCallback((function(){o(m(n.WEDDING))}),[]),h=c.a.useCallback((function(){o(m(n.WEDDING_LIST))}),[]),p=function(e){return Object(A.jsx)("span",{className:d.freehand,children:e})};return Object(A.jsxs)(F.a,{value:a,onChange:b,variant:"standard",indicatorColor:"primary",textColor:"primary",classes:{indicator:l.indicator},children:[Object(A.jsx)(B,{value:n.US,icon:Object(A.jsx)(P.a,{}),label:p(r(U.us)),onClick:j}),Object(A.jsx)(B,{value:n.PROMISE,icon:Object(A.jsx)(W.a,{}),label:p(r(U.promise)),onClick:u}),Object(A.jsx)(B,{value:n.WEDDING,icon:Object(A.jsx)(V.a,{}),label:p(r(U.wedding)),onClick:O}),Object(A.jsx)(B,{value:n.WEDDING_LIST,icon:Object(A.jsx)(z.a,{}),label:p(r(U.weddingList)),onClick:h})]})},H=a.p+"static/media/logo.300c4f89.png",J=a(120),Z=function(e){var t=e.text,a=Object(C.a)(e,["text"]),n=Object(T.a)();return Object(A.jsx)(J.a,Object(j.a)(Object(j.a)({style:{fontFamily:"Home Winter",letterSpacing:"2px",color:n.palette.primary.main}},a),{},{children:t}))},Y=Object(N.a)((function(e){return{container:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},logo:{width:e.spacing(5),height:"auto"},siteTitle:Object(L.a)({padding:e.spacing(0,2)},e.breakpoints.down("xs"),{padding:e.spacing(0,1)})}})),q=function(){var e=Y();return Object(A.jsx)("img",{src:H,className:e.logo})};var K=function(){var e=Y(),t=Object(I.a)(Object(T.a)().breakpoints.down("sm")),a=t?"E":"Enzo",n=t?"G":"Gabry";return Object(A.jsxs)("div",{className:e.container,children:[Object(A.jsx)(Z,{text:a,variant:"h4",className:e.siteTitle}),Object(A.jsx)(q,{}),Object(A.jsx)(Z,{text:n,variant:"h4",className:e.siteTitle})]})},Q=Object(N.a)((function(e){return{appbar:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:e.spacing(1,2),backgroundColor:e.palette.common.white,overflowY:"hidden"}}}));var X=function(){var e=Q();return Object(A.jsxs)(y.a,{position:"sticky",className:e.appbar,children:[Object(A.jsx)(K,{}),Object(A.jsx)(_,{})]})},$=Object(N.a)((function(e){return{root:Object(L.a)({display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",margin:e.spacing(3),paddingTop:e.spacing(10)},e.breakpoints.down("xs"),{paddingTop:e.spacing(3)}),media:{width:"auto",height:200}}})),ee=Object(s.b)((function(e){return{scrollToMe:e.tab.selectedTab===n.PROMISE}}))((function(e){var t=c.a.useRef(null),a=$(),n=G(),i=e.scrollToMe;return c.a.useEffect((function(){var e=t.current;e&&i&&e.scrollIntoView({behavior:"smooth"})}),[i]),Object(A.jsxs)("div",{ref:t,className:a.root,children:[Object(A.jsx)(Z,{text:"Promessa",variant:"h2"}),Object(A.jsx)("img",{className:a.media,src:H}),Object(A.jsx)(J.a,{variant:"h4",color:"textSecondary",className:n.freehand,children:"Saremo Promessi"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:n.freehand,children:"18 Giugno 2021"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:n.freehand,children:"ore 10.30 - Parrocchia S. Rita"})]})})),te=a.p+"static/media/us.53c4310c.jpg",ae=Object(N.a)((function(e){var t;return{root:{display:"flex",flexDirection:"column",alignItems:"center",margin:e.spacing(3)},desktopContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%"},mobileUsContainer:{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"100%",paddingTop:e.spacing(2)},enzo:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},gabry:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},media:(t={width:480,height:360},Object(L.a)(t,e.breakpoints.down("sm"),{paddingTop:e.spacing(3),width:240,height:180}),Object(L.a)(t,"border","2px solid ".concat(e.palette.primary.main)),Object(L.a)(t,"borderRadius",e.spacing(2)),Object(L.a)(t,"objectFit","cover"),t)}})),ne=Object(E.a)({title:{id:"us.title"}}),ie=function(){var e=ae(),t=G();return Object(A.jsxs)("div",{className:e.desktopContainer,children:[Object(A.jsxs)("div",{className:e.enzo,children:[Object(A.jsx)(J.a,{gutterBottom:!0,variant:"h3",className:t.freehand,children:"Vincenzo Esposito"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Via Enrico Fermi, 197"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Villaricca (Na)"})]}),Object(A.jsx)("img",{className:e.media,src:te}),Object(A.jsxs)("div",{className:e.gabry,children:[Object(A.jsx)(J.a,{gutterBottom:!0,variant:"h3",className:t.freehand,children:"Gabriella Esposito"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Via Enrico Fermi, 217"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Villaricca (Na)"})]})]})},ce=function(){var e=ae(),t=G();return Object(A.jsxs)(c.a.Fragment,{children:[Object(A.jsx)("img",{className:e.media,src:te}),Object(A.jsxs)("div",{className:e.mobileUsContainer,children:[Object(A.jsxs)("div",{className:e.enzo,children:[Object(A.jsx)(J.a,{gutterBottom:!0,variant:"h3",className:t.freehand,children:"Vincenzo Esposito"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Via Enrico Fermi, 197"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Villaricca (Na)"})]}),Object(A.jsxs)("div",{className:e.gabry,children:[Object(A.jsx)(J.a,{gutterBottom:!0,variant:"h3",className:t.freehand,children:"Gabriella Esposito"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Via Enrico Fermi, 217"}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:t.freehand,children:"Villaricca (Na)"})]})]})]})},re=Object(s.b)((function(e){return{scrollToMe:e.tab.selectedTab===n.US}}))((function(e){var t=c.a.useRef(null),a=ae(),n=Object(S.a)().formatMessage,i=e.scrollToMe,r=Object(I.a)(Object(T.a)().breakpoints.down("sm"));return c.a.useEffect((function(){t.current&&i&&t.current.scrollIntoView({behavior:"smooth"})}),[i]),Object(A.jsxs)("div",{ref:t,className:a.root,children:[Object(A.jsx)(Z,{text:n(ne.title),gutterBottom:!0,variant:"h2",align:"center"}),r?Object(A.jsx)(ce,{}):Object(A.jsx)(ie,{})]})})),oe=a.p+"static/media/rings.4dccefd0.png",se=Object(N.a)((function(e){return{root:Object(L.a)({display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",margin:e.spacing(3),paddingTop:e.spacing(10)},e.breakpoints.down("xs"),{paddingTop:e.spacing(3)}),media:{width:"auto",height:150}}})),le=Object(s.b)((function(e){return{scrollToMe:e.tab.selectedTab===n.WEDDING}}))((function(e){var t=c.a.useRef(null),a=se(),n=G(),i=e.scrollToMe;return c.a.useEffect((function(){var e=t.current;e&&i&&e.scrollIntoView({behavior:"smooth"})}),[i]),Object(A.jsxs)("div",{ref:t,className:a.root,children:[Object(A.jsx)(Z,{text:"Matrimonio",variant:"h2",align:"center"}),Object(A.jsx)("img",{className:a.media,src:oe}),Object(A.jsx)(J.a,{variant:"h4",color:"textSecondary",className:n.freehand,children:"15 Settembre 2021"}),Object(A.jsx)(J.a,{variant:"subtitle1",color:"textSecondary",className:n.freehand,children:"Cerimonia: ore 11.00 - Parrocchia S. Rita"}),Object(A.jsx)(J.a,{variant:"subtitle1",color:"textSecondary",className:n.freehand,children:"Ricevimento: ore 13.30 - Masseria Gi\xf2sole"})]})})),de=Object(N.a)((function(e){return{root:Object(L.a)({display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",margin:e.spacing(3),paddingTop:e.spacing(10)},e.breakpoints.down("xs"),{paddingTop:e.spacing(3)})}})),be=Object(E.a)({tab:{id:"tab.weddingList"},title:{id:"weddingList.title"},description:{id:"weddingList.description"}}),je=Object(s.b)((function(e){return{scrollToMe:e.tab.selectedTab===n.WEDDING_LIST}}))((function(e){var t=c.a.useRef(null),a=de(),n=G(),i=Object(S.a)().formatMessage,r=e.scrollToMe;return c.a.useEffect((function(){var e=t.current;e&&r&&e.scrollIntoView({behavior:"smooth"})}),[r]),Object(A.jsxs)("div",{ref:t,className:a.root,children:[Object(A.jsx)(Z,{text:i(be.tab),variant:"h2",align:"center"}),Object(A.jsx)(J.a,{variant:"h4",color:"textSecondary",className:n.freehand,children:i(be.title)}),Object(A.jsx)(J.a,{variant:"h6",color:"textSecondary",className:n.freehand,children:i(be.description)})]})}));var ue,me=function(){return Object(A.jsxs)(c.a.Fragment,{children:[Object(A.jsx)(re,{}),Object(A.jsx)(ee,{}),Object(A.jsx)(le,{}),Object(A.jsx)(je,{})]})};!function(e){e.Home="/",e.About="/about"}(ue||(ue={}));var Oe=function(){var e=c.a.useCallback((function(){return Object(A.jsxs)(c.a.Fragment,{children:[Object(A.jsx)(X,{}),Object(A.jsx)(me,{})]})}),[]);return Object(A.jsx)(g.a,{children:Object(A.jsx)(v.c,{children:Object(A.jsx)(v.a,{exact:!0,path:ue.Home,render:e})})})},he=a(58),pe=a(59),xe=a(121),fe=a(48),ge=a(67),ve=a(128),Ne=Object(ge.a)({palette:{primary:{main:xe.a[700]},secondary:{main:fe.a[700]}},typography:{fontFamily:["Freehand-591-BT"].join(",")}}),ye=Object(ve.a)(Ne),we=a(122),Ee=a(123),Se=a(124),Ce=a(9),Ie=a(126),Te=Object(N.a)((function(e){return Object(Ie.a)({container:{height:"100%",padding:0,margin:0,display:"flex",flexFlow:"column"}})}));var ke,Le=Object(Ce.a)((ke=ye,Object(Ie.a)({".App":{textAlign:"center",backgroundColor:ke.palette.common.white},".App-header":{backgroundColor:"#282c34",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"calc(10px + 2vmin)",color:ke.palette.common.white},".App-intro":{fontSize:"large"},".App-link":{color:"#61dafb"},container:{height:"100%",padding:0,margin:0,display:"flex",flexFlow:"column"}})))((function(e){var t=Te(ye),a=e.lang,n=function(e){switch(e){case"it":return pe;case"en":default:return he}}(a);return Object(A.jsx)(we.a,{theme:ye,children:Object(A.jsx)(f.a,{locale:a,messages:n,children:Object(A.jsxs)(c.a.Fragment,{children:[Object(A.jsx)(Ee.a,{}),Object(A.jsx)(Se.a,{maxWidth:!1,className:t.container,children:Object(A.jsx)(Oe,{})})]})})})})),De="it"===navigator.language.toLowerCase().split(/[_-]+/)[0]?"it":"en";d.a.locale("it"===De?"it":"en-gb"),function(e){var t=function(){var e={tab:O};return Object(b.a)(x,e)}();o.a.render(Object(A.jsx)(s.a,{store:t,children:Object(A.jsx)(Le,{lang:e})}),document.getElementById("root"))}(De)}},[[89,1,2]]]);
//# sourceMappingURL=main.5e4a2298.chunk.js.map