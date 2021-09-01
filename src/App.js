import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy'
import './index.css';

const Container = styled.div`
  background-color: #f2e1ef;
`;

const Header = styled.div`
  display: flex;
  height: 412px;
  padding: 87px;
  justify-content: center;
  background-color: #f2e1ef;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Img = styled.img`
  transform: scale(1.5);
  border-radius: 50%;
  border: 3px solid pink;
  box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
  @media (max-width: 768px) {
    display: none;
  }
`;


const Title = styled.div`
  font-family: 'Waiting for the Sunrise', cursive;
  text-align: center;
  margin-right: 100px;
  font-size: 150px;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Seperator = styled.span`
  height: 5px;
  display: block;
  margin: 25px;
  background: radial-gradient(
    circle farthest-corner at center center,
    pink,
    #f2e1ef
  ) no-repeat;
`;

const VideoIframe = styled.iframe`
margin-bottom: 50px;
border-radius: 6px;
border: 2px pink solid;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;


const App = () => {
  return (
    <Container>
      <Header>
        <Title>Cooking with Elad</Title>
        <Img src={'my-photo.jpeg'} />
      </Header>
      <Seperator />
      {/* <ReactPlayer url={'pouring-sauce-on-nice-cream.mp4'}>Cooking!</ReactPlayer> */}
      <VideoContainer>
        <VideoIframe allow='autoplay' autoplay="1"  id="vp1sLf1x" title="Video Player" width="360" height="640" frameborder="0" src="https://s3.amazonaws.com/embed.animoto.com/play.html?w=swf/production/vp1&e=1630534837&f=sLf1xLz2sxrHJp146YYByw&d=0&m=p&r=360x640+480x854+720x1280&volume=100&start_res=720x1280&i=m&asset_domain=s3-p.animoto.com&animoto_domain=animoto.com&options=autostart" allowfullscreen></VideoIframe>
      </VideoContainer>
    </Container>
  );
}

export default App;
