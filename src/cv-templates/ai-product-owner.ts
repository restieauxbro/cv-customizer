import { baseTemplate } from "@/cv-templates/base-template";

let aiProductOwnerTemplate = { ...baseTemplate };
aiProductOwnerTemplate.title = "AI Product Owner";
aiProductOwnerTemplate.intro = `I'm an AI Product Owner who bridges the gap between strategic vision and hands-on execution. My unique background combines deep technical AI implementation experience with proven product management skills at enterprise scale. I don't just define product requirements – I architect solutions, evaluate AI capabilities, and drive cross-functional delivery from concept to production.

My experience spans the full AI product lifecycle: from researching and evaluating LLMs and AI vendors, to architecting scalable AI systems, to shipping AI-powered features that deliver measurable business impact. At NAB, I've led the bank's first enterprise-wide Gen AI content pipeline, while at Te Pūkenga I architected an "Intelligence Layer" that transformed how 24 businesses leverage AI for personalisation and automation.

What sets me apart is my ability to translate complex AI capabilities into clear product strategy, manage the risks and governance challenges of AI at scale, and still roll up my sleeves to prototype solutions and guide technical implementation. I'm equally comfortable presenting AI roadmaps to executives as I am evaluating model performance and designing prompt engineering frameworks.

Let's discuss how I can help you turn AI opportunities into shipped products that drive real business value.`;

// Enhance the NAB role description to emphasize AI product ownership
aiProductOwnerTemplate.employment["nab-genai-product-owner"].description = 
  "Lead Product Owner for NAB's marketing-facing Generative AI portfolio, responsible for product vision, roadmap planning, and cross-functional delivery. Drive vendor evaluations, manage AI governance requirements, and ship AI features that accelerate content production and personalisation at enterprise scale. Balance strategic product planning with hands-on technical evaluation and prototype development.";

// Enhance the Te Pūkenga role to emphasize AI product architecture
aiProductOwnerTemplate.employment["tp-ai-architect"].description = 
  "Product Engineer and AI Architect responsible for designing, building and delivering AI-powered digital products across Te Pūkenga's 24-business network. Architected the 'Intelligence Layer' – a comprehensive AI platform that centralises data, powers personalisation, and enables intelligent user experiences. Led both strategic AI product planning and hands-on full-stack development.";

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