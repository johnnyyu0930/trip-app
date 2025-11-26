import React, { useState, useRef, useEffect } from 'react';
import { generateTravelAdvice, generateSouvenirImage } from '../services/geminiService';
import { MessageCircle, X, Send, Image as ImageIcon, Sparkles } from 'lucide-react';
import { ITINERARY_DATA } from '../constants';
import { ChatMessage } from '../types';

const ChiikawaAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '你好！我是你的九州旅遊小幫手 (｡•̀ᴗ-)✧ 有什麼問題都可以問我喔！' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const context = JSON.stringify(ITINERARY_DATA.map(d => ({ date: d.date, title: d.title })));
    const reply = await generateTravelAdvice(userMsg, context);
    
    setMessages(prev => [...prev, { role: 'model', text: reply }]);
    setIsLoading(false);
  };

  const handleGenerateImage = async () => {
      // Pick a random spot from itinerary to draw
      const randomDay = ITINERARY_DATA[Math.floor(Math.random() * ITINERARY_DATA.length)];
      const randomItem = randomDay.items[Math.floor(Math.random() * randomDay.items.length)];
      const prompt = `${randomItem.title} in Kyushu Japan`;
      
      setMessages(prev => [...prev, { role: 'user', text: `幫我畫一張 ${randomItem.title} 的照片！` }]);
      setIsLoading(true);

      const imageBase64 = await generateSouvenirImage(prompt);
      
      if (imageBase64) {
          setMessages(prev => [...prev, { role: 'model', text: '畫好囉！看看可愛嗎？ (ﾉ>ω<)ﾉ', isImage: true }, { role: 'model', text: imageBase64, isImage: true }]);
      } else {
          setMessages(prev => [...prev, { role: 'model', text: '嗚嗚... 畫筆沒水了 (API Error)，但我心中已經畫好了！' }]);
      }
      setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-white border-4 border-chiikawa-darkPink text-chiikawa-text p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce-slow"
        >
          <MessageCircle size={32} className="text-chiikawa-darkPink" />
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-white">Ask Me!</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white border-4 border-chiikawa-darkPink rounded-3xl shadow-2xl w-80 sm:w-96 flex flex-col overflow-hidden max-h-[80vh]">
          {/* Header */}
          <div className="bg-chiikawa-pink p-4 flex justify-between items-center border-b-2 border-chiikawa-darkPink">
            <h3 className="font-bold text-lg text-chiikawa-text flex items-center gap-2">
               <Sparkles size={18} className="text-yellow-500" />
               吉伊卡哇小幫手
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-chiikawa-text hover:text-red-500">
              <X size={24} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-chiikawa-yellow/30 min-h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-chiikawa-darkBlue text-white rounded-br-none'
                      : 'bg-white text-chiikawa-text border-2 border-chiikawa-pink rounded-bl-none'
                  }`}
                >
                  {msg.isImage && msg.text.startsWith('data:') ? (
                      <img src={msg.text} alt="Generated" className="rounded-lg w-full h-auto" />
                  ) : (
                      msg.text
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border-2 border-chiikawa-pink">
                  <span className="animate-pulse">正在思考中... 🤔</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t-2 border-chiikawa-pink flex gap-2">
            <button 
                onClick={handleGenerateImage}
                disabled={isLoading}
                className="p-2 text-chiikawa-darkPink hover:bg-chiikawa-pink rounded-full transition-colors"
                title="Generate Random Trip Image"
            >
                <ImageIcon size={24} />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="問問行程的事..."
              className="flex-1 border-2 border-chiikawa-darkPink rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-chiikawa-darkPink/50"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-chiikawa-darkPink text-white p-2 rounded-full hover:bg-pink-400 disabled:opacity-50 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChiikawaAssistant;
