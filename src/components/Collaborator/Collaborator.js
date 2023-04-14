import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import "./Collaborator.css";

const Collaborator = ({backgroundColor, id, name, office, image, favorite, onDelete, onFavorite}) => {
    function favorites() {
        onFavorite(id);
    }

    return (
        <div className="collaborator">
            <AiFillCloseCircle size={35} className="collaborator__delete" onClick={() => onDelete(id)} />

            <div className="collaborator__header" style={{backgroundColor: backgroundColor}}>
                <img className="collaborator__header__image" src={image} alt={name} />
            </div>

            <div className="collaborator__footer">
                <h4 className="collaborator__footer__h4">{name}</h4>
                <h5 className="collaborator__footer__h5">{office}</h5>

                <div className="favorit">
                    {favorite
                        ? <AiFillHeart size={35} onClick={favorites} />
                        : <AiOutlineHeart size={35} onClick={favorites} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Collaborator;