export interface Project {
    title: string;
    description: string;
    liveLink?: string;
    blogLink?: string;
}
  
export const projects: Project[] = [
{
    title: "Outing Pass System",
    description: "An Out Pass genration system for Hostel students."
},
{
    title: "BOOKMARKS",
    description: "A bookmark manager web app designed for the Arc browser users who lack this feature.",
    liveLink: "https://bookmarks-mocha.vercel.app/"
}
];