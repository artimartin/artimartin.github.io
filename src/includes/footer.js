import './footer.css';
import React,{Component} from 'react';

class Footer extends Component{
	render(){
		return(
			<section id='footer' className='footer'>
				<p className="foot-copy">© 2019 Амигуруми-игрушки, Inc.</p>
				<p className="foot-copy author">Автор идеи и дизайнер Мартин Артихович</p>
				<p className="foot-copy author">Программирование и сопровождение Сергей Артихович</p>
			</section>
			)
	}
}

export default Footer;