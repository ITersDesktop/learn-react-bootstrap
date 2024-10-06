import './App.css'
import NavBar from "./components/Navbar.tsx";
import ViteEx from "./components/ViteEx.tsx";
import ButtonsShowcase from "./components/Buttons.tsx";
import ToastsShowcase from "./components/Toasts.tsx";
import ModalsDemo from "./components/ModalsDemo.tsx";
import ModalPopup from "./components/ModalsDemo2.tsx";

function App() {
  return (
    <>
        <NavBar/>
        <ViteEx/>
        <ButtonsShowcase/>
        <ToastsShowcase/>
        <ModalsDemo/>
        <ModalPopup/>
    </>
  )
}

export default App
