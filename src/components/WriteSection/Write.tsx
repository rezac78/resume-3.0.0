export default function Write() {
        return (
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-10">
                        <div className="p-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Write</h2>
                                <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                                <button className="px-4 py-2 rounded leading-none text-sm text-gray-700 border border-gray-300">Auto detect</button>
                                                <button className="px-4 py-2 rounded leading-none text-sm text-gray-700 border border-gray-300">Thai</button>
                                                <button className="px-4 py-2 rounded leading-none text-sm text-gray-700 border border-gray-300">French</button>
                                        </div>
                                        <textarea className="w-full p-4 text-sm border-2 border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter text"></textarea>
                                </div>
                                <div className="flex justify-end mb-4">
                                        <button className="px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">Translate</button>
                                </div>
                        </div>
                        <div className="bg-gray-50 p-6">
                                <div className="mb-4">
                                        <div className="flex justify-between mb-2">
                                                <button className="px-4 py-2 rounded leading-none text-sm text-gray-700 border border-gray-300">Persian</button>
                                                <button className="px-4 py-2 rounded leading-none text-sm text-gray-700 border border-gray-300">English</button>
                                                <button className="px-4 py-2 rounded leading-none text-sm text-gray-700 border border-gray-300">Spanish</button>
                                        </div>
                                        <div className="p-4 text-sm border-2 border-gray-300 rounded-lg bg-white">
                                                <p className="text-gray-700">Write</p>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
