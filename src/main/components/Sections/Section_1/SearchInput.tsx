import glassDark from '../../../../photos/svg/glass-dark.svg';
import glassLight from '../../../../photos/svg/glass-light.svg';
import deleteDark from '../../../../photos/svg/delete-dark.svg';
import deleteLight from '../../../../photos/svg/delete-light.svg';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  isDark: boolean;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onClear,
  isDark,
  placeholder="Painting title",
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    onClear();
  };

  return (
    <label className="section_1__search-engine">
      <div className="search-section">
        <button className="label__button search" type="button" aria-label="Search">
          <img src={isDark ? glassLight : glassDark} alt="Search icon" />
        </button>
        <input
          className="section_1__input"
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          aria-label="Search paintings"
        />
      </div>
      {value && (
        <button
          className="label__button delete"
          onClick={handleClear}
          aria-label="Clear search"
          type="button"
        >
          <img src={isDark ? deleteLight : deleteDark} alt="Clear search" />
        </button>
      )}
    </label>
  );
};