/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLocationInput = {
  id?: string | null,
  locationID: string,
  clinicID: string,
  locationName: string,
  locationCoordinate: string,
};

export type ModelLocationConditionInput = {
  locationID?: ModelIDInput | null,
  clinicID?: ModelIDInput | null,
  locationName?: ModelStringInput | null,
  locationCoordinate?: ModelStringInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  locationID: string,
  clinicID: string,
  locationName: string,
  locationCoordinate: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLocationInput = {
  locationID?: string | null,
  clinicID?: string | null,
  locationName?: string | null,
  locationCoordinate?: string | null,
};

export type DeleteLocationInput = {
  id: string,
};

export type ModelLocationFilterInput = {
  locationID?: ModelIDInput | null,
  clinicID?: ModelIDInput | null,
  locationName?: ModelStringInput | null,
  locationCoordinate?: ModelStringInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items?:  Array<Location | null > | null,
  nextToken?: string | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    locationID: string,
    clinicID: string,
    locationName: string,
    locationCoordinate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    locationID: string,
    clinicID: string,
    locationName: string,
    locationCoordinate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    locationID: string,
    clinicID: string,
    locationName: string,
    locationCoordinate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    locationID: string,
    clinicID: string,
    locationName: string,
    locationCoordinate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items?:  Array< {
      __typename: "Location",
      id: string,
      locationID: string,
      clinicID: string,
      locationName: string,
      locationCoordinate: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    locationID: string,
    clinicID: string,
    locationName: string,
    locationCoordinate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    locationID: string,
    clinicID: string,
    locationName: string,
    locationCoordinate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    locationID: string,
    clinicID: string,
    locationName: string,
    locationCoordinate: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
