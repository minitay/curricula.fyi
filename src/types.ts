export interface Plan {
  name: string;
  school: string;
  terms:  Course[][];
  courses: Course[];
}

export interface School {
  name: string;
  shortName: string;
  slug: string;
  requirements: Array<Requirement>;
  color: Color;
  courses: Course[];
  logo: string;
}

export interface Course {
  id?: string;
  code?: string;
  name: string;
}

export enum ReqType {
  One,
  Or,
  Group, // Used for stuff like "Five of" or "Two of"
  Sequence, // Used to group other requirements
  Text // For when a text box is needed
}


export type Requirement =
  | { type: ReqType.One, course: Course }
  | { type: ReqType.Or; courses: Array<Course> }
  | { type: ReqType.Group; courses: Array<Course>; label?: string }
  | { type: ReqType.Sequence; requirements: Array<Requirement>; label: string }
  | { type: ReqType.Text; label: string; content: string; courses?: Array<Course> };

export interface Color {
  r: number;
  g: number;
  b: number;
}

export enum LoadingState {
  Loading,
  Success,
  Failure
}