(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){},20:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(6),r=t.n(c),o=(t(18),t(1)),s=t(4),m=(t(20),t(25)),i=t(8),u=function(e){var a=e.totalCalories,t=e.goal,l=e.setGoal,c=e.cookieKey,r=e.cookies,o=e.items,m=e.cookieOptions;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h1",null,"Calories"),n.a.createElement("h2",null,a)),n.a.createElement("div",{className:"col-sm-4"}),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("h1",null,"Goal"),n.a.createElement("input",{className:"marginSmall goalNumberWidth",type:"number",value:t,onChange:function(e){var a=parseInt(e.target.value)?parseInt(e.target.value):0;l(a),r.set(c,{items:Object(s.a)(o),goal:a},m)}}))))};var g=function(){var e=Object(l.useState)(0),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)([]),g=Object(o.a)(r,2),d=g[0],v=g[1],E=Object(l.useState)("Bagel"),p=Object(o.a)(E,2),b=p[0],f=p[1],O=Object(l.useState)(100),S=Object(o.a)(O,2),h=S[0],j=S[1],w=Object(l.useState)(0),N=Object(o.a)(w,2),C=N[0],k=N[1],y=new Date,D=y.setDate(y.getDate()+6),I={path:"/",expires:new Date(D)},x=function(e){var a=0;e&&(a+=e.calories),d.forEach(function(e){a+=e.calories}),k(a)},A=new i.a,G="myCalorieCount",B=A.get(G);return!B||d&&0!==d.length||(B.items.length&&(v(B.items),function(e){var a=0;e.forEach(function(e){a+=e.calories}),k(a)}(B.items)),B.goal&&0===t&&c(B.goal)),n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",null,n.a.createElement(u,{totalCalories:C,goal:t,setGoal:c,cookieKey:G,cookies:A,items:d,cookieOptions:I}),n.a.createElement("div",{class:"container marginTop"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm-5 marginSmall"},"Food"),n.a.createElement("div",{class:"col-sm-2 marginSmall"},"Calories"),n.a.createElement("div",{class:"col-sm-4 marginSmall"})),n.a.createElement("div",{className:"row"},n.a.createElement("input",{className:"col-sm-5 marginSmall",type:"text",value:b,onChange:function(e){f(e.target.value)}}),n.a.createElement("input",{className:"col-sm-2 marginSmall",type:"number",value:h,onChange:function(e){j(parseInt(e.target.value)?parseInt(e.target.value):0)}}),n.a.createElement(m.a,{className:"col-sm-4 marginSmall btn btn-primary",onClick:function(){var e={food:b,calories:h,id:(new Date).getTime()};v([].concat(Object(s.a)(d),[e])),f(""),j(0),x(e),A.set(G,{items:[].concat(Object(s.a)(d),[e]),goal:t},I)}},"Add")),d.map(function(e){return n.a.createElement("li",null,n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-sm-4 marginSmall item"},e.food),n.a.createElement("div",{class:"col-sm-2 marginSmall item"},e.calories),n.a.createElement(m.a,{className:"col-sm-2 marginSmall btn btn-danger",onClick:function(){var a=Object(s.a)(d.filter(function(a){return a.id!==e.id}));a||(a=[]),v(a),x(),A.set(G,{items:a,goal:t},I)}},"Delete")))})))))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)))},9:function(e,a,t){e.exports=t(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.a7b04c5c.chunk.js.map