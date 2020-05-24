import game, {initialState, manualGain} from './gameSlice';

describe('game reducer', () => {
  it('should handle the initial state', () => {
    expect(game(initialState, {type: 'test'})).toEqual(initialState);
  });

  it('should increase resources by one', () => {
    expect(game(initialState, {type: 'test'}).resources.metal.current).toEqual(
      0,
    );
    expect(
      game(initialState, manualGain('metal')).resources.metal.current,
    ).toEqual(1);
  });
});
