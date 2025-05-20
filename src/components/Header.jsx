import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Container, Toolbar, Typography, MenuItem, Select } from '@mui/material';
import headerStyle from '../styles/HeaderStyle'; 
import  { CryptoState } from '../CryptoContext';


const Header = () => {
  const navigate = useNavigate();
  const {currency, setCurrency} = CryptoState();

  return (
    <AppBar sx={headerStyle.appBar}>
      <Container>
        <Toolbar sx={headerStyle.toolbar}>
          <Typography
            sx={headerStyle.title}
            onClick={() => navigate('/')}
          >
            Crypto Finder
          </Typography>
          <Select
            variant="outlined"
            sx={headerStyle.select}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem sx={headerStyle.menuItem} value="INR">
              INR
            </MenuItem>
            <MenuItem sx={headerStyle.menuItem} value="USD">
              USD
            </MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
