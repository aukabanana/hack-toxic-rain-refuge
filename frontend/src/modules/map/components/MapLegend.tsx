import {
  House,
  CircleAlert
} from "lucide-react";

import {
  Biohazard,
  Flag,
  MapPinCheck,
  PackageSearch,
  type LucideIcon,
} from "lucide-react";

function MapLegend() {
  return (
    <aside className="w-full h-fit rounded-2xl bg-(--color-off-white) p-5 shadow-[0_1px_16px_-2px_rgba(var(--color-dark-rgb),0.25)] lg:w-72">
      <h2 className="text-base font-medium tracking-[0.2em] text-(--color-dark)">
        LEGEND
      </h2>

      <ul className="mt-4 space-y-4 text-sm text-(--color-dark) sm:text-base">
        <li className="flex items-center gap-3">
          <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-(--color-navy) text-(--color-off-white)">
            <House className="size-5" strokeWidth={2.5} />
          </span>
          <span>Shelter</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-[#16a34a] text-(--color-off-white)">
            <MapPinCheck className="size-5" strokeWidth={2.5} />
          </span>
          <span>Safe area</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-[#7c3aed] text-(--color-off-white)">
            <Flag className="size-5" strokeWidth={2.5} />
          </span>
          <span>Destination</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-(--color-wine-red) text-(--color-off-white)">
            <Biohazard className="size-5" strokeWidth={2.5} />
          </span>
          <span>Toxic hazard</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-[#dc2626] text-(--color-off-white)">
            <CircleAlert className="size-5" strokeWidth={2.5} />
          </span>
          <span>Danger</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="flex w-10 h-10 items-center justify-center rounded-lg bg-green-700 text-(--color-off-white)">
            <PackageSearch className="size-5" strokeWidth={2.5} />
          </span>
          <span>Food source</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="h-5 w-10 rounded-md border border-dashed border-green-700 bg-green-200/70" />
          <span>Safe corridor</span>
        </li>

        <li className="flex items-center gap-3">
          <span className="h-5 w-10 rounded-md border border-dashed border-(color-wine-red) bg-red-200/70" />
          <span>Toxic zone</span>
        </li>
      </ul>
    </aside>
  );
}

export default MapLegend;