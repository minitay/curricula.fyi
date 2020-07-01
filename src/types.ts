export interface Course {
  code: string;
  name: string;
  color: Color;
}

export enum ReqType {
  Or,
  Group, // Used for stuff like "Five of" or "Two of"
  Sequence, // Used to group other requirements
  Text // For when a text box is needed
}

export type Requirement =
  | { type: ReqType.Or; courses: Array<Course> }
  | { type: ReqType.Group; courses: Array<Course>; label: string }
  | { type: ReqType.Sequence; requirements: Array<Requirement>; label: string }
  | { type: ReqType.Text; label: string; content: string };

export interface Color {
  r: number;
  g: number;
  b: number;
  a: number
}