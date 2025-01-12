import { useState } from 'react';
import IconLogo from './assets/img/icon-logo.png';
import InputDefault from './components/InputDefault';
import ButtonDefault from './components/ButtonDefault';
import ItemList from './components/ItemList';
import './App.css'

function App() {
  const [listaDeCompras, setListaDeCompras] = useState([]);
  const [detalhes, setDetalhes] = useState('');

  function onChangeDetalhes(detalhes) {
    setDetalhes(detalhes);
  }

  function addItemLista() {
    const newItem = {
      id: listaDeCompras.length+1,
      detalhes: detalhes,
      checked: false
    };

    setListaDeCompras([...listaDeCompras, newItem]);
    setDetalhes('');  
  }

  function onCheckedItem(id_item) {
    const newLista = listaDeCompras.map((item) => {
      if(item.id === id_item) {
        return { ...item, checked: !item.checked }
      }

      return item;
    });

    setListaDeCompras(newLista);
  }

  return (
    <div className='container'>
      <header>
        <span>
          <img src={IconLogo} alt="icon logo" />
          quicklist
        </span>
      </header>

      <main>
        <h1>Compras da semana</h1>

        <section className='section-form'>
          <InputDefault
            detalhes={detalhes} 
            onChangeDetalhes={onChangeDetalhes}
          />

          <ButtonDefault 
            addItemLista={addItemLista}
          />
        </section>

        <section className='section-list-compras'>
          {listaDeCompras.map((item) => (
            <ItemList
              key={item.id}
              lista={item}
              onCheckedItem={onCheckedItem}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
