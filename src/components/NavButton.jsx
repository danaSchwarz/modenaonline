import { Typography, Button } from '@mui/material/';
import { NavLink } from "react-router-dom";

export default function NavButton(props) {
  const { to, value, count, children, ...rest } = props;

  return (
    // TODO: where the isActive comes from?
    <Button component={NavLink} to={to} {...rest}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "primary.dark", ':hover': { textDecorationLine: "underline" } }}>
        {children} {value} {count}
      </Typography>
    </Button>
  )
}