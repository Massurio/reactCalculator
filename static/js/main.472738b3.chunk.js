(this.webpackJsonpreactcalculator=this.webpackJsonpreactcalculator||[]).push([[0],{21:function(e){e.exports=JSON.parse('[{"val":"clear","style":"clear wide","alias":"AC"},{"val":"/","style":"operator","alias":"\xf7"},{"val":7,"style":"num"},{"val":8,"style":"num"},{"val":9,"style":"num"},{"val":"*","style":"operator","alias":"x"},{"val":4,"style":"num"},{"val":5,"style":"num"},{"val":6,"style":"num"},{"val":"-","style":"operator"},{"val":1,"style":"num"},{"val":2,"style":"num"},{"val":3,"style":"num"},{"val":"+","style":"operator"},{"val":0,"style":"zero"},{"val":".","style":"num"},{"val":"=","style":"operator"}]')},28:function(e,a,t){},38:function(e,a){},39:function(e,a,t){"use strict";t.r(a);var s=t(8),l=t.n(s),r=t(20),c=t.n(r),n=t(1),o=t(6),i=(t(28),t(41)),u=t(21),v=t(5),j=function(){var e=Object(s.useState)([0]),a=Object(o.a)(e,2),t=a[0],l=a[1],r=Object(s.useState)({isError:!1,message:""}),c=Object(o.a)(r,2),j=c[0],d=c[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Mass Calculator"}),j.isError&&Object(v.jsx)("div",{className:"errorMsg",children:"Oops, you can't do that. Try again!"}),Object(v.jsxs)("div",{className:"calcWrapper",children:[Object(v.jsx)("div",{className:"screen",children:t}),Object(v.jsx)("div",{className:"buttons",children:u.map((function(e,a){return Object(v.jsx)("button",{className:"btn ".concat(e.style),onClick:function(){return function(e){try{if(d({isError:!1,message:""}),void 0===e)throw new Error("Button is not defined");if("clear"===e)l([0]);else if("="===e){var a=t.join(""),s=Object(i.a)(a);l([s])}else{var r=[].concat(Object(n.a)(t),[e]);0===r[0]&&r.shift(),l(r)}}catch(c){d({isError:!0,message:c}),l([0])}}(e.val)},children:e.alias?e.alias:e.val},a)}))})]})]})};c.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(j,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.472738b3.chunk.js.map