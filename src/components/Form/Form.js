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

    const [teamName, setTeamName] = useState("");
    const [teamColor, setTeamColor] = useState("");

    function onSaveCollaborator(event) {
        event.preventDefault();

        props.onRegisterCollaborator({name, office, image, team});

        setName("");
        setOffice("");
        setImage("");
        setTeam("");
    }

    function onSaveTeam(event) {
        event.preventDefault();

        props.onRegisterTeam({ name: teamName, color: teamColor })
    }

    return (
        <section className="register-box">
            <form className="register-box__form" onSubmit={onSaveCollaborator}>
                <h2>Fill in the data to create the collaborator's card</h2>

                <TextField
                    label="Collaborator Name"
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

            <form className="register-box__form" onSubmit={onSaveTeam}>
                <h2>Fill in the data to create a team panel</h2>

                <TextField
                    label="Name"
                    placeholder="Type the name team"
                    value={teamName}
                    required
                    onChanged={value => setTeamName(value)}
                />
                <TextField
                    label="Color"
                    placeholder="Type the color team"
                    value={teamColor}
                    required
                    onChanged={value => setTeamColor(value)}
                />

                <Button>Create Team</Button>
            </form>
        </section>
    )
};

export default Form;