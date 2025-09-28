export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  date: string;
}

export interface GalleryResponse {
  data: GalleryItem[];
  totalCount: number;
}

const BASE_API_URL = 'https://test-front.framework.team';

const staticMockData: GalleryItem[] = [
  { id: 1, image: 'image 2.jpg', title: 'Cascate di Tivoli', date: '1761' },
].map(item => ({
  ...item,
  image: `src/photos/gallery/${item.image}`
}));

export const fetchGalleryData = async (
  page: number = 1,
  limit: number = 6,
  searchTerm: string = ''
): Promise<GalleryResponse> => {
  try {
    const params = new URLSearchParams({
      _page: page.toString(),
      _limit: limit.toString(),
    });

    if (searchTerm.trim()) {
      params.append('q', searchTerm.trim());
    }

    const response = await fetch(`${BASE_API_URL}/paintings?${params}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const totalCount = parseInt(response.headers.get('X-Total-Count') || '0', 10);

    const galleryItems: GalleryItem[] = data.map((item: any) => ({
      id: item.id,
      image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
      title: item.title || 'No title',
      date: item.year?.toString() || 'Unknown date',
    }));

    return { data: galleryItems, totalCount };
  } catch (error) {
    console.error('Failed to fetch data from API, using fallback data:', error);
    const filteredData = searchTerm 
      ? staticMockData.filter(item => 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : staticMockData;
    
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);
    
    return { data: paginatedData, totalCount: filteredData.length };
  }
};