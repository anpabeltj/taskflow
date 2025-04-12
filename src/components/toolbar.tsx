import { Button } from "./ui/button";

export function Toolbar({ onButtonClick }: { onButtonClick: () => void }) {
  return (
    <div>
      <Button onClick={onButtonClick}>Click me</Button>
    </div>
  );
}
