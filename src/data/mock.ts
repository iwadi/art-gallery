export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  date: string;
  // author?: string;
}

export interface GalleryResponse {
  data: GalleryItem[];
  totalCount: number;
}

const BASE_API_URL = 'https://test-front.framework.team';

// Функция для клиентской фильтрации
const filterItemsClientSide = (items: GalleryItem[], searchTerm: string): GalleryItem[] => {
  if (!searchTerm.trim()) return items;

  const searchLower = searchTerm.toLowerCase().trim();
  
  return items.filter(item => {
    // Ищем в разных полях
    const searchFields = [
      item.title?.toLowerCase() || '',
      // item.author?.toLowerCase() || '',
      item.date?.toString() || '',
      item.id?.toString() || ''
    ];

    // Разбиваем поисковый запрос на части
    const searchParts = searchLower.split(/\s+/);
    
    // Проверяем, что все части запроса найдены в каких-либо полях
    return searchParts.every(part => {
      if (!part) return true;
      
      // Ищем частичное совпадение в любом из полей
      return searchFields.some(field => field.includes(part));
    });
  });
};

export const fetchGalleryData = async (
  page: number = 1,
  limit: number = 6,
  searchTerm: string = '',
  useClientSideFiltering: boolean = false
): Promise<GalleryResponse> => {
  try {
    const params = new URLSearchParams({
      _page: page.toString(),
      _limit: limit.toString(),
    });

    let allData: GalleryItem[] = [];
    let totalCount = 0;

    if (useClientSideFiltering && searchTerm.trim()) {
      // Загружаем все данные для клиентской фильтрации
      const allResponse = await fetch(`${BASE_API_URL}/paintings`);
      if (!allResponse.ok) {
        throw new Error(`HTTP error! status: ${allResponse.status}`);
      }
      
      const allDataRaw = await allResponse.json();
      allData = allDataRaw.map((item: any) => ({
        id: item.id,
        image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
        title: item.name || item.title || 'No title',
        date: item.created || item.year?.toString() || 'Unknown date',
        // author: item.authorId?.name || item.authorName || 'Unknown Artist'
      }));

      // Применяем клиентскую фильтрацию
      const filteredData = filterItemsClientSide(allData, searchTerm);
      totalCount = filteredData.length;
      
      // Применяем пагинацию к отфильтрованным данным
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      return { data: paginatedData, totalCount };
    } else {
      // Стандартный API поиск
      if (searchTerm.trim()) {
        params.append('q', searchTerm.trim());
      }

      const response = await fetch(`${BASE_API_URL}/paintings?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      totalCount = parseInt(response.headers.get('X-Total-Count') || '0', 10);

      const galleryItems: GalleryItem[] = data.map((item: any) => ({
        id: item.id,
        image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
        title: item.name || item.title || 'No title',
        date: item.created || item.year?.toString() || 'Unknown date',
        // author: item.authorId?.name || item.authorName || 'Unknown Artist'
      }));

      return { data: galleryItems, totalCount };
    }
  } catch (error) {
    console.error('Failed to fetch data from API:', error);
    return { data: [], totalCount: 0 };
  }
};