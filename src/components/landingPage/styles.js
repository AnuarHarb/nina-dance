import styled from 'styled-components';
import cover from '../../assets/img/cover-nina.jpg';
import { colors } from '../layout/constants';

const LandingStyles = styled.section`

  .cover-background {
    background-image: url(${cover});
    background-size: cover;
    background-position: center;
    height: 90vh;
  }

  .cover-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    width: 100%;
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
    margin-bottom: 40px;
    font-family: 'Spartan', sans-serif;
    font-weight: bold;
    text-align: center;
  }

  .text {
    font-size: 18px;
    font-weight: 300;
    margin: 5px 0;
    text-align: justify;

    &.bold {
      font-weight: 400;
    }
  }

  .about {
    align-items: center;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px 0;
  }

  .clases-background {
    background-color: ${colors.lightPurple};
  }

  .clases-container {
    color: white;
    padding: 80px 0;
  }

  .clases-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }

  .clases-card {
    width: 300px;

    img {
      width: 100%;
    }
  }

  .bullet-list {
    margin-left: 20px;
  }

  .video-player {
    border-radius: 8px;
    display: block;
    margin: 10px auto;
  }

  /* Videos */
  .videos-container {
    padding: 80px 0;

    .subtitle {
      margin: 0;
    }
  }

  .link-container {
    text-align: center;
    padding: 40px 0 20px 0;
  }

  .ver-mas {
    color: ${colors.purple};
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;

    :hover {
      color: ${colors.highlight};
    }
  }

  @media (max-width: 967px) {
    .cover-background {
      background-image:  linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${cover});
      background-position: 10% 100%;
    }

    .cover-container {
      justify-content: center;
    }

    .clases-grid {
      justify-content: center;
    }

    .clases-card {
      margin: 10px;
    }
  }


`;

export {
  LandingStyles
}
