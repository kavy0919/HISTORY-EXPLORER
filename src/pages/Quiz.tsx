
import { useState, useEffect } from "react";
import { quizQuestions, QuizQuestion } from "../data/mockData";
import { generateQuiz } from "../utils/aiUtils";

const Quiz = () => {
  const [selectedEra, setSelectedEra] = useState<"Ancient" | "Medieval" | "Modern">("Ancient");
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  // Handler for era selection
  const handleEraChange = (era: "Ancient" | "Medieval" | "Modern") => {
    setSelectedEra(era);
    // Reset quiz if era changes
    if (quizStarted) {
      setQuizStarted(false);
      setQuizCompleted(false);
      setSelectedAnswers([]);
      setScore(0);
    }
  };

  // Start a new quiz
  const startQuiz = async () => {
    setIsLoading(true);
    try {
      const generatedQuestions = await generateQuiz(selectedEra, quizQuestions);
      setCurrentQuestions(generatedQuestions);
      setSelectedAnswers(new Array(generatedQuestions.length).fill(null));
      setQuizStarted(true);
      setQuizCompleted(false);
      setScore(0);
    } catch (error) {
      console.error("Error generating quiz:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle answer selection
  const selectAnswer = (questionIndex: number, optionIndex: number) => {
    if (quizCompleted) return; // Don't allow changes after submission
    
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  // Submit quiz answers
  const submitQuiz = () => {
    // Calculate score
    let correctCount = 0;
    
    for (let i = 0; i < currentQuestions.length; i++) {
      if (selectedAnswers[i] === currentQuestions[i].correctAnswer) {
        correctCount++;
      }
    }
    
    setScore(correctCount);
    setQuizCompleted(true);
  };

  // Start a new quiz
  const newQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setSelectedAnswers([]);
    setScore(0);
  };

  // Check if all questions have been answered
  const allQuestionsAnswered = selectedAnswers.every(
    (answer) => answer !== null
  );

  return (
    <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-playfair font-bold text-deepblue mb-6">
          Quiz Generator
        </h1>

        {!quizStarted ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
              Test Your Knowledge
            </h2>
            
            <div className="mb-6">
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
                        : "bg-white text-deepblue border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {era} India
                  </button>
                ))}
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              You'll be presented with 5 multiple-choice questions about {selectedEra} India.
              Test your knowledge and learn interesting facts!
            </p>
            
            <button
              onClick={startQuiz}
              disabled={isLoading}
              className="bg-gold hover:bg-amber-600 text-white font-medium py-2 px-6 rounded transition-colors disabled:opacity-50"
            >
              {isLoading ? "Generating Quiz..." : "Start Quiz"}
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Quiz title */}
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-playfair font-bold text-deepblue">
                {selectedEra} India Quiz
              </h2>
              {quizCompleted && (
                <div className="bg-deepblue text-white py-1 px-4 rounded-full">
                  Score: {score}/{currentQuestions.length}
                </div>
              )}
            </div>
            
            {/* Questions */}
            <div className="space-y-8 mb-6">
              {currentQuestions.map((q, questionIndex) => (
                <div key={q.id} className="border-b pb-6">
                  <h3 className="text-lg font-medium text-deepblue mb-3">
                    {questionIndex + 1}. {q.question}
                  </h3>
                  
                  <div className="space-y-2">
                    {q.options.map((option, optionIndex) => (
                      <div
                        key={optionIndex}
                        onClick={() => selectAnswer(questionIndex, optionIndex)}
                        className={`p-3 rounded cursor-pointer ${
                          selectedAnswers[questionIndex] === optionIndex
                            ? quizCompleted
                              ? optionIndex === q.correctAnswer
                                ? "bg-green-100 border-green-500 border"
                                : "bg-red-100 border-red-500 border"
                              : "bg-gold bg-opacity-20 border-gold border"
                            : quizCompleted && optionIndex === q.correctAnswer
                            ? "bg-green-100 border-green-500 border"
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        <div className="flex items-start">
                          <div className="mr-2">
                            {String.fromCharCode(65 + optionIndex)}.
                          </div>
                          <div>{option}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Explanation (shown after quiz is completed) */}
                  {quizCompleted && (
                    <div className="mt-3 bg-beige p-3 rounded">
                      <p className="text-sm font-medium">Explanation:</p>
                      <p className="text-sm">{q.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Quiz controls */}
            <div className="flex justify-between">
              {!quizCompleted ? (
                <button
                  onClick={submitQuiz}
                  disabled={!allQuestionsAnswered}
                  className="bg-gold hover:bg-amber-600 text-white font-medium py-2 px-6 rounded transition-colors disabled:opacity-50"
                >
                  Submit Answers
                </button>
              ) : (
                <button
                  onClick={newQuiz}
                  className="bg-deepblue hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded transition-colors"
                >
                  Take Another Quiz
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
