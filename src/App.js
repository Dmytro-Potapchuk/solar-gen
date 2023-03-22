import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {PrivateHouses} from "./pages/PrivateHouses/PrivateHouses";
import {CommercialBuildings} from "./pages/CommercialBuildings/CommercialBuildings";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import './App.css'
import {Footer} from "./components/Footer/Footer";
import {Roof} from "./pages/Roof/Roof";
import {EnergyConsumption} from "./pages/ EnergyConsumption/EnergyConsumption";
import {RoofCover} from "./pages/RoofCover/RoofCover";
import {EnergyStorage} from "./pages/ EnergyStorage/EnergyStorage";
import {Financing} from "./pages/ Financing/Financing";
import {AssemblyAddress} from "./pages/ AssemblyAddress/AssemblyAddress";
import {Proposal} from "./pages/Proposal/Proposal";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Header/>



        <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                 <Route path={'/private'} element={<PrivateHouses/>}/>
                 <Route path={'/commercial'} element={<CommercialBuildings/>}/>
                 <Route path={'/roof'} element={<Roof/>}/>
                 <Route path={'/cover'} element={<RoofCover/>}/>
                 <Route path={'/energy'} element={<EnergyConsumption/>}/>
                 <Route path={'/storage'} element={<EnergyStorage/>}/>
                <Route path={'/financing'} element={<Financing/>}/>
                <Route path={'/address'} element={<AssemblyAddress/>}/>
                 <Route path={'/proposal'} element={<Proposal/>}/>

        </Routes>

<Footer/>

    </div>
  );
}

export default App;
