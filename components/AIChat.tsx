
import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Sparkles, Terminal, CheckCircle2, Clock } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { COMPANY_NAME, TAGLINE } from '../constants';

interface ChatMessage {
  role: 'ai' | 'user';
  text: string;
  timestamp: string;
  status?: 'sending' | 'sent';
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'ai', 
      text: `Welcome to Atomic Air Technical Support. I'm your engineering assistant. I can provide detailed specifications on our cold-climate heat pumps or calculate your potential $10,500 government rebate. How may I assist your HVAC planning today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
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
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setInput('');
    setMessages(prev => [...prev, { 
      role: 'user', 
      text: userText, 
      timestamp: time,
      status: 'sent' 
    }]);
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
- Use clear headings in ALL CAPS for different sections of your response.

Tone: Professional, articulate, and helpful.`
        }
      });

      const aiText = response.text || "I'm having a bit of trouble connecting to our technical database. Please try again or call our master technicians at 647.964.8579!";
      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: aiText, 
        timestamp: aiTime 
      }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "Service temporarily unavailable. Our engineers are working on it. Please call 647.964.8579 for immediate assistance.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Visual attractive floating bubble */}
      <div className={`fixed bottom-8 right-8 z-[60] flex items-center justify-center transition-all duration-500 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="absolute inset-0 bg-orange-500/20 rounded-2xl animate-ping scale-110 pointer-events-none"></div>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white rounded-2xl flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(255,107,0,0.6)] transition-all hover:scale-110 hover:shadow-[0_25px_60px_-12px_rgba(255,107,0,0.7)] group border border-white/20 active:scale-95"
          aria-label="Open AI Assistant"
        >
          <Sparkles size={28} className="text-white group-hover:rotate-12 transition-transform duration-300" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-slate-900 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
            Ask AI Assistant
          </div>
        </button>
      </div>

      <div className={`fixed bottom-8 right-8 w-[90vw] sm:w-[440px] h-[720px] max-h-[85vh] bg-white rounded-[2.5rem] shadow-[0_32px_80px_-20px_rgba(0,0,0,0.3)] z-[70] flex flex-col transition-all duration-500 ease-out border border-slate-200 overflow-hidden ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 pointer-events-none scale-95 origin-bottom-right'}`}>
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg group">
              <Terminal size={20} className="text-orange-500 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-sm tracking-tight uppercase tracking-[0.1em]">Technical Assistant</h3>
              <p className="text-[9px] text-green-600 font-black uppercase tracking-[0.2em] flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                Neural Link Active
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-slate-400 hover:text-slate-900 p-2.5 rounded-xl hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-8 bg-[#fcfdfe] relative">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
          
          {messages.map((m, i) => (
            <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
              <div 
                className={`relative max-w-[85%] px-6 py-5 text-[15px] font-medium leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-slate-900 text-white rounded-[1.5rem] rounded-tr-none shadow-[0_12px_24px_-8px_rgba(15,23,42,0.3)]' 
                  : 'bg-white text-slate-800 border border-slate-200 rounded-[1.5rem] rounded-tl-none shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)]'
                }`}
                style={{ wordBreak: 'break-word' }}
              >
                {m.text}
              </div>
              
              {/* Message Metadata: Timestamp and Sent Indicator */}
              <div className={`mt-2 flex items-center gap-2 px-1 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1">
                  <Clock size={10} />
                  {m.timestamp}
                </span>
                {m.role === 'user' && m.status === 'sent' && (
                  <span className="text-[9px] font-black uppercase tracking-widest text-green-600 flex items-center gap-1">
                    <CheckCircle2 size={10} />
                    Sent
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Advanced Typing Indicator */}
          {isLoading && (
            <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-1 duration-200">
              <div className="bg-white border border-slate-200 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-sm">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce [animation-duration:800ms]"></div>
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce [animation-duration:800ms] [animation-delay:200ms]"></div>
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-bounce [animation-duration:800ms] [animation-delay:400ms]"></div>
                </div>
                <div className="h-4 w-px bg-slate-100"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] animate-pulse">
                  Analyzing Technical Specs...
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-slate-100 relative z-10">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600/20 to-slate-900/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl p-2 focus-within:bg-white focus-within:border-slate-400 transition-all">
              <input 
                type="text" 
                placeholder="Ask about heat pump specs..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-grow bg-transparent px-4 py-3 text-sm font-semibold focus:outline-none placeholder:text-slate-400 text-slate-900"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-12 h-12 bg-slate-900 text-white rounded-xl disabled:opacity-20 hover:bg-orange-600 transition-all shadow-lg active:scale-95 flex items-center justify-center flex-shrink-0"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-5 px-1">
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
              <p className="text-[9px] text-slate-900 font-black uppercase tracking-[0.2em]">Atomic Engineering Protocol v2.5</p>
            </div>
            <button 
              onClick={() => setMessages([{ 
                role: 'ai', 
                text: "Technical log cleared. System ready for new inquiries.",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }])}
              className="text-[9px] text-slate-400 hover:text-slate-900 font-black uppercase tracking-[0.2em] transition-colors"
            >
              Reset Session
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;
