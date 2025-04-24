
const About = () => {
  return (
    <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-playfair font-bold text-deepblue mb-6">
          About History Explorer
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            History Explorer is an innovative educational platform designed to make
            learning about Indian history engaging, interactive, and accessible.
            Using the power of AI, we transform traditional learning into an
            immersive experience that encourages curiosity and critical thinking.
          </p>
          <p className="text-gray-700">
            Our platform is built on NCERT curriculum standards for classes 6-10,
            ensuring academic accuracy while adding technological innovations that
            enhance the learning process.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Interactive Learning:</span> Explore
              historical events through engaging descriptions and AI-generated
              visualizations.
            </li>
            <li>
              <span className="font-medium">Timeline Generator:</span> Create
              custom timelines to visualize historical periods and understand
              chronological relationships.
            </li>
            <li>
              <span className="font-medium">Quiz Generator:</span> Test your
              knowledge with dynamically generated quizzes tailored to specific
              eras.
            </li>
            <li>
              <span className="font-medium">"What If" Scenarios:</span> Explore
              alternative history possibilities to understand the significance of
              historical decisions.
            </li>
            <li>
              <span className="font-medium">Voice Narrations:</span> Listen to
              AI-generated summaries of historical eras for auditory learners.
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
            Technical Information
          </h2>
          <p className="text-gray-700 mb-4">
            History Explorer is built using modern web technologies to ensure
            optimal performance and accessibility across devices. The platform
            leverages generative AI to create educational content that adapts to
            user queries and interests.
          </p>
          <p className="text-gray-700">
            All historical content is reviewed for accuracy and aligned with
            educational standards. Our AI features are designed to supplement
            traditional learning methods, not replace comprehensive study of
            historical texts and materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
