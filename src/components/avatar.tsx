export function Avatar({
  person,
}: {
  person: {
    imageUrl: string;
    name?: string;
  };
}) {
  return (
    <img src={person.imageUrl} alt={person.name} className="avatar size-10" />
  );
}
