import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UserAccount {
  readonly id: string;
  readonly userID?: number;
  readonly userName?: string;
  readonly userDOB?: string;
  readonly address?: string;
  readonly phoneNumber?: string;
  readonly emailAddress?: string;
  readonly gender?: string;
  readonly UserAccountClinics?: (UserAccountClinic | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserAccount>);
  static copyOf(source: UserAccount, mutator: (draft: MutableModel<UserAccount>) => MutableModel<UserAccount> | void): UserAccount;
}

export declare class UserAccountClinic {
  readonly id: string;
  readonly useraccount: UserAccount;
  readonly clinic: Clinic;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserAccountClinic>);
  static copyOf(source: UserAccountClinic, mutator: (draft: MutableModel<UserAccountClinic>) => MutableModel<UserAccountClinic> | void): UserAccountClinic;
}

export declare class Clinic {
  readonly id: string;
  readonly clinicID?: number;
  readonly vaccinationID?: number;
  readonly clinicName?: string;
  readonly ClinicAddress?: string;
  readonly vaccineID?: string;
  readonly contactID?: number;
  readonly currentwaittime?: string;
  readonly walkINavailable?: string;
  readonly nextbooking?: string;
  readonly eligibility?: number;
  readonly checkInID?: number;
  readonly useraccounts?: (UserAccountClinic | null)[];
  readonly CheckIn?: CheckIn;
  readonly ClinicContacts?: (ClinicContact | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Clinic>);
  static copyOf(source: Clinic, mutator: (draft: MutableModel<Clinic>) => MutableModel<Clinic> | void): Clinic;
}

export declare class CheckIn {
  readonly id: string;
  readonly checkInID?: number;
  readonly name?: string;
  readonly phoneNumber?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CheckIn>);
  static copyOf(source: CheckIn, mutator: (draft: MutableModel<CheckIn>) => MutableModel<CheckIn> | void): CheckIn;
}

export declare class ClinicContact {
  readonly id: string;
  readonly contactID?: number;
  readonly contactName?: string;
  readonly phoneNumber?: string;
  readonly gender?: string;
  readonly clinicID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ClinicContact>);
  static copyOf(source: ClinicContact, mutator: (draft: MutableModel<ClinicContact>) => MutableModel<ClinicContact> | void): ClinicContact;
}

export declare class AverageTime {
  readonly id: string;
  readonly monday?: string;
  readonly Tuesday?: string;
  readonly wednesday?: string;
  readonly thursday?: string;
  readonly friday?: string;
  readonly saturday?: string;
  readonly sunday?: string;
  readonly Clinic?: Clinic;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AverageTime>);
  static copyOf(source: AverageTime, mutator: (draft: MutableModel<AverageTime>) => MutableModel<AverageTime> | void): AverageTime;
}