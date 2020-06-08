import React from 'react';
import { FooterStyles } from './styles';
import DefaultLayout from '../index';
import instagram from '../../../assets/img/social/instagram.png';


const Footer = (props) => {

  return (
    <FooterStyles>
      <DefaultLayout>
        <h2 className="subtitle">Contacto</h2>
        <ul>
          <li>Teléfono: (+57) 301 360 5353</li>
          <li>Correo electrónico: yaninabermejo@gmail.com</li>
          <li>
            <a
              href="https://www.instagram.com/ninabg_dance/"
              taget="_blank">
              <img className="social-icon" src={instagram} alt="instagram"/>
            </a>
          </li>
        </ul>
      </DefaultLayout>
    </FooterStyles>
  )
}

export default Footer
