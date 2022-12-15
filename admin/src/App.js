import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/edit/:id" element={<BookForm edit={true}/>} />
          <Route path="/add-book" element={<BookForm edit={false}/>}/>
          <Route path="/login" />
          <Route path="/orders" />
          <Route path="/*" />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
