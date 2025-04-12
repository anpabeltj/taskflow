import type { Tasks } from "@/modules/task/type";
import { Badge } from "@/components/ui/badge";
import { formatDateFriendly } from "@/lib/datetime";

export function Tasks({ tasks }: { tasks: Tasks }) {
  return (
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
                  {formatDateFriendly(task.datetime)}
                </time>
              )}
            </div>

            <div className="mt-2 inline-block text-xs font-medium">
              {!task.completed && <Badge variant="pending">Pending</Badge>}
              {task.completed && <Badge variant="completed">Completed</Badge>}
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
