import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarDays } from "lucide-react";
import { Calendar } from "./ui/calendar";

type DateSelectorProps = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  disabled?: boolean;
};

export const DateSelector: React.FC<DateSelectorProps> = ({
  selectedDate,
  setSelectedDate,
  disabled = false,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date-selector"
          variant="outline"
          className="flex items-center gap-2 border-primary text-primary w-full"
          disabled={disabled}
        >
          <CalendarDays className="w-4 h-4 text-primary" />
          {selectedDate ? selectedDate.toLocaleDateString() : "Select date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          disabled={selectedDate}
          mode="single"
          selected={selectedDate}
          onSelect={(date) => {
            setSelectedDate(date as Date);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
