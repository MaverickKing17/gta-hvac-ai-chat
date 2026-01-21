
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { COMPANY_NAME, TAGLINE } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: `Hi! I'm your Atomic Air Assistant. How can I help you today? I can explain our high-efficiency systems or guide you through the $10,500 rebate process.` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `You are a helpful, expert AI assistant for "${COMPANY_NAME}". ${TAGLINE}. Our family has been serving Toronto and the GTA since 1978.

Core Philosophies:
1. Legacy of Trust: We are a multi-generational family business. We value high integrity.
2. Educational Expertise: Don't just answer; educate. Explain the "how" and "why" to build confidence.

Formatting Guidelines:
- ALWAYS use bullet points (using the '-' character) when listing technical features, benefits, or common issues.
- ALWAYS use numbered lists (1., 2., 3.) when explaining multi-step processes, such as applying for the $10,500 rebate.
- Keep paragraphs short (2-3 sentences max).
- Use clear headings in ALL CAPS for different sections of your response if it's longer than two paragraphs.

Knowledge Base:
- Cold-Climate Heat Pumps: Mitsubishi Hyper-Heat/Daikin Fit systems efficient down to -25C.
- Hydronic Snow Melt: PEX loops with glycol. Maintenance is critical before winter.
- Rebates: Expert in the Home Efficiency Rebate Plus ($10,500).

Tone: Professional, articulate, and helpful. Prioritize clarity and scannability.`
        }
      });

      const aiText = response.text || "I'm having a bit of trouble connecting. Please try again or call us at 647.964.8579!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm offline right now. Feel free to call us directly at 647.964.8579 for expert advice!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110 z-[60] ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Sparkles size={24} />
      </button>

      <div className={`fixed bottom-8 right-8 w-[90vw] sm:w-[400px] h-[650px] max-h-[85vh] bg-white rounded-2xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.3)] z-[70] flex flex-col transition-all duration-300 border border-slate-200 overflow-hidden ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center shadow-sm">
              <Bot size={22} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Atomic Expert Support</h3>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                AI Copilot Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 bg-slate-50/30">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[90%] p-4 rounded-xl text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user' 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'bg-white text-slate-800 border border-slate-200 shadow-sm'
                }`}
                style={{ wordBreak: 'break-word' }}
              >
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 p-4 rounded-xl flex gap-1.5 shadow-sm">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Ask about heat pumps or rebates..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-grow bg-slate-100 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 focus:bg-white transition-all placeholder:text-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3.5 bg-slate-900 text-white rounded-xl disabled:opacity-30 hover:bg-slate-800 transition-all shadow-sm active:scale-95"
            >
              <Send size={20} />
            </button>
          </div>
          <div className="flex items-center justify-between mt-4 px-1">
            <p className="text-[10px] text-slate-400 font-medium">Atomic Air Professional AI</p>
            <button 
              onClick={() => setMessages([{ role: 'ai', text: "Chat history cleared. How else can I help you?" }])}
              className="text-[10px] text-slate-400 hover:text-slate-600 underline font-medium"
            >
              Clear Chat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
