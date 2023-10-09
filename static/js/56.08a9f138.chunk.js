"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[56],{5056:function(e,r,n){n.r(r),n.d(r,{default:function(){return V}});var t=n(6907),a=n(9434),i=n(5822),o=n(3044),c=n(4294),s=n(4708),u=n(7665),l=n(3433),d=n(4942),p=n(3366),m=n(7462),f=n(2791),v=n(3733),h=n(1184),g=n(8519),x=n(4419),w=n(6934),Z=n(1402),b=n(3967);var S=f.createContext(),k=n(5878),j=n(1217);function y(e){return(0,j.Z)("MuiGrid",e)}var M=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],W=(0,k.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,l.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,l.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,l.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,l.Z)(M.map((function(e){return"grid-xs-".concat(e)}))),(0,l.Z)(M.map((function(e){return"grid-sm-".concat(e)}))),(0,l.Z)(M.map((function(e){return"grid-md-".concat(e)}))),(0,l.Z)(M.map((function(e){return"grid-lg-".concat(e)}))),(0,l.Z)(M.map((function(e){return"grid-xl-".concat(e)}))))),z=n(184),N=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function P(e){var r=parseFloat(e);return"".concat(r).concat(String(e).replace(String(r),"")||"px")}function R(e){var r=e.breakpoints,n=e.values,t="";Object.keys(n).forEach((function(e){""===t&&0!==n[e]&&(t=e)}));var a=Object.keys(r).sort((function(e,n){return r[e]-r[n]}));return a.slice(0,a.indexOf(t))}var C=(0,w.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState,t=n.container,a=n.direction,i=n.item,o=n.spacing,c=n.wrap,s=n.zeroMinWidth,u=n.breakpoints,d=[];t&&(d=function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n["spacing-xs-".concat(String(e))]];var t=[];return r.forEach((function(r){var a=e[r];Number(a)>0&&t.push(n["spacing-".concat(r,"-").concat(String(a))])})),t}(o,u,r));var p=[];return u.forEach((function(e){var t=n[e];t&&p.push(r["grid-".concat(e,"-").concat(String(t))])})),[r.root,t&&r.container,i&&r.item,s&&r.zeroMinWidth].concat((0,l.Z)(d),["row"!==a&&r["direction-xs-".concat(String(a))],"wrap"!==c&&r["wrap-xs-".concat(String(c))]],p)}})((function(e){var r=e.ownerState;return(0,m.Z)({boxSizing:"border-box"},r.container&&{display:"flex",flexWrap:"wrap",width:"100%"},r.item&&{margin:0},r.zeroMinWidth&&{minWidth:0},"wrap"!==r.wrap&&{flexWrap:r.wrap})}),(function(e){var r=e.theme,n=e.ownerState,t=(0,h.P$)({values:n.direction,breakpoints:r.breakpoints.values});return(0,h.k9)({theme:r},t,(function(e){var r={flexDirection:e};return 0===e.indexOf("column")&&(r["& > .".concat(W.item)]={maxWidth:"none"}),r}))}),(function(e){var r=e.theme,n=e.ownerState,t=n.container,a=n.rowSpacing,i={};if(t&&0!==a){var o,c=(0,h.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=R({breakpoints:r.breakpoints.values,values:c})),i=(0,h.k9)({theme:r},c,(function(e,n){var t,a=r.spacing(e);return"0px"!==a?(0,d.Z)({marginTop:"-".concat(P(a))},"& > .".concat(W.item),{paddingTop:P(a)}):null!=(t=o)&&t.includes(n)?{}:(0,d.Z)({marginTop:0},"& > .".concat(W.item),{paddingTop:0})}))}return i}),(function(e){var r=e.theme,n=e.ownerState,t=n.container,a=n.columnSpacing,i={};if(t&&0!==a){var o,c=(0,h.P$)({values:a,breakpoints:r.breakpoints.values});"object"===typeof c&&(o=R({breakpoints:r.breakpoints.values,values:c})),i=(0,h.k9)({theme:r},c,(function(e,n){var t,a=r.spacing(e);return"0px"!==a?(0,d.Z)({width:"calc(100% + ".concat(P(a),")"),marginLeft:"-".concat(P(a))},"& > .".concat(W.item),{paddingLeft:P(a)}):null!=(t=o)&&t.includes(n)?{}:(0,d.Z)({width:"100%",marginLeft:0},"& > .".concat(W.item),{paddingLeft:0})}))}return i}),(function(e){var r,n=e.theme,t=e.ownerState;return n.breakpoints.keys.reduce((function(e,a){var i={};if(t[a]&&(r=t[a]),!r)return e;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=(0,h.P$)({values:t.columns,breakpoints:n.breakpoints.values}),c="object"===typeof o?o[a]:o;if(void 0===c||null===c)return e;var s="".concat(Math.round(r/c*1e8)/1e6,"%"),u={};if(t.container&&t.item&&0!==t.columnSpacing){var l=n.spacing(t.columnSpacing);if("0px"!==l){var d="calc(".concat(s," + ").concat(P(l),")");u={flexBasis:d,maxWidth:d}}}i=(0,m.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===n.breakpoints.values[a]?Object.assign(e,i):e[n.breakpoints.up(a)]=i,e}),{})}));var D=function(e){var r=e.classes,n=e.container,t=e.direction,a=e.item,i=e.spacing,o=e.wrap,c=e.zeroMinWidth,s=e.breakpoints,u=[];n&&(u=function(e,r){if(!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return["spacing-xs-".concat(String(e))];var n=[];return r.forEach((function(r){var t=e[r];if(Number(t)>0){var a="spacing-".concat(r,"-").concat(String(t));n.push(a)}})),n}(i,s));var d=[];s.forEach((function(r){var n=e[r];n&&d.push("grid-".concat(r,"-").concat(String(n)))}));var p={root:["root",n&&"container",a&&"item",c&&"zeroMinWidth"].concat((0,l.Z)(u),["row"!==t&&"direction-xs-".concat(String(t)),"wrap"!==o&&"wrap-xs-".concat(String(o))],d)};return(0,x.Z)(p,y,r)},A=f.forwardRef((function(e,r){var n=(0,Z.Z)({props:e,name:"MuiGrid"}),t=(0,b.Z)().breakpoints,a=(0,g.Z)(n),i=a.className,o=a.columns,c=a.columnSpacing,s=a.component,u=void 0===s?"div":s,l=a.container,d=void 0!==l&&l,h=a.direction,x=void 0===h?"row":h,w=a.item,k=void 0!==w&&w,j=a.rowSpacing,y=a.spacing,M=void 0===y?0:y,W=a.wrap,P=void 0===W?"wrap":W,R=a.zeroMinWidth,A=void 0!==R&&R,E=(0,p.Z)(a,N),O=j||M,G=c||M,T=f.useContext(S),q=d?o||12:T,B={},F=(0,m.Z)({},E);t.keys.forEach((function(e){null!=E[e]&&(B[e]=E[e],delete F[e])}));var I=(0,m.Z)({},a,{columns:q,container:d,direction:x,item:k,rowSpacing:O,columnSpacing:G,wrap:P,zeroMinWidth:A,spacing:M},B,{breakpoints:t.keys}),L=D(I);return(0,z.jsx)(S.Provider,{value:q,children:(0,z.jsx)(C,(0,m.Z)({ownerState:I,className:(0,v.Z)(L.root,i),as:u,ref:r},F))})})),E=A,O=n(4554),G=n(403),T=n(890),q=n(1614),B=n(7107),F=n(4507),I=(0,B.Z)(),L=function(){var e=(0,a.I0)();return(0,z.jsx)(F.Z,{theme:I,children:(0,z.jsxs)(q.Z,{component:"main",maxWidth:"xs",children:[(0,z.jsx)(s.ZP,{}),(0,z.jsxs)(O.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,z.jsx)(o.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,z.jsx)(G.Z,{})}),(0,z.jsx)(T.Z,{component:"h1",variant:"h5",children:"Register"}),(0,z.jsxs)(O.Z,{component:"form",noValidate:!0,onSubmit:function(r){r.preventDefault();var n=r.currentTarget;e((0,i.z2)({name:n.elements.name.value,email:n.elements.email.value,password:n.elements.password.value})),n.reset()},sx:{mt:3},children:[(0,z.jsxs)(E,{container:!0,spacing:2,children:[(0,z.jsx)(E,{item:!0,xs:12,children:(0,z.jsx)(u.Z,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"name",label:"Name",autoFocus:!0})}),(0,z.jsx)(E,{item:!0,xs:12,children:(0,z.jsx)(u.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,z.jsx)(E,{item:!0,xs:12,children:(0,z.jsx)(u.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,z.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Register"})]})]})]})})};function V(){return(0,z.jsx)(t.B6,{children:(0,z.jsxs)("div",{children:[(0,z.jsx)(t.ql,{children:(0,z.jsx)("title",{children:"Registration"})}),(0,z.jsx)(L,{})]})})}},403:function(e,r,n){var t=n(4836);r.Z=void 0;var a=t(n(5649)),i=n(184),o=(0,a.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=o},3044:function(e,r,n){n.d(r,{Z:function(){return b}});var t=n(9439),a=n(3366),i=n(7462),o=n(2791),c=n(3733),s=n(4419),u=n(6934),l=n(1402),d=n(9201),p=n(184),m=(0,d.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=n(5878),v=n(1217);function h(e){return(0,v.Z)("MuiAvatar",e)}(0,f.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r[n.variant],n.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,n=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,i.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),w=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,u.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var b=o.forwardRef((function(e,r){var n=(0,l.Z)({props:e,name:"MuiAvatar"}),u=n.alt,d=n.children,m=n.className,f=n.component,v=void 0===f?"div":f,b=n.imgProps,S=n.sizes,k=n.src,j=n.srcSet,y=n.variant,M=void 0===y?"circular":y,W=(0,a.Z)(n,g),z=null,N=function(e){var r=e.crossOrigin,n=e.referrerPolicy,a=e.src,i=e.srcSet,c=o.useState(!1),s=(0,t.Z)(c,2),u=s[0],l=s[1];return o.useEffect((function(){if(a||i){l(!1);var e=!0,t=new Image;return t.onload=function(){e&&l("loaded")},t.onerror=function(){e&&l("error")},t.crossOrigin=r,t.referrerPolicy=n,t.src=a,i&&(t.srcset=i),function(){e=!1}}}),[r,n,a,i]),u}((0,i.Z)({},b,{src:k,srcSet:j})),P=k||j,R=P&&"error"!==N,C=(0,i.Z)({},n,{colorDefault:!R,component:v,variant:M}),D=function(e){var r=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(n,h,r)}(C);return z=R?(0,p.jsx)(w,(0,i.Z)({alt:u,srcSet:j,src:k,sizes:S,ownerState:C,className:D.img},b)):null!=d?d:P&&u?u[0]:(0,p.jsx)(Z,{ownerState:C,className:D.fallback}),(0,p.jsx)(x,(0,i.Z)({as:v,ownerState:C,className:(0,c.Z)(D.root,m),ref:r},W,{children:z}))}))}}]);
//# sourceMappingURL=56.08a9f138.chunk.js.map