import { useState, useEffect } from 'react';
import Section_1 from "./Section_1/Section_1";
import Section_2 from "./Section_2/Section_2";
import Section_3 from "./Section_3/Section_3";
import { type GalleryItem, fetchGalleryData } from '../../../data/mock';

const ITEMS_PER_PAGE = 6;

function Sections() {
    const [currentItems, setCurrentItems] = useState<GalleryItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const { data, totalCount } = await fetchGalleryData(currentPage, ITEMS_PER_PAGE, searchTerm);
                setCurrentItems(data);
                setTotalCount(totalCount);
            } catch (error) {
                console.error('Error loading data:', error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [currentPage, searchTerm]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
        setCurrentPage(1);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setCurrentPage(1);
    };

    return (
        <>
            <Section_1
                searchValue={searchTerm}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
            />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Section_2 data={currentItems} />
            )}
            {totalPages > 0 && (
                <Section_3
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    )
}

export default Sections;