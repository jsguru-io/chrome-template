export interface WallpapaerModel {
    author: string;
    link: string;
}

const Wallpapaears: WallpapaerModel[] = [

    {
        author: "Aditya Wardhana",
        link: chrome.runtime.getURL("assets/adita.jpeg"),
    },
    {
        author: "Thomas Tucker",
        link: chrome.runtime.getURL("assets/tomas.jpeg"),
    },
    {
        author: "Karsten Winegeart",
        link: chrome.runtime.getURL("assets/karsten.jpeg"),
    },
    {
        author: "Boxed Water",
        link: chrome.runtime.getURL("assets/boxed_water.jpeg"),
    },
    {
        author: "Ty Koh",
        link: chrome.runtime.getURL("assets/ty-koh1.jpeg"),
    },
];

export {Wallpapaears};
