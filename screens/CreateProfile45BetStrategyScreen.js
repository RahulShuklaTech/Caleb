import React from 'react';
import {
  ButtonOutline,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const CreateProfile45BetStrategyScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [radioButtonGroupBetStrategy, setRadioButtonGroupBetStrategy] =
    React.useState(undefined);

  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <View style={styles.View_0m} pointerEvents={'auto'}>
        <Surface
          style={{ borderRadius: 0, backgroundColor: theme.colors.background }}
          elevation={0}
        >
          <View style={[styles.View_1o, { borderRadius: 0 }]}>
            <View style={styles.ViewmY} pointerEvents={'auto'}>
              <View style={[styles.View_6V, { borderRadius: 0 }]}>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.goBack();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.ViewVP}>
                    <Icon
                      name={'Ionicons/ios-chevron-back-sharp'}
                      size={28}
                      color={theme.colors.light}
                    />
                  </View>
                </Touchable>
              </View>
              <View style={styles.ViewCb} />
              <View style={[styles.ViewHH, { borderRadius: 0 }]} />
            </View>
          </View>
        </Surface>

        <View style={styles.ViewSS}>
          <View style={styles.Viewc7}>
            <Text
              style={[
                styles.TextvV,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'What is your typical bet strategy?'}
            </Text>

            <View pointerEvents={'auto'}>
              <RadioButtonGroup
                onValueChange={newRadioButtonGroupValue => {
                  const radioButtonGroupBetStrategy = newRadioButtonGroupValue;
                  try {
                    setRadioButtonGroupBetStrategy(radioButtonGroupBetStrategy);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles.RadioButtonGroupEw}
                value={radioButtonGroupBetStrategy}
                direction={'vertical'}
              >
                <RadioButtonRow
                  style={[
                    styles.RadioButtonRowBI,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Flat bet (most common)'}
                  color={theme.colors.primary}
                  unselectedColor={theme.colors.primary}
                />
                <Text style={[styles.TextEu, { color: theme.colors.light }]}>
                  {'I generally bet one unit.'}
                </Text>
                <RadioButtonRow
                  style={[
                    styles.RadioButtonRow_1H,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Confidence'}
                  color={theme.colors.primary}
                  unselectedColor={theme.colors.primary}
                />
                <Text style={[styles.TextZA, { color: theme.colors.light }]}>
                  {
                    'I generally change my bet amount based on how confident I am.'
                  }
                </Text>
                <RadioButtonRow
                  style={[
                    styles.RadioButtonRowUE,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Percentage'}
                  color={theme.colors.primary}
                  unselectedColor={theme.colors.primary}
                />
                <Text style={[styles.Textxf, { color: theme.colors.light }]}>
                  {'I generally bet a set percentage of my bankroll.'}
                </Text>
                <RadioButtonRow
                  style={[
                    styles.RadioButtonRow_2M,
                    { color: theme.colors.background_inverse },
                  ]}
                  label={'Kelly Criterion'}
                  color={theme.colors.primary}
                  unselectedColor={theme.colors.primary}
                />
                <Text style={[styles.TexthF, { color: theme.colors.light }]}>
                  {'I use Kelly Criterion to set my bet amount.'}
                </Text>
              </RadioButtonGroup>
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.ViewJf, { borderColor: theme.colors.divider }]}>
        <View style={styles.ViewCj}>
          <View style={styles.ViewLh}>
            <Text style={[styles.TextMf, { color: theme.colors.light }]}>
              {
                'We use this information to put the most relevant features in front of you. You can modify these preferences later in Settings.'
              }
            </Text>
          </View>

          <View style={styles.ViewhE}>
            <ButtonOutline
              onPress={() => {
                try {
                  navigation.navigate('CreateProfileBetaStack');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonOutlinecU,
                {
                  color: theme.colors.strong,
                  backgroundColor: theme.colors.primary,
                },
              ]}
              title={'Next'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewVP: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 50,
  },
  View_6V: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  ViewCb: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    maxWidth: '34%',
    maxHeight: 50,
  },
  ViewHH: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  ViewmY: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  View_1o: {
    justifyContent: 'center',
  },
  TextvV: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
    marginLeft: '4%',
    marginRight: '4%',
  },
  RadioButtonRowBI: {
    fontSize: 16,
  },
  TextEu: {
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '4%',
    marginRight: '4%',
    paddingLeft: '4%',
    paddingRight: '25%',
  },
  RadioButtonRow_1H: {
    fontSize: 16,
    marginTop: 3,
  },
  TextZA: {
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '4%',
    marginRight: '4%',
    paddingLeft: '4%',
    paddingRight: '25%',
  },
  RadioButtonRowUE: {
    fontSize: 16,
    marginTop: 4,
  },
  Textxf: {
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '4%',
    marginRight: '4%',
    paddingLeft: '4%',
    paddingRight: '25%',
  },
  RadioButtonRow_2M: {
    fontSize: 16,
    marginTop: 3,
  },
  TexthF: {
    fontSize: 10,
    textAlign: 'left',
    marginLeft: '4%',
    marginRight: '4%',
    paddingLeft: '4%',
    paddingRight: '25%',
  },
  RadioButtonGroupEw: {
    marginTop: 25,
  },
  Viewc7: {
    minHeight: 50,
    paddingTop: '4%',
    paddingBottom: '4%',
  },
  ViewSS: {
    minHeight: 50,
  },
  View_0m: {
    minHeight: 50,
    marginBottom: 25,
  },
  TextMf: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
  },
  ViewLh: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonOutlinecU: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minHeight: 54,
  },
  ViewhE: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    marginTop: 16,
  },
  ViewCj: {
    justifyContent: 'center',
  },
  ViewJf: {
    minHeight: 50,
    justifyContent: 'center',
    paddingBottom: 34,
    paddingTop: 16,
    borderTopWidth: 1,
  },
  screen: {
    justifyContent: 'space-between',
  },
});

export default withTheme(CreateProfile45BetStrategyScreen);
