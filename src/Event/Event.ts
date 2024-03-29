export interface NavbarTransition {
  id: number;
  TagName: string;
  name: string;
}
export const NavbarTransition: NavbarTransition[] = [
  { id: 1, name: "Auto detect", TagName: "Auto" },
  { id: 2, name: "Thai", TagName: "Thai" },
  { id: 3, name: "French", TagName: "French" },
];
export const NavbarTranslated: NavbarTransition[] = [
  { id: 1, name: "Persian", TagName: "fa" },
  { id: 2, name: "English", TagName: "en" },
  { id: 3, name: "Spanish", TagName: "sp" },
];

export const TextareaTranslated: NavbarTransition[] = [
  { id: 1, name: "Persian", TagName: "fa" },
  { id: 2, name: "English", TagName: "en" },
  { id: 3, name: "Spanish", TagName: "sp" },
];
export const WriteLength: NavbarTransition[] = [
  { id: 1, name: "Auto", TagName: "Auto" },
  { id: 2, name: "Short", TagName: "Short" },
  { id: 3, name: "Medium", TagName: "Medium" },
  { id: 4, name: "Long", TagName: "Long" },
];
export const WriteFormat: NavbarTransition[] = [
  { id: 1, name: "Auto", TagName: "Auto" },
  { id: 2, name: "Email", TagName: "Email" },
  { id: 3, name: "Message", TagName: "Message" },
];
export const Languages: NavbarTransition[] = [
  { id: 1, name: "English", TagName: "en" },
  { id: 2, name: "Persian", TagName: "fa" },
  { id: 3, name: "Spanish", TagName: "sp" },
];
