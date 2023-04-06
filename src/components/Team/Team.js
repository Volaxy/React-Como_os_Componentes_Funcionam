import Collaborator from "../Collaborator/Collaborator";
import "./Team.css";

const Team = (props) => {
    return (
        props.collaborators.length > 0 && <section className="team" style={{backgroundColor: props.secondaryColor}}>
            <h3 className="team__title" style={{color: props.primaryColor}}>{props.name}</h3>

            <div className="team__collaborators">
                {props.collaborators.map((collaborator, index) => 
                    <Collaborator
                        key={index}
                        backgroundColor={props.primaryColor}
                        name={collaborator.name}
                        office={collaborator.office}
                        image={collaborator.image}
                        onDelete={props.onDelete}
                    />
                )}
            </div>
        </section>
    )
};

export default Team;