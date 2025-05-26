import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Import icons
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Styled components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3, 0),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  marginTop: 'auto'
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  '&:hover': {
    color: '#EEBC1D', // Gold color to match your theme
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    color: 'gold',
    textDecoration: 'none',
  },
  margin: theme.spacing(0, 1),
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
        >
          {/* Left side - Copyright */}
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Crypto Tracker
          </Typography>
          
          <Stack direction="row" spacing={1}>
            <SocialIcon size="small" aria-label="twitter">
              <TwitterIcon fontSize="small" />
            </SocialIcon>
            <SocialIcon size="small" aria-label="github">
              <GitHubIcon fontSize="small" />
            </SocialIcon>
            <SocialIcon size="small" aria-label="linkedin">
              <LinkedInIcon fontSize="small" />
            </SocialIcon>
          </Stack>
        </Stack>
      </Container>
    </FooterContainer>
  );
};

export default Footer;