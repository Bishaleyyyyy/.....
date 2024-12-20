import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Header />
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
