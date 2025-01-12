import './style.css';

function InputDefault({ detalhes, onChangeDetalhes }) {
    return (
        <input 
            type="text" 
            name="input-default" 
            id="input-default"
            className='input-default'
            placeholder='Adicione um novo item'
            value={detalhes}
            onChange={(event) => onChangeDetalhes(event.target.value)}
        />
    );
}

export default InputDefault;