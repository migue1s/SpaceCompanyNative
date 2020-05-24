import game, {initialState, manualGain} from './gameSlice';

describe('game reducer', () => {
  let gameState = game(initialState, {type: 'test'});

  beforeEach(() => {
    gameState = game(initialState, {type: 'test'});
  });

  it('should handle the initial state', () => {
    expect(initialState).toEqual(initialState);
  });

  it('should increase resources by one', () => {
    expect(gameState.resources.metal.current).toEqual(0);
    gameState = game(gameState, manualGain('metal'));
    expect(gameState.resources.metal.current).toEqual(1);
    gameState = game(gameState, manualGain('metal'));
    expect(gameState.resources.metal.current).toEqual(2);
  });
});
