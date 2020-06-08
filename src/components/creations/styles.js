import styled from 'styled-components';

const CreationsStyles = styled.section`

  .subtitle {
    margin: 100px 0 0 0;
    text-align: center;
  }

  .videos-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }

  @media (max-width: 967px) {
    .videos-container {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
`;

const CreationCardStyles = styled.article`
  padding: 60px 0 20px 0;
  border-bottom: 1px solid black;

  .video-player {
    border-radius: 8px;
    display: block;
    margin: 0 auto;
  }

  .video-title {
    font-family: 'Tulpen One', cursive;
    font-size: 36px;
    margin: 20px 0;
  }

  .video-description {
    font-size: 18px;
    font-weight: 300;
  }

  .video-data {
    margin: 10px 0;
    font-weight: 200;

    span {
      font-weight: 400;
    }
  }
`;

export {
  CreationsStyles,
  CreationCardStyles
}
