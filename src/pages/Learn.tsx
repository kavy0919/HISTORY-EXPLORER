import { useState } from "react";
import { historicalEvents, HistoricalEvent } from "../data/mockData";
import { generateWhatIfResponse } from "../utils/aiUtils";
import { X, ChevronLeft, ChevronRight, Filter, MessageCircle } from "lucide-react";
import WhatIfScenario from "../components/WhatIfScenario";

const Learn = () => {
  const [filteredEvents, setFilteredEvents] = useState<HistoricalEvent[]>(historicalEvents);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showWhatIf, setShowWhatIf] = useState(false);
  const [whatIfScenario, setWhatIfScenario] = useState("");
  const [whatIfResponse, setWhatIfResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [eraFilter, setEraFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  const eras = ["Ancient", "Medieval", "Modern"];
  const types = ["Battle", "Ruler", "Movement", "Cultural", "Discovery"];

  const toggleEraFilter = (era: string) => {
    if (eraFilter.includes(era)) {
      setEraFilter(eraFilter.filter(e => e !== era));
    } else {
      setEraFilter([...eraFilter, era]);
    }
  };

  const toggleTypeFilter = (type: string) => {
    if (typeFilter.includes(type)) {
      setTypeFilter(typeFilter.filter(t => t !== type));
    } else {
      setTypeFilter([...typeFilter, type]);
    }
  };

  const applyFilters = () => {
    let result = [...historicalEvents];
    
    if (eraFilter.length === 0 && typeFilter.length === 0) {
      setFilteredEvents(result);
      setShowFilters(false);
      return;
    }
    
    if (eraFilter.length > 0) {
      result = result.filter(event => eraFilter.includes(event.era));
    }
    
    if (typeFilter.length > 0) {
      result = result.filter(event => typeFilter.includes(event.type));
    }
    
    setFilteredEvents(result);
    setShowFilters(false);
  };

  const resetFilters = () => {
    setEraFilter([]);
    setTypeFilter([]);
    setFilteredEvents(historicalEvents);
    setShowFilters(false);
  };

  const handleWhatIf = async () => {
    if (!whatIfScenario.trim() || !selectedEvent) return;
    
    setIsLoading(true);
    try {
      const response = await generateWhatIfResponse(
        selectedEvent.title, 
        whatIfScenario
      );
      setWhatIfResponse(response);
    } catch (error) {
      console.error("Error generating what-if response:", error);
      setWhatIfResponse("Failed to generate a response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    setShowWhatIf(false);
    setWhatIfScenario("");
    setWhatIfResponse("");
  };

  return (
    <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-playfair font-bold text-deepblue animate-fade-in">
            Historical Events
          </h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center bg-deepblue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-fade-in"
          >
            <Filter size={18} className="mr-2" />
            Filter
          </button>
        </div>

        {showFilters && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:relative md:bg-transparent backdrop-blur-sm transition-all duration-300">
            <div 
              className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 overflow-y-auto transition-transform duration-300 animate-slide-in-bottom md:static md:shadow-none"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-deepblue">Filters</h2>
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200 md:hidden"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-md flex-1">
                    <h3 className="text-lg font-semibold text-deepblue mb-3">Era</h3>
                    <div className="flex flex-wrap gap-2">
                      {eras.map(era => (
                        <button
                          key={era}
                          onClick={() => toggleEraFilter(era)}
                          className={`px-4 py-2 rounded-full transition-all duration-200 ${
                            eraFilter.includes(era)
                              ? 'bg-gold text-white'
                              : 'bg-white border border-gray-200 hover:border-gold'
                          }`}
                        >
                          {era}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg transition-all duration-200 hover:shadow-md flex-1">
                    <h3 className="text-lg font-semibold text-deepblue mb-3">Event Type</h3>
                    <div className="flex flex-wrap gap-2">
                      {types.map(type => (
                        <button
                          key={type}
                          onClick={() => toggleTypeFilter(type)}
                          className={`px-4 py-2 rounded-full transition-all duration-200 ${
                            typeFilter.includes(type)
                              ? 'bg-gold text-white'
                              : 'bg-white border border-gray-200 hover:border-gold'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3 mt-6">
                  <button
                    onClick={applyFilters}
                    className="flex-1 bg-gold text-white px-4 py-2 rounded-lg hover:bg-amber-600 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
                  >
                    Apply Filters
                  </button>
                  <button
                    onClick={resetFilters}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
            >
              <div className="h-32 bg-deepblue flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <span className="text-beige font-playfair text-xl">{event.era}</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair font-bold text-lg text-deepblue">{event.title}</h3>
                  <span className="text-sm bg-sage px-2 py-1 rounded-full text-deepblue">
                    {event.date}
                  </span>
                </div>
                <span className="block text-sm text-gold mb-2">{event.type}</span>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {event.description.substring(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No events match your filter criteria.</p>
            <button
              onClick={resetFilters}
              className="mt-4 bg-gold text-white px-4 py-2 rounded hover:bg-amber-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <div className="h-48 bg-deepblue flex items-center justify-center">
                <h2 className="text-2xl font-playfair font-bold text-white">
                  {selectedEvent.title}
                </h2>
              </div>
              <button
                onClick={closeEventModal}
                className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-sage px-3 py-1 rounded-full text-deepblue">
                  {selectedEvent.date}
                </span>
                <span className="bg-gold bg-opacity-20 px-3 py-1 rounded-full text-deepblue">
                  {selectedEvent.type}
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">
                {selectedEvent.description}
              </p>
              
              {!showWhatIf ? (
                <button
                  onClick={() => setShowWhatIf(true)}
                  className="bg-gold text-white px-4 py-2 rounded hover:bg-amber-600"
                >
                  What If?
                </button>
              ) : (
                <WhatIfScenario 
                  event={selectedEvent} 
                  onClose={() => setShowWhatIf(false)} 
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learn;
