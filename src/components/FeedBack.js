import './FeedBack.css';
import React,{Component} from 'react';

export default class FeedBack extends Component{
	render(){
		return(
			<div className="feedback">
			<form method="POST" className="feedback-form" action="http://formspree.io/artihovicmartin@gmail.com">
				<p><input className="feedback-form-name" name="Имя" required placeholder="Имя" type="text" /></p>
				<p><input className="feedback-form-email" name="_replyto" required placeholder="Email" type="email" /></p>
				<p><textarea className="feedback-form-text" name="Сообщение" required placeholder="Ваше сообщение" rows="7" /></p>
		<div id="success">
          <div>Your message was sent successfully. Thanks!<span id="close" class="mdi mdi-close"></span>
          </div>
        </div>				
				<p><input className="btn feedback-form-submit" type="submit" value="Отправить" /></p>
			</form>
        </div>
			)
	}
}