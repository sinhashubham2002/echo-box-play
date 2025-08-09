import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [inputText, setInputText] = useState("");

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Main Card */}
        <Card className="p-8 shadow-elegant border-0 bg-white/70 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Welcome Paragraph */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Interactive Text Display
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
                Welcome to this simple interactive page! Type anything in the text field below, 
                and watch as your words appear in real-time in the display area. 
                It's a perfect example of live text interaction.
              </p>
            </div>

            {/* Input Section */}
            <div className="space-y-4">
              <Label htmlFor="textInput" className="text-base font-medium">
                Enter your text:
              </Label>
              <Input
                id="textInput"
                type="text"
                placeholder="Start typing to see the magic happen..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onPaste={handlePaste}
                className="text-lg py-3 px-4 border-2 focus:border-primary/50 transition-all duration-300"
              />
            </div>

            {/* Display Section */}
            <div className="space-y-4">
              <Label className="text-base font-medium">
                Your text appears here:
              </Label>
              <div className="min-h-[120px] bg-gradient-primary/5 border-2 border-dashed border-primary/20 rounded-lg p-6 transition-all duration-300 select-none">
                {inputText ? (
                  <p className="text-lg text-foreground break-words animate-in fade-in duration-200 select-none">
                    {inputText}
                  </p>
                ) : (
                  <p className="text-muted-foreground italic select-none">
                    Your typed text will appear here...
                  </p>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Info Footer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;