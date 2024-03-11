import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let initMercadoPago, Wallet;
if (!import.meta.env.SSR) {
  const mercadoPago = await import('@mercadopago/sdk-react')
    .then(mercadoPagoModule => {
      initMercadoPago = mercadoPagoModule.initMercadoPago;
      Wallet = mercadoPagoModule.Wallet;
      });
}

function App() {
  const [count, setCount] = useState(0)
  const [preferenceId, setPreferenceId] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5173/hello')
    .then((res) => res.json())
    .then((data) => {
      initMercadoPago('TEST-d3bae7c2-162f-4fe7-980a-6dca0a24ca2e');
      setPreferenceId(data.id)
    })
  }, [])

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        preferenceId &&
        
          <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />

      }
    </div>
  )
}

export default App
