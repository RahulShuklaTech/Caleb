import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonOutline,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused, useScrollToTop } from '@react-navigation/native';
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

const BankrollNetProfitScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const scrollToTop = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.
    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
    // find info here: https://spin.atomicobject.com/2021/04/20/react-native-building-scroll-top-button/
  };

  const valueNeutral = x => {
    return Number(x) == 0;
  };

  const goToTop = () => {
    /*goToTop = () => {
this.scroll.scrollTo({x: 0, y: 0, animated: true});
}*/

    const ref = React.useRef(null);
    useScrollToTop(ref);
  };

  const newBookSynced = book => {
    return book.length === 0;

    //Set variable
    //Need to make this so it's true if an additional book is added!
  };

  const checkEarlyAccessCode = x => {
    return x !== 'V7XyG' ? true : false;
  };

  const userSelectedSportsbook = accountId => {
    return Constants.selectedSportsbook == accountId;
  };

  const dateRefreshed = betRefreshRequested => {
    const t1 = new Date(betRefreshRequested).getTime();
    const t2 = new Date().getTime();
    const diffSec = (t2 - t1) / 1000;
    if (diffSec > 0) {
      const d = diffSec / (3600 * 24);
      const h = diffSec / 3600;
      const m = diffSec / 60;
      const s = diffSec;
      if (d >= 1) {
        return parseInt(d) + 'd';
      }
      if (h >= 1) {
        return parseInt(h) + 'h';
      }
      if (m >= 1) {
        return parseInt(m) + 'm';
      }
      if (s > 0) {
        return parseInt(s) + 's';
      }
    } else {
      return 0 + 's';
    }
  };

  const bookRegionSyntax = abbr => {
    return abbr == null ? '' : ' (' + abbr.toUpperCase() + ')';
  };

  const addOne = data => {
    let x = data + 1;
    console.log('x:' + x);
    return x;
  };

  const valueNegative = x => {
    return Number(x) < 0;
  };

  const promptResyncBook = x => {
    const t1 = new Date(x.betRefreshRequested).getTime();
    const t2 = new Date().getTime();
    const diffSec = (t2 - t1) / 1000;

    return diffSec / (3600 * 24) >= 2 ||
      x.latestRefreshResponse.status == 401 ||
      x.latestRefreshResponse.status == 403 ||
      x.latestRefreshResponse.status == 500
      ? true
      : false;
  };

  const valuePositive = x => {
    return Number(x) > 0;
  };

  const bookStatus = latestRefreshResponse => {
    return latestRefreshResponse == 403 || latestRefreshResponse == 500;
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

  const orderBooks = balance => {
    balance.sort((a, b) => (a.balance < b.balance ? 1 : -1));
    return balance;
  };

  const balanceSyntax = x => {
    //return "$" + ((balance/100).toFixed(2));

    return x < 0
      ? '-$' + Math.abs(x / 100).toFixed(2)
      : '$' + Math.abs(x / 100).toFixed(2);
  };

  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [dummy, setDummy] = React.useState(0);
  const [sportsbooksSynced, setSportsbooksSynced] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

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
        <View style={[styles.Viewuw, { borderRadius: 0 }]}>
          <View style={styles.ViewwU} pointerEvents={'auto'}>
            <View style={[styles.ViewjJ, { borderRadius: 0 }]}>
              <>
                {Constants['waitlisted'] ? null : (
                  <Touchable
                    onPress={() => {
                      try {
                        navigation.navigate('SharpSportsFormScreen');
                        setDummy(addOne(dummy));
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View style={styles.ViewqG}>
                      <Icon
                        name={'Ionicons/ios-add-circle'}
                        size={28}
                        color={theme.colors.light}
                      />
                    </View>
                  </Touchable>
                )}
              </>
            </View>

            <View style={styles.ViewFd}>
              <Image
                style={styles.ImageCE}
                resizeMode={'contain'}
                source={Images.VaultLogoLightFontClearBackground}
              />
            </View>
            <View style={[styles.ViewU0, { borderRadius: 0 }]} />
          </View>
        </View>
      </Surface>
      <>
        {!Constants['waitlisted'] ? null : (
          <View style={styles.ViewJq} pointerEvents={'auto'}>
            <View
              style={[styles.ViewP9, { backgroundColor: theme.colors.primary }]}
              pointerEvents={'auto'}
            >
              <View style={styles.ViewIt} pointerEvents={'auto'}>
                <View style={styles.ViewOZ} pointerEvents={'auto'}>
                  <Text style={[styles.TextgZ, { color: theme.colors.strong }]}>
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

                <Text style={[styles.Textbs, { color: theme.colors.strong }]}>
                  {
                    "We're currently at capacity but we'll let you know as soon as space is available. You can still use the Games tab while you wait!"
                  }
                </Text>

                <View style={styles.Viewmf} pointerEvents={'auto'}>
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
                      styles.TextInputar,
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
                    style={styles.IconButtonR2}
                    icon={'Ionicons/ios-arrow-forward-circle'}
                    size={32}
                    color={theme.colors.strong}
                  />
                </View>
              </View>
            </View>

            <ScrollView
              contentContainerStyle={styles.ScrollViewEpContent}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <View style={styles.View_8S} pointerEvents={'auto'}>
                <Image
                  style={styles.ImageEC}
                  source={Images.MoneyDemo}
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
                <View style={styles.View_6r} pointerEvents={'auto'}>
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
                        styles.Viewz0,
                        { backgroundColor: theme.colors.primary },
                      ]}
                      pointerEvents={'auto'}
                    >
                      <Icon
                        style={styles.IconCz}
                        name={'Ionicons/ios-add-circle'}
                        size={28}
                      />
                      <View style={styles.ViewJ8} pointerEvents={'auto'}>
                        <Text
                          style={[
                            styles.TextKh,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {"You're In Demo Mode"}
                        </Text>

                        <Text
                          style={[
                            styles.TextK0,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {
                            'Sync at least one sportsbook to view your net profit and bankroll graph!'
                          }
                        </Text>
                      </View>
                    </View>
                  </Touchable>

                  <ScrollView
                    contentContainerStyle={styles.ScrollViewaWContent}
                    showsVerticalScrollIndicator={true}
                    bounces={true}
                  >
                    <View style={styles.VieweZ} pointerEvents={'auto'}>
                      <Image
                        style={styles.ImagefK}
                        source={Images.MoneyDemo}
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
      <SwaggerAPIApi.FetchGetBankrollPageByIdGET
        dummy={Constants['updatedSportsBook']}
        internalId={Constants['internalId']}
        onData={fetchData => {
          try {
            console.log(dummy);
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

          return (
            <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
              <View>
                <View style={styles.ViewIU}>
                  <FlatList
                    data={checkSportsbooksSynced(fetchData)}
                    listKey={'0OiRiCPn'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {!userSelectedSportsbook(
                            listData?.account?.id
                          ) ? null : (
                            <View style={styles.Viewxz}>
                              <>
                                {!Constants['toggleBankrollValues'] ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setGlobalVariableValue({
                                          key: 'toggleBankrollValues',
                                          value: false,
                                        });
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={styles.Viewlw}
                                      pointerEvents={'auto'}
                                    >
                                      <Text
                                        style={[
                                          styles.Text_8T,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {listData?.account?.book?.name}
                                        {bookRegionSyntax(
                                          listData?.account?.bookRegion?.abbr
                                        )}
                                        {' Bankroll'}
                                      </Text>
                                      <Icon
                                        style={styles.IconOY}
                                        name={'Ionicons/ios-chevron-down'}
                                        color={theme.colors.light}
                                        size={16}
                                      />
                                    </View>

                                    <View
                                      style={styles.ViewG2}
                                      pointerEvents={'auto'}
                                    >
                                      <Text
                                        style={[
                                          styles.TextBL,
                                          {
                                            color:
                                              theme.colors.background_inverse,
                                          },
                                        ]}
                                      >
                                        {balanceSyntax(
                                          listData?.account?.balance
                                        )}
                                      </Text>
                                      <>
                                        {!listData?.pending ? null : (
                                          <Text
                                            style={[
                                              styles.Textbn,
                                              {
                                                color:
                                                  theme.colors
                                                    .background_inverse,
                                              },
                                            ]}
                                          >
                                            {'('}
                                            {balanceSyntax(listData?.pending)}
                                            {' Pending)'}
                                          </Text>
                                        )}
                                      </>
                                    </View>
                                  </Touchable>
                                )}
                              </>
                              <>
                                {Constants['toggleBankrollValues'] ? null : (
                                  <Touchable
                                    onPress={() => {
                                      try {
                                        setGlobalVariableValue({
                                          key: 'toggleBankrollValues',
                                          value: true,
                                        });
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                  >
                                    <View
                                      style={styles.ViewHR}
                                      pointerEvents={'auto'}
                                    >
                                      <Text
                                        style={[
                                          styles.TextPX,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {listData?.account?.book?.name}
                                        {bookRegionSyntax(
                                          listData?.account?.bookRegion?.abbr
                                        )}
                                        {' Net Profit'}
                                      </Text>
                                      <Icon
                                        style={styles.IconZD}
                                        name={'Ionicons/ios-chevron-down'}
                                        color={theme.colors.light}
                                        size={16}
                                      />
                                    </View>
                                    <>
                                      {!valuePositive(
                                        listData?.netProfit
                                      ) ? null : (
                                        <Text
                                          style={[
                                            styles.Textry,
                                            { color: theme.colors.good },
                                          ]}
                                        >
                                          {balanceSyntax(listData?.netProfit)}
                                        </Text>
                                      )}
                                    </>
                                    <>
                                      {!valueNegative(
                                        listData?.netProfit
                                      ) ? null : (
                                        <Text
                                          style={[
                                            styles.TextJC,
                                            { color: theme.colors.error },
                                          ]}
                                        >
                                          {balanceSyntax(listData?.netProfit)}
                                        </Text>
                                      )}
                                    </>
                                    <>
                                      {!valueNeutral(
                                        listData?.netProfit
                                      ) ? null : (
                                        <Text
                                          style={[
                                            styles.Text_12,
                                            {
                                              color:
                                                theme.colors.background_inverse,
                                            },
                                          ]}
                                        >
                                          {balanceSyntax(listData?.netProfit)}
                                        </Text>
                                      )}
                                    </>
                                  </Touchable>
                                )}
                              </>
                            </View>
                          )}
                        </>
                      );
                    }}
                    contentContainerStyle={styles.FlatList_0OContent}
                    numColumns={1}
                  />
                  <View style={styles.ViewfP} pointerEvents={'auto'}>
                    <View style={styles.Viewm4}>
                      <Utils.CustomCodeErrorBoundary>
                        <CustomCode.VictoryLineNetProfit
                          chartData={fetchData}
                        />
                      </Utils.CustomCodeErrorBoundary>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.ViewbY}>
                <FlatList
                  data={fetchData}
                  listKey={'5braZFZH'}
                  keyExtractor={({ item }) => item?.id || item?.uuid || item}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <View style={styles.ViewHp}>
                        <Touchable
                          onPress={() => {
                            try {
                              setGlobalVariableValue({
                                key: 'selectedSportsbook',
                                value: listData?.account?.id,
                              });
                              setGlobalVariableValue({
                                key: 'selectedSportsbookChart',
                                value: listData?.timeSeries,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <Surface
                            style={[
                              styles.Surface_9A,
                              {
                                borderRadius: 6,
                                backgroundColor: theme.colors.background,
                              },
                            ]}
                            elevation={1}
                          >
                            <View
                              style={[
                                styles.ViewAa,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderRadius: 6,
                                  borderColor: theme.colors.divider,
                                },
                              ]}
                              collapsable={false}
                            >
                              <View
                                style={styles.ViewAf}
                                pointerEvents={'auto'}
                              >
                                <View
                                  style={styles.View_3m}
                                  pointerEvents={'auto'}
                                >
                                  <Text
                                    style={[
                                      styles.TextB5,
                                      {
                                        color: theme.colors.background_inverse,
                                      },
                                    ]}
                                  >
                                    {listData?.account?.book?.name}
                                    {bookRegionSyntax(
                                      listData?.account?.bookRegion?.abbr
                                    )}
                                  </Text>
                                  <>
                                    {!userSelectedSportsbook(
                                      listData?.account?.id
                                    ) ? null : (
                                      <Icon
                                        style={styles.IcontB}
                                        name={'MaterialIcons/stop-circle'}
                                        color={theme.colors.primary}
                                        size={10}
                                      />
                                    )}
                                  </>
                                </View>
                                <>
                                  {!listData?.account
                                    ?.betRefreshRequested ? null : (
                                    <View pointerEvents={'auto'}>
                                      <>
                                        {promptResyncBook(
                                          listData?.account
                                        ) ? null : (
                                          <Text
                                            style={[
                                              styles.TextWg,
                                              { color: theme.colors.light },
                                            ]}
                                          >
                                            {'Refreshed '}
                                            {dateRefreshed(
                                              listData?.account
                                                ?.betRefreshRequested
                                            )}
                                            {' ago'}
                                          </Text>
                                        )}
                                      </>
                                      <>
                                        {!promptResyncBook(
                                          listData?.account
                                        ) ? null : (
                                          <View
                                            style={styles.Viewrx}
                                            pointerEvents={'auto'}
                                          >
                                            <Text
                                              style={[
                                                styles.Textpj,
                                                { color: theme.colors.light },
                                              ]}
                                            >
                                              {'Connection error. Press'}
                                            </Text>
                                            <Icon
                                              style={styles.Iconu0}
                                              name={'Ionicons/ios-add-circle'}
                                              size={10}
                                              color={theme.colors.light}
                                            />
                                            <Text
                                              style={[
                                                styles.TextHE,
                                                { color: theme.colors.light },
                                              ]}
                                            >
                                              {'to resync book'}
                                            </Text>
                                          </View>
                                        )}
                                      </>
                                    </View>
                                  )}
                                </>
                              </View>

                              <View
                                style={styles.ViewoQ}
                                pointerEvents={'auto'}
                              >
                                <>
                                  {!valuePositive(
                                    listData?.netProfit
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.Textri,
                                        { color: theme.colors.good },
                                      ]}
                                    >
                                      {balanceSyntax(listData?.netProfit)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!valueNegative(
                                    listData?.netProfit
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.TextSa,
                                        { color: theme.colors.error },
                                      ]}
                                    >
                                      {balanceSyntax(listData?.netProfit)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!valueNeutral(listData?.netProfit) ? null : (
                                    <Text
                                      style={[
                                        styles.TextR2,
                                        {
                                          color:
                                            theme.colors.background_inverse,
                                        },
                                      ]}
                                    >
                                      {balanceSyntax(listData?.netProfit)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!userSelectedSportsbook(
                                    listData?.account?.id
                                  ) ? null : (
                                    <View pointerEvents={'auto'}>
                                      <>
                                        {!valuePositive(
                                          listData?.netProfit
                                        ) ? null : (
                                          <Text
                                            style={[
                                              styles.Text_8g,
                                              { color: theme.colors.good },
                                            ]}
                                          >
                                            {'Net Profit'}
                                          </Text>
                                        )}
                                      </>
                                      <>
                                        {!valueNegative(
                                          listData?.netProfit
                                        ) ? null : (
                                          <Text
                                            style={[
                                              styles.TextCO,
                                              { color: theme.colors.error },
                                            ]}
                                          >
                                            {'Net Profit'}
                                          </Text>
                                        )}
                                      </>
                                      <>
                                        {!valueNeutral(
                                          listData?.netProfit
                                        ) ? null : (
                                          <Text
                                            style={[
                                              styles.TextBT,
                                              {
                                                color:
                                                  theme.colors
                                                    .background_inverse,
                                              },
                                            ]}
                                          >
                                            {'Net Profit'}
                                          </Text>
                                        )}
                                      </>
                                    </View>
                                  )}
                                </>
                                <>
                                  {!valuePositive(listData?.winnings) ? null : (
                                    <Text
                                      style={[
                                        styles.TextbY,
                                        { color: theme.colors.good },
                                      ]}
                                    >
                                      {'+'}
                                      {balanceSyntax(listData?.winnings)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!valueNeutral(listData?.winnings) ? null : (
                                    <Text
                                      style={[
                                        styles.TextnH,
                                        {
                                          color:
                                            theme.colors.background_inverse,
                                        },
                                      ]}
                                    >
                                      {balanceSyntax(listData?.winnings)}
                                    </Text>
                                  )}
                                </>
                                <>
                                  {!userSelectedSportsbook(
                                    listData?.account?.id
                                  ) ? null : (
                                    <View pointerEvents={'auto'}>
                                      <>
                                        {!valuePositive(
                                          listData?.winnings
                                        ) ? null : (
                                          <Text
                                            style={[
                                              styles.TexteH,
                                              { color: theme.colors.good },
                                            ]}
                                          >
                                            {'Winnings'}
                                          </Text>
                                        )}
                                      </>
                                      <>
                                        {!valueNeutral(
                                          listData?.winnings
                                        ) ? null : (
                                          <Text
                                            style={[
                                              styles.TextIB,
                                              {
                                                color:
                                                  theme.colors
                                                    .background_inverse,
                                              },
                                            ]}
                                          >
                                            {'Winnings'}
                                          </Text>
                                        )}
                                      </>
                                    </View>
                                  )}
                                </>
                                <Text
                                  style={[
                                    styles.TextsH,
                                    { color: theme.colors.background_inverse },
                                  ]}
                                >
                                  {balanceSyntax(listData?.account?.balance)}
                                </Text>
                                <>
                                  {!userSelectedSportsbook(
                                    listData?.account?.id
                                  ) ? null : (
                                    <Text
                                      style={[
                                        styles.TextQC,
                                        {
                                          color:
                                            theme.colors.background_inverse,
                                        },
                                      ]}
                                    >
                                      {'Bankroll'}
                                    </Text>
                                  )}
                                </>
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                      </View>
                    );
                  }}
                  contentContainerStyle={styles.FlatList_5bContent}
                  numColumns={1}
                />
              </View>

              <View style={styles.Viewpl}>
                <View style={styles.ViewPa}>
                  <ButtonOutline
                    onPress={() => {
                      try {
                        navigation.navigate('SharpSportsFormScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[styles.ButtonOutlineBA, { borderRadius: 6 }]}
                    title={'Sync A Sportsbook'}
                    icon={'Ionicons/ios-add-circle'}
                    loading={false}
                  />
                </View>
              </View>
            </ScrollView>
          );
        }}
      </SwaggerAPIApi.FetchGetBankrollPageByIdGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewqG: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    height: 50,
  },
  ViewjJ: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '33%',
  },
  ImageCE: {
    opacity: 1,
    height: 50,
    width: 125,
  },
  ViewFd: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  ViewU0: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '33%',
    height: 50,
  },
  ViewwU: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Viewuw: {
    justifyContent: 'center',
  },
  TextgZ: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
    marginRight: 3,
  },
  FetchYF: {
    minHeight: 40,
  },
  ViewOZ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textbs: {
    fontSize: 12,
    marginTop: 10,
  },
  TextInputar: {
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
  IconButtonR2: {
    marginLeft: 6,
  },
  Viewmf: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  ViewIt: {
    flex: 1,
  },
  ViewP9: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: '4%',
    paddingRight: '4%',
    flexDirection: 'row',
  },
  ImageEC: {
    width: '100%',
    height: '100%',
  },
  View_8S: {
    alignItems: 'center',
    width: 375,
    height: 1000,
  },
  ScrollViewEpContent: {
    alignItems: 'center',
  },
  ViewJq: {
    paddingBottom: 150,
  },
  IconCz: {
    marginRight: 6,
  },
  TextKh: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 16,
  },
  TextK0: {
    fontSize: 12,
  },
  ViewJ8: {
    flex: 1,
  },
  Viewz0: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 6,
    paddingBottom: 6,
  },
  ImagefK: {
    width: '100%',
    height: '100%',
  },
  VieweZ: {
    width: 375,
    height: 1000,
    alignItems: 'center',
  },
  ScrollViewaWContent: {
    alignItems: 'center',
  },
  View_6r: {
    paddingBottom: 125,
  },
  Text_8T: {
    fontSize: 16,
  },
  IconOY: {
    marginLeft: 2,
  },
  Viewlw: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextBL: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 6,
  },
  Textbn: {
    fontSize: 14,
  },
  ViewG2: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  TextPX: {
    fontSize: 16,
  },
  IconZD: {
    marginLeft: 2,
  },
  ViewHR: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textry: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  TextJC: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Text_12: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  Viewxz: {
    opacity: 1,
    marginTop: 18,
    marginLeft: '4%',
    marginRight: '4%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  FlatList_0OContent: {
    flex: 1,
  },
  Viewm4: {
    height: 400,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 14,
    marginBottom: 28,
  },
  ViewfP: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 10,
  },
  ViewIU: {
    minHeight: 50,
  },
  TextB5: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  IcontB: {
    marginLeft: 6,
  },
  View_3m: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  TextWg: {
    fontSize: 10,
  },
  Textpj: {
    fontSize: 10,
  },
  Iconu0: {
    marginLeft: 2,
    marginRight: 2,
  },
  TextHE: {
    fontSize: 10,
  },
  Viewrx: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewAf: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '60%',
  },
  Textri: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextSa: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
  },
  TextR2: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 18,
  },
  Text_8g: {
    fontSize: 8,
  },
  TextCO: {
    fontSize: 8,
  },
  TextBT: {
    fontSize: 8,
  },
  TextbY: {
    fontSize: 16,
  },
  TextnH: {
    fontSize: 16,
  },
  TexteH: {
    fontSize: 8,
  },
  TextIB: {
    fontSize: 8,
  },
  TextsH: {
    fontSize: 16,
  },
  TextQC: {
    fontSize: 8,
  },
  ViewoQ: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '40%',
  },
  ViewAa: {
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Surface_9A: {
    flex: 1,
  },
  ViewHp: {
    minHeight: 50,
    marginTop: 6,
  },
  FlatList_5bContent: {
    flex: 1,
  },
  ViewbY: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 22,
  },
  ButtonOutlineBA: {
    backgroundColor: 'transparent',
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minWidth: 250,
  },
  ViewPa: {
    marginBottom: 28,
  },
  Viewpl: {
    alignItems: 'center',
    marginTop: 32,
  },
  FetchHW: {
    minHeight: 40,
  },
  Viewnb: {
    height: '60%',
  },
  TextAY: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
  },
  Iconvl: {
    marginTop: 20,
  },
  ViewKx: {
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: 38,
    alignItems: 'center',
  },
  Surface_7v: {
    height: '40%',
  },
  Fetch_89: {
    minHeight: 40,
  },
});

export default withTheme(BankrollNetProfitScreen);
