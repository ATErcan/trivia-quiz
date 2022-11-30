import Main from "./components/Main";
import GivenAnswersProvider from "./context/GivenAnswersProvider";

function App() {
  return (
    <GivenAnswersProvider>
      <Main />
    </GivenAnswersProvider>
  );
}

export default App;
