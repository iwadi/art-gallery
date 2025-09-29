import { useState, useEffect, useCallback } from 'react';
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
    const [error, setError] = useState<string | null>(null);

    // Определяем, использовать ли клиентскую фильтрацию
    const shouldUseClientSideFiltering = (term: string): boolean => {
        // Используем клиентскую фильтрацию для сложных запросов
        const complexQueryPatterns = [
            /\d+/, // содержит цифры
            /^[a-zA-Z]\s*\d+/, // буква + цифры (например "t 2")
            /^\d+\s*[a-zA-Z]/, // цифры + буква (например "2 r")
            /\s+/, // содержит пробелы (множественные слова)
        ];
        
        return complexQueryPatterns.some(pattern => pattern.test(term));
    };

    // Функция загрузки данных
    const loadData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const useClientFilter = shouldUseClientSideFiltering(searchTerm);
            
            const { data, totalCount } = await fetchGalleryData(
                currentPage, 
                ITEMS_PER_PAGE, 
                searchTerm,
                useClientFilter
            );
            setCurrentItems(data);
            setTotalCount(totalCount);
        } catch (error) {
            console.error('Error loading data:', error);
            setError('Failed to load data. Please try again.');
            setCurrentItems([]);
            setTotalCount(0);
        } finally {
            setLoading(false);
        }
    }, [currentPage, searchTerm]);

    // Загрузка данных при изменении страницы или поискового запроса
    useEffect(() => {
        loadData();
    }, [loadData]);

    // Сброс на первую страницу при новом поиске
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    return (
        <>
            <Section_1
                searchValue={searchTerm}
                onSearchChange={handleSearchChange}
                onClearSearch={handleClearSearch}
            />
            
            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}
            
            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <Section_2 data={currentItems} />
            )}
            
            {totalPages > 0 && !loading && currentItems.length > 0 && (
                <Section_3
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
            
            {!loading && currentItems.length === 0 && !error && (
                <div className="no-results">
                    {searchTerm ? `No paintings found for "${searchTerm}"` : 'No paintings available'}
                </div>
            )}
        </>
    )
}

export default Sections;