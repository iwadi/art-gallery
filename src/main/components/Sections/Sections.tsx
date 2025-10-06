// // import { useState, useEffect, useCallback } from 'react';
// // import Section_1 from './Section_1/Section_1';
// // import Section_2 from './Section_2/Section_2';
// // import Section_3 from './Section_3/Section_3';
// // import { type GalleryItem, fetchGalleryData } from '../../../data/mock';

// // const ITEMS_PER_PAGE = 6;

// // function Sections() {
// //   const [currentItems, setCurrentItems] = useState<GalleryItem[]>([]);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [totalCount, setTotalCount] = useState(0);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState<string | null>(null);

// //   const loadData = useCallback(async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const useClientFilter = searchTerm.includes(' ') || /\d/.test(searchTerm);
// //       const { data, totalCount } = await fetchGalleryData(
// //         currentPage,
// //         ITEMS_PER_PAGE,
// //         searchTerm,
// //         useClientFilter
// //       );
// //       setCurrentItems(data);
// //       setTotalCount(totalCount);
// //     } catch (error) {
// //       console.error('Error loading data:', error);
// //       setError('Failed to load data. Please try again.');
// //       setCurrentItems([]);
// //       setTotalCount(0);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [currentPage, searchTerm]);

// //   useEffect(() => {
// //     loadData();
// //   }, [loadData]);

// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [searchTerm]);

// //   const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

// //   const handlePageChange = (page: number) => {
// //     setCurrentPage(page);
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   const handleSearchChange = (value: string) => {
// //     setSearchTerm(value);
// //   };

// //   const handleClearSearch = () => {
// //     setSearchTerm('');
// //   };

// //   return (
// //     <>
// //       <Section_1
// //         searchValue={searchTerm}
// //         onSearchChange={handleSearchChange}
// //         onClearSearch={handleClearSearch}
// //       />
// //       {error && <div className="error-message">{error}</div>}
// //       {loading && <div className="loading">Loading...</div>}
// //       {!loading && !error && currentItems.length === 0 && (
// //         <div className="no-results">
// //           {searchTerm ? `No paintings found for "${searchTerm}"` : 'No paintings available'}
// //         </div>
// //       )}
// //       {!loading && !error && currentItems.length > 0 && (
// //         <>
// //           <Section_2 data={currentItems} />
// //           {totalPages > 0 && (
// //             <Section_3
// //               currentPage={currentPage}
// //               totalPages={totalPages}
// //               onPageChange={handlePageChange}
// //             />
// //           )}
// //         </>
// //       )}
// //     </>
// //   );
// // }

// // export default Sections;


// import { useState, useEffect, useCallback } from 'react';
// import Section_1 from './Section_1/Section_1';
// import Section_2 from './Section_2/Section_2';
// import Section_3 from './Section_3/Section_3';
// import { type GalleryItem, fetchGalleryData } from '../../../data/mock';

// const ITEMS_PER_PAGE = 6;

// function Sections() {
//   const [currentItems, setCurrentItems] = useState<GalleryItem[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [totalCount, setTotalCount] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const loadData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const useClientFilter = searchTerm.includes(' ') || /\d/.test(searchTerm);
//       const { data, totalCount } = await fetchGalleryData(
//         currentPage,
//         ITEMS_PER_PAGE,
//         searchTerm,
//         useClientFilter
//       );
//       setCurrentItems(data);
//       setTotalCount(totalCount);
//     } catch (error) {
//       console.error('Error loading data:', error);
//       setError('Failed to load data. Please try again.');
//       setCurrentItems([]);
//       setTotalCount(0);
//     } finally {
//       setLoading(false);
//     }
//   }, [currentPage, searchTerm]);

//   useEffect(() => {
//     loadData();
//   }, [loadData]);

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm]);

//   const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleSearchChange = (value: string) => {
//     setSearchTerm(value);
//   };

//   const handleClearSearch = () => {
//     setSearchTerm('');
//   };

//   return (
//     <>
//       <Section_1
//         searchValue={searchTerm}
//         onSearchChange={handleSearchChange}
//         onClearSearch={handleClearSearch}
//       />
//       {error && <div className="error-message">{error}</div>}
//       {loading && <div className="loading">Loading...</div>}
//       {!loading && !error && currentItems.length === 0 && (
//         <div className="no-results">
//           {searchTerm ? `No matches for "${searchTerm}"` : 'No paintings available'}
//           <p className="no-result two">Please try again with a different spelling or keywords.</p>
//         </div>
//       )}
//       {!loading && !error && currentItems.length > 0 && (
//         <>
//           <Section_2 data={currentItems} />
//           {totalPages > 1 && (
//             <Section_3
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           )}
//         </>
//       )}
//     </>
//   );
// }

// export default Sections;


import { useState, useEffect, useCallback } from 'react';
import Section_1 from './Section_1/Section_1';
import Section_2 from './Section_2/Section_2';
import Section_3 from './Section_3/Section_3';
import { type GalleryItem, fetchGalleryData } from '../../../data/mock';

const ITEMS_PER_PAGE = 6;

function Sections() {
  const [currentItems, setCurrentItems] = useState<GalleryItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const useClientFilter = searchTerm.includes(' ') || /\d/.test(searchTerm);
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

  useEffect(() => {
    loadData();
  }, [loadData]);

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
      <div className="container">
        {error && <div className="error-message">{error}</div>}
        {loading && <div className="loading">Loading...</div>}
        {!loading && !error && currentItems.length === 0 && (
          <div className="no-results">
            {/* {searchTerm ? (
              <>
              <p className="no-result one">
                No matches for{" "}<span className="search-term">{searchTerm}</span>
              </p>
              </>
            ) : (
              <>
              <p className="no-result one">
                No paintings available{" "}<span className="search-term">{searchTerm}</span>
              </p>
              </>
            )} */}
            {searchTerm && (
              <p className="no-result one">
                No matches for <span className="search-term">{searchTerm}</span>
              </p>
            )}
            <p className="no-result two">Please try again with a different spelling or keywords.</p>
          </div>
        )}
      </div>
      {!loading && !error && currentItems.length > 0 && (
        <>
          <Section_2 data={currentItems} />
          {totalPages > 1 && (
            <Section_3
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
}

export default Sections;