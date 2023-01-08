import logo from "../../logo.svg";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Passakorn with 3,500,000,000 people.</p>
        <a
          className="App-link text-3xl"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          We love Passakorn.
        </a>
      </header>
    </div>
  );
}
