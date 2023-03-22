import {Calculator} from "../../components/Calculator/Calculator";
import {Survey} from "../../components/Survey/Survey";
import Form from "../../components/Form";

function CommercialBuildings() {
    return (
        <div>
            <Calculator/>
            <Survey/>
            <h2>Комерційні будівлі</h2>
            <p>Тут можна розмістити список комерційних будівель та додаткову інформацію про них.</p>
            <Form/>
        </div>
    );
}
export {CommercialBuildings}