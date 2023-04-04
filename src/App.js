import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import {Footer, Header, NavBar} from "./components";
import {
    AssemblyAddress, AssemblyAddressCompany,
    CommercialBuildings, ElectricityCompany,
    EnergyConsumption,
    EnergyStorage,
    Financing, FinancingCompany,
    HomePage,
    PrivateHouses, Proposal, ProposalCompany,
    Roof, RoofCompany,
    RoofCover, RoofCoverCompany
} from "./pages";



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
