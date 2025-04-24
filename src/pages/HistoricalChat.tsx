
import HistoricalChatSection from "../components/HistoricalChatSection";

const HistoricalChat = () => {
  return (
    <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-playfair font-bold text-deepblue mb-6 animate-fade-in">
          Talk to Historical Figures
        </h1>
        <p className="text-gray-600 mb-8 animate-fade-in">
          Engage in conversations with notable figures from history and learn from their experiences and wisdom.
        </p>
        <HistoricalChatSection />
      </div>
    </div>
  );
};

export default HistoricalChat;
