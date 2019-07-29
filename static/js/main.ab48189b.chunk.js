(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(n,e,t){n.exports=t(73)},73:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(37),i=t.n(o),c=t(12),s=t(9),l=t(6),u=t.n(l),p=t(43),d=t(10),f=t(16),m=t(17),g=t(19),x=t(18),b=t(20),h=t(14),v=t(38),y=t.n(v).a.create({baseURL:"https://api.github.com"}),E=t(1),w=t(2);function j(){var n=Object(E.a)(["\n  max-width: 700px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin: 80px auto;\n\n  h1 {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding-bottom: 5px;\n\n    svg {\n      margin-right: 10px;\n    }\n  }\n\n  small {\n    color: #a2a2a2;\n    margin-top: 30px;\n  }\n"]);return j=function(){return n},n}var O=w.c.div(j());function k(){var n=Object(E.a)([""]);return k=function(){return n},n}function S(){var n=Object(E.a)(["\n  color: red;\n  font-size: 12px;\n  padding: 10px 5px;\n"]);return S=function(){return n},n}function z(){var n=Object(E.a)(["\n  list-style: none;\n  margin-top: 30px;\n\n  li {\n    padding: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    & + li {\n      border-top: 1px solid #eee;\n    }\n\n    a {\n      color: #7159c1;\n      text-decoration: none;\n    }\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(E.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return C=function(){return n},n}function I(){var n=Object(E.a)(["\n  background: #7159c1;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return I=function(){return n},n}function R(){var n=Object(E.a)(["\n  from {\n    transform: rotate(0deg)\n  }\n\n  to {\n    transform: rotate(360deg)\n  }\n"]);return R=function(){return n},n}function F(){var n=Object(E.a)(["\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 5px;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return F=function(){return n},n}function D(){var n=Object(E.a)(["\n  color: #7159c1;\n  margin-left: 20px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return D=function(){return n},n}var M=Object(w.c)(h.d)(D()),A=w.c.form(F()),P=Object(w.d)(R()),_=w.c.button.attrs(function(n){return{type:"submit",disabled:n.loading}})(I(),function(n){return n.loading&&Object(w.b)(C(),P)}),U=w.c.ul(z()),J=w.c.span(S()),N=w.c.div(k()),T=function(n){function e(){var n,t;Object(f.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(x.a)(e)).call.apply(n,[this].concat(a)))).state={newRepo:"",repositories:[],loading:!1,error:null,errorMessage:""},t.handleDelete=function(n){t.setState({repositories:t.state.repositories.filter(function(e){return e!==n})})},t.handleInputChange=function(n){t.setState({newRepo:n.target.value,error:null})},t.handleSubmit=function(){var n=Object(d.a)(u.a.mark(function n(e){var r,a,o,i,c,s,l,d,f;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t.setState({loading:!0,error:!1}),n.prev=2,r=t.state,a=r.newRepo,o=r.repositories,""!==a){n.next=6;break}throw Object.assign("You need type one repository");case 6:if(!o.find(function(n){return n.name===a})){n.next=9;break}throw Object.assign("Duplicated repository");case 9:return n.next=11,y.get("/repos/".concat(a));case 11:i=n.sent,c={name:i.data.full_name},t.setState({repositories:[].concat(Object(p.a)(o),[c]),newRepo:"",errorMessage:""}),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(2),s=t.state,l=s.newRepo,d=s.repositories,f=d.find(function(n){return n.name===l}),""===l?t.setState({error:!0,errorMessage:n.t0}):f?t.setState({error:!0,errorMessage:n.t0}):t.setState({error:!0,errorMessage:"Repository not found "});case 21:return n.prev=21,t.setState({loading:!1}),n.finish(21);case 24:case"end":return n.stop()}},n,null,[[2,16,21,24]])}));return function(e){return n.apply(this,arguments)}}(),t}return Object(b.a)(e,n),Object(m.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("repositories");n&&this.setState({repositories:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.repositories;e.repositories!==t&&localStorage.setItem("repositories",JSON.stringify(t))}},{key:"render",value:function(){var n=this,e=this.state,t=e.newRepo,r=e.repositories,o=e.loading,i=e.error,s=e.errorMessage;return a.a.createElement(O,null,a.a.createElement("h1",null,a.a.createElement(h.a,null),"Reposit\xf3rios"),a.a.createElement("small",null,"Type the name of the repository. Ex: facebook/react, angular/angular..."),a.a.createElement(A,{onSubmit:this.handleSubmit,error:i},a.a.createElement("input",{type:"text",placeholder:"Adicionar reposit\xf3rio",value:t,onChange:this.handleInputChange}),a.a.createElement(_,{loading:o?1:0},o?a.a.createElement(h.c,{color:"#FFF",size:14}):a.a.createElement(h.b,{color:"#FFF",size:14}))),a.a.createElement(J,null,s),a.a.createElement(U,null,r.map(function(e){return a.a.createElement("li",{key:e.name},a.a.createElement("span",null,e.name),a.a.createElement(N,null,a.a.createElement(c.b,{to:"/repository/".concat(encodeURIComponent(e.name))},"Details"),a.a.createElement(M,{onClick:function(){return n.handleDelete(e)}})))})))}}]),e}(r.Component),B=t(44);function H(){var n=Object(E.a)(["\n  padding-top: 30px;\n  margin-top: 30px;\n  border-top: 1px solid #eee;\n  list-style: none;\n\n  li {\n    display: flex;\n    padding: 15px 10px;\n    border: 1px solid #eee;\n    border-radius: 4px;\n\n    & + li {\n      margin-top: 10px;\n    }\n\n    img {\n      width: 36px;\n      height: 36px;\n      border-radius: 50%;\n      border: 2px solid #eee;\n      padding: 5px;\n      /* border: 1px solid #0099f3; */\n      margin-left: 10px;\n      background: #0099f3;\n      font-weight: bolder;\n      font-size: 12px;\n      border-radius: 5px;\n      color: #fff;\n    }\n\n    div {\n      flex: 1;\n      margin-left: 15px;\n\n      strong {\n        font-size: 16px;\n\n        a {\n          text-decoration: none;\n          color: #333;\n\n          &:hover {\n            color: #7159c1;\n          }\n        }\n\n        span {\n          padding: 5px;\n          margin-left: 10px;\n          background: #0099f3;\n          font-weight: bolder;\n          font-size: 12px;\n          border-radius: 5px;\n          color: #fff;\n        }\n      }\n\n      p {\n        margin-top: 5px;\n        font-size: 12px;\n        color: #999;\n      }\n    }\n  }\n"]);return H=function(){return n},n}function L(){var n=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  a {\n    color: #7159c1;\n    text-decoration: none;\n    font-size: 16px;\n  }\n\n  img {\n    width: 120px;\n    border-radius: 50%;\n    margin-top: 20px;\n  }\n\n  h1 {\n    font-size: 24px;\n    margin-top: 10px;\n  }\n\n  p {\n    margin-top: 5px;\n    font-size: 14px;\n    color: #666;\n    line-height: 1.4;\n    text-align: center;\n    max-width: 400px;\n  }\n"]);return L=function(){return n},n}function V(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n\n  button {\n    padding: 6px 15px;\n    border-radius: 4px;\n    margin: 0 10px;\n    color: #7159c1;\n    border: 1px solid #7159c1;\n    background: none;\n    min-width: 100px;\n  }\n"]);return V=function(){return n},n}function Y(){var n=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 30px;\n\n  button {\n    padding: 6px 15px;\n    border-radius: 4px;\n    margin: 0 10px;\n    color: #7159c1;\n    border: 1px solid #7159c1;\n    background: none;\n    min-width: 100px;\n  }\n"]);return Y=function(){return n},n}function q(){var n=Object(E.a)(["\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return q=function(){return n},n}var G=w.c.div(q()),K=w.c.header(Y()),Q=w.c.header(V()),W=w.c.header(L()),X=w.c.ul(H()),Z=function(n){function e(){var n,t;Object(f.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(n=Object(x.a)(e)).call.apply(n,[this].concat(a)))).state={repository:{},issues:[],loading:!0,filters:[{state:"all",label:"Todas",active:!0},{state:"open",label:"Abertas",active:!1},{state:"closed",label:"Fechadas",active:!1}],filterIndex:0,page:1},t.loadIssues=Object(d.a)(u.a.mark(function n(){var e,r,a,o,i,c,s;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.props.match,r=t.state,a=r.filters,o=r.filterIndex,i=r.page,c=decodeURIComponent(e.params.repository),n.next=5,y.get("/repos/".concat(c,"/issues"),{params:{state:a[o].state,per_page:5,page:i}});case 5:s=n.sent,t.setState({issues:s.data});case 7:case"end":return n.stop()}},n)})),t.handleFilterClick=function(){var n=Object(d.a)(u.a.mark(function n(e){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.setState({filterIndex:e});case 2:t.loadIssues();case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),t.handlePage=function(){var n=Object(d.a)(u.a.mark(function n(e){var r;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.state.page,n.next=3,t.setState({page:"back"===e?r-1:r+1});case 3:t.loadIssues();case 4:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),t}return Object(b.a)(e,n),Object(m.a)(e,[{key:"componentDidMount",value:function(){var n=Object(d.a)(u.a.mark(function n(){var e,t,r,a,o,i,c;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match,t=this.state.filters,r=decodeURIComponent(e.params.repository),n.next=5,Promise.all([y.get("/repos/".concat(r)),y.get("/repos/".concat(r,"/issues"),{params:{state:t.find(function(n){return n.active}).state,per_page:5}})]);case 5:a=n.sent,o=Object(B.a)(a,2),i=o[0],c=o[1],this.setState({repository:i.data,issues:c.data,loading:!1});case 10:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,e=this.state,t=e.repository,r=e.loading,o=e.issues,i=e.filters,s=e.filterIndex,l=e.page;return r?a.a.createElement(G,null,"Carregando"):a.a.createElement(O,null,a.a.createElement(W,null,a.a.createElement(c.b,{to:"/"},"Voltar aos reposit\xf3rios"),a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("h1",null,t.name),a.a.createElement("p",null,t.description)),a.a.createElement(X,null,a.a.createElement(K,{active:s},i.map(function(e,t){return a.a.createElement("button",{type:"button",key:e.label,onClick:function(){return n.handleFilterClick(t)}},e.label)})),o.map(function(n){return a.a.createElement("li",{key:String(n.id)},a.a.createElement("img",{src:n.user.avatar_url,alt:n.user.login}),a.a.createElement("div",null,a.a.createElement("strong",null,a.a.createElement("a",{href:n.html_url},n.title),n.labels.map(function(n){return a.a.createElement("span",{key:String(n.id)},n.name)})),a.a.createElement("p",null,n.user.login)))})),a.a.createElement(Q,null,a.a.createElement("button",{type:"button",disabled:l<2,onClick:function(){return n.handlePage("back")}},"Prev"),a.a.createElement("span",null,"P\xe1gina ",l),a.a.createElement("button",{type:"button",onClick:function(){return n.handlePage("next")}},"Next")))}}]),e}(r.Component);function $(){return a.a.createElement(c.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",exact:!0,component:T}),a.a.createElement(s.a,{path:"/repository/:repository",component:Z})))}function nn(){var n=Object(E.a)(["\n * {\n   margin: 0;\n   padding: 0;\n   outline: 0;\n   box-sizing: border-box;\n }\n\n html, border-style, #root {\n   min-height: 100%;\n }\n\n body {\n   background: #7159c1;\n   -webkit-font-smoothing: antialiased !important;\n }\n\n body, input, button {\n   color: #222;\n   font-size: 14px;\n   font-family: Arial, Helvetica, sans-serif;\n }\n\n button {\n   cursor: pointer;\n }\n"]);return nn=function(){return n},n}var en=Object(w.a)(nn());var tn=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(a.a.Fragment,null,a.a.createElement($,null),a.a.createElement(en,null)))};i.a.render(a.a.createElement(tn,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ab48189b.chunk.js.map