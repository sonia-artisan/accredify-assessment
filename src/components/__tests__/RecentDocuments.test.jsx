import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RecentDocuments from '../RecentDocuments';
import documentsReducer, { fetchDocuments } from '../../redux/documentsSlice';
import thunk from 'redux-thunk';

jest.mock('../Table', () => (props) => (
  <div data-testid="table">
    {props.items && props.items.map((item, index) => (
      <div key={index}>{item.name}</div>
    ))}
  </div>
));
jest.mock('../Container', () => (props) => <div data-testid="container">{props.children}</div>);

const createMockStore = (preloadedState) => {
    const store = configureStore({
      reducer: {
        documents: documentsReducer,
      },
      middleware: (getDefaultMiddleware) => {
        const middlewareArray = getDefaultMiddleware().concat(thunk);
        middlewareArray.forEach(middleware => {
          if (typeof middleware !== 'function') {
            console.error('Middleware is not a function:', middleware);
          }
        });
        return middlewareArray;
      },
      preloadedState,
    });
    return store;
  };

describe('RecentDocuments component', () => {
  let store;

  beforeEach(() => {
    store = createMockStore({
      documents: {
        data: {
          record: {
            data: [
              { id: 1, name: 'Document 1' },
              { id: 2, name: 'Document 2' },
            ],
          },
        },
      },
    });

    // Mock the dispatch function
    store.dispatch = jest.fn(store.dispatch);
  });

  test('renders the RecentDocuments component and dispatches fetchDocuments', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <RecentDocuments />
        </Provider>
      );
    });

    expect(screen.getByTestId('container')).toBeInTheDocument();

    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(screen.getByText('Document 1')).toBeInTheDocument();
    expect(screen.getByText('Document 2')).toBeInTheDocument();

    expect(store.dispatch).toHaveBeenCalled();

    const dispatchedAction = store.dispatch.mock.calls[0][0];
    expect(dispatchedAction.type).toBe(fetchDocuments.pending.type);
  });
});
