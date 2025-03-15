import Background from "./components/Background.tsx";
import Details from "./components/Details.tsx";
import Header from "./components/Header.tsx";
function App() {
  return (
    <div className="container myBackgroundColor w-screen h-screen">
      <Background>
        <Header />
        <Details />
      </Background>
    </div>
  );
}

export default App;
