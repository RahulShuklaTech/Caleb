import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  ButtonSolid,
  DatePicker,
  Divider,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const MyBetsAnalysisScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [dateRangeEnd, setDateRangeEnd] = React.useState(new Date());
  const [dateRangeStart, setDateRangeStart] = React.useState(new Date());

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewuQContent}
        showsVerticalScrollIndicator={false}
        bounces={true}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.ViewAv} pointerEvents={'auto'}>
          <Text
            style={[styles.Textj7, { color: theme.colors.background_inverse }]}
          >
            {'(move to page) Categorize By'}
          </Text>

          <View style={styles.Viewg5} pointerEvents={'auto'}>
            <Utils.CustomCodeErrorBoundary>
              <CustomCode.CategorizeFilter />
            </Utils.CustomCodeErrorBoundary>
          </View>
          <Divider style={styles.DividerIO} color={theme.colors.divider} />
        </View>

        <View style={styles.ViewCf} pointerEvents={'auto'}>
          <Text
            style={[styles.TextFL, { color: theme.colors.background_inverse }]}
          >
            {'(move to page) Subcategorize By'}
          </Text>

          <View style={styles.View_2a} pointerEvents={'auto'}>
            <Utils.CustomCodeErrorBoundary>
              <CustomCode.SubcategorizeFilter />
            </Utils.CustomCodeErrorBoundary>
          </View>
        </View>

        <View style={styles.ViewpO} pointerEvents={'auto'}>
          <Text
            style={[styles.Text_1a, { color: theme.colors.background_inverse }]}
          >
            {'Filters'}
          </Text>
          <Divider
            style={styles.Dividersv}
            color={theme.colors.background_inverse}
          />
        </View>

        <View style={styles.View_6r} pointerEvents={'auto'}>
          <Text
            style={[styles.Textl4, { color: theme.colors.background_inverse }]}
          >
            {'Filter By Saved'}
          </Text>

          <View style={styles.View_4d} pointerEvents={'auto'}>
            <Utils.CustomCodeErrorBoundary>
              <CustomCode.SavedFilter />
            </Utils.CustomCodeErrorBoundary>
          </View>
          <Divider style={styles.DividerKx} color={theme.colors.divider} />
        </View>

        <View style={styles.View_00} pointerEvents={'auto'}>
          <Text
            style={[styles.TextgT, { color: theme.colors.background_inverse }]}
          >
            {'Filter By Date'}
          </Text>

          <View style={styles.ViewuM}>
            <View style={styles.ViewSf} pointerEvents={'auto'}>
              <Utils.CustomCodeErrorBoundary>
                <CustomCode.DateRangeFilter />
              </Utils.CustomCodeErrorBoundary>
            </View>

            <View style={styles.ViewsJ}>
              <DatePicker
                onDateChange={newDatePickerUnderlineValue => {
                  const dateRangeStart = newDatePickerUnderlineValue;
                  try {
                    setDateRangeStart(dateRangeStart);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.DatePickerYG}
                label={'Start'}
                mode={'date'}
                leftIconMode={'inset'}
                type={'underline'}
                date={dateRangeStart}
              />
              <DatePicker
                onDateChange={newDatePickerUnderlineValue => {
                  const dateRangeEnd = newDatePickerUnderlineValue;
                  try {
                    setDateRangeEnd(dateRangeEnd);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                label={'End'}
                mode={'date'}
                leftIconMode={'inset'}
                type={'underline'}
                date={dateRangeEnd}
              />
            </View>
          </View>
          <Divider style={styles.Divider_2m} color={theme.colors.divider} />
        </View>
        <>
          {Constants['toggleAdvancedFilters'] ? null : (
            <View pointerEvents={'auto'}>
              <View style={styles.Viewy8} pointerEvents={'auto'}>
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'toggleAdvancedFilters',
                        value: false,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.ViewWk} pointerEvents={'auto'}>
                    <Text
                      style={[
                        styles.TextFa,
                        { color: theme.colors.background_inverse },
                      ]}
                    >
                      {'Advanced Filters'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-up-sharp'}
                      size={20}
                      color={theme.colors.background_inverse}
                    />
                  </View>
                </Touchable>
              </View>

              <View style={styles.ViewmO} pointerEvents={'auto'}>
                <Text
                  style={[
                    styles.Text_7N,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Filter By League'}
                </Text>

                <View style={styles.ViewxF}>
                  <Touchable style={styles.TouchablesC}>
                    <View
                      style={[
                        styles.Viewvg,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'All Leagues'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableA0}>
                    <View
                      style={[
                        styles.Viewb4,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'NFL'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchablexS}>
                    <View
                      style={[
                        styles.ViewEC,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.primary,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'NCAAF'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchable_1m}>
                    <View
                      style={[
                        styles.ViewER,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'NBA'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchableqv}>
                    <View
                      style={[
                        styles.ViewGj,
                        {
                          backgroundColor: theme.colors.divider,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'NCAAB'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchable_7H}>
                    <View
                      style={[
                        styles.ViewYu,
                        {
                          backgroundColor: theme.colors.divider,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'MLB'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableR5}>
                    <View
                      style={[
                        styles.ViewQb,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'NHL'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableNl}>
                    <View
                      style={[
                        styles.ViewOB,
                        {
                          backgroundColor: theme.colors.divider,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'UFC'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableFj}>
                    <View
                      style={[
                        styles.ViewG1,
                        {
                          backgroundColor: theme.colors.divider,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'Other'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
                <Divider
                  style={styles.Dividerg5}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.ViewZr} pointerEvents={'auto'}>
                <Text
                  style={[
                    styles.Textdd,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Filter By Team'}
                </Text>

                <View pointerEvents={'auto'}>
                  <Utils.CustomCodeErrorBoundary>
                    <CustomCode.MultiTeamSelect />
                  </Utils.CustomCodeErrorBoundary>
                </View>
                <Divider
                  style={styles.Dividerm0}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.Viewd5} pointerEvents={'auto'}>
                <Text
                  style={[
                    styles.TextOn,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Filter By Bet Type'}
                </Text>

                <View style={styles.ViewCr}>
                  <Touchable style={styles.TouchableQL}>
                    <View
                      style={[
                        styles.Viewvh,
                        {
                          backgroundColor: theme.colors.divider,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'All Bet Types'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchabler2}>
                    <View
                      style={[
                        styles.Viewtx,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'Spread'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchablex4}>
                    <View
                      style={[
                        styles.Viewhk,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'Total'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchable_9l}>
                    <View
                      style={[
                        styles.ViewA3,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.primary,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'Moneyline'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchablevb}>
                    <View
                      style={[
                        styles.Viewtq,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'Game Prop'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableuN}>
                    <View
                      style={[
                        styles.ViewAU,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'Player Prop'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableH2}>
                    <View
                      style={[
                        styles.View_3Y,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'Parlay'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableXX}>
                    <View
                      style={[
                        styles.ViewRP,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'Teaser'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
                <Divider
                  style={styles.DividerCf}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.View_9I} pointerEvents={'auto'}>
                <Text
                  style={[
                    styles.Text_4u,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Filter By Sportsbook'}
                </Text>

                <View style={styles.ViewAP}>
                  <Touchable style={styles.Touchable_3O}>
                    <View
                      style={[
                        styles.ViewHv,
                        {
                          backgroundColor: theme.colors.divider,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'All Sportsbooks'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableS8}>
                    <View
                      style={[
                        styles.ViewdP,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'WilliamHill'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchable_2v}>
                    <View
                      style={[
                        styles.Viewii,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'DraftKings'}
                      </Text>
                    </View>
                  </Touchable>
                  <FlatList
                    data={[]}
                    renderItem={({ item }) => {
                      const listData = item;
                      return null;
                    }}
                    contentContainerStyle={styles.FlatListnxContent}
                    numColumns={1}
                  />
                </View>
                <Divider
                  style={styles.Divider_3U}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.ViewtM} pointerEvents={'auto'}>
                <Text
                  style={[
                    styles.Textc5,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Filter By Tag'}
                </Text>

                <View style={styles.ViewxW}>
                  <Touchable style={styles.TouchableMv}>
                    <View
                      style={[
                        styles.Viewjk,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'15 min'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableNm}>
                    <View
                      style={[
                        styles.View_43,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: theme.roundness,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.strong },
                        ]}
                      >
                        {'30 min'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableF5}>
                    <View
                      style={[
                        styles.ViewFa,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'45 min'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.TouchableEd}>
                    <View
                      style={[
                        styles.Viewhb,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'1 hr'}
                      </Text>
                    </View>
                  </Touchable>

                  <Touchable style={styles.Touchable_3g}>
                    <View
                      style={[
                        styles.ViewpJ,
                        {
                          borderRadius: theme.roundness,
                          backgroundColor: theme.colors.divider,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          theme.typography.button,
                          { color: theme.colors.background_inverse },
                        ]}
                      >
                        {'2 hr'}
                      </Text>
                    </View>
                  </Touchable>
                </View>
                <Divider
                  style={styles.DivideroP}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.Viewc8} pointerEvents={'auto'}>
                <Text
                  style={[
                    styles.Textgt,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Filter By Confidence Level'}
                </Text>

                <View style={styles.ViewPt} pointerEvents={'auto'}>
                  <View style={styles.Viewf8} pointerEvents={'auto'}>
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.ConfidenceLevelFilter />
                    </Utils.CustomCodeErrorBoundary>
                    <View style={styles.Viewlf} pointerEvents={'auto'}>
                      <View style={styles.Viewbs} pointerEvents={'auto'}>
                        <Text
                          style={[styles.TextJf, { color: theme.colors.light }]}
                        >
                          {'Lowest'}
                        </Text>
                      </View>

                      <View style={styles.ViewbB} pointerEvents={'auto'}>
                        <Text
                          style={[styles.TextXU, { color: theme.colors.light }]}
                        >
                          {'Normal'}
                        </Text>
                      </View>

                      <View style={styles.ViewVz} pointerEvents={'auto'}>
                        <Text
                          style={[styles.TextmV, { color: theme.colors.light }]}
                        >
                          {'Highest'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <Divider
                  style={styles.Dividero7}
                  color={theme.colors.divider}
                />
              </View>

              <View style={styles.ViewmW} pointerEvents={'auto'}>
                <Text
                  style={[
                    styles.Textra,
                    { color: theme.colors.background_inverse },
                  ]}
                >
                  {'Filter By Other'}
                </Text>

                <View style={styles.ViewSO} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Text_1O,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Favorite/Underdog'}
                  </Text>
                  <Divider
                    style={styles.Divider_8f}
                    color={theme.colors.divider}
                    height={1}
                  />
                  <View pointerEvents={'auto'}>
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.FavoriteUnderdogFilter />
                    </Utils.CustomCodeErrorBoundary>
                  </View>
                </View>

                <View style={styles.View_3b} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Textfv,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Over/Under'}
                  </Text>
                  <Divider
                    style={styles.DividereZ}
                    color={theme.colors.divider}
                    height={1}
                  />
                  <View pointerEvents={'auto'}>
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.OverUnderFilter />
                    </Utils.CustomCodeErrorBoundary>
                  </View>
                </View>

                <View style={styles.ViewvW} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Text_6b,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Verification Status'}
                  </Text>
                  <Divider
                    style={styles.Dividervj}
                    color={theme.colors.divider}
                    height={1}
                  />
                  <View pointerEvents={'auto'}>
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.VerificationStatusFilter />
                    </Utils.CustomCodeErrorBoundary>
                  </View>
                </View>

                <View style={styles.View_1X} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Textqo,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Bet Status'}
                  </Text>
                  <Divider
                    style={styles.DividerkI}
                    color={theme.colors.divider}
                    height={1}
                  />
                  <View pointerEvents={'auto'}>
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.BetStatusFilter />
                    </Utils.CustomCodeErrorBoundary>
                  </View>
                </View>

                <View style={styles.ViewCp} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Text_9v,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Bonuses'}
                  </Text>
                  <Divider
                    style={styles.DividerUw}
                    color={theme.colors.divider}
                    height={1}
                  />
                  <View pointerEvents={'auto'}>
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.BonusesFilter />
                    </Utils.CustomCodeErrorBoundary>
                  </View>
                </View>

                <View style={styles.ViewcH} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Textvi,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Live Bets'}
                  </Text>
                  <Divider
                    style={styles.Divider_9q}
                    color={theme.colors.divider}
                    height={1}
                  />
                  <View pointerEvents={'auto'}>
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.LiveBetsFilter />
                    </Utils.CustomCodeErrorBoundary>
                  </View>
                </View>
              </View>
            </View>
          )}
        </>
        <>
          {Constants['toggleAdvancedFilters'] ? null : (
            <View pointerEvents={'auto'}>
              <View style={styles.ViewhO} pointerEvents={'auto'}>
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'toggleAdvancedFilters',
                        value: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.VieweX} pointerEvents={'auto'}>
                    <Text
                      style={[
                        styles.TextiI,
                        { color: theme.colors.background_inverse },
                      ]}
                    >
                      {'Advanced Filters'}
                    </Text>
                    <Icon
                      name={'Ionicons/ios-chevron-down-sharp'}
                      size={20}
                      color={theme.colors.background_inverse}
                    />
                  </View>
                </Touchable>
              </View>
            </View>
          )}
        </>
      </ScrollView>

      <View style={styles.ViewMK} pointerEvents={'auto'}>
        <Surface
          style={[
            styles.Surfacek6,
            { backgroundColor: theme.colors.background, borderRadius: 6 },
          ]}
          elevation={3}
        >
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('MainTabNavigator', {
                  screen: 'MyBetsStack',
                  params: { screen: 'MyBetsSaveFilterScreen' },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidab,
              {
                backgroundColor: theme.colors.good,
                color: theme.colors.background_inverse,
              },
            ]}
            title={'Save Filter'}
            icon={'Ionicons/ios-bookmark-sharp'}
          />
        </Surface>

        <Surface
          style={{ backgroundColor: theme.colors.background, borderRadius: 6 }}
          elevation={3}
        >
          <ButtonSolid
            style={[
              styles.ButtonSolidRy,
              {
                backgroundColor: theme.colors.error,
                color: theme.colors.background_inverse,
              },
            ]}
            title={'Reset Filters'}
            icon={'Ionicons/ios-refresh-sharp'}
          />
        </Surface>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textj7: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewg5: {
    marginTop: 6,
  },
  DividerIO: {
    marginTop: 18,
    height: 1,
  },
  ViewAv: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 18,
  },
  TextFL: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_2a: {
    marginTop: 6,
  },
  ViewCf: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  Text_1a: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 15,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  Dividersv: {
    height: 1,
  },
  ViewpO: {
    paddingTop: 48,
    paddingBottom: 4,
  },
  Textl4: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_4d: {
    marginTop: 6,
  },
  DividerKx: {
    marginTop: 18,
    height: 1,
  },
  View_6r: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  TextgT: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewSf: {
    marginBottom: 18,
  },
  DatePickerYG: {
    marginBottom: 8,
  },
  ViewsJ: {
    minHeight: 50,
    justifyContent: 'space-between',
    marginTop: 8,
  },
  ViewuM: {
    minHeight: 50,
    marginTop: 6,
  },
  Divider_2m: {
    marginTop: 18,
    height: 1,
  },
  View_00: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  TextFa: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewWk: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewy8: {
    paddingTop: 28,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  Text_7N: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewvg: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    marginRight: 8,
  },
  TouchablesC: {
    marginTop: 8,
  },
  Viewb4: {
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
    marginRight: 8,
  },
  TouchableA0: {
    marginTop: 8,
  },
  ViewEC: {
    paddingLeft: 16,
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
  },
  TouchablexS: {
    marginTop: 8,
  },
  ViewER: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  Touchable_1m: {
    marginTop: 8,
  },
  ViewGj: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  Touchableqv: {
    marginTop: 8,
  },
  ViewYu: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  Touchable_7H: {
    marginTop: 8,
  },
  ViewQb: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  TouchableR5: {
    marginTop: 8,
  },
  ViewOB: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  TouchableNl: {
    marginTop: 8,
  },
  ViewG1: {
    marginRight: 8,
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  TouchableFj: {
    marginTop: 8,
  },
  ViewxF: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 6,
  },
  Dividerg5: {
    marginTop: 18,
    height: 1,
  },
  ViewmO: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  Textdd: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Dividerm0: {
    marginTop: 18,
    height: 1,
  },
  ViewZr: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  TextOn: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewvh: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableQL: {
    marginTop: 8,
  },
  Viewtx: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchabler2: {
    marginTop: 8,
  },
  Viewhk: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablex4: {
    marginTop: 8,
  },
  ViewA3: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_9l: {
    marginTop: 8,
  },
  Viewtq: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablevb: {
    marginTop: 8,
  },
  ViewAU: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableuN: {
    marginTop: 8,
  },
  View_3Y: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableH2: {
    marginTop: 8,
  },
  ViewRP: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableXX: {
    marginTop: 8,
  },
  ViewCr: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 6,
  },
  DividerCf: {
    marginTop: 18,
    height: 1,
  },
  Viewd5: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  Text_4u: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewHv: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_3O: {
    marginTop: 8,
  },
  ViewdP: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableS8: {
    marginTop: 8,
  },
  Viewii: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_2v: {
    marginTop: 8,
  },
  FlatListnxContent: {
    flex: 1,
  },
  ViewAP: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 6,
  },
  Divider_3U: {
    marginTop: 18,
    height: 1,
  },
  View_9I: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  Textc5: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewjk: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableMv: {
    marginTop: 8,
  },
  View_43: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableNm: {
    marginTop: 8,
  },
  ViewFa: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableF5: {
    marginTop: 8,
  },
  Viewhb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableEd: {
    marginTop: 8,
  },
  ViewpJ: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_3g: {
    marginTop: 8,
  },
  ViewxW: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 6,
  },
  DivideroP: {
    marginTop: 18,
    height: 1,
  },
  ViewtM: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  Textgt: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextJf: {
    fontSize: 10,
  },
  Viewbs: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  TextXU: {
    fontSize: 10,
  },
  ViewbB: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'center',
  },
  TextmV: {
    fontSize: 10,
  },
  ViewVz: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  Viewlf: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Viewf8: {
    marginBottom: 18,
  },
  ViewPt: {
    marginTop: 6,
  },
  Dividero7: {
    marginTop: 18,
    height: 1,
  },
  Viewc8: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  Textra: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_1O: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 3,
  },
  Divider_8f: {
    height: 1,
  },
  ViewSO: {
    marginTop: 18,
  },
  Textfv: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 3,
  },
  DividereZ: {
    height: 1,
  },
  View_3b: {
    marginTop: 28,
  },
  Text_6b: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 3,
  },
  Dividervj: {
    height: 1,
  },
  ViewvW: {
    marginTop: 28,
  },
  Textqo: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 3,
  },
  DividerkI: {
    height: 1,
  },
  View_1X: {
    marginTop: 28,
  },
  Text_9v: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 3,
  },
  DividerUw: {
    height: 1,
  },
  ViewCp: {
    marginTop: 28,
  },
  Textvi: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 3,
  },
  Divider_9q: {
    height: 1,
  },
  ViewcH: {
    marginTop: 28,
  },
  ViewmW: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 28,
  },
  TextiI: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  VieweX: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewhO: {
    paddingTop: 28,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  ScrollViewuQContent: {
    paddingBottom: 200,
  },
  ButtonSolidab: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'left',
    width: 95,
  },
  Surfacek6: {
    marginBottom: 8,
  },
  ButtonSolidRy: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'left',
    width: 95,
  },
  ViewMK: {
    position: 'absolute',
    bottom: 20,
    right: '4%',
    alignItems: 'flex-end',
  },
});

export default withTheme(MyBetsAnalysisScreen);
