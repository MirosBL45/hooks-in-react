import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
import UseRefExample3 from "./components/UseRefExample3";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomHookExample1 from "./components/CustomHookExample1";
import CustomHookExample2 from "./components/CustomHookExample2";
import './index.css'

function App() {
  return (
    <div className="container mt-5">
      <p className="another">Down is first UseRef example</p>
      <UseRefExample1 />
      <p className="another">Down is second UseRef example</p>
      <UseRefExample2 />
      <p className="another">Down is third UseRef example</p>
      <UseRefExample3 />
      <p className="another">Down is UseMemo example</p>
      <UseMemoExample />
      <p className="another">Down is UseCallback example</p>
      <UseCallbackExample />
      <p className="another">Down is Custom Hook Example 1 - useFetch</p>
      <CustomHookExample1 />
      <p className="another">Down is Custom Hook Example 2 - useLocalStorage</p>
      <CustomHookExample2 />
      <p className="ending another">Just for space under everything</p>
    </div>
  );
}

export default App;
