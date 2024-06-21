import Image from "next/image";
import { fetchPartidos } from "../../lib/data";
import { lusitana } from "../ui/fonts";
import { Partidos } from "../../lib/definitions";
import { clsx } from 'clsx';


export default async function PartidosList({
  partidosList,
}: {
  partidosList: Partidos[]
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Partidos
      </h1>
      {/*<Search placeholder="Search customers..." />*/}      
    </div>
  );
}