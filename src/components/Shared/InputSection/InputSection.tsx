interface InputSection {
        placeholder: string;
        className: string;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function InputSection(props: InputSection) {
        const isReadOnly = props.onChange == null;
        return (
                <>
                        <textarea value={props.value}
                                onChange={props.onChange} readOnly={isReadOnly} className={`focus:outline-none ${props.className}`} placeholder={props.placeholder}></textarea>
                </>
        );
}
