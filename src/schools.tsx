import { Course, ReqType, School } from "./types";
import cornellLogo from "./cornell.png";
import nyuLogo from "./nyu.png";
import cmuLogo from "./cmu.png";
import northeasternLogo from "./northeastern.png";

export const cornellCourses: Course[] = [
  {
    name: "Calculus I",
    code: "Math 1110",
  },
  {
    name: "Calculus II",
    code: "Math 1120",
  },
  {
    name: "Theoretical Calculus II",
    code: "Math 1220",
  },
  {
    name: "Linear Algebra",
    code: "Math 2210",
  },
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
  {
    name: "Object Oriented Programming and Data Structures",
    code: "CS 2110",
  },
  {
    name: "Object Oriented Design and Data Structures (Honors)",
    code: "CS 2112",
  },
  {
    name: "Discrete Structures",
    code: "CS 2800",
  },
  {
    name: "Discrete Structures (Honors)",
    code: "CS 2800",
  },
  {
    name: "Data Structures and Functional Programming",
    code: "CS 3110",
  },
  {
    name: "Computer Systems Organization and Programming",
    code: "CS 3410",
  },
  {
    name: "Embedded Systems",
    code: "CS 3420",
  },
  {
    name: "Operating Systems",
    code: "CS 4410",
  },
  {
    name: "Introduction to Analysis of Algorithms",
    code: "CS 4820",
  },
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
];

const cornell: School = {
  name: "Cornell University",
  shortName: "Cornell",
  color: { r: 255, g: 3, b: 3 },
  logo: cornellLogo,
  courses: cornellCourses,
  requirements: [
    {
      type: ReqType.Sequence,
      label: "Calculus Sequence",
      requirements: [
        {
          type: ReqType.One,
          course: cornellCourses[0],
        },
        {
          type: ReqType.Or,
          courses: [cornellCourses[1], cornellCourses[2]],
        },
        {
          type: ReqType.One,
          course: cornellCourses[3],
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
            cornellCourses[4],
            cornellCourses[5],
            cornellCourses[6],
            cornellCourses[7],
          ],
        },
        {
          type: ReqType.Or,
          courses: [cornellCourses[8], cornellCourses[9]],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Computer Science Core",
      requirements: [
        {
          type: ReqType.Or,
          courses: [cornellCourses[10], cornellCourses[11]],
        },
        {
          type: ReqType.One,
          course: cornellCourses[12],
        },
        {
          type: ReqType.Or,
          courses: [cornellCourses[13], cornellCourses[14]],
        },
        {
          type: ReqType.One,
          course: cornellCourses[15],
        },
        {
          type: ReqType.One,
          course: cornellCourses[16],
        },
      ],
    },
    {
      type: ReqType.Group,
      courses: [
        cornellCourses[17],
        cornellCourses[18],
        cornellCourses[19],
        cornellCourses[20],
        cornellCourses[21],
        cornellCourses[22],
        cornellCourses[23],
        cornellCourses[24],
        cornellCourses[25],
        cornellCourses[26],
        cornellCourses[27],
      ],
      label: "Three of:",
    },
    {
      type: ReqType.Group,
      label: "One of:",
      courses: [
        cornellCourses[28],
        cornellCourses[29],
        cornellCourses[30],
        cornellCourses[31],
        cornellCourses[32],
        cornellCourses[33],
        cornellCourses[34],
      ],
    },
  ],
};

const nyuCourses: Course[] = [
  {
    name: "Calculus I",
    code: "MATH-UA 121",
  },
  {
    name: "Discrete Mathematics",
    code: "MATH-UA 120",
  },
  {
    name: "Introduction to Computer Science",
    code: "CSCI-UA 101",
  },
  {
    name: "Data Structures",
    code: "CSCI-UA 102",
  },
  {
    name: "Computer Systems Organization",
    code: "CSCI-UA 201",
  },
  {
    name: "Operating Systems",
    code: "CSCI-UA 202",
  },
  { name: "Basic Algorithms", code: "CSCI-UA 310" },
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
];

const nyuCAS: School = {
  name: "New York University: College of Arts & Sciences",
  shortName: "NYU CAS",
  logo: nyuLogo,
  color: { r: 87, g: 6, b: 140 },
  courses: nyuCourses,
  requirements: [
    {
      type: ReqType.Sequence,
      label: "Math",
      requirements: [
        {
          type: ReqType.One,
          course: nyuCourses[0],
        },
        {
          type: ReqType.One,
          course: nyuCourses[1],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Core Requirements",
      requirements: [
        {
          type: ReqType.One,
          course: nyuCourses[2],
        },
        {
          type: ReqType.One,
          course: nyuCourses[3],
        },
        {
          type: ReqType.One,
          course: nyuCourses[4],
        },
        {
          type: ReqType.One,
          course: nyuCourses[5],
        },
        {
          type: ReqType.One,
          course: nyuCourses[6],
        },
      ],
    },
    {
      type: ReqType.Group,
      label: "Five of:",
      courses: [
        nyuCourses[7],
        nyuCourses[8],
        nyuCourses[9],
        nyuCourses[10],
        nyuCourses[11],
        nyuCourses[12],
        nyuCourses[13],
        nyuCourses[14],
        nyuCourses[15],
        nyuCourses[16],
      ],
    },
  ],
};

const cmuCourses: Course[] = [
  {
    name: "Mathematical Foundations for Computer Science",
    code: "15-151",
  },
  { name: "Concepts of Mathematics", code: "21-127" },
  { name: "Mathematical Concepts and Proofs", code: "21-128" },
  {
    name: "Integration and Approximation",
    code: "21-122",
  },
  {
    name: "Matrices and Linear Transformations",
    code: "21-241",
  },
  {
    name: "Matrix Theory",
    code: "21-242",
  },
  {
    name: "Calculus in Three Dimensions",
    code: "21-259",
  },
  {
    name: "Probability and Computing",
    code: "15-259",
  },
  {
    name: "Probability",
    code: "21-325",
  },
  {
    name: "Probability Theory for Computer Scientists",
    code: "36-218",
  },
  {
    name:
      "Introduction to Probability Theory—Introduction to Statistical Inference",
    code: "36-225—36-226",
  },
  {
    name: "First Year Immigration Course",
    code: "07-128",
  },
  {
    name: "Principles of Imperative Computation",
    code: "15-122",
  },
  {
    name: "Principles of Functional Programming",
    code: "15-150",
  },
  {
    name: "Parallel and Sequential Data Structures and Algorithms",
    code: "15-210",
  },
  {
    name: "Introduction to Computer Systems",
    code: "15-213",
  },
  {
    name: "Great Ideas in Theoretical Computer Science",
    code: "15-251",
  },
  {
    name: "Algorithm Design and Analysis",
    code: "15-451",
  },
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
    name: "Artificial Intelligence: Representation and Problem Solving",
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
  {
    name: "Research and Innovation in Computer Science",
    code: "15-300",
  },
  { name: "Ethics and Policy Issues in Computing", code: "17-200" },
  { name: "Writing for the Professions", code: "76-270" },
];

const cmu: School = {
  name: "Carnegie Mellon University",
  shortName: "CMU",
  logo: cmuLogo,
  color: { r: 187, g: 0, b: 0 },
  courses: cmuCourses,
  requirements: [
    {
      type: ReqType.Sequence,
      label: "Mathematics",
      requirements: [
        {
          type: ReqType.Or,
          courses: [cmuCourses[0], cmuCourses[1], cmuCourses[2]],
        },
        {
          type: ReqType.One,
          course: cmuCourses[3],
        },
        {
          type: ReqType.Or,
          courses: [cmuCourses[4], cmuCourses[5]],
        },
        {
          type: ReqType.One,
          course: cmuCourses[6],
        },
        {
          type: ReqType.Or,
          courses: [
            cmuCourses[7],
            cmuCourses[8],
            cmuCourses[9],
            cmuCourses[10],
          ],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Computer Science Core",
      requirements: [
        {
          type: ReqType.One,
          course: cmuCourses[11],
        },
        {
          type: ReqType.One,
          course: cmuCourses[12],
        },
        {
          type: ReqType.One,
          course: cmuCourses[13],
        },
        {
          type: ReqType.One,
          course: cmuCourses[14],
        },
        {
          type: ReqType.One,
          course: cmuCourses[15],
        },
        {
          type: ReqType.One,
          course: cmuCourses[16],
        },
        {
          type: ReqType.One,
          course: cmuCourses[17],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "One Logics/Languages elective",
      requirements: [
        {
          type: ReqType.Group,
          courses: [
            cmuCourses[18],
            cmuCourses[19],
            cmuCourses[20],
            cmuCourses[21],
            cmuCourses[22],
            cmuCourses[23],
            cmuCourses[24],
            cmuCourses[25],
          ],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "One Software Systems elective",
      requirements: [
        {
          type: ReqType.Group,
          courses: [
            cmuCourses[26],
            cmuCourses[27],
            cmuCourses[28],
            cmuCourses[29],
            cmuCourses[30],
            cmuCourses[31],
          ],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "One Artificial Intelligence elective",
      requirements: [
        {
          type: ReqType.Group,
          courses: [
            cmuCourses[32],
            cmuCourses[33],
            cmuCourses[34],
            cmuCourses[35],
            cmuCourses[36],
            cmuCourses[37],
            cmuCourses[38],
          ],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "One Domain elective",
      requirements: [
        {
          type: ReqType.Group,
          courses: [
            cmuCourses[39],
            cmuCourses[40],
            cmuCourses[41],
            cmuCourses[42],
            cmuCourses[43],
            cmuCourses[44],
            cmuCourses[45],
          ],
        },
      ],
    },
    {
      type: ReqType.Text,
      label: "Two electives",
      content:
        "These electives can be from any SCS department; 200-level or above",
      courses: [{ name: "Elective 1" }, { name: "Elective 2" }],
    },
    {
      type: ReqType.Sequence,
      label: "One Technical Communications Course",
      requirements: [
        {
          type: ReqType.Group,
          courses: [cmuCourses[46], cmuCourses[47], cmuCourses[48]],
        },
      ],
    },
  ],
};

const neuCourses: Course[] = [
  {
    name: "Calculus 1 for Science and Engineering",
    code: "MATH 1341",
  },
  {
    name: "Introduction to Mathematical Reasoning",
    code: "MATH 1365",
  },
  { name: "Leadership Skill Development", code: "CS 1200" },
  {
    name: "Professional Development for Khoury Co-op",
    code: "CS 1210",
  },
  { name: "Discrete Structures", code: "CS 1800" },
  {
    name: "Fundamentals of Computer Science 1",
    code: "CS 2500",
  },
  {
    name: "Fundamentals of Computer Science 2",
    code: "CS 2510",
  },
  {
    name: "Mathematics of Data Models",
    code: "CS 2810",
  },
  { name: "Algorithms and Data", code: "CS 3000" },
  { name: "Object-Oriented Design", code: "CS 3500" },
  { name: "Computer Systems", code: "CS 3650" },
  { name: "Theory of Computation", code: "CS 3800" },
  { name: "Software Development", code: "CS 4500" },
  { name: "Foundations of Cybersecurity", code: "CY 2550" },
  { name: "Systems Security", code: "CY 3740" },
  { name: "Network Security", code: "CY 4740" },
  { name: "The Eloquent Presenter", code: "THTR 1170" },
  { name: "Artificial Intelligence", code: "CS 4100" },
  {
    name: "Machine Learning and Data Mining 1",
    code: "DS 4400",
  },
  { name: "Natural Language Processing", code: "CS 4120" },
  { name: "Game Artificial Intelligence", code: "CS 4150" },
  { name: "Robotic Science and Systems", code: "CS 4610" },
  { name: "Information Retrieval", code: "IS 4200" },
  { name: "Machine Learning and Data Mining 2", code: "DS 4420" },
  { name: "Cognition", code: "PSYC 3466" },
  { name: "Logic and Computation", code: "CS 2800" },
  { name: "Computer-Aided Reasoning", code: "CS 4820" },
  {
    name: "Advanced Theory of Computation",
    code: "CS 4805",
  },
  { name: "Advanced Algorithms", code: "CS 4810" },
  { name: "Advanced Theory of Computation", code: "CS 4805" },
  { name: "Advanced Algorithms", code: "CS 4810" },
  { name: "Computer-Aided Reasoning", code: "CS 4820" },
  {
    name: "System Specification, Verification, and Synthesis",
    code: "CS 4830",
  },
  {
    name: "Introduction to Computer Science Research",
    code: "CS 3950",
  },
  { name: "Cryptograph", code: "Cryptography CY 4770" },
  { name: "Human Computer Interaction", code: "IS 4300" },
  {
    name: "Empirical Research Methods",
    code: "IS 4800",
  },
  { name: "Principles of Information Science", code: "IS 2000" },
  { name: "Social Information Systems", code: "IS 4700" },
  { name: "Natural Language Processing", code: "CS 4120" },
  { name: "Mobile Application Development", code: "CS 4520" },
  { name: "Web Development", code: "CS 4550" },
  {
    name: "Information Presentation and Visualization",
    code: "DS 4200",
  },
];

const northeastern: School = {
  name: "Northeastern University",
  shortName: "Northeastern",
  logo: northeasternLogo,
  color: { r: 212, g: 27, b: 44 },
  courses: neuCourses,
  requirements: [
    {
      type: ReqType.Sequence,
      label: "Mathematics",
      requirements: [
        {
          type: ReqType.One,
          course: neuCourses[0],
        },
        {
          type: ReqType.One,
          course: neuCourses[1],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Computer Science Overview",
      requirements: [
        {
          type: ReqType.One,
          course: neuCourses[2],
        },
        {
          type: ReqType.One,
          course: neuCourses[3],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Computer Science Fundamental Courses",
      requirements: [
        {
          type: ReqType.One,
          course: neuCourses[4],
        },
        {
          type: ReqType.One,
          course: neuCourses[5],
        },
        {
          type: ReqType.One,
          course: neuCourses[6],
        },
        {
          type: ReqType.One,
          course: neuCourses[7],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Computer Science Required Courses",
      requirements: [
        {
          type: ReqType.One,
          course: neuCourses[8],
        },
        {
          type: ReqType.One,
          course: neuCourses[9],
        },
        {
          type: ReqType.One,
          course: neuCourses[10],
        },
        {
          type: ReqType.One,
          course: neuCourses[11],
        },
        {
          type: ReqType.One,
          course: neuCourses[12],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Security Required Course",
      requirements: [
        {
          type: ReqType.Or,
          courses: [neuCourses[13], neuCourses[14], neuCourses[15]],
        },
      ],
    },
    {
      type: ReqType.Sequence,
      label: "Presentation Requirement",
      requirements: [
        {
          type: ReqType.One,
          course: neuCourses[16],
        },
      ],
    },
    {
      type: ReqType.Text,
      label: "Khoury Elective Courses",
      content:
        "Complete 4 credits of CS, CY, DS, or IS classes that are not already required",
      courses: [{ name: "Elective" }],
    },
    {
      type: ReqType.Sequence,
      label: "Concentration: Pick one",
      requirements: [
        {
          type: ReqType.Sequence,
          label: "Artificial Intelligence",
          requirements: [
            {
              type: ReqType.One,
              course: neuCourses[17],
            },
            {
              type: ReqType.One,
              course: neuCourses[18],
            },
            {
              type: ReqType.Group,
              label: "Two of:",
              courses: [
                neuCourses[19],
                neuCourses[20],
                neuCourses[21],
                neuCourses[22],
                neuCourses[23],
                neuCourses[24],
              ],
            },
          ],
        },
        {
          type: ReqType.Sequence,
          label: "Foundations",
          requirements: [
            {
              type: ReqType.Or,
              courses: [neuCourses[25], neuCourses[26]],
            },
            {
              type: ReqType.Or,
              courses: [neuCourses[27], neuCourses[28]],
            },
            {
              type: ReqType.Group,
              label: "Two of:",
              courses: [
                neuCourses[29],
                neuCourses[30],
                neuCourses[31],
                neuCourses[32],
                neuCourses[33],
                neuCourses[34],
              ],
            },
          ],
        },
        {
          type: ReqType.Sequence,
          label: "Human Centered Computing",
          requirements: [
            {
              type: ReqType.One,
              course: neuCourses[35],
            },
            {
              type: ReqType.One,
              course: neuCourses[36],
            },
            {
              type: ReqType.Group,
              label: "Two of:",
              courses: [
                neuCourses[37],
                neuCourses[38],
                neuCourses[39],
                neuCourses[40],
                neuCourses[41],
                neuCourses[42],
              ],
            },
          ],
        },
        {
          type: ReqType.Sequence,
          label: "Software",
          requirements: [
            {
              type: ReqType.One,
              course: { name: "Logic and Computation", code: "CS 2800" },
            },
            {
              type: ReqType.One,
              course: {
                name: "Networks and Distributed Systems",
                code: "CS 3700",
              },
            },
            {
              type: ReqType.One,
              course: {
                name: "Programming Languages",
                code: "CS 4400",
              },
            },
            {
              type: ReqType.Group,
              label: "One of:",
              courses: [
                { name: "Programming in C++", code: "CS 3520" },
                { name: "Building Extensible Systems", code: "CS 3620" },
                {
                  name: "Large-Scale Parallel Data Processing",
                  code: "CS 4240",
                },
                { name: "Compilers", code: "CS 4410" },
                { name: "Web Development", code: "CS 4550" },
                { name: "Mobile Application Development", code: "CS 4520" },
                { name: "Computer-Aided Reasoning", code: "CS 4820" },
              ],
            },
          ],
        },
        {
          type: ReqType.Sequence,
          label: "Systems",
          requirements: [
            {
              type: ReqType.One,
              course: {
                name: "Networks and Distributed Systems",
                code: "CS 3700",
              },
            },
            {
              type: ReqType.Or,
              courses: [
                {
                  name: "Systems Security",
                  code: "CS 3740",
                },
                { name: "Network Security", code: "CS 4740" },
              ],
            },
            {
              type: ReqType.Group,
              label: "Two of:",
              courses: [
                { name: "Programming in C++", code: "CS 3520" },
                { name: "Computer Graphics", code: "CS 4300" },
                {
                  name: "Systems Security",
                  code: "CY 3740",
                },
                { name: "Robotic Science and Systems", code: "CS 4610" },
                { name: "Mobile and Wireless Systems", code: "CS 4710" },
                { name: "High Performance Computing", code: "CS 4650" },
                { name: "Network Security", code: "CY 4740" },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const schools: { [s: string]: School } = { cornell, nyuCAS, cmu, northeastern };

export default schools;
