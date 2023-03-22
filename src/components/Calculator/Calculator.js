import React, { useState } from 'react';
import './Calculator.css'


function Calculator() {
    const [roofAngle, setRoofAngle] = useState('');
    const [roofType, setRoofType] = useState('');
    const [annualEnergyUsage, setAnnualEnergyUsage] = useState('');
    const [energyStorage, setEnergyStorage] = useState('');
    const [financing, setFinancing] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const [buildingType, setBuildingType] = useState(""); // тип будинку
    const [buildingSize, setBuildingSize] = useState(""); // номер будинку

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            roofAngle,
            roofType,
            annualEnergyUsage,
            energyStorage,
            financing,
            address,
            name,
            email,
            phone,
        };
        fetch('/api/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div className="form-group">
                <label className="font-weight-bold">
                    Poszukuję rowiązania dla:</label>
                <select className="form-control" value={buildingType} onChange={(e) => setBuildingType(e.target.value)}>
                    <option value="privateHouse">domu</option>
                    <option value="commercialBuilding">przedsiębiorstwa</option>
                </select>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Kąt dachu:</label>
                <input type="text" className="form-control" value={roofAngle} onChange={(e) => setRoofAngle(e.target.value)} />
            </div>
            <div className="form-group">


                <label className="font-weight-bold">Typ dachu:</label>


                <select className="form-control" value={roofType} onChange={(e) => setRoofType(e.target.value)}>
                    <option value="ceramicTile">Ceramic Tile</option>
                    <option value="concreteTile">Concrete Tile</option>
                    <option value="slateTile">Slate Tile</option>
                    <option value="metalTile">Metal Tile</option>
                    <option value="flat">Flat</option>
                </select>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">
                    Roczne zużycie energii:</label>
                <input type="text" className="form-control" value={annualEnergyUsage} onChange={(e) => setAnnualEnergyUsage(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">
                    Magazynowanie energii:</label>
                <select className="form-control" value={energyStorage} onChange={(e) => setEnergyStorage(e.target.value)}>
                    <option value="none">None</option>
                    <option value="5kW">5 kW</option>
                    <option value="10kW">10 kW</option>
                </select>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Finansowanie:</label>
                <select className="form-control" value={financing} onChange={(e) => setFinancing(e.target.value)}>
                    <option value="cash">Cash</option>
                    <option value="loan">Loan</option>
                </select>
            </div>
            <div className="form-group">
                <label className="font-weight-bold">
                    Adres:</label>
                <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Rozmiar budynku:</label>
                <input type="text" className="form-control" value={buildingSize} onChange={(e) => setBuildingSize(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="font-weight-bold">Wybierz obraz:</label>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="validatedCustomFile" required />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    );
}
export {Calculator}