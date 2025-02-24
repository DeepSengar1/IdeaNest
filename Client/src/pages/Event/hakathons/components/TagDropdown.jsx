import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "../../../../components/ui/dropdown-menu"; 
import { Button } from "../../../../components/ui/button"

function TagDropdown({ allTags, selectedFilters, onChange }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Tags ({selectedFilters.length})
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-52 bg-zinc-800 border-zinc-700 text-white">
        <DropdownMenuLabel className="text-zinc-300">Select Tags</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-700" />

        {allTags.map((tag) => {
          const checked = selectedFilters.includes(tag);
          return (
            <DropdownMenuCheckboxItem
              key={tag}
              checked={checked}
              className="focus:bg-zinc-700"
              onCheckedChange={() => onChange(tag)}
            >
              {tag}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TagDropdown;
