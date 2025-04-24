
import { useState, useEffect, useRef } from "react";
import { generateHistoricalFigureResponse } from "../utils/aiUtils";
import { SendHorizontal, User, History } from "lucide-react";

export interface Message {
  role: "user" | "figure";
  content: string;
}

const HISTORICAL_FIGURES = [
  { id: "ashoka", name: "Emperor Ashoka", era: "Ancient", image: "👑" },
  { id: "akbar", name: "Emperor Akbar", era: "Medieval", image: "👑" },
  { id: "gandhi", name: "Mahatma Gandhi", era: "Modern", image: "👴" },
  { id: "rani", name: "Rani Lakshmibai", era: "Modern", image: "👸" },
  { id: "harappa", name: "Indus Valley Trader", era: "Ancient", image: "🏺" },
  { id: "shivaji", name: "Chhatrapati Shivaji", era: "Medieval", image: "⚔️" }
];

const HistoricalChatSection = () => {
  const [selectedFigure, setSelectedFigure] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [historicalNote, setHistoricalNote] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  // Scroll to bottom of messages when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    <section
      className="w-full max-w-3xl mx-auto rounded-xl shadow-lg bg-white my-10 border border-gray-100 animate-fade-in"
      aria-label="Talk to Historical Figures"
    >
      <div className="bg-gold text-white px-6 py-4 rounded-t-xl flex items-center gap-2">
        <span className="text-2xl">{selectedFigure ? HISTORICAL_FIGURES.find(f => f.id === selectedFigure)?.image : "💬"}</span>
        <h2 className="text-xl font-bold font-playfair">
          {selectedFigure 
            ? `Talking with ${HISTORICAL_FIGURES.find(f => f.id === selectedFigure)?.name}`
            : "Talk to Historical Figures"}
        </h2>
      </div>
      {!selectedFigure ? (
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Select a figure to begin:</h3>
          <div className="flex flex-wrap gap-4">
            {HISTORICAL_FIGURES.map(figure => (
              <button
                key={figure.id}
                onClick={() => setSelectedFigure(figure.id)}
                className="bg-beige p-4 rounded-lg flex items-center gap-3 hover:bg-gold hover:text-white hover-scale transition-all duration-150 border border-gray-200 min-w-[220px] shadow-sm"
                style={{ minHeight: "70px" }}
              >
                <div className="text-3xl">{figure.image}</div>
                <div>
                  <div className="font-bold">{figure.name}</div>
                  <div className="text-gray-700 text-xs">{figure.era} Era</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col min-h-[320px] max-h-[340px] overflow-y-auto p-4 bg-beige bg-opacity-20 space-y-4 transition-all animate-fade-in">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} transition-all`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user"
                      ? "bg-gold bg-opacity-20 text-deepblue"
                      : "bg-deepblue text-white"
                  } animate-fade-in`}
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
            <div ref={messagesEndRef} />
          </div>
          {historicalNote && (
            <div className="bg-sage bg-opacity-20 p-3 text-sm border-t border-sage animate-fade-in">
              <div className="flex items-start">
                <History size={16} className="mr-2 mt-1 text-deepblue" />
                <p className="text-deepblue">{historicalNote}</p>
              </div>
            </div>
          )}
          <div className="p-3 border-t border-gray-200 flex items-center">
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
              title="Send"
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default HistoricalChatSection;
