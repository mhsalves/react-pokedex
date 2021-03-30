import { css } from "styled-components"

const common = css`
  font-family: 'Work Sans';
  margin: 0;
  padding: 0;
`;

const normal = css`
  ${common}

  font-size: 1.222rem;
  line-height: 1.5rem;
`;

const huge = css`
  ${common}

  font-size: 2.33333rem;
  line-height: 2.5rem;
`;

export default {
  normal,
  huge,
}