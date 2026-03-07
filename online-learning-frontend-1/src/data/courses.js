const courses = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "John Doe",
    category: "Web Development",
    description: "Learn the fundamentals of React, including hooks, state, and props.",
    image: "https://via.placeholder.com/300x200?text=React+Beginners",
    price: 49.99,
    enrolled: true,
    progress: 65,
    lessons: [
      "Introduction to React",
      "Components and Props",
      "State and Lifecycle",
      "Handling Events",
      "Hooks Overview",
      "Building Your First App"
    ]
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    instructor: "Jane Smith",
    category: "Design",
    description: "Master CSS Grid, Flexbox, and modern animations.",
    image: "https://via.placeholder.com/300x200?text=Advanced+CSS",
    price: 39.99,
    enrolled: false,
    progress: 0,
    lessons: [
      "CSS Grid Fundamentals",
      "Flexbox Mastery",
      "CSS Animations",
      "Responsive Design",
      "CSS Variables"
    ]
  },
  {
    id: 3,
    title: "Node.js Backend Mastery",
    instructor: "Mike Johnson",
    category: "Backend",
    description: "Build scalable backends with Node.js, Express, and MongoDB.",
    image: "https://via.placeholder.com/300x200?text=Node.js+Mastery",
    price: 59.99,
    enrolled: true,
    progress: 30,
    lessons: [
      "Node.js Basics",
      "Express Framework",
      "MongoDB Integration",
      "RESTful APIs",
      "Authentication & Security",
      "Deployment Strategies"
    ]
  },
  {
    id: 4,
    title: "Fullstack Web Development",
    instructor: "Emily White",
    category: "Web Development",
    description: "A comprehensive guide to building modern web applications.",
    image: "https://via.placeholder.com/300x200?text=Fullstack+Dev",
    price: 99.99,
    enrolled: false,
    progress: 0,
    lessons: [
      "Frontend Fundamentals",
      "Backend Development",
      "Database Design",
      "API Development",
      "Full Project Build"
    ]
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    instructor: "Sarah Brown",
    category: "Design",
    description: "Learn the core principles of designing user-friendly interfaces.",
    image: "https://via.placeholder.com/300x200?text=UI/UX+Design",
    price: 44.99,
    enrolled: false,
    progress: 0,
    lessons: [
      "Design Thinking",
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing"
    ]
  },
  {
    id: 6,
    title: "Python for Data Science",
    instructor: "David Wilson",
    category: "Data Science",
    description: "Master Python for data analysis, visualization, and machine learning.",
    image: "https://via.placeholder.com/300x200?text=Python+Data+Science",
    price: 69.99,
    enrolled: false,
    progress: 0,
    lessons: [
      "Python Basics",
      "NumPy and Pandas",
      "Data Visualization",
      "Machine Learning Intro",
      "Real-world Projects"
    ]
  }
];

export default courses;
