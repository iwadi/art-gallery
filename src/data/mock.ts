// import axios from 'axios';

// export interface GalleryItem {
//   id: number;
//   image: string;
//   title: string;
//   date: string;
//   author?: string;
//   location?: string;
// }

// export interface GalleryResponse {
//   data: GalleryItem[];
//   totalCount: number;
// }

// export interface Author {
//   id: number;
//   name: string;
// }

// export interface Location {
//   id: number;
//   location: string;
// }

// interface RawGalleryItem {
//   id: number;
//   imageUrl?: string;
//   name?: string;
//   title?: string;
//   created?: string;
//   year?: number;
//   authorId?: number;
//   locationId?: number;
// }

// const BASE_API_URL = 'https://test-front.framework.team';

// const apiClient = axios.create({
//   baseURL: BASE_API_URL,
//   timeout: 10000,
// });

// // ==================
// // Helpers
// // ==================
// const mapRawToGalleryItem = (
//   item: RawGalleryItem,
//   authorsMap: Map<number, string>,
//   locationsMap: Map<number, string>
// ): GalleryItem => ({
//   id: item.id,
//   image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
//   title: item.name || item.title || 'No title',
//   date: item.created || item.year?.toString() || 'Unknown date',
//   author: item.authorId ? authorsMap.get(item.authorId) : undefined,
//   location: item.locationId ? locationsMap.get(item.locationId) : undefined,
// });

// // ==================
// // API Functions
// // ==================
// export const fetchAuthors = async (): Promise<Author[]> => {
//   try {
//     const { data } = await apiClient.get('/authors');
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch authors:', error);
//     return [];
//   }
// };

// export const fetchLocations = async (): Promise<Location[]> => {
//   try {
//     const { data } = await apiClient.get('/locations');
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch locations:', error);
//     return [];
//   }
// };

// // ==================
// // Filtering
// // ==================
// export const filterItemsClientSide = (items: GalleryItem[], searchTerm: string): GalleryItem[] => {
//   if (!searchTerm.trim()) return items;

//   const searchLower = searchTerm.toLowerCase().trim();
//   const searchParts = searchLower.split(/\s+/);

//   return items.filter(item => {
//     const fields = [
//       item.title?.toLowerCase() || '',
//       item.date || '',
//       item.id.toString(),
//       item.author?.toLowerCase() || '',
//       item.location?.toLowerCase() || '',
//     ];

//     return searchParts.every(part => fields.some(field => field.includes(part)));
//   });
// };

// // ==================
// // Main Gallery Loader
// // ==================
// export const fetchGalleryData = async (
//   page: number = 1,
//   limit: number = 6,
//   searchTerm: string = '',
//   useClientSideFiltering: boolean = false
// ): Promise<GalleryResponse> => {
//   try {
//     const [authors, locations] = await Promise.all([fetchAuthors(), fetchLocations()]);
//     const authorsMap = new Map(authors.map(a => [a.id, a.name]));
//     const locationsMap = new Map(locations.map(l => [l.id, l.location]));

//     // const { data, headers } = await apiClient.get('/paintings');
//     const { data } = await apiClient.get('/paintings');
//     const allDataRaw = data as RawGalleryItem[];
//     const allItems = allDataRaw.map(item => mapRawToGalleryItem(item, authorsMap, locationsMap));

//     const filtered = searchTerm ? filterItemsClientSide(allItems, searchTerm) : allItems;

//     const totalCount = filtered.length;

//     const startIndex = (page - 1) * limit;
//     const paginated = filtered.slice(startIndex, startIndex + limit);
//     return { data: paginated, totalCount };
//   } catch (error) {
//     console.error('Failed to fetch gallery data:', error);
//     return { data: [], totalCount: 0 };
//   }
// };

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

// ==================
// Helpers
// ==================
const mapRawToGalleryItem = (
  item: RawGalleryItem,
  authorsMap: Map<number, string>,
  locationsMap: Map<number, string>
): GalleryItem => ({
  id: item.id,
  image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
  title: item.name || item.title || 'No title',
  date: item.created || item.year?.toString() || 'Unknown date',
  author: item.authorId ? authorsMap.get(item.authorId) : undefined,
  location: item.locationId ? locationsMap.get(item.locationId) : undefined,
});

// ==================
// API Functions
// ==================
export const fetchAuthors = async (): Promise<Author[]> => {
  try {
    const { data } = await apiClient.get('/authors');
    return data;
  } catch (error) {
    console.error('Failed to fetch authors:', error);
    return [];
  }
};

export const fetchLocations = async (): Promise<Location[]> => {
  try {
    const { data } = await apiClient.get('/locations');
    return data;
  } catch (error) {
    console.error('Failed to fetch locations:', error);
    return [];
  }
};

// ==================
// Filtering
// ==================
export const filterItemsClientSide = (items: GalleryItem[], searchTerm: string): GalleryItem[] => {
  if (!searchTerm.trim()) return items;

  const searchLower = searchTerm.toLowerCase().trim();
  const searchParts = searchLower.split(/\s+/);

  return items.filter(item => {
    const fields = [
      item.title?.toLowerCase() || '',
      item.date || '',
      item.id.toString(),
      item.author?.toLowerCase() || '',
      item.location?.toLowerCase() || '',
    ];

    return searchParts.every(part => fields.some(field => field.includes(part)));
  });
};

// ==================
// Main Gallery Loader
// ==================
export const fetchGalleryData = async (
  page: number = 1,
  limit: number = 6,
  searchTerm: string = '',
  useClientSideFiltering: boolean = false
): Promise<GalleryResponse> => {
  try {
    const [authors, locations] = await Promise.all([fetchAuthors(), fetchLocations()]);
    const authorsMap = new Map(authors.map(a => [a.id, a.name]));
    const locationsMap = new Map(locations.map(l => [l.id, l.location]));

    const { data } = await apiClient.get('/paintings');
    const allDataRaw = data as RawGalleryItem[];
    const allItems = allDataRaw.map(item => mapRawToGalleryItem(item, authorsMap, locationsMap));

    let filteredItems = allItems;

    if (searchTerm) {
      if (useClientSideFiltering) {
        // Client-side filtering for complex queries
        filteredItems = filterItemsClientSide(allItems, searchTerm);
      } else {
        // Basic server/client filtering for simple queries
        filteredItems = allItems.filter(item => 
          item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.location?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }

    const totalCount = filteredItems.length;
    const startIndex = (page - 1) * limit;
    const paginated = filteredItems.slice(startIndex, startIndex + limit);
    
    return { data: paginated, totalCount };
  } catch (error) {
    console.error('Failed to fetch gallery data:', error);
    return { data: [], totalCount: 0 };
  }
};