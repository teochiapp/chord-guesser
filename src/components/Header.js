import * as React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          {/* Wrap Typography with Link and set the 'to' prop */}
          <StyledLink
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Chords
            </Typography>
          </StyledLink>
          <StyledLink
            to="/guesser"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Guesser
            </Typography>
          </StyledLink>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

const StyledAppBar = styled(AppBar)`
  background-color: var(--cambridge-blue) !important;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  padding: 0 20px;
`;
