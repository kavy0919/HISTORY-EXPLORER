
import React, { useState } from "react";
import { toast } from "sonner";
import { generateWhatIfResponse } from "../utils/aiUtils";
import { HistoricalEvent } from "../data/mockData";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Info, History, Check, AlertTriangle } from "lucide-react";

interface WhatIfScenarioProps {
  event: HistoricalEvent;
  onClose?: () => void;
}

const WhatIfScenario = ({ event, onClose }: WhatIfScenarioProps) => {
  const [scenario, setScenario] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFactCheck, setShowFactCheck] = useState(false);

  const getSuggestedPrompts = (event: HistoricalEvent) => {
    const defaultPrompts = [
      `What if ${event.title} never happened?`,
      `What if ${event.title} happened differently?`,
    ];

    // Add specific prompts based on event type
    switch (event.type) {
      case "Military":
        return [
          ...defaultPrompts,
          "What if the opposing side had won?",
          "What if there was a peaceful resolution?",
        ];
      case "Cultural":
        return [
          ...defaultPrompts,
          "What if the cultural exchange was more limited?",
          "What if there was more foreign influence?",
        ];
      case "Political":
        return [
          ...defaultPrompts,
          "What if a different leader had emerged?",
          "What if the policies were reversed?",
        ];
      case "Spiritual":
        return [
          ...defaultPrompts,
          "What if the religious movement took a different path?",
          "What if there was more resistance to change?",
        ];
      default:
        return defaultPrompts;
    }
  };

  const handleGenerateResponse = async () => {
    if (!scenario.trim()) {
      toast.error("Please enter a scenario first");
      return;
    }

    setIsLoading(true);
    try {
      const whatIfResponse = await generateWhatIfResponse(event.title, scenario);
      setResponse(whatIfResponse);
      setShowFactCheck(true);
    } catch (error) {
      toast.error("Failed to generate response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-lg">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-deepblue flex items-center gap-2">
            <History className="h-6 w-6" />
            Alternative History Explorer
          </h3>
          <p className="text-gray-600 mt-2">
            Explore how history might have changed if events unfolded differently.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-lg text-deepblue">{event.title} ({event.date})</h4>
          <p className="text-gray-700">{event.description}</p>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Suggested scenarios:
            </label>
            <div className="flex flex-wrap gap-2">
              {getSuggestedPrompts(event).map((prompt, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-gold hover:text-white"
                  onClick={() => setScenario(prompt)}
                >
                  {prompt}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="scenario" className="block text-sm font-medium text-gray-700">
              Enter your alternative history scenario:
            </label>
            <div className="flex gap-2">
              <Input
                id="scenario"
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                placeholder="What if..."
                className="flex-1"
              />
              <Button
                onClick={handleGenerateResponse}
                disabled={isLoading || !scenario.trim()}
                className="bg-gold hover:bg-amber-600"
              >
                {isLoading ? "Generating..." : "Generate"}
              </Button>
            </div>
          </div>

          {response && (
            <Tabs defaultValue="response" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="response">Alternative History</TabsTrigger>
                <TabsTrigger value="factcheck">Fact Check</TabsTrigger>
              </TabsList>
              <TabsContent value="response" className="mt-4">
                <ScrollArea className="h-60">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-gold mt-1" />
                      <div>
                        <h5 className="font-medium text-deepblue">Alternative Timeline</h5>
                        <p className="text-gray-700">{response}</p>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="factcheck" className="mt-4">
                <ScrollArea className="h-60">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h5 className="font-medium text-deepblue">Historical Facts</h5>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          {event.subEvents?.map((subEvent, index) => (
                            <li key={index}>
                              <span className="font-medium">{subEvent.title}:</span>{" "}
                              {subEvent.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {event.aiInsight && (
                      <div className="flex items-start gap-2 mt-4">
                        <AlertTriangle className="h-5 w-5 text-gold mt-1" />
                        <div>
                          <h5 className="font-medium text-deepblue">Historical Impact</h5>
                          <p className="text-gray-700">{event.aiInsight}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </div>
    </Card>
  );
};

export default WhatIfScenario;
