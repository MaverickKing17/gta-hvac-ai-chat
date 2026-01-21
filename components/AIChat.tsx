
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles, ChevronRight } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { COMPANY_NAME, TAGLINE } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string }[]>([
    { role: 'ai', text: `Hi! I'm your Atomic Air Assistant. How can I help you with your heating, cooling, or the $10,500 government rebate today?` }
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
1. Legacy of Trust: We are a multi-generational family business. We treat every home with high integrity.
2. Educational Expertise: Don't just answer; educate. Explain the "how" and "why" to build customer confidence.

Knowledge:
- Cold-Climate Heat Pumps: Mitsubishi/Daikin systems efficient to -25C. Ice/clogs are common issues.
- Hydronic Snow Melt: PEX tubing with glycol. Maintenance is key before first frost.
- Rebates: Home Efficiency Rebate Plus ($10,500).

Tone: Professional, helpful, patient. Short answers are better.`
        }
      });

      const aiText = response.text || "I'm having a bit of trouble connecting. Please try again or call us at 647.964.8579!";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm offline right now. Feel free to call us directly!" }]);
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

      <div className={`fixed bottom-8 right-8 w-[90vw] sm:w-[380px] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] z-[70] flex flex-col transition-all duration-300 border border-slate-200 overflow-hidden ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center shadow-sm">
              <Bot size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Expert Assistant</h3>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Powered by Atomic AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900 p-1">
            <X size={20} />
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-white">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-100 text-slate-800'}`}>
                {m.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 p-4 rounded-xl flex gap-1">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative flex items-center gap-2">
            <input 
              type="text" 
              placeholder="How can I help you?" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-grow bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-slate-900 transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-slate-900 text-white rounded-lg disabled:opacity-50 hover:bg-slate-800 transition-colors shadow-sm"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[9px] text-slate-400 text-center mt-3 font-medium">Atomic Air AI may provide automated info. Call us for verified quotes.</p>
        </div>
      </div>
    </>
  );
};

export default AIChat;
