export function Avatar({ person }: { person: { imageUrl: string; name: string } }) {
  return <img className="avatar size-10" src={person.imageUrl} alt={person.name} />;
}
