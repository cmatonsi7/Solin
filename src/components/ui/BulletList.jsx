export default function BulletList({ items }) {
  return (
    <ul className="bullets">
      {items.map((i) => <li key={i}>{i}</li>)}
    </ul>
  );
}
