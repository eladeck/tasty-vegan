import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';

const colors = {
    default: {
        Pink: '#f2e1ef',
        White: 'white',
        Black: 'black'
    },
    dark: {
        Pink: 'navy',
        White: 'black',
        Black: 'white',
        Blue: 'light'
    },
    light: {
        Pink: 'lightpink',
        White: 'lightgray',
        Black: 'lightblue'
    }

}

const theme = 'default';
const { Pink, White, Black } = colors[theme];

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Link = styled(ReactLink)`
  margin: 4rem;
  background: transparet;
  font-size: 4rem;
  height: 4rem;
  line-height: 4rem;
  color: ${Black};
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
    box-shadow: lightpink 0px 25px 20px -20px;
  }
`; 