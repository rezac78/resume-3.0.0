import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavbarTransition, NavbarTranslated } from "../../Event/Event"
import ButtonSection from "../Shared/ButtonSection/ButtonSection";
interface NavTranslate {
        Type: 'Transition' | 'translated';
}
export default function NavTranslate(props: NavTranslate) {
        const [active, setActive] = useState('Auto');
        const [activeLan, setActiveLan] = useState('fa');
        const handleClick = (section: string) => {
                setActive(section);
                setActiveLan(section);
        };
        return (
                <>
                        <div className="inline-flex rounded-full shadow-sm bg-gray-300 px-1 py-1" role="group">
                                {props.Type === 'Transition' ? NavbarTransition.map((e) => (
                                        <ButtonSection handleClick={handleClick} TagName={e.TagName} active={active} key={e.TagName} >{e.name}</ButtonSection>
                                )) : NavbarTranslated.map((e) => (
                                        <ButtonSection handleClick={handleClick} TagName={e.TagName} active={activeLan} key={e.TagName} >{e.name}</ButtonSection>
                                ))}
                        </div>
                        <button className="flex items-center justify-center px-4 py-2  rounded-full text-black">
                                <ChevronDownIcon className="h-5 w-5" />
                        </button>
                </>
        );
}
