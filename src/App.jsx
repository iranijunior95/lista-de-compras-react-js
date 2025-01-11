import IconLogo from './assets/img/icon-logo.png';
import InputDefault from './components/InputDefault';
import ButtonDefault from './components/ButtonDefault';
import ItemList from './components/ItemList';
import './App.css'

function App() {
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
          <InputDefault />
          <ButtonDefault></ButtonDefault>
        </section>

        <section className='section-list-compras'>
          <ItemList></ItemList>

          <ItemList></ItemList>

          <ItemList></ItemList>
        </section>
      </main>
    </div>
  );
}

export default App;
