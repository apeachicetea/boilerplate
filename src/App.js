import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  animation: ${rotation} 2.5s linear infinite;
`;

const Text = styled.h1`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
`;

function App() {
  return (
    <Container className='App'>
      <Box>
        <Img alt='apeach' src={`${process.env.PUBLIC_URL}/logo.png`} />
        <Text>Apeachicetea's boilerplate using create-react-app</Text>
      </Box>
    </Container>
  );
}

export default App;
