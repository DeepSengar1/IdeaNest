import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "../../../../components/ui/dropdown-menu"; 
import { Button } from "../../../../components/ui/button"

function ModeDropdown({ selectedMode, setSelectedMode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Mode: {selectedMode}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40 bg-zinc-800 border-zinc-700 text-white">
        <DropdownMenuLabel className="text-zinc-300">Select Mode</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={selectedMode}
          onValueChange={setSelectedMode}
        >
          <DropdownMenuRadioItem value="All" className="focus:bg-zinc-700">
            All
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Online" className="focus:bg-zinc-700">
            Online
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Offline" className="focus:bg-zinc-700">
            Offline
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeDropdown;
