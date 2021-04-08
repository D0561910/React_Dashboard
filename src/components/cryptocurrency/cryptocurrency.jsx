import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../coin/Coin";
import classes from "./cryptocurrency.module.css";

function Cryptocurrency() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <currency>
      <div className={classes.currency_container}>
        <div className={classes.coin_app}>
          <div className={classes.coin_search}>
            <h1 className={classes.coin_text}>Search a currency</h1>
            <form>
              <input
                className={classes.coin_input}
                type="text"
                onChange={handleChange}
                placeholder="Search"
              />
            </form>
          </div>
          <div className={classes.main_cards}>
            <div className={classes.card}>
              {filteredCoins.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    price={coin.price}
                    symbol={coin.symbol}
                    marketcap={coin.total_volume}
                    volume={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </currency>
  );
}

export default Cryptocurrency;
