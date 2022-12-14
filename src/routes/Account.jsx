import React from "react";
import SavedCoins from "./SavedCoins";

function Account() {
  return (
    <div>
      <div>
        <div>
          <h1>Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button>Sign Out</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Watch List</h1>
          <SavedCoins />
        </div>
      </div>
    </div>
  );
}

export default Account;
