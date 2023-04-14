import hexToRgba from 'hex-to-rgba';

import Collaborator from "../Collaborator/Collaborator";
import "./Team.css";

const Team = (props) => {
    return (
        props.collaborators.length > 0 && <section className="team" style={{backgroundColor: hexToRgba(props.teamColor, 0.5)}}>
            <h3 className="team__title" style={{color: props.teamColor}}>{props.name}</h3>

            <input type="color" className="team__input-color" value={props.teamColor} onChange={event => props.onChangeTeamColor(event.target.value, props.teamId)} />

            <div className="team__collaborators">
                {props.collaborators.map((collaborator, index) =>
                    <Collaborator
                        key={index}
                        backgroundColor={props.teamColor}
                        id={collaborator.id}
                        name={collaborator.name}
                        office={collaborator.office}
                        image={collaborator.image}
                        favorite={collaborator.favorite}
                        onDelete={props.onDelete}
                        onFavorite={props.onFavorite}
                    />
                )}
            </div>
        </section>
    )
};

export default Team;