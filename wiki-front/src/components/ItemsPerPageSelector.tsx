import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ListIcon } from "lucide-react";

type ItemsPerPageSelectorProps = {
  itemsPerPage: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
};

const availableItemsPerPage = ["5", "10", "15", "20", "All"];

export const ItemsPerPageSelector: React.FC<ItemsPerPageSelectorProps> = ({
  itemsPerPage,
  onValueChange,
  disabled = false,
}) => {
  return (
    <Select
      value={itemsPerPage}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectTrigger className="flex items-center gap-2 border-primary text-primary">
        <ListIcon className="w-4 h-4 text-primary" />
        <SelectValue placeholder="Items per page" />
      </SelectTrigger>
      <SelectContent>
        {availableItemsPerPage.map((item) => (
          <SelectItem key={item} value={item} className="text-primary">
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
