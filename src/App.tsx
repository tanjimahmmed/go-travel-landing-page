import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main";
import Navigation from "./components/Navigation/Navigation";
import Page from "./components/Page";

function App() {
  return (
    <Page>
      <Header>
        <Navigation/>
        <Hero/>
      </Header>
      <Main></Main>
    </Page>
  )
}

export default App;
