import { useTheme } from '../../Header/context/ThemeContext';
import { SearchInput } from './SearchInput';

interface Section1Props {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onClearSearch: () => void;
}

function Section_1({ searchValue, onSearchChange, onClearSearch }: Section1Props) {
  const { isDark } = useTheme();

  return (
    <section className="section_1">
      <div className="container">
        <div className="section_1__box_search-engine">
          <SearchInput
            value={searchValue}
            onChange={onSearchChange}
            onClear={onClearSearch}
            isDark={isDark}
          />
        </div>
      </div>
    </section>
  );
}

export default Section_1;