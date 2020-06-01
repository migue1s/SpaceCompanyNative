import game, {
  initialState,
  manualGain,
  developmentSetResource,
  buyResearch,
  upgradeStorage,
  buildMachine,
} from './gameSlice';
import {ResourceType} from '../types';
import {MachineType} from '../data/machinesData';

describe('The game', () => {
  let gameState = game(initialState, {type: 'test'});

  beforeEach(() => {
    gameState = game(initialState, {type: 'test'});
  });

  it('should handle the initial state', () => {
    expect(initialState).toEqual(initialState);
  });

  describe('resources', () => {
    it('should increate by one', () => {
      expect(gameState.resources.metal.current).toEqual(0);
      gameState = game(gameState, manualGain(ResourceType.metal));
      expect(gameState.resources.metal.current).toEqual(1);
      gameState = game(gameState, manualGain(ResourceType.metal));
      expect(gameState.resources.metal.current).toEqual(2);
    });

    it('should get set', () => {
      expect(gameState.resources.metal.current).toEqual(0);
      gameState = game(
        gameState,
        developmentSetResource({resource: ResourceType.metal, amount: 20}),
      );
      expect(gameState.resources.metal.current).toEqual(20);
    });
  });

  describe('research', () => {
    it('should be bought', () => {
      gameState = game(
        gameState,
        developmentSetResource({resource: ResourceType.science, amount: 20}),
      );

      expect(gameState.resources.science.current).toEqual(20);
      expect(gameState.research.unlockStorage.currentLevel).toEqual(0);
      expect(gameState.research.unlockOil.unlocked).toEqual(false);

      gameState = game(gameState, buyResearch('unlockStorage'));

      expect(gameState.resources.science.current).toEqual(15);
      expect(gameState.research.unlockStorage.currentLevel).toEqual(1);
      expect(gameState.research.unlockOil.unlocked).toEqual(true);
    });

    it('should unlock other resources', () => {
      gameState = game(
        gameState,
        developmentSetResource({resource: ResourceType.science, amount: 30}),
      );

      expect(gameState.resources.oil.unlocked).toEqual(false);

      gameState = game(gameState, buyResearch('unlockOil'));

      expect(gameState.research.unlockOil.currentLevel).toEqual(1);
      expect(gameState.resources.oil.unlocked).toEqual(true);
    });

    it('should be a noop when buying research and no science', () => {
      gameState = game(
        gameState,
        developmentSetResource({resource: ResourceType.science, amount: 4}),
      );

      expect(gameState.resources.science.current).toEqual(4);
      expect(gameState.research.unlockStorage.currentLevel).toEqual(0);
      expect(gameState.research.unlockOil.unlocked).toEqual(false);

      gameState = game(gameState, buyResearch('unlockStorage'));

      expect(gameState.resources.science.current).toEqual(4);
      expect(gameState.research.unlockStorage.currentLevel).toEqual(0);
      expect(gameState.research.unlockOil.unlocked).toEqual(false);
    });
  });

  it('should buy storage', () => {
    gameState = game(
      gameState,
      developmentSetResource({resource: ResourceType.metal, amount: 50}),
    );
    expect(gameState.resources.metal.current).toEqual(50);
    expect(gameState.resources.metal.capacity).toEqual(50);

    gameState = game(gameState, upgradeStorage(ResourceType.metal));

    expect(gameState.resources.metal.current).toEqual(0);
    expect(gameState.resources.metal.capacity).toEqual(100);
  });

  it('should fail buying storage without resources', () => {
    expect(gameState.resources.metal.capacity).toEqual(50);

    gameState = game(gameState, upgradeStorage(ResourceType.metal));

    expect(gameState.resources.metal.capacity).toEqual(50);
  });

  describe('machines', () => {
    it('should fail without resources', () => {
      gameState = game(gameState, buildMachine(MachineType.metalT1));
      expect(gameState.resources.metal.current).toEqual(0);
      expect(gameState.resources.gem.current).toEqual(0);
      expect(gameState.machines.metalT1.current).toEqual(0);
    });

    it('should buy correctly', () => {
      gameState = game(
        gameState,
        developmentSetResource({resource: ResourceType.metal, amount: 20}),
      );
      gameState = game(
        gameState,
        developmentSetResource({resource: ResourceType.wood, amount: 20}),
      );
      gameState = game(gameState, buildMachine(MachineType.metalT1));
      expect(gameState.resources.metal.current).toEqual(10);
      expect(gameState.resources.wood.current).toEqual(15);
      expect(gameState.machines.metalT1.current).toEqual(1);
    });
  });
});
