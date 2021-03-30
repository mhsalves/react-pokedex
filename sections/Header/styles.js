import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme: { space } }) => space.base};

  background-color: ${({ theme: { colors } }) => colors.red.base};
  ${({ theme: { shadow } }) => shadow.base}
`;

const Title = styled.h1`
  ${({ theme: { typography } }) => typography.huge}
  color: ${({ theme: { colors } }) => colors.white.base};
`;

export default {
  Container,
  Title,
}
