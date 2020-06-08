import styled from 'styled-components';
import { colors } from '../layout/constants';

const WorkshopsStyles = styled.section`

  .title {
    margin-top: 60px;
  }

  .clases-background {
    background-color: ${colors.lightPurple};
    color: white;
  }

  .clases-container {
    padding: 60px 0;
  }

  .cover-title {
    color: white;
    font-size: 80px;
    font-family: 'Tulpen One', cursive;
    letter-spacing: 4px;
    text-align: center;
    width: 50%;
  }

  .subtitle {
    margin-bottom: 20px;
    font-family: 'Spartan', sans-serif;
    font-weight: bold;
    text-align: center;
  }

  .text {
    font-size: 18px;
    font-weight: 300;
    margin: 5px 0;

    &.bold {
      font-weight: 400;
    }
  }

  .bullet-list {
    margin: 0 0 20px 20px;
  }

  .video-player {
    border-radius: 8px;
    display: block;
    margin: 10px auto;
  }

  .inscripcion {
    text-align: center;
  }

  .horarios {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 967px) {
      margin-top: 20px;
      grid-template-columns: 1fr;
    }
  }

  /* Preview */
  .link-container {
    text-align: center;
    padding: 20px 0 20px 0;
  }

  .cta-button {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    color: ${colors.white};
    display: inline-block;
    margin: 0 auto;
    text-decoration: none;
    padding: 10px 15px;
    :hover {
      background-color: ${colors.white};
      color: ${colors.purple};
    }

    &.dark {
      border: 2px solid ${colors.purple};
      color: ${colors.purple};
      :hover {
        background-color: ${colors.purple};
        color: ${colors.white};
      }
    }
  }

`;

export {
  WorkshopsStyles
}
