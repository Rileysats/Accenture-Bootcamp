// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserAccount, UserAccountClinic, Clinic, CheckIn, ClinicContact, AverageTime } = initSchema(schema);

export {
  UserAccount,
  UserAccountClinic,
  Clinic,
  CheckIn,
  ClinicContact,
  AverageTime
};