(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,o,e){},13:function(t,o,e){"use strict";e.r(o);var n=e(0),a=e.n(n),s=e(2),c=e.n(s),r=e(3),l=e(4),i=e(6),u=e(5);e(12);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}function h(){return d().then((function(t){return t.slice(0,5)}))}function f(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))}))}var m=function(t){Object(i.a)(e,t);var o=Object(u.a)(e);function e(){var t;Object(r.a)(this,e);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=o.call.apply(o,[this].concat(a))).state={chosenGoods:[],showGood:!1},t.handleShowAllGoods=function(){d().then((function(o){t.setState({chosenGoods:o,showGood:!0})}))},t.handleShow5FirstGoods=function(){h().then((function(o){t.setState({chosenGoods:o,showGood:!0})}))},t.handleShowRedGoods=function(){f().then((function(o){t.setState({chosenGoods:o,showGood:!0})}))},t}return Object(l.a)(e,[{key:"render",value:function(){var t=this.state,o=t.chosenGoods,e=t.showGood;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"App__title"},"Dynamic list of Goods"),a.a.createElement("button",{type:"button",className:"App__button",onClick:this.handleShowAllGoods},"Load All goods"),a.a.createElement("button",{type:"button",className:"App__button",onClick:this.handleShow5FirstGoods},"Load 5 first goods"),a.a.createElement("button",{type:"button",className:"App__button",onClick:this.handleShowRedGoods},"Load red goods"),e&&a.a.createElement("ul",{className:"App__list"},o.map((function(t){return a.a.createElement("li",{className:"App__item",key:t.id,style:{color:t.color}},t.name)}))))}}]),e}(a.a.Component);c.a.render(a.a.createElement(m,null),document.getElementById("root"))},7:function(t,o,e){t.exports=e(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e2256c06.chunk.js.map