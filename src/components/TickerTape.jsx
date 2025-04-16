'use client';

import { useEffect } from 'react';

export function TickerTape() {
  useEffect(() => {
    // Remove any existing ticker script to prevent duplicates
    const existingScript = document.getElementById('tradingview-ticker-script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'tradingview-ticker-script';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        { "proName": "BINANCE:BTCUSDT", "title": "Bitcoin" },
        { "proName": "BINANCE:ETHUSDT", "title": "Ethereum" },
        { "proName": "BINANCE:SOLUSDT", "title": "Solana" },
        { "proName": "BINANCE:BNBUSDT", "title": "BNB" },
        { "proName": "BINANCE:XRPUSDT", "title": "XRP" },
        { "proName": "BINANCE:ADAUSDT", "title": "Cardano" },
        { "proName": "BINANCE:DOGEUSDT", "title": "Dogecoin" },
        { "proName": "BINANCE:AVAXUSDT", "title": "Avalanche" },
        { "proName": "BINANCE:DOTUSDT", "title": "Polkadot" },
        { "proName": "BINANCE:LINKUSDT", "title": "Chainlink" },
        { "proName": "BINANCE:TRXUSDT", "title": "TRON" },
        { "proName": "BINANCE:MATICUSDT", "title": "Polygon" },
        { "proName": "BINANCE:ATOMUSDT", "title": "Cosmos" },
        { "proName": "BINANCE:SHIBUSDT", "title": "Shiba Inu" },
        { "proName": "BINANCE:WBTCUSDT", "title": "Wrapped BTC" },
        { "proName": "BINANCE:NEARUSDT", "title": "NEAR" },
        { "proName": "BINANCE:APTUSDT", "title": "Aptos" },
        { "proName": "BINANCE:LTCUSDT", "title": "Litecoin" },
        { "proName": "BINANCE:TONUSDT", "title": "Toncoin" },
        { "proName": "BINANCE:FILUSDT", "title": "Filecoin" }
      ],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    });

    const tickerContainer = document.getElementById('tradingview-ticker');
    if (tickerContainer) {
      tickerContainer.appendChild(script);
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="tradingview-ticker" className="w-full my-2 bg-white" />
  );
} 