import logo from "./logo.svg";
import "./App.css";
import Memo from "./comps/Memo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>오늘은 내 생의 가장 젊은 날</h3>
      </header>
      <Memo></Memo>
      <footer>
        <address>CopyRight &copy; callor@callor.com</address>
      </footer>
    </div>
  );
}

export default App;
