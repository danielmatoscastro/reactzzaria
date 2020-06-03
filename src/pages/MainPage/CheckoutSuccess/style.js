import styled from 'styled-components/macro';
import { Paper as MaterialPaper, Divider as MaterialDivider } from '@material-ui/core';

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

export const Paper = styled(MaterialPaper)`
  padding: ${({ theme }) => theme.spacing(3)}px;
`;

export const Divider = styled(MaterialDivider)`
  margin: ${({ theme }) => theme.spacing(3, 0)};
`;

export default Header;
