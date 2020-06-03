import styled from 'styled-components/macro';
import { Paper as MaterialPaper } from '@material-ui/core';
import { Title as ComponentsTitle } from 'components';

export const Title = styled(ComponentsTitle).attrs({
  variant: 'h6',
})`
  text-align: left;
`;

export const Paper = styled(MaterialPaper)`
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  flex-grow: 1;
`;

export const ContentFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
