import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
    action?: {
        label: string;
        link: string;
        isPrimary?: boolean;
    };
}

export default function Chatbot() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: t('chatbot.welcome', 'Merhaba! Size nasıl yardımcı olabilirim?'),
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const whatsappNumber = "905347665616";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    const quickQuestions = [
        { text: t('chatbot.q1', 'Ürün kataloğuna nasıl ulaşabilirim?'), link: '#products' },
        { text: t('chatbot.q2', 'Fiyat teklifi almak istiyorum.'), link: whatsappLink },
        { text: t('chatbot.q3', 'İletişim bilgileriniz nelerdir?'), link: '#contact' },
        { text: t('chatbot.q4', 'Hangi ülkelere ihracat yapıyorsunuz?'), link: '#references' },
    ];

    useEffect(() => {
        const handleOpenChatWithProduct = (event: CustomEvent) => {
            const { productName } = event.detail;
            setIsOpen(true);
            
            const userText = t('chatbot.ai.productInquiry', { product: productName });
            const userMessage: Message = {
                id: Date.now(),
                text: userText,
                sender: 'user',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, userMessage]);
            setIsTyping(true);

            setTimeout(() => {
                const aiResponse: Message = {
                    id: Date.now() + 1,
                    text: t('chatbot.ai.price', 'Fiyat teklifi almak için lütfen WhatsApp hattımızdan veya iletişim formundan bize ulaşın. Satış ekibimiz size en kısa sürede dönüş yapacaktır.'),
                    sender: 'ai',
                    timestamp: new Date(),
                    action: {
                        label: 'WhatsApp ile Bağlan',
                        link: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(userText)}`,
                        isPrimary: true
                    }
                };
                setMessages(prev => [...prev, aiResponse]);
                setIsTyping(false);
            }, 1500);
        };

        window.addEventListener('openChatWithProduct', handleOpenChatWithProduct as EventListener);

        return () => {
            window.removeEventListener('openChatWithProduct', handleOpenChatWithProduct as EventListener);
        };
    }, [t]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI Response
        setTimeout(() => {
            const aiResponse: Message = {
                id: Date.now() + 1,
                text: generateAIResponse(userMessage.text),
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const generateAIResponse = (input: string): string => {
        const lowerInput = input.toLowerCase();
        
        // Exact matches for quick questions (using keys or partial text matching)
        if (input === t('chatbot.q1') || lowerInput.includes('katalog') || lowerInput.includes('catalog')) {
             return t('chatbot.ai.products', 'Geniş ürün yelpazemizi "Ürünlerimiz" sayfasından inceleyebilirsiniz. Sac, boru, profil ve daha fazlası için kataloğumuza göz atın.');
        }
        if (input === t('chatbot.q2') || lowerInput.includes('fiyat') || lowerInput.includes('teklif') || lowerInput.includes('price') || lowerInput.includes('quote')) {
             return t('chatbot.ai.price', 'Fiyat teklifi almak için lütfen WhatsApp hattımızdan veya iletişim formundan bize ulaşın. Satış ekibimiz size en kısa sürede dönüş yapacaktır.');
        }
        if (input === t('chatbot.q3') || lowerInput.includes('iletişim') || lowerInput.includes('adres') || lowerInput.includes('telefon') || lowerInput.includes('contact')) {
             return t('chatbot.ai.contact', 'Bize +90 346 222 22 22 numaralı telefondan veya info@sivasironmetal.com adresinden ulaşabilirsiniz. Ofisimiz Sivas Organize Sanayi Bölgesi\'ndedir.');
        }
        if (input === t('chatbot.q4') || lowerInput.includes('ülke') || lowerInput.includes('ihracat') || lowerInput.includes('export') || lowerInput.includes('country')) {
             return t('services.map.desc', '20\'den fazla ülkeye ihracat yapıyoruz. Küresel ağımız hakkında detaylı bilgi için Referanslar bölümünü inceleyebilirsiniz.');
        }

        // Generic greetings
        if (lowerInput.includes('merhaba') || lowerInput.includes('selam') || lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return t('chatbot.ai.greeting', 'Merhaba! Size nasıl yardımcı olabilirim?');
        }
        
        // Final fallback
        return t('chatbot.ai.default', 'Bu konuda size yardımcı olabilmek için lütfen müşteri temsilcimizle iletişime geçin veya sorunuzu daha detaylı yazın.');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="w-80 sm:w-96 h-[500px] flex flex-col rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                                        <MessageCircle size={24} />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm">Sivas Iron Metal</h3>
                                    <p className="text-white/80 text-xs">AI Assistant</p>
                                </div>
                            </div>
                            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                            msg.sender === 'user'
                                                ? 'bg-primary text-white rounded-tr-none'
                                                : 'bg-white text-gray-700 border border-gray-100 rounded-tl-none shadow-sm'
                                        }`}
                                    >
                                        {msg.text}
                                    </div>
                                    {msg.action && (
                                        <a
                                            href={msg.action.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-2 text-xs font-medium px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-2 ${
                                                msg.action.isPrimary
                                                    ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-200'
                                                    : 'bg-white text-primary border border-primary/10 hover:bg-primary hover:text-white'
                                            }`}
                                        >
                                            <MessageCircle size={14} />
                                            {msg.action.label}
                                        </a>
                                    )}
                                </div>
                            ))}
                            
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                            
                            {messages.length === 1 && (
                                <div className="mt-auto flex flex-col gap-2 pt-4">
                                    <p className="text-xs text-gray-500 font-medium ml-1 mb-1">Hızlı Sorular:</p>
                                    {quickQuestions.map((q, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                const userMessage: Message = {
                                                    id: Date.now(),
                                                    text: q.text,
                                                    sender: 'user',
                                                    timestamp: new Date()
                                                };
                                                setMessages(prev => [...prev, userMessage]);
                                                setIsTyping(true);

                                                setTimeout(() => {
                                                    const aiResponse: Message = {
                                                        id: Date.now() + 1,
                                                        text: generateAIResponse(q.text),
                                                        sender: 'ai',
                                                        timestamp: new Date()
                                                    };
                                                    setMessages(prev => [...prev, aiResponse]);
                                                    setIsTyping(false);
                                                }, 1000);
                                            }}
                                            className="text-left text-xs font-medium text-primary bg-white border border-primary/10 hover:bg-primary hover:text-white p-3 rounded-xl transition-all shadow-sm hover:shadow-md"
                                        >
                                            {q.text}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-3 bg-white border-t border-gray-100 shrink-0">
                            <form onSubmit={handleSend} className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={t('chatbot.placeholder', 'Bir mesaj yazın...')}
                                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim() || isTyping}
                                    className="p-2.5 bg-primary text-white rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isTyping ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:bg-red-700 transition-colors relative"
            >
                {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
                {!isOpen && (
                    <span className="absolute top-0 right-0 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
