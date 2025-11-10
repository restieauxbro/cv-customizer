import { CVTemplate, baseTemplate } from "./base-template";

let modifiedTemplate = { ...baseTemplate };
modifiedTemplate.title = "AI Product Engineer";
modifiedTemplate.intro = `I’m someone with a unique journey into digital product development. In fact, my career began solely in the marketing space. When I found how advertising efforts were limited by poor digital experiences and a slow pipeline from design to code, I took up the responsibility to build solutions and got onto the tools. Since getting private beta access to gpt-3 in 2020, I've been building AI-first solutions to enterprise business problems. AI may still feel newfangled but it has proven patterns that I'm experienced in ramping clients onto quickly; a lot of gains can be had in vectorising the enterprise's knowledge, building agent tools that work like people do, erring towards observable automation, and giving teams confidence to pair with technology that uplifts them.`;
modifiedTemplate.employment[
  "tp-ai-architect"
].description = `As AI Architect I designed the LLM-powered systems that personalised learner journeys across our 24-organisation network. I translated research into resilient architectures, prototyping conversational flows and retrieval pipelines before production. I stood up our Pinecone vector stores, then migrated them to Supabase pgvector to reduce cost and simplify ops, while partnering with enterprise architects and engineers to ship the full-stack solutions in our Azure and AWS cross-stack.`;
modifiedTemplate.employment["tp-ai-architect"].achievements = [
  // ...(modifiedTemplate.employment["tp-ai-architect"].achievements || []),
  "Architected our web 'Intelligence Layer' – a microservice for extracting and transforming data across products and users, enhancing with LLMs and passing back to the front-end to power personalisation. In the 6 months following its launch the website conversion rate increased from 1.5% to 3.5%.",
  'Fine-tuned a model for parsing user queries into structured data and using it in our recommendation algorithm. Qualitative research showed a 78% boost in the sentiment "I got exactly what I needed".',
  'Fine-tuned an internal "Brand Voice" model for HR to generate job description drafts. The department chief estimated a 80% reduction in time spent on job descriptions.',
  "Architected a method for our front-end applications to generate components from a centralised design system and automate A/B testing. In our sample testing we were able to increase the click-through rate by 22%.",
  "Developed a chatbot framework that resists and reports adversarial attacks, as well as redirecting conversation flows from natural language rules in a CMS.",
];
modifiedTemplate.employment["cz-digital-experience-lead"].description =
  "Ownership of the customer's digital experience from ad channels to the website, from lead nurture through to conversion, as well as the technology stack of our new platforms. My time at Competenz was focused on building a micro-services architecture to scale personalised experiences driven by data. We automated nurture funnels that set unqualified learners up with recruitment coaching and that integrated with our digital systems. We rebuilt content delivery systems to suit the micro-campaign strategy of the organisation.";

modifiedTemplate.employment["oscar-tango-cofounder"] = {
  company: "Oscar Tango",
  position: "Full-stack Developer",
  startDate: "Nov 2023",
  endDate: "Oct 2024",
  totalDuration: "11 months",
  companyDescription:
    "Oscar Tango is a boutique development agency I co-founded that subcontracts from creative agencies when they need extra resource building AI applications. We specialise in building knowledge-bases, enhanced search and chat interfaces for agencies to sell on to their clients. I am the principal developer and consult on digital strategy.",
  description:
    "I led the delivery of AI-first web products for agency clients, owning solution design, full-stack implementation, and ongoing optimisation.",
  classifications: ["Web Development"],
  achievements: [
    "Created a full-stack RAG AI application for a vectorised knowledge-base alternative that saved our client 240 hours of development time on an old-school solution.",
    "Developed a cost per conversion service that ensures ROI by limiting AI features when they become less effective for each user, providing controlled cost management.",
    "Developed a chatbot that resists and reports adversarial attacks, staying on brand and on message.",
  ],
  highlights: ["AI Product Engineering", "Agency Delivery"],
};

modifiedTemplate.skills = [
  "AI Solution Design",
  "Full-stack Development",
  "Vector Databases",
  ...(modifiedTemplate.skills || []),
  "Typescript",
  "Langraph and Agent Frameworks",
  "Agile",
];
delete modifiedTemplate.employment["uxbridge-arts-culture"];
delete modifiedTemplate.employment["cz-digital-marketing-executive"];

export const aIEngineeringTemplate: CVTemplate = modifiedTemplate;
