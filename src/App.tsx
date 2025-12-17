import {
  CategoryFilter,
  PriceFilter,
  StatusFilter,
} from "./components/Filters";
import  {SearchInput } from "./components/SearchInput";
import { VirtualizedList } from "./components/VirtualizedList";
import { useItemsController } from "./hooks/useItemsController";
import './App.css'

function App() {
   const { items, rawQuery, setRawQuery, filters, updateFilters } =
     useItemsController();

  return (
    <div className="app">
  
      <div className="search-bar">
        <SearchInput value={rawQuery} onChange={setRawQuery} />
        <button className="search-button" disabled>Search</button>
      </div>

      <div className="content">
     
        <aside className="filters">
          <CategoryFilter
            value={filters.category}
            onChange={(category) => updateFilters({ category })}
          />

          <PriceFilter
            min={filters.minPrice}
            max={filters.maxPrice}
            onChange={(minPrice, maxPrice) =>
              updateFilters({ minPrice, maxPrice })
            }
          />

          <StatusFilter
            value={filters.status}
            onChange={(status) => updateFilters({ status })}
          />
        </aside>

        
        <section className="results">
          <h3>Results</h3>
          <VirtualizedList items={items} />
        </section>
      </div>
    </div>
  );
}

export default App;
