import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  ButtonOutline,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const DashboardScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const consoleLog = a => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    console.log(a);
    return a;
  };

  const checkSportsbooksSynced = sportsbooks => {
    if (sportsbooks.length !== 0) {
      Constants.sportsbooksSynced = true;
      Constants.waitlisted = false;
    }

    //Constants.sportsbooksSynced = sportsbooks.length == 0 ? false : true;
    //Constants.waitlisted = sportsbooks.length == 0 ? true : false;

    setSportsbooksSynced(Constants.sportsbooksSynced);
    //setWaitlisted(Constants.waitlisted);

    return sportsbooks;
  };

  const valueNegative = x => {
    return Number(x) < 0;
  };

  const capitalizeAllWords = x => {
    //const mySentence = "freeCodeCamp is an awesome resource";
    const words = x.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(' ');
  };

  const roiSyntaxOverall = roi => {
    return roi > 0
      ? `+${Math.round(roi * 10) / 10}%`
      : `${Math.round(roi * 10) / 10}%`;
  };

  const compareGradeLeagueConsistency = x => {
    return x == 'leagueConsistency';
  };

  const gradeSyntax = x => {
    if (x > 0.92) {
      return 'A+';
    } else if (x > 0.84) {
      return 'A';
    } else if (x > 0.76) {
      return 'A-';
    } else if (x > 0.68) {
      return 'B+';
    } else if (x > 0.6) {
      return 'B';
    } else if (x > 0.52) {
      return 'B-';
    } else if (x > 0.44) {
      return 'C+';
    } else if (x > 0.36) {
      return 'C';
    } else if (x > 0.28) {
      return 'C-';
    } else if (x > 0.2) {
      return 'D+';
    } else if (x > 0.12) {
      return 'D';
    } else if (x <= 0.12 && x > 0) {
      return 'D-';
    } else {
      return '-';
    }
  };

  const winPercentageSyntax = x => {
    return '(' + `${Math.round(x * 10000) / 100}` + '%)';
  };

  const gradeColorPoor = x => {
    return x > 0.28 && x <= 0.52;
  };

  const trendsTeamsCompare = x => {
    return x == 'Team';
  };

  const trendsBetTypesCompare = x => {
    return x == 'Bet Type';
  };

  const mostProfitableLeaguesCompare = x => {
    // mostProfitableLeaguesCompare
    return x == 'Leagues';
  };

  const checkEarlyAccessCode = x => {
    return x !== 'V7XyG' ? true : false;
  };

  const trendPositive = x => {
    return x >= 0.5 ? true : false;
  };

  const mostProfitableBetTypesCompare = x => {
    // mostProfitableBetTypesCompare
    return x == 'Bet Types';
  };

  const trendsLeaguesCompare = x => {
    return x == 'League';
  };

  const gradeColorGood = x => {
    return x > 0.76;
  };

  const valueNeutral = x => {
    return Number(x) == 0;
  };

  const netProfitSyntax = netProfit => {
    let res = (Math.abs(netProfit) / 100).toFixed(2);
    let lastIndex = res[res.length - 1];
    let secondLastIndex = res[res.length - 2];
    const comp = lastIndex == 0 && secondLastIndex == 0;
    if (comp) {
      res = parseInt(res);
    }
    if (netProfit < 0) {
      return '-$' + res;
    } else {
      return '$' + res;
    }
  };

  const mostProfitableLabel = x => {
    const mostProfitableTable = {
      league: 'League',
      team: 'Team',
      timePeriod: 'Time Period',
      betType: 'Bet Type',
    };
    return mostProfitableTable[Constants.toggleMostProfitableItem];
  };

  const gradeColorFair = x => {
    return x > 0.52 && x <= 0.76;
  };

  const compareGradeTrapAvoidance = x => {
    return x == 'trapAvoidance';
  };

  const valuePositive = x => {
    return Number(x) > 0;
  };

  const compareGradeUnitSizeConsistency = x => {
    return x == 'unitSizeConsistency';
  };

  const gradeColorBad = x => {
    return x <= 0.28 && x > 0;
  };

  const myFunctionName = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.
    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const returnMostProfitable = x => {
    if (x.length === 0) {
      return null;
    } else {
      return [x[0]];
    }

    //return [x[0]];
  };

  const recordSyntax = x => {
    const [w, l, p] = x.split(' - ');

    return w + '-' + l + '-' + p;

    /*
recordPercent = (Number(w) / (Number(w) + Number(l))) * 100;

return `${Math.round(recordPercent * 10) / 10}%`



    labels={() => [
        `${Math.round(userRecordOverall * 10) / 10}%`,
        wins + '-' + losses + '-' + pushes,
*/
  };

  const recordPercentSyntax = x => {
    const [w, l, p] = x.split(' - ');

    recordPercent = (Number(w) / (Number(w) + Number(l))) * 100;

    return `${Math.round(recordPercent * 10) / 10}%`;
  };

  const gradeColorNull = x => {
    return x <= 0 || x == null;
  };

  const roiSyntax = roi => {
    return roi > 0
      ? `+${Math.round(roi * 10000) / 100}%`
      : `${Math.round(roi * 10000) / 100}%`;
  };

  const mostProfitableTeamsCompare = x => {
    // mostProfitableTeamsCompare
    return x == 'Teams';
  };

  const unitSyntax = x => {
    const units = x / 100 / Constants.userDefaultUnitSize;
    return '(' + `${Math.round(units * 100) / 100}` + 'U)';
  };

  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [sendGrade, setSendGrade] = React.useState('');
  const [sendGradeType, setSendGradeType] = React.useState('');
  const [sportsbooksSynced, setSportsbooksSynced] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [toggleMostProfitableItem, setToggleMostProfitableItem] =
    React.useState('');
  const [toggleMostProfitableModal, setToggleMostProfitableModal] =
    React.useState(false);
  const [toggleTrendsModal, setToggleTrendsModal] = React.useState(false);
  const [toggleTrendsType, setToggleTrendsType] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <Surface
        style={{ borderRadius: 0, backgroundColor: theme.colors.background }}
        elevation={3}
      >
        <View style={[styles.View_0z, { borderRadius: 0 }]}>
          <View style={styles.ViewC5} pointerEvents={'auto'}>
            <View style={[styles.ViewuI, { borderRadius: 0 }]}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('SettingsBetaScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewG7}>
                  <Icon
                    name={'Ionicons/ios-settings-sharp'}
                    size={28}
                    color={theme.colors.light}
                  />
                </View>
              </Touchable>
            </View>

            <View style={styles.Viewi2}>
              <Image
                style={styles.Imageoe}
                resizeMode={'contain'}
                source={Images.VaultLogoLightFontClearBackground}
              />
            </View>

            <View style={[styles.View_6u, { borderRadius: 0 }]}>
              <Touchable
                onPress={async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://discord.gg/6bGRD7BpUD'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewXA} pointerEvents={'auto'}>
                  <Icon
                    name={'MaterialCommunityIcons/discord'}
                    size={28}
                    color={theme.colors.light}
                  />
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </Surface>
      <>
        {!Constants['waitlisted'] ? null : (
          <View style={styles.ViewpO} pointerEvents={'auto'}>
            <View
              style={[
                styles.View_52,
                { backgroundColor: theme.colors.primary },
              ]}
              pointerEvents={'auto'}
            >
              <View style={styles.ViewnW} pointerEvents={'auto'}>
                <View style={styles.View_1F} pointerEvents={'auto'}>
                  <Text style={[styles.TextCh, { color: theme.colors.strong }]}>
                    {"You're On the Waitlist!"}
                  </Text>

                  <SwaggerAPIApi.FetchGetBankrollPageByIdGET
                    dummy={Constants['updatedSportsBook']}
                    internalId={Constants['internalId']}
                    onData={fetchData => {
                      try {
                        checkSportsbooksSynced(fetchData);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    {({ loading, error, data, refetchGetBankrollPageById }) => {
                      const fetchData = data;
                      if (!fetchData || loading) {
                        return <ActivityIndicator />;
                      }

                      if (error) {
                        return (
                          <Text style={{ textAlign: 'center' }}>
                            There was a problem fetching this data
                          </Text>
                        );
                      }

                      return null;
                    }}
                  </SwaggerAPIApi.FetchGetBankrollPageByIdGET>
                </View>

                <Text style={[styles.Texte3, { color: theme.colors.strong }]}>
                  {
                    "We're currently at capacity but we'll let you know as soon as space is available. You can still use the Games tab while you wait!"
                  }
                </Text>

                <View style={styles.Viewk0} pointerEvents={'auto'}>
                  <TextInput
                    onChangeText={newTextInputValue => {
                      const textInputValue = newTextInputValue;
                      try {
                        setTextInputValue(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.TextInputtp,
                      {
                        borderColor: theme.colors.divider,
                        color: theme.colors.strong,
                      },
                    ]}
                    value={textInputValue}
                    placeholder={'Early Access Code...'}
                    placeholderTextColor={theme.colors.divider}
                  />
                  <IconButton
                    onPress={() => {
                      try {
                        if (checkEarlyAccessCode(textInputValue)) {
                          return;
                        }
                        setGlobalVariableValue({
                          key: 'waitlisted',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={styles.IconButtonmE}
                    icon={'Ionicons/ios-arrow-forward-circle'}
                    size={32}
                    color={theme.colors.strong}
                  />
                </View>
              </View>
            </View>

            <ScrollView
              contentContainerStyle={styles.ScrollViewfmContent}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <View style={styles.ViewWD} pointerEvents={'auto'}>
                <Image
                  style={styles.Imagebs}
                  source={Images.DashboardDemo}
                  resizeMode={'contain'}
                />
              </View>
            </ScrollView>
          </View>
        )}
      </>
      <>
        {Constants['waitlisted'] ? null : (
          <View pointerEvents={'auto'}>
            <>
              {sportsbooksSynced ? null : (
                <View style={styles.ViewDC} pointerEvents={'auto'}>
                  <View pointerEvents={'auto'}>
                    <Touchable
                      onPress={() => {
                        try {
                          navigation.navigate('SharpSportsFormScreen');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={[
                          styles.ViewmD,
                          { backgroundColor: theme.colors.primary },
                        ]}
                        pointerEvents={'auto'}
                      >
                        <Icon
                          style={styles.Icon_5s}
                          name={'Ionicons/ios-add-circle'}
                          size={28}
                          color={theme.colors.strong}
                        />
                        <View style={styles.ViewCz} pointerEvents={'auto'}>
                          <Text
                            style={[
                              styles.Text_7v,
                              { color: theme.colors.strong },
                            ]}
                          >
                            {"You're In Demo Mode"}
                          </Text>

                          <Text
                            style={[
                              styles.Textxx,
                              { color: theme.colors.strong },
                            ]}
                          >
                            {
                              'Sync at least one sportsbook to view your stats, most profitable, and grades!'
                            }
                          </Text>
                        </View>

                        <SwaggerAPIApi.FetchGetBankrollPageByIdGET
                          dummy={Constants['updatedSportsBook']}
                          internalId={Constants['internalId']}
                          onData={fetchData => {
                            try {
                              checkSportsbooksSynced(fetchData);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          {({
                            loading,
                            error,
                            data,
                            refetchGetBankrollPageById,
                          }) => {
                            const fetchData = data;
                            if (!fetchData || loading) {
                              return <ActivityIndicator />;
                            }

                            if (error) {
                              return (
                                <Text style={{ textAlign: 'center' }}>
                                  There was a problem fetching this data
                                </Text>
                              );
                            }

                            return null;
                          }}
                        </SwaggerAPIApi.FetchGetBankrollPageByIdGET>
                      </View>
                    </Touchable>
                  </View>

                  <ScrollView
                    contentContainerStyle={styles.ScrollViewzCContent}
                    showsVerticalScrollIndicator={true}
                    bounces={true}
                  >
                    <View style={styles.Viewr4} pointerEvents={'auto'}>
                      <Image
                        style={styles.Imagev3}
                        source={Images.DashboardDemo}
                        resizeMode={'contain'}
                      />
                    </View>
                  </ScrollView>
                </View>
              )}
            </>
          </View>
        )}
      </>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={true}
        showsHorizontalScrollIndicator={false}
      >
        <View pointerEvents={'auto'}>
          <View style={styles.Viewgh} pointerEvents={'auto'}>
            <Text
              style={[
                styles.TextjF,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'Overall Stats'}
            </Text>

            <View style={styles.ViewhW} pointerEvents={'auto'}>
              <View style={styles.Viewec} pointerEvents={'auto'}>
                <SwaggerAPIApi.FetchGetBettorStatsByBettorIdKate$sGET
                  dummy={Constants['updatedSportsBook']}
                  internalId={Constants['internalId']}
                >
                  {({
                    loading,
                    error,
                    data,
                    refetchGetBettorStatsByBettorIdKate$s,
                  }) => {
                    const fetchData = data;
                    if (!fetchData || loading) {
                      return <ActivityIndicator />;
                    }

                    if (error) {
                      return (
                        <Text style={{ textAlign: 'center' }}>
                          There was a problem fetching this data
                        </Text>
                      );
                    }

                    return (
                      <View style={styles.Viewjm} pointerEvents={'auto'}>
                        <View style={styles.ViewVl} pointerEvents={'auto'}>
                          <Text
                            style={[
                              styles.Text_43,
                              { color: theme.colors.background_inverse },
                            ]}
                          >
                            {recordPercentSyntax(fetchData?.record)}
                          </Text>

                          <Text
                            style={[
                              styles.Textzu,
                              { color: theme.colors.background_inverse },
                            ]}
                          >
                            {recordSyntax(fetchData?.record)}
                          </Text>
                        </View>

                        <View style={styles.ViewJu} pointerEvents={'auto'}>
                          <>
                            {!valuePositive(fetchData?.net) ? null : (
                              <Text
                                style={[
                                  styles.Text_0x,
                                  { color: theme.colors.good },
                                ]}
                              >
                                {netProfitSyntax(fetchData?.net)}
                              </Text>
                            )}
                          </>
                          <>
                            {!valuePositive(fetchData?.net) ? null : (
                              <Text
                                style={[
                                  styles.Textu3,
                                  { color: theme.colors.good },
                                ]}
                              >
                                {unitSyntax(fetchData?.net)}
                              </Text>
                            )}
                          </>
                          <>
                            {!valueNegative(fetchData?.net) ? null : (
                              <Text
                                style={[
                                  styles.Texth7,
                                  { color: theme.colors.error },
                                ]}
                              >
                                {netProfitSyntax(fetchData?.net)}
                              </Text>
                            )}
                          </>
                          <>
                            {!valueNegative(fetchData?.net) ? null : (
                              <Text
                                style={[
                                  styles.Text_51,
                                  { color: theme.colors.error },
                                ]}
                              >
                                {unitSyntax(fetchData?.net)}
                              </Text>
                            )}
                          </>
                          <>
                            {!valueNeutral(fetchData?.net) ? null : (
                              <Text
                                style={[
                                  styles.TextjJ,
                                  { color: theme.colors.background_inverse },
                                ]}
                              >
                                {netProfitSyntax(fetchData?.net)}
                              </Text>
                            )}
                          </>
                          <>
                            {!valueNeutral(fetchData?.net) ? null : (
                              <Text
                                style={[
                                  styles.TextdM,
                                  { color: theme.colors.background_inverse },
                                ]}
                              >
                                {unitSyntax(fetchData?.net)}
                              </Text>
                            )}
                          </>
                        </View>

                        <View style={styles.View_9n} pointerEvents={'auto'}>
                          <>
                            {!valuePositive(fetchData?.roi) ? null : (
                              <Text
                                style={[
                                  styles.TextV1,
                                  { color: theme.colors.good },
                                ]}
                              >
                                {roiSyntaxOverall(fetchData?.roi)}
                              </Text>
                            )}
                          </>
                          <>
                            {!valueNegative(fetchData?.roi) ? null : (
                              <Text
                                style={[
                                  styles.Text_4p,
                                  { color: theme.colors.error },
                                ]}
                              >
                                {roiSyntaxOverall(fetchData?.roi)}
                              </Text>
                            )}
                          </>
                          <>
                            {!valueNeutral(fetchData?.roi) ? null : (
                              <Text
                                style={[
                                  styles.Text_9A,
                                  { color: theme.colors.background_inverse },
                                ]}
                              >
                                {roiSyntaxOverall(fetchData?.roi)}
                              </Text>
                            )}
                          </>
                        </View>
                      </View>
                    );
                  }}
                </SwaggerAPIApi.FetchGetBettorStatsByBettorIdKate$sGET>
              </View>

              <View style={styles.ViewU6} pointerEvents={'auto'}>
                <View style={styles.View_56} pointerEvents={'auto'}>
                  <Text style={[styles.Textut, { color: theme.colors.light }]}>
                    {'Record'}
                  </Text>
                </View>

                <View style={styles.View_00} pointerEvents={'auto'}>
                  <Text style={[styles.TextOL, { color: theme.colors.light }]}>
                    {'Net'}
                  </Text>
                </View>

                <View style={styles.Viewti} pointerEvents={'auto'}>
                  <Text style={[styles.Textjo, { color: theme.colors.light }]}>
                    {'ROI'}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.ViewwM} pointerEvents={'auto'}>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('MainTabNavigator', {
                      screen: 'MyBetsStack',
                      params: { screen: 'MyBetsScreen' },
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewHk} pointerEvents={'auto'}>
                  <Text style={[styles.TextXg, { color: theme.colors.light }]}>
                    {'View Breakdown'}
                  </Text>
                  <Icon
                    name={'Ionicons/ios-chevron-forward'}
                    size={12}
                    color={theme.colors.light}
                  />
                </View>
              </Touchable>
            </View>
          </View>
        </View>

        <View
          style={[styles.View_9d, { backgroundColor: theme.colors.background }]}
        >
          <View style={styles.Viewwb}>
            <View style={styles.Viewab}>
              <Text
                style={[
                  styles.TextZv,
                  { color: theme.colors.background_inverse },
                ]}
              >
                {'Most Profitable'}
              </Text>
            </View>
          </View>

          <SwaggerAPIApi.FetchGetMostProfitableGET
            dummy={Constants['updatedSportsBook']}
            internalId={Constants['internalId']}
          >
            {({ loading, error, data, refetchGetMostProfitable }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <>
                  <View style={styles.ViewHo} pointerEvents={'auto'}>
                    <ScrollView
                      contentContainerStyle={styles.ScrollViewxtContent}
                      showsVerticalScrollIndicator={false}
                      bounces={true}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <View style={styles.ViewMY}>
                        <Touchable
                          onPress={() => {
                            try {
                              setToggleMostProfitableItem('Leagues');
                              setToggleMostProfitableModal(true);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={styles.TouchablegJ}
                        >
                          <Surface
                            style={[
                              styles.SurfaceDr,
                              {
                                borderRadius: 6,
                                backgroundColor: theme.colors.background,
                              },
                            ]}
                            elevation={1}
                          >
                            <View
                              style={[
                                styles.ViewtK,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderRadius: 6,
                                  borderColor: theme.colors.divider,
                                },
                              ]}
                              collapsable={false}
                            >
                              <View style={styles.Viewen}>
                                <Text
                                  style={[
                                    styles.TextI9,
                                    { color: theme.colors.background_inverse },
                                  ]}
                                >
                                  {'League'}
                                </Text>
                                <FlatList
                                  data={returnMostProfitable(
                                    fetchData?.leagues
                                  )}
                                  renderItem={({ item }) => {
                                    const leagueListData = item;
                                    return (
                                      <>
                                        <Text
                                          style={[
                                            styles.Textpd,
                                            { color: theme.colors.light },
                                          ]}
                                          ellipsizeMode={'tail'}
                                          numberOfLines={1}
                                        >
                                          {leagueListData?.name}
                                        </Text>
                                        <>
                                          {!valuePositive(
                                            leagueListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.TextSy,
                                                { color: theme.colors.good },
                                              ]}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {netProfitSyntax(
                                                leagueListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNegative(
                                            leagueListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.TextWX,
                                                { color: theme.colors.error },
                                              ]}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {netProfitSyntax(
                                                leagueListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNeutral(
                                            leagueListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.TextOE,
                                                {
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                },
                                              ]}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {netProfitSyntax(
                                                leagueListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valuePositive(
                                            leagueListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color: theme.colors.good,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(leagueListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNegative(
                                            leagueListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color: theme.colors.error,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(leagueListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNeutral(
                                            leagueListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color:
                                                  theme.colors
                                                    .background_inverse,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(leagueListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                      </>
                                    );
                                  }}
                                  contentContainerStyle={
                                    styles.FlatListbiContent
                                  }
                                  numColumns={1}
                                />
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                      </View>

                      <View style={styles.View_9a}>
                        <Touchable
                          onPress={() => {
                            try {
                              setToggleMostProfitableItem('Teams');
                              setToggleMostProfitableModal(true);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={styles.Touchablebs}
                        >
                          <Surface
                            style={[
                              styles.SurfaceY5,
                              {
                                borderRadius: 6,
                                backgroundColor: theme.colors.background,
                              },
                            ]}
                            elevation={1}
                          >
                            <View
                              style={[
                                styles.ViewP3,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderRadius: 6,
                                  borderColor: theme.colors.divider,
                                },
                              ]}
                              collapsable={false}
                            >
                              <View style={styles.ViewaJ}>
                                <Text
                                  style={[
                                    styles.TextxD,
                                    { color: theme.colors.background_inverse },
                                  ]}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={1}
                                >
                                  {'Team'}
                                </Text>
                                <FlatList
                                  data={returnMostProfitable(fetchData?.teams)}
                                  renderItem={({ item }) => {
                                    const teamListData = item;
                                    return (
                                      <>
                                        <Text
                                          style={[
                                            styles.TextP1,
                                            { color: theme.colors.light },
                                          ]}
                                          ellipsizeMode={'tail'}
                                          numberOfLines={1}
                                        >
                                          {teamListData?.name}
                                        </Text>
                                        <>
                                          {!valuePositive(
                                            teamListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.Text_66,
                                                { color: theme.colors.good },
                                              ]}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {netProfitSyntax(
                                                teamListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNegative(
                                            teamListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.TextfQ,
                                                { color: theme.colors.error },
                                              ]}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {netProfitSyntax(
                                                teamListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNeutral(
                                            teamListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.Text_6Z,
                                                {
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                },
                                              ]}
                                            >
                                              {netProfitSyntax(
                                                teamListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valuePositive(
                                            teamListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color: theme.colors.good,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(teamListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNegative(
                                            teamListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color: theme.colors.error,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(teamListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNeutral(
                                            teamListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color:
                                                  theme.colors
                                                    .background_inverse,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(teamListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                      </>
                                    );
                                  }}
                                  contentContainerStyle={
                                    styles.FlatListQSContent
                                  }
                                  numColumns={1}
                                />
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                      </View>

                      <View style={styles.Viewca}>
                        <Touchable
                          onPress={() => {
                            try {
                              setToggleMostProfitableItem('Bet Types');
                              setToggleMostProfitableModal(true);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={styles.TouchablelV}
                        >
                          <Surface
                            style={[
                              styles.SurfaceGa,
                              {
                                borderRadius: 6,
                                backgroundColor: theme.colors.background,
                              },
                            ]}
                            elevation={1}
                          >
                            <View
                              style={[
                                styles.ViewIx,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderRadius: 6,
                                  borderColor: theme.colors.divider,
                                },
                              ]}
                              collapsable={false}
                            >
                              <View style={styles.ViewJp}>
                                <Text
                                  style={[
                                    styles.Texta2,
                                    { color: theme.colors.background_inverse },
                                  ]}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={1}
                                >
                                  {'Bet Type'}
                                </Text>
                                <FlatList
                                  data={returnMostProfitable(
                                    fetchData?.betTypes
                                  )}
                                  renderItem={({ item }) => {
                                    const betTypeListData = item;
                                    return (
                                      <>
                                        <Text
                                          style={[
                                            styles.TextbE,
                                            { color: theme.colors.light },
                                          ]}
                                          ellipsizeMode={'tail'}
                                          numberOfLines={1}
                                        >
                                          {capitalizeAllWords(
                                            betTypeListData?.name
                                          )}
                                        </Text>
                                        <>
                                          {!valuePositive(
                                            betTypeListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.TextV6,
                                                { color: theme.colors.good },
                                              ]}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {netProfitSyntax(
                                                betTypeListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNegative(
                                            betTypeListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={[
                                                styles.TextLB,
                                                { color: theme.colors.error },
                                              ]}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {netProfitSyntax(
                                                betTypeListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNeutral(
                                            betTypeListData?.netProfit
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color: theme.colors.strong,
                                              }}
                                            >
                                              {netProfitSyntax(
                                                betTypeListData?.netProfit
                                              )}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valuePositive(
                                            betTypeListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color: theme.colors.good,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(betTypeListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNegative(
                                            betTypeListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color: theme.colors.error,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(betTypeListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                        <>
                                          {!valueNeutral(
                                            betTypeListData?.roi
                                          ) ? null : (
                                            <Text
                                              style={{
                                                color:
                                                  theme.colors
                                                    .background_inverse,
                                              }}
                                              numberOfLines={1}
                                              ellipsizeMode={'tail'}
                                            >
                                              {roiSyntax(betTypeListData?.roi)}
                                              {' ROI'}
                                            </Text>
                                          )}
                                        </>
                                      </>
                                    );
                                  }}
                                  contentContainerStyle={
                                    styles.FlatList_7FContent
                                  }
                                  numColumns={1}
                                />
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                      </View>
                    </ScrollView>
                  </View>

                  <Modal
                    style={{ backgroundColor: theme.colors.background }}
                    visible={toggleMostProfitableModal}
                    animationType={'slide'}
                    presentationStyle={'pageSheet'}
                  >
                    <View
                      style={[
                        styles.Viewxa,
                        { backgroundColor: theme.colors.background },
                      ]}
                      pointerEvents={'auto'}
                    >
                      <Surface
                        style={[
                          styles.Surfaceqk,
                          { backgroundColor: theme.colors.background },
                        ]}
                        elevation={2}
                        elevation={2}
                      >
                        <View style={styles.ViewYh} pointerEvents={'auto'}>
                          <View style={[styles.View_26, { borderRadius: 0 }]}>
                            <Touchable
                              onPress={() => {
                                try {
                                  setToggleMostProfitableModal(false);
                                  setToggleMostProfitableItem('');
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View style={styles.ViewLU}>
                                <Icon
                                  name={'Ionicons/ios-chevron-back'}
                                  size={32}
                                  color={theme.colors.background_inverse}
                                />
                                <Text
                                  style={[
                                    styles.TextPV,
                                    { color: theme.colors.background_inverse },
                                  ]}
                                >
                                  {'Back'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>

                          <View style={styles.View_1b}>
                            <Text
                              style={[
                                styles.TextWv,
                                { color: theme.colors.background_inverse },
                              ]}
                            >
                              {'Most Profitable'}
                            </Text>

                            <Text
                              style={[
                                styles.Textpg,
                                { color: theme.colors.background_inverse },
                              ]}
                            >
                              {toggleMostProfitableItem}
                            </Text>
                          </View>
                          <View style={[styles.ViewtS, { borderRadius: 0 }]} />
                        </View>
                      </Surface>

                      <ScrollView
                        contentContainerStyle={styles.ScrollView_1yContent}
                        showsVerticalScrollIndicator={false}
                        bounces={true}
                      >
                        <View style={styles.ViewZ5} pointerEvents={'auto'}>
                          <>
                            {!mostProfitableLeaguesCompare(
                              toggleMostProfitableItem
                            ) ? null : (
                              <FlatList
                                data={fetchData?.leagues}
                                renderItem={({ item }) => {
                                  const leaguesListData = item;
                                  return (
                                    <Surface
                                      style={[
                                        styles.SurfaceWP,
                                        {
                                          backgroundColor: theme.colors.divider,
                                          borderRadius: 6,
                                        },
                                      ]}
                                      elevation={1}
                                    >
                                      <View pointerEvents={'auto'}>
                                        <Text
                                          style={[
                                            styles.TextTY,
                                            {
                                              color:
                                                theme.colors.background_inverse,
                                            },
                                          ]}
                                        >
                                          {leaguesListData?.name}
                                        </Text>
                                      </View>

                                      <View
                                        style={[
                                          styles.ViewdX,
                                          {
                                            borderRadius: 6,
                                            backgroundColor:
                                              theme.colors.divider,
                                          },
                                        ]}
                                      >
                                        <View
                                          style={styles.ViewaL}
                                          pointerEvents={'auto'}
                                        >
                                          <>
                                            {!valuePositive(
                                              leaguesListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.Texthp,
                                                  { color: theme.colors.good },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  leaguesListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  leaguesListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              leaguesListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.Textz0,
                                                  { color: theme.colors.error },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  leaguesListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  leaguesListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              leaguesListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.Text_3B,
                                                  {
                                                    color:
                                                      theme.colors
                                                        .background_inverse,
                                                  },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  leaguesListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  leaguesListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valuePositive(
                                              leaguesListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.good,
                                                }}
                                              >
                                                {'+'}
                                                {netProfitSyntax(
                                                  leaguesListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              leaguesListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.error,
                                                }}
                                              >
                                                {netProfitSyntax(
                                                  leaguesListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              leaguesListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                }}
                                              >
                                                {netProfitSyntax(
                                                  leaguesListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                        </View>

                                        <View
                                          style={styles.ViewdY}
                                          pointerEvents={'auto'}
                                        >
                                          <>
                                            {!valuePositive(
                                              leaguesListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.TextNw,
                                                  { color: theme.colors.good },
                                                ]}
                                              >
                                                {roiSyntax(
                                                  leaguesListData?.roi
                                                )}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              leaguesListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.error,
                                                }}
                                              >
                                                {roiSyntax(
                                                  leaguesListData?.roi
                                                )}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              leaguesListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                }}
                                              >
                                                {roiSyntax(
                                                  leaguesListData?.roi
                                                )}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <Text
                                            style={{
                                              color: theme.colors.light,
                                            }}
                                          >
                                            {leaguesListData?.wins}
                                            {'-'}
                                            {leaguesListData?.losses}
                                            {'-'}
                                            {leaguesListData?.pushes}{' '}
                                            {winPercentageSyntax(
                                              leaguesListData?.recordPercentage
                                            )}
                                          </Text>
                                        </View>
                                      </View>
                                    </Surface>
                                  );
                                }}
                                contentContainerStyle={styles.FlatListioContent}
                                numColumns={1}
                              />
                            )}
                          </>
                          <>
                            {!mostProfitableTeamsCompare(
                              toggleMostProfitableItem
                            ) ? null : (
                              <FlatList
                                data={fetchData?.teams}
                                renderItem={({ item }) => {
                                  const teamsListData = item;
                                  return (
                                    <Surface
                                      style={[
                                        styles.SurfacePQ,
                                        {
                                          backgroundColor: theme.colors.divider,
                                          borderRadius: 6,
                                        },
                                      ]}
                                      elevation={1}
                                    >
                                      <View pointerEvents={'auto'}>
                                        <Text
                                          style={[
                                            styles.Textk8,
                                            {
                                              color:
                                                theme.colors.background_inverse,
                                            },
                                          ]}
                                        >
                                          {teamsListData?.name}
                                        </Text>
                                      </View>

                                      <View
                                        style={styles.Viewwd}
                                        pointerEvents={'auto'}
                                      >
                                        <View
                                          style={styles.ViewdV}
                                          pointerEvents={'auto'}
                                        >
                                          <>
                                            {!valuePositive(
                                              teamsListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.TextTG,
                                                  { color: theme.colors.good },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  teamsListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  teamsListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              teamsListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.TextF2,
                                                  { color: theme.colors.error },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  teamsListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  teamsListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              teamsListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.Textay,
                                                  {
                                                    color:
                                                      theme.colors
                                                        .background_inverse,
                                                  },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  teamsListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  teamsListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valuePositive(
                                              teamsListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.good,
                                                }}
                                              >
                                                {'+'}
                                                {netProfitSyntax(
                                                  teamsListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              teamsListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.error,
                                                }}
                                              >
                                                {netProfitSyntax(
                                                  teamsListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              teamsListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                }}
                                              >
                                                {netProfitSyntax(
                                                  teamsListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                        </View>

                                        <View
                                          style={styles.ViewTy}
                                          pointerEvents={'auto'}
                                        >
                                          <>
                                            {!valuePositive(
                                              teamsListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.good,
                                                }}
                                              >
                                                {roiSyntax(teamsListData?.roi)}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              teamsListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.error,
                                                }}
                                              >
                                                {roiSyntax(teamsListData?.roi)}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              teamsListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                }}
                                              >
                                                {roiSyntax(teamsListData?.roi)}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <Text
                                            style={{
                                              color: theme.colors.light,
                                            }}
                                          >
                                            {teamsListData?.wins}
                                            {'-'}
                                            {teamsListData?.losses}
                                            {'-'}
                                            {teamsListData?.pushes}{' '}
                                            {winPercentageSyntax(
                                              teamsListData?.recordPercentage
                                            )}
                                          </Text>
                                        </View>
                                      </View>
                                    </Surface>
                                  );
                                }}
                                contentContainerStyle={styles.FlatListANContent}
                                numColumns={1}
                              />
                            )}
                          </>
                          <>
                            {!mostProfitableBetTypesCompare(
                              toggleMostProfitableItem
                            ) ? null : (
                              <FlatList
                                data={fetchData?.betTypes}
                                renderItem={({ item }) => {
                                  const betTypesListData = item;
                                  return (
                                    <Surface
                                      style={[
                                        styles.SurfaceFk,
                                        {
                                          borderRadius: 6,
                                          backgroundColor: theme.colors.divider,
                                        },
                                      ]}
                                      elevation={1}
                                    >
                                      <View pointerEvents={'auto'}>
                                        <Text
                                          style={[
                                            styles.Textym,
                                            {
                                              color:
                                                theme.colors.background_inverse,
                                            },
                                          ]}
                                        >
                                          {capitalizeAllWords(
                                            betTypesListData?.name
                                          )}
                                        </Text>
                                      </View>

                                      <View
                                        style={styles.Viewaz}
                                        pointerEvents={'auto'}
                                      >
                                        <View
                                          style={styles.ViewU0}
                                          pointerEvents={'auto'}
                                        >
                                          <>
                                            {!valuePositive(
                                              betTypesListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.Text_2g,
                                                  { color: theme.colors.good },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  betTypesListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  betTypesListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              betTypesListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.Text_4A,
                                                  { color: theme.colors.error },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  betTypesListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  betTypesListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              betTypesListData?.netProfit
                                            ) ? null : (
                                              <Text
                                                style={[
                                                  styles.Textt5,
                                                  {
                                                    color:
                                                      theme.colors
                                                        .background_inverse,
                                                  },
                                                ]}
                                              >
                                                {netProfitSyntax(
                                                  betTypesListData?.netProfit
                                                )}{' '}
                                                {unitSyntax(
                                                  betTypesListData?.netProfit
                                                )}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valuePositive(
                                              betTypesListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.good,
                                                }}
                                              >
                                                {'+'}
                                                {netProfitSyntax(
                                                  betTypesListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              betTypesListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.error,
                                                }}
                                              >
                                                {netProfitSyntax(
                                                  betTypesListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              betTypesListData?.winnings
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                }}
                                              >
                                                {netProfitSyntax(
                                                  betTypesListData?.winnings
                                                )}
                                                {' Won'}
                                              </Text>
                                            )}
                                          </>
                                        </View>

                                        <View
                                          style={styles.View_5t}
                                          pointerEvents={'auto'}
                                        >
                                          <>
                                            {!valuePositive(
                                              betTypesListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.good,
                                                }}
                                              >
                                                {roiSyntax(
                                                  betTypesListData?.roi
                                                )}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNegative(
                                              betTypesListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color: theme.colors.error,
                                                }}
                                              >
                                                {roiSyntax(
                                                  betTypesListData?.roi
                                                )}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <>
                                            {!valueNeutral(
                                              betTypesListData?.roi
                                            ) ? null : (
                                              <Text
                                                style={{
                                                  color:
                                                    theme.colors
                                                      .background_inverse,
                                                }}
                                              >
                                                {roiSyntax(
                                                  betTypesListData?.roi
                                                )}
                                                {' ROI'}
                                              </Text>
                                            )}
                                          </>
                                          <Text
                                            style={{
                                              color: theme.colors.light,
                                            }}
                                          >
                                            {betTypesListData?.wins}
                                            {'-'}
                                            {betTypesListData?.losses}
                                            {'-'}
                                            {betTypesListData?.pushes}{' '}
                                            {winPercentageSyntax(
                                              betTypesListData?.recordPercentage
                                            )}
                                          </Text>
                                        </View>
                                      </View>
                                    </Surface>
                                  );
                                }}
                                contentContainerStyle={styles.FlatListZWContent}
                                numColumns={1}
                              />
                            )}
                          </>
                        </View>
                      </ScrollView>
                    </View>
                  </Modal>
                </>
              );
            }}
          </SwaggerAPIApi.FetchGetMostProfitableGET>
        </View>

        <View>
          <View>
            <View style={styles.Viewjp} pointerEvents={'auto'}>
              <Text
                style={[
                  styles.Textn3,
                  { color: theme.colors.background_inverse },
                ]}
              >
                {'Grades'}
              </Text>
            </View>
          </View>

          <View style={styles.Viewlw} pointerEvents={'auto'}>
            <Surface
              style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }}
              elevation={1}
            >
              <View
                style={[
                  styles.ViewKE,
                  {
                    borderRadius: 6,
                    backgroundColor: theme.colors.divider,
                    borderColor: theme.colors.divider,
                  },
                ]}
              >
                <View pointerEvents={'auto'}>
                  <View style={styles.ViewCa} pointerEvents={'auto'}>
                    <SwaggerAPIApi.FetchGradesGET
                      dummy={Constants['updatedSportsBook']}
                      id={Constants['internalId']}
                    >
                      {({ loading, error, data, refetchGrades }) => {
                        const fetchData = data;
                        if (!fetchData || loading) {
                          return <ActivityIndicator />;
                        }

                        if (error) {
                          return (
                            <Text style={{ textAlign: 'center' }}>
                              There was a problem fetching this data
                            </Text>
                          );
                        }

                        return (
                          <View style={styles.ViewBx} pointerEvents={'auto'}>
                            <Touchable
                              onPress={() => {
                                try {
                                  setSendGrade(fetchData?.unitSizeConsistency);
                                  setSendGradeType('unitSizeConsistency');
                                  setGlobalVariableValue({
                                    key: 'toggleGradesModal',
                                    value: true,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={styles.ViewZ6}
                                pointerEvents={'auto'}
                              >
                                <>
                                  {!gradeColorGood(
                                    fetchData?.unitSizeConsistency
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.TextQT,
                                        { color: theme.colors.good },
                                      ]}
                                    >
                                      {gradeSyntax(
                                        fetchData?.unitSizeConsistency
                                      )}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!gradeColorFair(
                                    fetchData?.unitSizeConsistency
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.TexthK,
                                        { color: theme.colors.fair },
                                      ]}
                                    >
                                      {gradeSyntax(
                                        fetchData?.unitSizeConsistency
                                      )}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!gradeColorPoor(
                                    fetchData?.unitSizeConsistency
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.Textu8,
                                        { color: theme.colors.poor },
                                      ]}
                                    >
                                      {gradeSyntax(
                                        fetchData?.unitSizeConsistency
                                      )}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!gradeColorBad(
                                    fetchData?.unitSizeConsistency
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.Textre,
                                        { color: theme.colors.error },
                                      ]}
                                    >
                                      {gradeSyntax(
                                        fetchData?.unitSizeConsistency
                                      )}
                                    </Text>
                                  )}
                                </>
                              </View>
                            </Touchable>

                            <Touchable
                              onPress={() => {
                                try {
                                  setSendGrade(fetchData?.trapAvoidance);
                                  setSendGradeType('trapAvoidance');
                                  setGlobalVariableValue({
                                    key: 'toggleGradesModal',
                                    value: true,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View
                                style={styles.View_7o}
                                pointerEvents={'auto'}
                              >
                                <>
                                  {!gradeColorGood(
                                    fetchData?.trapAvoidance
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.Text_3u,
                                        { color: theme.colors.good },
                                      ]}
                                    >
                                      {gradeSyntax(fetchData?.trapAvoidance)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!gradeColorFair(
                                    fetchData?.trapAvoidance
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.Text_1H,
                                        { color: theme.colors.fair },
                                      ]}
                                    >
                                      {gradeSyntax(fetchData?.trapAvoidance)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!gradeColorPoor(
                                    fetchData?.trapAvoidance
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.Text_0c,
                                        { color: theme.colors.poor },
                                      ]}
                                    >
                                      {gradeSyntax(fetchData?.trapAvoidance)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!gradeColorBad(
                                    fetchData?.trapAvoidance
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.Textqh,
                                        { color: theme.colors.error },
                                      ]}
                                    >
                                      {gradeSyntax(fetchData?.trapAvoidance)}
                                    </Text>
                                  )}
                                </>
                              </View>
                            </Touchable>
                          </View>
                        );
                      }}
                    </SwaggerAPIApi.FetchGradesGET>
                  </View>

                  <View style={styles.Viewmk} pointerEvents={'auto'}>
                    <View style={styles.ViewPr} pointerEvents={'auto'}>
                      <Text
                        style={[styles.TextVB, { color: theme.colors.light }]}
                      >
                        {'Unit Size Consistency'}
                      </Text>
                    </View>

                    <View style={styles.View_1I} pointerEvents={'auto'}>
                      <Text
                        style={[styles.Textp5, { color: theme.colors.light }]}
                      >
                        {'Trap Avoidance'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Surface>
          </View>
        </View>

        <Modal
          visible={Constants['toggleGradesModal']}
          animationType={'slide'}
          presentationStyle={'pageSheet'}
          transparent={true}
        >
          <Touchable
            onPress={() => {
              try {
                setGlobalVariableValue({
                  key: 'toggleGradesModal',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableAz}
          />
          <View
            style={[
              styles.Viewzs,
              { backgroundColor: theme.colors.background, borderRadius: 10 },
            ]}
            pointerEvents={'auto'}
          >
            <View pointerEvents={'auto'}>
              <View style={styles.ViewSx} pointerEvents={'auto'}>
                <View style={styles.View_8d} pointerEvents={'auto'}>
                  <Touchable
                    onPress={() => {
                      try {
                        setGlobalVariableValue({
                          key: 'toggleGradesModal',
                          value: false,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View style={styles.ViewtH}>
                      <Icon
                        name={'Ionicons/ios-chevron-back'}
                        size={32}
                        color={theme.colors.background_inverse}
                      />
                      <Text
                        style={[
                          styles.Textml,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'Back'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
                <View style={styles.ViewBN} pointerEvents={'auto'} />
                <View style={styles.ViewRg} pointerEvents={'auto'} />
              </View>

              <View style={styles.Viewg5} pointerEvents={'auto'}>
                <View style={styles.View_4V} pointerEvents={'auto'}>
                  <View style={styles.ViewEg} pointerEvents={'auto'}>
                    <View
                      style={[
                        styles.ViewAG,
                        { borderRadius: 6, borderColor: theme.colors.light },
                      ]}
                      pointerEvents={'auto'}
                    >
                      <>
                        {!gradeColorGood(sendGrade) ? null : (
                          <Text
                            style={[
                              styles.Text_7d,
                              { color: theme.colors.good },
                            ]}
                          >
                            {gradeSyntax(sendGrade)}
                          </Text>
                        )}
                      </>
                      <>
                        {!gradeColorFair(sendGrade) ? null : (
                          <Text
                            style={[
                              styles.TextWf,
                              { color: theme.colors.fair },
                            ]}
                          >
                            {gradeSyntax(sendGrade)}
                          </Text>
                        )}
                      </>
                      <>
                        {!gradeColorPoor(sendGrade) ? null : (
                          <Text
                            style={[
                              styles.TextAX,
                              { color: theme.colors.poor },
                            ]}
                          >
                            {gradeSyntax(sendGrade)}
                          </Text>
                        )}
                      </>
                      <>
                        {!gradeColorBad(sendGrade) ? null : (
                          <Text
                            style={[
                              styles.TextRi,
                              { color: theme.colors.error },
                            ]}
                          >
                            {gradeSyntax(sendGrade)}
                          </Text>
                        )}
                      </>
                      <>
                        {!gradeColorNull(sendGrade) ? null : (
                          <Text
                            style={[
                              styles.Textfu,
                              { color: theme.colors.background_inverse },
                            ]}
                          >
                            {gradeSyntax(sendGrade)}
                          </Text>
                        )}
                      </>
                    </View>
                  </View>
                  <>
                    {!compareGradeUnitSizeConsistency(sendGradeType) ? null : (
                      <View style={styles.VieweA} pointerEvents={'auto'}>
                        <Text
                          style={[
                            styles.TextNW,
                            { color: theme.colors.background_inverse },
                          ]}
                        >
                          {'Unit Size Consistency'}
                        </Text>

                        <Text
                          style={[
                            styles.TextXL,
                            { color: theme.colors.background_inverse },
                          ]}
                        >
                          {
                            'This grade is based on your average wager amount and how much you deviate from it. Consistent wager sizes play a large part in your overall performance.'
                          }
                        </Text>
                      </View>
                    )}
                  </>
                  <>
                    {!compareGradeLeagueConsistency(sendGradeType) ? null : (
                      <View style={styles.View_6R} pointerEvents={'auto'}>
                        <Text
                          style={[
                            styles.Textjr,
                            { color: theme.colors.background_inverse },
                          ]}
                        >
                          {'League Consistency'}
                        </Text>

                        <Text
                          style={[
                            styles.TextTI,
                            { color: theme.colors.background_inverse },
                          ]}
                        >
                          {'This grade is coming soon!'}
                        </Text>
                      </View>
                    )}
                  </>
                  <>
                    {!compareGradeTrapAvoidance(sendGradeType) ? null : (
                      <View style={styles.ViewhP} pointerEvents={'auto'}>
                        <Text
                          style={[
                            styles.TextTF,
                            { color: theme.colors.background_inverse },
                          ]}
                        >
                          {'Trap Avoidance'}
                        </Text>

                        <Text
                          style={[
                            styles.Textqc,
                            { color: theme.colors.background_inverse },
                          ]}
                        >
                          {
                            'This grade is based on your tendency to avoid the trap of chasing your losses. It factors in abnormally large bets you place after a losing period.'
                          }
                        </Text>
                      </View>
                    )}
                  </>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.View_4e,
                { backgroundColor: theme.colors.background },
              ]}
              pointerEvents={'auto'}
            />
          </View>
        </Modal>

        <View pointerEvents={'auto'}>
          <View style={styles.ViewII} pointerEvents={'auto'}>
            <Text
              style={[
                styles.Text_4n,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'Promotions'}
            </Text>
          </View>

          <View style={styles.Viewsd} pointerEvents={'auto'}>
            <ScrollView
              contentContainerStyle={styles.ScrollViewp7Content}
              showsVerticalScrollIndicator={false}
              bounces={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={[styles.Viewu1, { borderRadius: 6 }]}
                pointerEvents={'auto'}
              >
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://prizepicks.com/welcome?invite_code=vault'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[styles.Touchable_5b, { borderRadius: 6 }]}
                >
                  <Surface
                    style={[
                      styles.SurfaceZv,
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: 6,
                      },
                    ]}
                  >
                    <View
                      style={[styles.View_78, { borderRadius: 6 }]}
                      pointerEvents={'auto'}
                    >
                      <Image
                        style={styles.ImageLy}
                        source={Images.PromoGraphics}
                        resizeMode={'cover'}
                      />
                    </View>
                  </Surface>
                </Touchable>
              </View>

              <View
                style={[styles.ViewhY, { borderRadius: 6 }]}
                pointerEvents={'auto'}
              >
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1666694'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[styles.Touchablesr, { borderRadius: 6 }]}
                >
                  <Surface
                    style={[
                      styles.SurfacevI,
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: 6,
                      },
                    ]}
                  >
                    <View
                      style={[styles.ViewZf, { borderRadius: 6 }]}
                      pointerEvents={'auto'}
                    >
                      <Image
                        style={styles.ImageFU}
                        source={Images.dollar600RiskFreeBet}
                        resizeMode={'cover'}
                      />
                    </View>
                  </Surface>
                </Touchable>
              </View>

              <View
                style={[styles.ViewJJ, { borderRadius: 6 }]}
                pointerEvents={'auto'}
              >
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://wlkindred.adsrv.eacdn.com/C.ashx?btag=a_2165b_334c_&affid=76&siteid=2165&adid=334&c=[acid]'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[styles.Touchable_1E, { borderRadius: 6 }]}
                >
                  <Surface
                    style={[
                      styles.SurfaceKP,
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: 6,
                      },
                    ]}
                  >
                    <View
                      style={[styles.Viewrs, { borderRadius: 6 }]}
                      pointerEvents={'auto'}
                    >
                      <Image
                        style={styles.ImageeE}
                        source={Images.PromoGraphics2}
                        resizeMode={'cover'}
                      />
                    </View>
                  </Surface>
                </Touchable>
              </View>

              <View
                style={[styles.ViewUy, { borderRadius: 6 }]}
                pointerEvents={'auto'}
              >
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://winview.onelink.me/2157567806/f08b653'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[styles.TouchableUs, { borderRadius: 6 }]}
                >
                  <Surface
                    style={[
                      styles.Surfacegh,
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: 6,
                      },
                    ]}
                  >
                    <View
                      style={[styles.ViewTO, { borderRadius: 6 }]}
                      pointerEvents={'auto'}
                    >
                      <Image
                        style={styles.ImageoM}
                        source={Images.WinViewSquare}
                        resizeMode={'cover'}
                      />
                    </View>
                  </Surface>
                </Touchable>
              </View>

              <View
                style={[styles.View_4x, { borderRadius: 6 }]}
                pointerEvents={'auto'}
              >
                <Touchable
                  onPress={async () => {
                    try {
                      await WebBrowser.openBrowserAsync(
                        'https://www.vaultsportshq.com/betrivers'
                      );
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[styles.Touchableub, { borderRadius: 6 }]}
                >
                  <Surface
                    style={[
                      styles.Surfacevq,
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: 6,
                      },
                    ]}
                  >
                    <View
                      style={[styles.Viewtb, { borderRadius: 6 }]}
                      pointerEvents={'auto'}
                    >
                      <Image
                        style={styles.Image_61}
                        source={Images.dollar250BonusMatch}
                        resizeMode={'cover'}
                      />
                    </View>
                  </Surface>
                </Touchable>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewG7: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    height: 50,
  },
  ViewuI: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '33%',
  },
  Imageoe: {
    opacity: 1,
    height: 50,
    width: 125,
  },
  Viewi2: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  ViewXA: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  View_6u: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '33%',
  },
  ViewC5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View_0z: {
    justifyContent: 'center',
  },
  TextCh: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
    marginRight: 3,
  },
  FetchAS: {
    minHeight: 40,
  },
  View_1F: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Texte3: {
    fontSize: 12,
    marginTop: 10,
  },
  TextInputtp: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  IconButtonmE: {
    marginLeft: 6,
  },
  Viewk0: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  ViewnW: {
    flex: 1,
  },
  View_52: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: '4%',
    paddingRight: '4%',
    flexDirection: 'row',
  },
  Imagebs: {
    width: '100%',
    height: '100%',
  },
  ViewWD: {
    alignItems: 'center',
    width: 375,
    height: 1000,
  },
  ScrollViewfmContent: {
    alignItems: 'center',
  },
  ViewpO: {
    paddingBottom: 150,
  },
  Icon_5s: {
    marginRight: 6,
  },
  Text_7v: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 16,
  },
  Textxx: {
    fontSize: 12,
  },
  ViewCz: {
    flex: 1,
    marginRight: 6,
  },
  FetchDD: {
    minHeight: 40,
  },
  ViewmD: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  Imagev3: {
    width: '100%',
    height: '100%',
  },
  Viewr4: {
    alignItems: 'center',
    width: 375,
    height: 1000,
  },
  ScrollViewzCContent: {
    alignItems: 'center',
  },
  ViewDC: {
    paddingBottom: 125,
  },
  TextjF: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_43: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textzu: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewVl: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text_0x: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textu3: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Texth7: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Text_51: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextjJ: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  TextdM: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewJu: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextV1: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_4p: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_9A: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  View_9n: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewjm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 30,
  },
  Fetchyz: {
    minHeight: 40,
  },
  Viewec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Textut: {
    fontSize: 12,
  },
  View_56: {
    width: '33%',
    alignItems: 'center',
  },
  TextOL: {
    fontSize: 12,
  },
  View_00: {
    width: '33%',
    alignItems: 'center',
  },
  Textjo: {
    fontSize: 12,
  },
  Viewti: {
    width: '33%',
    alignItems: 'center',
  },
  ViewU6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    width: '100%',
  },
  ViewhW: {
    marginTop: 14,
  },
  TextXg: {
    fontSize: 12,
    marginRight: 3,
  },
  ViewHk: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    marginLeft: 3,
    marginBottom: 3,
    justifyContent: 'flex-end',
  },
  ViewwM: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Viewgh: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 18,
    paddingBottom: 12,
  },
  TextZv: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewab: {
    opacity: 1,
    marginTop: 28,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewwb: {
    minHeight: 50,
  },
  TextI9: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textpd: {
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 16,
    fontSize: 16,
  },
  TextSy: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextWX: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextOE: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  FlatListbiContent: {
    flex: 1,
  },
  Viewen: {
    flex: 1,
  },
  ViewtK: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 175,
    height: '100%',
  },
  SurfaceDr: {
    flex: 1,
  },
  TouchablegJ: {
    maxWidth: 175,
  },
  ViewMY: {
    minHeight: 50,
    flexDirection: 'row',
    marginRight: 12,
    maxWidth: 175,
  },
  TextxD: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextP1: {
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 16,
    fontSize: 16,
  },
  Text_66: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextfQ: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Text_6Z: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  FlatListQSContent: {
    flex: 1,
  },
  ViewaJ: {
    flex: 1,
  },
  ViewP3: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 175,
    height: '100%',
  },
  SurfaceY5: {
    flex: 1,
  },
  Touchablebs: {
    maxWidth: 175,
  },
  View_9a: {
    minHeight: 50,
    flexDirection: 'row',
    marginRight: 12,
    maxWidth: 175,
  },
  TextHK: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewcT: {
    flex: 1,
  },
  ViewQy: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 175,
    height: '100%',
  },
  Surface_9G: {
    flex: 1,
  },
  TouchablecL: {
    maxWidth: 175,
  },
  ViewPX: {
    minHeight: 50,
    flexDirection: 'row',
    marginRight: 12,
    maxWidth: 175,
  },
  Texta2: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextbE: {
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 16,
    fontSize: 16,
  },
  TextV6: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextLB: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  FlatList_7FContent: {
    flex: 1,
  },
  ViewJp: {
    flex: 1,
  },
  ViewIx: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 175,
    height: '100%',
  },
  SurfaceGa: {
    flex: 1,
  },
  TouchablelV: {
    maxWidth: 175,
  },
  Viewca: {
    minHeight: 50,
    flexDirection: 'row',
    marginRight: 12,
    maxWidth: 175,
  },
  Texth7: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextA4: {
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 16,
    fontSize: 16,
  },
  Textmc: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewbn: {
    flex: 1,
  },
  Viewef: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 175,
    height: '100%',
  },
  SurfacehE: {
    flex: 1,
  },
  Touchable_49: {
    maxWidth: 175,
  },
  ViewZB: {
    minHeight: 50,
    flexDirection: 'row',
    marginRight: 12,
    maxWidth: 175,
  },
  ScrollViewxtContent: {
    marginTop: 6,
    paddingBottom: 6,
    paddingLeft: '4%',
  },
  ViewHo: {
    marginTop: 4,
  },
  TextPV: {
    fontSize: 18,
  },
  ViewLU: {
    alignItems: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    height: 65,
  },
  View_26: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '25%',
  },
  TextWv: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Textpg: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  View_1b: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
  },
  ViewtS: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '25%',
  },
  ViewYh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Surfaceqk: {
    minHeight: 40,
  },
  TextTY: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Texthp: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textz0: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_3B: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewaL: {
    width: '60%',
    alignItems: 'flex-start',
  },
  TextNw: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '400',
  },
  ViewdY: {
    width: '37%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  ViewdX: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  SurfaceWP: {
    marginBottom: 6,
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  FlatListioContent: {
    flex: 1,
  },
  Textk8: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextTG: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  TextF2: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Textay: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewdV: {
    alignItems: 'flex-start',
    width: '60%',
  },
  ViewTy: {
    justifyContent: 'flex-end',
    width: '37%',
    alignItems: 'flex-end',
  },
  Viewwd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  SurfacePQ: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    marginBottom: 6,
  },
  FlatListANContent: {
    flex: 1,
  },
  Textym: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_2g: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_4A: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textt5: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewU0: {
    width: '60%',
    alignItems: 'flex-start',
  },
  View_5t: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '37%',
  },
  Viewaz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  SurfaceFk: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    marginBottom: 6,
  },
  FlatListZWContent: {
    flex: 1,
  },
  ViewZ5: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 6,
  },
  ScrollView_1yContent: {
    paddingTop: 12,
    paddingBottom: 22,
  },
  Viewxa: {
    height: '100%',
  },
  FetchaS: {
    minHeight: 40,
  },
  View_9d: {
    minHeight: 50,
  },
  TextyW: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_62: {
    marginLeft: '4%',
    marginTop: 22,
    marginRight: '4%',
  },
  IconKM: {
    marginBottom: 10,
  },
  TextTm: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 6,
  },
  TextZp: {
    fontSize: 12,
    textAlign: 'center',
  },
  FlatListy1Content: {
    flex: 1,
    alignItems: 'center',
  },
  ViewAz: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewmS: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    flexDirection: 'row',
    width: 250,
    height: '100%',
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  Surfacekb: {
    flex: 1,
  },
  TouchableCH: {
    maxWidth: 250,
  },
  ViewPh: {
    maxWidth: 250,
    marginRight: 12,
    minHeight: 50,
    flexDirection: 'row',
  },
  IcontX: {
    marginBottom: 10,
  },
  Textpo: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 6,
  },
  TextiL: {
    fontSize: 12,
    textAlign: 'center',
  },
  FlatList_09Content: {
    flex: 1,
    alignItems: 'center',
  },
  ViewbG: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewR4: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    flexDirection: 'row',
    width: 250,
    height: '100%',
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  SurfaceKa: {
    flex: 1,
  },
  TouchableSJ: {
    maxWidth: 250,
  },
  ViewZU: {
    maxWidth: 250,
    marginRight: 12,
    minHeight: 50,
    flexDirection: 'row',
  },
  IconCu: {
    marginBottom: 10,
  },
  TextZD: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 6,
  },
  Textt9: {
    fontSize: 12,
    textAlign: 'center',
  },
  FlatList_4gContent: {
    flex: 1,
    alignItems: 'center',
  },
  ViewnF: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewQd: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    flexDirection: 'row',
    width: 250,
    height: '100%',
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
  },
  SurfaceBO: {
    flex: 1,
  },
  TouchableDn: {
    maxWidth: 250,
  },
  Viewsg: {
    maxWidth: 250,
    marginRight: 12,
    minHeight: 50,
    flexDirection: 'row',
  },
  ScrollViewbUContent: {
    paddingLeft: '4%',
    marginTop: 6,
    paddingBottom: 6,
  },
  ViewCC: {
    marginTop: 4,
  },
  Textc0: {
    fontSize: 18,
  },
  View_98: {
    paddingRight: 16,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewjB: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '25%',
  },
  Text_8i: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Viewb2: {
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewve: {
    width: '25%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ViewkL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Surfacev3: {
    minHeight: 40,
  },
  Viewbm: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 6,
  },
  Textwy: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextDG: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextJp: {
    fontSize: 12,
  },
  TextoR: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextUJ: {
    fontSize: 12,
  },
  TextqV: {
    fontSize: 12,
  },
  View_2N: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  ViewEX: {
    flex: 1,
  },
  SurfacehF: {
    marginBottom: 6,
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    flexDirection: 'row',
  },
  FlatList_2BContent: {
    flex: 1,
  },
  ViewtR: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 6,
  },
  TextQE: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textrq: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextL8: {
    fontSize: 12,
  },
  TextB0: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Textfj: {
    fontSize: 12,
  },
  TextRb: {
    fontSize: 12,
  },
  ViewR0: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  ViewCk: {
    flex: 1,
  },
  Surfacefd: {
    marginBottom: 6,
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    flexDirection: 'row',
  },
  FlatListlEContent: {
    flex: 1,
  },
  Viewzp: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 6,
  },
  TextBS: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Textht: {
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextLM: {
    fontSize: 12,
  },
  Text_9M: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '400',
  },
  Textxu: {
    fontSize: 12,
  },
  TextHP: {
    fontSize: 12,
  },
  Viewzm: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  Viewyc: {
    flex: 1,
  },
  SurfaceUj: {
    marginBottom: 6,
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    flexDirection: 'row',
  },
  FlatListrMContent: {
    flex: 1,
  },
  ViewbQ: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 6,
  },
  ScrollViewOsContent: {
    paddingTop: 12,
    paddingBottom: 22,
  },
  ViewFi: {
    height: '100%',
  },
  Fetchq4: {
    minHeight: 40,
  },
  Textn3: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewjp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '4%',
    marginRight: 4,
    marginTop: 22,
  },
  TextQT: {
    fontSize: 40,
    textAlign: 'center',
  },
  TexthK: {
    fontSize: 40,
    textAlign: 'center',
  },
  Textu8: {
    fontSize: 40,
    textAlign: 'center',
  },
  Textre: {
    fontSize: 40,
    textAlign: 'center',
  },
  ViewZ6: {
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },
  Text_31: {
    fontSize: 40,
    textAlign: 'center',
  },
  Viewg5: {
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },
  Text_3u: {
    fontSize: 40,
    textAlign: 'center',
  },
  Text_1H: {
    fontSize: 40,
    textAlign: 'center',
  },
  Text_0c: {
    fontSize: 40,
    textAlign: 'center',
  },
  Textqh: {
    fontSize: 40,
    textAlign: 'center',
  },
  View_7o: {
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },
  ViewBx: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  FetchAe: {
    minHeight: 40,
  },
  ViewCa: {
    height: 52,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextVB: {
    textAlign: 'center',
    fontSize: 11,
  },
  ViewPr: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textlb: {
    textAlign: 'center',
    fontSize: 11,
  },
  Viewd2: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textp5: {
    fontSize: 11,
    textAlign: 'center',
  },
  View_1I: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Viewmk: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  ViewKE: {
    paddingLeft: 24,
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Viewlw: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 10,
  },
  TouchableAz: {
    height: '65%',
  },
  Textml: {
    fontSize: 18,
  },
  ViewtH: {
    alignItems: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    height: 50,
  },
  View_8d: {
    width: '25%',
  },
  ViewBN: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  ViewRg: {
    width: '25%',
    width: 25,
  },
  ViewSx: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text_7d: {
    fontSize: 50,
  },
  TextWf: {
    fontSize: 50,
  },
  TextAX: {
    fontSize: 50,
  },
  TextRi: {
    fontSize: 50,
  },
  Textfu: {
    fontSize: 50,
  },
  ViewAG: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingTop: 6,
    paddingRight: 6,
    paddingBottom: 6,
    minWidth: 70,
  },
  ViewEg: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    marginRight: 8,
  },
  TextNW: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
  },
  TextXL: {
    marginTop: 3,
  },
  VieweA: {
    flex: 1,
  },
  Textjr: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
  },
  TextTI: {
    marginTop: 3,
  },
  View_6R: {
    flex: 1,
  },
  TextTF: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
  },
  Textqc: {
    marginTop: 3,
  },
  ViewhP: {
    flex: 1,
  },
  View_4V: {
    flexDirection: 'row',
  },
  Viewg5: {
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  View_4e: {
    height: 11,
  },
  Viewzs: {
    height: '35%',
    justifyContent: 'space-between',
  },
  Text_4n: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewII: {
    paddingTop: 28,
    paddingRight: '4%',
    paddingLeft: '4%',
  },
  ImageLy: {
    width: 300,
    height: 300,
  },
  View_78: {
    width: 300,
    height: 300,
    overflow: 'hidden',
  },
  SurfaceZv: {
    flex: 1,
    width: 300,
    height: 300,
  },
  Touchable_5b: {
    width: 300,
    height: 300,
  },
  Viewu1: {
    flexDirection: 'row',
    marginRight: 12,
  },
  ImageFU: {
    width: 300,
    height: 300,
  },
  ViewZf: {
    width: 300,
    height: 300,
    overflow: 'hidden',
  },
  SurfacevI: {
    flex: 1,
    width: 300,
    height: 300,
  },
  Touchablesr: {
    width: 300,
    height: 300,
  },
  ViewhY: {
    flexDirection: 'row',
    marginRight: 12,
  },
  ImageeE: {
    width: 300,
    height: 300,
  },
  Viewrs: {
    width: 300,
    height: 300,
    overflow: 'hidden',
  },
  SurfaceKP: {
    flex: 1,
    width: 300,
    height: 300,
  },
  Touchable_1E: {
    width: 300,
    height: 300,
  },
  ViewJJ: {
    flexDirection: 'row',
    marginRight: 12,
  },
  ImageoM: {
    width: 300,
    height: 300,
  },
  ViewTO: {
    width: 300,
    height: 300,
    overflow: 'hidden',
  },
  Surfacegh: {
    flex: 1,
    width: 300,
    height: 300,
  },
  TouchableUs: {
    width: 300,
    height: 300,
  },
  ViewUy: {
    flexDirection: 'row',
    marginRight: 12,
  },
  Image_61: {
    width: 300,
    height: 300,
  },
  Viewtb: {
    width: 300,
    height: 300,
    overflow: 'hidden',
  },
  Surfacevq: {
    flex: 1,
    width: 300,
    height: 300,
  },
  Touchableub: {
    width: 300,
    height: 300,
  },
  View_4x: {
    flexDirection: 'row',
    marginRight: 12,
  },
  ScrollViewp7Content: {
    marginTop: 6,
    paddingLeft: '4%',
    paddingBottom: 6,
  },
  Viewsd: {
    marginTop: 4,
    marginBottom: 28,
  },
  TextAB: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewMi: {
    opacity: 1,
    marginTop: 28,
    marginLeft: '4%',
    marginRight: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ViewUh: {
    alignContent: 'center',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text_8W: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextDd: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_3Z: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextQU: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewHa: {
    flex: 1,
  },
  Viewwy: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewD2: {
    marginLeft: '4%',
    marginTop: 6,
    marginRight: '4%',
  },
  Viewas: {
    minHeight: 50,
    paddingBottom: 18,
  },
  ButtonOutlineFG: {
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minWidth: 250,
  },
  ButtonOutlinezA: {
    backgroundColor: 'transparent',
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minWidth: 250,
    marginTop: 10,
  },
  ButtonOutline_4Z: {
    backgroundColor: 'transparent',
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minWidth: 250,
    marginTop: 10,
  },
  ViewwV: {
    marginBottom: 28,
  },
  Vieww2: {
    alignItems: 'center',
    marginTop: 56,
  },
});

export default withTheme(DashboardScreen);
