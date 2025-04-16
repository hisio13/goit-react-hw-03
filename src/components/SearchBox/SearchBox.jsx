import css from './SearchBox.module.css';

export default function SearchBox({ filter, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => onFilter(e.target.value)}
        />
      </label>
    </div>
  );
}
