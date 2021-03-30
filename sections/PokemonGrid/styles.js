import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: ${({ theme: { space } }) => space.base};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  padding: ${({ theme: { space } }) => space.base};
`;

const Item = styled.div`
  display: grid;
  grid-gap: ${({ theme: { space } }) => space.base};

  background-color: ${({ theme: { colors } }) => colors.white.base};
  border-radius: 0.25rem;

  padding: ${({ theme: { space } }) => space.small};
  box-sizing: border-box;
`;

const Image = styled.img`
  margin: 0 auto;
  max-height: 120px;
`;

const DescriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme: { typography } }) => typography.normal}
`;

const Label = styled.p``;

export default {
  Container,
  Item,
  Image,
  DescriptionContent,
  Label,
}
