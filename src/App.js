import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Card from "./components/Card"
import data from "./data"


function App() {

  return (
    <div>
        <Nav />
        <Hero />
        <section className="flex w-full wrapper md:px-[100px]">
          {data.map((card, index) => {
            return  <Card key={index} card={card} />

          })}
        </section>
    </div>
  );
}

export default App;
