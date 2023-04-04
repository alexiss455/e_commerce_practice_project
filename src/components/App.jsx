import Header from "../assets/header";
import Router from "../assets/router";
function App() {

  const [cout, setCount] = useState(0);
  const [store, setStore] = useState([]);
  return (
    <>
      <Header 
        count={cout}
      />
      <Router />
    </>
  );
}
export default App;
