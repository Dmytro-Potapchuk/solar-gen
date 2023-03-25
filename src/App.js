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

import {RoofCover} from "./pages/RoofCover/RoofCover";


import {Proposal} from "./pages/Proposal/Proposal";
import {ElectricityCompany} from "./pages/ElectricityCompany/ElectricityCompany";
import {RoofCoverCompany} from "./pages/RoofCoverCompany/RoofCoverCompany";
import {RoofCompany} from "./pages/RoofCompany/RoofCompany";
import {FinancingCompany} from "./pages/FinancingCompany/FinancingCompany";

import {ProposalCompany} from "./pages/ProposalCompany/ProposalCompany";
import {EnergyConsumption} from "./pages/EnergyConsumption/EnergyConsumption";
import {EnergyStorage} from "./pages/EnergyStorage/EnergyStorage";
import {Financing} from "./pages/Financing/Financing";
import {AssemblyAddress} from "./pages/AssemblyAddress/AssemblyAddress";
import {AssemblyAddressCompany} from "./pages/AssemblyAddressCompany/AssemblyAddressCompany";


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


            <Route path={'/roof-company'} element={<RoofCompany/>}/>
            <Route path={'/roof-cover-company'} element={<RoofCoverCompany/>}/>\
            <Route path={'/electricity-company'} element={<ElectricityCompany/>}/>
            <Route path={'/address-company'} element={<AssemblyAddressCompany/>}/>
            <Route path={'/financing-company'} element={<FinancingCompany/>}/>
            <Route path={'/proposal-company'} element={<ProposalCompany/>}/>

        </Routes>
<Footer/>
    </div>
  );
}

export default App;
