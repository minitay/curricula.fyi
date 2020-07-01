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
            color: { r: 255, g: 3, b: 3, a: 0.05 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Calculus II",
            code: "Math 1120",
            color: { r: 255, g: 3, b: 3, a: 0.1 },
          },
          {
            name: "Theoretical Calculus II",
            code: "Math 1220",
            color: { r: 255, g: 3, b: 3, a: 0.1 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Linear Algebra",
            code: "Math 2210",
            color: { r: 255, g: 3, b: 3, a: 0.15 },
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
            color: { r: 255, g: 3, b: 3, a: 0.2 },
          },
          {
            name: "Introduction to Computing Using MATLAB",
            code: "CS 1112",
            color: { r: 255, g: 3, b: 3, a: 0.2 },
          },
          {
            name: "Introduction to Computing Using MATLAB and Robotics",
            code: "CS 1114",
            color: { r: 255, g: 3, b: 3, a: 0.2 },
          },
          {
            name:
              "Introduction to Computational Science and Engineering Using MATLAB Graphical User Interfaces",
            code: "CS 1115",
            color: { r: 255, g: 3, b: 3, a: 0.2 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Object Oriented Programming and Data Structures",
            code: "CS 2110",
            color: { r: 255, g: 3, b: 3, a: 0.25 },
          },
          {
            name: "Object Oriented Design and Data Structures (Honors)",
            code: "CS 2112",
            color: { r: 255, g: 3, b: 3, a: 0.25 },
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
            color: { r: 255, g: 3, b: 3, a: 0.3 },
          },
          {
            name: "Discrete Structures (Honors)",
            code: "CS 2800",
            color: { r: 255, g: 3, b: 3, a: 0.3 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Data Structures and Functional Programming",
            code: "CS 3110",
            color: { r: 255, g: 3, b: 3, a: 0.35 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Computer Systems Organization and Programming",
            code: "CS 3410",
            color: { r: 255, g: 3, b: 3, a: 0.4 },
          },
          {
            name: "Embedded Systems",
            code: "CS 3420",
            color: { r: 255, g: 3, b: 3, a: 0.4 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Operating Systems",
            code: "CS 4410",
            color: { r: 255, g: 3, b: 3, a: 0.45 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Introduction to Analysis of Algorithms",
            code: "CS 4820",
            color: { r: 255, g: 3, b: 3, a: 0.5 },
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
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Numerical Analysis and Differential Equations",
        code: "CS 4210",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Introduction to Database Systems",
        code: "CS 4320",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Systems Programming",
        code: "CS 4414",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Computer Architecture",
        code: "CS 4420",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Introduction to Computer Graphics",
        code: "CS 4620",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Foundations of Artificial Intelligence",
        code: "CS 4700",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Computational Genetics and Genomics",
        code: "CS 4775",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Introduction to Machine Learning",
        code: "CS 4780",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Quantum Information Processing",
        code: "CS 4812",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
      },
      {
        name: "Applied Logic",
        code: "CS 4860",
        color: { r: 255, g: 3, b: 3, a: 0.6 },
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
        color: { r: 255, g: 3, b: 3, a: 0.65 },
      },
      {
        name: "Practicum in Operating Systems",
        code: "CS 4411",
        color: { r: 255, g: 3, b: 3, a: 0.65 },
      },
      {
        name: "Computer Graphics Practicum",
        code: "CS 4621",
        color: { r: 255, g: 3, b: 3, a: 0.65 },
      },
      {
        name: "Practicum in Artificial Intelligence",
        code: "CS 4701",
        color: { r: 255, g: 3, b: 3, a: 0.65 },
      },
      {
        name: "Natural Language Processing",
        code: "CS 4740",
        color: { r: 255, g: 3, b: 3, a: 0.65 },
      },
      {
        name: "Software Engineering",
        code: "CS 5150",
        color: { r: 255, g: 3, b: 3, a: 0.65 },
      },
      {
        name: "Distributed Computing Principles",
        code: "CS 5414",
        color: { r: 255, g: 3, b: 3, a: 0.65 },
      },
    ],
  },
];

export const nyuCAS: Array<Requirement> = [
  {
    type: ReqType.Sequence,
    label: "Math",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Calculus I",
            code: "MATH-UA 121",
            color: { r: 87, g: 6, b: 140, a: 0.1 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Discrete Mathematics",
            code: "MATH-UA 120",
            color: { r: 87, g: 6, b: 140, a: 0.2 },
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Sequence,
    label: "Core Requirements",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Introduction to Computer Science",
            code: "CSCI-UA 101",
            color: { r: 87, g: 6, b: 140, a: 0.3 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Data Structures",
            code: "CSCI-UA 102",
            color: { r: 87, g: 6, b: 140, a: 0.4 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Computer Systems Organization",
            code: "CSCI-UA 201",
            color: { r: 87, g: 6, b: 140, a: 0.5 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Operating Systems",
            code: "CSCI-UA 202",
            color: { r: 87, g: 6, b: 140, a: 0.6 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Basic Algorithms",
            code: "CSCI-UA 310",
            color: { r: 87, g: 6, b: 140, a: 0.7 },
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Group,
    label: "Five of:",
    courses: [
      {
        name: "Artificial Intelligence",
        code: "CSCI-UA 472",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Intro To Machine Learning",
        code: "CSCI-UA 473",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Processing Big Data for Analytics Applications",
        code: "CSCI-UA 476",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Special Topics: Applied Internet Technology",
        code: "CSCI-UA 480",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Special Topics: Computer Graphics",
        code: "CSCI-UA 480",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Special Topics: Intro to Social Networking",
        code: "CSCI-UA 480",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Special Topics: Parallel Computing",
        code: "CSCI-UA 480",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Special Topics: iOS Programming",
        code: "CSCI-UA 480",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Special Topics: Computer Networks",
        code: "CSCI-UA 480",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
      {
        name: "Special Topics: Natural Language Processing",
        code: "CSCI-UA 480",
        color: { r: 87, g: 6, b: 140, a: 0.8 },
      },
    ],
  },
];

export const cmu: Array<Requirement> = [
  {
    type: ReqType.Sequence,
    label: "Computer Science Core",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "First Year Immigration Course",
            code: "07-128",
            color: { r: 187, g: 0, b: 0, a: 0.05 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Principles of Imperative Computation",
            code: "15-122",
            color: { r: 187, g: 0, b: 0, a: 0.1 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Principles of Functional Programming",
            code: "15-150",
            color: { r: 187, g: 0, b: 0, a: 0.15 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Parallel and Sequential Data Structures and Algorithms",
            code: "15-210",
            color: { r: 187, g: 0, b: 0, a: 0.2 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Introduction to Computer Systems",
            code: "15-213",
            color: { r: 187, g: 0, b: 0, a: 0.25 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Great Ideas in Theoretical Computer Science",
            code: "15-251",
            color: { r: 187, g: 0, b: 0, a: 0.3 },
          },
        ],
      },
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Algorithm Design and Analysis",
            code: "15-451",
            color: { r: 187, g: 0, b: 0, a: 0.35 },
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Sequence,
    label: "One Logics/Languages elective",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Foundations of Programming Languages",
            code: "15-312",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
          {
            name: "Programming Language Semantics",
            code: "15-314",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
          {
            name: "Software Foundations of Security and Privacy",
            code: "15-316",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
          {
            name: "Constructive Logic",
            code: "15-317",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
          {
            name: "Bug Catching: Automated Program Verification",
            code: "15-414",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
          {
            name: "Logical Foundations of Cyber-Physical Systems",
            code: "15-424",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
          {
            name: "Program Analysis",
            code: "17-355",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
          {
            name: "Category Theory",
            code: "80-413",
            color: { r: 187, g: 0, b: 0, a: 0.4 },
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Sequence,
    label: "One Software Systems elective",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Operating System Design and Implementation",
            code: "15-410",
            color: { r: 187, g: 0, b: 0, a: 0.45 },
          },
          {
            name: "Compiler Design",
            code: "15-411",
            color: { r: 187, g: 0, b: 0, a: 0.45 },
          },
          {
            name: "Parallel Computer Architecture and Programming",
            code: "15-418",
            color: { r: 187, g: 0, b: 0, a: 0.45 },
          },
          {
            name: "Distributed Systems",
            code: "15-440",
            color: { r: 187, g: 0, b: 0, a: 0.45 },
          },
          {
            name: "Networking and the Internet",
            code: "15-441",
            color: { r: 187, g: 0, b: 0, a: 0.45 },
          },
          {
            name: "Database Systems",
            code: "15-445",
            color: { r: 187, g: 0, b: 0, a: 0.45 },
          },
        ],
      },
    ],
  },
  {
    type: ReqType.Sequence,
    label: "One Artificial Intelligence elective",
    requirements: [
      {
        type: ReqType.Or,
        courses: [
          {
            name: "Introduction to Machine Learning (SCS Majors)",
            code: "10-315",
            color: { r: 187, g: 0, b: 0, a: 0.5 },
          },
          {
            name: "Natural Language Processing",
            code: "11-411",
            color: { r: 187, g: 0, b: 0, a: 0.5 },
          },
          {
            name: "Introduction to Deep Learning",
            code: "11-485",
            color: { r: 187, g: 0, b: 0, a: 0.5 },
          },
          {
            name: "Artificial Intelligence: Representation and Problem Solving",
            code: "15-281",
            color: { r: 187, g: 0, b: 0, a: 0.5 },
          },
          {
            name: "Neural Computation",
            code: "15-386",
            color: { r: 187, g: 0, b: 0, a: 0.5 },
          },
          {
            name: "Robot Kinematics and Dynamics",
            code: "16-384",
            color: { r: 187, g: 0, b: 0, a: 0.5 },
          },
          {
            name: "Computer Vision",
            code: "16-385",
            color: { r: 187, g: 0, b: 0, a: 0.5 },
          },
        ],
      },
    ],
  },
];
