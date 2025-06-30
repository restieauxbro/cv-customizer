export type CVJSONOutput =
  | {
    isCV: false;
    documentType: string;
    errorMessage: string;
  }
  | {
    isCV: true;
    documentType: string;
    cv: CVTemplate;
  };

export type CVTemplate = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  intro: string;
  employment: {
    [key: string]: Employment;
  };
  education?: Education[];
  skills?: string[];
};

export type Employment = {
  company: string;
  companyDescription?: string;
  position: string;
  startDate: string;
  endDate: string;
  totalDuration: string;
  description: string;
  highlights: string[]; // deprecate this
  classifications?: string[];
  achievements?: string[];
};

export type Education = {
  institution: string;
  qualification: string;
  details: string;
  startDate: string;
  endDate: string;
};

export const baseTemplate: CVTemplate = {
  firstName: "Tim",
  lastName: "Restieaux",
  email: "tim.hrest@gmail.com",
  phone: "04 8384 8609",
  location: "Melbourne, VIC",
  title: "Product Designer and Engineer",
  intro:
    "As a Product Engineer with a unique blend of technical expertise and marketing acumen, I specialise in engineering innovative products that transform user experiences and drive business success. My background in mar-tech, combined with a deep understanding of market dynamics, equips me to design and develop products that not only meet but exceed user expectations. My experience in AI research, full-stack development, and process automation has been instrumental in pioneering solutions in the education and training sector. With a proven track record in leveraging technology for strategic product development and a commitment to continuous improvement, I excel in bridging the gap between technical possibilities and market needs, ensuring products are both technically sound and commercially viable.",
  employment: {
    "nab-genai-product-owner": {
      company: "National Australia Bank (NAB)",
      companyDescription:
        "NAB is one of Australia's \"big four\" banks, serving more than 8 million customers. The Group Marketing Gen AI team delivers AI-enabled capabilities that personalise and automate customer communications at scale.",
      position: "Product Owner – Generative AI (Group Marketing)",
      startDate: "Sep 2023",
      endDate: "Present",
      totalDuration: "1 year 10 months",
      description:
        "Brought on to transform NAB's Group Marketing Gen AI from experimental prototypes into production-grade systems that deliver measurable business value. Over 12 months, evolved the program from pure experimentation to scaled product delivery – expanding from 1 stream lead to 4 concurrent workstreams and shifting the narrative from sunk cost to realised ROI. My experience raising organisational AI maturity means I design solutions that work within enterprise constraints while pushing technical boundaries.",
      achievements: [
        "Architected and shipped NAB's Multi-Stage Review Agents System – designed AI agents for product fact verification, legal compliance checking, and brand consistency that pre-screen content before human review.",
        "Designed a Multi-Channel Creative Hub generating content across 9+ channels (EDM, SMS, social, in-app, push, LinkedIn, paid search) – architected the AI engine, brand voice system, and channel-specific formatters.",
        "Built the Customer Experts Framework – pivoted from synthetic customer personas to reasoning-based customer analysis, designing AI agents that analyse market data to predict customer sentiment and behaviour.",
        "Developed comprehensive AI feature specifications across 4 quarterly milestones – wrote technical requirements for 20+ AI capabilities including document classification, metric extraction, and performance pattern learning.",
        "Coached 10+ engineers in prompt engineering, AI guardrails, and evaluation frameworks – hands-on technical mentoring that resulted in 3 production AI services shipped within 6 months.",
        "Delivered AI systems projected to generate $500k in operational savings in FY25, scaling to $1.5m in FY26 through automated content workflows and reduced manual review cycles."
      ],
      highlights: ["Generative AI Strategy", "Product Management", "MarTech Innovation"],
    },

    "tp-ai-architect": {
      company: "Te Pūkenga",
      position: "Artificial Intelligence Architect",
      startDate: "Oct 2021",
      endDate: "Present",
      totalDuration: "2 years 5 months",
      companyDescription:
        "Te Pūkenga is New Zealand's premier vocational education provider undergoing the biggest digital transformation ever seen in the public sector to unify 24 businesses into a single network.",
      achievements: [
        'Developed micro front-end apps embeddable in any of Te Pūkenga\'s 24 businesses, delivering a cohesive network experience. Qualitative research showed a 78% boost in the sentiment "I got exactly what I needed"',
        "Architected our web 'Intelligence Layer' – a microservice for extracting and transforming data across products and users, enhancing with LLMs and passing back to the front-end to power personalisation. In the 6 months following its launch the website conversion rate increased from 1.5% to 3.5%.",
        "Architected and developed a method for our front-end applications to generate components from a centralised design system and automate A/B testing. In our sample testing we were able to increase the click-through rate by 22%.",
      ],
      description:
        "I was the Product Engineer of \"Intelligent Navigation\"; a workstream of digital products for helping learners navigate the Te Pūkenga network. Here I architected, designed and was lead developer for our full-stack solutions. Creating modular applications that were scalable and embeddable. I built the Intelligence Layer – a microservice that interacts with our Customer Data Platform, AI APIs, and CMS to extract and transform real-time data in intelligent ways for learners, enabling personalised user experiences.",
      highlights: ["Solutions Design", "AI Engineering"],
    },
    "cz-digital-experience-lead": {
      company: "Competenz",
      companyDescription:
        "Competenz is a B2B Industry Training Organisation in New Zealand serving 32 industry sectors and with over 11,000 business customers. As Digital Marketing Lead I had 1 direct report.",
      position: "Digital Experience Lead",
      startDate: "Oct 2021",
      endDate: "Jun 2022",
      totalDuration: "9 months",
      description:
        "Ownership of the customer's digital experience from ad channels to the website, from lead nurture through to conversion, as well as the technology stack of our new platforms. My time at Competenz was focused on building a micro-services architecture to scale personalised experiences driven by data. We automated nurture funnels that set unqualified learners up with recruitment coaching and that integrated with our digital systems. We rebuilt content delivery systems to suit the micro-campaign strategy of the organisation.",
      highlights: ["UX Management", "Full-stack Development"],
      achievements: [
        "Designed the end-to-end customer experience for our automated nuture journey; taking user retention from 31% to 64%",
        "Developed revisions to our customer tracking pipeline through the phone team, increasing the accuracy of our data and reducing the time to onboard a new customer by 2 weeks",
      ],
    },

    "cz-digital-marketing-lead": {
      company: "Competenz",
      position: "Digital Marketing Lead",
      startDate: "Feb 2021",
      endDate: "Oct 2021",
      totalDuration: "9 months",
      description:
        "All things digital marketing for New Zealand's largest Industry Training Organisation – using data to maximise ad spend across 32 discreet industry sectors. We used behavioural metadata to create distinct IDs and follow cross-channel engagement – the kind of thing a Customer Data Platform does out-of-the-box I set up through automations and integrations with the technology we had available.",
      highlights: ["Digital Channels"],
    },
    "cz-digital-marketing-executive": {
      company: "Competenz",
      position: "Digital Marketing Executive",
      startDate: "Oct 2019",
      endDate: "Feb 2021",
      totalDuration: "1 year 5 months",
      description:
        "As a Digital Marketing Executive, I collaborated with agencies and internal teams to execute strategically aligned digital campaigns. I tracked key metrics to measure campaign success and derive insights for potential improvements. My duties included managing social media, optimising SEO, and developing digital marketing content. This role honed my skills in digital marketing and paved the way for my transition to the Digital Marketing Lead role.",
      highlights: ["Marketing"],
    },
  //   "uxbridge-arts-culture": {
  //     company: "UXBRIDGE | Arts & Culture",
  //     position: "Operations Assistant",
  //     startDate: "May 2015",
  //     endDate: "Aug 2019",
  //     totalDuration: "4 years 4 months",
  //     description:
  //       "Providing essential assistance in coordinating and executing our organisations' studios, gallery, and event activities.",
  //     highlights: ["Operations"],
  //   },
  },
    education: [
    {
      institution: "Auckland University of Technology",
      qualification: "Bachelor of Communications Studies",
      details: "Major in Creative Industries, Minor in Advertising",
      startDate: "2016",
      endDate: "2018",
    },
  ],
  skills: [
    "React",
    "Javascript",
    "Typescript",
    "HTML & CSS",
    "Node",
    "PostgreSQL",
    "Figma",
    "LLM Finetuning",
    "User research",
  ],
};
