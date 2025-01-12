import './style.css';

function CheckBoxDefault({ onCheckedItem, idItem, checked }) {
    return (
        <input 
            type="checkbox" 
            name="checkbox-default" 
            id="checkbox-default"
            className='checkbox-default'
            checked={checked}
            onChange={(event) => onCheckedItem(idItem)}
        />
    );
}

export default CheckBoxDefault;