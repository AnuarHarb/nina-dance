import styled from 'styled-components';


const DefaultLayoutStyled = styled.section`
  height: 100%;

  @media (max-width: 967px) {
    margin: 0 20px;
  }

  @media (min-width: 968px) {
      max-width: 900px;
      margin: 0 auto;
  }

  @media (min-width: 1200px) {
      max-width: 1000px;
  }

`
export default DefaultLayoutStyled
