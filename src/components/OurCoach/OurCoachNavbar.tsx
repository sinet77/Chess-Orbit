import { Box, Button, Link, Typography } from "@mui/material";
import * as style from "./OurCouch.style";
import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function OurCoach() {
  const navigate = useNavigate();

  function handleJoinButtonClick() {
    navigate("/courses");
  }
  return (
    <Box>
      <Box sx={style.CouchTile}>Our Coach</Box>
      <Box sx={style.WhiteTile}>
        <Box sx={style.Titles}>
          <Typography sx={style.SmallTitle}>Our Coach</Typography>
          <Typography sx={style.BigTitle}>
            We Have Inherited Technique
          </Typography>
          <Typography sx={style.DescriptionHeader}>
            Years of teaching experience have allowed us to develop an
            individual curriculum for each student at different levels of
            advancement
          </Typography>
          <Box
            component="img"
            sx={style.HeadImage}
            src="/src/assets/ourCouch.jpg"
          />
        </Box>
        <Box sx={style.ImgWithNameBox}>
          <Box
            component="img"
            sx={style.Image}
            src="/src/assets/ja_portret.jpg"
          />
          <Box sx={style.FooterBox}>
            <Box sx={style.NameAndRole}>
              <Typography sx={style.Name}>Paweł Kozłowski</Typography>
              <Typography sx={style.Role}>Main Coach</Typography>
            </Box>
            <Box sx={style.Links}>
              <Link
                href="https://www.linkedin.com/in/pawe%C5%82-koz%C5%82owski-69b29521b/"
                color="inherit"
              >
                <LinkedIn />
              </Link>
              <Link href="https://github.com/sinet77" color="inherit">
                <GitHub />
              </Link>
              <Link href="https://facebook.com" color="inherit">
                <Facebook />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={style.GreyTile}>
        <Typography sx={style.SmallTitle}>Why Choose Us?</Typography>
        <Typography sx={style.BigTitle}>We Have An Amazing Strategy</Typography>
        <Typography sx={{ ...style.DescriptionHeader, color: "#000000" }}>
          Our personalized approach ensures each student receives targeted
          coaching, helping them excel at every stage of their chess journey.
          With cutting-edge tools and methodologies, we empower players to
          unlock their full potential.
        </Typography>
        <Box
          component="img"
          sx={style.StepsImage}
          src="/src/assets/123_steps.webp"
        />
      </Box>
      <Box sx={style.BlackTile}>
        <Box
          component="img"
          sx={style.TransparentImage}
          src="/src/assets/chess_set.png"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <Typography sx={{ ...style.BigTitle, color: "white" }}>
            Join And Become A Better Player!
          </Typography>
          <Typography sx={{ ...style.DescriptionHeader, color: "#FFFFFF" }}>
            Sign up for classes now and check your possibilities!
          </Typography>
          <Button onClick={handleJoinButtonClick} sx={style.Button}>
            Join
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
