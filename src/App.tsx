import { AllProviders } from "data";
import OffileV1 from "./examples/OffileV1";
import { BasicButtonDemo } from "./examples/BasicButtonDemo";

function App() {
  return (
    <AllProviders>
      <div style={{ padding: "20px" }}>
        <BasicButtonDemo />
        <hr style={{ margin: "40px 0" }} />
        <OffileV1 />
      </div>
    </AllProviders>
  );
}

export default App;
