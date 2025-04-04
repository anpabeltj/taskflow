import { Tasks } from "./components/tasks";

export function App() {
  const tasks = [
    { id: "abc", title: "Breakfast", datetime: new Date("2025-03-04 07:00") },
    { id: "def", title: "Lunch" },
    { id: "ghi", title: "Dinner" },
  ];

  return (
    <>
      <h1>TaskFlow</h1>

      <Tasks tasks={tasks} />
    </>
  );
}
