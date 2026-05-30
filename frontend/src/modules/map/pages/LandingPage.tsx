import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CreateCommunityModal from "../components/CreateCommunityModal";
import LandingMap from "../components/LandingMap";

import type { LandingPageRouteConfig } from "../types/landingPage";

import { LogOut } from 'lucide-react';

const ROUTES: LandingPageRouteConfig = {
  login: "/login",
  register: "/register",
};

function LandingPage() {
  const navigate = useNavigate();

  const [isCreateCommunityModalOpen, setIsCreateCommunityModalOpen] =
    useState(false);

  // TODO Mock auth
  const isAuthenticated = true;
  const haveCommu = true;
  const communityName = "comb A";
  const userName = "Auka";

  function handleOpenCreateCommunityModal() {
    if (!isAuthenticated) {
      navigate(ROUTES.login, {
        state: {
          redirectTo: "/login",
          action: "CREATE_COMMUNITY",
        },
      });

      return;
    }

    setIsCreateCommunityModalOpen(true);
  }

  function handleCreateCommunity(communityName: string) {
    console.log("Create community:", communityName);

    // TODO: Replace with Axios POST request.
    setIsCreateCommunityModalOpen(false);
  }

  return (
    <main className="min-h-screen bg-(--color-off-white)">
      <section className="mx-auto flex min-h-screen w-full flex-col overflow-hidden shadow-2xl">
        <header className="flex min-h-20 flex-wrap items-center justify-between gap-4 bg-(--color-navy) px-5 py-4 sm:px-9">
          <div
            className="rounded-xl bg-(--color-off-white) px-5 py-2 text-sm font-bold text-(--color-navy) shadow-sm sm:text-base"
            aria-label="Current community status"
          >
            {isAuthenticated
              ? (haveCommu && isAuthenticated ? communityName : "No community")
              : "No community"}
          </div>

          <nav
            className="flex items-center gap-3 sm:gap-8"
            aria-label="Authentication navigation"
          >
            {!isAuthenticated ?
              <div className="flex flex-row gap-5 md:gap-10">
                <button
                  type="button"
                  onClick={() => navigate(ROUTES.register)}
                  className="rounded-xl bg-slate-50 px-5 py-2 text-sm font-bold text-(--color-navy) transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-7 sm:text-base"
                >
                  Register
                </button>

                <button
                  type="button"
                  onClick={() => navigate(ROUTES.login)}
                  className="rounded-xl bg-slate-50 px-5 py-2 text-sm font-bold text-(--color-navy) transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-7 sm:text-base"
                >
                  Login
                </button>

              </div>
              :
              <div className="flex flex-row items-center gap-5 md:gap-10">
                <p className="text-sm md:text-[24px] font-bold text-(--color-off-white)">{userName}</p>
                <LogOut
                  strokeWidth={3}
                  className="cursor-pointer text-sm md:text-[24px] font-bold text-(--color-off-white) " />
              </div>
            }
          </nav>
        </header>

        <div className="relative flex flex-1 p-4 sm:p-6 lg:p-10">
          <div className="min-h-[520px] w-full">
            <LandingMap />
          </div>

          {(!haveCommu) &&
            <div>
              <button
                type="button"
                onClick={handleOpenCreateCommunityModal}
                className="absolute cursor-pointer bottom-4 left-1/2 z-900 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-(--color-navy) px-7 py-3 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-white/40 sm:px-9 sm:text-base"
              >
                Create Community
              </button>

              <CreateCommunityModal
                isOpen={isCreateCommunityModalOpen}
                onClose={() => setIsCreateCommunityModalOpen(false)}
                onCreate={handleCreateCommunity}
              />
            </div>
          }
        </div>
      </section>
    </main>
  );
}

export default LandingPage;