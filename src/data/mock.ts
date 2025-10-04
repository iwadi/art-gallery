import axios from 'axios';

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  date: string;
  author?: string;
  location?: string;
}

export interface GalleryResponse {
  data: GalleryItem[];
  totalCount: number;
}

interface RawGalleryItem {
  id: number;
  imageUrl?: string;
  name?: string;
  title?: string;
  created?: string;
  year?: number;
  author?: string;
  location?: string;
}

const BASE_API_URL = 'https://test-front.framework.team';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

const filterItemsClientSide = (items: GalleryItem[], searchTerm: string): GalleryItem[] => {
  if (!searchTerm.trim()) return items;

  const searchLower = searchTerm.toLowerCase().trim();

  return items.filter(item => {
    const searchFields = [
      item.title?.toLowerCase() || '',
      item.date?.toString() || '',
      item.id?.toString() || '',
      item.author?.toLowerCase() || '',
      item.location?.toLowerCase() || '',
    ];

    const searchParts = searchLower.split(/\s+/);

    return searchParts.every(part => {
      if (!part) return true;
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
    const params: Record<string, unknown> = {
      _page: page,
      _limit: limit,
    };

    if (useClientSideFiltering) {
      const response = await apiClient.get('/paintings');
      const allDataRaw = response.data as RawGalleryItem[];

      const allData: GalleryItem[] = allDataRaw.map((item: RawGalleryItem) => ({
        id: item.id,
        image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
        title: item.name || item.title || 'No title',
        date: item.created || item.year?.toString() || 'Unknown date',
        author: item.author,
        location: item.location,
      }));

      const filteredData = filterItemsClientSide(allData, searchTerm);
      const totalCount = filteredData.length;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      return { data: paginatedData, totalCount };
    } else {
      if (searchTerm.trim()) {
        params.q = searchTerm.trim();
      }

      const response = await apiClient.get('/paintings', { params });

      const responseData = response.data as RawGalleryItem[];

      const galleryItems: GalleryItem[] = responseData.map((item: RawGalleryItem) => ({
        id: item.id,
        image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
        title: item.name || item.title || 'No title',
        date: item.created || item.year?.toString() || 'Unknown date',
        author: item.author,
        location: item.location,
      }));

      const totalCount = parseInt(response.headers['x-total-count'] || '0', 10);

      return {
        data: galleryItems,
        totalCount,
      };
    }
  } catch (error) {
    console.error('Failed to fetch data from API:', error);
    return { data: [], totalCount: 0 };
  }
};