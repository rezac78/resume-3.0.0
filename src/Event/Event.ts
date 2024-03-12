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
