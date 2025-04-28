import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { CreateTaskData } from "@/modules/task/type";
import { Toaster } from "sonner";
import { ButtonDatePicker } from "./button-date-picker";

export function AddTaskForm({
  addTask,
}: {
  addTask: (createTaskData: CreateTaskData & { datetime: string }) => void;
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTask = {
      title: String(formData.get("title")),
      datetime: new Date().toISOString(),
    };

    addTask(newTask);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Title:</Label>
        <Input type="text" id="title" name="title" />
        <Label htmlFor="date"> Date: </Label>
        <ButtonDatePicker id="date" name="calendar" />
      </div>

      <Button>Add Task</Button>
      <Toaster />
    </form>
  );
}
