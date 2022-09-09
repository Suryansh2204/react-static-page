import styled from "styled-components";
import reactLogo from '../logo.svg'
export default function Main() {
  return (
    <>
      <Wrapper>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k starts on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile app</li>
        </ul>
      </Wrapper>
      <BgImg src={reactLogo}></BgImg>
    </>
  );
}

const BgImg=styled.img`
  position: absolute;
  top: -2em;
  right: -20em;
  filter: grayscale(90%);
  width: 50em;
  height: 50em;
  z-index: -1;
`;

const Wrapper = styled.div`
  /* background-image: url('logo.svg');
  background-repeat: no-repeat;
  filter: grayscale(100%); */
  margin: 3em;
  h1 {
    color: #ffffff;
  }
  li {
    font-size: 20px;
    color: #ffffff;
    padding-bottom: 1em;
    margin-left: 3em;
  }
  li::marker {
    color: #61dafb;
    font-size: 1.5em;
  }
`;
