export const projects = [
  {
    slug: "gemcaps",
    title: "Gemcaps - Healthcare RCM Platform",
    description:
      "A comprehensive healthcare Revenue Cycle Management platform streamlining medical billing, coding, and patient services with advanced automation.",
    fullDescription:
      "Gemcaps is an enterprise-grade healthcare Revenue Cycle Management (RCM) platform that revolutionizes medical practice operations. Built with modern technologies including Next.js, TypeScript, and PostgreSQL, the platform offers end-to-end solutions for medical coding, billing, and patient management.\n\nThe platform features a sophisticated medical coding system supported by AHIMA-certified coders, ensuring 98% accuracy within 48-hour turnarounds. The billing module handles everything from claim submissions to payment processing, with automated workflows powered by AWS SNS for real-time notifications and AWS SES for patient communications.\n\nThe pre-appointment services module streamlines patient onboarding with automated insurance eligibility checks and prior authorization submissions. The accounts receivable management system employs advanced algorithms to maximize collection rates and improve payment timelines.\n\nLeveraging Drizzle ORM for type-safe database operations and shadcn/ui for a polished user interface, Gemcaps provides an intuitive dashboard for practice management. The platform includes detailed analytics, customizable reports, and a secure communication system for provider-patient interactions.",
    image: "/1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "AWS SNS/SES",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/yourusername/gemcaps",
    liveUrl: "https://gemcaps-demo.com",
  },
  {
    slug: "image-transcoder",
    title: "CloudTranscode - Serverless Image Processing",
    description:
      "An AWS-powered serverless image processing pipeline that automatically generates and optimizes images in multiple formats and resolutions.",
    fullDescription:
      "CloudTranscode is a sophisticated serverless image processing solution built on AWS infrastructure. The system automatically processes uploaded images into multiple formats and resolutions, optimizing them for various use cases from thumbnail generation to high-quality preservations.\n\nThe architecture leverages AWS Lambda functions with FFmpeg Layer integration to handle image transcoding. When images are uploaded to an S3 bucket, it triggers a Lambda function that processes the image into multiple formats and resolutions - thumbnail, small, medium, large, and HQ versions. Each variant is stored in dedicated S3 folders for organized access.\n\nThe system implements intelligent error handling and retry mechanisms for failed conversions, and includes detailed logging and monitoring through CloudWatch. The processing pipeline is highly scalable, capable of handling thousands of concurrent image uploads while maintaining consistent performance.\n\nA key feature is the automatic optimization of images for web delivery, including WebP conversion for modern browsers and progressive JPEG generation for optimal loading experiences. The system also includes a simple API for status checking and custom processing parameters.",
    image: "/2.jpg",
    technologies: [
      "AWS Lambda",
      "S3",
      "FFmpeg",
      "CloudWatch",
      "Node.js",
      "Serverless Framework",
    ],
    githubUrl: "https://github.com/yourusername/cloudtranscode",
    liveUrl: "https://cloudtranscode-demo.com",
  },
  {
    slug: "ai-agent",
    title: "IntelliAgent - AI-Powered AWS Assistant",
    description:
      "An intelligent AI agent leveraging Claude API and AWS services for advanced data processing and natural language interactions.",
    fullDescription:
      "IntelliAgent is a sophisticated AI-powered assistant that combines the capabilities of Anthropic's Claude API with AWS services to create a powerful, context-aware automated system. Built with Python, the agent efficiently processes and analyzes data while maintaining engaging, natural language interactions.\n\nAt its core, the system uses ChromaDB for efficient vector storage and retrieval, enabling semantic search and contextual memory capabilities. The integration with AWS services provides scalable infrastructure for handling complex workflows and data processing tasks. The agent can understand context, maintain conversation history, and provide relevant responses based on both stored knowledge and real-time processing.\n\nKey features include document analysis, query processing with context awareness, and integration with various AWS services for extended functionality. The system implements efficient error handling, rate limiting, and automatic retries for API calls. Advanced logging and monitoring ensure system reliability and performance optimization.\n\nThe architecture is designed for scalability, with separate modules for different functionalities including natural language processing, data storage, and API integration. The system includes a comprehensive API for external integration and a user-friendly interface for direct interactions.",
    image: "/3.jpg",
    technologies: [
      "Python",
      "AWS",
      "Claude API",
      "ChromaDB",
      "FastAPI",
      "Docker",
    ],
    githubUrl: "https://github.com/yourusername/intelliagent",
    liveUrl: "https://intelliagent-demo.com",
  },
];
