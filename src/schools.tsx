import { ReqType, Requirement, School } from "./types";

export const cornell: School = {
  name: "Cornell University",
  color: { r: 255, g: 3, b: 3 },
  requirements: [
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
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Calculus II",
              code: "Math 1120",
            },
            {
              name: "Theoretical Calculus II",
              code: "Math 1220",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Linear Algebra",
              code: "Math 2210",
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
            },
            {
              name: "Introduction to Computing Using MATLAB",
              code: "CS 1112",
            },
            {
              name: "Introduction to Computing Using MATLAB and Robotics",
              code: "CS 1114",
            },
            {
              name:
                "Introduction to Computational Science and Engineering Using MATLAB Graphical User Interfaces",
              code: "CS 1115",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Object Oriented Programming and Data Structures",
              code: "CS 2110",
            },
            {
              name: "Object Oriented Design and Data Structures (Honors)",
              code: "CS 2112",
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
            },
            {
              name: "Discrete Structures (Honors)",
              code: "CS 2800",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Data Structures and Functional Programming",
              code: "CS 3110",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Computer Systems Organization and Programming",
              code: "CS 3410",
            },
            {
              name: "Embedded Systems",
              code: "CS 3420",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Operating Systems",
              code: "CS 4410",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Introduction to Analysis of Algorithms",
              code: "CS 4820",
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
        },
        {
          name: "Numerical Analysis and Differential Equations",
          code: "CS 4210",
        },
        {
          name: "Introduction to Database Systems",
          code: "CS 4320",
        },
        {
          name: "Systems Programming",
          code: "CS 4414",
        },
        {
          name: "Computer Architecture",
          code: "CS 4420",
        },
        {
          name: "Introduction to Computer Graphics",
          code: "CS 4620",
        },
        {
          name: "Foundations of Artificial Intelligence",
          code: "CS 4700",
        },
        {
          name: "Computational Genetics and Genomics",
          code: "CS 4775",
        },
        {
          name: "Introduction to Machine Learning",
          code: "CS 4780",
        },
        {
          name: "Quantum Information Processing",
          code: "CS 4812",
        },
        {
          name: "Applied Logic",
          code: "CS 4860",
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
        },
        {
          name: "Practicum in Operating Systems",
          code: "CS 4411",
        },
        {
          name: "Computer Graphics Practicum",
          code: "CS 4621",
        },
        {
          name: "Practicum in Artificial Intelligence",
          code: "CS 4701",
        },
        {
          name: "Natural Language Processing",
          code: "CS 4740",
        },
        {
          name: "Software Engineering",
          code: "CS 5150",
        },
        {
          name: "Distributed Computing Principles",
          code: "CS 5414",
        },
      ],
    },
  ],
};

export const nyuCAS: School = {
  name: "New York University: College of Arts & Sciences",
  color: { r: 87, g: 6, b: 140 },
  requirements: [
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
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Discrete Mathematics",
              code: "MATH-UA 120",
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
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Data Structures",
              code: "CSCI-UA 102",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Computer Systems Organization",
              code: "CSCI-UA 201",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Operating Systems",
              code: "CSCI-UA 202",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Basic Algorithms",
              code: "CSCI-UA 310",
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
        },
        {
          name: "Intro To Machine Learning",
          code: "CSCI-UA 473",
        },
        {
          name: "Processing Big Data for Analytics Applications",
          code: "CSCI-UA 476",
        },
        {
          name: "Special Topics: Applied Internet Technology",
          code: "CSCI-UA 480",
        },
        {
          name: "Special Topics: Computer Graphics",
          code: "CSCI-UA 480",
        },
        {
          name: "Special Topics: Intro to Social Networking",
          code: "CSCI-UA 480",
        },
        {
          name: "Special Topics: Parallel Computing",
          code: "CSCI-UA 480",
        },
        {
          name: "Special Topics: iOS Programming",
          code: "CSCI-UA 480",
        },
        {
          name: "Special Topics: Computer Networks",
          code: "CSCI-UA 480",
        },
        {
          name: "Special Topics: Natural Language Processing",
          code: "CSCI-UA 480",
        },
      ],
    },
  ],
};

export const cmu: School = {
  name: "Carnegie Mellon University",
  color: { r: 187, g: 0, b: 0 },
  requirements: [
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
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Principles of Imperative Computation",
              code: "15-122",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Principles of Functional Programming",
              code: "15-150",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Parallel and Sequential Data Structures and Algorithms",
              code: "15-210",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Introduction to Computer Systems",
              code: "15-213",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Great Ideas in Theoretical Computer Science",
              code: "15-251",
            },
          ],
        },
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Algorithm Design and Analysis",
              code: "15-451",
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
            },
            {
              name: "Programming Language Semantics",
              code: "15-314",
            },
            {
              name: "Software Foundations of Security and Privacy",
              code: "15-316",
            },
            {
              name: "Constructive Logic",
              code: "15-317",
            },
            {
              name: "Bug Catching: Automated Program Verification",
              code: "15-414",
            },
            {
              name: "Logical Foundations of Cyber-Physical Systems",
              code: "15-424",
            },
            {
              name: "Program Analysis",
              code: "17-355",
            },
            {
              name: "Category Theory",
              code: "80-413",
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
            },
            {
              name: "Compiler Design",
              code: "15-411",
            },
            {
              name: "Parallel Computer Architecture and Programming",
              code: "15-418",
            },
            {
              name: "Distributed Systems",
              code: "15-440",
            },
            {
              name: "Networking and the Internet",
              code: "15-441",
            },
            {
              name: "Database Systems",
              code: "15-445",
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
            },
            {
              name: "Natural Language Processing",
              code: "11-411",
            },
            {
              name: "Introduction to Deep Learning",
              code: "11-485",
            },
            {
              name:
                "Artificial Intelligence: Representation and Problem Solving",
              code: "15-281",
            },
            {
              name: "Neural Computation",
              code: "15-386",
            },
            {
              name: "Robot Kinematics and Dynamics",
              code: "16-384",
            },
            {
              name: "Computer Vision",
              code: "16-385",
            },
          ],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "One Domain elective",
      requirements: [
        {
          type: ReqType.Or,
          courses: [
            {
              name: "Great Ideas in Computational Biology",
              code: "02-251",
            },
            {
              name: "Designing Human Centered Software",
              code: "05-391",
            },
            {
              name: "Introduction to Computer Music",
              code: "15-322",
            },
            {
              name: "Introduction to Computer Security",
              code: "15-330",
            },
            {
              name: "Undergraduate Complexity Theory",
              code: "15-455",
            },
            {
              name: "Computer Graphics",
              code: "15-462",
            },
            {
              name: "Foundations of Software Engineering",
              code: "17-313",
            },
          ],
        },
      ],
    },
    {
      type: ReqType.Text,
      label: "Two electives",
      content:
        "These electives can be from any SCS department; 200-level or above",
      courses: [],
    },
  ],
};
