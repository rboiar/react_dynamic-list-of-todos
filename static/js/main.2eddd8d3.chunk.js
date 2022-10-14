(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(4)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.selectedTodoId,s=e.selectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:t}),Object(o.jsx)("td",{className:"is-vcentered",children:n&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()({"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(c===t?0:t)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()("far",{"fa-eye-slash":c===t},{"fa-eye":c!==t})})})})})]},t)}))})]})},j=function(e){var t=e.selectStatus,c=e.query,s=e.setSelectStatus,a=e.setQuery;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){s(e.currentTarget.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){a(e.currentTarget.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},h=function(e){var t=e.todoId,c=e.todos,s=e.selectedTodo,a=Object(l.useState)(null),d=Object(n.a)(a,2),i=d[0],r=d[1],j=Object(l.useState)(!0),h=Object(n.a)(j,2),m=h[0],O=h[1],x=c.find((function(e){return e.id===t}));return Object(l.useEffect)((function(){var e;x&&(e=x.userId,u("/users/".concat(e))).then((function(e){return r(e)}))}),[]),m?Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){O(!1),s(0)}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:null===x||void 0===x?void 0:x.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==x&&void 0!==x&&x.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(o.jsx)(b,{})]}):null},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!0),d=Object(n.a)(a,2),i=d[0],m=d[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],N=x[1],p=Object(l.useState)("all"),v=Object(n.a)(p,2),y=v[0],g=v[1],S=Object(l.useState)(0),k=Object(n.a)(S,2),T=k[0],w=k[1];Object(l.useEffect)((function(){u("/todos").then((function(e){s(e),m(!1)}))}),[]);var C=c.filter((function(e){switch(y){case"active":return!e.completed;case"completed":return e.completed;default:return!0}})).filter((function(e){return e.title.toLocaleLowerCase().includes(f.toLocaleLowerCase())}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{selectStatus:y,setSelectStatus:g,query:f,setQuery:N})}),Object(o.jsx)("div",{className:"block",children:i?Object(o.jsx)(b,{}):Object(o.jsx)(r,{todos:C,selectedTodoId:T,selectedTodo:function(e){return w(e)}})})]})})}),T&&Object(o.jsx)(h,{todos:C,todoId:T,selectedTodo:function(e){return w(e)}})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2eddd8d3.chunk.js.map