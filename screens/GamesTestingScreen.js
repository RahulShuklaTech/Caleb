import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const GamesTestingScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const getLeague = x => {
    return x[0];
  };

  const getBetType = x => {
    return x[1];
  };

  const typeMoneylineCompare = x => {
    return x === 'h2h';
  };

  const bestOddsMoneylineAway = x => {
    let arr = [4, 5, 6, 7, 8, 9, 10];
    temp = 0;

    arr.forEach(element => {
      if (temp < element) {
        temp = element;
      }
    });
  };

  const { theme } = props;

  return (
    <ScreenContainer>
      <View
        style={[styles.Viewfa, { backgroundColor: theme.colors.fair }]}
        pointerEvents={'auto'}
      />
      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <SwaggerAPIApi.FetchOddsDataGET
          betType={getBetType(Constants['oddsDisplayed'])}
          sport={getLeague(Constants['oddsDisplayed'])}
        >
          {({ loading, error, data, refetchOddsData }) => {
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
              <View style={styles.ViewOM} pointerEvents={'auto'}>
                <View pointerEvents={'auto'}>
                  <FlatList
                    data={fetchData}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable>
                          <View
                            style={[
                              styles.ViewNH,
                              { backgroundColor: theme.colors.divider },
                            ]}
                            pointerEvents={'auto'}
                          >
                            <Text
                              style={[
                                styles.Textqm,
                                { color: theme.colors.light },
                              ]}
                            >
                              {listData?.startTime}
                            </Text>

                            <Text style={{ color: theme.colors.error }}>
                              {listData?.awayTeam}
                            </Text>

                            <Text style={{ color: theme.colors.good }}>
                              {listData?.homeTeam}
                            </Text>
                          </View>
                        </Touchable>
                      );
                    }}
                    contentContainerStyle={styles.FlatListczContent}
                    numColumns={1}
                  />
                </View>

                <ScrollView
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                  horizontal={true}
                >
                  <FlatList
                    data={fetchData}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <View pointerEvents={'auto'}>
                          <>
                            {!typeMoneylineCompare(listData?.betType) ? null : (
                              <FlatList
                                data={listData?.bookmakers}
                                renderItem={({ item }) => {
                                  const listMoneylineData = item;
                                  return (
                                    <View
                                      style={styles.View_6U}
                                      pointerEvents={'auto'}
                                    >
                                      <Text
                                        style={[
                                          styles.Textjh,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {listMoneylineData?.cleansedTitle}
                                      </Text>

                                      <View
                                        style={styles.Viewx7}
                                        pointerEvents={'auto'}
                                      >
                                        <Text
                                          style={{ color: theme.colors.error }}
                                        >
                                          {
                                            listMoneylineData?.awayTeamOddsAmerican
                                          }
                                        </Text>
                                        <Icon
                                          name={'FontAwesome/photo'}
                                          size={14}
                                        />
                                      </View>

                                      <View
                                        style={styles.Viewh3}
                                        pointerEvents={'auto'}
                                      >
                                        <Text
                                          style={{ color: theme.colors.good }}
                                        >
                                          {
                                            listMoneylineData?.homeTeamOddsAmerican
                                          }
                                        </Text>
                                        <Icon
                                          name={'FontAwesome/photo'}
                                          size={14}
                                        />
                                      </View>
                                    </View>
                                  );
                                }}
                                contentContainerStyle={
                                  styles.FlatList_6jContent
                                }
                                numColumns={1}
                                horizontal={true}
                              />
                            )}
                          </>
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatList_6sContent}
                    numColumns={1}
                  />
                </ScrollView>
              </View>
            );
          }}
        </SwaggerAPIApi.FetchOddsDataGET>
        <Divider style={styles.DividerWU} color={theme.colors.divider} />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewfa: {
    height: 50,
  },
  Textqm: {
    fontSize: 10,
  },
  ViewNH: {
    marginBottom: 20,
  },
  FlatListczContent: {
    flex: 1,
  },
  Textjh: {
    fontSize: 10,
  },
  Viewx7: {
    flexDirection: 'row',
  },
  Viewh3: {
    flexDirection: 'row',
  },
  View_6U: {
    marginBottom: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  FlatList_6jContent: {
    flex: 1,
  },
  FlatList_6sContent: {
    flex: 1,
  },
  ViewOM: {
    flexDirection: 'row',
  },
  Fetchfb: {
    minHeight: 40,
  },
  DividerWU: {
    height: 1,
  },
});

export default withTheme(GamesTestingScreen);
