export interface FetchGeolocationResponse {
  name: string;
  local_names: Array<{
    [locale: string]: string;
  }>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
