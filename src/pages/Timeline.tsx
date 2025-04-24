import { useState, useRef, useEffect } from "react";
import { historicalEvents, HistoricalEvent } from "../data/mockData";
import { generateEraSummary } from "../utils/aiUtils";
import { ChevronLeft, ChevronRight, Info, ZoomIn, ZoomOut, MapPin, Book, Users } from "lucide-react";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const Timeline = () => {
  const [selectedEra, setSelectedEra] = useState<"Ancient" | "Medieval" | "Modern">("Ancient");
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [eraSummary, setEraSummary] = useState<string>("");
  const [isLoadingSummary, setIsLoadingSummary] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  const filteredEvents = historicalEvents.filter(event => event.era === selectedEra).sort((a, b) => {
    const aYear = parseInt(a.date.replace(/[^0-9-]/g, ""));
    const bYear = parseInt(b.date.replace(/[^0-9-]/g, ""));

    const aYearAdjusted = a.date.includes("BCE") ? -aYear : aYear;
    const bYearAdjusted = b.date.includes("BCE") ? -bYear : bYear;
    return aYearAdjusted - bYearAdjusted;
  });

  const handleEraChange = async (era: "Ancient" | "Medieval" | "Modern") => {
    setSelectedEra(era);
    setSelectedEvent(null);
    setEraSummary("");
  };

  useEffect(() => {
    const fetchEraSummary = async () => {
      setIsLoadingSummary(true);
      try {
        const summary = await generateEraSummary(selectedEra);
        setEraSummary(summary);
      } catch (error) {
        console.error("Error fetching era summary:", error);
        toast.error("Failed to load era summary");
      } finally {
        setIsLoadingSummary(false);
      }
    };
    fetchEraSummary();
  }, [selectedEra]);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      timelineRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleZoomChange = (value: number[]) => {
    setZoomLevel(value[0]);
  };

  const timelineScale = 1 + (zoomLevel - 1) * 0.5;

  const renderSelectedEventDetails = (event: HistoricalEvent) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <h2 className="text-2xl font-playfair font-bold text-deepblue mb-2">
          {event.title}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="bg-sage text-deepblue">
            {event.date}
          </Badge>
          <Badge variant="outline" className="bg-gold bg-opacity-20 text-deepblue">
            {event.type}
          </Badge>
        </div>
        
        <p className="text-gray-700 mb-4">{event.description}</p>
        
        {event.subEvents && event.subEvents.length > 0 && (
          <div className="mt-4 space-y-3">
            <h3 className="text-lg font-medium text-deepblue mb-2 flex items-center">
              <Book className="mr-2 h-5 w-5" />
              Key Events
            </h3>
            <div className="space-y-2">
              {event.subEvents.map((subEvent, index) => (
                <div key={index} className="bg-beige bg-opacity-30 p-3 rounded">
                  <h4 className="font-medium text-deepblue">{subEvent.title}</h4>
                  <p className="text-gray-600 text-sm">{subEvent.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {event.locations && event.locations.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-deepblue mb-2 flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Key Locations
            </h3>
            <div className="flex flex-wrap gap-2">
              {event.locations.map((location, index) => (
                <Badge key={index} variant="outline" className="bg-deepblue bg-opacity-10">
                  {location}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {event.figures && event.figures.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-deepblue mb-2 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Key Figures
            </h3>
            <div className="flex flex-wrap gap-2">
              {event.figures.map((figure, index) => (
                <Badge key={index} variant="outline" className="bg-deepblue bg-opacity-10">
                  {figure}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {event.aiInsight && (
          <div className="mt-4 bg-gold bg-opacity-10 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-deepblue mb-2 flex items-center">
              <Info className="mr-2 h-5 w-5" />
              What If?
            </h3>
            <p className="text-gray-700 italic">{event.aiInsight}</p>
          </div>
        )}
      </div>
    );
  };

  return <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-playfair font-bold text-deepblue mb-6">
          Timeline Explorer
        </h1>

        <div className="mb-8">
          <label className="block text-lg font-medium text-deepblue mb-2">
            Select Historical Era:
          </label>
          <div className="flex flex-wrap gap-2">
            {["Ancient", "Medieval", "Modern"].map(era => <button key={era} onClick={() => handleEraChange(era as "Ancient" | "Medieval" | "Modern")} className={`px-4 py-2 rounded font-medium transition-colors ${selectedEra === era ? "bg-gold text-white" : "bg-white text-deepblue hover:bg-gray-100"}`}>
                {era} India
              </button>)}
          </div>
        </div>

        {eraSummary && <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-playfair font-bold text-deepblue mb-3 flex items-center">
              <Info className="mr-2 text-gold" size={20} />
              {selectedEra} India Overview
            </h2>
            <div className="relative">
              {isLoadingSummary ? <div className="h-24 flex items-center justify-center">
                  <div className="animate-pulse w-full space-y-3">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                </div> : <p className="text-gray-700 text-justify">{eraSummary}</p>}
            </div>
          </div>}

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => scrollTimeline('left')} className="bg-deepblue text-white p-2 rounded-full hover:bg-opacity-90" aria-label="Scroll timeline left">
              <ChevronLeft size={20} />
            </button>
            <div className="text-deepblue font-medium">Scroll Timeline</div>
            <button onClick={() => scrollTimeline('right')} className="bg-deepblue text-white p-2 rounded-full hover:bg-opacity-90" aria-label="Scroll timeline right">
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex items-center gap-4 w-1/3">
            <ZoomOut className="text-deepblue" size={20} />
            <Slider defaultValue={[1]} max={5} step={0.1} min={1} value={[zoomLevel]} onValueChange={handleZoomChange} className="w-full" />
            <ZoomIn className="text-deepblue" size={20} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8 overflow-hidden">
          <div ref={timelineRef} className="overflow-x-auto pb-4 hide-scrollbar" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            <div className="relative min-w-max">
              <div className="absolute h-1 bg-sage top-8 left-0 right-0 z-0"></div>
              <div className="relative flex justify-between min-w-max py-6" style={{
              gap: `${10 * timelineScale}px`,
              transform: `scale(${timelineScale})`,
              transformOrigin: 'left center'
            }}>
                {filteredEvents.map((event, index) => <div key={event.id} className="flex flex-col items-center mx-4 cursor-pointer transition-transform hover:scale-105" onClick={() => setSelectedEvent(event)}>
                    <div className={`w-4 h-4 rounded-full z-10 mb-2 transition-colors ${selectedEvent?.id === event.id ? "bg-gold" : "bg-deepblue"}`}></div>
                    <div className="text-sm font-medium mb-1 text-center bg-beige px-2 py-0.5 rounded">
                      {event.date}
                    </div>
                    <div className="">
                      {event.title}
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        {selectedEvent ? (
          <ScrollArea className="h-[600px]">
            {renderSelectedEventDetails(selectedEvent)}
          </ScrollArea>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">
              Click on any event in the timeline to view details
            </p>
          </div>
        )}

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-playfair font-bold text-deepblue mb-4">
            How to Use the Timeline
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Select an era using the buttons above</li>
            <li>Click on any point in the timeline to view event details</li>
            <li>Use the arrow buttons to navigate the timeline</li>
            <li>Use the zoom slider to focus on specific periods</li>
            <li>
              Events are arranged chronologically from earliest to latest
            </li>
          </ul>
        </div>
      </div>
    </div>;
};

export default Timeline;
