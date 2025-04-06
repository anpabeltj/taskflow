export function Avatar() {
  const person = {
    avatar: "https://i.imgur.com/7vQD0fPs.jpg",
    description: "Gregorio Y. Zara",
  };

  return <img className="avatar size-10" src={person.avatar} alt={person.description} />;
}
