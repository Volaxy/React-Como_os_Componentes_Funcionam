import "./TextField.css";

const TextField = (props) => {
    const onType = event => {
        props.onChanged(event.target.value);
    };

    return (
        <div className="text-field">
            <label className="text-field__label">{props.label}</label>
            <input className="text-field__input" placeholder={props.placeholder} value={props.value} required={props.required} onChange={onType} />
        </div>
    );
};

export default TextField;