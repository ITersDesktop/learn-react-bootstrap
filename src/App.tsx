import './App.css'
import NavBar from "./components/Navbar.tsx";
import ViteEx from "./components/ViteEx.tsx";
import ButtonsShowcase from "./components/Buttons.tsx";
import ToastsShowcase from "./components/Toasts.tsx";

function App() {
  return (
    <>
        <NavBar/>
        <ViteEx/>
        <ButtonsShowcase/>
        <ToastsShowcase/>
    </>
  )
}

export default App
