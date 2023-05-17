import logo from "./logo.svg";
import "./App.css";
import { useSourceEventLink, useDestinationEventLink } from "@event-inc/link";

function App() {
  const { open } = useSourceEventLink({
    onSuccess: (data) => {
      console.log(data);
    },
    

    group: "sandbox demo",
    linkTokenEndpoint: "https://awaresillycareware--krishparekh11.repl.co/create-link-token",
    environment: "sandbox"
  });

  const { open: open2 } = useDestinationEventLink({
    group: "sandbox demo 2",
    linkTokenEndpoint: "https://awaresillycareware--krishparekh11.repl.co/create-link-token",
    "environment": "sandbox"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={open}>
          Click here to see the magic on the sources
        </button>
        <button onClick={open2}>
          Click here to see the magic on the destinations
        </button>
      </header>
    </div>
  );
}

export default App;
