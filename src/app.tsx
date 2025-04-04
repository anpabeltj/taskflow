import { Avatar } from "./components/avatar";
import { Button } from "./components/button";

export function App() {
  return (
    <>
      <h1>TaskFlow</h1>

      <Button>Example</Button>

      <Button>Contoh</Button>

      <Avatar
        person={{
          imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
          name: "John Doe",
        }}
      />
      <Avatar
        person={{
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefdAYZ6uy2rn4ODl9zSL1KwCAhiEPo9Xm-g&s",
          name: "Jane Doe",
        }}
      />
    </>
  );
}
