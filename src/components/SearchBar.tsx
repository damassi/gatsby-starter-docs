import React, { useState } from "react"
import { Link } from "gatsby"

const win: any = window

const search = query => {
  const { index, store } = win.__LUNR__ && win.__LUNR__.en
  if (query) {
    const results = index.search(query).map(({ ref }) => store[ref])
    return results
  } else {
    return []
  }
}

export const SearchBar = _props => {
  const [state, setState] = useState({
    query: "",
    results: [],
    isActive: false,
  })

  function handleSearch(event) {
    const query = event.target.value
    const results = search(query)
    setState(() => ({
      query,
      results,
      isActive: true,
    }))
  }

  const count = state.results.length
  const limit = 10

  return (
    <div>
      <input type="search" value={state.query} onChange={handleSearch} />

      {state.isActive && (
        <ul>
          {state.results.slice(0, limit).map((result, index) => {
            return (
              <li key={index}>
                <Link to={result.slug}>{result.title}</Link>
              </li>
            )
          })}
          <li>
            Showing {limit ? `${Math.min(limit, count)} of` : null} {count}{" "}
            {count === 1 ? "result" : "results"}.
          </li>
        </ul>
      )}
    </div>
  )
}
