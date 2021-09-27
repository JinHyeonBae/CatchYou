import logo from './logo.svg';
import './App.css';

import './component/css/Page.scss'

import Header from './component/Header'
import Buttons from './component/Buttons'
import Content from './component/container/Content'

function App() {

  const activeButton = (e)=>{
    console.log(e.target)
  }

  return (
    <div className="page-wrapper">
      <Header/>
      <Buttons click={activeButton}/>
      <Content/>
    </div>
  );
}

export default App;
