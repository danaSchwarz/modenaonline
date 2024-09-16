import { styled } from '@mui/material/styles';

export const Main = styled('main', {})(
  ({ theme }) => ({
    overflowX: 'scroll',
    marginTop: theme.mixins.toolbar.minHeight,
    flexGrow: 1,
    padding: theme.spacing(3),
  }),
);