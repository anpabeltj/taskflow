export function Tasks({ tasks }: { tasks: { id: string; title: string; completed: boolean; datetime?: Date }[] }) {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <section>
              <h2>{task.title}</h2>

              {!task.datetime && <p>No date set</p>}
              {task.datetime && (
                <p>
                  {task.datetime.toDateString()}
                  {task.datetime.toTimeString()}
                </p>
              )}

              {!task.completed && <p>Not Completed</p>}
              {task.completed && <p>Completed</p>}
            </section>
          </li>
        );
      })}
    </ul>
  );
}
