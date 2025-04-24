
import { useState, useEffect } from "react";
import { generateHistoricalFigureResponse } from "../utils/aiUtils";
import { X, SendHorizontal, User, History } from "lucide-react";

export interface Message {
  role: "user" | "figure";
  content: string;
}

interface VirtualQAProps {
  onClose: () => void;
}

const HISTORICAL_FIGURES = [
  { id: "ashoka", name: "Emperor Ashoka", era: "Ancient", image: "👑" },
  { id: "akbar", name: "Emperor Akbar", era: "Medieval", image: "👑" },
  { id: "gandhi", name: "Mahatma Gandhi", era: "Modern", image: "👴" },
  { id: "rani", name: "Rani Lakshmibai", era: "Modern", image: "👸" },
  { id: "harappa", name: "Indus Valley Trader", era: "Ancient", image: "🏺" },
  { id: "shivaji", name: "Chhatrapati Shivaji", era: "Medieval", image: "⚔️" }
];

const VirtualQA: React.FC<VirtualQAProps> = ({ onClose }) => {
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [historicalNote, setHistoricalNote] = useState("");

  // Initialize conversation when figure is selected
  useEffect(() => {
    if (selectedFigure) {
      const figure = HISTORICAL_FIGURES.find(f => f.id === selectedFigure);
      if (figure) {
        setMessages([
          {
            role: "figure",
            content: getInitialGreeting(figure.id)
          }
        ]);
      }
    }
  }, [selectedFigure]);

  const getInitialGreeting = (figureId: string) => {
    switch (figureId) {
      case "ashoka":
        return "Greetings! I am Emperor Ashoka of the mighty Mauryan Empire. After witnessing the bloodshed of the Kalinga War in 261 BCE, I embraced Buddhism and ruled with dharma. What would you like to know about my reign or the ancient Indian empire?";
      case "akbar":
        return "Salutations! I am Emperor Akbar, third ruler of the Mughal dynasty. From 1556 to 1605, I expanded our territories and established Din-i-Ilahi, promoting tolerance among all faiths. How may I enlighten you about medieval India?";
      case "gandhi":
        return "Namaste! I am Mohandas Karamchand Gandhi, though many call me Mahatma. Through satyagraha and ahimsa, we fought for India's independence from British rule. What aspect of our freedom struggle interests you?";
      case "rani":
        return "Greetings! I am Rani Lakshmibai of Jhansi, a leader in the 1857 uprising against British rule. I fought valiantly for my kingdom and for freedom. What would you like to know about my struggle or the first war of independence?";
      case "harappa":
        return "Greetings, traveler! I am a merchant from the great city of Harappa in the Indus Valley Civilization. Our cities flourished from 2600 to 1900 BCE with advanced drainage systems and urban planning. What do you wish to learn about our ancient civilization?";
      case "shivaji":
        return "Namaste! I am Chhatrapati Shivaji Maharaj, founder of the Maratha Empire. Through guerrilla warfare and strategic brilliance, I challenged the mighty Mughal Empire in the 17th century. What would you like to know about the Maratha kingdom or my conquests?";
      default:
        return "Greetings! I am honored to speak with you about Indian history. What would you like to discuss?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !selectedFigure) return;

    const userMessage: Message = {
      role: "user",
      content: inputMessage
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const figure = HISTORICAL_FIGURES.find(f => f.id === selectedFigure);
      const response = await generateHistoricalFigureResponse(
        figure?.id || "",
        figure?.name || "",
        figure?.era || "",
        inputMessage
      );

      setHistoricalNote(response.note || "");

      const figureMessage: Message = {
        role: "figure",
        content: response.response
      };

      setMessages(prev => [...prev, figureMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      
      const errorMessage: Message = {
        role: "figure",
        content: "Forgive me, but I cannot recall the answer to your question. Perhaps we could discuss another aspect of history?"
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetConversation = () => {
    setSelectedFigure(null);
    setMessages([]);
    setHistoricalNote("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="relative bg-deepblue text-white p-4 rounded-t-lg">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-playfair font-bold">
              {selectedFigure 
                ? `Conversation with ${HISTORICAL_FIGURES.find(f => f.id === selectedFigure)?.name}`
                : "Choose a Historical Figure"}
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {!selectedFigure ? (
          <div className="p-6 flex-grow overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Select a figure to begin your conversation:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {HISTORICAL_FIGURES.map(figure => (
                <button
                  key={figure.id}
                  onClick={() => setSelectedFigure(figure.id)}
                  className="bg-beige p-4 rounded-lg flex items-center hover:bg-gold hover:text-white transition-colors text-left"
                >
                  <div className="text-4xl mr-3">{figure.image}</div>
                  <div>
                    <h4 className="font-bold">{figure.name}</h4>
                    <p className="text-sm">{figure.era} Era</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="flex-grow overflow-y-auto p-4 bg-beige bg-opacity-20">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === "user" 
                          ? "bg-gold bg-opacity-20 text-deepblue" 
                          : "bg-deepblue text-white"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-lg bg-deepblue text-white">
                      <div className="flex space-x-2 items-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {historicalNote && (
              <div className="bg-sage bg-opacity-20 p-3 text-sm border-t border-sage">
                <div className="flex items-start">
                  <History size={16} className="mr-2 mt-1 text-deepblue" />
                  <p className="text-deepblue">{historicalNote}</p>
                </div>
              </div>
            )}

            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center">
                <button
                  onClick={resetConversation}
                  className="mr-2 text-gray-500 hover:text-deepblue"
                  title="Change historical figure"
                >
                  <User size={20} />
                </button>
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask your question..."
                  className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-deepblue"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className={`ml-2 p-2 rounded-full ${
                    !inputMessage.trim() || isLoading
                      ? "bg-gray-200 text-gray-400"
                      : "bg-deepblue text-white hover:bg-opacity-90"
                  }`}
                >
                  <SendHorizontal size={20} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VirtualQA;
