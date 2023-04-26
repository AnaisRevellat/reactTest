import "./App.css";
import { Home } from "./screens/Home";
import { Ressources } from "./screens/Ressources";
import { Routes, Route, NavLink } from "react-router-dom";
import { Contact } from "./screens/Contact";

function App() {
	return (
		<>
      <nav>
        <NavLink to='/'>Accueil</NavLink><br/>
        <NavLink to='/ressources'>Ressources</NavLink> <br/>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/ressources' element={<Ressources />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
