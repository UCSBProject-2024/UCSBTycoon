import { useImmerReducer } from 'use-immer';
import { Game, KnowledgeBuilding, MonetaryBuilding } from '../domains';

export type GameReducerAction =
  | { type: 'reload' | 'reset' }
  | { type: 'update'; subtype: 'cash' }
  | { type: 'update'; subtype: 'cashMult' }
  | { type: 'update'; subtype: 'setCash'; cash: number }
  | { type: 'update'; subtype: 'buildingBought'; buildingName: string }
  | { type: 'update'; subtype: 'knowledgeIncrementAmount'; incrementKnowledgeAmount: number}
  | { type: 'update'; subtype: 'knowledge'}
  | { type: 'getBuildingData' };

export function useGameReducer() {
  return useImmerReducer(gameReducer, null as unknown as Game);
}

const LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY = 'c1eabe78-8bc4-4fdc-9a2e-4aa39583fa15-cookie-clicker-game';

function gameReducer(draft: Game, action: GameReducerAction) {
  switch (action.type) {
    case 'reload': {
      knowledgeGenerator();
      return getGameFromLocalStorage();
    }
    case 'update': {
      switch (action.subtype) {
        case 'knowledgeIncrementAmount': {
          draft.knowledgeMult += action.incrementKnowledgeAmount;
        }
        case 'cash': {
          if (!draft){
            draft = getGameFromLocalStorage() as Game;
          }
          draft.cash = draft.cash + draft.cashMult * calculateMonetaryMultiplicator(draft.MonetaryMultiplierBuildings);
          setGameToLocalStorage(draft);
          return draft;
        }
        case 'cash': {
          draft.cash = draft.cash + draft.cashMult * calculateMonetaryMultiplicator(draft.MonetaryMultiplierBuildings);
          setGameToLocalStorage(draft);
          return draft;
        }
        case 'cashMult': {
          draft.cashMult = Math.pow(2, draft.cashMult);
          setGameToLocalStorage(draft);
          return draft;
        }
        case 'setCash': {
          draft.cash = draft.cash-action.cash;
          setGameToLocalStorage(draft);
          return draft;
        }
        case 'knowledge': {
          draft.knowledge = draft.knowledge + draft.knowledgeMult
          console.log('KNOWLEDGE: ', draft.knowledge)
          setGameToLocalStorage(draft);
          return draft;
        }
        case 'buildingBought':
          {
            //updates building's bought status
            // const allBuildingArr = (draft.KnowledgeIncomeBuildings = draft.KnowledgeIncomeBuildings.concat(
            //   draft.KnowledgeMultiplierBuildings,
            //   draft.MonetaryIncomeBuildings,
            //   draft.MonetaryMultiplierBuildings
            // ));
            draft.KnowledgeIncomeBuildings.forEach((building) => {
              if (building.name === action.buildingName) {
                building.active = true;
              }
              return draft;
            });
            draft.KnowledgeMultiplierBuildings.forEach((building) => {
              if (building.name === action.buildingName) {
                building.active = true;
              }
              return draft;
            });
            draft.MonetaryIncomeBuildings.forEach((building) => {
              if (building.name === action.buildingName) {
                building.active = true;
              }
              return draft;
            });
            draft.MonetaryMultiplierBuildings.forEach((building) => {
              if (building.name === action.buildingName) {
                building.active = true;
              }
              return draft;
            });
          }
          break;
        default:
          {
            console.log('Unknown subtype');
          }
          break;
      }
    }
  }
}

function getGameFromLocalStorage() {
  const loadedGame = localStorage.getItem(LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY);
  if (loadedGame) {
    return JSON.parse(loadedGame) as Game;
  }
  return loadInitialGame();
}

function loadInitialGame() {
  fetch('Data.json')
    .then((response) => response.json())
    .then((data) => {
      // Process the data here
      const monetaryIncomeBuildings: MonetaryBuilding[] = [];
      if (data && data.MoneyBuildings && data.MoneyBuildings.IncomeBuildings) {
        for (let i = 0; i < data.MoneyBuildings.IncomeBuildings.length; i++) {
          monetaryIncomeBuildings.push({
            name: data.MoneyBuildings.IncomeBuildings[i].name,
            income: data.MoneyBuildings.IncomeBuildings[i].income,
            price: data.MoneyBuildings.IncomeBuildings[i].price,
            active: false
          });
        }
      }
      const knowledgeIncomeBuildings: KnowledgeBuilding[] = [];
      if (data && data.KnowledgeBuildings && data.KnowledgeBuildings.IncomeBuildings) {
        for (let i = 0; i < data.KnowledgeBuildings.IncomeBuildings.length; i++) {
          knowledgeIncomeBuildings.push({
            name: data.KnowledgeBuildings.IncomeBuildings[i].name,
            income: data.KnowledgeBuildings.IncomeBuildings[i].income,
            price: data.KnowledgeBuildings.IncomeBuildings[i].price,
            active: false
          });
        }
      }
      const monetaryMultiplierBuildings: MonetaryBuilding[] = [];
      if (data && data.MoneyBuildings && data.MoneyBuildings.MultiplierBuildings) {
        for (let i = 0; i < data.MoneyBuildings.MultiplierBuildings.length; i++) {
          monetaryMultiplierBuildings.push({
            name: data.MoneyBuildings.MultiplierBuildings[i].name,
            income: data.MoneyBuildings.MultiplierBuildings[i].multiplier,
            price: data.MoneyBuildings.MultiplierBuildings[i].price,
            active: false
          });
        }
      }
      const knowledgeMultiplierBuildings: KnowledgeBuilding[] = [];
      if (data && data.KnowledgeBuildings && data.KnowledgeBuildings.MultiplierBuildings) {
        for (let i = 0; i < data.KnowledgeBuildings.MultiplierBuildings.length; i++) {
          knowledgeMultiplierBuildings.push({
            name: data.KnowledgeBuildings.MultiplierBuildings[i].name,
            income: data.KnowledgeBuildings.MultiplierBuildings[i].multiplier,
            price: data.KnowledgeBuildings.MultiplierBuildings[i].price,
            active: false
          });
        }
      }
      const initialGame = {
        title: 'Cookie Clicker',
        MonetaryIncomeBuildings: monetaryIncomeBuildings,
        KnowledgeIncomeBuildings: knowledgeIncomeBuildings,
        MonetaryMultiplierBuildings: monetaryMultiplierBuildings,
        KnowledgeMultiplierBuildings: knowledgeMultiplierBuildings,
        cash: 0,
        knowledge: 0,
        knowledgeMult: 1,
        cashMult: 1,
        knowledgeMult: 1
      };
      setGameToLocalStorage(initialGame);
      console.log('Initial game loaded:', initialGame);
      return initialGame;
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

function setGameToLocalStorage(game: Game) {
  localStorage.setItem(LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY, JSON.stringify(game));
}

function calculateMonetaryMultiplicator(buildings: MonetaryBuilding[]) {
  return buildings.reduce((total, building) => {
    if (!building.active) return total;
    return total * building.income;
  }, 1);
}

async function knowledgeGenerator() {
  setInterval(async () => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_COOKIE_CLICKER_GAME_KEY)) as Game
    gameReducer(data, { type: 'update', subtype: 'knowledge' });
  }, 1000);  // Main interval every 1000ms
}

// A variable to store the cached data
let cache = null;

export async function getBuildingData() {
  // If cache is not null, return the cached promise
  if (cache !== null) {
    return cache;
  }

  // Store the fetch promise in the cache variable
  cache = await fetch('/Data.json')
    .then((response) => response.json())
    .then((data) => {
      const newBuildings = [];
      if (data.KnowledgeBuildings?.MultiplierBuildings) {
        newBuildings.push(...data.KnowledgeBuildings.MultiplierBuildings);
      }
      if (data.KnowledgeBuildings?.IncomeBuildings) {
        newBuildings.push(...data.KnowledgeBuildings.IncomeBuildings);
      }
      if (data.MoneyBuildings?.MultiplierBuildings) {
        newBuildings.push(...data.MoneyBuildings.MultiplierBuildings);
      }
      if (data.MoneyBuildings?.IncomeBuildings) {
        newBuildings.push(...data.MoneyBuildings.IncomeBuildings);
      }
      return newBuildings;
    });

  return cache;
}
