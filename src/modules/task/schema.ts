import * as z from "zod";

export const TaskSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(3, { message: "Minimum of 3 characters" })
    .max(100, { message: "Maximum of 100 characters" }),
  completed: z.boolean(),
  datetime: z
    .date()
    .min(new Date("2025-01-01"), {
      message: "Too late, earliest should be 1 January 2025",
    })
    .max(new Date("2026-01-01"), {
      message: "Too far, latest should be 1 January 2026",
    })
    .optional(),
});

export const TasksSchema = z.array(TaskSchema);

export const CreateTaskDataSchema = TaskSchema.pick({
  title: true,
});

export type Task = z.infer<typeof TaskSchema>;
export type Tasks = z.infer<typeof TasksSchema>;
export type CreateTaskData = z.infer<typeof CreateTaskDataSchema>;
