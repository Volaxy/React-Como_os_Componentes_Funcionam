import "./Form.css";

import TextField from "../TextField/TextField.js";
import ComboBox from "../ComboBox/ComboBox";
import Button from "../Button/Button";
import { useState } from "react";

const Form = (props) => {
    const [name, setName] = useState("");
    const [office, setOffice] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    function onSave(event) {
        event.preventDefault();

        props.onRegisterCollaborator({name, office, image, team});

        setName("");
        setOffice("");
        setImage("");
        setTeam("");
    }

    return (
        <section className="collaborator-register">
            <form className="collaborator__form" onSubmit={onSave}>
                <h2>Fill in the data to create the collaborator's card</h2>

                <TextField
                    label="Name"
                    placeholder="Type your name"
                    value={name}
                    required={true}
                    onChanged={value => setName(value)}
                />
                <TextField
                    label="Office"
                    placeholder="Type your office"
                    value={office}
                    required={true}
                    onChanged={value => setOffice(value)}
                />
                <TextField
                    label="Image"
                    placeholder="Type your Image address"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <ComboBox
                    itens={props.teams}
                    value={team}
                    required={true}
                    onChanged={value => setTeam(value)}
                />

                <Button>Create Card</Button>
            </form>
        </section>
    )
};

export default Form;