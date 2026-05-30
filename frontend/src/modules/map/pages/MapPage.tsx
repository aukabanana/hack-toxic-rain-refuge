import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import LandingMap from "../components/LandingMap";
import MapLegend from "../components/MapLegend";
import MapTabs from "../components/MapTabs";

function MapPage() {
  const navigate = useNavigate();

  // TODO Mock auth
  const communityName = "comb A";
  const userName = "Auka";

  function handleLogout() {
    console.log("Logout");

    // TODO: Call logout API here.
    navigate("/", {
      replace: true,
    });
  }

  return (
    <main className="min-h-screen w-full bg-(--color-off-white)">
      <header className="flex min-h-20 flex-wrap items-center justify-between gap-4 bg-(--color-navy) px-5 py-4 sm:px-9">
        <div className="rounded-xl bg-(--color-off-white) px-5 py-2 text-sm font-bold text-(--color-navy) shadow-sm sm:text-base">
          {communityName}
        </div>

        <div className="flex items-center gap-5">
        <div className="flex flex-row items-center gap-5 md:gap-10">
                <p className="text-sm md:text-[24px] font-bold text-(--color-off-white)">{userName}</p>
                <LogOut
                  strokeWidth={3}
                  className="cursor-pointer text-sm md:text-[24px] font-bold text-(--color-off-white) " />
              </div>
        </div>
      </header>

      <div className="px-5 py-8 sm:px-9">
        <MapTabs />

        <section className="mt-9">
          <p className="text-xs font-bold tracking-[0.18em] text-(--color-dark)">
            TOXIC ZONE MAP
          </p>

          <h1 className="mt-2 text-xl font-bold text-(--color-navy) sm:text-2xl">
            {communityName} - Field map
          </h1>

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_288px]">
            <div className="min-h-[600px] w-full">
              <LandingMap mode="community" />
            </div>
            <MapLegend />
          </div>
        </section>
      </div>
    </main>
  );
}

export default MapPage;