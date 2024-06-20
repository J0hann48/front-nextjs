import Image from "next/image";
import { fetchPartidos } from "../lib/data";
import { lusitana } from "../ui/fonts";
import { Partidos } from "../lib/definitions";
import {clsx} from 'clsx';


export default async function PartidosList({
    partidosList,
}: {
    partidosList: Partidos[]
}) {
    return (
        <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Partidos Copa America
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
          {partidosList.map((partido, i) => {
            return (
              <div
                key={partido.equipo_local_name}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={partido.equipo_local_name}
                    alt={`${partido.equipo_local_name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {partido.equipo_local_name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {partido.equipo_local_name}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {partido.equipo_local_name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">          
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
    );
}