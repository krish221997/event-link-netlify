import { useSourceEventLink, useDestinationEventLink } from "@event-inc/link";

function App() {
  const { open, close } = useSourceEventLink({
    group: "sandbox-demo-9",
    linkTokenEndpoint:
      "https://awaresillycareware--krishparekh11.repl.co/create-link-token",
    environment: "sandbox",
    onSuccess(source) {
      console.log("Source", source);
      setTimeout(() => {
        console.log("Closing");
        close();
      }
      , 5000);
    },
    onError(error) {
      console.log("Error", error);
    },
    onClose: () => {
      console.log("closed");
    },
  });

  const { open: open2 } = useDestinationEventLink({
    group: "sandbox-demo-10",
    linkTokenEndpoint:
      "https://awaresillycareware--krishparekh11.repl.co/create-link-token",
    environment: "sandbox",
    onSuccess(source) {
      console.log("Destination", source);
      setTimeout(() => {
        console.log("Closing");
        close();
      }
      , 5000);
    },
    onError(error) {
      console.log("Error", error);
    },
    onClose: () => {
      console.log("closed");
    },
  });

  return (
    <div>
      <button onClick={open}>Click here to see the magic on the sources</button>
      <button onClick={open2}>
        Click here to see the magic on the destinations
      </button>
    </div>
  );
}

export default App;
