import * as z from "zod";

export const TaskSchema = z.interface({
  id: z.string(),
  title: z
    .string()
    .min(3, { error: "Minimum of 3 characters" })
    .max(100, { error: "Maximum of 100 characters" }),
  completed: z.boolean(),
  datetime: z
    .date()
    .min(new Date("2025-01-01"), {
      error: "Too late, earliest should be 1 January 2025",
    })
    .max(new Date("2026-01-01"), {
      error: "Too far, latest should be 1 January 2026",
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
