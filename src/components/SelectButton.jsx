import React from "react";
import { styled } from "@mui/material/styles";

// Using styled API instead of makeStyles (recommended approach in latest MUI)
const StyledButton = styled('span')(({ theme, selected }) => ({
  border: "1px solid gold",
  borderRadius: 5,
  padding: 10,
  paddingLeft: 20,
  paddingRight: 20,
  fontFamily: "Montserrat",
  cursor: "pointer",
  backgroundColor: selected ? "gold" : "transparent",
  color: selected ? "black" : "white",
  fontWeight: selected ? 700 : 500,
  "&:hover": {
    backgroundColor: "gold",
    color: "black",
  },
  width: "22%",
  display: "inline-block",
  textAlign: "center",
}));

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <StyledButton selected={selected} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default SelectButton;