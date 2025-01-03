export interface Project {
    title: string;
    description: string;
    liveLink?: string;
    blogLink?: string;
}
  
export const projects: Project[] = [
{
    title: "Outing Pass System",
    description: "An Out Pass genration system for Hostel students.",
    liveLink: "https://outing-pass-system.vercel.app/",
    blogLink: "https://amusing-sushi-28f.notion.site/Outing-Pass-System-8e7a5c6e2d564c66ac3345f38d2c0f5f"
},
{
    title: "BOOKMARKS",
    description: "A bookmark manager web app designed for the Arc browser users who lack this feature.",
    liveLink: "https://bookmarks-mocha.vercel.app/"
}
];
