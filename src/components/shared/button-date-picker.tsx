import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ButtonDatePickerProps {
  id?: string;
  name?: string;
}
export function ButtonDatePicker({ id, name }: ButtonDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button id={id} name={name} size="icon-xs" variant="default">
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          disabled={(date) => date < new Date("2025-01-01")}
        />
      </PopoverContent>
    </Popover>
  );
}
