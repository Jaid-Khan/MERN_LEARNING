import "./App.css";
import Card from "./components/Card"
function App() {
  return (
  <>

  {/* Passing Props as a Children  */}
  {/* <Card>This Is a Card.</Card> */}

  {/* Passing Props  */}
  <Card name="Tony" age="20" gender="Male"/>
  <Card name="Hulk" age="19" gender="Male"/>

  </>
  )
}

export default App;
