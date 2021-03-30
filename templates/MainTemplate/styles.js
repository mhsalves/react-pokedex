import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme: { colors } }) => colors.white.contrast};
`;

const Content = styled.div`
  padding: ${({ theme: { space } }) => space.base};
  box-sizing: border-box;
  min-height: calc(100vh - 88px); /** 88px is the height of Header */
`;

export default {
  Container,
  Content,
}
