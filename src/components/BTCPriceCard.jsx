'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import bitcoinLogo from '@/images/logos/bitcoin.svg';

export function BTCPriceCard() {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/price/btc');
        if (!response.ok) {
          throw new Error('Failed to fetch BTC price');
        }
        const data = await response.json();
        setPrice(data.bitcoin.usd);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setPrice(null);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg w-full max-w-xs">
      <h2 className="text-xl font-bold text-gray-100">BTC/USD</h2>
      <div className="mt-2 flex items-center gap-2">
        <Image
          src={bitcoinLogo}
          alt="Bitcoin"
          className="h-8 w-8"
          unoptimized
        />
        <p className="text-3xl font-semibold text-cyan-400">
          {error ? (
            <span className="text-red-400 text-sm">{error}</span>
          ) : price ? (
            `$${price.toLocaleString()}`
          ) : (
            <span className="text-gray-400">Loading...</span>
          )}
        </p>
      </div>
    </div>
  );
} 