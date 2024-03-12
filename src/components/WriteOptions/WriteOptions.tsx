import { useState } from "react";
import { WriteLength, WriteFormat } from "../../Event/Event"
import Selectors from "../Shared/Selectors/Selectors";
import { WriteText } from "@/services/Service";
interface WriteOptions {
        text: string;
        setPreview: (value: string) => void;
}
export default function WriteOptions(props: WriteOptions) {
        const [active, setActive] = useState('Auto');
        const [activeFormat, setActiveFormat] = useState('Auto');
        const [SelectLan, setSelectLan] = useState('English');
        const handleClickLength = (section: string) => {
                setActive(section);
        };
        const handleClickFormat = (section: string) => {
                setActiveFormat(section);
        };
        const handleSendForm = async () => {
                const response = await WriteText(props.text, active, activeFormat, SelectLan);
                props.setPreview(response?.message.content)
        };
        return (
                <>
                        <h2 className="text-lg font-semibold text-gray-600 mb-4">Length</h2>
                        <div className="inline-flex rounded-full shadow-sm" role="group">
                                {WriteLength.map((e) => (
                                        <button
                                                onClick={() => handleClickLength(e.TagName)}
                                                className={`flex items-center justify-center rounded-lg px-3 py-2 mx-1 text-sm rounded-full ${active === e.TagName ? 'text-white bg-violet-300' : 'text-black bg-gray-300'}`}
                                        >
                                                {e.name}
                                        </button>
                                ))}
                        </div>
                        <h2 className="text-lg font-semibold text-gray-600 my-4">Format</h2>
                        <div className="inline-flex rounded-full shadow-sm" role="group">
                                {WriteFormat.map((e) => (
                                        <button
                                                onClick={() => handleClickFormat(e.TagName)}
                                                className={`flex items-center justify-center rounded-lg px-3 py-2 mx-1 text-sm rounded-full ${activeFormat === e.TagName ? 'text-white bg-violet-300' : 'text-black bg-gray-300'}`}
                                        >
                                                {e.name}
                                        </button>
                                ))}
                        </div>
                        <Selectors setSelectLan={setSelectLan} />
                        <div className="flex justify-center mt-4">
                                <button onClick={() => handleSendForm()} disabled={!props.text.trim()} className={`p-3 w-9/12 rounded-full transition ${props.text.trim() ? 'bg-violet-500 hover:bg-violet-600' : 'bg-violet-300'
                                        } text-white`}>
                                        Regenerate Crtl
                                </button>
                        </div>
                </>
        );
}
