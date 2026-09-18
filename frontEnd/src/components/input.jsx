import { useState } from "react";

const Input = ({ getTarefa }) => {
  const [tarefa, setTarefa] = useState("");

  const postTarefa = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/tarefa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: tarefa }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }

      console.log(data);
      setTarefa("");
      getTarefa();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10">
      <input
        onChange={(e) => setTarefa(e.target.value)}
        value={tarefa}
        type="text"
        placeholder="Insira a tarefa"
        className="border p-2"
      />
      <button onClick={postTarefa} className="p-2 border ml-3 cursor-pointer">
        Adicionar
      </button>
    </div>
  );
};

export default Input;
