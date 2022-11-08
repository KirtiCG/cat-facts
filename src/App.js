import { useState } from "react";
import AddCatForm from './AddCatForm';
import CatList from "./CatList";
import Pagination from "./Pagination";
import logo from './logo.svg';
import './App.css';
import CurrentCatFact from "./CurrentCatFact";

function App() {
  const [page, setPage] = useState(1);
  const [catList, setCatList] = useState([]);
  const [favoritedCatFacts, setFavoritedCatFacts] = useState([]);
  const [catIndex, setCatIndex] = useState(0);

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      {catList[catIndex] && <CurrentCatFact currentCatFact={catList[catIndex]} />}
      <AddCatForm 
        setCatIndex={setCatIndex}
        catList={catList} 
        setCatList={setCatList} />
      <CatList 
        page={page}
        catList={catList} 
        setFavoritedCatFacts={setFavoritedCatFacts}
        favoritedCatFacts={favoritedCatFacts} />
      <Pagination catList={catList} setPage={setPage} />
    </div>
  )
}

export default App;