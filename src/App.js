import './App.css';
import Routes from './Pages/Routes/Routes/Routes';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="overflow-x-hidden">
      <Routes></Routes>
      <Toaster />
    </div>
  );
}

export default App;
