import { useLink } from "@event-inc/link";

function App() {

  // 
  // const { open } = useOauthConnection){
  //   keys: [
  //     "key"
  //   ]
  // }

  // const { open, close } = useSource({
  //   baseUrl:'http://localhost:3003',
  //   linkHeaders: {
  //     'ngrok-skip-browser-warning':"any"
  //   },
  //   title: "Hello World",
  //   group: "sandbox-demo-9",
  //   linkTokenEndpoint:
  //     "http://localhost:4000/create-link-token",
  //   // environment: "sandbox",
  //   onSuccess(source) {
  //     console.log("Source", source);
  //     setTimeout(() => {
  //       console.log("Closing");
  //       close();
  //     }
  //     , 5000);
  //   },
  //   onError(error) {
  //     console.log("Error", error);
  //   },
  //   onClose: () => {
  //     console.log("closed");
  //   },
  // });

  // const { open: open2 } = useDestination({
  //   baseUrl:'http://localhost:3003',
  //   group: "sandbox-demo-10",
  //   linkHeaders: {
  //     'ngrok-skip-browser-warning':"any"
  //   },
  //   linkTokenEndpoint:
  //     "http://localhost:4000/create-link-token",
  //   // environment: "sandbox",
  //   onSuccess(source) {
  //     console.log("Destination", source);
  //     setTimeout(() => {
  //       console.log("Closing");
  //       close();
  //     }
  //     , 5000);
  //   },
  //   onError(error) {
  //     console.log("Error", error);
  //   },
  //   onClose: () => {
  //     console.log("closed");
  //   },
  // });

  const { open: open3 } = useLink({
    title: "Connections",
    // linkTokenEndpoint: "http://localhost:4000/create-link-token",
    linkTokenEndpoint: "https://ultimatetrustingreality.krishparekh11.repl.co/create-link-token",
    // baseUrl: 'http://localhost:3003',
    baseUrl: 'https://development-link.event.dev',
    onSuccess: (integrations) => {
      console.log(integrations, "<======= integrations");
    },
    onError: (error) => {
      console.log(error, "<===== error")
    },

  });

  return (
    <div>
      {/* <button onClick={open}>Click here to see the magic on the sources</button> */}
      {/* <button onClick={open2}>
        Click here to see the magic on the destinations
      </button> */}
      <button onClick={open3}>
        Click here to see the power of Connections
      </button>
    </div>
  );
}

export default App;
