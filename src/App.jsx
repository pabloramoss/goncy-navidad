import './App.css';
import GiftList from './components/GiftList';
import Form from './components/Form';

const App = function () {
  return (
    <div className="App">
      <Form />
      <GiftList clasName="GiftList" />
    </div>
  );
};

export default App;
