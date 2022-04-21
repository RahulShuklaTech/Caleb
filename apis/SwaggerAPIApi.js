import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const cacheUserBetsGET = (Constants, { internalId }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/CachedSharpsports/CacheIndividualBetslipsByBettorId?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useCacheUserBetsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['CachUserBetsResponse', args],
    () => cacheUserBetsGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['CachUserBetsResponses']),
    }
  );
};

export const FetchCacheUserBetsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useCacheUserBetsGET(
    { internalId },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchCacheUserBets: refetch });
};

export const getDefaultUnitsGET = (Constants, { internalId }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/SaveUnitSize?internalId=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetDefaultUnitsGET = ({ internalId }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/SaveUnitSize?internalId=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGetDefaultUnitsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/SaveUnitSize?internalId=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetDefaultUnits: refetch });
};

export const getMostProfitableGET = (
  Constants,
  { daysBack, dummy, internalId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetMostProfitable?id=${
      internalId ?? ''
    }&dummy=${dummy ?? ''}&daysBack=${daysBack ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetMostProfitableGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['MostProfitablePages', args],
    () => getMostProfitableGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetMostProfitableGET = ({
  children,
  onData = () => {},
  refetchInterval,
  daysBack,
  dummy,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetMostProfitableGET(
    { daysBack, dummy, internalId },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetMostProfitable: refetch });
};

export const getAllBettorAccountsKate$sGET = (Constants, { internalId }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetAllBettorAccounts?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetAllBettorAccountsKate$sGET = ({ internalId }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetAllBettorAccounts?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGetAllBettorAccountsKate$sGET = ({
  children,
  onData = () => {},
  refetchInterval,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetAllBettorAccounts?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetAllBettorAccountsKate$s: refetch,
  });
};

export const getBankrollPageByIdGET = (Constants, { dummy, internalId }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBankrollPageById?id=${
      internalId ?? ''
    }&dummy=${dummy ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetBankrollPageByIdGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['bankrollPages', args],
    () => getBankrollPageByIdGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetBankrollPageByIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
  dummy,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetBankrollPageByIdGET(
    { dummy, internalId },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetBankrollPageById: refetch,
  });
};

export const getBetslipsByBettorIdNotKate$sGET = (
  Constants,
  { dummy, internalId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBetslipsByBettorId?id=${
      internalId ?? ''
    }&dummy=${dummy ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetBetslipsByBettorIdNotKate$sGET = (
  args,
  { refetchInterval } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['ids', args],
    () => getBetslipsByBettorIdNotKate$sGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetBetslipsByBettorIdNotKate$sGET = ({
  children,
  onData = () => {},
  refetchInterval,
  dummy,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } =
    useGetBetslipsByBettorIdNotKate$sGET(
      { dummy, internalId },
      { refetchInterval }
    );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetBetslipsByBettorIdNotKate$s: refetch,
  });
};

export const getBetslipsByBettorIdAndBetslipGET = (
  Constants,
  { betslipId, userId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBetslipByBettorIdAndBetslipId?id=${
      userId ?? ''
    }&betslipId=${betslipId ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetBetslipsByBettorIdAndBetslipGET = ({
  betslipId,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBetslipByBettorIdAndBetslipId?id=${
      userId ?? ''
    }&betslipId=${betslipId ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGetBetslipsByBettorIdAndBetslipGET = ({
  children,
  onData = () => {},
  refetchInterval,
  betslipId,
  userId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBetslipByBettorIdAndBetslipId?id=${
      userId ?? ''
    }&betslipId=${betslipId ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetBetslipsByBettorIdAndBetslip: refetch,
  });
};

export const getBettorAccountByIdGET = Constants =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorAccountById`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetBettorAccountByIdGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorAccountById`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGetBettorAccountByIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorAccountById`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetBettorAccountById: refetch,
  });
};

export const getBettorBankrollTimeseriesKate$sGET = (
  Constants,
  { internalId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorBankrollTimeseries?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetBettorBankrollTimeseriesKate$sGET = ({ internalId }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorBankrollTimeseries?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGetBettorBankrollTimeseriesKate$sGET = ({
  children,
  onData = () => {},
  refetchInterval,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorBankrollTimeseries?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetBettorBankrollTimeseriesKate$s: refetch,
  });
};

export const getBettorNetProfitTimeseriesKate$sGET = (
  Constants,
  { internalId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorNetProfitTimeseries?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetBettorNetProfitTimeseriesKate$sGET = ({ internalId }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorNetProfitTimeseries?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchGetBettorNetProfitTimeseriesKate$sGET = ({
  children,
  onData = () => {},
  refetchInterval,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorNetProfitTimeseries?id=${
      internalId ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetBettorNetProfitTimeseriesKate$s: refetch,
  });
};

export const getBettorStatsByBettorIdKate$sGET = (
  Constants,
  { dummy, internalId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetBettorStatsByBettorId?id=${
      internalId ?? ''
    }&dummy=${dummy ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetBettorStatsByBettorIdKate$sGET = (
  args,
  { refetchInterval } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['stat', args],
    () => getBettorStatsByBettorIdKate$sGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['stats']),
    }
  );
};

export const FetchGetBettorStatsByBettorIdKate$sGET = ({
  children,
  onData = () => {},
  refetchInterval,
  dummy,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } =
    useGetBettorStatsByBettorIdKate$sGET(
      { dummy, internalId },
      { refetchInterval }
    );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetBettorStatsByBettorIdKate$s: refetch,
  });
};

export const getSportbookStatsByBettorAndSportbooksIdGET = (
  Constants,
  { internalId, sportsbookId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetSportbookStatsByBettorAndSportbooksId?id=${
      internalId ?? ''
    }&sportsbook=${sportsbookId ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
        Dummy: Constants['updatedSportsBook'],
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetSportbookStatsByBettorAndSportbooksIdGET = ({
  internalId,
  sportsbookId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetSportbookStatsByBettorAndSportbooksId?id=${
      internalId ?? ''
    }&sportsbook=${sportsbookId ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
        Dummy: Constants['updatedSportsBook'],
      },
      depends: [isFocused],
    }
  );
};

export const FetchGetSportbookStatsByBettorAndSportbooksIdGET = ({
  children,
  onData = () => {},
  refetchInterval,
  internalId,
  sportsbookId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetSportbookStatsByBettorAndSportbooksId?id=${
      internalId ?? ''
    }&sportsbook=${sportsbookId ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
        Dummy: Constants['updatedSportsBook'],
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchGetSportbookStatsByBettorAndSportbooksId: refetch,
  });
};

export const gradesGET = (Constants, { dummy, id }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetGrades?id=${
      id ?? ''
    }&dummy=${dummy ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGradesGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['Grade', args], () => gradesGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['Grades']),
  });
};

export const FetchGradesGET = ({
  children,
  onData = () => {},
  refetchInterval,
  dummy,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGradesGET(
    { dummy, id },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGrades: refetch });
};

export const loginPOST = (Constants, { loginIdentity, passwrd }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/Login`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ loginIdentity: loginIdentity, password: passwrd }),
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const oddsDataGET = (Constants, { betType, sport }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Odds/GetOddsBySportAndType?sport=${
      sport ?? ''
    }&type=${betType ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useOddsDataGET = ({ betType, sport }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Odds/GetOddsBySportAndType?sport=${
      sport ?? ''
    }&type=${betType ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchOddsDataGET = ({
  children,
  onData = () => {},
  refetchInterval,
  betType,
  sport,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Odds/GetOddsBySportAndType?sport=${
      sport ?? ''
    }&type=${betType ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchOddsData: refetch });
};

export const saveUnitSizeGET = (Constants, { internalId, unitSize }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/SaveUnitSize?internalId=${
      internalId ?? ''
    }&unitSize=${unitSize ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSaveUnitSizeGET = ({ internalId, unitSize }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/SaveUnitSize?internalId=${
      internalId ?? ''
    }&unitSize=${unitSize ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchSaveUnitSizeGET = ({
  children,
  onData = () => {},
  refetchInterval,
  internalId,
  unitSize,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/SaveUnitSize?internalId=${
      internalId ?? ''
    }&unitSize=${unitSize ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchSaveUnitSize: refetch });
};

export const sharpsports$GetFavoriteTeamGET = (
  Constants,
  { dummy, internalId }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetFavoriteTeam?id=${
      internalId ?? ''
    }&dummy=${dummy ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSharpsports$GetFavoriteTeamGET = (
  args,
  { refetchInterval } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['FavoriteTeam', args],
    () => sharpsports$GetFavoriteTeamGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['FavoriteTeams']),
    }
  );
};

export const FetchSharpsports$GetFavoriteTeamGET = ({
  children,
  onData = () => {},
  refetchInterval,
  dummy,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useSharpsports$GetFavoriteTeamGET(
    { dummy, internalId },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchSharpsports$GetFavoriteTeam: refetch,
  });
};

export const sharpsports$GetTrendsGET = (Constants, { dummy, internalId }) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Sharpsports/GetTrends?id=${
      internalId ?? ''
    }&dummy=${dummy ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSharpsports$GetTrendsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Trends', args],
    () => sharpsports$GetTrendsGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchSharpsports$GetTrendsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  dummy,
  internalId,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useSharpsports$GetTrendsGET(
    { dummy, internalId },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({
    loading,
    data,
    error,
    refetchSharpsports$GetTrends: refetch,
  });
};

export const signUpPOST = (
  Constants,
  { email, firstName, password, username }
) =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/SignUp`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        username: username,
        email: email,
        password: password,
      }),
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const validateTokenGET = Constants =>
  fetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/ValidateToken`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useValidateTokenGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/ValidateToken`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );
};

export const FetchValidateTokenGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://sportsbettingapi20201118035253.azurewebsites.net/Account/ValidateToken`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['authToken'],
        'Content-Type': 'application/json',
      },
      depends: [isFocused],
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchValidateToken: refetch });
};
