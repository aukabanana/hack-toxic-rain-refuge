export type RiskLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | "UNKNOWN";

export type ZoneType = "SAFE" | "TOXIC";

export type MarkerType =
  | "COMMUNITY_BASE"
  | "RESOURCE_LOCATION"
  | "MISSION_DESTINATION"
  | "SAFE_AREA"
  | "TOXIC_AREA"
  | "DANGER_AREA";

export interface CurrentUserMapLocation {
  id: string;
  username: string;
  latitude: number;
  longitude: number;
}

export interface MapZone {
  id: string;
  name: string;
  type: ZoneType;
  riskLevel: RiskLevel;
  description?: string;
  geoJson: string;
}

export interface MapMarker {
  id: string;
  name: string;
  type: MarkerType;
  latitude: number;
  longitude: number;
  description?: string;
  riskLevel: RiskLevel;
}

export interface CreateMapMarkerPayload {
  name: string;
  type: MarkerType;
  riskLevel: RiskLevel;
  description?: string;
}