import useLocalStorage from './hooks/useLocalStorage';

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  function onSubmit(e) {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <hr />

      {tasks.map((showingTask) => (
        <h3 key={showingTask.date}>{showingTask.task}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
