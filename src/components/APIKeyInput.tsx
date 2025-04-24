
import { useState } from 'react';
import { useAPIKey } from '../contexts/APIKeyContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Key, Eye, EyeOff, Lock, Trash2 } from 'lucide-react';

const APIKeyInput = () => {
  const { apiKey, setApiKey, clearApiKey } = useAPIKey();
  const [inputKey, setInputKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [maskedKey, setMaskedKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputKey.trim()) {
      setApiKey(inputKey.trim());
      toast.success('API key saved successfully');
      setInputKey('');
      
      // Create masked version of the key for display
      const key = inputKey.trim();
      if (key.length > 8) {
        setMaskedKey(`${key.substring(0, 4)}...${key.substring(key.length - 4)}`);
      } else {
        setMaskedKey('****');
      }
    }
  };

  const handleClearKey = () => {
    clearApiKey();
    setMaskedKey('');
    toast.success('API key removed');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mt-8">
      <div className="flex items-center justify-center mb-4 text-gold">
        <Key size={28} className="mr-2" />
        <h2 className="text-xl font-playfair font-bold text-deepblue">
          OpenAI API Configuration
        </h2>
      </div>
      
      {apiKey ? (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Lock className="text-green-600 mr-2" size={18} />
                <span className="text-green-800 font-medium">API key is set</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setShowKey(!showKey)}
                  className="text-deepblue p-1 rounded-full hover:bg-gray-100"
                  aria-label={showKey ? "Hide API key" : "Show API key"}
                >
                  {showKey ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                <button 
                  onClick={handleClearKey}
                  className="text-red-600 p-1 rounded-full hover:bg-gray-100"
                  aria-label="Remove API key"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            
            {showKey && (
              <div className="mt-2 font-mono text-sm bg-gray-100 p-2 rounded">
                {maskedKey || apiKey.substring(0, 8) + '...'}
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-600">
            Your API key is securely stored in your browser's local storage. You can clear it at any time.
          </p>
          
          <Button 
            onClick={handleClearKey}
            variant="outline" 
            className="w-full border-red-300 text-red-600 hover:bg-red-50"
          >
            <Trash2 size={16} className="mr-2" /> Remove API Key
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your OpenAI API key
            </label>
            <div className="relative">
              <Input
                type="password"
                id="apiKey"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="sk-..."
                className="w-full pl-9"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-gold hover:bg-amber-600">
            Save API Key
          </Button>
          
          <div className="text-xs text-gray-500 p-3 bg-gray-50 rounded-md">
            <p className="mb-2 font-medium">Why do we need your API key?</p>
            <p>History Explorer uses OpenAI's API to generate historical content. Your API key:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Is stored securely in your browser</li>
              <li>Is never sent to our servers</li>
              <li>Lets you use your own OpenAI account quota</li>
            </ul>
            <p className="mt-2">
              <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-amber-600">
                Get an API key from OpenAI →
              </a>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default APIKeyInput;
