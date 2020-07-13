export interface School {
  name: string;
  shortName: string;
  requirements: Array<Requirement>;
  color: Color;
  logo: string;
}

export interface Course {
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