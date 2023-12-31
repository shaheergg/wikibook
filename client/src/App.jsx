import "./App.css";
import PlusIcon from "@heroicons/react/16/solid/PlusIcon";
function App() {
  return (
    <div className="p-5">
      <button className="flex items-center gap-2 px-6 py-2 text-sm font-semibold rounded-md text-emerald-50 bg-emerald-900 hover:bg-emerald-800">
        <PlusIcon className="inline-block w-4 h-4" />
        Create new folder
      </button>
    </div>
  );
}

export default App;
