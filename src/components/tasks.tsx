import type { Tasks } from "@/modules/task/type";
import { Badge } from "@/components/ui/badge";
import { formatDateFriendly } from "@/lib/datetime";
import { Button } from "./ui/button";
import { Trash2Icon, PencilIcon } from "lucide-react";
import { ButtonDatePicker } from "./shared/button-date-picker";

export function Tasks({
  tasks,
  removeTask,
}: {
  tasks: Tasks;
  removeTask: (id: string) => void;
}) {
  return (
    <ul className="grid grid-cols-1 gap-6">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="rounded border border-gray-200 bg-white p-4 shadow"
        >
          <section className="flex items-end justify-between">
            <h3 className="text-lg font-semibold">{task.title}</h3>

            <div className="flex space-x-2">
              <Button
                onClick={() => removeTask(task.id)}
                size="icon-xs"
                variant="destructive"
              >
                <Trash2Icon />
              </Button>

              <Button size="icon-xs" variant="default">
                <PencilIcon />
              </Button>
            </div>
          </section>

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

              <ButtonDatePicker />
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
