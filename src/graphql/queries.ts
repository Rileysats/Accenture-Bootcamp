/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      locationID
      clinicID
      locationName
      locationCoordinate
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationID
        clinicID
        locationName
        locationCoordinate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
