import CheckBoxDefault from '../CheckBoxDefault';
import IconTrash from '../../assets/img/icon-trash.svg';
import './style.css';

function ItemList() {
    return(
        <div className='item-list'>
            <CheckBoxDefault />

            <p>test</p>

            <button type="button">
                <img src={IconTrash} alt="icone trash" />
            </button>
        </div>
    );
}

export default ItemList;