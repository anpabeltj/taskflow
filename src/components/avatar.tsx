export function Avatar({
  person,
}: {
  person: {
    imageUrl: string;
    name?: string;
  };
}) {
  return (
    <div>
      <img src={person.imageUrl} alt={person.name} className="avatar size-10" />
      {person.name && <span>{person.name}</span>}
      {!person.name && <span>Anonymous</span>}
    </div>
  );
}
