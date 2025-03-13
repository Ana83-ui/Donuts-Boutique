import "./App.css";
import { Provider } from "react-redux";
import store from "./core/redux/store/store";
import HomeLayout from "./layout/HomeLayout";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import ListPage from "./pages/ListPage/ListPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import ContactPage from "./pages/ContacPage/ContactPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <HomeLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detalle" element={<DetailPage />} />
              <Route path="/lista" element={<ListPage />} />
              <Route path="/crear" element={<CreatePage />} />
              <Route path="/contacto" element={<ContactPage />} />
            </Routes>
          </HomeLayout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
