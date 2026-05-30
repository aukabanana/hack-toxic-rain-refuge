import axios from "axios";

import type {
    CreateMapMarkerPayload,
    CreateMapZonePayload,
    DeleteMapItemResponse,
    GetMapMarkersResponse,
    GetMapZonesResponse,
    MapMarker,
    MapZone,
} from "../types/map.ts";

export async function getMapMarkers(
    communityId: string,
): Promise<MapMarker[]> {
    const response =
        await axios.get<GetMapMarkersResponse>(
            "http://localhost:3000/api/map/markers",
            {
                params: {
                    communityId,
                },
                withCredentials: true,
            },
        );

    return response.data.data;
}

export async function createMapMarker(
    communityId: string,
    payload: CreateMapMarkerPayload,
): Promise<MapMarker> {
    const response =
        await axios.post<{
            success: boolean;
            message: string;
            data: MapMarker;
        }>(
            "http://localhost:3000/api/map/markers",
            {
                communityId,
                ...payload,
            },
            {
                withCredentials: true,
            },
        );

    return response.data.data;
}

export async function deleteMapMarker(
    markerId: string,
): Promise<string> {
    const response =
        await axios.delete<DeleteMapItemResponse>(
            `http://localhost:3000/api/map/markers/${markerId}`,
            {
                withCredentials: true,
            },
        );

    return response.data.data.id;
}

export async function getMapZones(
    communityId: string,
): Promise<MapZone[]> {
    const response =
        await axios.get<GetMapZonesResponse>(
            "http://localhost:3000/api/map/zones",
            {
                params: {
                    communityId,
                },
                withCredentials: true,
            },
        );

    return response.data.data;
}

export async function createMapZone(
    communityId: string,
    payload: CreateMapZonePayload,
): Promise<MapZone> {
    const response =
        await axios.post<{
            success: boolean;
            message: string;
            data: MapZone;
        }>(
            "http://localhost:3000/api/map/zones",
            {
                communityId,
                ...payload,
            },
            {
                withCredentials: true,
            },
        );

    return response.data.data;
}

export async function deleteMapZone(
    zoneId: string,
): Promise<string> {
    const response =
        await axios.delete<DeleteMapItemResponse>(
            `http://localhost:3000/api/map/zones/${zoneId}`,
            {
                withCredentials: true,
            },
        );

    return response.data.data.id;
}