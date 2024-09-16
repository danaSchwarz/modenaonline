import { Typography, Container, Box, Grid } from "@mui/material";
import { Main } from "../Main.jsx";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const ContactMap = () => (
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21268.857205041986!2d16.372049466365738!3d48.21418236491725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d073f4daba163%3A0xfce7699ce9a8b1f4!2sPrater!5e0!3m2!1sde!2sat!4v1721126157954!5m2!1sde!2sat'
    width='100%'
    height='450'
    className='MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation5'
    style={{ border: 0 }}
    loading='lazy'
    referrerPolicy='no-referrer-when-downgrade'></iframe>
);

export default function About() {
  return (
    <Main>
      <Typography variant="h4" sx={{
        mb: 3, display: "block",
        marginLeft: "auto",
        marginRight: "auto", width: "150px"
      }}>About</Typography>
      <Container sx={{ height: "100%", minHeight: "100vh" }}>
        <Grid
          width="auto"
          container
          wrap="wrap"
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ gap: "10%", mb: 2 }}
        >
          <Box>
            <Box sx={{ display: "inline-block" }}>
              <HomeWorkOutlinedIcon />
              <Typography variant="h6" component="div">Place</Typography>
            </Box>
            <Typography component="p">Modena Fashion</Typography>
          </Box>

          <Box>
            <Box>
              <PhoneIphoneOutlinedIcon />
              <Typography variant="h6" component="div">Phone</Typography>
            </Box>
            <Typography component="p">+43 123 456 7890</Typography>
          </Box>

          <Box>
            <Box>
              <LocationOnOutlinedIcon />
              <Typography variant="h6" component="div">Address</Typography>
            </Box>
            <Typography component="p">Modena Shop <br /> 1234 Vienna</Typography>
          </Box>

          <Box>
            <Box>
              <EmailOutlinedIcon />
              <Typography variant="h6" component="div">Email</Typography>
            </Box>
            <Typography component="p">modena@office.com</Typography>
          </Box>
        </Grid>
        <Box>
          <ContactMap />
        </Box>
      </Container>
    </Main >
  )
}