import type {
    CurrentUserMapLocation,
    MapMarker,
    MapZone,
} from "../types/map.ts";

export const CURRENT_USER_LOCATION: CurrentUserMapLocation = {
    id: "mock-user-001",
    username: "Current survivor",
    latitude: 13.7563,
    longitude: 100.5018,
};

export const MOCK_MAP_MARKERS: MapMarker[] = [
    {
        id: "marker-base-001",
        name: "Community A Shelter",
        type: "COMMUNITY_BASE",
        latitude: 13.7563,
        longitude: 100.5018,
        description: "Main survivor shelter",
        riskLevel: "LOW",
    },
    {
        id: "marker-food-001",
        name: "Food Storage Point",
        type: "RESOURCE_LOCATION",
        latitude: 13.7615,
        longitude: 100.514,
        description: "Possible food supplies",
        riskLevel: "MEDIUM",
    },
    {
        id: "marker-danger-001",
        name: "Toxic Hazard North",
        type: "DANGER_AREA",
        latitude: 13.769,
        longitude: 100.491,
        description: "High toxic exposure detected",
        riskLevel: "CRITICAL",
    },
    {
        id: "marker-danger-002",
        name: "Toxic Hazard East",
        type: "DANGER_AREA",
        latitude: 13.747,
        longitude: 100.521,
        description: "Avoid entering without protective equipment",
        riskLevel: "HIGH",
    },
];


export const MOCK_MAP_ZONES: MapZone[] = [
    {
        id: "zone-toxic-001",
        name: "Northern Toxic Rain Zone",
        type: "TOXIC",
        riskLevel: "CRITICAL",
        description:
            "Heavy toxic rain reported in this area. Protective equipment is required.",
        geoJson: JSON.stringify({
            type: "Feature",
            properties: {
                name: "Northern Toxic Rain Zone",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [100.4975, 13.7645],
                        [100.5058, 13.7652],
                        [100.5092, 13.7608],
                        [100.5067, 13.7568],
                        [100.4994, 13.7573],
                        [100.4961, 13.7608],
                        [100.4975, 13.7645],
                    ],
                ],
            },
        }),
    },
    {
        id: "zone-toxic-002",
        name: "Eastern Contamination Area",
        type: "TOXIC",
        riskLevel: "HIGH",
        description:
            "Air contamination has been detected. Avoid staying in this area for long periods.",
        geoJson: JSON.stringify({
            type: "Feature",
            properties: {
                name: "Eastern Contamination Area",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [100.5105, 13.7542],
                        [100.5168, 13.7558],
                        [100.5183, 13.7507],
                        [100.5144, 13.7476],
                        [100.5089, 13.7491],
                        [100.5105, 13.7542],
                    ],
                ],
            },
        }),
    },
    {
        id: "zone-toxic-003",
        name: "Western Toxic Boundary",
        type: "TOXIC",
        riskLevel: "MEDIUM",
        description:
            "Toxic exposure risk is moderate. Scouts should verify the boundary before travel.",
        geoJson: JSON.stringify({
            type: "Feature",
            properties: {
                name: "Western Toxic Boundary",
            },
            geometry: {
                type: "Polygon",
                coordinates: [
                    [
                        [100.4869, 13.7568],
                        [100.4931, 13.7579],
                        [100.4944, 13.7527],
                        [100.4902, 13.7498],
                        [100.4853, 13.7521],
                        [100.4869, 13.7568],
                    ],
                ],
            },
        }),
    },
];

