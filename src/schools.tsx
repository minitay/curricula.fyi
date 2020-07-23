import { Course, ReqType, School } from "./types";
import cornellLogo from "./cornell.png";
import nyuLogo from "./nyu.jpg";
import cmuLogo from "./cmu.png";
import northeasternLogo from "./northeastern.png";
import umichLogo from "./umich.jpeg";
import sbuLogo from "./sbu.png";

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
  slug: "cornell",
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
  slug: "nyuCAS",
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
  slug: "cmu",
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
  { name: "Logic and Computation", code: "CS 2800" },
  {
    name: "Networks and Distributed Systems",
    code: "CS 3700",
  },
  {
    name: "Programming Languages",
    code: "CS 4400",
  },
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
  {
    name: "Networks and Distributed Systems",
    code: "CS 3700",
  },
  {
    name: "Systems Security",
    code: "CS 3740",
  },
  { name: "Network Security", code: "CS 4740" },
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
];

const northeastern: School = {
  name: "Northeastern University",
  shortName: "Northeastern",
  logo: northeasternLogo,
  slug: "neu",
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
              course: neuCourses[43],
            },
            {
              type: ReqType.One,
              course: neuCourses[44],
            },
            {
              type: ReqType.One,
              course: neuCourses[45],
            },
            {
              type: ReqType.Group,
              label: "One of:",
              courses: [
                neuCourses[46],
                neuCourses[47],
                neuCourses[48],
                neuCourses[49],
                neuCourses[50],
                neuCourses[51],
                neuCourses[52],
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
              course: neuCourses[53],
            },
            {
              type: ReqType.Or,
              courses: [neuCourses[54], neuCourses[55]],
            },
            {
              type: ReqType.Group,
              label: "Two of:",
              courses: [
                neuCourses[56],
                neuCourses[57],
                neuCourses[58],
                neuCourses[59],
                neuCourses[60],
                neuCourses[61],
                neuCourses[62],
              ],
            },
          ],
        },
      ],
    },
  ],
};

const sbuCourses: Course[] = [
  { name: "Computer Science Principles", code: "CSE 101" },
  { name: "Introduction to Web Design and Programming", code: "CSE 102" },
  { name: "Introduction to Computer Science", code: "CSE 110" },
  { name: "Introduction to Object-Oriented Programming", code: "CSE 114" },
  { name: "Introduction to Programming in C", code: "CSE 130" },
  { name: "Foundations of Computer Science: Honors", code: "CSE 150" },
  { name: "Computer Science A: Honors", code: "CSE 160" },
  { name: "Laboratory for Computer Science A: Honors", code: "CSE 161" },
  {
    name: "Special Topics in Practice and Applications of Computer Science",
    code: "CSE 190",
  },
  {
    name: "Special Topics in Practice and Applications for Computer Science",
    code: "CSE 191",
  },
  {
    name: "Special Topics in Practice and Applications for Computer Science",
    code: "CSE 192",
  },
  { name: "Data Structures", code: "CSE 214" },
  { name: "Foundations of Computer Science", code: "CSE 215" },
  { name: "Programming Abstractions", code: "CSE 216" },
  { name: "Computer Science III", code: "CSE 219" },
  { name: "Systems Fundamentals I", code: "CSE 220" },
  { name: "Intermediate Programming in C and C++", code: "CSE 230" },
  { name: "Computer Science B: Honors", code: "CSE 260" },
  { name: "Laboratory for Computer Science B: Honors", code: "CSE 261" },
  { name: "Technical Communications", code: "CSE 300" },
  { name: "History of Computing", code: "CSE 301" },
  { name: "Introduction to the Theory of Computation", code: "CSE 303" },
  { name: "Compiler Design", code: "CSE 304" },
  { name: "Principles of Database Systems", code: "CSE 305" },
  { name: "Operating Systems", code: "CSE 306" },
  { name: "Principles of Programming Languages", code: "CSE 307" },
  { name: "Computer Networks", code: "CSE 310" },
  { name: "Systems Administration", code: "CSE 311" },
  {
    name: "Legal, Social, and Ethical Issues in Information Systems",
    code: "CSE 312",
  },
  { name: "Fundamentals of Software Development", code: "CSE 316" },
  { name: "Systems Fundamentals II", code: "CSE 320" },
  { name: "Human-Computer Interaction", code: "CSE 323" },
  { name: "Computers and Sculpture", code: "CSE 325" },
  { name: "Fundamentals of Computer Vision", code: "CSE 327" },
  { name: "Fundamentals of Computer Graphics", code: "CSE 328" },
  { name: "Computer Security Fundamentals", code: "CSE 331" },
  { name: "Introduction to Visualization", code: "CSE 332" },
  { name: "User Interface Development", code: "CSE 333" },
  { name: "Introduction to Multimedia Systems", code: "CSE 334" },
  { name: "Internet Programming", code: "CSE 336" },
  { name: "Scripting Languages", code: "CSE 337" },
  { name: "Theory of Computation: Honors", code: "CSE 350" },
  { name: "Introduction to Data Science", code: "CSE 351" },
  { name: "Artificial Intelligence", code: "CSE 352" },
  { name: "Machine Learning", code: "CSE 353" },
  { name: "Natural Language Processing", code: "CSE 354" },
  { name: "Computational Geometry", code: "CSE 355" },
  { name: "Cloud Computing", code: "CSE 356" },
  { name: "Statistical Methods for Data Science", code: "CSE 357" },
  { name: "Software Security", code: "CSE 360" },
  { name: "Web Security", code: "CSE 361" },
  { name: "Mobile Security", code: "CSE 362" },
  { name: "Offensive Security", code: "CSE 363" },
  { name: "Advanced Multimedia Techniques", code: "CSE 364" },
  { name: "Introduction to Virtual Reality", code: "CSE 366" },
  { name: "Wireless and Mobile Networking", code: "CSE 370" },
  { name: "Logic", code: "CSE 371" },
  { name: "Analysis of Algorithms", code: "CSE 373" },
  { name: "Advanced Systems Programming in UNIX/C", code: "CSE 376" },
  { name: "Introduction to Medical Imaging", code: "CSE 377" },
  { name: "Introduction to Robotics", code: "CSE 378" },
  { name: "2D Game Programming", code: "CSE 380" },
  { name: "3D Game Programming", code: "CSE 381" },
  { name: "Analysis of Algorithms: Honors", code: "CSE 385" },
  { name: "Special Topics in Computer Science", code: "CSE 390" },
  { name: "Special Topics in Computer Science", code: "CSE 391" },
  { name: "Special Topics in Computer Science", code: "CSE 392" },
  { name: "Special Topics in Computer Science", code: "CSE 393" },
  { name: "Special Topics in Computer Science", code: "CSE 394" },
  { name: "Software Engineering", code: "CSE 416" },
  { name: "Undergraduate Teaching Practicum", code: "CSE 475" },
  { name: "Research in Computer Science", code: "CSE 487" },
  { name: "Internship in Computer Science", code: "CSE 488" },
  { name: "Senior Honors Research Project I", code: "CSE 495" },
  { name: "Senior Honors Research Project II", code: "CSE 496" },
  { name: "Applied Calculus I", code: "AMS 151" },
  { name: "Applied Calculus II", code: "AMS 161" },
  { name: "Calculus A", code: "MAT 125" },
  { name: "Calculus B", code: "MAT 126" },
  { name: "Calculus C", code: "MAT 127" },
  { name: "Calculus I", code: "MAT 131" },
  { name: "Calculus II", code: "MAT 132" },
  { name: "Analysis I", code: "MAT 141" },
  { name: "Analysis II", code: "MAT 142" },
  { name: "Accelerated Single-Variable Calculus", code: "MAT 171" },
  { name: "Introduction to Linear Algebra", code: "MAT 211" },
  { name: "Applied Linear Algebra", code: "AMS 210" },
  { name: "Numerical Analysis", code: "AMS 326" },
  { name: "Finite Mathematical Structures", code: "AMS 301" },
  { name: "Survey of Probability and Statistics", code: "AMS 310" },
  { name: "Probability Theory", code: "AMS 311" },
];

const stonyBrook: School = {
  name: "Stony Brook University",
  shortName: "Stony Brook",
  slug: "sbu",
  requirements: [],
  color: { r: 153, g: 0, b: 0 },
  courses: sbuCourses,
  logo: sbuLogo,
};

const umCourses: Course[] = [
  { name: "Thriving in a Digital World", code: "EECS 101" },
  {
    name: "Exam/Transfer Introductory Computer Programming Credit",
    code: "EECS 180",
  },
  { name: "Elementary Programming Concepts", code: "EECS 183" },
  { name: "Special Topics", code: "EECS 198" },
  { name: "Electrical Engineering Systems Design I", code: "EECS 200" },
  { name: "Computer Science Pragmatics", code: "EECS 201" },
  { name: "Discrete Mathematics", code: "EECS 203" },
  { name: "Introduction to Electronic Circuits", code: "EECS 215" },
  { name: "Introduction to Signals and Systems", code: "EECS 216" },
  { name: "Electromagnetics I", code: "EECS 230" },
  { name: "Electronic Sensing Systems", code: "EECS 250 (NAVSCI 202)" },
  { name: "Introduction to Logic Design", code: "EECS 270" },
  { name: "Programming and Introductory Data Structures", code: "EECS 280" },
  { name: "Data Structures and Algorithms", code: "EECS 281" },
  { name: "Practical Programming in Java", code: "EECS 285" },
  { name: "Special Topics", code: "EECS 298" },
  { name: "Electrical Engineering Systems Design II", code: "EECS 300" },
  { name: "Probabilistic Methods in Engineering", code: "EECS 301" },
  { name: "Analog Circuits", code: "EECS 311" },
  { name: "Digital Integrated Circuits", code: "EECS 312" },
  { name: "Electrical Circuits, Systems, and Applications", code: "EECS 314" },
  { name: "Introduction to Semiconductor Devices", code: "EECS 320" },
  { name: "Introduction to Antennas and Wireless Systems", code: "EECS 330" },
  { name: "Principles of Optics", code: "EECS 334" },
  { name: "Introduction to Digital Signal Processing", code: "EECS 351" },
  { name: "Introduction to Autonomous Robotics", code: "EECS 367" },
  { name: "Introduction to Computer Organization", code: "EECS 370" },
  { name: "Introduction to Embedded System Design", code: "EECS 373" },
  { name: "Foundations of Computer Science", code: "EECS 376" },
  { name: "Object Oriented and Advanced Programming", code: "EECS 381" },
  { name: "Introduction to Computer Security", code: "EECS 388" },
  { name: "Special Topics", code: "EECS 398" },
  { name: "Directed Study", code: "EECS 399" },
  {
    name: "Computer Programming For Scientists and Engineers",
    code: "EECS 402",
  },
  {
    name: "Graduate Foundations of Data Structures and Algorithms",
    code: "EECS 403",
  },
  { name: "High-Tech Entrepreneurship", code: "EECS 406 (ENGR 406)" },
  { name: "Data Science Seminar", code: "EECS 409" },
  { name: "Microwave Circuits I", code: "EECS 411" },
  { name: "Monolithic Amplifier Circuits", code: "EECS 413" },
  { name: "Introduction to MEMS", code: "EECS 414" },
  { name: "Electrical Biophysics", code: "EECS 417 (BIOMEDE 417)" },
  { name: "Power Electronics", code: "EECS 418" },
  { name: "Electric Machinery and Drives", code: "EECS 419" },
  { name: "Properties of Transistors", code: "EECS 421" },
  { name: "Solid-State Device Laboratory", code: "EECS 423" },
  { name: "Integrated Microsystems Laboratory", code: "EECS 425" },
  { name: "VLSI Design I", code: "EECS 427" },
  { name: "Introduction to Quantum Nanotechnology", code: "EECS 428" },
  { name: "Semiconductor Optoelectronic Devices", code: "EECS 429" },
  { name: "Wireless Link Design", code: "EECS 430" },
  { name: "Principles of Photonics", code: "EECS 434" },
  { name: "Fourier Optics", code: "EECS 435" },
  { name: "Advanced Lasers and Optics Laboratory", code: "EECS 438" },
  { name: "System Design of a Search Engine", code: "EECS 440" },
  { name: "Mobile App Development for Entrepreneurs", code: "EECS 441" },
  { name: "Computer Vision", code: "EECS 442" },
  { name: "Senior Thesis", code: "EECS 443" },
  { name: "Analysis of Societal Networks", code: "EECS 444" },
  { name: "Introduction to Machine Learning", code: "EECS 445" },
  { name: "Digital Signal Processing Design Laboratory", code: "EECS 452" },
  {
    name:
      "Applied Matrix Algorithms for Signal Processing, Data Analysis and Machine Learning",
    code: "EECS 453",
  },
  { name: "Wireless Communications Systems", code: "EECS 455" },
  {
    name: "Biomedical Instrumentation and Design",
    code: "EECS 458 (BIOMEDE 458)",
  },
  { name: "Control Systems Analysis and Design", code: "EECS 460" },
  { name: "Embedded Control Systems", code: "EECS 461" },
  { name: "Power Systems Design and Operation", code: "EECS 463" },
  { name: "Hands-on Robotics", code: "EECS 464 (ROB 464)" },
  { name: "Autonomous Robotics Design Experience", code: "EECS 467" },
  { name: "Computer Architecture", code: "EECS 470" },
  { name: "Advanced Embedded Systems", code: "EECS 473" },
  { name: "Introduction to Cryptography", code: "EECS 475" },
  { name: "Data Mining", code: "EECS 476" },
  { name: "Introduction to Algorithms", code: "EECS 477" },
  { name: "Logic Circuit Synthesis and Optimization", code: "EECS 478" },
  { name: "Social Computing Systems", code: "EECS 480" },
  { name: "Software Engineering", code: "EECS 481" },
  { name: "Introduction to Operating Systems", code: "EECS 482" },
  { name: "Compiler Construction", code: "EECS 483" },
  { name: "Database Management Systems", code: "EECS 484" },
  { name: "Web Systems", code: "EECS 485" },
  { name: "Informational Retrieval and Web Search", code: "EECS 486" },
  { name: "Interactive Computer Graphics", code: "EECS 487" },
  { name: "Computer Networks", code: "EECS 489" },
  { name: "Programming Languages", code: "EECS 490" },
  { name: "Introduction to Distributed Systems", code: "EECS 491" },
  { name: "Introduction to Artificial Intelligence", code: "EECS 492" },
  { name: "User Interface Development", code: "EECS 493" },
  { name: "Computer Game Design and Development", code: "EECS 494" },
  { name: "Software Development for Accessibility", code: "EECS 495" },
  { name: "Major Design Experience Professionalism", code: "EECS 496" },
  {
    name: "Human-Centered Software and Design and Development",
    code: "EECS 497",
  },
  { name: "Special Topics", code: "EECS 498" },
  { name: "Directed Study", code: "EECS 499" },
  { name: "Tutorial Lecture Series in System Science", code: "EECS 500" },
  { name: "Probability and Random Processes", code: "EECS 501" },
  { name: "Stochastic Processes", code: "EECS 502" },
  { name: "Introduction to Numerical Electromagnetics", code: "EECS 503" },
  { name: "Foundations of Computer Vision", code: "EECS 504" },
  { name: "Computational Data Science and Machine Learning", code: "EECS 505" },
  { name: "Design of Power Electronics", code: "EECS 506" },
  { name: "Introduction to Embedded System Research", code: "EECS 507" },
  { name: "Control and Modeling of Power Electronics", code: "EECS 508" },
  { name: "BioMEMS", code: "EECS 509" },
  { name: "RF MEMS", code: "EECS 510" },
  { name: "Integrated Analog/Digital Interface Circuits", code: "EECS 511" },
  {
    name: "Amorphous and Microcrystalline Semiconductor Thin Film Devices",
    code: "EECS 512",
  },
  { name: "Flat Panel Displays", code: "EECS 513" },
  { name: "Advanced MEMS Devices and Technologies", code: "EECS 514" },
  { name: "Integrated Microsystems", code: "EECS 515" },
  { name: "Medical Imaging Systems", code: "EECS 516 (BIOMEDE 516)" },
  { name: "Physical Processes in Plasmas", code: "EECS 517 (NERS 578)" },
  { name: "Magnetosphere and Solar Wind", code: "EECS 518 (AOSS 595)" },
  {
    name: "Plasma Generation and Diagnostics Laboratory",
    code: "EECS 519 (NERS 575)",
  },
  { name: "Solid State Physics", code: "EECS 520" },
  { name: "Solid State Devices", code: "EECS 521" },
  { name: "Analog Integrated Circuits", code: "EECS 522" },
  { name: "Digital Integrated Technology", code: "EECS 523" },
  { name: "Organic Electronic Devices and Applications", code: "EECS 524" },
  { name: "Advanced Solid State Microwave Circuits", code: "EECS 525" },
  { name: "Plasmonics", code: "EECS 526" },
  { name: "Layout Synthesis and Optimization", code: "EECS 527" },
  {
    name: "Principles of Microelectronics Process Technology",
    code: "EECS 528",
  },
  { name: "Semiconductor Lasers and LEDs", code: "EECS 529" },
  { name: "Electromagnetic Theory I", code: "EECS 530 (APPPHYS 530)" },
  { name: "Antenna Theory and Design", code: "EECS 531" },
  {
    name: "Microwave Remote Sensing I: Radiometry",
    code: "EECS 532 (CLIMATE 587)",
  },
  { name: "Microwave Measurements Laboratory", code: "EECS 533" },
  {
    name: "Analysis of Electric Power Distribution Systems and Loads",
    code: "EECS 534",
  },
  { name: "Power System Dynamics and Control", code: "EECS 535" },
  { name: "Power System Markets & Optimization", code: "EECS 536" },
  { name: "Classical Optics", code: "EECS 537 (APPPHYS 537)" },
  {
    name: "Optical Waves in Crystals",
    code: "EECS 538 (APPPHYS 550) (PHYSICS 650)",
  },
  { name: "Lasers", code: "EECS 539 (APPPHYS 551) (PHYSICS 651)" },
  { name: "Applied Quantum Mechanics I", code: "EECS 540 (APPPHYS 540)" },
  { name: "Applied Quantum Mechanics II", code: "EECS 541 (APPPHYS 541)" },
  { name: "Advanced Topics in Computer Vision", code: "EECS 542" },
  { name: "Knowledge-Based Systems", code: "EECS 543" },
  { name: "Analysis of Societal Networks", code: "EECS 544" },
  { name: "Machine Learning", code: "EECS 545" },
  { name: "Ultrafast Optics", code: "EECS 546 (APPPHYS 546)" },
  { name: "Electronic Commerce", code: "EECS 547 (SI 652)" },
  { name: "Information Visualizaiton", code: "EECS 548 (SI 649)" },
  { name: "Information Retrieval", code: "EECS 549 (SI 650)" },
  { name: "Information Theory", code: "EECS 550" },
  {
    name:
      "Matrix Methods for Signal Processing, Data Analysis and Machine Learning",
    code: "EECS 551",
  },
  {
    name: "Fiber Optics: Internet to Biomedical Applications",
    code: "EECS 552 (APPPHYS 552)",
  },
  { name: "Theory and Practice of Data Compression", code: "EECS 553" },
  {
    name: "Introduction to Digital Communication and Coding",
    code: "EECS 554",
  },
  { name: "Digital Communication Theory", code: "EECS 555" },
  { name: "Image Processing", code: "EECS 556" },
  { name: "Communication Networks", code: "EECS 557" },
  { name: "Stochastic Control", code: "EECS 558" },
  { name: "Advanced Signal Processing", code: "EECS 559" },
  {
    name: "Linear Systems Theory",
    code: "EECS 560 (AEROSP 550) (CEE 571) (MECHENG 564)",
  },
  { name: "Design of Digital Control Systems", code: "EECS 561 (MECHENG 561)" },
  { name: "Nonlinear Systems and Control", code: "EECS 562 (AEROSP 551)" },
  { name: "Hybrid Systems, Analysis, and Control", code: "EECS 563" },
  { name: "Estimation, Filtering, and Detection", code: "EECS 564" },
  { name: "Linear Feedback Control Systems", code: "EECS 565" },
  { name: "Discrete Event Systems", code: "EECS 566" },
  {
    name: "Robot Kinematics and Dynamics",
    code: "EECS 567 (MFG 567) (MECHENG 567)",
  },
  {
    name: "Mobile Robotics: Methods and Algorithms",
    code: "EECS 568 (NAVARCH 568)",
  },
  { name: "Production Systems Engineering", code: "EECS 569 (MFG 564)" },
  { name: "Parallel Computer Architecture", code: "EECS 570" },
  { name: "Principles of Real-Time Computing", code: "EECS 571" },
  { name: "Microarchitecture", code: "EECS 573" },
  { name: "Computational Complexity", code: "EECS 574" },
  { name: "Advanced Cryptography", code: "EECS 575" },
  { name: "Advanced Data Mining", code: "EECS 576" },
  {
    name: "Correct Operation for Processors and Embedded Systems",
    code: "EECS 578",
  },
  { name: "Digital System Testing", code: "EECS 579" },
  { name: "Advanced Computer Graphics", code: "EECS 580" },
  { name: "Advanced Operating Systems", code: "EECS 582" },
  { name: "Advanced Compilers", code: "EECS 583" },
  { name: "Advanced Database Systems", code: "EECS 584" },
  { name: "Design and Analysis of Algorithms", code: "EECS 586" },
  { name: "Parallel Computing", code: "EECS 587" },
  { name: "Computer and Network Security", code: "EECS 588" },
  { name: "Advanced Computer Networks", code: "EECS 589" },
  { name: "Advanced Programming Languages", code: "EECS 590" },
  { name: "Distributed Systems", code: "EECS 591" },
  { name: "Foundations of Artificial Intelligence", code: "EECS 592" },
  { name: "Introduction to Adaptive Systems", code: "EECS 594" },
  { name: "Natural Language Processing", code: "EECS 595 (LING 541) (SI 561)" },
  { name: "Master of Engineering Team Project", code: "EECS 596" },
  { name: "Language and Information", code: "EECS 597 (SI 760) (LING 702)" },
  {
    name: "Special Topics in Electrical Engineering and Computer Science",
    code: "EECS 598",
  },
  { name: "Directed Study", code: "EECS 599" },
  {
    name: "Function Space Methods in System Theory",
    code: "EECS 600 (IOE 600)",
  },
  {
    name: "Data Science and Machine Learning Design Laboratory",
    code: "EECS 605",
  },
  {
    name: "Electronic and Optical Properties of Semiconductors",
    code: "EECS 620",
  },
  { name: "VLSI Design II", code: "EECS 627" },
  { name: "Advanced High Performance VLSI Design", code: "EECS 628" },
  { name: "Electromagnetic Scattering", code: "EECS 631" },
  { name: "Numerical Methods in Electromagnetics", code: "EECS 633" },
  { name: "Nonlinear Optics", code: "EECS 634 (APPPHYS 611) (Physics 611)" },
  {
    name: "Quantum Theory of Light",
    code: "EECS 638 (APPPHYS 609) (PHYSICS 542)",
  },
  { name: "Theory of Neural Computation", code: "EECS 643 (PSYCH 643)" },
  { name: "Computational Modeling of Cognition", code: "EECS 644 (PSYCH 644)" },
  { name: "Channel Coding Theory", code: "EECS 650" },
  { name: "Adaptive Signal Processing", code: "EECS 659" },
  { name: "Advanced Nonlinear Control", code: "EECS 662 (MECHENG 662)" },
  { name: "Special Topics in Computer Architecture", code: "EECS 670" },
  { name: "Special Topics in Theoretical Computer Science", code: "EECS 674" },
  { name: "Special Topics in Software Systems", code: "EECS 682" },
  { name: "Current Topics in Databases", code: "EECS 684" },
  { name: "Mobile Computing", code: "EECS 691" },
  { name: "Advanced Artificial Intelligence", code: "EECS 692" },
  {
    name: "Neural Models and Psychological Processes",
    code: "EECS 695 (PSYCH 740)",
  },
  { name: "Master’s Thesis", code: "EECS 698" },
  {
    name: "Research Work in Electrical Engineering and Computer Science",
    code: "EECS 699",
  },
  { name: "Special Topics in System Theory", code: "EECS 700" },
  {
    name:
      "Special Topics in Solid-State Devices, Integrated Circuits, and Physical Electronics",
    code: "EECS 720",
  },
  { name: "Special Topics in Electromagnetics", code: "EECS 730" },
  { name: "Special Topics in the Optical Sciences", code: "EECS 735" },
  {
    name: "Special Topics in Communication and Information Theory",
    code: "EECS 750",
  },
  { name: "Special Topics in Signal Processing", code: "EECS 755" },
  { name: "Special Topics in Control Theory", code: "EECS 760" },
  {
    name: "Special Topics in Stochastic Systems and Control",
    code: "EECS 765",
  },
  { name: "Seminar in Solid-State Electronics", code: "EECS 820" },
  { name: "Seminar in Artificial Intelligence", code: "EECS 892" },
  { name: "Dissertation/Pre-Candidate", code: "EECS 990" },
  { name: "Dissertation/Candidate", code: "EECS 995" },
];

const uMichEng: School = {
  name: "University of Michigan: Engineering",
  shortName: "UMichigan Engineering",
  slug: "uMichEng",
  requirements: [],
  color: { r: 0, g: 39, b: 76 },
  courses: umCourses,
  logo: umichLogo,
};

const schools: { [s: string]: School } = {
  [cornell.slug]: cornell,
  [nyuCAS.slug]: nyuCAS,
  [cmu.slug]: cmu,
  [northeastern.slug]: northeastern,
  [stonyBrook.slug]: stonyBrook,
  [uMichEng.slug]: uMichEng,
};

export default schools;
