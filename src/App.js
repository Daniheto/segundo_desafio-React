import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ItemListConatainer from "./Components/ItemListConatainer";

function App() {
  return (
    <>
      <Header />
      <ItemListConatainer nombre="Daniel" apellido="Hernandez" />
      <Footer />
    </>
  );
}

export default App;
