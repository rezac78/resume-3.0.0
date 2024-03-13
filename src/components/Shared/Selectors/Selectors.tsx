import { Languages } from "../../../Event/Event"
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface WriteOptions {
        setSelectLan: (language: string) => void;
}
export default function Selectors(props: WriteOptions) {
        const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
                props.setSelectLan(event.target.value);
        };
        return (
                <>
                        <h2 className="text-lg font-semibold text-gray-600 my-4">Output Language</h2>
                        <div className="w-32 sm:w-40">
                                <div className="mt-1 relative">
                                        <select
                                                className="block appearance-none w-full px-3 py-2 border border-gray-300 bg-gray-200 text-black rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                defaultValue="English"
                                                onChange={handleLanguageChange}
                                        >
                                                {Languages.map((e) => (<option key={e.name} className="rounded-full" value={e.name}>{e.name}</option>))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <ChevronDownIcon className={`h-4 w-4`} />
                                        </div>
                                </div>
                        </div>

                </>
        );
}
