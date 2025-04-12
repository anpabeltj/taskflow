import { Avatar } from "@/components/avatar";
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
      id: "f",
      title: "Meeting with client",
      completed: false,
      datetime: new Date("2025-03-04 15:00"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold text-blue-800">TaskFlow</h1>
        <h2 className="mt-2 text-2xl font-semibold">Task management app</h2>
      </header>

      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-4">
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
      </div>

      <main className="grid grid-cols-1 gap-6">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="rounded border border-gray-200 bg-white p-4 shadow"
          >
            <h3 className="text-lg font-semibold">{task.title}</h3>
            {task.datetime && (
              <p className="text-sm text-gray-600">
                {new Date(task.datetime).toLocaleString()}
              </p>
            )}
            <span className="mt-2 inline-block text-xs font-medium">
              {!task.completed && (
                <p className="rounded border bg-red-100 p-1 text-red-800">
                  Pending
                </p>
              )}
              {task.completed && (
                <p className="rounded border bg-green-100 p-1 text-green-800">
                  Completed
                </p>
              )}
            </span>
          </div>
        ))}
      </main>
    </div>
  );
}
