import styled from 'styled-components';

export const Wrapper = styled.div`
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }

  .text {
    font-size: 3rem;
    margin-bottom: 30px;
  }

  .Main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
  }

  .serviceslist {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .rounded-lg {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .InfoWhattoExpect {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .InfoWhattoExpect img{
    width: 80%;
  }

  .Staf img {
    width: 80%;
    margin-bottom: -3%;
    margin-left: 10%;
  }

  @media (max-width: 768px) {
    .text {
      font-size: 1.5rem;
    }
  }
`;