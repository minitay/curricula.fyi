export interface Course {
  code: string;
  name: string;
  color: string;
}

export enum ReqType {
  Or,
  Group,
  Sequence,
}

export type Requirement =
  | { type: ReqType.Or; courses: Array<Course> }
  | { type: ReqType.Group; courses: Array<Course>; label: string }
  | { type: ReqType.Sequence; requirements: Array<Requirement>; label: string };
