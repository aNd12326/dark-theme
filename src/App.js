import Nav from "./components/Nav";
import useDarkMode from "./hook/useDarkMode";

function App() {
  useDarkMode();
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center min-h-screen dark:bg-black transition duration-500">
        <h1 className="text-blue-600 dark:white">HOla dark mode</h1>
      </div>
    </>
  );
}

export default App;
