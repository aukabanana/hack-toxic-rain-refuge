import { useLocation, useNavigate } from "react-router-dom";

interface MapTab {
  label: string;
  path: string;
}

const MAP_TABS: MapTab[] = [
  {
    label: "Toxic Zone Map",
    path: "/map",
  },
  {
    label: "Resources Tracker",
    path: "/resources",
  },
];

function MapTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className="inline-flex gap-5 rounded-2xl bg-(--color-off-white) p-2 shadow-[0_1px_16px_-2px_rgba(var(--color-dark-rgb),0.25)] md:gap-8"
      aria-label="Community feature navigation"
    >
      {MAP_TABS.map((tab) => {
        const isActive = location.pathname === tab.path;

        return (
          <button
            key={tab.path}
            type="button"
            onClick={() => navigate(tab.path)}
            aria-current={isActive ? "page" : undefined}
            className={[
              "cursor-pointer rounded-xl px-4 py-2 text-sm font-bold transition sm:text-base",
              isActive
                ? "bg-(--color-navy) text-(--color-off-white)"
                : "text-(--color-dark) hover:bg-[rgba(var(--color-navy-rgb),0.1)]",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

export default MapTabs;