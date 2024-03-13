interface ButtonSection {
        handleClick: any;
        active: string;
        children?: React.ReactNode;
        TagName: string;
}
export default function ButtonSection(props: ButtonSection) {
        return (
                <>
                        <button
                                onClick={() => props.handleClick(props.TagName)}
                                className={`flex items-center justify-center rounded-l-full px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-full ${props.active === props.TagName ? 'text-white bg-gray-800' : 'text-black bg-gray-300'}`}
                        >
                                {props.children}
                        </button>
                </>
        );
}
