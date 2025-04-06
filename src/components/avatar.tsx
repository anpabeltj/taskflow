export function Avatar({ person }: { person: { imageUrl: string; name?: string } }) {
  //   if (!person.name) {
  //     <img className="avatar size-10" src={person.imageUrl} alt="Avatar" />;
  //   }
  return (
    <div>
      <img className="avatar size-10" src={person.imageUrl} alt={person.name} />
      {person.name && <span>{person.name}</span>}
      {!person.name && <span>Anonymous</span>}
    </div>
  );
}
