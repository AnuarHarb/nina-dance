import styled from 'styled-components';
import { colors } from '../constants';

const FooterStyles = styled.footer`
  background-color: ${colors.black};
  color: white;
  padding: 80px 40px;

  .subtitle {
    margin-bottom: 40px;
    font-family: 'Spartan', sans-serif;
    font-weight: bold;
  }

  ul {
    list-style: none;

    li {
      margin: 10px;
      font-size: 20px;
      font-weight: 100;
    }
  }

  .social-icon {
    width: 40px;
  }

  @media (max-width: 967px) {
    padding: 80px 0px;

    ul li {
      font-size: 16px;
    }
  }

`;

export {
  FooterStyles
}
