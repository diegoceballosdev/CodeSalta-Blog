import { envVars } from "@/config/envVars";
import qs from "qs";

interface FetchStrapiOptions {
  populate?: any;
  filters?: any;
  sort?: string | string[];
  pagination?: {
    page?: number;
    pageSize?: number;
  };
}

export async function fetchStrapi(
  path: string,
  options: FetchStrapiOptions,
  fetchOptions: RequestInit = {},
) {
  const query = qs.stringify(options, {
    encodeValuesOnly: true,
  });

  const url = `${envVars.STRAPI_URL}/api${path}${query ? `?${query}` : ""}`;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (envVars.STRAPI_TOKEN) {
    headers["Authorization"] = `Bearer ${envVars.STRAPI_TOKEN}`;
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers: {
      ...headers,
      ...fetchOptions.headers,
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.log(errorText);
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  return data;
}
