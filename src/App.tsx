import { Avatar } from "@/components/avatar";
import { Tasks } from "@/components/tasks";
import { Button } from "@/components/ui/button";

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
      <h1 className="text-3xl font-bold text-blue-800">TaskFlow</h1>
      <h2 className="text-2xl font-bold">Task management app</h2>

      <div className="flex gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </div>

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
