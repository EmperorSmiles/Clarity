import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="bg-background-light h-screen flex flex-col justify-center items-center font-vietnam">
        <Hero />
      </div>
    </>
  );
}

export default App;
