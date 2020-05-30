import game, {
  initialState,
  manualGain,
  developmentSetResource,
  buyResearch,
  upgradeStorage,
} from './gameSlice';
import {ResourceType} from '../types';

describe('game reducer', () => {
  let gameState = game(initialState, {type: 'test'});

  beforeEach(() => {
    gameState = game(initialState, {type: 'test'});
  });

  it('should handle the initial state', () => {
    expect(initialState).toEqual(initialState);
  });

  it('should increase resources by one', () => {
    expect(gameState.resourceCount.metal.current).toEqual(0);
    gameState = game(gameState, manualGain(ResourceType.metal));
    expect(gameState.resourceCount.metal.current).toEqual(1);
    gameState = game(gameState, manualGain(ResourceType.metal));
    expect(gameState.resourceCount.metal.current).toEqual(2);
  });

  it('should set resource', () => {
    expect(gameState.resourceCount.metal.current).toEqual(0);
    gameState = game(
      gameState,
      developmentSetResource({resource: ResourceType.metal, amount: 20}),
    );
    expect(gameState.resourceCount.metal.current).toEqual(20);
  });

  it('should buy research', () => {
    gameState = game(
      gameState,
      developmentSetResource({resource: ResourceType.science, amount: 20}),
    );

    expect(gameState.resourceCount.science.current).toEqual(20);
    expect(gameState.research.unlockStorage.currentLevel).toEqual(0);
    expect(gameState.research.unlockOil.unlocked).toEqual(false);

    gameState = game(gameState, buyResearch('unlockStorage'));

    expect(gameState.resourceCount.science.current).toEqual(15);
    expect(gameState.research.unlockStorage.currentLevel).toEqual(1);
    expect(gameState.research.unlockOil.unlocked).toEqual(true);
  });

  it('should be a noop when buying research and no science', () => {
    gameState = game(
      gameState,
      developmentSetResource({resource: ResourceType.science, amount: 4}),
    );

    expect(gameState.resourceCount.science.current).toEqual(4);
    expect(gameState.research.unlockStorage.currentLevel).toEqual(0);
    expect(gameState.research.unlockOil.unlocked).toEqual(false);

    gameState = game(gameState, buyResearch('unlockStorage'));

    expect(gameState.resourceCount.science.current).toEqual(4);
    expect(gameState.research.unlockStorage.currentLevel).toEqual(0);
    expect(gameState.research.unlockOil.unlocked).toEqual(false);
  });

  it('should buy storage', () => {
    gameState = game(
      gameState,
      developmentSetResource({resource: ResourceType.metal, amount: 50}),
    );
    expect(gameState.resourceCount.metal.current).toEqual(50);
    expect(gameState.resourceCount.metal.capacity).toEqual(50);

    gameState = game(gameState, upgradeStorage(ResourceType.metal));

    expect(gameState.resourceCount.metal.current).toEqual(0);
    expect(gameState.resourceCount.metal.capacity).toEqual(100);
  });

  it('should fail buying storage without resources', () => {
    expect(gameState.resourceCount.metal.capacity).toEqual(50);

    gameState = game(gameState, upgradeStorage(ResourceType.metal));

    expect(gameState.resourceCount.metal.capacity).toEqual(50);
  });
});
