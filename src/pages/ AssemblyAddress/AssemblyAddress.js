import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

const AssemblyAddress = () => {
    const { state } = useLocation();
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adres: ${address}`);
    };

    return (
        <div>
            <div className={"dom-firma"}>
                <div className={"firma"}>
                    <p>
                        <b>Adres montażu elektrowni fotowoltaicznej:</b>
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <label htmlFor="address"></label>
                <br />
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Ul. Nr Kod pocztowy, miejscowość"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <br />
                <button type="submit">

                    <Link to="/proposal" state={{ ...state, address: address }}>
                        Wyślij
                    </Link>
                </button>
            </form>
        </div>
    );
};

export { AssemblyAddress };
