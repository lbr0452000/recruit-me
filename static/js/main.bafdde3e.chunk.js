(this["webpackJsonprecruit-me"]=this["webpackJsonprecruit-me"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={title:"HRContacts_title__WaTxs",contact:"HRContacts_contact__2NMdf",contactTitle:"HRContacts_contactTitle__3s-Jo",contactIcon:"HRContacts_contactIcon__2-B4V",contactContent:"HRContacts_contactContent__2QyGG",SassComponent:"HRContacts_SassComponent__3IUAv",box:"HRContacts_box__22ay_",red:"HRContacts_red__3G_od",orange:"HRContacts_orange__25CyD",yellow:"HRContacts_yellow__3ipSo",green:"HRContacts_green__2vqR2",blue:"HRContacts_blue__2Vx9m",indigo:"HRContacts_indigo__OsQVr",violet:"HRContacts_violet__3bKpo"}},function(e,t,a){e.exports={title:"HROthers_title__1jWd4",contents:"HROthers_contents__33h_v",content:"HROthers_content__14NhE",content_title:"HROthers_content_title__3gxnd",content_detail:"HROthers_content_detail__CHS3c"}},function(e,t,a){e.exports={title:"HRCareer_title__1P0yu",detail:"HRCareer_detail__1TKuZ",detail_title:"HRCareer_detail_title__BL8Oe",detail_term:"HRCareer_detail_term__1bKQW",detail_content:"HRCareer_detail_content__2njev"}},function(e,t,a){e.exports={title:"HRSkillGraph_title__3TYOC",skill:"HRSkillGraph_skill__2kdvG",skill_title:"HRSkillGraph_skill_title__Q70wi"}},function(e,t,a){e.exports={title:"HRHorizonProgressBar_title__xd6p8",graph:"HRHorizonProgressBar_graph__1KnzT",graph_progress:"HRHorizonProgressBar_graph_progress__2zQ7_"}},function(e,t,a){e.exports={name:"HRHeader_name__3gXhz",image:"HRHeader_image__lbm7W"}},,,function(e,t,a){e.exports=a.p+"static/media/Profile.74d8696b.jpeg"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=(a(20),a(1)),s=a(2),l=a(4),m=a(3),p=a(5),u=(a(21),a(22),a(11)),_=a.n(u),h=a(14),d=a.n(h),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HRHeader"},r.a.createElement("h1",{className:_.a.name},this.props.name),r.a.createElement("img",{className:_.a.image,src:d.a,alt:"\ud504\ub85c\ud544 \uc0ac\uc9c4"}))}}]),t}(n.Component),f=a(6),v=a.n(f),b=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HRContacts"},r.a.createElement("h3",{className:v.a.title},"Contacts"),this.props.contacts.map((function(e,t){return r.a.createElement("div",{className:v.a.contact,key:t},r.a.createElement("h5",{className:v.a.contactTitle},"Email"===e.type?r.a.createElement("img",{className:v.a.contactIcon,src:"https://image.flaticon.com/icons/png/512/181/181535.png",alt:"contact icon"}):void 0,"Github"===e.type?r.a.createElement("img",{className:v.a.contactIcon,src:"https://image.flaticon.com/icons/png/512/25/25231.png",alt:"contact icon"}):void 0,r.a.createElement("font",null,e.type)),r.a.createElement("div",{className:v.a.contactContent},e.address))})))}}]),t}(n.Component),C=(a(23),a(9)),E=a.n(C),O=a(10),S=a.n(O),R=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={width:this.props.percentage+"%"};return r.a.createElement("div",{className:"HRHorizonProgressBar"},r.a.createElement("div",{className:S.a.title},this.props.title),r.a.createElement("div",{className:S.a.graph},r.a.createElement("div",{className:S.a.graph_progress,style:e})))}}]),t}(n.Component),H=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HRSkillGraph"},r.a.createElement("h3",{className:E.a.title},this.props.skillName),this.props.skills.map((function(e,t){return r.a.createElement("div",{className:E.a.skill,key:t},r.a.createElement("h5",{className:E.a.skill_title},e.name),r.a.createElement(R,{title:e.comment,percentage:e.graph}))})))}}]),t}(n.Component),j=a(8),N=a.n(j),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HRCareer"},r.a.createElement("h3",{className:N.a.title},this.props.title),this.props.contents.map((function(e,t){return r.a.createElement("div",{className:N.a.detail,key:t},r.a.createElement("h4",{className:N.a.detail_title},e.name),r.a.createElement("div",{className:N.a.detail_term},e.term),e.details.map((function(e,t){return r.a.createElement("div",{className:N.a.detail_content,key:t},"- "+e)})))})))}}]),t}(n.Component),y=a(7),A=a.n(y),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HROthers"},r.a.createElement("h3",{className:A.a.title},"Others"),r.a.createElement("div",{className:A.a.contents},this.props.contents.map((function(e,t){return r.a.createElement("div",{className:A.a.content,key:t},r.a.createElement("h4",{className:A.a.content_title},e.title),r.a.createElement("div",{className:A.a.content_detail},e.subtitle),e.details.map((function(e,t){return r.a.createElement("div",{className:A.a.content_detail,key:t},e)})))}))))}}]),t}(n.Component),P=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HRResume"},r.a.createElement(g,{name:this.props.info.name}),r.a.createElement("div",{className:"HRResumeContents"},r.a.createElement("div",{className:"HRResumeContents-left"},r.a.createElement(b,{contacts:this.props.info.contacts}),r.a.createElement(H,{skillName:"Languages",skills:this.props.info.languages}),r.a.createElement(H,{skillName:"Skills",skills:this.props.info.skills})),r.a.createElement("div",{className:"HRResumeContents-right"},r.a.createElement(k,{title:"Education",contents:this.props.info.education}),r.a.createElement(k,{title:"Careers",contents:this.props.info.careers}),r.a.createElement(k,{title:"Projects",contents:this.props.info.projects}))),r.a.createElement("div",{className:"HRResumeContents-bottom"},r.a.createElement(w,{contents:this.props.info.others})))}}]),t}(n.Component),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(P,{info:{name:"JaeHyung Ahn",contacts:[{type:"Email",address:"harrison_ahn@icloud.com"},{type:"Github",address:"lbr0452000.github.io"}],languages:[{name:"Korean",graph:100,comment:"Native Speaker"},{name:"English",graph:75,comment:"TOEIC 865"}],skills:[{name:"Swift",graph:90},{name:"Node JS",graph:75},{name:"Python",graph:75},{name:"React JS",graph:30},{name:"Java",graph:30},{name:"Photoshop",graph:90}],education:[{name:"Chung-Ang Univ. Bachelor",term:"Mar 2017 - Present",location:"Seoul, Korea",details:["Computer Science & Engineering Major","Taking a leave of absence due to compulsory military service"]}],careers:[{name:"iOS App Developer, Stipop Inc.",term:"Mar 2019 - Apr 2019",location:"Seollung, Seoul",details:["[RxSwift, UI/UX Design]","Developed Contents Platform App \u2018Stipop\u2019","Designed and Developed UX for Subscription Service"]},{name:"Internship iOS App Developer, Violet Inc.",term:"Jul 2018 - Sep 2018",location:"Seollung, Seoul",details:["[Mapbox API, Alamofire, AVFoundation]","Developed Video-based Social Media Service \u2018elevn\u2019","Attended Techcrunch Disrupt San Francisco, 2018","Naver D2 Campus iOS App Tech Meetup \u2018My iOS App Experience\u2019 Speaker"]}],projects:[{name:"\uc911\uc559\ub300\uae30\uc219\uc0ac\uc54c\ub9ac\ubbf8",term:"Jan 2018 - Aug 2018",details:["Released at AppStore","Client: iOS App(Swift)","Backend Server : Firebase Realtime DB + Crawling Server(Python)"]},{name:"Alarm CAU(\uc54c\ub78c\uce74\uc6b0)",term:"Sep 2018 - Mar 2019",details:["Renewal version of \uc911\uc559\ub300\uae30\uc219\uc0ac\uc54c\ub9ac\ubbf8","Client: iOS App(Swift)","Backend Server : NodeJS + MariaDB"]}],others:[{title:"ZeroPage",subtitle:"ChungAng Univ. Scholarship Club",details:["(2018.03~) Mentor at \uc0c8\uc2f9\uad50\uc2e4(Mentoring Program for Freshmen)","(2018.05.04) AngelsCamp(Regular Hackathon) - JoonTarot App"]},{title:"Steamers",subtitle:"ChungAng Univ. Game Scholarship Club",details:["(2018.03~) Vice-President","(2018.02~) Wiki Server Supervisor","(2018.05.24) Representative Speaker at \u2018Open Source SW Seminar\u2019"]},{title:"Volunteer",subtitle:"Science Camp for Elementary School Students at YangJung Youth Center(\uc6c0\uc9c1\uc774\ub294\uacfc\ud559\ubd80\uc2a4 \uc591\uc815\uccad\uc18c\ub144\uc218\ub828\uad00)",details:["(2016.01~2017.01) Project Manager","(2014.12~2017.01) Teacher + Instructor"]},{title:"Part-Time Job",subtitle:"",details:["(2016.12~2017.01) Study for tomorrow Cafe (Baristar, Staff)","(2017.08~2018.01) A Twosome Place (Cafe) (Baristar, Staff)"]}]}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[15,1,2]]]);
//# sourceMappingURL=main.bafdde3e.chunk.js.map