(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),s=(a(91),a(5)),u=a(6),i=a(8),l=a(7),m=a(9),h=a(207),p=a(206),d=a(205),f=(a(93),function(){return r.a.createElement("div",{className:"header"},r.a.createElement(d.a,{to:"/",className:"item"},"Chatter Box"),r.a.createElement(d.a,{to:"/post",className:"item"},"Chat"),r.a.createElement(d.a,{to:"/users/login",className:"item"},"Log in"),r.a.createElement(d.a,{to:"/users/signup",className:"item"},"Sign up"))}),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Chatter Box"),r.a.createElement("img",{src:"https://pilbox.themuse.com/image.jpg?url=https%3A%2F%2Fassets.themuse.com%2Fuploaded%2Fattachments%2F20883.jpg%3Fv%3D63468a40704a57e39eccca67c4649865ab0aafc20c3e9d7867ed4d9d32194106&h=367&prog=1",alt:"description of image"}))}}]),t}(n.Component),b=a(30),g=a(11),E=a.n(g),j=a(17),O=a(18),w=a.n(O),x=a(42),y=a(39),C=a.n(y),k=a(40),N=a.n(k),_=a(41),F=a.n(_),S=a(32),R=a.n(S);var I=Object(x.withStyles)({card:{maxWidth:345},media:{height:140}})(function(e){var t=e.classes,a=e.room;return r.a.createElement(C.a,{className:t.card},r.a.createElement(N.a,null,r.a.createElement(F.a,null,r.a.createElement(R.a,{gutterBottom:!0,variant:"h5",component:"h2"},a))))}),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e)))._createRoom=Object(j.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.roomName,e.next=3,w.a.post("/api/room",{roomName:t}).then(function(){var e=Object(j.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("success room create");case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log("fail room create")});case 3:case"end":return e.stop()}},e,this)})),a._roomRender=function(){return a.state.rooms.reverse().map(function(e){return r.a.createElement(A,{room:e.roomName})})},a.state={roomName:"",rooms:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/room");case 2:t=e.sent,a=t.data,this.setState({rooms:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.rooms;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"roomname",name:"roomName",value:this.state.roomName,onChange:this.props._writeRoom}),r.a.createElement("input",{type:"submit",value:"Room Create",onClick:this._createRoom}),0!==e.length?this._roomRender():"Loading")}}]),t}(n.Component),A=function(e){var t=e.room;return r.a.createElement(I,{room:t})},B=D,M=a(81),L=a(82);var W=Object(x.withStyles)({card:{maxWidth:345},media:{height:140}})(function(e){var t=e.classes,a=e.name,n=e.text;return r.a.createElement(C.a,{className:t.card},r.a.createElement(N.a,null,r.a.createElement(F.a,null,r.a.createElement(R.a,{gutterBottom:!0,variant:"h5",component:"h2"},a),r.a.createElement(R.a,{component:"p"},n))))});function J(){var e=Object(M.a)(["\n  margin: 1rem;\n"]);return J=function(){return e},e}var $=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e)))._writeChat=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a._sendChat=Object(j.a)(E.a.mark(function e(){var t,n,r,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.userName,r=t.text,c=t.roomId,e.next=3,w.a.post("/api/post",{userName:n,text:r,roomId:c}).then(function(){var e=Object(j.a)(E.a.mark(function e(t){var n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("send chat complete"),e.next=3,w.a.get("/api/post");case 3:n=e.sent,r=n.data,a.setState({chats:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){console.log("sending failed")});case 3:case"end":return e.stop()}},e,this)})),a._chatRender=function(){return a.state.chats.reverse().map(function(e){return r.a.createElement(q,{name:e.userName,text:e.text})})},a.state={userName:"",text:"",texts:[],chats:[],roomId:1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(E.a.mark(function e(){var t,a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/api/post");case 2:t=e.sent,a=t.data,this.setState({chats:a}),console.log("Chat => this.state.chat : ",this.state.chats);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.chats;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"username",name:"userName",value:this.state.userName,onChange:this._writeChat}),r.a.createElement("input",{type:"text",placeholder:"text",name:"text",value:this.state.text,onChange:this._writeChat}),r.a.createElement("input",{type:"submit",value:"Submit",onClick:this._sendChat}),0!==e.length?this._chatRender():"Loading")}}]),t}(n.Component),q=function(e){var t=e.name,a=e.text;return r.a.createElement(z,null,r.a.createElement(W,{name:t,text:a}))},z=L.a.div(J()),G=$,H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e)))._writeRoom=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.state={roomName:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Chat"),r.a.createElement(B,{_writeRoom:this._writeRoom}),r.a.createElement("br",null),r.a.createElement(G,{roomName:this.state.roomName&&this.state.roomName}))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={usersId:"",password:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"id"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Log in"}),r.a.createElement("br",null),"\uc544\uc9c1 \ud68c\uc6d0\uc774 \uc544\ub2c8\uba74",r.a.createElement(d.a,{to:"/users/signup"},"\ud68c\uc6d0\uac00\uc785"),"\uc744 \ud574\uc8fc\uc138\uc694")}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"\ub85c\uadf8\uc778"),r.a.createElement(K,null))}}]),t}(n.Component),Q=a(208),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e)))._writeAccount=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a._registerAccount=Object(j.a)(E.a.mark(function e(){var t,n,r;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.usersId,r=t.password,e.next=3,w.a.post("/api/users/signup",{usersId:n,password:r}).then(function(e){console.log("[+] \uc720\uc800 \uac00\uc785 \uc131\uacf5"),a.setState({signComplete:!0})}).catch(function(e){console.log("[-] \uc720\uc800 \uac00\uc785 \uc2e4\ud328")});case 3:case"end":return e.stop()}},e,this)})),a.state={usersId:"",password:"",signComplete:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return console.log("\uc774\uac83\uc774 \ud788\uc2a4\ud1a0\ub9ac : ",this.props.history),!0===this.state.signComplete?r.a.createElement(Q.a,{to:"/users/login"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",placeholder:"id",name:"usersId",value:this.state.usersId,onChange:this._writeAccount}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this._writeAccount}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Sign up",onClick:this._registerAccount}))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"\ud68c\uc6d0\uac00\uc785"),r.a.createElement(T,null))}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(p.a,{exact:!0,path:"/",component:v}),r.a.createElement(p.a,{path:"/post",component:H}),r.a.createElement(p.a,{path:"/users/login",component:P}),r.a.createElement(p.a,{path:"/users/signup",component:U})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a(204)},91:function(e,t,a){},93:function(e,t,a){}},[[86,2,1]]]);
//# sourceMappingURL=main.23f1735d.chunk.js.map