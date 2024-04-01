import { Select, Option } from "@material-tailwind/react";
 
export function SelectFilter() {
  return (
    <div className="w-24 h-36">
      <Select placeholder={""} label="filter">
        <Option>Material </Option>
        <Option>Mate</Option>
        <Option>M Vue</Option>
        <Option>Mngular</Option>
        <Option> Svelte</Option>
      </Select>
    </div>
  );
}