'use client';

const features = [
  {
    title: "Real-Time Options Flow",
    desc: "Monitor live Greeks and sentiment shifts across BTC/ETH derivatives.",
  },
  {
    title: "Backtest Your Strategy",
    desc: "Upload your CSV or run simulations using RSI/EMA and more.",
  },
  {
    title: "Smart Alerts",
    desc: "Set custom RSI/FVG alerts with email and Telegram support.",
  },
  {
    title: "Quant Tools. Simple UI.",
    desc: "Built for clarity. Powered by data. Designed for traders."
  }
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {features.map((f, i) => (
        <div key={i} className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm text-gray-300">{f.desc}</p>
        </div>
      ))}
    </div>
  );
} 