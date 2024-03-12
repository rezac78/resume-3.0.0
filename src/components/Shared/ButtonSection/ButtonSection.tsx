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
                                className={`flex items-center justify-center rounded-l-full px-4 py-2 text-sm rounded-full ${props.active === props.TagName ? 'text-white bg-gray-800' : 'text-black bg-gray-300'}`}
                        >
                                {props.children}
                        </button>
                </>
        );
}
