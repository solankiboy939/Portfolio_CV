
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Water Mark Logo Detection",
    description: "The Watermark Logo Detector is a machine learning-powered application designed to detect watermark logos in images using the state-of-the-art YOLOv8 object detection model. This web-based application built with Streamlit allows users to upload images, adjust detection settings, and visualize the results in real-time.",
    image: "/imgs/p4.png",
    tags: ["Python","Pandas","NumPy","Seaborn","Scikit-learn","TensorFlow","Streamlit","YOLOv8", "OpenCV","PyTorch","ultralytics"],
    links: {
      github: "https://github.com/solankiboy939/watermark-logo-detection-",
      live: "https://watermarklogodetecti0n.streamlit.app/",
    },
  },
  {
    id: 2,
    title: "Speech Recognition System",
    description: "speech recognition system that converts spoken language into text. It leverages powerful speech recognition libraries such as SpeechRecognition and pydub, combined with Python for audio processing.",
    image: "/imgs/p1.jpeg",
    tags: ["Scikit-learn", "TensorFlow", "Transformers", "Data Visualization"],
    links: {
      github: "https://github.com/solankiboy939/Sense_to_action",
      live: "",
    },
  },
  {
    id: 3,
    title: "Online E-Library",
    description: "An online e-library system that allows users to search for books, view details, and manage their library collection. Built with Django and PostgreSQL.",
    image: "/imgs/p2.png",
    tags: ["Python", "Pandas", "Streamlit", "Html", "CSS", "Django", "PostgreSQL"],
    links: {
      github: "https://github.com/solankiboy939/EduDrag",
      live: "https://manohar-solanki.github.io/edudrag/"
    },
  },
  {
    id: 4,
    title: "E-Commerce Product Recommendations",
    description: "A machine learning-based product recommendation system for e-commerce platforms, utilizing collaborative filtering and content-based filtering techniques.",
    //description: "A creative community platform built with React and Tailwind CSS, fostering collaboration among creative professionals.",
    image: "/imgs/p3.png",
    tags: ["React", "Tailwind CSS", "Redux", "Firebase"],
    links: {
      github: "https://deeptrendz-h9rnzbvwhu22rbpsxqh9kx.streamlit.app/",
      live: "https://deeptrendz-h9rnzbvwhu22rbpsxqh9kx.streamlit.app/",
    },
  },
  {
  id: 5,
    title: "To-Visit List Chrome Extension",
    description: "A productivity Chrome extension to save websites for later, reduce tab clutter, and stay focused. Features: Right-click save, Undo delete, Dark mode, Categories, Export/Import, Stats, and motivational quotes!",
    image: "/imgs/p4.png",
    tags: ["JavaScript", "Chrome Extension", "Productivity", "Manifest V3"],
    links: {
      github: "https://github.com/solankiboy939/to-visit-list-extension", // <-- आपका GitHub URL
      live: "https://github.com/solankiboy939/to-visit-list-extension/releases" // <-- ZIP Download
    },
  },
];
