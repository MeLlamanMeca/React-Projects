import AmazingText from './components/AmazingText'
import './App.css'

function App() {
  const randomWords = [
    "Explosive",
    "Quantum",
    "Nebula",
    "Pixel",
    "Infinity",
    "Galaxy",
    "Turbo",
    "Hyper",
    "Vortex",
  ];
  return (
    <>
      <AmazingText texts={randomWords}/>
    </>
  )
}

export default App
