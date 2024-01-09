import CallOrder from "./components/CallOrder";
import { Config } from "./config/Config";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <Config />
      <main className="App container">
        <CallOrder />
        <Pages />
      </main>
    </>
  );
}

export default App;
