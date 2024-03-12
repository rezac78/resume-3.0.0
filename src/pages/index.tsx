import Navigation from "@/components/Navigation/Navigation";
import Translate from "@/components/TranslateSection/Translate";
import Write from "@/components/WriteSection/Write";
import { useState } from "react";

export default function Home() {
        const [activeSection, setActiveSection] = useState('translate');
        return (
                <main className="bg-gray-400 w-full h-screen p-8 flex m-auto">
                        <div className="flex justify-center w-full">
                                <div className="w-7/12 flex flex-col">
                                        {activeSection === 'translate' && <Translate />}
                                        {activeSection === 'write' && <Write />}
                                </div>
                                <div className="w-1/12">
                                        <Navigation setActiveSection={setActiveSection} />
                                </div>
                        </div>
                </main>
        );
}
