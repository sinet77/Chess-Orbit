import { SxProps } from "@mui/material/styles";

export const Container: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem",
  maxWidth: "800px",
  margin: "auto",
  textAlign: "justify",
  backgroundColor: "#cefad0",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export const Background: SxProps = {
  backgroundImage: "url(/src/assets/shattered_figures.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "20px",
};

export const Title: SxProps = {
  fontWeight: "bold",
  color: "black",
};

export const SubTitle: SxProps = {
  fontWeight: "bold",
  color: "#333",
  marginTop: "15px",
};

export const Description: SxProps = {
  color: "black",
  fontSize: "16px",
  lineHeight: "1.6",
  marginBottom: "15px",
};

export const Section: SxProps = {
  textAlign: "left",
  marginBottom: "18px",
  backgroundColor: "#9FE2BF",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid black",
};

export const ActionButton: SxProps = {
  backgroundColor: "#b87333",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#654321",
  },
  marginTop: "1rem",
  padding: "0.75rem 1.5rem",
  fontWeight: "bold",
};

export const FooterText: SxProps = {
  fontWeight: "bold",
  color: "#888",
  marginTop: "20px",
};

export const StartingPage: SxProps = {
  minHeight: "100vh",
  backgroundImage: "url(/src/assets/dark_chess_background.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  padding: "15px",
};

export const StartingSection: SxProps = {
  textAlign: "left",
  marginBottom: "15px",
  backgroundColor: "#d3a27f",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid black",
};
export const AboutUsText: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mb: "20px",
  mt: "-74px",
  fontSize: "40px",
  color: "white",
};
export const DownButton: SxProps = {
  backgroundColor: "#ff008c",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
};
