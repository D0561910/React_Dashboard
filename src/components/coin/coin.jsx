import classes from "./coin.module.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className={classes.coin_container}>
      <div className={classes.coin_row}>
        <div className={classes.coin}>
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className={classes.coin_symbol}>{symbol}</p>
        </div>
        <div className={classes.coin_data}>
          <p className={classes.coin_price}>${price}</p>
          <p className={classes.coin_volume}>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className={`${classes.coin_percent} ${classes.red}`}>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className={`${classes.coin_percent} ${classes.green}`}>{priceChange.toFixed(2)}%</p>
          )}

          <p className={classes.coin_marketcap}>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
