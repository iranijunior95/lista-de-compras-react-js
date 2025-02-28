import CheckBoxDefault from '../CheckBoxDefault';
import IconTrash from '../../assets/img/icon-trash.svg';
import './style.css';

function ItemList({ lista, onCheckedItem, onDeleteItem }) {
    return(
        <div className='item-list'>
            <CheckBoxDefault
                onCheckedItem={onCheckedItem}
                idItem={lista.id}
                checked={lista.checked}
            />

            <p>{lista.detalhes}</p>

            <button 
                type="button"
                onClick={(event) => onDeleteItem(lista.id)}
            >
                <img src={IconTrash} alt="icone trash" />
            </button>
        </div>
    );
}

export default ItemList;