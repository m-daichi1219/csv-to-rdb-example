import { BloodType } from "../bloodType/types";

type UUIDv4 = string;

export interface User {
    userId: UUIDv4
    birthDate: Date
    bloodType: BloodType
}