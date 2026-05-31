import {
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { LogOut } from "lucide-react";
import {
  Navigate,
} from "react-router-dom";

import LandingMap from "../components/LandingMap";
import MapLegend from "../components/MapLegend";
import MapTabs from "../components/MapTabs";

import {
  getUserCommunity,
} from "../apis/LandingPage.api";

import type {
  UserCommunityMembership,
} from "../types/landingPage";

function MapPage() {


  const userId =
    localStorage.getItem("userId");

  const [
    membership,
    setMembership,
  ] =
    useState<UserCommunityMembership | null>(
      null,
    );

  const [
    isLoading,
    setIsLoading,
  ] = useState(true);

  const [
    errorMessage,
    setErrorMessage,
  ] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const currentUserId = userId;

    async function fetchMembership() {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        const fetchedMembership =
          await getUserCommunity(currentUserId);

        setMembership(
          fetchedMembership,
        );

        localStorage.setItem(
          "communityId",
          fetchedMembership.community.id,
        );
      } catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response?.status === 404
        ) {
          localStorage.removeItem(
            "communityId",
          );

          navigate("/", {
            replace: true,
          });

          return;
        }

        console.error(
          "FETCH_MEMBERSHIP_ERROR:",
          error,
        );

        setErrorMessage(
          "Unable to load community data",
        );
      } finally {
        setIsLoading(false);
      }
    }

    void fetchMembership();
  }, [navigate, userId]);


  if (!userId) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-(--color-off-white)">
        <p className="font-bold text-(--color-navy)">
          Loading community...
        </p>
      </main>
    );
  }

  if (!membership) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  const communityId =
    membership.community.id;

  const communityName =
    membership.community.name;

  const userName =
    membership.user.username;

  const currentUserRole =
    membership.role;

  return (
    <main className="min-h-screen w-full bg-(--color-off-white)">
      <header className="flex min-h-20 flex-wrap items-center justify-between gap-4 bg-(--color-navy) px-5 py-4 sm:px-9">
        <div>
          <p className="rounded-xl bg-(--color-off-white) px-5 py-2 text-sm font-bold text-(--color-navy) shadow-sm sm:text-base">
            {communityName}
          </p>
        </div>

        <div className="flex items-center gap-5 md:gap-10">
          <p className="text-sm font-bold text-(--color-off-white) md:text-[24px]">
            {userName}
          </p>

      <Navbar
        communityName={community?.name ?? null}
        isAuthenticated={true}
        onCommunityClick={() => { }}
      />

      <div className="px-5 py-8 sm:px-9">
        <MapTabs />

        {errorMessage && (
          <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {errorMessage}
          </div>
        )}

        <section className="mt-9">
          <p className="text-xs font-bold tracking-[0.18em] text-(--color-dark)">
            TOXIC ZONE MAP
          </p>

          <h1 className="mt-2 text-xl font-bold text-(--color-navy) sm:text-2xl">
            {communityName} - Field map
          </h1>

          <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1fr)_288px]">
            <div className="min-h-[600px] w-full">
              <LandingMap
                mode="community"
                communityId={
                  communityId
                }
                currentUserRole={
                  currentUserRole
                }
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