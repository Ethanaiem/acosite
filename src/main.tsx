import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>ACO Application</h1>
      <p>Welcome to the ACO application.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
