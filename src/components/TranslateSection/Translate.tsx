import { SpeakerWaveIcon, DocumentDuplicateIcon, ChevronUpDownIcon, BookmarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import NavTranslate from "../NavTranslate/NavTranslate";
import InputSection from "../Shared/InputSection/InputSection";
import { useState } from "react";

export default function Translate() {
        const [text, setText] = useState('');

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setText(e.target.value);
        };

        const clearText = () => {
                setText('');
        };
        return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-10">
                        <div className="p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left">Translate</h2>
                                <div className="mb-4">
                                        <div className="flex justify-start mb-4">
                                                <NavTranslate Type="Transition" />
                                        </div>
                                        <div className="relative mb-4">
                                                <InputSection value={text}
                                                        onChange={handleChange} className="w-full p-4 h-40 text-sm text-black border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter text" />
                                                <div className="flex absolute inset-y-5 left-2 items-end pl-3">
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
                                <div className="flex justify-center mb-4">
                                        <button className="p-2 rounded-full bg-gray-400 text-white transition">
                                                <ChevronUpDownIcon className={`h-8 w-8`} />
                                        </button>
                                </div>
                        </div>
                        <div className="bg-gray-50 p-6">
                                <div className="mb-4">
                                        <div className="flex justify-start mb-4">
                                                <NavTranslate Type="translated" />
                                        </div>
                                        <div className="relative mb-4">
                                                <InputSection className="w-full p-4 h-40 text-sm text-black border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Translation" />
                                                <div className="flex absolute inset-y-5 left-2 items-end pl-3">
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
        );
}
