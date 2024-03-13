import { LanguageIcon, PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
interface NavigationProps {
        setActiveSection: (value: string) => void;
}

export default function Navigation(props: NavigationProps) {
        const [active, setActive] = useState('translate');
        const handleClick = (section: string) => {
                props.setActiveSection(section);
                setActive(section);
        };
        return (
                <nav className="w-20 sm:w-24 flex flex-col bg-gray-800 text-white rounded-l-lg">
                        <div className="px-4 py-8">
                                <button
                                        onClick={() => handleClick('translate')}
                                        className={`w-full flex items-center justify-center px-4 py-2 text-white `}
                                >
                                        <div>
                                                <LanguageIcon className={`w-28 h-10 m-auto ${active === 'translate' ? 'text-purple-700 mr-8 pl-6 rounded-full bg-white' : 'text-white'}`} />
                                                <span className="">Translate</span>
                                        </div>
                                </button>
                                <button
                                        onClick={() => handleClick('write')}
                                        className={`w-full flex items-center justify-center px-4 py-2 text-white`}
                                >
                                        <div>
                                                <PencilIcon className={`w-28 h-10 m-auto ${active === 'write' ? 'text-purple-700 mr-8 pl-6 rounded-full bg-white' : 'text-white'}`} />
                                                <span>Write</span>
                                        </div>
                                </button>
                        </div>
                        <div className="mt-auto px-4 py-4">
                                <div className="flex justify-center items-center">
                                        <img
                                                src="/icon.png"
                                                alt="Profile"
                                                className="w-10 h-10 rounded-full border-2 border-white"
                                        />
                                </div>
                        </div>
                </nav>
        );
}
