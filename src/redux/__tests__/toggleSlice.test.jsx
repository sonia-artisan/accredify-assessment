import toggleReducer, { toggleUserType } from '../toggleSlice';

describe('toggleSlice', () => {
  it('should return the initial state', () => {
    const initialState = 'managedUser';
    const state = toggleReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });

  it('should toggle from "managedUser" to "personalUser"', () => {
    const initialState = 'managedUser';
    const state = toggleReducer(initialState, toggleUserType());
    expect(state).toEqual('personalUser');
  });

  it('should toggle from "personalUser" to "managedUser"', () => {
    const initialState = 'personalUser';
    const state = toggleReducer(initialState, toggleUserType());
    expect(state).toEqual('managedUser');
  });
});
