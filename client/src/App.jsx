import { MainForm, Transactions, Navbar } from "./components";

const App = () => (
  <div className="min-h-screen gradient-bg-welcome">
    <div className="">
      <Navbar />
      <MainForm />
    </div>
    <Transactions />
  </div>
);

export default App;
