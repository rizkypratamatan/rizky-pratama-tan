import {MetadataRoute} from "next";


const sitemap = (): MetadataRoute.Sitemap => {
    const lastModified: Date = new Date('2025-10-23');

    return [
        {url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, lastModified: lastModified, priority: 1.0},
        {url: `${process.env.NEXT_PUBLIC_BASE_URL}/resume/`, lastModified: lastModified, priority: 0.9},
        {url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact/`, lastModified: lastModified, priority: 0.8}
    ];
};

export default sitemap;
