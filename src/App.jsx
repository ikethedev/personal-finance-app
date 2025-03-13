import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Budgets from "./pages/budget";
import Pots from "./pages/pots";
import RecurringBills from "./pages/recurring";
import Transactions from "./pages/transactions";


function App() {


  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="budgets" element={<Budgets />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="pots" element={<Pots />} />
            <Route path="recurringbills" element={<RecurringBills />} />
            <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
