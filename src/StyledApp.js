// link to all pictures https://photos.app.goo.gl/tWzzGsx79UJWiG2w8
// link to single picutre
import styled from 'styled-components';
// import ReactPlayer from 'react-player/lazy'

export const AppContainer = styled.div`
  background-color: #f2e1ef;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: center;
  background-color: #f2e1ef;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Img = styled.img`
  transform: scale(0.5);
  border-radius: 50%;
  border: 0.2rem solid pink;
  box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
  @media (max-width: 768px) {
    display: none;
  }
`;


export const Title = styled.div`
  font-family: 'Waiting for the Sunrise', cursive;
  text-align: center;
  margin-right: 5rem;
  font-size: 10rem;
`;


export const Seperator = styled.span`
  height: 0.4rem ;
  display: block;
  margin: 3rem;
  background: radial-gradient(
    circle farthest-corner at center center,
    pink,
    #f2e1ef
  ) no-repeat;
`;

