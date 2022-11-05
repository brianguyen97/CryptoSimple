import React from "react";
import CoinItem from "./CoinItem";
import { v4 as uuidv4 } from "uuid";

function CoinSearch({ coins }) {
  console.log(coins);
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form>
          <input type="text" placeholder="Search for a coin..." />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return <CoinItem key={uuidv4()} coin={coin} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoinSearch;
