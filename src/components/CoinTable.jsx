import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  TextField,
  LinearProgress,
  Pagination,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { CoinList } from '../config/api';
import axios from 'axios';

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  
  const { currency, symbol } = CryptoState();
  const navigate = useNavigate();
  const rowsPerPage = 10;

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
    } catch (error) {
      console.error("Error fetching coin list:", error);
    }
    setLoading(false);
  };
  
  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleRowClick = (coinId) => {
    navigate(`/coins/${coinId}`);
  };

  // Calculate the page count based on filtered results
  const filteredCoins = handleSearch();
  const pageCount = Math.ceil(filteredCoins.length / rowsPerPage);

  return (
    <Container style={{ textAlign: 'center' }}>
      <Typography
        variant="h4"
        style={{ margin: '18px', fontFamily: 'Montserrat' }}
      >
        Cryptocurrency Prices by Market Cap
      </Typography>
      
      <TextField
        label="Search For a Crypto Currency.."
        variant="outlined"
        style={{ marginBottom: 20, width: '100%' }}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // Reset to first page on new search
        }}
      />
      
      <TableContainer component={Paper}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: 'gold' }} />
        ) : (
          <Table>
            <TableHead style={{ backgroundColor: '#EEBC1D' }}>
              <TableRow>
                {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
                  <TableCell
                    key={head}
                    align={head === "Coin" ? "left" : "right"}
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredCoins
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((row) => {
                  const profit = row.price_change_percentage_24h > 0;
                  
                  return (
                    <TableRow
                      key={row.name}
                      onClick={() => handleRowClick(row.id)}
                      style={{
                        backgroundColor: "#16171a",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                        "&:hover": {
                          backgroundColor: "#131111",
                        },
                      }}
                      hover
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          display: "flex",
                          gap: 15,
                        }}
                      >
                        <img
                          src={row?.image}
                          alt={row.name}
                          height="50"
                          style={{ marginBottom: 10 }}
                        />
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <span
                            style={{
                              textTransform: "uppercase",
                              fontSize: 22,
                              color: "white",
                            }}
                          >
                            {row.symbol}
                          </span>
                          <span style={{ color: "darkgrey" }}>
                            {row.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell align="right" style={{ color: "white" }}>
                        {symbol}{" "}
                        {row.current_price.toLocaleString()}
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{
                          color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                          fontWeight: 500,
                        }}
                      >
                        {profit && "+"}
                        {row.price_change_percentage_24h.toFixed(2)}%
                      </TableCell>
                      <TableCell align="right" style={{ color: "white" }}>
                        {symbol}{" "}
                        {row.market_cap.toLocaleString().slice(0, -6)}M
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      
      {/* Pagination */}
      <Stack spacing={2} style={{ 
        padding: 20, 
        width: "100%", 
        display: "flex", 
        justifyContent: "center"
      }}>
        <Pagination 
          count={pageCount}
          page={page}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "gold",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "gold",
              color: "black",
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </Container>
  );
};

export default CoinTable;