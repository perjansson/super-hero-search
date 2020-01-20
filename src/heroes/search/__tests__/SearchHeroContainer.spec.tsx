import React from 'react'
import { configureStore, Store } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import debounce from 'lodash/debounce'
import { FetchMock } from 'jest-fetch-mock'

import SearchHeroContainer from '../SearchHeroContainer'
import reducer, { RootState } from '../../../store/reducer'
import { initialState as initialHeroesState, HeroesState } from '../../reducer'

jest.mock('lodash/debounce')
;(debounce as jest.Mock).mockImplementation(fn => fn)

const fetchMock = fetch as FetchMock

const defaultInitialState = { heroes: initialHeroesState }

function renderWithRedux(
  ui: React.ReactElement,
  {
    initialState = defaultInitialState,
    store = configureStore({ reducer, preloadedState: initialState }),
  }: { initialState?: RootState; store?: Store } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('SearchHeroContainer', () => {
  beforeEach(() => {
    fetchMock.resetMocks()
  })

  test('should render only search input in initial state', () => {
    const { getByTestId, queryByTestId } = renderWithRedux(
      <SearchHeroContainer />
    )
    ;(expect as any)(getByTestId('search-input')).toBeInTheDocument()
    ;(expect as any)(queryByTestId('search-result')).not.toBeInTheDocument()
  })

  test('should render loading indicator when in loading state', () => {
    const initialState = {
      ...defaultInitialState,
      heroes: {
        ...defaultInitialState.heroes,
        findRequest: {
          query: 'Spider-Man',
          state: 'loading',
        },
      } as HeroesState,
    }

    const {
      getByTestId,
      getByText,
      queryByTestId,
    } = renderWithRedux(<SearchHeroContainer />, { initialState })
    ;(expect as any)(getByTestId('search-input')).toBeInTheDocument()
    ;(expect as any)(getByText('Loading')).toBeInTheDocument()
    ;(expect as any)(queryByTestId('search-result')).not.toBeInTheDocument()
  })

  test('should update redux store on query change', () => {
    const response = {
      response: 'success',
      'results-for': 'spider-man',
      results: [
        {
          id: '620',
          name: 'Spider-Man',
        },
        {
          id: '621',
          name: 'Spider-Man',
        },
      ],
    }
    fetchMock.mockResponseOnce(JSON.stringify(response))

    const { getByTestId, store } = renderWithRedux(<SearchHeroContainer />)
    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'Spider-Man' },
    })
    expect(store.getState().heroes.findRequest.query).toEqual('Spider-Man')
    setTimeout(
      () =>
        expect(store.getState().heroes.findRequest.data).toEqual('Spider-Man'),
      100
    )

    expect(fetch).toHaveBeenCalledTimes(1)
  }, 500)
})
