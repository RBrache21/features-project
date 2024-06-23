import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ListIcon } from "lucide-react";

type CategorySelectorProps = {
  selectedCategory: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
};

const categories = [
  { value: "mostread", label: "Most Read" },
  { value: "news", label: "News" },
  { value: "onthisday", label: "On This Day" },
];

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onValueChange,
  disabled = false,
}) => {
  return (
    <Select
      value={selectedCategory}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectTrigger className="flex items-center gap-2 border-primary text-primary">
        <ListIcon className="w-4 h-4 text-primary" />
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem
            key={category.value}
            value={category.value}
            className="text-primary"
          >
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
