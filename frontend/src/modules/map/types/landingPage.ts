export interface LandingPageRouteConfig {
  login: string;
  register: string;
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