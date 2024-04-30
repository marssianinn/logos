import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { IoIosArrowUp} from "react-icons/io";
const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__content">
                    <span className='footer__svg'>
                        <IoIosArrowUp fill='black' size={40}/>
                    </span>
                    <div className="footer__block">
                        <h2 onClick={()=>navigate('/')} className='header__title'>LOGOS</h2>
                        <span className='footer__block-subtitle'>© ООО СК «АПШЕРОН» <br/>
                            Все права защищены. 2010-2020</span>
                        <div>
                            <p className='footer__block-text'>Пользовательское соглашение</p>
                            <p className='footer__block-text'>Карта сайта</p>
                            <p className='footer__block-text'>Политика конфиденциальности</p>
                        </div>
                    </div>
                    <ul className='footer__list'>
                        <li className='footer__item'>О ресторане</li>
                        <Link to='/delivery' className='footer__item'>Условия доставки</Link>
                        <li className='footer__item'>Возврат товара</li>
                        <Link to='/sales' className='footer__item'>Акции</Link>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;