import { Avatar } from "./components/avatar";
import { Tasks } from "./components/tasks";

export function App() {
  const tasks = [
    {
      id: "a",
      title: "Go to gym",
      completed: false,
      datetime: new Date("2025-03-04 07:00"),
    },
    {
      id: "b",
      title: "Read a book",
      completed: true,
      datetime: new Date("2025-03-04 10:00"),
    },
    {
      id: "c",
      title: "Lunch",
      completed: true,
      datetime: new Date("2025-03-04 12:00"),
    },
    {
      id: "d",
      title: "Go to Office",
      completed: false,
      datetime: new Date("2025-03-04 14:00"),
    },
    {
      id: "",
      title: "Meeting with client",
      completed: false,
      datetime: new Date("2025-03-04 15:00"),
    },
  ];

  return (
    <>
      <h1>TaskFlow</h1>

      <Avatar
        person={{
          name: "Anpabelt",
          imageUrl: "https://github.com/anpabeltj.png",
        }}
      />

      <Tasks tasks={tasks} />
    </>
  );
}
