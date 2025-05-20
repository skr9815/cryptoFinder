import { LinearProgress, Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "../components/CoinTable";
import { CryptoState } from "../CryptoContext";
import { Container, Sidebar, Heading, Description, MarketData } from "../styles/CoinPageStyles";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin)
    return <LinearProgress sx={{ backgroundColor: "gold" }} />;

  return (
    <Container>
      {/* Sidebar */}
      <Sidebar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Heading variant="h3">{coin?.name}</Heading>
        <Description variant="subtitle1">
          {parse(coin?.description.en.split(". ")[0])}.
        </Description>
        <MarketData>
          {/* Rank */}
          <Box sx={{ display: "flex", mb: 1 }}>
            <Heading variant="h5">Rank:</Heading>
            <Heading variant="h5" sx={{ ml: 2 }}>
              {numberWithCommas(coin?.market_cap_rank)}
            </Heading>
          </Box>
          {/* Current Price */}
          <Box sx={{ display: "flex", mb: 1 }}>
            <Heading variant="h5">Current Price:</Heading>
            <Heading variant="h5" sx={{ ml: 2 }}>
              {symbol} {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
            </Heading>
          </Box>
          {/* Market Cap */}
          <Box sx={{ display: "flex" }}>
            <Heading variant="h5">Market Cap:</Heading>
            <Heading variant="h5" sx={{ ml: 2 }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6)
              )}
              M
            </Heading>
          </Box>
        </MarketData>
      </Sidebar>
      {/* Coin Info Section */}
      <CoinInfo coin={coin} />
    </Container>
  );
};

export default CoinPage;