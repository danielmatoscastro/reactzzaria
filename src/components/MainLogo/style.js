import styled from 'styled-components/macro';
import { ReactComponent as Logo } from './logoReactzzaria.svg';

export const MainLogo = styled(Logo)`
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`;

export default MainLogo;
