import { TransectionProvider } from "./context/expence_tran_context";
import Child from "./component";

function App() {
  return (
    <TransectionProvider>
      <Child />
    </TransectionProvider>
  );
}

export default App;
