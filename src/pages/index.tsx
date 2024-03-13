import Navigation from "@/components/Navigation/Navigation";
import Translate from "@/components/TranslateSection/Translate";
import Write from "@/components/WriteSection/Write";
import { useState } from "react";

export default function Home() {
        const [activeSection, setActiveSection] = useState('translate');
        return (
                <main className="w-full h-screen px-1 sm:px-8 flex justify-center items-start">
                        <div className="mx-auto rounded-lg shadow-lg overflow-hidden my-10 flex">
                                <div className="flex w-full bg-white">
                                        <div className="flex flex-col w-10/12">
                                                {activeSection === 'translate' && <Translate />}
                                                {activeSection === 'write' && <Write />}
                                        </div>
                                        <Navigation setActiveSection={setActiveSection} />
                                </div>
                        </div>
                </main>
        );
}
