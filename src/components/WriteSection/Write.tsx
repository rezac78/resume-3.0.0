import InputSection from "../Shared/InputSection/InputSection";
import WriteOptions from "../WriteOptions/WriteOptions";
export default function Write() {
        return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-10">
                        <div className="p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Write</h2>
                                <div className="mb-4">
                                        <div className="inline-flex rounded-full bg-gray-300 px-1 py-1 mb-2">
                                                <button
                                                        className={`flex items-center justify-center rounded-l-full px-4 py-2 text-sm rounded-full text-white bg-gray-800`}
                                                >
                                                        Compose
                                                </button>
                                        </div>
                                        <h2 className="text-lg font-semibold text-gray-600 mb-4">Write About</h2>
                                        <InputSection className="w-full p-4 h-40 text-sm text-black border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Tell me what to write for you. Hit Ctrl+Enter to generate." /></div>
                                <WriteOptions />
                        </div>
                        <div className="flex justify-center mb-4">
                                <button className="p-3 w-9/12 rounded-full bg-violet-500 text-white transition">
                                        Regenerate Crtl
                                </button>
                        </div>
                </div>
        );
}
