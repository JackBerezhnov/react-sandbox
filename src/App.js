import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name} {props.lastName}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Jack" lastName="D"/>
        <Welcome name="Jim" lastName="J"/>
        <Welcome name="Tim" lastName="O"/>
      </header>
    </div>
  );
}

export default App;
