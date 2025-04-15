import WormholeConnect from '@wormhole-foundation/wormhole-connect'
import './App.css'


const theme = {
  background: '#000',
  text: '#fff',
  border: '#fff',
  buttonBackground: '#fff',
  mode: 'dark',
  primary: '#78c4b6',
  font: 'Comic Sans, sans-serif', // Fixed the font declaration (removed semicolon)
};

const config = {
  label: 'On Pay',
}

function App() {

  return (
    <div className="app-container">
      {/* <h1>On Pay</h1>
      <p>Seamless crosschain transfers.</p> */}
      <div className="wormhole-container">
        <WormholeConnect theme={theme} config={config} text="#fff" textSecondary="#f4f4f4" error="#ff0000" />
      </div>
    </div>
  )
}

export default App
