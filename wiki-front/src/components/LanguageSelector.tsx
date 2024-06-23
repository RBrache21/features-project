import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { GlobeIcon } from "lucide-react";

type LanguageSelectorProps = {
  selectedLanguage: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
};

const availableLanguages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "ru", label: "Russian" },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onValueChange,
  disabled = false,
}) => {
  return (
    <Select
      value={selectedLanguage}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      <SelectTrigger className="flex items-center gap-2 border-primary text-primary">
        <GlobeIcon className="w-4 h-4 text-primary" />
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {availableLanguages.map((language) => (
          <SelectItem
            key={language.value}
            value={language.value}
            className="text-primary"
          >
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
