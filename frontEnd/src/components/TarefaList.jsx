const TarefaList = ({ tarefas, updateTarefa }) => {

  console.log(tarefas);
  return (
    <div className="mt-10">
      {tarefas.map((t) => {
        return (
          <div className="flex items-center">
            <div className="flex items-center border p-3 mt-5">
              <div>{t.content}</div>
              <div
                className={`ml-3 border p-3 ${t.isComplete ? "text-blue-500" : "text-red-500 "}`}
              >
                {t.isComplete ? "completada" : "em andamento"}
              </div>
            </div>
            <button
              onClick={() => updateTarefa(t.id)}
              className="border cursor-pointer h-fit ml-5 p-3"
            >
              Finalizar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TarefaList;
