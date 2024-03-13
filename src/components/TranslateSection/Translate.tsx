import { SpeakerWaveIcon, DocumentDuplicateIcon, ChevronUpDownIcon, BookmarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import NavTranslate from "../NavTranslate/NavTranslate";
import InputSection from "../Shared/InputSection/InputSection";
import { useState } from "react";
import { translateText } from "@/services/Service";
import LoadingPage from "../Shared/Loading/Loading";

export default function Translate() {
        const [isLoading, setIsLoading] = useState(false);
        const [text, setText] = useState('');
        const [textTranslate, setTextTranslate] = useState('');
        const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                const inputText = e.target.value;
                setText(inputText);
                if (!inputText.trim()) {
                        setTextTranslate(''); 
                        return; 
                }
                setIsLoading(true);
                try {
                        const response = await translateText(inputText);
                        setTextTranslate(response?.message.content);
                } catch (error) {
                        console.error("Translation failed:", error);
                } finally {
                        setIsLoading(false);
                }
        };

        const clearText = () => {
                setText('');
                setTextTranslate('');
        };
        return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-10">
                        {isLoading && <LoadingPage />}
                        <div className="px-2 sm:px-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">Translate</h2>
                                <div className="mb-4">
                                        <div className="flex justify-start mb-4">
                                                <NavTranslate Type="Transition" />
                                        </div>
                                        <div className="relative mb-4">
                                                <div className="flex flex-col">
                                                        <div className="p-4 text-sm text-black border-2 border-purple-500 rounded-lg">
                                                                <InputSection value={text}
                                                                        onChange={handleChange} className="w-full h-40 border-none" placeholder="Enter text" />
                                                        </div>
                                                        <div className="flex absolute inset-y-2 left-2 items-end pl-3">
                                                                <button type="button" className="text-gray-400">
                                                                        <SpeakerWaveIcon className={`h-3 w-3`} />
                                                                </button>
                                                                <button type="button" className="text-gray-400 ml-2">
                                                                        <DocumentDuplicateIcon className={`h-3 w-3`} />
                                                                </button>
                                                                {text && (
                                                                        <button type="button" className="text-gray-400 ml-2" onClick={clearText}>
                                                                                <TrashIcon className="h-3 w-3" />
                                                                        </button>
                                                                )}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="flex justify-center mb-4">
                                        <button className="p-1 rounded-full bg-gray-400 text-white transition">
                                                <ChevronUpDownIcon className={`h-6 w-6`} />
                                        </button>
                                </div>
                        </div>
                        <div className="px-2 sm:px-6">
                                <div className="mb-4">
                                        <div className="flex justify-start mb-4">
                                                <NavTranslate Type="translated" />
                                        </div>
                                        <div className="relative mb-4">
                                                <div className="flex flex-col">
                                                        <div className="p-4 text-sm text-black border-2 border-gray-200 rounded-lg">
                                                                <InputSection value={textTranslate} className="w-full h-40 border-none" placeholder="Translation" />
                                                        </div>
                                                        <div className="flex absolute inset-y-2 left-2 items-end pl-3">
                                                                <button type="button" className="text-gray-400">
                                                                        <SpeakerWaveIcon className={`h-3 w-3`} />
                                                                </button>
                                                                <button type="button" className="text-gray-400 ml-2">
                                                                        <DocumentDuplicateIcon className={`h-3 w-3`} />
                                                                </button>
                                                                <button type="button" className="text-gray-400 ml-2">
                                                                        <BookmarkIcon className={`h-3 w-3`} />
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
