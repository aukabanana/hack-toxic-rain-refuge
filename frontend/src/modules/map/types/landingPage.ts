export interface LandingPageRouteConfig {
  login: string;
  register: string;
}

export type UserRole =
  | "RESOURCE_TRACKER"
  | "RESOURCE_FINDER"
  | "SCOUT"
  | "SURVIVOR";


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

export interface UserCommunityMembership {
  id: string;
  role: UserRole;
  joinedAt: string;

  user: {
    id: string;
    username: string;
  };

  community: Community;
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

export interface GetUserCommunityResponse {
  success: boolean;
  message: string;
  data: UserCommunityMembership;
}