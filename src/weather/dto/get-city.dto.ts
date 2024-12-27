export class GetCityError {
  errors: Array<{
    code: number;
    title: string;
    detail: string;
    status: number;
  }>;
}

export interface GetCityResponse {
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
