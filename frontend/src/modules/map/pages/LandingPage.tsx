import {
  useEffect,
  useState,
} from "react";

import axios from "axios";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

import CreateCommunityModal from "../components/CreateCommunityModal";
import LandingMap from "../components/LandingMap";

import {
  createCommunity,
  getUserCommunity,
} from "../apis/LandingPage.api";

import type {
  LandingPageRouteConfig,
  UserCommunityMembership,
} from "../types/landingPage";

const ROUTES: LandingPageRouteConfig = {
  login: "/login",
  register: "/register",
};

function LandingPage() {
  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  const userId =
    localStorage.getItem("userId");

  const storedUsername =
    localStorage.getItem("username");

  const isAuthenticated =
    Boolean(token && userId);

  const [
    membership,
    setMembership,
  ] =
    useState<UserCommunityMembership | null>(
      null,
    );

  const [
    isLoadingCommunity,
    setIsLoadingCommunity,
  ] = useState(false);

  const [
    communityError,
    setCommunityError,
  ] = useState<string | null>(null);

  const [
    isCreateCommunityModalOpen,
    setIsCreateCommunityModalOpen,
  ] = useState(false);

  const haveCommunity =
    membership !== null;

  const communityName =
    membership?.community.name ??
    "No community";

  const username =
    membership?.user.username ??
    storedUsername ??
    "Unknown user";

  useEffect(() => {
    if (!isAuthenticated || !userId) {
      setMembership(null);
      return;
    }

    const currentUserId = userId;

    async function fetchUserCommunity() {
      try {
        setIsLoadingCommunity(true);
        setCommunityError(null);

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
          setMembership(null);

          localStorage.removeItem(
            "communityId",
          );

          return;
        }

        console.error(
          "FETCH_USER_COMMUNITY_ERROR:",
          error,
        );

        setCommunityError(
          "Unable to load community data",
        );
      } finally {
        setIsLoadingCommunity(false);
      }
    }

    void fetchUserCommunity();
  }, [isAuthenticated, userId]);

  function handleOpenCreateCommunityModal() {
    if (!isAuthenticated) {
      navigate(ROUTES.login, {
        state: {
          redirectTo: "/",
          action: "CREATE_COMMUNITY",
        },
      });

      return;
    }

    setIsCreateCommunityModalOpen(true);
  }

  async function handleCreateCommunity(
    name: string,
  ) {
    if (!userId) {
      navigate(ROUTES.login);
      return;
    }

    try {
      setCommunityError(null);

      const community =
        await createCommunity(
          name,
          userId,
        );

      localStorage.setItem(
        "communityId",
        community.id,
      );

      setIsCreateCommunityModalOpen(false);

      navigate("/map");
    } catch (error) {
      console.error(
        "CREATE_COMMUNITY_ERROR:",
        error,
      );

      setCommunityError(
        "Unable to create community",
      );
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("communityId");

    setMembership(null);

    navigate("/", {
      replace: true,
    });
  }

  return (
    <main className="min-h-screen bg-(--color-off-white)">
      <section className="mx-auto flex min-h-screen w-full flex-col overflow-hidden shadow-2xl">
        <header className="flex min-h-20 flex-wrap items-center justify-between gap-4 bg-(--color-navy) px-5 py-4 sm:px-9">
          <button
            type="button"
            onClick={() => {
              if (haveCommunity) {
                navigate("/map");
              }
            }}
            className="rounded-xl bg-white px-5 py-2 text-sm font-bold text-(--color-navy) shadow-sm sm:text-base"
          >
            {isLoadingCommunity
              ? "Loading..."
              : communityName}
          </button>

          {!isAuthenticated ? (
            <div className="flex gap-5 md:gap-10">
              <button
                type="button"
                onClick={() =>
                  navigate(ROUTES.register)
                }
                className="rounded-xl bg-slate-50 px-5 py-2 text-sm font-bold text-(--color-navy) transition hover:bg-slate-200 sm:px-7 sm:text-base"
              >
                Register
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate(ROUTES.login)
                }
                className="rounded-xl bg-slate-50 px-5 py-2 text-sm font-bold text-(--color-navy) transition hover:bg-slate-200 sm:px-7 sm:text-base"
              >
                Login
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-5 md:gap-10">
              <p className="text-sm font-bold text-(--color-off-white) md:text-[24px]">
                {username}
              </p>

              <button
                type="button"
                onClick={handleLogout}
                aria-label="Logout"
                className="cursor-pointer rounded-lg p-2 transition hover:bg-white/10"
              >
                <LogOut
                  strokeWidth={3}
                  className="size-6 text-(--color-off-white)"
                />
              </button>
            </div>
          )}
        </header>

        {communityError && (
          <div className="mx-4 mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 sm:mx-6 lg:mx-10">
            {communityError}
          </div>
        )}

        <div className="relative flex flex-1 p-4 sm:p-6 lg:p-10">
          <div className="min-h-[520px] w-full">
            <LandingMap mode="landing" />
          </div>

          {!haveCommunity &&
            !isLoadingCommunity && (
              <>
                <button
                  type="button"
                  onClick={
                    handleOpenCreateCommunityModal
                  }
                  className="absolute bottom-4 left-1/2 z-[900] -translate-x-1/2 cursor-pointer whitespace-nowrap rounded-2xl bg-(--color-navy) px-7 py-3 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:brightness-110 sm:px-9 sm:text-base"
                >
                  Create Community
                </button>

                <CreateCommunityModal
                  isOpen={
                    isCreateCommunityModalOpen
                  }
                  onClose={() =>
                    setIsCreateCommunityModalOpen(
                      false,
                    )
                  }
                  onCreate={
                    handleCreateCommunity
                  }
                />
              </>
            )}
        </div>
      </section>
    </main>
  );
}

export default LandingPage;