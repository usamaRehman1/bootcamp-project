import ReactRouter from "./reactRouter/router";
import { ShoeStoreProvider } from "./context/context";

function App() {
  return (
    <ShoeStoreProvider>
      <ReactRouter />
    </ShoeStoreProvider>
  );
}

export default App;
