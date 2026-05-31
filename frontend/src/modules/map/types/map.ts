export type RiskLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | "UNKNOWN";

export type ZoneType =
  | "SAFE"
  | "TOXIC";

export type MarkerType =
  | "COMMUNITY_BASE"
  | "RESOURCE_LOCATION"
  | "MISSION_DESTINATION"
  | "SAFE_AREA"
  | "TOXIC_AREA"
  | "DANGER_AREA";

export interface MapMarker {
  id: string;
  name: string;
  type: MarkerType;
  latitude: number;
  longitude: number;
  description: string | null;
  riskLevel: RiskLevel;
  communityId: string;
  createdById: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMapMarkerPayload {
  name: string;
  type: MarkerType;
  latitude: number;
  longitude: number;
  description?: string;
  riskLevel: RiskLevel;
}

export interface GeoJsonPolygonFeature {
  type: "Feature";
  properties: Record<string, unknown>;

  geometry: {
    type: "Polygon";
    coordinates: [number, number][][];
  };
}

export interface MapZone {
  id: string;
  name: string;
  type: ZoneType;
  riskLevel: RiskLevel;
  description: string | null;
  geoJson: string | null;
  communityId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMapZonePayload {
  name: string;
  type: ZoneType;
  riskLevel: RiskLevel;
  description?: string;
  geoJson: GeoJsonPolygonFeature;
}

export interface GetMapMarkersResponse {
  success: boolean;
  message: string;
  data: MapMarker[];
}

export interface GetMapZonesResponse {
  success: boolean;
  message: string;
  data: MapZone[];
}

export interface DeleteMapItemResponse {
  success: boolean;
  message: string;

  data: {
    id: string;
  };
}

export interface CommunityCreator {
  id: string;
  username: string;
}

export interface Community {
  id: string;
  name: string;
  createdBy: CommunityCreator | null;
  createdAt: string;
  updatedAt: string;
}

export interface GetCommunityResponse {
  success: boolean;
  message: string;
  data: Community;
}

export interface CreateCommunityResponse {
  success: boolean;
  message: string;
  data: Community;
}