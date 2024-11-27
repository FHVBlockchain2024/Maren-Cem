import React from "react";

const ConnectWallet = ({ connectWallet, account }) => {
  return (
    <div>
      {account ? (
        <div>
          <p>Connected as: {account}</p>
        </div>
      ) : (
        <button className="button" onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default ConnectWallet;
