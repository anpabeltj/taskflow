import { Avatar } from "./components/avatar";
import { Button } from "./components/button";

export function App() {
  return (
    <>
      <h1> TaskFlow</h1>
      <Button />
      <Button />
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo"></img>
      <Avatar />
    </>
  );
}
