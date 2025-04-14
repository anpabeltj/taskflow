import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TaskManager() {
  const [task, setTask] = useState({
    title: "Learn something",
    isDone: false,
  });

  const markAsDone = () => {
    setTask({ ...task, isDone: true });
  };

  return (
    <>
      <h1>Task: {task.title}</h1>
      <p>{task.isDone ? "Done" : "Todo"}</p>
      <Button onClick={markAsDone}>Mark as done</Button>
    </>
  );
}
