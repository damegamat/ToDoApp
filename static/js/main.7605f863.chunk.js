(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),c=a.n(s),i=(a(15),a(1)),l=a(2),o=a(3),u=a(5),d=a(4),m=a(6),h=a(9),k=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleChange=function(e){var t=e.target.name,n=e.target.value;"checkbox"===e.target.type&&(n=e.target.checked),a.setState(Object(h.a)({},t,n))},a.handleAdd=function(){var e=a.state,t=e.text,n=e.checked,r=e.date;t.length>0?a.props.add(t,r,n)&&a.setState({text:"",checked:!1,date:a.minDate}):alert("Enter the task")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",r.a.createElement("div",{className:"form"},r.a.createElement("input",{name:"text",onChange:this.handleChange,type:"text",placeholder:"add task ",value:this.state.text}),r.a.createElement("div",{className:"priority"},r.a.createElement("input",{name:"checked",onChange:this.handleChange,id:"priority",type:"checkbox",checked:this.state.checked}),r.a.createElement("label",{htmlFor:"priority"},"Priority")),r.a.createElement("div",{className:"date"},r.a.createElement("label",{htmlFor:"date"}," Lead time"),r.a.createElement("input",{name:"date",onChange:this.handleChange,id:"date",type:"date",value:this.state.date,min:this.minDate,max:e})),r.a.createElement("button",{className:"add",onClick:this.handleAdd},"Add".toUpperCase()))}}]),t}(n.Component)),f=(a(17),function(e){var t=e.task,a=t.id,n=t.text,s=t.date,c=t.active,i=t.important,l=t.finishDate;if(c)return r.a.createElement("div",{className:"activeTask"},r.a.createElement("p",null,r.a.createElement("strong",{className:i?"priority":""},n),"to ",r.a.createElement("span",null,s),r.a.createElement("button",{onClick:function(){return e.status(a)}},"Done".toUpperCase()),r.a.createElement("button",{onClick:function(){return e.delete(a)}},"X")));var o=new Date(l).toLocaleString();return r.a.createElement("div",{className:"deactiveTask"},r.a.createElement("p",null,r.a.createElement("strong",null,n),r.a.createElement("em",null," to ",s),r.a.createElement("span",null," Completed: ",o),r.a.createElement("button",{onClick:function(){return e.delete(a)}},"X")))}),p=(a(18),function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});a.length>=2&&a.sort(function(e,t){return t.finishDate-e.finishDate}),t.length>=2&&t.sort(function(e,t){return e=e.text.toLowerCase(),t=t.text.toLowerCase(),e.text<t.text?-1:e.text>t.text?1:0});var n=t.map(function(t){return r.a.createElement(f,{key:t.id,task:t,status:e.status,delete:e.delete})}),s=a.map(function(t){return r.a.createElement(f,{key:t.id,task:t,status:e.status,delete:e.delete})});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"active"},r.a.createElement("h1",null,"Tasks to do".toUpperCase()),n.length>0?n:r.a.createElement("p",null,"Well done, time for break")),r.a.createElement("div",{className:"deactive"},r.a.createElement("h3",null,"Done".toUpperCase()," ",s.length),s.length>5&&r.a.createElement("span",null,"Last 5 tasks"),s.slice(0,5)))}),v=(a(19),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={tasks:[]},a.counter=a.state.tasks.length,a.deleteTask=function(e){var t=Object(i.a)(a.state.tasks);t=t.filter(function(t){return t.id!==e}),a.setState({tasks:t})},a.changeTaskStatus=function(e){var t=Object(i.a)(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t,n){var r=Object(i.a)(a.state.tasks),s=!1;if(r.forEach(function(t){if(t.text===e)return s=!0}),!s){var c={id:a.counter,text:e,date:t,important:n,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[c])}}),!0}alert("Exist")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Add your tasks".toUpperCase()),r.a.createElement(k,{add:this.addTask,tasks:this.state.tasks}),r.a.createElement(p,{tasks:this.state.tasks,status:this.changeTaskStatus,delete:this.deleteTask}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.7605f863.chunk.js.map