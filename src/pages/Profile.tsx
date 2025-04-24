
import { useState } from "react";
import { historicalEvents } from "../data/mockData";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentName, setStudentName] = useState("Student");
  const [editingName, setEditingName] = useState(false);
  
  // Mock quiz scores (would come from a real backend)
  const [quizScores] = useState([
    { id: 1, era: "Ancient India", score: 4, total: 5, date: "2025-04-05" },
    { id: 2, era: "Medieval India", score: 3, total: 5, date: "2025-04-10" },
    { id: 3, era: "Modern India", score: 5, total: 5, date: "2025-04-15" },
  ]);
  
  // Mock saved timelines (would come from a real backend)
  const [savedTimelines] = useState([
    { id: 1, name: "Ancient India - Mauryan Empire", events: 5, date: "2025-04-03" },
    { id: 2, name: "Medieval India - Mughal Timeline", events: 8, date: "2025-04-09" },
  ]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - would be authenticated against a backend
    if (email && password) {
      setIsLoggedIn(true);
      // Set a default student name based on email
      setStudentName(email.split("@")[0]);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  const handleNameSubmit = () => {
    setEditingName(false);
  };

  return (
    <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-playfair font-bold text-deepblue mb-6">
          Profile
        </h1>

        {!isLoggedIn ? (
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
              Login to Your Account
            </h2>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-colors"
              >
                Login
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button 
                  className="text-deepblue hover:text-gold font-medium"
                  onClick={() => setUsername("demo")}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* User Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-playfair font-bold text-deepblue">
                  User Information
                </h2>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>{email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Student Name</p>
                  {editingName ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="p-1 border rounded mr-2 focus:ring-2 focus:ring-gold focus:border-transparent"
                      />
                      <button
                        onClick={handleNameSubmit}
                        className="text-sm bg-gold hover:bg-amber-600 text-white px-2 py-1 rounded"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <p className="mr-2">{studentName}</p>
                      <button
                        onClick={() => setEditingName(true)}
                        className="text-sm text-gold hover:text-amber-600"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quiz Scores */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
                Quiz Scores
              </h2>
              
              {quizScores.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-2">Era</th>
                        <th className="text-left p-2">Score</th>
                        <th className="text-left p-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quizScores.map((quiz) => (
                        <tr key={quiz.id} className="border-b border-gray-100">
                          <td className="p-2">{quiz.era}</td>
                          <td className="p-2">
                            {quiz.score}/{quiz.total}
                          </td>
                          <td className="p-2">{quiz.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600">
                  You haven't taken any quizzes yet.
                </p>
              )}
            </div>

            {/* Saved Timelines */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
                Saved Timelines
              </h2>
              
              {savedTimelines.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-2">Name</th>
                        <th className="text-left p-2">Events</th>
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {savedTimelines.map((timeline) => (
                        <tr key={timeline.id} className="border-b border-gray-100">
                          <td className="p-2">{timeline.name}</td>
                          <td className="p-2">{timeline.events}</td>
                          <td className="p-2">{timeline.date}</td>
                          <td className="p-2">
                            <button className="text-sm text-deepblue hover:text-gold">
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-600">
                  You haven't saved any timelines yet.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
