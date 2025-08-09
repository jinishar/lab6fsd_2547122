export default function BreedCard({ name, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="capitalize text-lg font-semibold">{name}</h2>
      </div>
    </div>
  );
}
