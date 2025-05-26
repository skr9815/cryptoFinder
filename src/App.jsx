import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { Box } from '@mui/material';
import CryptoContext from './CryptoContext';

function App() {
  return (
    <CryptoContext>
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#14161a", color: "white", minHeight: "100vh" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
    </CryptoContext>

  );
}

export default App;
