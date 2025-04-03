'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { codeBlocks, Difficulty, Language } from '@/types/code';

export default function Home() {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [currentCode, setCurrentCode] = useState(codeBlocks.easy[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('python');
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setCurrentCodeIndex(0);
    setCurrentCode(codeBlocks[difficulty][0]);
    setShowHint(false);
  }, [difficulty]);

  const handleNextCode = () => {
    if (codeBlocks[difficulty].length > 1) {
      const nextIndex = (currentCodeIndex + 1) % codeBlocks[difficulty].length;
      setCurrentCodeIndex(nextIndex);
      setCurrentCode(codeBlocks[difficulty][nextIndex]);
      setShowHint(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
            <h1 className="text-xl font-bold">CODE GUESSER by SLIIT FOSS Community</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Difficulty Selector */}
          <Select
            value={difficulty}
            onValueChange={(value: Difficulty) => setDifficulty(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>

          {/* Code Editor */}
          <Card className="w-full max-w-4xl">
            <CardHeader>
              <CardTitle>Code Block #{currentCode.id}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Select
                  value={selectedLanguage}
                  onValueChange={(value: Language) => setSelectedLanguage(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="c">C</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{currentCode.code[selectedLanguage]}</pre>
              </div>
              <div className="mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowHint(!showHint)}
                  className="mb-2"
                >
                  {showHint ? 'Hide Hint' : 'Give me a hint!'}
                </Button>
                {showHint && (
                  <p className="text-sm text-gray-600 mt-2">{currentCode.description}</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Next Button */}
          {codeBlocks[difficulty].length > 1 && (
            <Button onClick={handleNextCode} className="w-32">
              Next Code
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
