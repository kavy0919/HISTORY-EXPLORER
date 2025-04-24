// Historical Eras and Events
export interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  era: 'Ancient' | 'Medieval' | 'Modern';
  type: 'Cultural' | 'Political' | 'Military' | 'Spiritual' | 'Administrative';
  description: string;
  subEvents?: {
    title: string;
    description: string;
  }[];
  figures?: string[];
  impact?: string;
  aiInsight?: string;
  locations?: string[];
}

// Mock Historical Events
export const historicalEvents: HistoricalEvent[] = [
  // Ancient India
  {
    id: "ancient1",
    title: "Indus Valley Civilization Peak",
    date: "2600-1900 BCE",
    era: "Ancient",
    type: "Cultural",
    description: "One of the world's earliest urban civilizations with advanced city planning, drainage systems, and standardized weights. Cities like Harappa and Mohenjo-daro featured grid-based streets, multi-story homes, and sophisticated water management systems.",
    subEvents: [
      {
        title: "Trade Networks",
        description: "Evidence of trade with Mesopotamia, including seals and beads, suggests a bustling economy."
      },
      {
        title: "Mystery Script",
        description: "The undeciphered Indus script on seals hints at a unique writing system."
      },
      {
        title: "Decline",
        description: "Possible causes include climate change or river shifts, leading to abandonment by 1900 BCE."
      }
    ],
    locations: ["Harappa", "Mohenjo-daro"],
    aiInsight: "What if the Indus Valley script had been deciphered? It might reveal a lost language, reshaping our understanding of early trade."
  },
  {
    id: "ancient2",
    title: "Vedic Period",
    date: "1500-500 BCE",
    era: "Ancient",
    type: "Cultural",
    description: "Marked the composition of the Vedas, foundational texts of Hinduism, and the rise of early social structures like the varna system.",
    subEvents: [
      {
        title: "Rigveda Creation",
        description: "Oral traditions of hymns and rituals began around 1500 BCE."
      },
      {
        title: "Pastoral Society",
        description: "Nomadic tribes transitioned to settled agriculture and cattle rearing."
      },
      {
        title: "Philosophical Roots",
        description: "Early debates on cosmology and ethics laid groundwork for later schools of thought."
      }
    ],
    aiInsight: "What if the Vedic people had adopted writing earlier? Their knowledge might have spread faster across Asia."
  },
  {
    id: "a7",
    title: "Buddha's Enlightenment",
    date: "circa 528 BCE",
    era: "Ancient",
    type: "Spiritual",
    description: "Siddhartha Gautama achieves enlightenment under the Bodhi tree, founding Buddhism. His teachings on the Four Noble Truths and the Eightfold Path offered a new philosophical approach that would spread throughout Asia."
  },
  {
    id: "a8",
    title: "Alexander's Indian Campaign",
    date: "327-325 BCE",
    era: "Ancient",
    type: "Military",
    description: "Alexander the Great's invasion of northwestern India, battling King Porus. This marked one of the earliest major contacts between Indian and Hellenistic cultures, creating trade routes and cultural exchanges that would last for centuries."
  },
  {
    id: "a1",
    title: "Kalinga War",
    date: "261 BCE",
    era: "Ancient",
    type: "Military",
    description: "A devastating conflict that led Emperor Ashoka to embrace Buddhism. The bloodshed and suffering he witnessed transformed him from a ruthless conqueror to a promoter of peace, leading to the spread of Buddhist principles throughout ancient India and beyond."
  },
  {
    id: "a2",
    title: "Mauryan Empire Foundation",
    date: "321 BCE",
    era: "Ancient",
    type: "Political",
    description: "Founded by Chandragupta Maurya after overthrowing the Nanda Dynasty. With guidance from his advisor Chanakya, he established the first major empire to unite most of the Indian subcontinent, creating efficient administrative systems that would influence governance for centuries."
  },
  {
    id: "a3",
    title: "Gupta Empire Golden Age",
    date: "320-550 CE",
    era: "Ancient",
    type: "Cultural",
    description: "Period of unprecedented development in science, mathematics, astronomy, religion, and philosophy. Significant advances included the concept of zero, the decimal system, and calculations of pi, while arts and literature flourished under royal patronage."
  },
  {
    id: "a4",
    title: "Ajanta Caves Construction",
    date: "2nd Century BCE-6th Century CE",
    era: "Ancient",
    type: "Cultural",
    description: "Creation of magnificent rock-cut Buddhist monuments containing paintings and sculptures. These caves represent masterpieces of Buddhist religious art and have had significant influence on the development of Indian art forms."
  },
  // Medieval India Events (8 events)
  {
    id: "m1",
    title: "Delhi Sultanate Establishment",
    date: "1206 CE",
    era: "Medieval",
    type: "Political",
    description: "Founded by Qutb al-Din Aibak, beginning five dynasties of Muslim rulers in northern India. The Sultanate introduced Persian and Islamic influences to Indian administration, architecture, and culture, creating new syncretic traditions."
  },
  {
    id: "m2",
    title: "Vijayanagara Empire Foundation",
    date: "1336 CE",
    era: "Medieval",
    type: "Political",
    description: "Established by Harihara I and Bukka Raya I to protect Hindu culture from northern Muslim expansion. The empire became a center for Hindu art, literature, and temple architecture, with its capital Hampi growing into one of the largest cities in the world."
  },
  {
    id: "m3",
    title: "Babur Establishes Mughal Empire",
    date: "1526 CE",
    era: "Medieval",
    type: "Military",
    description: "Babur defeats Ibrahim Lodi at the First Battle of Panipat using superior military tactics. This victory established the Mughal dynasty that would rule most of the Indian subcontinent for nearly three centuries, bringing Persian cultural influences."
  },
  {
    id: "m4",
    title: "Akbar's Religious Policy",
    date: "1582 CE",
    era: "Medieval",
    type: "Administrative",
    description: "Emperor Akbar establishes Din-i-Ilahi, promoting religious tolerance and pluralism. His policies brought Hindus into high government positions and abolished discriminatory taxes, creating a more inclusive approach to governance."
  },
  {
    id: "m5",
    title: "Chola Naval Expansion",
    date: "985-1014 CE",
    era: "Medieval",
    type: "Military",
    description: "Rajaraja I and his son Rajendra I extend Chola influence across Southeast Asia. Their powerful navy controlled trade routes throughout the Indian Ocean, establishing commercial and cultural links with distant lands."
  },
  {
    id: "m6",
    title: "Shah Jahan Builds Taj Mahal",
    date: "1632-1653 CE",
    era: "Medieval",
    type: "Cultural",
    description: "Construction of the iconic marble mausoleum for Empress Mumtaz Mahal. This architectural masterpiece represents the peak of Indo-Islamic architecture and stands as a testament to Mughal artistic achievement and wealth."
  },
  {
    id: "m7",
    title: "Bhakti Movement Peak",
    date: "14th-17th Century CE",
    era: "Medieval",
    type: "Spiritual",
    description: "Religious reformers like Kabir, Mirabai, and Guru Nanak promote devotional worship across India. This popular movement emphasized direct devotion to God without complex rituals, challenging caste distinctions and promoting more accessible spiritual practices."
  },
  {
    id: "m8",
    title: "Sher Shah Suri's Reforms",
    date: "1540-1545 CE",
    era: "Medieval",
    type: "Political",
    description: "Implementation of administrative, military, and economic innovations during a brief interruption of Mughal rule. Sher Shah introduced a new currency system, built the Grand Trunk Road, and created reforms in land revenue that later Mughal emperors would adopt."
  },

  // Modern India Events (8 events)
  {
    id: "mod1",
    title: "Battle of Plassey",
    date: "1757 CE",
    era: "Modern",
    type: "Military",
    description: "British East India Company defeats the Nawab of Bengal, beginning colonial rule. This pivotal battle marked the start of British territorial control in India, transitioning the Company from a trading entity to a ruling power."
  },
  {
    id: "mod2",
    title: "First War of Independence",
    date: "1857 CE",
    era: "Modern",
    type: "Political",
    description: "Also known as the Sepoy Mutiny, a widespread rebellion against British East India Company rule. This uprising united diverse Indian groups against colonial policies, leading to the end of Company rule and direct British Crown administration."
  },
  {
    id: "mod3",
    title: "Indian National Congress Formation",
    date: "1885 CE",
    era: "Modern",
    type: "Political",
    description: "Founding of a major political organization that would lead the independence movement. Initially seeking reform within the British system, the Congress eventually became the primary vehicle for nationalist aspirations under leaders like Gandhi."
  },
  {
    id: "mod4",
    title: "Jallianwala Bagh Massacre",
    date: "1919 CE",
    era: "Modern",
    type: "Military",
    description: "British troops fire on unarmed protesters in Amritsar, killing hundreds. This atrocity catalyzed the non-cooperation movement and turned many moderate Indians toward the cause of complete independence."
  },
  {
    id: "mod5",
    title: "Salt March",
    date: "1930 CE",
    era: "Modern",
    type: "Spiritual",
    description: "Gandhi leads a 240-mile protest against British salt monopoly, igniting civil disobedience. This symbolic act of defiance demonstrated the power of non-violent resistance and generated worldwide attention to India's struggle for freedom."
  },
  {
    id: "mod6",
    title: "Quit India Movement",
    date: "1942 CE",
    era: "Modern",
    type: "Political",
    description: "Mass protest demanding an end to British rule, with the slogan 'Do or Die'. This final major push for independence saw widespread civil disobedience despite harsh suppression, demonstrating that India could no longer be governed without consent."
  },
  {
    id: "mod7",
    title: "Partition and Independence",
    date: "1947 CE",
    era: "Modern",
    type: "Political",
    description: "India gains independence from British rule but is divided into two nations. This momentous achievement came with the traumatic division of the subcontinent along religious lines, resulting in mass migration and communal violence."
  },
  {
    id: "mod8",
    title: "Constitution of India Adoption",
    date: "1950 CE",
    era: "Modern",
    type: "Political",
    description: "The world's longest written constitution is adopted, establishing India as a democratic republic. This document, crafted under the leadership of Dr. B.R. Ambedkar, enshrined principles of justice, liberty, equality, and fraternity."
  }
];

// Quiz Questions
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  era: 'Ancient' | 'Medieval' | 'Modern';
}

// Mock Quiz Questions
export const quizQuestions: QuizQuestion[] = [
  // Ancient India Quiz Questions
  {
    id: "q1",
    question: "What significant change occurred in Emperor Ashoka's governance after the Kalinga War?",
    options: [
      "He expanded his military campaigns",
      "He adopted and promoted Buddhism",
      "He established a new capital city",
      "He formed an alliance with Greek rulers"
    ],
    correctAnswer: 1,
    explanation: "The brutality of the Kalinga War led Ashoka to embrace Buddhism and principles of non-violence (ahimsa).",
    era: "Ancient"
  },
  {
    id: "q2",
    question: "Which ancient Indian empire is associated with the 'Golden Age' of art, science, and literature?",
    options: [
      "Maurya Empire",
      "Gupta Empire",
      "Kushan Empire",
      "Chola Empire"
    ],
    correctAnswer: 1,
    explanation: "The Gupta Empire (320-550 CE) is renowned for achievements in mathematics, astronomy, art, and literature.",
    era: "Ancient"
  },
  {
    id: "q3",
    question: "What mathematical concept did ancient Indians introduce that revolutionized mathematics globally?",
    options: [
      "Pythagorean theorem",
      "Decimal system with zero",
      "Calculus",
      "Geometric progression"
    ],
    correctAnswer: 1,
    explanation: "The concept of zero and the decimal place value system were developed in India and spread worldwide.",
    era: "Ancient"
  },
  {
    id: "q4",
    question: "Who founded the Mauryan Empire in 321 BCE?",
    options: [
      "Ashoka",
      "Chandragupta Maurya",
      "Bindusara",
      "Pushyamitra Shunga"
    ],
    correctAnswer: 1,
    explanation: "Chandragupta Maurya founded the empire with guidance from his advisor Chanakya, also known as Kautilya.",
    era: "Ancient"
  },
  {
    id: "q5",
    question: "The Indus Valley Civilization is known for its urban planning and:",
    options: [
      "Iron weapons",
      "Advanced drainage systems",
      "Pyramid structures",
      "Democratic governance"
    ],
    correctAnswer: 1,
    explanation: "The civilization featured sophisticated urban planning including advanced drainage and water management systems.",
    era: "Ancient"
  },
  
  // Medieval India Quiz Questions
  {
    id: "q6",
    question: "Which Mughal emperor commissioned the Taj Mahal?",
    options: [
      "Akbar",
      "Jahangir",
      "Shah Jahan",
      "Aurangzeb"
    ],
    correctAnswer: 2,
    explanation: "Shah Jahan built the Taj Mahal as a mausoleum for his beloved wife Mumtaz Mahal who died in 1631.",
    era: "Medieval"
  },
  {
    id: "q7",
    question: "The Battle of Panipat in 1526 established which dynasty in India?",
    options: [
      "Delhi Sultanate",
      "Mughal Empire",
      "Maratha Empire",
      "Vijayanagara Empire"
    ],
    correctAnswer: 1,
    explanation: "Babur defeated Ibrahim Lodi at Panipat, establishing the Mughal Empire that would rule for centuries.",
    era: "Medieval"
  },
  {
    id: "q8",
    question: "Which medieval Indian empire was established to protect Hindu culture from northern Muslim expansion?",
    options: [
      "Chola Empire",
      "Vijayanagara Empire",
      "Chalukya Dynasty",
      "Pala Empire"
    ],
    correctAnswer: 1,
    explanation: "The Vijayanagara Empire, founded in 1336, served as a bulwark protecting southern Hindu traditions.",
    era: "Medieval"
  },
  {
    id: "q9",
    question: "The Bhakti Movement in medieval India focused on:",
    options: [
      "Military conquest",
      "Direct devotional worship of God",
      "Agricultural innovations",
      "Maritime trade expansion"
    ],
    correctAnswer: 1,
    explanation: "The Bhakti Movement emphasized personal devotion to God without elaborate rituals or priestly intermediaries.",
    era: "Medieval"
  },
  {
    id: "q10",
    question: "Emperor Akbar's religious policy 'Din-i-Ilahi' was based on:",
    options: [
      "Strict Islamic law",
      "Hindu Vedic traditions only",
      "Buddhist principles",
      "Principles from various religions"
    ],
    correctAnswer: 3,
    explanation: "Din-i-Ilahi incorporated elements from various religions, reflecting Akbar's inclusive approach.",
    era: "Medieval"
  },
  
  // Modern India Quiz Questions
  {
    id: "q11",
    question: "The Battle of Plassey (1757) was fought between:",
    options: [
      "Marathas and Mughals",
      "British East India Company and the Nawab of Bengal",
      "French and British forces",
      "Tipu Sultan and the British"
    ],
    correctAnswer: 1,
    explanation: "The British East India Company under Robert Clive defeated Siraj ud-Daulah, the Nawab of Bengal.",
    era: "Modern"
  },
  {
    id: "q12",
    question: "Who led the Salt March in 1930?",
    options: [
      "Jawaharlal Nehru",
      "Subhas Chandra Bose",
      "Mahatma Gandhi",
      "Sardar Vallabhbhai Patel"
    ],
    correctAnswer: 2,
    explanation: "Mahatma Gandhi led the 240-mile march to protest the British salt monopoly and tax laws.",
    era: "Modern"
  },
  {
    id: "q13",
    question: "The Jallianwala Bagh Massacre occurred in which year?",
    options: [
      "1905",
      "1919",
      "1930",
      "1942"
    ],
    correctAnswer: 1,
    explanation: "On April 13, 1919, British troops under General Dyer fired on unarmed civilians in Amritsar.",
    era: "Modern"
  },
  {
    id: "q14",
    question: "Which organization was founded in 1885 and later led India's independence movement?",
    options: [
      "Muslim League",
      "Azad Hind Fauj",
      "Indian National Congress",
      "Hindustan Socialist Republican Association"
    ],
    correctAnswer: 2,
    explanation: "The Indian National Congress, initially founded as a moderate organization, became the primary vehicle for independence.",
    era: "Modern"
  },
  {
    id: "q15",
    question: "Who is known as the chief architect of the Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Patel",
      "Dr. B.R. Ambedkar"
    ],
    correctAnswer: 3,
    explanation: "Dr. B.R. Ambedkar chaired the drafting committee and is considered the principal architect of the Constitution.",
    era: "Modern"
  }
];

// Key historical decisions and their impacts
export interface Decision {
  id: string;
  era: 'Ancient' | 'Medieval' | 'Modern';
  decision: string;
  impact: string;
  outcomes: string[];
}

export const historicalDecisions: Decision[] = [
  // Ancient India
  {
    id: "d1",
    era: "Ancient",
    decision: "Ashoka's peace policy after Kalinga War",
    impact: "Led to the spread of Buddhism throughout Asia and established principles of non-violence in governance",
    outcomes: [
      "Buddhism became a major world religion",
      "Diplomatic relations established with neighboring kingdoms",
      "Decline in military expansionism in favor of cultural exchange"
    ]
  },
  {
    id: "d2",
    era: "Ancient",
    decision: "Establishment of trade routes with Roman Empire",
    impact: "Created vast wealth through export of spices, textiles, and luxury goods",
    outcomes: [
      "Cultural exchange between India and Mediterranean civilizations",
      "Urban growth in port cities along the western coast",
      "Development of advanced shipbuilding and navigation techniques"
    ]
  },
  {
    id: "d3",
    era: "Ancient",
    decision: "Standardization of Sanskrit as scholarly language",
    impact: "Unified diverse regions through common literary and scholarly tradition",
    outcomes: [
      "Creation of vast corpus of texts on religion, science, and philosophy",
      "Transmission of knowledge across different regions",
      "Development of systematic grammar and linguistics"
    ]
  },
  
  // Medieval India
  {
    id: "d4",
    era: "Medieval",
    decision: "Akbar's religious tolerance policies",
    impact: "Created social cohesion in a diverse empire and reduced religious conflict",
    outcomes: [
      "Development of syncretic Indo-Islamic culture",
      "Increased participation of Hindus in Mughal administration",
      "Period of relative communal harmony and cultural flourishing"
    ]
  },
  {
    id: "d5",
    era: "Medieval",
    decision: "Establishment of Delhi as imperial capital",
    impact: "Centralized power in northern India for centuries",
    outcomes: [
      "Development of distinctive Indo-Islamic architecture",
      "Concentration of political and cultural power in the region",
      "Creation of administrative systems copied by succeeding regimes"
    ]
  },
  {
    id: "d6",
    era: "Medieval",
    decision: "Vijayanagara Empire's investment in irrigation",
    impact: "Created agricultural surplus that funded cultural and military growth",
    outcomes: [
      "Population growth and urbanization in southern India",
      "Support for temple construction and arts",
      "Resilience against droughts and famines"
    ]
  },
  
  // Modern India
  {
    id: "d7",
    era: "Modern",
    decision: "Non-violent civil disobedience against British rule",
    impact: "Mobilized millions across social divides and gained international sympathy",
    outcomes: [
      "Undermined moral authority of colonial rule",
      "Created unified national identity across diverse groups",
      "Established template for peaceful resistance movements worldwide"
    ]
  },
  {
    id: "d8",
    era: "Modern",
    decision: "Partition of India in 1947",
    impact: "Created independent nations of India and Pakistan with religious majority populations",
    outcomes: [
      "Mass migration of approximately 14 million people",
      "Communal violence resulting in hundreds of thousands of deaths",
      "Ongoing geopolitical tensions in South Asia"
    ]
  },
  {
    id: "d9",
    era: "Modern",
    decision: "Adoption of democratic constitution after independence",
    impact: "Established world's largest democracy with guaranteed rights and federalism",
    outcomes: [
      "Peaceful transfer of power through elections",
      "Protection of minority rights through constitutional safeguards",
      "Development of independent judiciary and civil service"
    ]
  }
];
