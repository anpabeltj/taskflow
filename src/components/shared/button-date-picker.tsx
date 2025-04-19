import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function ButtonDatePicker() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon-xs" variant="default">
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          disabled={(date) => date < new Date("2025-01-01")}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
