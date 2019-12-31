import React, { Component } from "react";
import './App.scss';
import HRResume from "./contents/HRResume/HRResume";

class App extends Component {	
	render() {
		const myInfo = {
			name: "JaeHyung Ahn",
			contacts: [
				{type: "Email", address: "harrison_ahn@icloud.com"},
				{type: "Github", address: "lbr0452000.github.io"}
			],
			languages: [
				{name: "Korean", graph: 100, comment: "Native Speaker"},
				{name: "English", graph: 75, comment: "TOEIC 865"}
			],
			skills: [
				{name: "Swift", graph: 90},
				{name: "Node JS", graph: 75},
				{name: "Python", graph: 75},
				{name: "React JS", graph: 30},
				{name: "Java", graph: 30},
				{name: "Photoshop", graph: 90},
			],
			education: [
				{
					name: "Chung-Ang Univ. Bachelor",
					term: "Mar 2017 - Present",
					location: "Seoul, Korea",
					details: [
						"Computer Science & Engineering Major",
						"Taking a leave of absence due to compulsory military service"
					]
				}
			],
			careers: [
				{
					name: "iOS App Developer, Stipop Inc.",
					term: "Mar 2019 - Apr 2019",
					location: "Seollung, Seoul",
					details: [
						"[RxSwift, UI/UX Design]",
						"Developed Contents Platform App ‘Stipop’",
						"Designed and Developed UX for Subscription Service"
					]
				},
				{
					name: "Internship iOS App Developer, Violet Inc.",
					term: "Jul 2018 - Sep 2018",
					location: "Seollung, Seoul",
					details: [
						"[Mapbox API, Alamofire, AVFoundation]",
						"Developed Video-based Social Media Service ‘elevn’",
						"Attended Techcrunch Disrupt San Francisco, 2018",
						"Naver D2 Campus iOS App Tech Meetup ‘My iOS App Experience’ Speaker"
					]
				}
			],
			projects: [
				{
					name: "중앙대기숙사알리미",
					term: "Jan 2018 - Aug 2018",
					details:[
						"Released at AppStore",
						"Client: iOS App(Swift)",
						"Backend Server : Firebase Realtime DB + Crawling Server(Python)"
					]
				},
				{
					name: "Alarm CAU(알람카우)",
					term: "Sep 2018 - Mar 2019",
					details:[
						"Renewal version of 중앙대기숙사알리미",
						"Client: iOS App(Swift)",
						"Backend Server : NodeJS + MariaDB"
					]
				}
			],
			others: [
				{
					title: "ZeroPage",
					subtitle: "ChungAng Univ. Scholarship Club",
					details: [
						"(2018.03~) Mentor at 새싹교실(Mentoring Program for Freshmen)",
						"(2018.05.04) AngelsCamp(Regular Hackathon) - JoonTarot App"
					]
				},
				{
					title: "Steamers",
					subtitle: "ChungAng Univ. Game Scholarship Club",
					details: [
						"(2018.03~) Vice-President",
						"(2018.02~) Wiki Server Supervisor",
						"(2018.05.24) Representative Speaker at ‘Open Source SW Seminar’"
					]
				},
				{
					title: "Volunteer",
					subtitle: "Science Camp for Elementary School Students at YangJung Youth Center(움직이는과학부스 양정청소년수련관)",
					details: [
						"(2016.01~2017.01) Project Manager",
						"(2014.12~2017.01) Teacher + Instructor"
					]
				},
				{
					title: "Part-Time Job",
					subtitle: "",
					details: [
						"(2016.12~2017.01) Study for tomorrow Cafe (Baristar, Staff)",
						"(2017.08~2018.01) A Twosome Place (Cafe) (Baristar, Staff)"
					]
				},
			]
		}
		return (
			<div className="App">
				<div className="container">
					<HRResume info={myInfo}/>
				</div>
			</div>
		)
  }
}

export default App;