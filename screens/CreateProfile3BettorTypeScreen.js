import React from 'react';
import {
  ButtonOutline,
  Icon,
  RadioButtonGroup,
  RadioButtonRow,
  ScreenContainer,
  Surface,
  SwitchRow,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const CreateProfile3BettorTypeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [radioButtonGroupBettorType, setRadioButtonGroupBettorType] =
    React.useState(undefined);
  const [sellPicksSwitch, setSellPicksSwitch] = React.useState(false);

  return (
    <ScreenContainer style={styles.screen} scrollable={true} hasSafeArea={true}>
      <View style={styles.Viewxr} pointerEvents={'auto'}>
        <Surface
          style={{ borderRadius: 0, backgroundColor: theme.colors.background }}
          elevation={0}
        >
          <View style={[styles.ViewfH, { borderRadius: 0 }]}>
            <View style={styles.ViewaC} pointerEvents={'auto'}>
              <View style={[styles.View_75, { borderRadius: 0 }]}>
                <Touchable
                  onPress={() => {
                    try {
                      navigation.goBack();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View style={styles.ViewxY}>
                    <Icon
                      name={'Ionicons/ios-chevron-back-sharp'}
                      size={28}
                      color={theme.colors.light}
                    />
                  </View>
                </Touchable>
              </View>
              <View style={styles.ViewY1} />
              <View style={[styles.ViewYM, { borderRadius: 0 }]} />
            </View>
          </View>
        </Surface>

        <View style={styles.ViewXM}>
          <View style={styles.ViewR3}>
            <Text
              style={[
                styles.Textyu,
                { color: theme.colors.background_inverse },
              ]}
            >
              {'What type of sports bettor are you, Caleb?'}
            </Text>

            <RadioButtonGroup
              onValueChange={newRadioButtonGroupValue => {
                const radioButtonGroupBettorType = newRadioButtonGroupValue;
                try {
                  setRadioButtonGroupBettorType(radioButtonGroupBettorType);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.RadioButtonGroup_30}
              direction={'vertical'}
              defaultValue={radioButtonGroupBettorType}
            >
              <RadioButtonRow
                style={[
                  styles.RadioButtonRowXF,
                  { color: theme.colors.background_inverse },
                ]}
                label={'New bettor'}
                direction={'row'}
              />
              <RadioButtonRow
                style={[
                  styles.RadioButtonRowmr,
                  { color: theme.colors.background_inverse },
                ]}
                label={'Occasional bettor'}
                direction={'row'}
              />
              <RadioButtonRow
                style={[
                  styles.RadioButtonRowRN,
                  { color: theme.colors.background_inverse },
                ]}
                label={'Avid bettor'}
                direction={'row'}
              />
              <RadioButtonRow
                style={[
                  styles.RadioButtonRowBX,
                  { color: theme.colors.background_inverse },
                ]}
                label={'Professional bettor'}
                direction={'row'}
              />
            </RadioButtonGroup>
            <SwitchRow
              onValueChange={newSwitchRowValue => {
                const sellPicksSwitch = newSwitchRowValue;
                try {
                  setSellPicksSwitch(sellPicksSwitch);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.SwitchRowqf,
                { color: theme.colors.background_inverse },
              ]}
              label={'I sell my picks'}
              value={sellPicksSwitch}
            />
            <Text style={[styles.TextvK, { color: theme.colors.light }]}>
              {"We'll provide you with features to help with this."}
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.ViewLB, { borderColor: theme.colors.divider }]}>
        <View style={styles.View_22}>
          <View style={styles.ViewZv}>
            <Text style={[styles.Text_6O, { color: theme.colors.light }]}>
              {
                'We use this information to put the most relevant features in front of you. You can modify these preferences later in Settings.'
              }
            </Text>
          </View>

          <View style={styles.ViewMd}>
            <ButtonOutline
              onPress={() => {
                try {
                  navigation.navigate('Welcome_Stack');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.ButtonOutlineeh,
                {
                  color: theme.colors.background,
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
  ViewxY: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 50,
  },
  View_75: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-start',
  },
  ViewY1: {
    alignContent: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    maxWidth: '34%',
    maxHeight: 50,
  },
  ViewYM: {
    minWidth: '33%',
    maxWidth: '34%',
    alignItems: 'flex-end',
  },
  ViewaC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewfH: {
    justifyContent: 'center',
  },
  Textyu: {
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  RadioButtonRowXF: {
    fontSize: 16,
  },
  RadioButtonRowmr: {
    fontSize: 16,
  },
  RadioButtonRowRN: {
    fontSize: 16,
  },
  RadioButtonRowBX: {
    fontSize: 16,
  },
  RadioButtonGroup_30: {
    marginTop: 30,
  },
  SwitchRowqf: {
    fontSize: 16,
    marginTop: 30,
  },
  TextvK: {
    fontSize: 10,
    paddingLeft: '4%',
    paddingRight: '25%',
  },
  ViewR3: {
    minHeight: 50,
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '4%',
    paddingBottom: '4%',
  },
  ViewXM: {
    minHeight: 50,
  },
  Viewxr: {
    minHeight: 50,
  },
  Text_6O: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
  },
  ViewZv: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  ButtonOutlineeh: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 16,
    minHeight: 54,
  },
  ViewMd: {
    minHeight: 50,
    paddingLeft: 34,
    paddingRight: 34,
    marginTop: 16,
  },
  View_22: {
    justifyContent: 'center',
  },
  ViewLB: {
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

export default withTheme(CreateProfile3BettorTypeScreen);
