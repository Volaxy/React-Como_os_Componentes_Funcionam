import "./ComboBox.css";

const ComboBox = (props) => {
    return (
        <div>
            <label className="label">Team</label>
            <select className="combobox" required={props.required} onChange={event => props.onChanged(event.target.value)}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ComboBox;