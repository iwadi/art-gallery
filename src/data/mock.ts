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

export interface Author {
  id: number;
  name: string;
}

export interface Location {
  id: number;
  location: string;
}

interface RawGalleryItem {
  id: number;
  imageUrl?: string;
  name?: string;
  title?: string;
  created?: string;
  year?: number;
  authorId?: number;
  locationId?: number;
}

const BASE_API_URL = 'https://test-front.framework.team';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10000,
});

// Loads a list of all authors from the API
export const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const response = await apiClient.get('/authors');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch authors:', error);
    return [];
  }
};

// Loads a list of all locations from the API
export const fetchLocations = async (): Promise<Location[]> => {
  try {
    const response = await apiClient.get('/locations');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    return [];
  }
};

// Filters gallery items on the client by a search query
const filterItemsClientSide = (items: GalleryItem[], searchTerm: string): GalleryItem[] => {
  if (!searchTerm.trim()) return items;

  const searchLower = searchTerm.toLowerCase().trim();

  const searchParts = searchLower.split(/\s+/);

  return items.filter(item => {
    const searchFields = [
      item.title?.toLowerCase() || '',
      item.date?.toString() || '',
      item.id?.toString() || '',
      item.author?.toLowerCase() || '',
      item.location?.toLowerCase() || '',
    ];

    return searchParts.every(part => {
      if (!part) return true;
      return searchFields.some(field => field.includes(part));
    });
  });
};

// Basic function for loading gallery data with pagination and filtering
export const fetchGalleryData = async (
  page: number = 1,
  limit: number = 6,
  searchTerm: string = '',
  useClientSideFiltering: boolean = false
): Promise<GalleryResponse> => {
  try {
    const [authors, locations] = await Promise.all([
      fetchAuthors(),
      fetchLocations()
    ]);

    const authorsMap = new Map(authors.map(author => [author.id, author.name]));
    const locationsMap = new Map(locations.map(location => [location.id, location.location]));

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
        author: item.authorId ? authorsMap.get(item.authorId) : undefined,
        location: item.locationId ? locationsMap.get(item.locationId) : undefined,
      }));

      const filteredData = filterItemsClientSide(allData, searchTerm);
      const totalCount = filteredData.length;

      const maxPage = Math.ceil(totalCount / limit);
      const currentPage = Math.min(page, Math.max(1, maxPage));
      
      const startIndex = (currentPage - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = filteredData.slice(startIndex, endIndex);

      return { 
        data: paginatedData, 
        totalCount 
      };
    } else {
      if (searchTerm.trim()) {
        const response = await apiClient.get('/paintings');
        const allDataRaw = response.data as RawGalleryItem[];

        const allData: GalleryItem[] = allDataRaw.map((item: RawGalleryItem) => ({
          id: item.id,
          image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
          title: item.name || item.title || 'No title',
          date: item.created || item.year?.toString() || 'Unknown date',
          author: item.authorId ? authorsMap.get(item.authorId) : undefined,
          location: item.locationId ? locationsMap.get(item.locationId) : undefined,
        }));

        const filteredData = filterItemsClientSide(allData, searchTerm);
        const totalCount = filteredData.length;

        const maxPage = Math.ceil(totalCount / limit);
        const currentPage = Math.min(page, Math.max(1, maxPage));
        
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedData = filteredData.slice(startIndex, endIndex);

        return { 
          data: paginatedData, 
          totalCount 
        };
      } else {
        const response = await apiClient.get('/paintings', { params });
        const responseData = response.data as RawGalleryItem[];

        const galleryItems: GalleryItem[] = responseData.map((item: RawGalleryItem) => ({
          id: item.id,
          image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
          title: item.name || item.title || 'No title',
          date: item.created || item.year?.toString() || 'Unknown date',
          author: item.authorId ? authorsMap.get(item.authorId) : undefined,
          location: item.locationId ? locationsMap.get(item.locationId) : undefined,
        }));

        const totalCount = parseInt(response.headers['x-total-count'] || '0', 10);

        const maxPage = Math.ceil(totalCount / limit);
        const currentPage = Math.min(page, Math.max(1, maxPage));

        return {
          data: galleryItems,
          totalCount,
        };
      }
    }
  } catch (error) {
    console.error('Failed to fetch data from API:', error);
    return { data: [], totalCount: 0 };
  }
};