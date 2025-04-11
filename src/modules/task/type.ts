export type Task = {
  id: string;
  title: string;
  completed: boolean;
  datetime?: Date;
};

export type Tasks = Task[];
