import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

const schema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  age: z.number().positive().int({ message: "Age must be a positive integer" }),
});

export default function AddTaskHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: unknown) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("firstName")} />
      {/* <p>{errors.firstName?.message}</p> */}

      <Input {...register("age")} />
      {/* <p>{errors.age?.message}</p> */}

      <Button type="submit">Submit</Button>

      <pre className="text-xs">{JSON.stringify(errors, null, 2)}</pre>
    </form>
  );
}
