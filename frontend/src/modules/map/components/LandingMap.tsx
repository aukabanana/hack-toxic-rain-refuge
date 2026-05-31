import { useEffect, useState, } from "react";

import {
  createMapMarker,
  deleteMapMarker,
  deleteMapZone,
  getMapMarkers,
  getMapZones,
} from "../apis/MapPage.api";

import {
  divIcon,
  type LatLngExpression,
  type LeafletMouseEvent,
} from "leaflet";
import type { GeoJsonObject } from "geojson";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";

import { renderToStaticMarkup } from "react-dom/server";
import {
  Biohazard,
  CircleAlert,
  Flag,
  House,
  MapPinCheck,
  PackageSearch,
  type LucideIcon,
} from "lucide-react";

import "leaflet/dist/leaflet.css";
import "./LandingMap.css";

import CreateMarkerModal from "./CreateMarkerModal";

import {
  CURRENT_USER_LOCATION,
  MOCK_MAP_ZONES,
} from "../mocks/map.mock";

import type {
  CreateMapMarkerPayload,
  MapMarker,
  MapZone,
  MarkerType,
} from "../types/map";
interface LandingMapProps {
  mode?: "landing" | "community";
  communityId?: string;
}

interface PendingMarkerPosition {
  latitude: number;
  longitude: number;
}

interface MapClickHandlerProps {
  isCreateMode: boolean;
  onSelectPosition: (
    latitude: number,
    longitude: number,
  ) => void;
}

const DEFAULT_MAP_CENTER: LatLngExpression = [
  CURRENT_USER_LOCATION.latitude,
  CURRENT_USER_LOCATION.longitude,
];

const currentUserIcon = divIcon({
  className: "current-user-marker",
  iconSize: [42, 42],
  iconAnchor: [21, 21],
  popupAnchor: [0, -24],
  html: `
    <div class="current-user-marker__container">
      <span class="current-user-marker__pulse"></span>

      <span class="current-user-marker__icon" aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path>
          <circle cx="12" cy="10" r="2.5"></circle>
        </svg>
      </span>
    </div>
  `,
});

function getMarkerClassName(type: MarkerType): string {
  switch (type) {
    case "COMMUNITY_BASE":
      return "community-map-marker community-map-marker--shelter";

    case "RESOURCE_LOCATION":
      return "community-map-marker community-map-marker--resource";

    case "MISSION_DESTINATION":
      return "community-map-marker community-map-marker--mission";

    case "SAFE_AREA":
      return "community-map-marker community-map-marker--safe";

    case "TOXIC_AREA":
      return "community-map-marker community-map-marker--toxic";

    case "DANGER_AREA":
      return "community-map-marker community-map-marker--danger";
  }
}

function getMarkerIconComponent(type: MarkerType): LucideIcon {
  switch (type) {
    case "COMMUNITY_BASE":
      return House;

    case "RESOURCE_LOCATION":
      return PackageSearch;

    case "MISSION_DESTINATION":
      return Flag;

    case "SAFE_AREA":
      return MapPinCheck;

    case "TOXIC_AREA":
      return Biohazard;

    case "DANGER_AREA":
      return CircleAlert;
  }
}

function createMapMarkerIcon(type: MarkerType) {
  const Icon = getMarkerIconComponent(type);

  const iconSvg = renderToStaticMarkup(
    <Icon
      size={16}
      strokeWidth={2}
      aria-hidden="true"
    />,
  );

  return divIcon({
    className: getMarkerClassName(type),
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -22],
    html: `<span>${iconSvg}</span>`,
  });
}

function MapClickHandler({
  isCreateMode,
  onSelectPosition,
}: MapClickHandlerProps) {
  useMapEvents({
    click(event: LeafletMouseEvent) {
      if (!isCreateMode) return;

      onSelectPosition(
        event.latlng.lat,
        event.latlng.lng,
      );
    },
  });

  return null;
}

import type { UserRole } from "../types/landingPage";

interface LandingMapProps {
  mode?: "landing" | "community";
  communityId?: string;
  currentUserRole?: UserRole;
}

function LandingMap({
  mode = "landing",
  communityId,
  currentUserRole = "SURVIVOR",
}: LandingMapProps) {
  const isCommunityMode =
    mode === "community";

  const canManageMap =
    currentUserRole === "RESOURCE_TRACKER" ||
    currentUserRole === "SCOUT";

  const [markers, setMarkers] =
    useState<MapMarker[]>([]);

  const [zones, setZones] =
    useState<MapZone[]>([]);

  const [selectedMarkerId, setSelectedMarkerId] =
    useState<string | null>(null);

  const [selectedZoneId, setSelectedZoneId] =
    useState<string | null>(null);

  const [isCreateMode, setIsCreateMode] =
    useState(false);

  const [
    pendingMarkerPosition,
    setPendingMarkerPosition,
  ] = useState<PendingMarkerPosition | null>(null);

  const displayedZones =
    isCommunityMode
      ? zones
      : MOCK_MAP_ZONES;

  function handleSelectMarkerPosition(
    latitude: number,
    longitude: number,
  ) {
    setPendingMarkerPosition({
      latitude,
      longitude,
    });

    setIsCreateMode(false);
  }

  useEffect(() => {
    if (
      mode !== "community" ||
      !communityId
    ) {
      return;
    }

    async function fetchMapData() {
      try {
        const [
          fetchedMarkers,
          fetchedZones,
        ] = await Promise.all([
          getMapMarkers(communityId as string),
          getMapZones(communityId as string),
        ]);

        setMarkers(fetchedMarkers);
        setZones(fetchedZones);
      } catch (error) {
        console.error(
          "Failed to fetch map data:",
          error,
        );
      }
    }

    void fetchMapData();
  }, [communityId, mode]);

  async function handleCreateMarker(
    payload: Omit<
      CreateMapMarkerPayload,
      "latitude" | "longitude"
    >,
  ) {
    if (
      !communityId ||
      !pendingMarkerPosition
    ) {
      return;
    }

    try {
      const createdMarker =
        await createMapMarker(
          communityId,
          {
            ...payload,
            latitude:
              pendingMarkerPosition.latitude,
            longitude:
              pendingMarkerPosition.longitude,
          },
        );

      setMarkers((previousMarkers) => [
        ...previousMarkers,
        createdMarker,
      ]);

      setPendingMarkerPosition(null);
    } catch (error) {
      console.error(
        "Failed to create marker:",
        error,
      );
    }
  }

  async function handleRemoveSelectedMarker() {
    if (!selectedMarkerId) return;

    try {
      const deletedMarkerId =
        await deleteMapMarker(
          selectedMarkerId,
        );

      setMarkers((previousMarkers) =>
        previousMarkers.filter(
          (marker) =>
            marker.id !== deletedMarkerId,
        ),
      );

      setSelectedMarkerId(null);
    } catch (error) {
      console.error(
        "Failed to delete marker:",
        error,
      );
    }
  }

  async function handleRemoveSelectedZone() {
    if (!selectedZoneId) return;

    try {
      const deletedZoneId =
        await deleteMapZone(selectedZoneId);

      setZones((previousZones) =>
        previousZones.filter(
          (zone) =>
            zone.id !== deletedZoneId,
        ),
      );

      setSelectedZoneId(null);
    } catch (error) {
      console.error(
        "Failed to delete zone:",
        error,
      );
    }
  }

  useEffect(() => {
    if (canManageMap) return;

    setIsCreateMode(false);
    setSelectedMarkerId(null);
    setSelectedZoneId(null);
    setPendingMarkerPosition(null);
  }, [canManageMap]);

  return (
    <section className="relative h-full min-h-[520px] w-full overflow-hidden rounded-2xl">
      <MapContainer
        center={DEFAULT_MAP_CENTER}
        zoom={14}
        zoomControl={false}
        scrollWheelZoom
        className="h-full min-h-[520px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {displayedZones.map((zone) => {
          if (!zone.geoJson) return null;

          const zoneGeoJson =
            JSON.parse(zone.geoJson) as GeoJsonObject;

          const isToxicZone =
            zone.type === "TOXIC";

          return (
            <GeoJSON
              key={zone.id}
              data={zoneGeoJson}
              eventHandlers={{
                click: () => {
                  if (!isCommunityMode) return;

                  setSelectedZoneId(zone.id);
                  setSelectedMarkerId(null);
                },
              }}
              style={{
                color: isToxicZone
                  ? "#991B1B"
                  : "#15803D",

                fillColor: isToxicZone
                  ? "#DC2626"
                  : "#22C55E",

                fillOpacity:
                  zone.riskLevel === "CRITICAL"
                    ? 0.4
                    : zone.riskLevel === "HIGH"
                      ? 0.3
                      : 0.15,

                opacity: 1,
                weight: 1,
                dashArray: "12 5",
              }}
            >
              <Popup>
                <div className="min-w-48">
                  <p
                    className={
                      isToxicZone
                        ? "font-bold text-(--color-wine-red)"
                        : "font-bold text-green-700"
                    }
                  >
                    {zone.name}
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide">
                    {zone.type} · {zone.riskLevel}
                  </p>

                  {zone.description && (
                    <p className="mt-2 text-sm text-slate-700">
                      {zone.description}
                    </p>
                  )}
                </div>
              </Popup>
            </GeoJSON>
          );
        })}

        <Marker
          position={[
            CURRENT_USER_LOCATION.latitude,
            CURRENT_USER_LOCATION.longitude,
          ]}
          icon={currentUserIcon}
        >
          <Popup>
            <div className="flex w-fit flex-col gap-2 md:gap-5">
              <p className="font-bold text-(--color-dark)">
                {CURRENT_USER_LOCATION.username}
              </p>

              <div className="flex flex-col">
                <p className="m-0 text-sm text-[rgba(var(--color-dark-rgb),0.5)]">
                  Your current location
                </p>

                <p className="m-0 text-sm text-[rgba(var(--color-dark-rgb),0.5)]">
                  lat: {CURRENT_USER_LOCATION.latitude},
                  long: {CURRENT_USER_LOCATION.longitude}
                </p>
              </div>
            </div>
          </Popup>
        </Marker>

        {/* แสดง community markers เฉพาะหน้า /map */}
        {isCommunityMode &&
          markers.map((marker) => (
            <Marker
              key={marker.id}
              position={[
                marker.latitude,
                marker.longitude,
              ]}
              icon={createMapMarkerIcon(marker.type)}
              eventHandlers={{
                click: () => {
                  setSelectedMarkerId(marker.id);
                  setSelectedZoneId(null);
                },
              }}
            >
              <Popup>
                <div className="min-w-44">
                  <p className="font-bold">
                    {marker.name}
                  </p>

                  <p className="mt-1 text-xs font-semibold uppercase">
                    {marker.type.replaceAll("_", " ")}
                  </p>

                  <p className="mt-1 text-xs">
                    Risk: {marker.riskLevel}
                  </p>

                  {marker.description && (
                    <p className="mt-2 text-sm">
                      {marker.description}
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}

        {isCommunityMode &&
          canManageMap && (
            <MapClickHandler
              isCreateMode={isCreateMode}
              onSelectPosition={
                handleSelectMarkerPosition
              }
            />
          )}

        <ZoomControl position="topright" />
      </MapContainer>

      {isCommunityMode && isCreateMode && (
        <div className="absolute left-1/2 top-4 z-900 -translate-x-1/2 rounded-xl bg-(--color-navy) px-4 py-2 text-sm font-bold text-white shadow-lg">
          Click a location on the map
        </div>
      )}

      {isCommunityMode &&
        canManageMap && (
          <div className="absolute bottom-5 left-5 z-[900] flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() =>
                setIsCreateMode(
                  (current) => !current,
                )
              }
              className="cursor-pointer rounded-xl bg-white px-4 py-2 text-sm font-bold text-(--color-navy) shadow-lg transition hover:bg-slate-100"
            >
              {isCreateMode
                ? "Cancel Create"
                : "Create Marker"}
            </button>

            <button
              type="button"
              disabled={!selectedMarkerId}
              onClick={
                handleRemoveSelectedMarker
              }
              className="cursor-pointer rounded-xl bg-(--color-wine-red) px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Remove Marker
            </button>

            <button
              type="button"
              disabled={!selectedZoneId}
              onClick={
                handleRemoveSelectedZone
              }
              className="cursor-pointer rounded-xl bg-(--color-wine-red) px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Remove Zone
            </button>
          </div>
        )}

      {isCommunityMode && (
        <CreateMarkerModal
          isOpen={pendingMarkerPosition !== null}
          latitude={
            pendingMarkerPosition?.latitude ?? null
          }
          longitude={
            pendingMarkerPosition?.longitude ?? null
          }
          onClose={() =>
            setPendingMarkerPosition(null)
          }
          onCreate={handleCreateMarker}
        />
      )}
    </section>
  );
}

export default LandingMap;