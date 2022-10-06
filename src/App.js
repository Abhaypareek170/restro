import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";

function App() {
  return (
    <>
      <Cart/>
      <Header/>
      <main>
        <Meal/>
      </main>

    </>
  );
}

export default App;
