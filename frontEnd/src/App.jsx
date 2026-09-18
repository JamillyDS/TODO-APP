import { useEffect, useState } from "react";
import Input from "./components/input";
import TarefaList from "./components/TarefaList";

const backend = import.meta.env.VITE_BACKEND;

function App() {
  const [tarefas, setTarefas] = useState([]);
  const getTarefa = async () => {
    try {
      const res = await fetch(`${backend}/api/tarefa`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setTarefas(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTarefa = async (id) => {
    try {
      const res = await fetch(`${backend}/api/tarefa/${id}`, {
        method: "PATCH",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);
      getTarefa();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTarefa();
  }, []);

  return (
    <div className="flex items-center w-full justify-center flex-col">
      <Input getTarefa={getTarefa} />
      <TarefaList tarefas={tarefas} updateTarefa={updateTarefa} />
    </div>
  );
}

export default App;
