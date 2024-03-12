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
                <div className="flex flex-col items-center space-y-4 p-4 rounded-full bg-gray-700 h-5/6 pt-10">
                        <button
                                onClick={() => handleClick('translate')}
                                className={`w-full flex items-center justify-center px-4 py-2 text-white `}
                        >
                                <div>
                                        <LanguageIcon className={`h-6 w-6 m-auto ${active === 'translate' ? 'text-purple-700' : 'text-white'}`} />
                                        <span>Translate</span>
                                </div>
                        </button>
                        <button
                                onClick={() => handleClick('write')}
                                className={`w-full flex items-center justify-center px-4 py-2 text-white rounded`}
                        >
                                <div>
                                        <PencilIcon className={`h-6 w-6 m-auto ${active === 'write' ? 'text-purple-700' : 'text-white'}`} />
                                        <span>Write</span>
                                </div>
                        </button>
                </div>
        );
}
