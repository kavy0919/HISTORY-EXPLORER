
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { historicalEvents } from "../data/mockData";
import { useAPIKey } from "../contexts/APIKeyContext";
import { toast } from "sonner";
import { ChevronRight, Clipboard, Lightbulb } from "lucide-react";

interface Impact {
  id: string;
  text: string;
  type: "positive" | "negative" | "neutral";
  children?: Impact[];
}

interface DecisionScenario {
  id: string;
  title: string;
  era: "Ancient" | "Medieval" | "Modern";
  description: string;
  impacts: Impact[];
}

// Mock decision scenarios
const decisionScenarios: DecisionScenario[] = [
  {
    id: "d1",
    title: "Ashoka's Conversion to Buddhism",
    era: "Ancient",
    description: "After the bloody Kalinga War, Emperor Ashoka embraced Buddhism and adopted a policy of Dhamma (righteousness). This decision fundamentally altered the course of the Mauryan Empire and Indian history.",
    impacts: [
      {
        id: "i1",
        text: "Spread of Buddhism across Asia",
        type: "positive",
        children: [
          {
            id: "i1-1",
            text: "Cultural exchange with Southeast Asia",
            type: "positive"
          },
          {
            id: "i1-2",
            text: "Decline of traditional Vedic practices",
            type: "neutral"
          }
        ]
      },
      {
        id: "i2",
        text: "Military expansion halted",
        type: "neutral",
        children: [
          {
            id: "i2-1",
            text: "Peaceful relations with neighboring states",
            type: "positive"
          },
          {
            id: "i2-2",
            text: "Eventual weakening of central authority",
            type: "negative"
          }
        ]
      },
      {
        id: "i3",
        text: "Focus on public welfare projects",
        type: "positive",
        children: [
          {
            id: "i3-1",
            text: "Construction of hospitals and rest houses",
            type: "positive"
          }
        ]
      }
    ]
  },
  {
    id: "d2",
    title: "Akbar's Policy of Religious Tolerance",
    era: "Medieval",
    description: "Emperor Akbar implemented policies of religious tolerance and cultural integration, including abolishing the jizya tax on non-Muslims and establishing the Din-i-Ilahi, a syncretic religious discussion group.",
    impacts: [
      {
        id: "i4",
        text: "Strengthened Mughal administration",
        type: "positive",
        children: [
          {
            id: "i4-1",
            text: "Reduced religious tensions",
            type: "positive"
          }
        ]
      },
      {
        id: "i5",
        text: "Flourishing of art and architecture",
        type: "positive",
        children: [
          {
            id: "i5-1",
            text: "Indo-Islamic architectural style",
            type: "positive"
          },
          {
            id: "i5-2",
            text: "Patronage of literature and music",
            type: "positive"
          }
        ]
      },
      {
        id: "i6",
        text: "Opposition from orthodox religious groups",
        type: "negative"
      }
    ]
  },
  {
    id: "d3",
    title: "Non-violence in Indian Independence Movement",
    era: "Modern",
    description: "Under Gandhi's leadership, the Indian independence movement adopted non-violent civil disobedience (Satyagraha) as its primary strategy against British colonial rule.",
    impacts: [
      {
        id: "i7",
        text: "Mass participation in freedom movement",
        type: "positive",
        children: [
          {
            id: "i7-1",
            text: "Inclusion of women and rural population",
            type: "positive"
          }
        ]
      },
      {
        id: "i8",
        text: "International sympathy for Indian cause",
        type: "positive"
      },
      {
        id: "i9",
        text: "Prolonged timeline for independence",
        type: "neutral",
        children: [
          {
            id: "i9-1",
            text: "Peaceful transition of power",
            type: "positive"
          },
          {
            id: "i9-2",
            text: "Partition violence despite non-violent ideology",
            type: "negative"
          }
        ]
      }
    ]
  }
];

const ImpactMapper = () => {
  const [selectedEra, setSelectedEra] = useState<"Ancient" | "Medieval" | "Modern">("Ancient");
  const [selectedDecision, setSelectedDecision] = useState<DecisionScenario | null>(null);
  const [expandedImpacts, setExpandedImpacts] = useState<string[]>([]);

  // Filter decisions by selected era
  const filteredDecisions = decisionScenarios.filter(
    (decision) => decision.era === selectedEra
  );

  const handleEraChange = (era: "Ancient" | "Medieval" | "Modern") => {
    setSelectedEra(era);
    setSelectedDecision(null);
    setExpandedImpacts([]);
  };

  const handleSelectDecision = (decision: DecisionScenario) => {
    setSelectedDecision(decision);
    setExpandedImpacts([]);
  };

  const toggleImpact = (impactId: string) => {
    if (expandedImpacts.includes(impactId)) {
      setExpandedImpacts(expandedImpacts.filter(id => id !== impactId));
    } else {
      setExpandedImpacts([...expandedImpacts, impactId]);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  // Determine color based on impact type
  const getImpactColor = (type: "positive" | "negative" | "neutral") => {
    switch (type) {
      case "positive":
        return "bg-green-100 text-green-800 border-green-300";
      case "negative":
        return "bg-red-100 text-red-800 border-red-300";
      case "neutral":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  // Generate what-if prompt
  const generateWhatIfPrompt = (decision: DecisionScenario) => {
    switch (decision.era) {
      case "Ancient":
        return `What if ${decision.title.split(" ")[0]} had not ${decision.title.toLowerCase().includes("conversion") ? "converted to Buddhism" : "made this decision"}?`;
      case "Medieval":
        return `What if ${decision.title.split(" ")[0]} had implemented stricter religious policies instead?`;
      case "Modern":
        return `What if the independence movement had relied primarily on armed resistance instead of non-violence?`;
      default:
        return `What if this historical decision had not been made?`;
    }
  };

  return (
    <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-playfair font-bold text-deepblue mb-6">
          Impact Mapper
        </h1>
        <p className="text-gray-700 mb-8">
          Explore how key historical decisions shaped the course of Indian history. 
          See the branching impacts and consider alternative scenarios.
        </p>

        {/* Era Selection */}
        <div className="mb-8">
          <label className="block text-lg font-medium text-deepblue mb-2">
            Select Historical Era:
          </label>
          <div className="flex flex-wrap gap-2">
            {["Ancient", "Medieval", "Modern"].map((era) => (
              <button
                key={era}
                onClick={() => handleEraChange(era as "Ancient" | "Medieval" | "Modern")}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  selectedEra === era
                    ? "bg-gold text-white"
                    : "bg-white text-deepblue hover:bg-gray-100"
                }`}
              >
                {era} India
              </button>
            ))}
          </div>
        </div>

        {/* Layout - Decision List and Impact Map */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Decision List */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
                Key Decisions
              </h2>
              <div className="space-y-3">
                {filteredDecisions.map((decision) => (
                  <div
                    key={decision.id}
                    onClick={() => handleSelectDecision(decision)}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      selectedDecision?.id === decision.id
                        ? "bg-gold bg-opacity-20 border-l-4 border-gold"
                        : "bg-gray-50 hover:bg-gray-100 border-l-4 border-transparent"
                    }`}
                  >
                    <h3 className="font-medium text-deepblue">{decision.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                      {decision.description.substring(0, 100)}...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Map */}
          <div className="md:col-span-2">
            {selectedDecision ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-playfair font-bold text-deepblue">
                    {selectedDecision.title}
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => copyToClipboard(generateWhatIfPrompt(selectedDecision))}
                  >
                    <Clipboard size={16} />
                    <span className="text-xs">Copy "What If" Prompt</span>
                  </Button>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedDecision.description}</p>
                
                <h3 className="text-lg font-medium text-deepblue mb-3 flex items-center">
                  <Lightbulb className="mr-2 text-gold" size={20} />
                  Historical Impacts
                </h3>
                
                <div className="space-y-4">
                  {selectedDecision.impacts.map((impact) => (
                    <div key={impact.id} className="ml-4">
                      <div 
                        className={`p-3 border rounded-md ${getImpactColor(impact.type)} relative`}
                      >
                        {/* Connection line */}
                        <div className="absolute -left-4 top-1/2 w-4 h-px bg-gray-400"></div>
                        
                        <div className="flex justify-between items-center">
                          <span>{impact.text}</span>
                          {impact.children && impact.children.length > 0 && (
                            <button
                              onClick={() => toggleImpact(impact.id)}
                              className="ml-2 text-gray-500 hover:text-gray-700"
                            >
                              <ChevronRight
                                size={18}
                                className={`transform transition-transform ${
                                  expandedImpacts.includes(impact.id) ? "rotate-90" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {/* Child impacts */}
                      {impact.children && expandedImpacts.includes(impact.id) && (
                        <div className="mt-2 ml-8 space-y-2">
                          {impact.children.map((child) => (
                            <div 
                              key={child.id} 
                              className={`p-2 border rounded-md ${getImpactColor(child.type)} relative`}
                            >
                              {/* Connection line */}
                              <div className="absolute -left-4 top-1/2 w-4 h-px bg-gray-400"></div>
                              <div className="absolute -left-4 top-0 bottom-1/2 w-px bg-gray-400"></div>
                              
                              {child.text}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-deepblue bg-opacity-5 rounded-md">
                  <h3 className="text-lg font-medium text-deepblue mb-2">What If Scenario</h3>
                  <p className="text-gray-700 italic">
                    {generateWhatIfPrompt(selectedDecision)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Use this prompt in the Learn section to explore an alternative history scenario!
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center h-full">
                <p className="text-gray-500 text-center">
                  Select a historical decision from the list to view its impacts.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Usage Guide */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-playfair font-bold text-deepblue mb-4">
            How to Use the Impact Mapper
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Select an era using the buttons above</li>
            <li>Choose a historical decision from the list on the left</li>
            <li>Explore the cascading impacts of that decision</li>
            <li>Click the expand arrows to see secondary impacts</li>
            <li>Use the "What If" prompt to explore alternative scenarios in the Learn section</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ImpactMapper;
