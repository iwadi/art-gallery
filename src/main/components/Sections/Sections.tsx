import { useState, useEffect } from 'react';
import Section_1 from "./Section_1/Section_1";
import Section_2 from "./Section_2/Section_2";
import Section_3 from "./Section_3/Section_3";
import { type GalleryItem, fetchGalleryData } from '../../../data/mock';
// import {  GalleryItem, fetchGalleryData } from '../../../data/mock';

const ITEMS_PER_PAGE = 6;

function Sections() {
    const [data, setData] = useState<GalleryItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadData = async () => {
            const galleryData = await fetchGalleryData();
            console.log('Loaded data:', galleryData);
            setData(galleryData);
        };
        loadData();
    }, []);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    console.log('Current page:', currentPage);
    console.log('Total pages:', totalPages);
    console.log('Current items:', currentItems);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Section_1 />
            <Section_2 data={currentItems} />
            <Section_3 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />
        </>
    )
}

export default Sections;