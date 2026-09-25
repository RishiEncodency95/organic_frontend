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
  '/website/home/sponsors-attend',
  '/website/home/testimonials-carousel',
] as const;

export type HomeApiEndpoint = (typeof HOME_API_ENDPOINTS)[number];

export type HomePageData = {
  apiResponses: Partial<Record<HomeApiEndpoint, any>>;
  blogs: any;
  partners: any;
};

export async function getHomePageData(): Promise<HomePageData> {
  const [apiValues, blogs, partners] = await Promise.all([
    Promise.all(HOME_API_ENDPOINTS.map((endpoint) => getSectionData(endpoint))),
    getSectionData('/blogs?showOnHome=true&status=published'),
    getSectionData('/v1/website/home/partners-brands'),
  ]);

  const apiResponses = HOME_API_ENDPOINTS.reduce<Partial<Record<HomeApiEndpoint, any>>>(
    (responses, endpoint, index) => {
      const value = apiValues[index];
      if (value !== null && value !== undefined) responses[endpoint] = value;
      return responses;
    },
    {},
  );

  return { apiResponses, blogs, partners };
}
