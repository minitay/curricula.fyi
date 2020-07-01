import { ReqType, Requirement } from "./types";

export const cornell: Array<Requirement> = [
  {
    type: ReqType.Sequence,
    label: "Calculus Sequence",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Calculus I",
            code: "Math 1110",
            color: "rgba(255, 3, 3, 0.0125)",
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Calculus II",
            code: "Math 1120",
            color: "rgba(255, 3, 3, 0.025)",
          },
          {
            name: "Theoretical Calculus II",
            code: "Math 1220",
            color: "rgba(255, 3, 3, 0.025)",
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Linear Algebra",
            code: "Math 2210",
            color: "rgba(255, 3, 3, 0.05)",
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Sequence,
    label: "Introductory Programming",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Introduction to Computing Using Python",
            code: "CS 1110",
            color: "rgba(255, 3, 3, 0.1)",
          },
          {
            name: "Introduction to Computing Using MATLAB",
            code: "CS 1112",
            color: "rgba(255, 3, 3, 0.1)",
          },
          {
            name: "Introduction to Computing Using MATLAB and Robotics",
            code: "CS 1114",
            color: "rgba(255, 3, 3, 0.1)",
          },
          {
            name:
              "Introduction to Computational Science and Engineering Using MATLAB Graphical User Interfaces",
            code: "CS 1115",
            color: "rgba(255, 3, 3, 0.1)",
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Object Oriented Programming and Data Structures",
            code: "CS 2110",
            color: "rgba(255, 3, 3, 0.2)",
          },
          {
            name: "Object Oriented Design and Data Structures (Honors)",
            code: "CS 2112",
            color: "rgba(255, 3, 3, 0.2)",
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Sequence,
    label: "Computer Science Core",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Discrete Structures",
            code: "CS 2800",
            color: "rgba(255, 3, 3, 0.3)",
          },
          {
            name: "Discrete Structures (Honors)",
            code: "CS 2800",
            color: "rgba(255, 3, 3, 0.3)",
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Data Structures and Functional Programming",
            code: "CS 3110",
            color: "rgba(255, 3, 3, 0.4)",
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Computer Systems Organization and Programming",
            code: "CS 3410",
            color: "rgba(255, 3, 3, 0.5)",
          },
          {
            name: "Embedded Systems",
            code: "CS 3420",
            color: "rgba(255, 3, 3, 0.5)",
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Operating Systems",
            code: "CS 4410",
            color: "rgba(255, 3, 3, 0.6)",
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Introduction to Analysis of Algorithms",
            code: "CS 4820",
            color: "rgba(255, 3, 3, 0.7)",
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Group,
    courses: [
      {
        name: "Programming Languages and Logics",
        code: "CS 4110",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Numerical Analysis and Differential Equations",
        code: "CS 4210",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Introduction to Database Systems",
        code: "CS 4320",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Systems Programming",
        code: "CS 4414",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Computer Architecture",
        code: "CS 4420",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Introduction to Computer Graphics",
        code: "CS 4620",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Foundations of Artificial Intelligence",
        code: "CS 4700",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Computational Genetics and Genomics",
        code: "CS 4775",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Introduction to Machine Learning",
        code: "CS 4780",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Quantum Information Processing",
        code: "CS 4812",
        color: "rgba(255, 3, 3, 0.8)",
      },
      {
        name: "Applied Logic",
        code: "CS 4860",
        color: "rgba(255, 3, 3, 0.8)",
      },
    ],
    label: "Three of:",
  },
  {
    type: ReqType.Group,
    label: "One of:",
    courses: [
      {
        name: "Practicum in Database Systems",
        code: "CS 4321",
        color: "rgba(255, 3, 3, 0.9)",
      },
      {
        name: "Practicum in Operating Systems",
        code: "CS 4411",
        color: "rgba(255, 3, 3, 0.9)",
      },
      {
        name: "Computer Graphics Practicum",
        code: "CS 4621",
        color: "rgba(255, 3, 3, 0.9)",
      },
      {
        name: "Practicum in Artificial Intelligence",
        code: "CS 4701",
        color: "rgba(255, 3, 3, 0.9)",
      },
      {
        name: "Natural Language Processing",
        code: "CS 4740",
        color: "rgba(255, 3, 3, 0.9)",
      },
      {
        name: "Software Engineering",
        code: "CS 5150",
        color: "rgba(255, 3, 3, 0.9)",
      },
      {
        name: "Distributed Computing Principles",
        code: "CS 5414",
        color: "rgba(255, 3, 3, 0.9)",
      },
    ],
  },
];
