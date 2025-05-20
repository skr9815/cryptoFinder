import React, { useEffect, useState } from 'react';
import headerStyle from '../styles/HeaderStyle';
import axios from 'axios';
import { TrendingCoins } from '../config/api';
import { CryptoState } from '../CryptoContext';

const Carousel = () => {
  const { currency, symbol } = CryptoState();
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setTrending(data);
    } catch (error) {
      console.error("Error fetching trending coins", error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  return (
    <div style={headerStyle.carouselContainer}>
      <div style={headerStyle.carouselTrack}>
        {[...trending, ...trending].map((coin, index) => (
          <div 
            key={`${coin.id}-${index}`}
            style={headerStyle.carouselItem}
          >
            <img 
              src={coin?.image}
              alt={coin.name}
              style={headerStyle.carouselImage}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={headerStyle.coinName}>
                {coin.name} &nbsp;
                <span style={
                  coin.price_change_percentage_24h >= 0 
                    ? headerStyle.priceChangePositive 
                    : headerStyle.priceChangeNegative
                }>
                  {coin.price_change_percentage_24h >= 0 && "+"}{coin.price_change_percentage_24h?.toFixed(2)}%
                </span>
              </span>
              <span style={headerStyle.price}>
                {symbol} {coin.current_price.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;