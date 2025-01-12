import './style.css';

function ButtonDefault({ addItemLista }) {
    return (
        <button 
            type="button"
            className='btn-default'
            onClick={(event) => addItemLista()}
            >Adicionar item</button>
    );
}

export default ButtonDefault;