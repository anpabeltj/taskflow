import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
      <header className="mb-8 flex justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-800">TaskFlow</h1>
          <h2 className="mt-2 text-2xl font-semibold">Task management app</h2>
        </div>

        <div>
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/anpabeltj.png" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="mx-auto max-w-2xl">
        <ul className="grid grid-cols-1 gap-6">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="rounded border border-gray-200 bg-white p-4 shadow"
            >
              <h3 className="text-lg font-semibold">{task.title}</h3>

              <section className="flex items-end justify-between">
                <div>
                  {task.datetime && (
                    <time
                      dateTime={task.datetime.toLocaleString()}
                      className="text-sm text-gray-600"
                    >
                      {task.datetime.toLocaleString()}
                    </time>
                  )}
                </div>

                <div className="mt-2 inline-block text-xs font-medium">
                  {!task.completed && <Badge variant="pending">Pending</Badge>}
                  {task.completed && (
                    <Badge variant="completed">Completed</Badge>
                  )}
                </div>
              </section>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
