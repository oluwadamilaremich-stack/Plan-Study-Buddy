import React, { useState, useRef, useEffect } from 'react';
import { FaPaperclip, FaTrashAlt, FaTimes } from "react-icons/fa";
import { FiSend, FiFileText, FiAlertCircle } from "react-icons/fi";
import { LuLoaderCircle, LuSparkles } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import { useStudy } from '../context/StudyContext';
import Groq from "groq-sdk";
import PlanImg from "../assets/PlanImg.png";

const AIAssistant = () => {
  const { userData, updateStudyPlan } = useStudy();
  
  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [messages, setMessages] = useState(userData.chatHistory || [
    { id: 1, role: 'ai', text: "Hi! I'm your AI study companion. How can I help you today?", type: 'text' }
  ]);

  const [input, setInput] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isClearModalOpen, setIsClearModalOpen] = useState(false);
  
  const fileInputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    updateStudyPlan({ chatHistory: messages });
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile({
          name: file.name,
          preview: reader.result,
          type: file.type.startsWith('image/') ? 'image' : 'file'
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() && !selectedFile) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: input,
      file: selectedFile,
      type: selectedFile ? selectedFile.type : 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setSelectedFile(null);
    setIsAiLoading(true);

    try {
      const promptContext = userMessage.file 
        ? `[File Uploaded: ${userMessage.file.name}] ${input}`
        : input;

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful AI Study Assistant. Focus on clear, academic explanations." },
          ...messages.map(m => ({ role: m.role === 'ai' ? 'assistant' : 'user', content: m.text })),
          { role: "user", content: promptContext }
        ],
        model: "llama-3.3-70b-versatile",
      });

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: 'ai',
        text: completion.choices[0]?.message?.content,
        type: 'text'
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now()+1, role: 'ai', text: "Connection error. Please try again.", type: 'text' }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const confirmClearChat = () => {
    setMessages([{ id: 1, role: 'ai', text: "Chat cleared. How can I help you start fresh?", type: 'text' }]);
    setIsClearModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-white relative">
        <div className="flex-1 flex flex-col min-w-0 bg-white">
            
            
            <div className="px-4 py-4 bg-gradient-to-r from-[#246690] to-[#00BBA7] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
                <img src={PlanImg} alt="" className='w-10 h-10 object-contain' />
                <div>
                <h2 className="font-bold text-lg">AI Assistant</h2>
                <p className="text-xs text-white/80">Always here to help</p>
                </div>
            </div>
            <button 
                onClick={() => setIsClearModalOpen(true)} 
                className="p-2.5 hover:bg-white/10 rounded-xl transition-colors"
            >
                <FaTrashAlt size={20} />
            </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-8 space-y-6 custom-scrollbar bg-[#FDFDFD]">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    msg.role === 'user' ? 'bg-[#246690]' : 'bg-white border border-teal-100'
                    }`}>
                    {msg.role === 'user' ? <span className="text-[10px] text-white font-black">YOU</span> : <LuSparkles size={16} className="text-[#14B8A6]" />}
                    </div>

                    <div className={`p-4 rounded-[1.5rem] text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' ? 'bg-[#14B8A6] text-white rounded-tr-none' : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none'
                    }`}>
                    {msg.file?.type === 'image' && (
                        <img src={msg.file.preview} alt="Upload" className="mb-3 rounded-xl max-w-full h-auto border border-white/20" />
                    )}
                    {msg.file?.type === 'file' && (
                        <div className="mb-3 p-3 bg-black/5 rounded-xl flex items-center gap-3 border border-black/5">
                        <FiFileText size={18} />
                        <span className="text-xs truncate font-bold">{msg.file.name}</span>
                        </div>
                    )}
                    <p className="whitespace-pre-wrap font-medium">{msg.text}</p>
                    </div>
                </div>
                </div>
            ))}
            {isAiLoading && (
                <div className="flex justify-start animate-pulse">
                <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center gap-3 shadow-sm">
                    <LuLoaderCircle size={16} className="animate-spin text-[#14B8A6]" />
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">AI Thinking</span>
                </div>
                </div>
            )}
            </div>

            <div className="p-4 md:p-6 bg-white border-t border-gray-100">
                {selectedFile && (
                    <div className="mb-4 p-2 md:p-3 bg-[#F0FDFA] border border-[#14B8A6]/20 rounded-2xl flex items-center justify-between animate-in slide-in-from-bottom-2">
                    <div className="flex items-center gap-2 md:gap-3">
                        {selectedFile.type === 'image' ? (
                        <img src={selectedFile.preview} className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover" />
                        ) : (
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-[#14B8A6] shadow-sm">
                            <FiFileText size={18} />
                        </div>
                        )}
                        <span className="text-[10px] md:text-xs font-black text-gray-600 truncate max-w-[120px] md:max-w-[200px]">
                        {selectedFile.name}
                        </span>
                    </div>
                    <button onClick={() => setSelectedFile(null)} className="p-1.5 text-red-400 hover:bg-red-50 rounded-full transition-colors">
                        <FaTimes size={16} />
                    </button>
                    </div>
                )}

                <form onSubmit={handleSendMessage} className="flex items-center gap-1 md:gap-3 bg-gray-50 p-1.5 md:p-2 rounded-[1.5rem] border border-gray-200 focus-within:border-[#14B8A6] transition-all">
                
                    <div className="flex gap-0 md:gap-1 pl-1">
                        <button 
                            type="button" 
                            onClick={() => fileInputRef.current.click()} 
                            className="p-2 text-gray-400 hover:text-[#14B8A6] transition-colors"
                        >
                            <IoCameraOutline size={18} className="md:w-5 md:h-5" />
                        </button>
                        <button 
                            type="button" 
                            onClick={() => fileInputRef.current.click()} 
                            className="p-2 text-gray-400 hover:text-[#246690] transition-colors"
                        >
                            <FaPaperclip size={18} className="md:w-5 md:h-5" />
                        </button>
                    </div>

                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*,.pdf,.txt" />
                    
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Type a message..." 
                    className="flex-1 bg-transparent py-2 md:py-3 outline-none text-[13px] md:text-sm font-bold text-gray-700 placeholder:text-gray-400 min-w-0" 
                    />

                    <button 
                        type="submit" 
                        disabled={!input.trim() && !selectedFile} 
                        className="bg-gradient-to-r from-[#246690] to-[#00BBA7] text-white p-2.5 md:p-3.5 rounded-xl md:rounded-2xl disabled:opacity-30 transition-all shadow-md active:scale-95 shrink-0"
                        >
                        <FiSend size={18} className="md:w-5 md:h-5" />
                    </button>
                </form>
            </div>
        </div>

        {isClearModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#101828]/60 backdrop-blur-md animate-in fade-in duration-300">
                <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-in zoom-in-95 relative text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-3xl flex items-center justify-center text-red-500 mx-auto mb-6">
                        <FiAlertCircle size={32} />
                    </div>
                    
                    <h2 className="text-2xl font-black text-[#101828] mb-3">Clear Chat?</h2>
                    <p className="text-gray-500 font-medium text-sm mb-8">
                        This will permanently delete your conversation history with the AI. You can't undo this action.
                    </p>

                    <div className="flex flex-col gap-3">
                        <button 
                            onClick={confirmClearChat}
                            className="w-full py-4 bg-red-500 text-white rounded-2xl font-black text-sm hover:bg-red-600 active:scale-95 transition-all"
                        >
                            Yes, Clear Everything
                        </button>
                        <button 
                            onClick={() => setIsClearModalOpen(false)}
                            className="w-full py-4 bg-gray-50 text-gray-500 rounded-2xl font-black text-sm hover:bg-gray-100 transition-all"
                        >
                            No, Keep Chat
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default AIAssistant;