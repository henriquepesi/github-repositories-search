(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,n,t){e.exports=t(73)},73:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(37),i=t.n(o),c=t(12),s=t(9),l=t(6),u=t.n(l),p=t(43),d=t(10),f=t(15),m=t(16),g=t(18),b=t(17),x=t(19),h=t(20),v=t(38),y=t.n(v).a.create({baseURL:"https://api.github.com"}),E=t(2),w=t(3);function j(){var e=Object(E.a)(["\n  max-width: 700px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin: 80px auto;\n\n  h1 {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    svg {\n      margin-right: 10px;\n    }\n  }\n"]);return j=function(){return e},e}var O=w.c.div(j());function k(){var e=Object(E.a)(["\n  color: red;\n  font-size: 12px;\n  padding: 10px 5px;\n"]);return k=function(){return e},e}function S(){var e=Object(E.a)(["\n  list-style: none;\n  margin-top: 30px;\n\n  li {\n    padding: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    & + li {\n      border-top: 1px solid #eee;\n    }\n\n    a {\n      color: #7159c1;\n      text-decoration: none;\n    }\n  }\n"]);return S=function(){return e},e}function I(){var e=Object(E.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return I=function(){return e},e}function C(){var e=Object(E.a)(["\n  background: #7159c1;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return C=function(){return e},e}function z(){var e=Object(E.a)(["\n  from {\n    transform: rotate(0deg)\n  }\n\n  to {\n    transform: rotate(360deg)\n  }\n"]);return z=function(){return e},e}function R(){var e=Object(E.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 5px;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return R=function(){return e},e}var F=w.c.form(R()),A=Object(w.d)(z()),M=w.c.button.attrs(function(e){return{type:"submit",disabled:e.loading}})(C(),function(e){return e.loading&&Object(w.b)(I(),A)}),D=w.c.ul(S()),P=w.c.span(k()),_=function(e){function n(){var e,t;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(a)))).state={newRepo:"",repositories:[],loading:!1,error:null,errorMessage:""},t.handleInputChange=function(e){t.setState({newRepo:e.target.value,error:null})},t.handleSubmit=function(){var e=Object(d.a)(u.a.mark(function e(n){var r,a,o,i,c,s,l,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.setState({loading:!0,error:!1}),e.prev=2,r=t.state,a=r.newRepo,o=r.repositories,""!==a){e.next=6;break}throw"You need type one repository";case 6:if(!o.find(function(e){return e.name===a})){e.next=9;break}throw"Duplicated repository";case 9:return e.next=11,y.get("/repos/".concat(a));case 11:i=e.sent,c={name:i.data.full_name},t.setState({repositories:[].concat(Object(p.a)(o),[c]),newRepo:""}),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),s=t.state,l=s.newRepo,d=s.repositories,f=d.find(function(e){return e.name===l}),""===l?t.setState({error:!0,errorMessage:e.t0}):f?t.setState({error:!0,errorMessage:e.t0}):t.setState({error:!0,errorMessage:"Repository not found "});case 21:return e.prev=21,t.setState({loading:!1}),e.finish(21);case 24:case"end":return e.stop()}},e,null,[[2,16,21,24]])}));return function(n){return e.apply(this,arguments)}}(),t}return Object(x.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("repositories");e&&this.setState({repositories:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,n){var t=this.state.repositories;n.repositories!==t&&localStorage.setItem("repositories",JSON.stringify(t))}},{key:"render",value:function(){var e=this.state,n=e.newRepo,t=e.repositories,r=e.loading,o=e.error,i=e.errorMessage;return a.a.createElement(O,null,a.a.createElement("h1",null,a.a.createElement(h.a,null),"Reposit\xf3rios"),a.a.createElement(F,{onSubmit:this.handleSubmit,error:o},a.a.createElement("input",{type:"text",placeholder:"Adicionar reposit\xf3rio",value:n,onChange:this.handleInputChange}),a.a.createElement(M,{loading:r},r?a.a.createElement(h.c,{color:"#FFF",size:14}):a.a.createElement(h.b,{color:"#FFF",size:14}))),a.a.createElement(P,null,i),a.a.createElement(D,null,t.map(function(e){return a.a.createElement("li",{key:e.name},a.a.createElement("span",null,e.name),a.a.createElement(c.b,{to:"/repository/".concat(encodeURIComponent(e.name))},"Detalhes"))})))}}]),n}(r.Component),U=t(44);function J(){var e=Object(E.a)(["\n  padding-top: 30px;\n  margin-top: 30px;\n  border-top: 1px solid #eee;\n  list-style: none;\n\n  li {\n    display: flex;\n    padding: 15px 10px;\n    border: 1px solid #eee;\n    border-radius: 4px;\n\n    & + li {\n      margin-top: 10px;\n    }\n\n    img {\n      width: 36px;\n      height: 36px;\n      border-radius: 50%;\n      border: 2px solid #eee;\n    }\n\n    div {\n      flex: 1;\n      margin-left: 15px;\n\n      strong {\n        font-size: 16px;\n\n        a {\n          text-decoration: none;\n          color: #333;\n\n          &:hover {\n            color: #7159c1;\n          }\n        }\n\n        span {\n          background: #999;\n          color: #333;\n          border-radius: 12px;\n          font-weight: 600;\n          height: 20px;\n          padding: 3px 4px;\n          margin-left: 10px;\n        }\n      }\n\n      p {\n        margin-top: 5px;\n        font-size: 12px;\n        color: #999;\n      }\n    }\n  }\n"]);return J=function(){return e},e}function N(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  a {\n    color: #7159c1;\n    text-decoration: none;\n    font-size: 16px;\n  }\n\n  img {\n    width: 120px;\n    border-radius: 50%;\n    margin-top: 20px;\n  }\n\n  h1 {\n    font-size: 24px;\n    margin-top: 10px;\n  }\n\n  p {\n    margin-top: 5px;\n    font-size: 14px;\n    color: #666;\n    line-height: 1.4;\n    text-align: center;\n    max-width: 400px;\n  }\n"]);return N=function(){return e},e}function B(){var e=Object(E.a)([""]);return B=function(){return e},e}function H(){var e=Object(E.a)([""]);return H=function(){return e},e}function L(){var e=Object(E.a)(["\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return L=function(){return e},e}var T=w.c.div(L()),V=w.c.header(H()),Y=w.c.header(B()),q=w.c.header(N()),G=w.c.ul(J()),K=function(e){function n(){var e,t;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(a)))).state={repository:{},issues:[],loading:!0,filters:[{state:"all",label:"Todas",active:!0},{state:"open",label:"Abertas",active:!1},{state:"closed",label:"Fechadas",active:!1}],filterIndex:0,page:1},t.loadIssues=Object(d.a)(u.a.mark(function e(){var n,r,a,o,i,c,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match,r=t.state,a=r.filters,o=r.filterIndex,i=r.page,c=decodeURIComponent(n.params.repository),e.next=5,y.get("/repos/".concat(c,"/issues"),{params:{state:a[o].state,per_page:5,page:i}});case 5:s=e.sent,t.setState({issues:s.data});case 7:case"end":return e.stop()}},e)})),t.handleFilterClick=function(){var e=Object(d.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({filterIndex:n});case 2:t.loadIssues();case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t.handlePage=function(){var e=Object(d.a)(u.a.mark(function e(n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.state.page,e.next=3,t.setState({page:"back"===n?r-1:r+1});case 3:t.loadIssues();case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(x.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark(function e(){var n,t,r,a,o,i,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.match,t=this.state.filters,r=decodeURIComponent(n.params.repository),e.next=5,Promise.all([y.get("/repos/".concat(r)),y.get("/repos/".concat(r,"/issues"),{params:{state:t.find(function(e){return e.active}).state,per_page:5}})]);case 5:a=e.sent,o=Object(U.a)(a,2),i=o[0],c=o[1],this.setState({repository:i.data,issues:c.data,loading:!1});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,n=this.state,t=n.repository,r=n.loading,o=n.issues,i=n.filters,s=n.filterIndex,l=n.page;return r?a.a.createElement(T,null,"Carregando"):a.a.createElement(O,null,a.a.createElement(q,null,a.a.createElement(c.b,{to:"/"},"Voltar aos reposit\xf3rios"),a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("h1",null,t.name),a.a.createElement("p",null,t.description)),a.a.createElement(G,null,a.a.createElement(V,{active:s},i.map(function(n,t){return a.a.createElement("button",{type:"button",key:n.label,onClick:function(){return e.handleFilterClick(t)}},n.label)})),o.map(function(e){return a.a.createElement("li",{key:String(e.id)},a.a.createElement("img",{src:e.user.avatar_url,alt:e.user.login}),a.a.createElement("div",null,a.a.createElement("strong",null,a.a.createElement("a",{href:e.html_url},e.title),e.labels.map(function(e){return a.a.createElement("span",{key:String(e.id)},e.name)})),a.a.createElement("p",null,e.user.login)))})),a.a.createElement(Y,null,a.a.createElement("button",{type:"button",disabled:l<2,onClick:function(){return e.handlePage("back")}},"Anterior"),a.a.createElement("span",null,"P\xe1gina ",l),a.a.createElement("button",{type:"button",onClick:function(){return e.handlePage("next")}},"Pr\xf3ximo")))}}]),n}(r.Component);function Q(){return a.a.createElement(c.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/",exact:!0,component:_}),a.a.createElement(s.a,{path:"/repository/:repository",component:K})))}function W(){var e=Object(E.a)(["\n * {\n   margin: 0;\n   padding: 0;\n   outline: 0;\n   box-sizing: border-box;\n }\n\n html, border-style, #root {\n   min-height: 100%;\n }\n\n body {\n   background: #7159c1;\n   -webkit-font-smoothing: antialiased !important;\n }\n\n body, input, button {\n   color: #222;\n   font-size: 14px;\n   font-family: Arial, Helvetica, sans-serif;\n }\n\n button {\n   cursor: pointer;\n }\n"]);return W=function(){return e},e}var X=Object(w.a)(W());var Z=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,null),a.a.createElement(X,null)))};i.a.render(a.a.createElement(Z,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e9085dfc.chunk.js.map