import axios from "axios";

import type {
    Community,
    CreateCommunityResponse,
    GetCommunityResponse,
    GetUserCommunityResponse,
    UserCommunityMembership,
} from "../types/landingPage.ts";

export async function createCommunity(
    name: string,
    createdById: string,
): Promise<Community> {
    const response =
        await axios.post<CreateCommunityResponse>(
            "http://localhost:3000/api/communities",
            {
                name,
                createdById,
            },
            {
                withCredentials: true,
            },
        );

    return response.data.data;
}

export async function getCommunityById(
    communityId: string,
): Promise<Community> {
    const response =
        await axios.get<GetCommunityResponse>(
            `http://localhost:3000/api/communities/${communityId}`,
            {
                withCredentials: true,
            },
        );

    return response.data.data;
}

export async function getUserCommunity(
    userId: string,
): Promise<UserCommunityMembership> {
    const response =
        await axios.get<GetUserCommunityResponse>(
            `http://localhost:3000/api/communities/member/${userId}`,
            {
                withCredentials: true,
            },
        );

    return response.data.data;
}