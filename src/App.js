import Home from "./pages/Home";
import IconsContainer, { icons } from "./context/iconsContext";
function App() {
  return (
    <IconsContainer.Provider value={icons}>
      <Home />
    </IconsContainer.Provider>
  );
}

export default App;
