import styled from 'styled-components';

const Container = styled.div`
  ${({ theme: { typography } }) => typography.normal}
  text-align: center;

  background-color: ${({ theme: { colors } }) => colors.white.base};
  border-radius: 0.25rem;
  padding: ${({ theme: { space } }) => space.base};
`;

export default {
  Container,
}