import './App.css';
import Menu from './components/Menu';
import ChatList from './components/ChatList';
import ChatArea from './components/ChatArea';

function App() {
  return (
    <div className="App mr-8">
     <Menu />
     <ChatList />
     <ChatArea />
    </div>
  );
}

export default App;
