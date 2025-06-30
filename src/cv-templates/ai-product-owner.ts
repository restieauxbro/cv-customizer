import { baseTemplate } from "@/cv-templates/base-template";

let aiProductOwnerTemplate = { ...baseTemplate };
aiProductOwnerTemplate.title = "AI Product Owner";
aiProductOwnerTemplate.intro = `I'm an AI Product Owner who codes. My edge is that I don't just strategise and define requirements – I architect solutions, write code, and ship AI products myself. This unique combination of product management skills with hands-on programming experience means I can move from product vision to working prototypes faster than traditional product teams.

My experience spans the full AI product lifecycle: from researching and evaluating LLMs, to architecting scalable AI systems, to personally engineering and deploying AI-powered features that deliver measurable business impact. At NAB, I design enterprise AI solutions and coach engineering teams through complex implementations. At Te Pūkenga, I personally engineered and shipped an "Intelligence Layer" that transformed how 24 businesses leverage AI for personalisation and automation.

What sets me apart is that I can present AI roadmaps to executives in the morning and debug Python code in the afternoon. I translate complex AI capabilities into clear product strategy, then roll up my sleeves and build the solutions myself. This hands-on approach means faster validation, better technical decisions, and products that actually work.

Let's discuss how my code-first approach to AI product ownership can accelerate your AI initiatives.`;


// Enhance the Te Pūkenga role to emphasize hands-on engineering and shipping
aiProductOwnerTemplate.employment["tp-ai-architect"].description = 
  "Product Engineer and AI Architect who personally engineered and shipped AI-powered digital products across Te Pūkenga's 24-business network. Built the 'Intelligence Layer' from the ground up – writing the code for a comprehensive AI platform that centralises data, powers personalisation, and enables intelligent user experiences. Hands-on full-stack development: React frontends, Node.js APIs, PostgreSQL databases, and LLM integrations all deployed to production.";

// Add AI Product Owner specific skills
aiProductOwnerTemplate.skills = [
  ...(aiProductOwnerTemplate.skills || []),
  "AI Product Strategy",
  "LLM Evaluation & Selection",
  "AI Vendor Management",
  "Prompt Engineering",
  "RAG Architecture",
  "AI Governance & Risk",
  "Cross-functional AI Delivery",
  "AI Performance Metrics",
];

// Remove less relevant employment entries for AI Product Owner focus
delete aiProductOwnerTemplate.employment["cz-digital-marketing-executive"];

export { aiProductOwnerTemplate }; 