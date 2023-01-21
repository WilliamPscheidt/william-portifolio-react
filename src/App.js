import Header from "./components/header";
import Sobre from "./components/sobre"
import Skills from "./components/skills";
import Projetos from "./components/projetos";
import Contato from "./components/contato";
import Footer from "./components/footer";
import './app.css'

function App() {
  return (
    <main>
      <div class={"content"}>
        <Header />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
      </div>
      <Footer />
    </main>
  );
}

export default App;
