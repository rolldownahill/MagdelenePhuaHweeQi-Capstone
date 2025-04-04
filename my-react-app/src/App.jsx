import { useState } from 'react';
import './App.css';

function App() {
  const [stockSymbol, setStockSymbol] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [stocks, setStocks] = useState([]);

  const addStock = () => {
    if (!stockSymbol || !quantity || !purchasePrice) {
      alert('Please fill in all fields!');
      return;
    }

    const newStock = {
      stockSymbol,
      quantity: Number(quantity), 
      purchasePrice: Number(purchasePrice), 
      currentPrice: 69, 
    };

    setStocks([...stocks, newStock]);
    setStockSymbol('');
    setQuantity('');
    setPurchasePrice('');
  };

  return (
    <>
      <div className="title">
        <h1>Finance Dashboard</h1>
      </div>

      <div className="interactiveFields">
        <input
          type="text"
          placeholder="Stock Symbol"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
          className="my-input"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="my-input"
        />
        <input
          type="number"
          placeholder="Purchase Price"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
          className="my-input"
        />

        <div id="addStockButton">
          <button onClick={addStock}>
            <p>Add Stock</p>
          </button>
        </div>
      </div>

      <div className="stockList">
        <h1>Stock List</h1>
        {stocks.length === 0 ? (
          <p>No stocks added yet.</p>
        ) : (
          stocks.map((stock, index) => {
            const profitLoss = (Number(stock.currentPrice) - Number(stock.purchasePrice)) * Number(stock.quantity);
            return (
              <div key={index} className="stock-card">
                <p><strong>Symbol:</strong> {stock.stockSymbol}</p>
                <p><strong>Quantity:</strong> {stock.quantity}</p>
                <p><strong>Purchase Price:</strong> ${stock.purchasePrice.toFixed(2)}</p>
                <p><strong>Current Price:</strong> ${stock.currentPrice.toFixed(2)}</p>
                <p className="profit-loss">
                  <strong>Profit/Loss:</strong>{' '}
                  <span style={{ color: profitLoss >= 0 ? 'green' : 'red' }}>
                    {profitLoss >= 0 ? '+' : '-'}${Math.abs(profitLoss).toFixed(2)}
                  </span>
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;

