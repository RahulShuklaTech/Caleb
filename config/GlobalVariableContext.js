
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();
export const DeviceVariables = {"authToken":"Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoieiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkJhc2ljVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNzVjMzk4ZGYtZDJlYS00Y2U4LWFkOWYtMDkwNmVhN2Y5NmM3IiwiZXhwIjoxNjUyMzEzNDIzLCJpc3MiOiJodHRwczovL3ZhdWx0c3BvcnRzaHEuY29tIiwiYXVkIjoiaHR0cHM6Ly92YXVsdHNwb3J0c2hxLmNvbSJ9.uaBY3jvKYTfJZnXcH8OrLQN69uE3EVK3SxPErt4_3bs","username":"","userDefaultUnitSize":"","waitlisted":false};
export const AppVariables = {"toggleAdvancedFilters":false,"toggleBankrollValues":"","toggleSportsbookInfo":"","globalFilters":"","debugVar":"","toggleMultilegBetInfo":"","loadingLogin":false,"loadingSignUp":false,"selectedSportsbook":"Aggregate","toggleMyBetsAnalysis":"","togglePendingBetsList":false,"selectedSportsbookChart":"init","updatedSportsBook":0,"toggleGamesModal":false,"toggleLeaguesModal":false,"oddsDisplayed":["basketball_nba","spreads"],"x_requests_remaining":"","x_requests_used":"","filterLeague":[],"filterBetStatus":"win","internalId":"9b3a52cc-7e94-465c-a030-57ce41a01088","initLoginCheck":0,"toggleSportsbookModal":false,"toggleMyBetsMoreInfoModal":false,"toggleGradesModal":false,"filterLeagueApply":[],"toggleFiltersModal":false,"filterDate":[],"filterDateApply":[],"filterSportsbook":[],"filterSportsbookApply":[],"filterBetType":[],"filterBetTypeApply":[],"filterUnderdog":[],"filterUnderdogApply":[],"filterUnder":[],"filterUnderApply":[],"filterOutcome":[],"filterOutcomeApply":[],"filterBonus":[],"filterBonusApply":[],"filterLiveBet":[],"filterLiveBetApply":[],"dummyVar":15,"toggleSignOutModal":false,"toggleForgotPasswordModal":false,"toggleHistoricalBetsList":true,"statsNetProfit":0,"statsWins":0,"statsLosses":0,"statsPushes":0,"statsAtRisk":0,"statsPendingCount":0,"statsPendingAmount":0,"filterBetStatusApply":[],"filterTeam":[],"filterTeamApply":[],"toggleGamesSearchBar":false,"toggleShareModal":false,"combinedFiltersArray":[],"sportsbooksSyncedVar":false,"loadingRefresh":false,"stupidDoubleBack":0,"toggleGameInfoModal":false,"selectedGame":"[{\"id\":\"f3369f6c3e564412812f27b7e3e635b8\", \"league\":\"basketball_nba\", \"betType\":\"h2h\", \"startTime\":\"2022-04-21T00:10:42Z\", \"awayTeam\":\"Philadelphia 76ers\", \"homeTeam\":\"Toronto Raptors\", \"bookmakers\":[ 0:{ \"key\":\"draftkings\", \"title\":\"DraftKings\", \"cleansedTitle\":\"DraftKings\", \"lastUpdate\":\"04/21/2022 02:03:59\", \"awayTeamOddsAmerican\":\"-155\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"125\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":\"https://apps.apple.com/us/app/draftkings-sportsbook-casino/id1375031369\", \"affiliateUrl\":NULL, \"affiliateOffer\":NULL }, 1:{ \"key\":\"fanduel\", \"title\":\"FanDuel\", \"cleansedTitle\":\"FanDuel\", \"lastUpdate\":\"04/21/2022 02:04:00\", \"awayTeamOddsAmerican\":\"-132\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"106\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":\"https://apps.apple.com/us/app/fanduel-sportsbook-casino/id1413721906\", \"affiliateUrl\":NULL, \"affiliateOffer\":NULL }, 2:{ \"key\":\"betmgm\", \"title\":\"BetMGM\", \"cleansedTitle\":\"BetMGM\", \"lastUpdate\":\"04/21/2022 02:04:16\", \"awayTeamOddsAmerican\":\"105\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"-130\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":\"https://apps.apple.com/us/app/betmgm-sportsbook/id1430875409\", \"affiliateUrl\":\"https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1631147\", \"affiliateOffer\":\"$600 Risk Free Bet\" }, 3:{ \"key\":\"pointsbetus\", \"title\":\"PointsBet (US)\", \"cleansedTitle\":\"PointsBet\", \"lastUpdate\":\"04/21/2022 02:04:00\", \"awayTeamOddsAmerican\":\"-110\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"-110\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL \"appUrl\":\"https://apps.apple.com/us/app/pointsbet-sportsbook/id1446832379\", \"affiliateUrl\":NULL, \"affiliateOffer\":NULL }, 4:{ \"key\":NULL, \"title\":\"BetRivers\", \"cleansedTitle\":\"BetRivers\", \"lastUpdate\":NULL, \"awayTeamOddsAmerican\":NULL, \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":NULL, \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":NULL, \"affiliateUrl\":\"https://www.vaultsportshq.com/betrivers\", \"affiliateOffer\":\"$250 Bonus Match\" }, 5:{ \"key\":\"unibet\", \"title\":\"Unibet\", \"cleansedTitle\":\"Unibet\", \"lastUpdate\":\"04/21/2022 02:04:12\", \"awayTeamOddsAmerican\":\"-110\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"-112\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":NULL, \"affiliateUrl\":\"https://www.vaultsportshq.com/unibet\", \"affiliateOffer\":\"$500 Risk Free Bet\" }, 6:{ \"key\":\"barstool\", \"title\":\"Barstool Sportsbook\", \"cleansedTitle\":\"Barstool\", \"lastUpdate\":\"04/21/2022 02:03:34\", \"awayTeamOddsAmerican\":\"112\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"-139\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":\"https://apps.apple.com/us/app/barstool-sportsbook-casino/id1474416533\", \"affiliateUrl\":NULL, \"affiliateOffer\":NULL }, 7:{ \"key\":\"foxbet\", \"title\":\"FOX Bet\", \"cleansedTitle\":\"FOX Bet\", \"lastUpdate\":\"04/21/2022 02:04:13\", \"awayTeamOddsAmerican\":\"140\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"-200\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":\"https://apps.apple.com/us/app/fox-bet-sportsbook-casino/id1472570816\", \"affiliateUrl\":NULL, \"affiliateOffer\":NULL }, 8:{ \"key\":\"williamhill_us\", \"title\":\"William Hill (US)\", \"cleansedTitle\":\"Caesars\", \"lastUpdate\":\"04/21/2022 02:03:33\", \"awayTeamOddsAmerican\":\"130\", \"awayTeamLine\":NULL, \"homeTeamOddsAmerican\":\"-160\", \"homeTeamLine\":NULL, \"overOddsAmerican\":NULL, \"underOddsAmerican\":NULL, \"totalLine\":NULL, \"appUrl\":\"https://apps.apple.com/us/app/caesars-sportsbook/id1413099571\", \"affiliateUrl\":NULL, \"affiliateOffer\":NULL } ] }]"};

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str)
  } catch {
    return str
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const entries = await AsyncStorage.multiGet(Object.keys(DeviceVariables));

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key, value]) => [
      key,
      (value ? tryParseJson(value) : DeviceVariables[key])
    ]);

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return <AppLoading />;
  }

  return (
    <GlobalVariableUpdater.Provider value={dispatch}>
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
