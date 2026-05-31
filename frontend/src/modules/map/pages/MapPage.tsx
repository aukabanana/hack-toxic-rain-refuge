import {
  useEffect,
  useState,
} from "react";

import Navbar from "../../../components/Navbar";
import {
  Navigate,
} from "react-router-dom";

import LandingMap from "../components/LandingMap";
import MapLegend from "../components/MapLegend";
import MapTabs from "../components/MapTabs";

import { getCommunityById } from "../apis/LandingPage.api";

import type { Community } from "../types/landingPage";

function MapPage() {


  // TODO: Replace with localStorage after create-community flow is ready.
  const communityId =
    "8dce2719-eb99-450d-a70c-01ffdc9350c7";

  // const userName =
  //   localStorage.getItem("username") ??
  //   "Unknown user";

  const [community, setCommunity] =
    useState<Community | null>(null);

  // const [
  //   isLoadingCommunity,
  //   setIsLoadingCommunity,
  // ] = useState(true);

  const [
    communityError,
    setCommunityError,
  ] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCommunity() {
      try {
        setIsLoadingCommunity(true);
        setCommunityError(null);

        const fetchedCommunity =
          await getCommunityById(communityId);

        setCommunity(fetchedCommunity);
      } catch (error) {
        console.error(
          "Failed to fetch community:",
          error,
        );

        setCommunityError(
          "Unable to load community",
        );
      } finally {
        setIsLoadingCommunity(false);
      }
    }

    void fetchCommunity();
  }, [communityId]);


  if (!communityId) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen w-full bg-(--color-off-white)">

      <Navbar
        communityName={community?.name ?? null}
        isAuthenticated={true}
        onCommunityClick={() => { }}
      />

      <div className="px-5 py-8 sm:px-9">
        <MapTabs />

        {communityError && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {communityError}
          </div>
        )}

        <section className="mt-9">
          <p className="text-xs font-bold tracking-[0.18em] text-(--color-dark)">
            TOXIC ZONE MAP
          </p>

          <h1 className="mt-2 text-xl font-bold text-(--color-navy) sm:text-2xl">
            {community?.name ??
              "Community"}{" "}
            - Field map
          </h1>

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_288px]">
            <div className="min-h-[600px] w-full">
              <LandingMap
                mode="community"
                communityId={communityId}
              />
            </div>

            <MapLegend />
          </div>
        </section>
      </div>
    </main>
  );
}

export default MapPage;