import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Sidebar = styled(Box)(({ theme }) => ({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
  padding: "0 16px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    borderRight: "none",
  },
}));

export const Heading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",
});

export const Description = styled(Typography)({
  fontFamily: "Montserrat",
  textAlign: "justify",
  padding: "0 16px",
});

export const MarketData = styled(Box)(({ theme }) => ({
  alignSelf: "start",
  padding: 25,
  paddingTop: 10,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-around",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    alignItems: "start",
  },
}));
