import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AddTaskForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Submit");
  }

  // function addTask() {
  //   const newTask = {
  //     id: String(tasks.length + 1),
  //     title: "New Todo",
  //     completed: false,
  //     datetime: new Date(),
  //   };
  //   const updatedTasks = [...tasks, newTask];
  //   setTasks(updatedTasks);
  // }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title">Title:</Label>
        <Input type="text" id="title" name="title" />
      </div>

      <Button>Add Task</Button>
    </form>
  );
}
