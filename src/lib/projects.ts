export type Project = {
  slug: string;
  num: string;
  name: string;
  desc: string;
  content: (| { type: "text"; text: string } | { type: "image"; src: string; alt?: string })[];
  stack: string[];
  githubUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "nearrish",
    num: "01",
    name: "nearrish",
    desc: "Social media platform to help people discover, organize, and share local events.",
    content: [
    { type: "text", text: "Nearrish is our final project at 42 Wolfsburg." },
    { type: "text", text: "You can search and add friends, posts, comments, and chat with your friends." },
    { type: "image", src: "/projects/nearrish-1.png", alt: "Nearrish starting page" },
    { type: "text", text: " An AI model automatically moderates comments and posts. The entire stack runs inside Docker containers following the strict rule of one service per container." },
    { type: "image", src: "/projects/nearrish-2.png", alt: "Nearrish posts view" },
    { type: "text", text: "You can also see the tagged places on the map, so it's easier to organize a meet up." },
    { type: "image", src: "/projects/nearrish-3.png", alt: "Nearrish map view" },
    { type: "text", text: "I was responsible for building the project foundation, among other core tasks. I initialized the setup with Maven which we later changed to Gradle. Configured a PostgreSQL database for persistant storage, and generated self signed SSL certification for secure HTTPS access. I also integrated Swagger UI for interactive API documentation. Head over to the source code if you would like to check it out."},
    ],
    stack: ["Docker", "Java Springboot", "CI/CD", "Maven", "Gradle", "PostgreSQL", "Websockets", "REST Api", "Swagger UI"],
    githubUrl: "https://github.com/tamasandor/nearrish",
  },
  {
    slug: "machine-whisperer",
    num: "02",
    name: "Machine Whisperer",
    desc: "Our 3rd place winning hackathon project",
    content: [
      { type: "text", text: "This is the local version of our BCX26 hackathon project. Our hackathon project was using Amazon Bedrock." },
      { type: "text", text: "Imagine running a factory with dozens of complex machines, if even one goes down, every minute costs money. Technicians are tasked with repairing them, but each machine comes with a 300+ page maintenance manual. Diagnosing the failure manually takes far too long." },
      { type: "image", src: "/projects/machinewhisperer-1.png", alt: "Machine Whisperer starting page showing connected factory machines" },
      { type: "text", text: "Our solution is a localized AI assistant capable of running entirely on premise inside the factory. It indexes maintenance manuals and historical repair logs using a RAG pipeline to help technicians troubleshoot failures in seconds." },
      { type: "text", text: "The AI cross references past fixes and provides instant, context aware answers to technician queries." },

    { type: "image", src: "/projects/machinewhisperer-2.png", alt: "Machine Whisperer AI interface answering a technical repair question" },
    ],
    stack: ["Local AI (Qwen)", "Amazon Bedrock", "MongoDB Atlas"],
    githubUrl: "https://github.com/tamasandor/CodingWoolfs",
  },
];