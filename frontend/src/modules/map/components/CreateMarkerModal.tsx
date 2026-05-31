import { useState, type FormEvent } from "react";

import type {
  CreateMapMarkerPayload,
  MarkerType,
  RiskLevel,
} from "../types/map";
import { number } from "framer-motion";

interface CreateMarkerModalProps {
  isOpen: boolean;
  latitude: number ;
  longitude: number ;
  onClose: () => void;
  onCreate: (payload: CreateMapMarkerPayload) => void;
}

interface MarkerTypeOption {
  label: string;
  value: MarkerType;
}

const MARKER_TYPE_OPTIONS: MarkerTypeOption[] = [
  {
    label: "Community Base",
    value: "COMMUNITY_BASE",
  },
  {
    label: "Resource Location",
    value: "RESOURCE_LOCATION",
  },
  {
    label: "Mission Destination",
    value: "MISSION_DESTINATION",
  },
  {
    label: "Safe Area",
    value: "SAFE_AREA",
  },
  {
    label: "Toxic Area",
    value: "TOXIC_AREA",
  },
  {
    label: "Danger Area",
    value: "DANGER_AREA",
  },
];

const RISK_LEVEL_OPTIONS: RiskLevel[] = [
  "LOW",
  "MEDIUM",
  "HIGH",
  "CRITICAL",
  "UNKNOWN",
];

function CreateMarkerModal({
  isOpen,
  latitude,
  longitude,
  onClose,
  onCreate,
}: CreateMarkerModalProps) {
  const [name, setName] = useState("");
  const [type, setType] =
    useState<MarkerType>("RESOURCE_LOCATION");

  const [riskLevel, setRiskLevel] =
    useState<RiskLevel>("UNKNOWN");

  const [description, setDescription] = useState("");

  function resetForm() {
    setName("");
    setType("RESOURCE_LOCATION");
    setRiskLevel("UNKNOWN");
    setDescription("");
  }

  function handleClose() {
    resetForm();
    onClose();
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedName = name.trim();

    if (!normalizedName) return;

    onCreate({
      name: normalizedName,
      type,
      riskLevel,
      description: description.trim() || "",
      latitude,
      longitude
    });

    resetForm();
  }

  if (!isOpen || latitude === null || longitude === null) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-[1100] flex items-center justify-center bg-[rgba(var(--color-dark-rgb),0.25)] px-4"
      role="presentation"
      onMouseDown={handleClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-marker-title"
        className="w-full max-w-md rounded-2xl bg-(--color-off-white) p-6 shadow-[0_16px_40px_rgba(var(--color-dark-rgb),0.24)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <h2
          id="create-marker-title"
          className="text-xl font-bold text-(--color-navy)"
        >
          Create Marker
        </h2>

        <p className="mt-2 text-xs text-[rgba(var(--color-dark-rgb),0.6)]">
          Coordinates: {latitude.toFixed(5)}, {longitude.toFixed(5)}
        </p>

        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="marker-name"
              className="block text-sm font-bold text-(--color-dark)"
            >
              Marker name
            </label>

            <input
              id="marker-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter marker name"
              autoFocus
              className="mt-2 w-full rounded-xl border border-black/25 bg-white px-4 py-3 outline-none focus:border-(--color-navy)"
            />
          </div>

          <div>
            <label
              htmlFor="marker-type"
              className="block text-sm font-bold text-(--color-dark)"
            >
              Marker type
            </label>

            <select
              id="marker-type"
              value={type}
              onChange={(event) =>
                setType(event.target.value as MarkerType)
              }
              className="mt-2 w-full rounded-xl border border-black/25 bg-white px-4 py-3 outline-none focus:border-(--color-navy)"
            >
              {MARKER_TYPE_OPTIONS.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="marker-risk-level"
              className="block text-sm font-bold text-(--color-dark)"
            >
              Risk level
            </label>

            <select
              id="marker-risk-level"
              value={riskLevel}
              onChange={(event) =>
                setRiskLevel(event.target.value as RiskLevel)
              }
              className="mt-2 w-full rounded-xl border border-black/25 bg-white px-4 py-3 outline-none focus:border-(--color-navy)"
            >
              {RISK_LEVEL_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="marker-description"
              className="block text-sm font-bold text-(--color-dark)"
            >
              Description
            </label>

            <textarea
              id="marker-description"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Optional marker details"
              rows={3}
              className="mt-2 w-full resize-none rounded-xl border border-black/25 bg-white px-4 py-3 outline-none focus:border-(--color-navy)"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={handleClose}
              className="cursor-pointer rounded-xl border border-(--color-navy) px-5 py-2 text-sm font-bold text-(--color-navy) transition hover:bg-black/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!name.trim()}
              className="cursor-pointer rounded-xl bg-blue-950 px-5 py-2 text-sm font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateMarkerModal;