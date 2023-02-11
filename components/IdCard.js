import Image from "next/image";

export default function IdCard({ name, imgSource }) {
  return (
    <li key={name} className="pb-4">
      <Image
        src={imgSource}
        width={500}
        height={500}
        alt="Członek naszego zespołu"
        className="rounded-full transform scale-75"
      />
      <div className="text-lg text-center">{name}</div>
    </li>
  );
}