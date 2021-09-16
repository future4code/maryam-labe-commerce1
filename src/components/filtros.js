
export function Filters(props) {
   return <FiltersContainer>
      <input
         placeholder="Pesquisa"
         value={props.query}
         onChange={props.updateQuery}
      />

      <input
         type="number"
         placeholder="Preço mínimo"
         value={props.minPrice}
         onChange={props.updateMinPrice}
      />

      <input
         type="number"
         placeholder="Preço máximo"
         value={props.maxPrice}
         onChange={props.updateMaxPrice}
      />

      <select
         name="order"
         value={props.order}
         onChange={props.updateOrder}
      >
         <option value={1}>Crescente</option>
         <option value={-1}>Decrescente</option>

      </select>

   </FiltersContainer>

}