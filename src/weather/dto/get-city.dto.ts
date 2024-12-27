export class FetchCityError {
  errors: Array<{
    code: number;
    title: string;
    detail: string;
    status: number;
  }>;
}

export interface FetchCityResponse {
  meta: {
    count: number;
  };
  data: Array<{
    type: string;
    subType: string;
    name: string;
    iataCode: string;
    address: {
      countryCode: string;
      stateCode?: string;
    };
    geoCode: {
      latitude: number;
      longtitude: number;
    };
  }>;
}

export interface GetCityResponse {
  city: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}
