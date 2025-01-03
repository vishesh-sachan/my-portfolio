export interface Blog {
    title: string;
    description: string;
    date: string;
    link?: string;
    isProjectDoc: boolean
}

export const blogs: Blog[] = [
    {
        title: "Outing Pass System",
        description: "An Out Pass genration system for Hostel students.",
        date: "03-01-2024",
        link: "https://amusing-sushi-28f.notion.site/Outing-Pass-System-8e7a5c6e2d564c66ac3345f38d2c0f5f",
        isProjectDoc: true
    },
];

// {
//     title: "",
//     description: "",
//     date: "",
//     link: "",
//     isProjectDoc: true
// },

// {
//     title: "",
//     description: "",
//     date: "",
//     link: "",
//     isProjectDoc: false
// },
