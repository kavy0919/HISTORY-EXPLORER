
import { BookOpen, Calendar, HelpCircle, ArrowRight, User } from "lucide-react";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import FloatingActionButton from "../components/FloatingActionButton";

// Ancient ruins background for hero section
const heroBackground = "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80";

const Home = () => {
  const features = [
    {
      title: "Learn About Events",
      description: "Discover historical events with AI-generated explanations and explore their significance.",
      link: "/learn",
      icon: <BookOpen size={36} />,
    },
    {
      title: "Timeline Generator",
      description: "Create interactive timelines for any historical period to visualize connections between events.",
      link: "/timeline",
      icon: <Calendar size={36} />,
    },
    {
      title: "Quiz Generator",
      description: "Test your knowledge with AI-generated quizzes tailored to different historical eras.",
      link: "/quiz",
      icon: <HelpCircle size={36} />,
    },
    {
      title: "Talk to Historical Figures",
      description: "Chat with legendary figures from India’s history and learn from their stories and insights.",
      link: "/historical-chat",
      icon: <User size={36} />,
    },
  ];

  return (
    <div>
      <HeroSection
        title="Discover History Like Never Before"
        subtitle="Explore eras, ask questions, and dive into the past with AI!"
        buttonText="Get Started"
        buttonLink="/learn"
        backgroundImage={heroBackground}
      />

      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-playfair font-bold text-center text-deepblue mb-12">
            Interactive Historical Exploration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                link={feature.link}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <FloatingActionButton to="/learn">
        <span className="mr-2">Try Now</span>
        <ArrowRight size={16} />
      </FloatingActionButton>
    </div>
  );
};

export default Home;

