interface InputSection {
        placeholder: string;
        className: string;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function InputSection(props: InputSection) {
        return (
                <>
                        <textarea value={props.value}
                                onChange={props.onChange} className={props.className} placeholder={props.placeholder}></textarea>
                </>
        );
}
