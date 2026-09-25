import 'server-only';

import { getSectionData } from './serverData';

export const HOME_API_ENDPOINTS = [
  '/website/home/home-hero',
  '/website/home/audience-strip',
  '/website/home/introduction-section',
  '/website/home/global-platform',
  '/website/home/why-participate',
  '/website/home/conference-seminars',
  '/website/home/expo-categories',
  '/website/home/beyond-exhibition',
] as const;

export type HomeApiEndpoint = (typeof HOME_API_ENDPOINTS)[number];

export type HomePageData = {
  apiResponses: Partial<Record<HomeApiEndpoint, any>>;
};

export async function getHomePageData(): Promise<HomePageData> {
  const apiValues = await Promise.all(
    HOME_API_ENDPOINTS.map((endpoint) => getSectionData(endpoint)),
  );

  const apiResponses = HOME_API_ENDPOINTS.reduce<Partial<Record<HomeApiEndpoint, any>>>(
    (responses, endpoint, index) => {
      const value = apiValues[index];
      if (value !== null && value !== undefined) responses[endpoint] = value;
      return responses;
    },
    {},
  );

  return { apiResponses };
}
