import React,  { Component } from 'react';
import './index.css';
import Post from '../../components/Posts';
import Phone from '../../components/Phone';

//images
import img1 from '../../assets/photos/d-1.jpg';
import img2 from '../../assets/photos/d-2.jpg';
import img3 from '../../assets/photos/d-3.jpg';
import img4 from '../../assets/photos/d-4.jpg';
import img5 from '../../assets/photos/d-5.jpg';
import img6 from '../../assets/photos/d-6.jpg';
import imgtgt from  '../../assets/photos/1.jpg';

export default class Projects extends Component {

	componentWillReceiveProps(nextProps) {
			// update prop cycle
	}

	shouldComponentUpdate(nextProps, nextState) {
		// default to true, but can overwrite
	}

	componentWillUpdate(nextProps, nextState) {
		//refresh logo activated
		//then re-render contents
	}

	componentDidUpdate(prevProps, prevState) {

	}


	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {

		}


	}

	render(){
		return (
			<div>
				<Post image={img6}/>
				<div className="details">
					<p>The first thing came into my mind is to build a platform that emphasize on skill sets between employees and employers. Came out something like this:
					</p>
					<div className="phone-showcase">
						<Phone image={img2}/>
						<Phone image={img1}/>
						<Phone image={img3}/>
					</div>
					<p>
					To make sure students are on the right track, he or she can set a job position as a target, and the system will recommend jobs that helps to fulfill the skill set requirement (the hexagon ones!) of that goal.
					</p>
					<p>With this platform, job-seekers (a.k.a students) can look for part time jobs and get rewarded with “skills” and salary. These “skills” (hexagon shaped icons) will be a part of the student’s resume. With this system, it increases the creditability of the skill endorsement in one’s resume.
					</p>
					<p>But it turned out that this <strong>is not</strong> the platform that most people want. It makes a good feature, yet there wasn’t a strong purpose & UVP in the app and thus did not encourage people to use this platform. This app needs a stronger UVP and feature to encourage HR department from companies to see the potential of this system.
					</p>
					<p>
					The second thought of this app is by creating a platform where students are able to solve companies’ problems (just like a reverse-engineered of Upwork) and get rewarded. With this feature, students can earn skills quickly by solving problems and build their resume (and also implicitly reinforce their knowledge!)
					</p>
					<div className="phone-showcase">
						<Phone image={img4}/>
						<Phone image={img5}/>
						<Phone image={img6}/>
					</div>
					<p>
					With this version of this app, the app will suggest “short-jobs” and problems that are related to the student’s skills. When a student completes a task, one will be rewarded with salary and skill points, and earned skill points will be accumulated to one’s profile page. Every time when the students complete the task, employers can also provide comments on the employee’s profile (like a feedback!). These comments help recruiters to understand more about an applicant rather than black and white resume. Recruiters can also know a student’s recent role besides how much skill points the student have. As there is “2 ways” of interaction, this system helps to increase the credibility of hiring process.
					</p>
					<p>
					Now, the fun part of this app is, students can know their "ranking" based on their skill points in their institution  through the "dojo" system. The dojo system will foster a competitive and <strong>fun</strong> environment that encourage students to increase their skill points and become the "king" in their school. I think it will be very fun for students to help and tackle real life problems with the knowledge they have learnt in institution and thus, this process helps to strengthen their learning transfer.
					</p>
					<p>
					Sounds like a fun and interactive system, But the UVP is not there yet. </p>
					<p>
					When I talked to Matt about the idea, he suggested that my features can be combined with something like a more specific version of DevPost – for companies to network with not only computer programmers but also for other professions too. He inspired me some new ideas on how to let every student have the chance to do something big.  
					</p>
					<p>
					Both of us shares the same opinion - students do not have to be big to create something; instead they learn new stuffs and create something big.
					</p>
					<div className="phone-showcase">
						<Phone image={imgtgt}/>
					</div>
					<p style={{fontSize: '15px', textAlign: 'center',}}>A big shout out to <strong>Matt</strong> (left), <strong>Richard</strong> (right) and people in <strong>Sunway iLabs</strong> who gave me a lot of support while I’m on my way to think like an entrepreneur. Kamshahamida!
</p>
					<p className="end">~ This journey has not ended yet. To be continued somewhere during this winter. ~</p>
				</div>
			</div>

		);
	}

}

Projects.propTypes = {

}

Projects.defaultProps = {

}
