(this.webpackJsonpbackend=this.webpackJsonpbackend||[]).push([[14],{483:function(e,t,a){"use strict";a.r(t);var n=a(74),l=a.n(n),i=a(79),s=a(25),c=a(26),r=a(28),o=a(27),d=a(32),E=a(29),m=a(1),h=a.n(m),u=a(11),x=a(307),v=a(484),g=a(216),p=a(217),C=a(485),f=a(486),D=a(487),F=a(218),b=a(488),w=a(219),y=a(489),A=[{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1607923e7e2%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1607923e7e2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9296875%22%20y%3D%22217.75625%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 1",caption:"Slide 1"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 2",caption:"Slide 2"},{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",altText:"Slide 3",caption:"Slide 3"}],k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={activeIndex:0,cardData:[],temp:null,isLoading:!1},a.next=a.next.bind(Object(d.a)(a)),a.previous=a.previous.bind(Object(d.a)(a)),a.goToIndex=a.goToIndex.bind(Object(d.a)(a)),a.onExiting=a.onExiting.bind(Object(d.a)(a)),a.onExited=a.onExited.bind(Object(d.a)(a)),a}return Object(E.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,fetch("http://localhost:8081/getAllPost").then((function(e){return e.json()})).then((function(e){var a=e;t.setState({cardData:a}),console.log(a)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===A.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?A.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=(this.state.cardData,A.map((function(t){return h.a.createElement(x.a,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},h.a.createElement("img",{className:"d-block w-100",src:t.src,alt:t.altText}),h.a.createElement(v.a,{captionText:t.caption,captionHeader:t.caption}))})));return h.a.createElement("div",{className:"animated fadeIn"},h.a.createElement(g.a,null,h.a.createElement(p.a,null,h.a.createElement(C.a,{activeIndex:t,next:this.next,previous:this.previous},h.a.createElement(f.a,{items:A,activeIndex:t,onClickHandler:this.goToIndex}),a,h.a.createElement(D.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),h.a.createElement(D.a,{direction:"next",directionText:"Next",onClickHandler:this.next})))),h.a.createElement(F.a,null),h.a.createElement(F.a,null,h.a.createElement(b.a,{className:"text-center text-md-center"},"  Get Experts Tips and Advice  "),h.a.createElement(w.a,null,h.a.createElement(g.a,null,h.a.createElement(p.a,{xs:"12",sm:"6",md:"3"},h.a.createElement(F.a,null,h.a.createElement(b.a,null,"Your Health"),h.a.createElement(w.a,null))),h.a.createElement(p.a,{xs:"12",sm:"6",md:"3"},h.a.createElement(F.a,null,h.a.createElement(b.a,null,"Baby's Health"),h.a.createElement(w.a,null))),h.a.createElement(p.a,{xs:"12",sm:"6",md:"3"},h.a.createElement(F.a,null,h.a.createElement(b.a,null,"Baby's Sleep"),h.a.createElement(w.a,null))),h.a.createElement(p.a,{xs:"12",sm:"6",md:"3"},h.a.createElement(F.a,null,h.a.createElement(b.a,null,"Baby's Food"),h.a.createElement(w.a,null)))))),h.a.createElement(F.a,null),h.a.createElement(F.a,null,h.a.createElement(b.a,{className:"text-center text-md-center"},"  What are others people experiences  "),h.a.createElement(w.a,null,h.a.createElement(g.a,null,this.state.cardData.map((function(e){return h.a.createElement(p.a,{xs:"12",sm:"6",md:"3"},h.a.createElement(F.a,null,h.a.createElement(b.a,null,e.user.name),h.a.createElement(w.a,null,h.a.createElement("div",null," ",h.a.createElement("h5",null," ",e.title," ")),h.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.split(/(><)/)[0]}})),h.a.createElement(y.a,null,h.a.createElement(u.NavLink,{to:"/details_post",className:"nav-link"},"Home"))))}))))))}}]),t}(m.Component);t.default=k}}]);
//# sourceMappingURL=14.33474ce3.chunk.js.map