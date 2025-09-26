export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  date: string;
}

// const BASE_API_URL = 'test-front.framework.team/';
const BASE_API_URL = 'https://test-front.framework.team';

const staticMockData: GalleryItem[] = [
  { id: 1, image: 'src/photos/gallery/image 2.jpg', title: 'Cascate di Tivoli', date: '1761' },
].map(item => ({
  ...item,
  image: `src/photos/gallery/${item.image}`
}));

export const fetchGalleryData = async (): Promise<GalleryItem[]> => {
  try {
    const response = await fetch(`${BASE_API_URL}/paintings`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    console.log('API Response:', data);

    return data.map((item: any) => ({
      id: item.id,
      image: item.imageUrl ? `${BASE_API_URL}${item.imageUrl}` : '',
      title: item.title || item.name || 'No title',
      date: item.created?.toString() || item.date || 'Unknown date',
    }));
  } catch (error) {
    console.error('Failed to fetch data from API, using fallback data:', error);
    return staticMockData;
  }
};