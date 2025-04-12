export function Avatar({
  person,
}: {
  person: { imageUrl: string; name?: string };
}) {
  return (
    <div>
      <img
        className="avatar size-10 rounded-full"
        src={person.imageUrl}
        alt={person.name}
      />
      {person.name && <span>{person.name}</span>}
      {!person.name && <span>Anonymous</span>}
    </div>
  );
}
