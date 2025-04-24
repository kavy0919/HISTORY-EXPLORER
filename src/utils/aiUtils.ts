
/**
 * Simulate AI-powered features
 * 
 * In a production app, these would call real AI endpoints
 */

// Simulate a delay for "AI processing"
export const simulateAIDelay = async (minMs = 500, maxMs = 1500): Promise<void> => {
  const delay = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return new Promise(resolve => setTimeout(resolve, delay));
};

// Generate a "What If" scenario response
export const generateWhatIfResponse = async (
  event: string, 
  scenario: string
): Promise<string> => {
  await simulateAIDelay();
  
  // Enhanced response generation based on keywords and event types
  const response = `In this alternative timeline, ${scenario.toLowerCase()}. `;
  
  if (scenario.toLowerCase().includes("lost") || scenario.toLowerCase().includes("fail")) {
    return response + "This pivotal defeat would have dramatically altered the course of history. In the short term, different leadership might have emerged, changing immediate policies and alliances. Long term effects could include shifts in cultural development, trade routes, and political structures that would have reshaped the region for centuries. Consider how the defeated faction's successors might have approached governance, religion, and international relations differently.";
  } else if (scenario.toLowerCase().includes("never") || scenario.toLowerCase().includes("didn't")) {
    return response + "The absence of this crucial event would have created a significant historical vacuum. Short term, existing power structures might have persisted, delaying inevitable changes. In the long run, alternative developments would likely have emerged to address similar societal needs, though perhaps taking very different forms. The cultural and political landscape would have evolved along a distinctly different path.";
  } else if (scenario.toLowerCase().includes("earlier") || scenario.toLowerCase().includes("sooner")) {
    return response + "An accelerated timeline would have encountered a very different social and political context. Initially, society might have struggled to adapt to premature changes. However, the long-term implications could include faster technological advancement, earlier cultural transformations, and reorganized power structures. Consider how this ripple effect might have influenced subsequent historical developments.";
  } else if (scenario.toLowerCase().includes("later") || scenario.toLowerCase().includes("delayed")) {
    return response + "A delayed occurrence would have allowed alternative developments to take root first. In the immediate aftermath, competing influences might have gained stronger footholds. The long-term impact could include a fundamentally different social order, alternative technological pathways, and shifted centers of power. This timing change would have reshaped not just the event itself, but its entire historical context.";
  } else {
    return response + "This change would have cascaded through history in complex ways. Immediate effects might have included shifts in power dynamics and social structures. Long-term consequences could have transformed cultural development, technological innovation, and political alignments. Consider how different groups and regions would have adapted to and influenced these changes over time.";
  }
};

// Generate voice narration text
export const generateEraSummary = async (era: 'Ancient' | 'Medieval' | 'Modern'): Promise<string> => {
  await simulateAIDelay();
  
  switch (era) {
    case 'Ancient':
      return "Ancient India, spanning from the Indus Valley Civilization around 3300 BCE to the end of the Gupta Empire in the 6th century CE, laid the foundations for South Asian civilization. This period saw remarkable achievements in urban planning, mathematics, astronomy, and philosophy. The concept of zero, decimal system, and early calculations of pi emerged during this time. Major religions like Hinduism, Buddhism, and Jainism developed their core philosophies, while empires like the Maurya and Gupta established sophisticated administrative systems. Literature flourished with Sanskrit epics like the Mahabharata and Ramayana, and architectural marvels like the Ajanta and Ellora caves demonstrated advanced artistic expressions. Trade networks connected India to civilizations from Rome to China, facilitating cultural and technological exchange.";
      
    case 'Medieval':
      return "Medieval India, roughly from the 6th to the 18th century CE, was characterized by regional kingdoms, Islamic influences, and cultural synthesis. The Delhi Sultanate and later the Mughal Empire introduced Persian and Central Asian elements to Indian culture, architecture, and governance. This period saw the development of Indo-Islamic architecture, exemplified by structures like the Taj Mahal and Qutub Minar. The Bhakti and Sufi movements promoted religious harmony through devotional practices accessible to all social classes. Regional empires like the Cholas in the south expanded trade networks across Southeast Asia, while the Vijayanagara Empire preserved classical Hindu traditions. Agricultural innovations, textile manufacturing, and maritime commerce contributed to economic prosperity, making India account for nearly a quarter of the world's economy by the end of this era.";
      
    case 'Modern':
      return "Modern India begins with the advent of European colonial influences, particularly British rule following the Battle of Plassey in 1757. The colonial period saw fundamental transformations in administration, education, and infrastructure, alongside economic exploitation and cultural disruption. The First War of Independence in 1857 marked an early challenge to British authority. The late 19th and early 20th centuries witnessed the rise of nationalism through organizations like the Indian National Congress. Under leaders like Mahatma Gandhi, Jawaharlal Nehru, and Subhas Chandra Bose, the independence movement employed various strategies from non-violent civil disobedience to armed resistance. Independence in 1947 came with the traumatic Partition creating India and Pakistan. Post-independence, India established itself as a democratic republic with a constitution guaranteeing fundamental rights, while navigating challenges of development, social reform, and international relations in a rapidly changing global context.";
      
    default:
      return "Historical information for the selected era is currently being compiled.";
  }
};

// Generate quiz questions
export const generateQuiz = async (era: 'Ancient' | 'Medieval' | 'Modern', questions: any[]): Promise<any[]> => {
  await simulateAIDelay();
  
  // Filter questions based on era and select random 5
  const eraQuestions = questions.filter(q => q.era === era);
  const shuffled = [...eraQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

// Historical knowledge database
const historicalDatabase = {
  ashoka: {
    personalDetails: {
      fullName: "Emperor Ashoka (Ashoka Maurya)",
      birthYear: "304 BCE",
      deathYear: "231 BCE",
      birthPlace: "Pataliputra (modern Patna)",
      father: "Emperor Bindusara",
      grandfather: "Chandragupta Maurya",
      dynasty: "Mauryan Empire",
      capitalCity: "Pataliputra"
    },
    timeline: [
      { year: "268 BCE", event: "Ascended the throne after a succession struggle" },
      { year: "261 BCE", event: "Conquered Kalinga (modern Odisha); horrified by the bloodshed" },
      { year: "260 BCE", event: "Embraced Buddhism under the monk Upagupta" },
      { year: "259-232 BCE", event: "Issued edicts on pillars and rocks promoting non-violence and tolerance" },
      { year: "250 BCE", event: "Organized the Third Buddhist Council in Pataliputra" },
      { year: "250 BCE", event: "Sent missionaries including his son Mahinda to Sri Lanka" },
      { year: "231 BCE", event: "Died in Pataliputra" }
    ],
    achievements: [
      "Unified diverse regions under one empire",
      "Promoted ethical governance through his concept of Dhamma",
      "Spread Buddhism across Asia through missionaries",
      "Built hospitals, schools, and planted trees for public welfare",
      "Created the Lion Capital of Sarnath, now India's national emblem",
      "Established diplomatic relations with Greek kingdoms"
    ],
    lesserKnownFacts: [
      "His edicts were written in Prakrit using the Brahmi script",
      "He was called 'Devanampiya' (Beloved of the Gods) in his edicts",
      "He planted banyan trees along roads for shade",
      "He banned animal sacrifices and hunting of certain species",
      "He built rest houses and watering stations along major trade routes"
    ]
  },
  akbar: {
    personalDetails: {
      fullName: "Jalaluddin Muhammad Akbar",
      birthYear: "1542",
      deathYear: "1605",
      birthPlace: "Umarkot (modern Pakistan)",
      father: "Humayun",
      dynasty: "Mughal Empire",
      capitalCity: "Initially Agra, then Fatehpur Sikri",
      reign: "1556-1605 CE"
    },
    timeline: [
      { year: "1556", event: "Crowned emperor after the Second Battle of Panipat" },
      { year: "1562", event: "Married Jodha Bai, a Rajput princess, to strengthen alliances" },
      { year: "1564", event: "Abolished the jizya tax on non-Muslims" },
      { year: "1571-1585", event: "Built Fatehpur Sikri as his capital" },
      { year: "1582", event: "Founded Din-i-Ilahi, a syncretic faith blending various religions" },
      { year: "1590s", event: "Conquered Gujarat and Bengal, expanding the empire" },
      { year: "1605", event: "Died of dysentery in Agra" }
    ],
    achievements: [
      "Expanded the Mughal Empire to cover most of northern India",
      "Established the mansabdari system of administration",
      "Created a centralized tax system called Dahsala",
      "Patronized arts, architecture, and literature (e.g., Akbarnama)",
      "Built the Buland Darwaza at Fatehpur Sikri",
      "Had scholars translate Sanskrit works into Persian"
    ],
    lesserKnownFacts: [
      "He was illiterate but had a vast library with over 24,000 books",
      "He banned child marriage and encouraged widow remarriage",
      "His court had nine 'navratnas' (nine jewels), including Birbal and Tansen",
      "He learned to hunt tigers without weapons",
      "He could carry two men on each arm while running"
    ]
  },
  gandhi: {
    personalDetails: {
      fullName: "Mohandas Karamchand Gandhi",
      birthYear: "1869",
      deathYear: "1948",
      birthPlace: "Porbandar, Gujarat",
      education: "Studied law in London",
      titles: "Mahatma (Great Soul), Father of the Nation",
      spouse: "Kasturba Gandhi",
      children: "Four sons - Harilal, Manilal, Ramdas, and Devdas"
    },
    timeline: [
      { year: "1893-1914", event: "Worked in South Africa, developed Satyagraha philosophy" },
      { year: "1915", event: "Returned to India, joined the Indian National Congress" },
      { year: "1919", event: "Led protests against the Rowlatt Act" },
      { year: "1920-1922", event: "Launched the Non-Cooperation Movement" },
      { year: "1930", event: "Led the Dandi Salt March against salt tax" },
      { year: "1942", event: "Initiated the Quit India Movement" },
      { year: "1947", event: "India gained independence; Gandhi fasted to stop Partition violence" },
      { year: "1948", event: "Assassinated by Nathuram Godse in Delhi" }
    ],
    achievements: [
      "Led India to independence through non-violent resistance",
      "Inspired civil rights movements worldwide",
      "Popularized khadi (handwoven cloth) for self-reliance",
      "Worked to eradicate untouchability",
      "Advocated for women's rights and education",
      "Developed the philosophy of Satyagraha (truth-force)"
    ],
    lesserKnownFacts: [
      "He was nominated for the Nobel Peace Prize five times but never won",
      "He wrote his autobiography in Gujarati: 'The Story of My Experiments with Truth'",
      "He walked an average of 18 km daily during his campaigns",
      "He corresponded with Leo Tolstoy and was influenced by his ideas",
      "He practiced as a lawyer in Bombay before moving to South Africa"
    ]
  },
  rani: {
    personalDetails: {
      fullName: "Rani Lakshmibai (born Manikarnika Tambe)",
      birthYear: "1828",
      deathYear: "1858",
      birthPlace: "Varanasi",
      spouse: "Maharaja Gangadhar Rao of Jhansi",
      adoptedSon: "Damodar Rao",
      kingdom: "Jhansi"
    },
    timeline: [
      { year: "1842", event: "Married Maharaja Gangadhar Rao of Jhansi" },
      { year: "1853", event: "Gangadhar Rao died; British annexed Jhansi under Doctrine of Lapse" },
      { year: "1857", event: "Joined the Revolt of 1857 after sepoys mutinied in Meerut" },
      { year: "1858", event: "Defended Jhansi against British forces led by Sir Hugh Rose" },
      { year: "1858", event: "Escaped Jhansi with her son tied to her back" },
      { year: "June 17, 1858", event: "Died in battle at Gwalior" }
    ],
    achievements: [
      "Became a symbol of resistance against British colonialism",
      "One of the leading figures of the Indian Rebellion of 1857",
      "Trained and led her own army of men and women",
      "Successfully defended Jhansi for a period against superior British forces",
      "Inspired generations of Indian freedom fighters"
    ],
    lesserKnownFacts: [
      "She was trained in sword fighting, archery, and horse riding as a child",
      "Her horse, Badal, famously jumped a fort wall during her escape from Jhansi",
      "British officer Hugh Rose called her 'the best and bravest' of the rebels",
      "She dressed as a man in battle to avoid being identified",
      "She was an expert in Mallakhamba, a traditional Indian sport"
    ]
  },
  harappa: {
    personalDetails: {
      era: "Indus Valley Civilization, 2600-1900 BCE",
      locations: "Major cities included Harappa and Mohenjo-daro",
      occupation: "Merchant/Trader",
      socialStructure: "Urban civilization with planned cities"
    },
    timeline: [
      { year: "2600 BCE", event: "Peak of Harappan urban planning" },
      { year: "2500 BCE", event: "Extensive trade networks with Mesopotamia established" },
      { year: "2300 BCE", event: "Standardized weights and measures in use across the civilization" },
      { year: "2000 BCE", event: "Beginning of the decline of major urban centers" },
      { year: "1900 BCE", event: "Most cities abandoned due to climate change or other factors" }
    ],
    achievements: [
      "Advanced urban planning with grid-pattern streets",
      "Sophisticated drainage and sanitation systems",
      "Standardized weights and measures for trade",
      "Extensive trade networks reaching Mesopotamia",
      "Development of a writing system (still undeciphered)",
      "Creation of distinctive seals and pottery"
    ],
    lesserKnownFacts: [
      "Harappans used a script with around 400 distinct symbols",
      "They had knowledge of metallurgy and produced bronze tools",
      "They cultivated cotton and were likely the first to spin and weave it",
      "They built docks and warehouses at coastal trading cities like Lothal",
      "They created toys with movable parts and board games"
    ]
  },
  shivaji: {
    personalDetails: {
      fullName: "Shivaji Bhonsle (later Chhatrapati Shivaji Maharaj)",
      birthYear: "1630",
      deathYear: "1680",
      birthPlace: "Shivneri Fort",
      father: "Shahaji Bhonsle",
      mother: "Jijabai",
      kingdom: "Maratha Empire",
      coronation: "1674 at Raigad"
    },
    timeline: [
      { year: "1646", event: "Captured Torna Fort at age 16, beginning his conquests" },
      { year: "1659", event: "Killed Mughal general Afzal Khan at Pratapgad" },
      { year: "1664", event: "Raided Surat, a wealthy Mughal port" },
      { year: "1665", event: "Signed Treaty of Purandar with Mughals, ceding 23 forts" },
      { year: "1666", event: "Visited Agra, escaped from Mughal captivity" },
      { year: "1674", event: "Crowned himself Chhatrapati (sovereign) at Raigad" },
      { year: "1680", event: "Died at Raigad Fort" }
    ],
    achievements: [
      "Founded the Maratha Empire that later challenged Mughal rule",
      "Developed guerrilla warfare tactics using mountainous terrain",
      "Created a navy to protect the Konkan coast",
      "Established an administrative system called Ashta Pradhan (council of eight ministers)",
      "Built or captured over 300 forts to secure his territory",
      "Created a revenue system that reduced corruption"
    ],
    lesserKnownFacts: [
      "His navy was one of the first Indian forces to challenge European powers",
      "His mother, Jijabai, was a major influence on his military and political education",
      "He respected all religions and had Muslims in his army and administration",
      "He was known as 'Mountain Rat' for his ability to navigate difficult terrain",
      "He could use multiple weapons including swords, bows, and firearms"
    ]
  }
};

// Generate historical figure response
interface HistoricalFigureResponse {
  response: string;
  note: string;
}

export const generateHistoricalFigureResponse = async (
  figureId: string,
  figureName: string,
  era: string,
  question: string
): Promise<HistoricalFigureResponse> => {
  await simulateAIDelay(800, 2000);
  
  // Enhanced context detection
  const isGreeting = /^(hi|hello|greetings|namaste|salutations|hey).*/i.test(question);
  const isAboutIdentity = /(who are you|tell me about yourself|introduce yourself|your background)/i.test(question);
  const isAboutTime = /(what time|which year|when|your time period|era|century|timeline)/i.test(question);
  const isAboutBirth = /(birth|born|birthplace|where were you born)/i.test(question);
  const isAboutDeath = /(death|die|how did you die|when did you die)/i.test(question);
  
  // Expanded keywords for better context understanding
  const isAboutRule = question.toLowerCase().includes("rule") || 
                     question.toLowerCase().includes("govern") || 
                     question.toLowerCase().includes("empire") ||
                     question.toLowerCase().includes("kingdom") ||
                     question.toLowerCase().includes("administration") ||
                     question.toLowerCase().includes("policy");
  
  const isAboutBelief = question.toLowerCase().includes("believe") || 
                       question.toLowerCase().includes("faith") || 
                       question.toLowerCase().includes("religion") ||
                       question.toLowerCase().includes("philosophy") ||
                       question.toLowerCase().includes("spiritual") ||
                       question.toLowerCase().includes("god");
  
  const isAboutWar = question.toLowerCase().includes("war") || 
                    question.toLowerCase().includes("battle") || 
                    question.toLowerCase().includes("fought") ||
                    question.toLowerCase().includes("conflict") ||
                    question.toLowerCase().includes("army") ||
                    question.toLowerCase().includes("military") ||
                    question.toLowerCase().includes("defeat") ||
                    question.toLowerCase().includes("victory");
  
  const isAboutAchievement = question.toLowerCase().includes("achievement") || 
                            question.toLowerCase().includes("accomplish") ||
                            question.toLowerCase().includes("contribution") ||
                            question.toLowerCase().includes("legacy") ||
                            question.toLowerCase().includes("impact") ||
                            question.toLowerCase().includes("influence");
                            
  const isAboutFamily = question.toLowerCase().includes("family") || 
                       question.toLowerCase().includes("children") || 
                       question.toLowerCase().includes("spouse") ||
                       question.toLowerCase().includes("married") ||
                       question.toLowerCase().includes("wife") ||
                       question.toLowerCase().includes("husband") ||
                       question.toLowerCase().includes("son") ||
                       question.toLowerCase().includes("daughter") ||
                       question.toLowerCase().includes("father") ||
                       question.toLowerCase().includes("mother");
                       
  const isAboutEvent = question.toLowerCase().includes("event") ||
                      question.toLowerCase().includes("happened") ||
                      question.toLowerCase().includes("incident") ||
                      question.toLowerCase().includes("occurrence");
  
  // Access the figure's data from our database
  const figureData = historicalDatabase[figureId as keyof typeof historicalDatabase];
  
  // Figure-specific responses with enhanced contextual awareness
  let response = "";
  let note = "";
  
  switch (figureId) {
    case "ashoka":
      if (isGreeting) {
        response = "Greetings to you! I am Emperor Ashoka of the Mauryan dynasty. How may I enlighten you today about ancient India or my reign?";
        note = "Note: Emperor Ashoka ruled from 268 to 232 BCE over most of the Indian subcontinent.";
      } else if (isAboutIdentity) {
        response = `I am Ashoka, third emperor of the Mauryan dynasty, grandson of Chandragupta Maurya who founded our empire. I was born in Pataliputra in 304 BCE. After witnessing the devastation of the Kalinga War in 261 BCE, I embraced Buddhism and transformed from a fierce conqueror to a ruler guided by dharma, non-violence, and compassion.`;
        note = "Note: Ashoka's conversion to Buddhism marked a significant turning point in Indian history.";
      } else if (isAboutBirth) {
        response = `I was born in the year 304 BCE in Pataliputra, the capital of the Mauryan Empire, which is modern-day Patna in Bihar. I was the son of Emperor Bindusara and grandson of Chandragupta Maurya, the founder of our dynasty.`;
        note = "Note: Details of Ashoka's early life come primarily from Buddhist texts rather than his own edicts.";
      } else if (isAboutDeath) {
        response = `I died in the year 231 BCE in Pataliputra after ruling for nearly four decades. I spent my final years continuing to spread the message of dharma and ensuring the stability of the vast empire I had governed.`;
        note = "Note: The exact circumstances of Ashoka's death are not well-documented in historical records.";
      } else if (isAboutTime) {
        response = `I lived during the 3rd century BCE, ruling the Mauryan Empire from approximately 268 to 232 BCE. This was a golden age of Indian civilization, with advances in art, architecture, philosophy, and governance. My empire stretched from present-day Afghanistan to Bangladesh and from Nepal to southern India, making it one of the largest empires of its time.`;
        note = "Note: The Mauryan period represents one of the earliest unified empires in Indian history.";
      } else if (isAboutRule) {
        response = `I ruled the vast Mauryan Empire from 268 to 232 BCE with compassion and dharma, especially after the Kalinga War changed my perspective. My empire stretched across most of the Indian subcontinent, and I governed through rock and pillar edicts that promoted moral principles, religious tolerance, and social welfare. My administration was centralized, with provinces governed by royal princes and officials. I implemented policies focused on public welfare, building hospitals for both humans and animals, constructing roads with rest houses, and digging wells for travelers and common people.`;
        note = "Note: Ashoka's governance style is detailed in various historical sources including his edicts.";
      } else if (isAboutBelief) {
        response = `After witnessing the devastation of the Kalinga War, I embraced Buddhism and its principles of ahimsa (non-violence). However, my concept of dharma went beyond Buddhism to encompass universal ethical principles. I did not impose Buddhism on my subjects but supported it alongside other faiths, sending Buddhist missionaries as far as Greece and Southeast Asia to spread the dharma. I believed in religious tolerance, respect for elders, generosity to ascetics, and humane treatment of servants and animals—principles I promoted through my rock and pillar edicts.`;
        note = "Note: Ashoka's conversion to Buddhism occurred around 261 BCE after the Kalinga War.";
      } else if (isAboutWar) {
        response = `The Kalinga War in 261 BCE was the turning point of my life. As I surveyed the battlefield where over 100,000 were slain and many more injured or displaced, I was overcome with remorse at the suffering I had caused. The sight of the dead and wounded filled me with profound regret. After this bloodshed, I renounced warfare and dedicated my rule to peace and dharma. I declared in my edicts: "Now it is conquest by dharma that I consider to be the best conquest." I did maintain a strong army afterward, but primarily for defense rather than expansion.`;
        note = "Note: Ashoka's 13th rock edict vividly describes his remorse after the Kalinga War.";
      } else if (isAboutAchievement) {
        response = `My greatest contributions include spreading Buddhism across Asia through missionaries, including to Sri Lanka through my son Mahinda and daughter Sanghamitra. I established hospitals for humans and animals, constructed roads with rest houses, and planted medicinal herbs and shade trees for public benefit. My most enduring symbol is the Lion Capital at Sarnath, now India's national emblem. My rock and pillar edicts, carved in multiple languages and scripts, promoted moral governance, religious tolerance, and social harmony. Perhaps most importantly, I demonstrated that an empire could be governed with compassion and ethical principles rather than through fear and force.`;
        note = "Note: Ashoka's edicts were written in Prakrit and used Brahmi script, making them key archaeological evidence.";
      } else if (isAboutFamily) {
        response = `I had several queens, including Devi (or Vedisa-Mahadevi) who was my first wife before I became emperor, and Karuvaki, mentioned in my edicts as the mother of my son Tivara. My son Mahendra and daughter Sanghamitra were born to Queen Devi and later became Buddhist missionaries to Sri Lanka. My grandfather was Chandragupta Maurya, founder of our dynasty, and my father was Emperor Bindusara. My grandson Dasharatha succeeded me after my death. Family relations were important not just personally but also for maintaining the vast empire through strategic marriages and appointments of relatives to key positions.`;
        note = "Note: Much of what we know about Ashoka's family comes from Buddhist texts rather than contemporary records.";
      } else if (isAboutEvent) {
        const timelineEvents = figureData.timeline.map(item => `In ${item.year}, ${item.event.toLowerCase()}`).join(". ");
        response = `The key events of my life include: ${timelineEvents}. The Kalinga War in 261 BCE was particularly significant, as the bloodshed I witnessed transformed my approach to rule and led me to embrace Buddhism and principles of non-violence.`;
        note = "Note: Ashoka's timeline is reconstructed from his edicts and Buddhist chronicles.";
      } else {
        // Check if the question contains any keywords from the lesser-known facts
        const matchingFact = figureData.lesserKnownFacts.find(fact => 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[0]) || 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[1])
        );
        
        if (matchingFact) {
          response = `Indeed, it is true that ${matchingFact.toLowerCase()}. This is one of the many aspects of my rule and times that demonstrates how our civilization advanced not just in conquest but in culture, administration, and ethical governance.`;
          note = "Note: This information comes from archaeological findings and historical records about the Mauryan Empire.";
        } else {
          response = `As Emperor Ashoka, I seek to govern by dharma (righteous duty) rather than by force alone. After the bloody Kalinga War in 261 BCE, I embraced Buddhism and focused on promoting peace, social welfare, and religious tolerance throughout my empire. My rock and pillar edicts, found across the subcontinent, contain my messages of moral governance and ethical conduct. Is there a specific aspect of my reign or the Mauryan period you wish to explore further?`;
          note = "Note: Ashoka's reign (268-232 BCE) represents the zenith of the Mauryan Empire.";
        }
      }
      break;
      
    case "akbar":
      if (isGreeting) {
        response = "Salutations and welcome! I am Emperor Akbar, the third ruler of the great Mughal dynasty. How may I assist you in understanding the medieval splendor of Hindustan?";
        note = "Note: Akbar ruled from 1556 to 1605 CE, expanding the Mughal Empire across much of the Indian subcontinent.";
      } else if (isAboutIdentity) {
        response = `I am Jalaluddin Muhammad Akbar, born in 1542 in Umarkot while my father Humayun was in exile. I became the third Mughal emperor at the young age of 13 after my father's untimely death. Through military campaigns and diplomatic alliances, I expanded our empire across most of northern India. I am known for my policy of religious tolerance, cultural integration, and administrative innovations. Despite being illiterate, I fostered learning and arts, surrounding myself with nine exceptional courtiers known as the Navratnas.`;
        note = "Note: Akbar is widely regarded as one of the greatest rulers in Indian history.";
      } else if (isAboutBirth) {
        response = `I was born on October 15, 1542, in Umarkot (in modern-day Pakistan) while my father Humayun was fleeing from his enemies. My birth occurred during a difficult time for our family, as we had lost the throne of Delhi to Sher Shah Suri. My early years were spent in exile and hardship before our family fortune changed.`;
        note = "Note: Akbar's birth during his father's exile is a significant part of Mughal dynastic history.";
      } else if (isAboutDeath) {
        response = `I died on October 27, 1605, in Agra after suffering from dysentery. After nearly 50 years of rule, I left behind an empire at its zenith of power and cultural achievement. My son Salim, who would take the name Jahangir, succeeded me on the Mughal throne.`;
        note = "Note: Akbar's tomb is located in Sikandra, near Agra.";
      } else if (isAboutTime) {
        response = `I lived during the 16th century, ruling the Mughal Empire from 1556 to 1605 CE. This was a period of great cultural synthesis between Persian, Central Asian, and Indian traditions, leading to remarkable developments in art, architecture, and governance. My reign coincided with the rule of Elizabeth I in England and the Ottoman Sultan Suleiman the Magnificent in Turkey. It was an era of expanding global connections, with European powers establishing early trading posts in India.`;
        note = "Note: The 16th century in India marked the consolidation of Mughal rule and significant cultural developments.";
      } else if (isAboutRule) {
        response = `I ruled the Mughal Empire from 1556 to 1605 CE, expanding it through military campaigns and diplomatic marriages with Rajput princesses. My administration was marked by the mansabdari system, which assigned ranks to nobles for both civil and military responsibilities. I reformed the tax system with the Dahsala system, which calculated taxes based on cultivated land and crop prices over ten years. My policy of Sulh-i-Kul (universal peace) ensured religious tolerance and integration. I governed with the help of my Nav Ratnas (nine jewels) - exceptional courtiers including Birbal, Todar Mal, and Tansen. I established Fatehpur Sikri as my capital, though water scarcity later forced us to abandon it.`;
        note = "Note: Akbar's administrative systems are well-documented in Abul Fazl's Akbarnama.";
      } else if (isAboutBelief) {
        response = `I established Din-i-Ilahi (Divine Faith) in 1582, a syncretic spiritual path that combined elements from various religions including Islam, Hinduism, Zoroastrianism, and Christianity. This was not meant to be a new religion but rather a path for spiritual seekers that transcended sectarian divisions. I hosted regular religious debates in my Ibadat Khana (House of Worship) where scholars from different faiths would discuss their beliefs. Though born a Muslim, I abolished the jizya tax on non-Muslims, respected Hindu traditions, and formed marriage alliances with Rajput families. My belief in religious tolerance was revolutionary for my time and essential to governing a diverse empire.`;
        note = "Note: Din-i-Ilahi had limited followers beyond Akbar's immediate circle.";
      } else if (isAboutWar) {
        response = `I secured the Mughal throne at the Second Battle of Panipat in 1556 when I was merely 13 years old, defeating the Hindu general Hemu with the help of my regent Bairam Khan. Throughout my reign, I conducted numerous military campaigns to expand the empire. I conquered Malwa in 1561, Gondwana in 1564, Gujarat in 1572, and Bengal in 1576. I subdued rebellious Afghan tribes and extended Mughal influence into Kashmir and parts of the Deccan. The conquest of Chittor in 1568 was particularly significant in establishing my dominance over the Rajput states. While I preferred to win through alliances where possible, I did not hesitate to use military force when necessary, employing innovative tactics including artillery and elephant corps.`;
        note = "Note: Akbar personally led many military campaigns rather than relying solely on generals.";
      } else if (isAboutAchievement) {
        response = `My greatest contributions include fostering a rich Indo-Islamic culture through the patronage of art, architecture, and literature. I established the translation department (Maktab Khana) where Sanskrit works like the Ramayana and Mahabharata were translated into Persian. Fatehpur Sikri, my planned city, stands as a testament to the artistic brilliance of my era. I reformed administration through the mansabdari system and improved tax collection with the Dahsala system. My religious policy of Sulh-i-Kul (universal peace) promoted harmony among different faiths. I expanded the Mughal Empire to its greatest extent yet, creating a stable foundation that allowed the dynasty to flourish for generations after me. My court became a center of learning and culture, with the Nav Ratnas (nine jewels) contributing to various fields from finance to music.`;
        note = "Note: Akbar's cultural patronage led to the development of Mughal miniature paintings and Indo-Islamic architecture.";
      } else if (isAboutFamily) {
        response = `I had numerous wives and concubines, as was customary for emperors of my time. Mariam-uz-Zamani, a Rajput princess from Amber (also known as Jodha Bai in popular culture), was one of my favorite queens. My harem reportedly contained over 300 wives and concubines from various backgrounds, reflecting my policy of forming political alliances through marriage. My eldest son Salim, later known as Emperor Jahangir, succeeded me despite our troubled relationship in my later years. My other sons, Murad and Daniyal, died before me. My family alliances, particularly with Rajput houses like Amber and Bikaner, were crucial to stabilizing the empire and implementing my policy of inclusion.`;
        note = "Note: Akbar's marriage alliances with Rajput families were an important part of his political strategy.";
      } else if (isAboutEvent) {
        const timelineEvents = figureData.timeline.map(item => `In ${item.year}, ${item.event.toLowerCase()}`).join(". ");
        response = `The key events of my life include: ${timelineEvents}. The Second Battle of Panipat in 1556 was particularly significant as it secured my claim to the throne at the young age of 13.`;
        note = "Note: Akbar's timeline is well-documented in the Akbarnama (Book of Akbar) written by his court historian Abul Fazl.";
      } else {
        // Check if the question contains any keywords from the lesser-known facts
        const matchingFact = figureData.lesserKnownFacts.find(fact => 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[0]) || 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[1])
        );
        
        if (matchingFact) {
          response = `Indeed, it is true that ${matchingFact.toLowerCase()}. This is one aspect of my life and reign that demonstrates my approach to governance, culture, and personal development.`;
          note = "Note: This information comes from historical chronicles of the Mughal period.";
        } else {
          response = `As Emperor Akbar, I expanded the Mughal Empire while promoting religious tolerance and cultural integration. My court at Fatehpur Sikri became a center of learning, with scholars of various faiths engaging in religious discourse through the Ibadat Khana. I reformed administration, abolished discriminatory taxes, and patronized arts and architecture. Is there a particular aspect of my rule or the medieval period that interests you?`;
          note = "Note: Akbar (1542-1605) is considered one of the most capable rulers of the Mughal dynasty.";
        }
      }
      break;
      
    case "gandhi":
      if (isGreeting) {
        response = "Namaste! I am Mohandas Karamchand Gandhi, though many call me Mahatma. How may I serve you and share the lessons of our freedom struggle?";
        note = "Note: Gandhi lived from 1869 to 1948 and was the foremost leader of India's independence movement.";
      } else if (isAboutIdentity) {
        response = `I am Mohandas Karamchand Gandhi, born in Porbandar, Gujarat in 1869. After studying law in England and working in South Africa for 21 years, I returned to India in 1915 to lead the independence movement based on principles of non-violence (ahimsa) and truth (satya). Though people call me Mahatma (great soul), I see myself simply as a seeker of truth. I lived a life of simplicity and conducted what I called "experiments with truth," trying to align my actions with my beliefs in all aspects of life.`;
        note = "Note: Gandhi's autobiography is titled 'The Story of My Experiments with Truth.'";
      } else if (isAboutBirth) {
        response = `I was born on October 2, 1869, in Porbandar, a coastal town in present-day Gujarat, to Karamchand Gandhi, who was the diwan (chief minister) of Porbandar state, and Putlibai, my deeply religious mother whose fasting practices greatly influenced me. I was born into the Modh Bania community, a merchant caste.`;
        note = "Note: Gandhi's birthdate is now celebrated as the International Day of Non-Violence.";
      } else if (isAboutDeath) {
        response = `I was assassinated on January 30, 1948, at Birla House in Delhi while walking to my evening prayer meeting. Nathuram Godse, a Hindu nationalist who opposed my philosophy of non-violence and my efforts for Hindu-Muslim unity, shot me three times at close range. My last words were reportedly "Hey Ram" (Oh God). My death came just months after India achieved independence, at a time when I was working to heal the wounds of Partition violence.`;
        note = "Note: Gandhi's funeral procession was attended by over two million people.";
      } else if (isAboutTime) {
        response = `I lived from 1869 to 1948, during the height of British colonial rule in India and through two World Wars. After returning from South Africa in 1915, I led India's independence movement for over three decades. I witnessed tremendous changes in India and the world: the rise of industrial society, two world wars, the Russian Revolution, and finally, the independence and partition of India in 1947. My era was marked by colonial exploitation, nationalist awakening, and global conflict—circumstances that shaped my philosophy of non-violent resistance as an alternative to both passive acceptance and violent revolution.`;
        note = "Note: Gandhi was assassinated on January 30, 1948, shortly after India gained independence.";
      } else if (isAboutRule) {
        response = `I never held official political power, as my strength lay in moral leadership rather than governance. I guided the Indian National Congress and the independence movement through principles of satyagraha (truth-force) and swaraj (self-rule). My vision of governance was based on decentralization of power, with village republics (Gram Swaraj) as the foundation. I believed in trusteeship of wealth rather than state ownership, where the wealthy would hold their resources in trust for society's benefit. Though I was offered leadership positions after independence, I chose to remain outside government, focusing instead on healing communal divisions and working with the poor. I believed that true democracy must uplift the weakest members of society.`;
        note = "Note: Gandhi's political philosophy is detailed in his books 'Hind Swaraj' and various writings on village self-sufficiency.";
      } else if (isAboutBelief) {
        response = `I believe in the power of truth (satya) and non-violence (ahimsa) as supreme principles. My faith draws from Hinduism, Jainism, Buddhism, and Christianity, emphasizing simple living, self-reliance, and universal brotherhood. The Bhagavad Gita's message of selfless action particularly influenced me. I practiced vegetarianism, brahmacharya (self-restraint), and periodic fasting as spiritual disciplines. I believe all religions contain truth and that religious differences should be respected rather than fought over. My concept of God is not a personal deity but Truth itself. I often said "God is Truth" and later reversed it to "Truth is God," recognizing that even atheists could connect with this principle.`;
        note = "Note: Gandhi read the Bhagavad Gita daily and cited it as his main spiritual reference.";
      } else if (isAboutWar) {
        response = `I opposed violent struggle in all forms, instead developing satyagraha – non-violent resistance – as our weapon against British rule. While I supported the British in the Boer War and World War I, my views evolved toward complete non-violence. During World War II, I launched the Quit India Movement in 1942 with the slogan 'Do or Die,' calling for immediate independence while maintaining our commitment to non-violence. I believed that violence begets more violence in an endless cycle, while non-violent resistance allows for reconciliation and lasting peace. Even when faced with the violent Partition riots, I insisted on non-violence and fasted to bring peace to riot-affected areas like Calcutta and Delhi.`;
        note = "Note: The Quit India Movement (1942) was Gandhi's final push for independence.";
      } else if (isAboutAchievement) {
        response = `My contributions include leading three major national movements – Non-Cooperation (1920-22), Civil Disobedience including the Salt March (1930), and Quit India (1942) – which progressively weakened British colonial rule. Beyond independence, I worked to eradicate untouchability, promote khadi (handspun cloth) for economic self-reliance, achieve Hindu-Muslim unity, and develop a model of self-sufficient village republics. I introduced new methods of non-violent resistance that inspired movements worldwide, from Martin Luther King Jr.'s civil rights campaign to Nelson Mandela's anti-apartheid struggle. My emphasis on the means being as important as the ends influenced political ethics globally. Though independence came with the painful partition I had opposed, my methods demonstrated that colonial power could be overcome without matching its violence.`;
        note = "Note: Gandhi's Salt March of 1930 covered 240 miles from Sabarmati to Dandi, breaking the salt tax law.";
      } else if (isAboutFamily) {
        response = `I married Kasturba when we were both 13 years old, as was the custom in our community. Our relationship evolved from a traditional arranged marriage to a partnership in the freedom struggle. Kasturba was a steadfast supporter who endured prison and hardship alongside me, passing away in 1944 while we were both imprisoned. We had four sons: Harilal, Manilal, Ramdas, and Devdas. My relationship with my family was complex, as my public commitments often took precedence over family life. My eldest son Harilal disagreed with my principles and lifestyle choices, creating a painful rift between us. My other sons participated in the independence movement to varying degrees, though I never showed them favoritism in our national work.`;
        note = "Note: Kasturba Gandhi was also an active participant in the freedom struggle and passed away in 1944.";
      } else if (isAboutEvent) {
        const timelineEvents = figureData.timeline.map(item => `In ${item.year}, ${item.event.toLowerCase()}`).join(". ");
        response = `The key events of my life include: ${timelineEvents}. The Salt March of 1930 was particularly significant as it demonstrated how a simple, non-violent act of defiance could mobilize an entire nation against unjust laws.`;
        note = "Note: Gandhi's timeline is well-documented in his autobiography and numerous biographies.";
      } else {
        // Check if the question contains any keywords from the lesser-known facts
        const matchingFact = figureData.lesserKnownFacts.find(fact => 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[0]) || 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[1])
        );
        
        if (matchingFact) {
          response = `Indeed, it is true that ${matchingFact.toLowerCase()}. This is one aspect of my life that reflects my commitment to truth and simplicity.`;
          note = "Note: This information comes from biographical accounts and Gandhi's own writings.";
        } else {
          response = `As Mahatma Gandhi, I led India's freedom struggle through non-violent means, organizing movements like the Salt March and advocating for social reforms including the abolition of untouchability. My philosophy of satyagraha became a powerful tool against colonial rule, inspiring freedom movements worldwide. I believed in simple living, self-sufficiency, and the equality of all religions. Is there a particular aspect of the independence movement or my philosophy that interests you?`;
          note = "Note: Gandhi's role in India's independence movement transformed both India and the concept of political resistance globally.";
        }
      }
      break;

    case "rani":
      if (isGreeting) {
        response = "Greetings to you! I am Rani Lakshmibai of Jhansi. How may I illuminate the struggles and spirit of our fight against foreign domination?";
        note = "Note: Rani Lakshmibai lived from 1828 to 1858 and became a symbol of resistance during the 1857 Revolt.";
      } else if (isAboutIdentity) {
        response = `I am Lakshmibai, the Rani of Jhansi, born as Manikarnika Tambe in Varanasi. I was married to Maharaja Gangadhar Rao Newalkar of Jhansi in 1842 and took the name Lakshmibai. After my husband's death in 1853, I took up the responsibility of ruling Jhansi and protecting our adopted son Damodar Rao's claim to the throne. When the British refused to recognize him as heir under their Doctrine of Lapse and annexed Jhansi, I became a leading figure in the uprising of 1857, fighting to reclaim our kingdom and resist foreign rule.`;
        note = "Note: Rani Lakshmibai was known for her horsemanship, swordsmanship, and administrative skills from a young age.";
      } else if (isAboutBirth) {
        response = `I was born around 1828 in the holy city of Varanasi (then called Benaras) to a Marathi Brahmin family. My father, Moropant Tambe, worked as an advisor in the court of the Peshwa of Bithoor, and my mother's name was Bhagirathi Bai. I was named Manikarnika at birth, but was affectionately called Manu in my childhood years.`;
        note = "Note: The exact date of Rani Lakshmibai's birth is not precisely recorded in historical documents.";
      } else if (isAboutDeath) {
        response = `I died on June 17, 1858, fighting against the British forces in the Battle of Gwalior. Dressed in male attire, I led my troops against the 8th Hussars commanded by Sir Hugh Rose. During intense combat, I was mortally wounded. Even my enemies recognized my courage, with Sir Hugh Rose later describing me as "the most dangerous of all Indian leaders" and "personable, clever, and beautiful." I died as I had lived - defiant and unbowed, fighting for freedom until my last breath.`;
        note = "Note: Rani Lakshmibai's death at Kotah-ki-Serai near Gwalior marked one of the final significant battles of the 1857 uprising.";
      } else if (isAboutTime) {
        response = `I lived in the mid-19th century, during the height of British colonial expansion in India. After the death of my husband Gangadhar Rao in 1853, I ruled Jhansi until the British annexed it under the Doctrine of Lapse. This was a time of growing British dominance, with many Indian states being absorbed into colonial territory. The great uprising of 1857-58, often called India's First War of Independence, was the defining moment of my life. It began with sepoy mutinies in Meerut and quickly spread across northern India, becoming a widespread rebellion against British rule that I ultimately joined.`;
        note = "Note: The 1857 Revolt is variously called the First War of Independence, the Sepoy Mutiny, or the Indian Rebellion, depending on perspective.";
      } else if (isAboutRule) {
        response = `I ruled Jhansi after my husband Gangadhar Rao's death in 1853, adopting Damodar Rao as heir to continue the dynasty. When Lord Dalhousie, the British Governor-General, refused to recognize the adoption under the Doctrine of Lapse, I was forced to surrender my kingdom, but I continued to administer it until the British appointed a commissioner. During my brief reign, I demonstrated strong administrative abilities, settling disputes fairly and maintaining law and order. I organized and trained my own army, including a women's regiment, showing my foresight regarding military matters. When the 1857 uprising reached Jhansi, I declared independence from British rule and took full control again, fortifying the city and leading its defense personally.`;
        note = "Note: The Doctrine of Lapse was a British annexation policy that rejected adopted heirs to princely states.";
      } else if (isAboutBelief) {
        response = `I believed in protecting my kingdom's sovereignty and the right of Indian rulers to govern without British interference. Though raised in a traditional Brahmin family with strong Hindu beliefs, I respected all faiths and had both Hindu and Muslim soldiers in my army. I was deeply committed to the concept of swaraj (self-rule) and believed that foreign domination was destructive to our culture and prosperity. I transcended gender restrictions of my time, leading armies and administering my state with courage and determination. While I was not initially eager for rebellion, once I committed to resisting British rule, I did so with complete conviction, inspiring both men and women to join the struggle.`;
        note = "Note: Rani Lakshmibai's religious beliefs were in line with the syncretic traditions of many Indian rulers of the time.";
      } else if (isAboutWar) {
        response = `During the uprising of 1857, I defended Jhansi against British forces led by Sir Hugh Rose. When the British laid siege to Jhansi in March 1858, I led the defense personally, appearing on the ramparts to inspire my soldiers. For two weeks, we held off a superior British force until they breached the walls. When Jhansi fell, I escaped on horseback with my adopted son Damodar Rao tied to my back, reportedly jumping from the fort wall with my horse Badal—a leap of about 18 feet. I reached Kalpi to join forces with Tatya Tope and continued fighting. After a defeat at Kalpi, we captured Gwalior fort, but were soon confronted by British forces again. I met my end fighting bravely at the Battle of Gwalior in June 1858, dressed as a male soldier.`;
        note = "Note: Sir Hugh Rose, who fought against Rani Lakshmibai, reportedly said she was 'the most dangerous of all Indian leaders'.";
      } else if (isAboutAchievement) {
        response = `My greatest contribution was inspiring generations of Indians in their fight for freedom. I broke gender barriers by leading armies in battle, demonstrating that women could be as courageous and strategic as men. My resistance became symbolic of Indian opposition to British colonialism, with the phrase "Khoob ladi mardani woh to Jhansi wali rani thi" (She fought valiantly like a man, she was the Queen of Jhansi) becoming part of Indian folklore. Though I did not live to see India's independence, my example showed that resistance was possible and necessary, even against seemingly insurmountable odds. My legacy lives on in India's collective memory as a symbol of patriotism, courage, and female empowerment.`;
        note = "Note: The famous quote 'Main apni Jhansi nahi dungi' (I will not surrender my Jhansi) is attributed to Rani Lakshmibai.";
      } else if (isAboutFamily) {
        response = `I was born in a Brahmin family to Moropant Tambe and Bhagirathi Bai. My mother died when I was four, and I was raised by my father who worked at the Peshwa's court. I received an unconventional upbringing for a girl, learning horsemanship, archery, and martial arts. In 1842, I married Maharaja Gangadhar Rao of Jhansi, who was much older than me. We had a son Damodar Rao who died as an infant, after which we adopted another boy, also named Damodar Rao. My husband died in 1853, leaving me to defend our kingdom and our son's right to the throne. During the 1857 uprising, I kept my adopted son with me even during battles, symbolizing my dual role as both a warrior and a mother protecting her child's inheritance.`;
        note = "Note: Rani Lakshmibai was only in her twenties during the events of 1857-58.";
      } else if (isAboutEvent) {
        const timelineEvents = figureData.timeline.map(item => `In ${item.year}, ${item.event.toLowerCase()}`).join(". ");
        response = `The key events of my life include: ${timelineEvents}. The British annexation of Jhansi in 1853 was particularly significant as it turned me from a ruler focused on administration to a rebel determined to reclaim her kingdom.`;
        note = "Note: Rani Lakshmibai initially tried diplomatic means to retain Jhansi before turning to armed resistance.";
      } else {
        // Check if the question contains any keywords from the lesser-known facts
        const matchingFact = figureData.lesserKnownFacts.find(fact => 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[0]) || 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[1])
        );
        
        if (matchingFact) {
          response = `Indeed, it is true that ${matchingFact.toLowerCase()}. This aspect of my life reflects the extraordinary circumstances that shaped my story during the uprising against British rule.`;
          note = "Note: This information comes from historical accounts of the 1857 rebellion.";
        } else {
          response = `As Rani Lakshmibai of Jhansi, I fought against British annexation of my kingdom during the 1857 uprising. Initially reluctant to join the rebellion, I was forced into conflict when the British attacked Jhansi. I led my forces in battle personally, even forming a women's regiment. After Jhansi fell, I escaped with my adopted son and continued fighting alongside other rebel leaders like Tatya Tope. I died fighting at Gwalior in June 1858, earning recognition even from my enemies for my courage and leadership. Is there something specific about the first war of independence or my role in it that you wish to know?`;
          note = "Note: Rani Lakshmibai is celebrated as one of the key figures in the 1857 Revolt against British rule.";
        }
      }
      break;
      
    case "harappa":
      if (isGreeting) {
        response = "Greetings, traveler! Welcome to the land of the great rivers. I am a merchant from Harappa. How may I share the wonders of our ancient civilization with you?";
        note = "Note: The Indus Valley Civilization flourished from approximately 2600 to 1900 BCE.";
      } else if (isAboutIdentity) {
        response = `I am a merchant from the great city of Harappa in the Indus Valley. Our civilization is built along the mighty Indus River and its tributaries. As a trader, I facilitate exchange of goods between our cities like Mohenjo-daro, Lothal, and Dholavira, and with distant lands like Mesopotamia. We Harappans are known for our advanced urban planning, standardized weights and measures, sophisticated drainage systems, and distinctive seals that we use for trade. Our society values order and cleanliness, as you can see in our carefully grid-patterned cities and elaborate bath structures.`;
        note = "Note: The Indus Valley Civilization was one of the world's first urban civilizations, contemporary with ancient Egypt and Mesopotamia.";
      } else if (isAboutBirth) {
        response = `I was born in the city of Harappa, one of the largest urban centers of our civilization, during the peak of our prosperity around 2500 BCE. Like most Harappans, I was raised in a brick-built house within our carefully planned city, learning the skills of trade and commerce from my family.`;
        note = "Note: Individual biographies from the Indus Valley Civilization don't exist as their writing remains undeciphered.";
      } else if (isAboutDeath) {
        response = `As a person of the Harappan age, I would expect to live about 35-40 years if fortunate. Our civilization is currently facing challenges - the rivers that sustain us are changing course, trade with Mesopotamia is declining, and some say the climate is becoming drier. Many of our fellow citizens are abandoning the great cities for smaller settlements. Perhaps in my lifetime or my children's, our grand urban centers may be largely abandoned.`;
        note = "Note: The Indus Valley Civilization declined gradually between 1900-1700 BCE, possibly due to climate change and shifting river patterns.";
      } else if (isAboutTime) {
        response = `I live during the mature phase of the Indus Valley Civilization, around 2500 BCE. Our cities have been prospering for several centuries now, with carefully planned streets, advanced drainage systems, and impressive granaries. This is the Bronze Age, where copper and bronze tools have revolutionized our crafts and agriculture. We are contemporaries of the Old Kingdom in Egypt and the early Mesopotamian civilizations, though our cities are often more systematically planned than theirs. We trade with distant lands, including Mesopotamia, and have developed our own system of writing, though we use it primarily for trade rather than lengthy texts.`;
        note = "Note: The Indus Valley Civilization peaked between 2600-1900 BCE and declined gradually, possibly due to climate changes.";
      } else if (isAboutRule) {
        response = `Our cities are governed differently from the priest-kings of Mesopotamia or the pharaohs of Egypt. We appear to have councils rather than autocratic rulers, possibly composed of merchants and priests. We have no grand palaces that would suggest a single all-powerful ruler. Instead, structures like the Great Bath in Mohenjo-daro suggest ritual importance. We value order and uniformity, as you can see in our city planning with straight streets meeting at right angles, standardized weights and measures, and uniform brick sizes. Our governance seems focused on trade, public works, and possibly religious rituals rather than military conquest or glorifying rulers.`;
        note = "Note: Unlike contemporary civilizations in Mesopotamia and Egypt, no definitive evidence of kings or emperors has been found in Indus sites.";
      } else if (isAboutBelief) {
        response = `We worship deities connected to fertility and natural forces. Many of our seals depict figures in yogic postures, suggesting early forms of meditation practices. One recurring figure appears to be a horned deity, possibly a prototype of later Hindu gods. We also venerate animals, particularly bulls and unicorn-like creatures. Water plays a central role in our purification rituals, as evidenced by our Great Bath at Mohenjo-daro and the numerous small bathing platforms found in our homes. We create figurines of mother goddesses, suggesting worship of female deities associated with fertility. While much about our specific religious practices remains unknown to outsiders, the emphasis on cleanliness and ritual purity seems central to our beliefs.`;
        note = "Note: Some scholars see connections between Indus Valley religious practices and later Hindu traditions like yoga and ritual bathing.";
      } else if (isAboutWar) {
        response = `Unlike Mesopotamia or Egypt, our cities show little evidence of warfare or large-scale conflicts. We have few weapons compared to other civilizations, and our art rarely depicts battle scenes or military triumphs. Our cities lack prominent defensive walls built specifically for military purposes, though they do have platforms and structures that could serve defensive functions if needed. The uniformity across our vast civilization suggests political stability rather than conquest. Our prosperity appears based on trade and agriculture rather than subjugation of neighbors. This doesn't mean we are entirely peaceful—we surely have disputes—but organized warfare does not seem central to our society as it is in other contemporary civilizations.`;
        note = "Note: The apparent lack of warfare evidence is a distinctive feature of the Indus Valley Civilization.";
      } else if (isAboutAchievement) {
        response = `Our greatest achievements include sophisticated urban planning with grid-pattern streets, multi-story buildings, and covered drainage systems that were unparalleled in the ancient world. Our engineers created standardized weights and measures for fair trade across vast regions. We've developed a writing system with hundreds of distinct signs, though it remains brief and primarily used on seals. Our water management systems include not only drainage but also sophisticated wells, bathrooms in houses, and the Great Bath. Our artisans create beautiful beaded jewelry, intricate seals carved from steatite, and distinctive pottery. Perhaps most remarkably, we've created a standardized culture across a vast region, with similar city layouts, artifacts, and weights from the Arabian Sea to the foothills of the Himalayas—an area larger than ancient Egypt or Mesopotamia.`;
        note = "Note: The Indus script remains one of the world's undeciphered writing systems, with around 400 distinct symbols.";
      } else if (isAboutFamily) {
        response = `Our families typically live in houses within the carefully planned cities. Our homes vary in size, suggesting different social statuses, but lack the extreme disparities seen in other civilizations. Most houses have multiple rooms around a central courtyard, with separate bathing areas showing our concern for cleanliness. Children are valued in our society—we create toys like small carts, whistles, and figurines for them. From a young age, children learn crafts and skills from their parents. While we have some social stratification, it appears less rigid than in contemporary societies. Women likely held significant status, as suggested by our figurines and seals depicting females in positions of importance. Marriage customs are not clearly documented, but family units appear to be the basic social structure.`;
        note = "Note: Archaeological evidence suggests relatively egalitarian social structures compared to contemporary civilizations.";
      } else if (isAboutEvent) {
        const timelineEvents = figureData.timeline.map(item => `Around ${item.year}, ${item.event.toLowerCase()}`).join(". ");
        response = `The key developments in our civilization include: ${timelineEvents}. The establishment of trade networks with Mesopotamia was particularly significant as it brought prosperity and cultural exchange to our cities.`;
        note = "Note: The Indus Valley timeline is reconstructed from archaeological evidence rather than written records.";
      } else {
        // Check if the question contains any keywords from the lesser-known facts
        const matchingFact = figureData.lesserKnownFacts.find(fact => 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[0]) || 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[1])
        );
        
        if (matchingFact) {
          response = `Indeed, it is true that ${matchingFact.toLowerCase()}. This is one of the many fascinating aspects of our advanced civilization that distinguishes us from other contemporary cultures.`;
          note = "Note: This information comes from archaeological findings at Indus Valley sites.";
        } else {
          response = `I come from the advanced urban civilization of the Indus Valley, where our cities like Harappa and Mohenjo-daro feature grid-pattern streets, sophisticated drainage systems, and impressive public structures. We trade extensively with Mesopotamia and regions throughout the Indus River basin, using standardized weights and measures. Our achievements in urban planning, water management, and artistic traditions are remarkable for our time, though much about our society remains mysterious as our script is still undeciphered. What aspects of our civilization would you like to learn more about?`;
          note = "Note: The Indus Valley Civilization (2600-1900 BCE) was discovered in the 1920s and continues to be studied by archaeologists.";
        }
      }
      break;
      
    case "shivaji":
      if (isGreeting) {
        response = "Namaste! I am Chhatrapati Shivaji Maharaj. How may I share the story of Swarajya (self-rule) and the rise of the Maratha power with you?";
        note = "Note: Shivaji lived from 1630 to 1680 and established the Maratha Kingdom in western India.";
      } else if (isAboutIdentity) {
        response = `I am Shivaji Bhonsle, founder of the Maratha Empire and crowned as Chhatrapati (sovereign) in 1674. Born at Shivneri Fort in 1630, I was raised with strong values by my mother Jijabai and trained in martial arts and statecraft. From capturing my first fort at age 16, I built a kingdom that challenged the mighty Mughal Empire under Aurangzeb. Through guerrilla warfare, strategic brilliance, and a deep understanding of the Deccan's mountainous terrain, I established an independent Hindu kingdom when most of India was under Mughal dominance. I am known for my respect for all religions, innovative military tactics, and administrative reforms that empowered the common people.`;
        note = "Note: Shivaji's coronation as Chhatrapati (sovereign) took place in 1674 at Raigad Fort.";
      } else if (isAboutBirth) {
        response = `I was born on February 19, 1630, at Shivneri Fort near Junnar. My father was Shahaji Bhonsle, a military general who served the Adil Shahi sultanate of Bijapur and later the Mughals. My mother was Jijabai, a deeply religious and strong-willed woman who instilled in me Hindu values and tales of our ancient heritage. My birth occurred during a time of political upheaval in the Deccan, with various powers including the Mughals and Deccan sultanates vying for control.`;
        note = "Note: Shivaji was named after a local deity, Shivai Devi, to whom his mother had prayed for a child.";
      } else if (isAboutDeath) {
        response = `I died on April 3, 1680, at Raigad Fort, likely from a contracted illness, possibly fever or dysentery, though some accounts suggest poisoning. I was just 50 years old. In my final days, I was planning further campaigns and consolidation of the Maratha kingdom. My sudden death created succession challenges, with my son Sambhaji eventually taking the throne after a brief period of uncertainty. I died at Raigad, which remained the capital of the Maratha Empire I had established.`;
        note = "Note: After Shivaji's death, the Maratha Empire continued to grow and eventually controlled large parts of India in the 18th century.";
      } else if (isAboutTime) {
        response = `I lived during the 17th century, a time when the Mughal Empire under Aurangzeb was expanding throughout India. This was a period of religious tension but also of cultural synthesis. The Deccan sultanates like Bijapur and Golconda were being pressured by the expanding Mughal power from the north. European powers, particularly the Portuguese and later the British and French, were establishing coastal trading posts. It was in this complex political landscape that I carved out an independent Maratha kingdom, challenging Mughal supremacy and establishing a Hindu-led state that would eventually grow into an empire spanning much of India after my death.`;
        note = "Note: The 17th century saw the decline of the Adil Shahi and Qutb Shahi kingdoms and the expansion of Mughal power in the Deccan.";
      } else if (isAboutRule) {
        response = `My governance was based on the Ashtapradhan (council of eight ministers), each with specific responsibilities ranging from general administration to foreign affairs. I implemented a tax system that included the Chauth (one-fourth of revenue) and Sardeshmukhi (additional one-tenth) collected from territories outside our direct control. I revived Marathi and Sanskrit as administrative languages instead of Persian, the court language of Muslim rulers. I established a navy to protect our coastal territories from European powers and Siddi pirates. My administration emphasized justice, religious tolerance, and protection of all subjects regardless of faith. I restored old Hindu temples but also protected mosques, maintaining respect for all religions. My fort system, with hundreds of strategic fortifications across the Western Ghats, formed the backbone of our territorial control and defense strategy.`;
        note = "Note: Shivaji's administrative systems blended traditional Hindu political concepts with practical innovations.";
      } else if (isAboutBelief) {
        response = `I followed the Bhakti traditions with devotion to Lord Shiva and other Hindu deities. I was significantly influenced by saints like Ramdas Swami, who became my spiritual guide, and Tukaram, whose devotional poetry inspired many Marathas. While I worked to establish a Hindu kingdom and protect Hindu traditions that had been suppressed, I respected all religions. I protected mosques, had Muslims in my army and administration, and punished soldiers who disrespected other faiths. One of my most trusted naval commanders, Daulat Khan, was Muslim. I believed in the sanctity of women's honor regardless of religion or social status, with strict punishments for anyone who violated this principle. My concept of Hindavi Swarajya (Hindu self-rule) was primarily political rather than narrowly religious—it represented indigenous rule free from foreign domination.`;
        note = "Note: Shivaji's religious tolerance was notable for his time, contrasting with some contemporary rulers.";
      } else if (isAboutWar) {
        response = `I developed guerrilla warfare tactics using the mountainous terrain of the Western Ghats to our advantage. Rather than engaging in open-field battles with larger Mughal forces, I utilized hit-and-run strategies, night attacks, and mobility to overcome enemies. Notable victories include the Battle of Pratapgad in 1659, where I killed the Adil Shahi general Afzal Khan in a dramatic personal combat, and the sacking of Surat in 1664, which demonstrated my ability to strike even wealthy Mughal cities. I famously escaped from Mughal captivity at Agra in 1666, hiding in a fruit basket. My naval strategy was innovative for Indian rulers of the time—I built sea forts like Sindhudurg and created a fleet to protect our coastline from European powers. I built or captured over 300 forts, many in seemingly impregnable locations, creating a network of strongholds that allowed us to control the challenging terrain of Maharashtra.`;
        note = "Note: Shivaji's fort system included over 300 forts, many of which still stand today.";
      } else if (isAboutAchievement) {
        response = `My greatest contribution was establishing Swarajya (self-rule) during Mughal dominance and building the foundation of the Maratha Empire, which later challenged British colonialism. I revived Hindu political power while maintaining religious harmony, demonstrating that pluralism and strong governance could coexist. I developed innovative military tactics, including guerrilla warfare techniques that neutralized the advantages of larger armies. I established a navy when most Indian rulers neglected maritime power, protecting our coasts from European and Siddhi encroachment. My administrative system balanced central authority with local governance, reducing exploitation of peasants. My fort system across the Western Ghats created a defensible territory that remained Maratha-controlled long after my death. Perhaps most importantly, I inspired a sense of identity and pride among Marathi people that transcended caste divisions, creating a lasting cultural and political legacy.`;
        note = "Note: The Maratha Empire continued to expand after Shivaji's death, eventually controlling much of the Indian subcontinent in the 18th century.";
      } else if (isAboutFamily) {
        response = `I was born to Shahaji Bhonsle, a military leader who served various Deccan sultanates, and Jijabai, who instilled in me strong values and Hindu traditions. My father's position meant I had access to military training and political education from a young age. My first wife was Saibai, from the prominent Nimbalkar family, who bore my son and successor Sambhaji. I had several other wives according to the royal customs of the time, including Soyarabai, mother of my son Rajaram who later became king after Sambhaji's death. My daughter Ranubai also played important political roles through marital alliances. My mother Jijabai was perhaps the most influential figure in my life, acting as my advisor and regent during my early years and shaping my vision of Hindu self-rule. My relationship with my father was more distant due to his service in Bangalore, away from our home territory.`;
        note = "Note: Jijabai, Shivaji's mother, had a profound influence on his character and political vision.";
      } else if (isAboutEvent) {
        const timelineEvents = figureData.timeline.map(item => `In ${item.year}, ${item.event.toLowerCase()}`).join(". ");
        response = `The key events of my life include: ${timelineEvents}. The encounter with Afzal Khan in 1659 was particularly significant as it established my reputation as a warrior and marked the beginning of my serious challenge to established powers.`;
        note = "Note: Shivaji's timeline is documented in the Bakhar texts (Maratha chronicles) and Persian records of the time.";
      } else {
        // Check if the question contains any keywords from the lesser-known facts
        const matchingFact = figureData.lesserKnownFacts.find(fact => 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[0]) || 
          question.toLowerCase().includes(fact.toLowerCase().split(" ")[1])
        );
        
        if (matchingFact) {
          response = `Indeed, it is true that ${matchingFact.toLowerCase()}. This aspect of my reign demonstrates my approach to building a strong, independent kingdom in challenging circumstances.`;
          note = "Note: This information comes from historical accounts of the Maratha kingdom.";
        } else {
          response = `As Chhatrapati Shivaji Maharaj, I founded the Maratha Empire through strategic warfare against the Mughals and Adil Shahi sultanates in the 17th century. I established an administration based on the Ashtapradhan council, built a powerful navy, and developed an extensive network of forts throughout the Western Ghats. My guerrilla tactics allowed our smaller forces to defeat larger armies by using the mountainous terrain to our advantage. My kingdom stood for protection of Hindu traditions while maintaining respect for all faiths. What specific aspects of my reign or the Maratha kingdom would you like to know about?`;
          note = "Note: Shivaji Maharaj (1630-1680) is regarded as one of the greatest warriors and administrators in Indian history.";
        }
      }
      break;

    default:
      response = "I'm afraid I cannot recall specific details about this matter from my time period. Perhaps we could discuss another aspect of Indian history that I might better illuminate?";
      note = "Note: Historical records from this period are sometimes incomplete. This response has been constructed based on available historical information.";
  }
  
  return {
    response,
    note
  };
};

