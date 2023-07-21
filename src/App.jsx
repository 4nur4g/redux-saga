import "./App.css";
import {getCatsFetch, getCatSuccess} from "./redux/catSlice.js";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch()
  const cats = useSelector((state)=> state.cats.cats)

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch]);

  console.log(cats)

  return <div>Hello</div>;
}

export default App;
