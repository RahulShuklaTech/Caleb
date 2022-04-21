import React from 'react';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  ButtonSolid,
  DatePicker,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { FlatList, Modal, StyleSheet, Text, View } from 'react-native';

const MyBetsTestScreenFilters = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const addFilter = async item => {
    await Constants.filterLeague.push(item);
  };

  const checkLeague = () => {
    listData?.bets;
  };

  const countBets = x => {
    return x.length !== 0;
  };

  const filterAllLeagues = x => {
    return x.length === 0;
  };

  const filterLeagueButton = x => {
    return Constants.filterLeague.includes(x) ? true : false;
  };

  const removeFilter = async item => {
    const array = Constants.filterLeague;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === item) {
        await // Not sure if this is needed, or if this needs to be asynchronous
        array.splice(i, 1);
      }
    }

    // Code found here: https://love2dev.com/blog/javascript-remove-from-array/
  };

  const testCombineFilters = () => {
    //Constants.combinedFiltersArray = Constants.filterLeague.join(", ")

    let array = [
      ...Constants.filterLeague,
      ...Constants.filterDate,
      ...Constants.filterSportsbook,
    ];

    array.length > 0
      ? (Constants.combinedFiltersArray = array.join(', '))
      : (Constants.combinedFiltersArray = 'None');

    /*
combinedArray1 = [...firstArray, ...secondArray, ...thirdArray]

combinedArray.push(...firstArray, ...secondArray, ...thirdArray)



let simpleArray = [1,2,3,4]
let commaSeperated = simpleArray.join(",");


[...Constants.filterLeagueApply,
...Constants.filterDateApply,
...Constants.filterSportsbookApply];
*/
  };

  const countFilters = () => {
    return Constants.filterLeagueApply.length; // Simply add all other filters arrays onto here to create the count
  };

  const filterLeagueApplied = x => {
    const primaryLeagues = [
      'NFL',
      'NCAAF',
      'NBA',
      'NCAAMB',
      'MLB',
      'NHL',
      'UFC',
      null,
    ];

    if (Constants.filterLeagueApply.length === 0) {
      return true;
    } else {
      try {
        let exist = false;
        for (let x = 0; x < bets.length; x++) {
          //console.log(bets[x])
          if (Constants.filterLeagueApply.includes(bets[x].event.league)) {
            exist = true;
          } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
            exist = primaryLeagues.includes(bets[x].event.league)
              ? exist
              : true;
          } else {
            exist;
          }
        }
        return exist;
      } catch (y) {
        return false;
      }
    }

    // Three alternatives exist here.
    // The first is if All Leagues is selected, it should just call everything true.  (COMPLETE)
    // The second is if otherLeagues is selected, it should pull anything that does not equal NFL, NCAAF, NCAAB, etc.
    // The third is if the league is empty/null. In this case, it should not pull the bets when otherLeagues is selected
  };

  const { theme } = props;
  const { navigation } = props;

  const [date, setDate] = React.useState(new Date());
  const [dummyTwo, setDummyTwo] = React.useState(1);
  const [loadingApply, setLoadingApply] = React.useState(false);
  const [loadingBack, setLoadingBack] = React.useState(false);
  const [loadingReset, setLoadingReset] = React.useState(false);

  return (
    <ScreenContainer style={styles.screen}>
      <View pointerEvents={'auto'}>
        <ButtonOutline
          onPress={() => {
            try {
              testCombineFilters();
              setDummyTwo(dummyTwo + 1);
              console.log(Constants['combinedFiltersArray'].toString());
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ButtonOutline_8B}
          title={'Get Started'}
        />
        <FlatList
          data={Constants['combinedFiltersArray']}
          renderItem={({ item }) => {
            const listData = item;
            return (
              <>
                {!listData ? null : (
                  <View
                    style={[
                      styles.ViewzV,
                      { backgroundColor: theme.colors.primary },
                    ]}
                    pointerEvents={'auto'}
                  >
                    <Text style={{ color: theme.colors.strong }}>
                      {listData}
                    </Text>
                  </View>
                )}
              </>
            );
          }}
          contentContainerStyle={styles.FlatListrZContent}
          numColumns={1}
        />
        <Text style={{ color: theme.colors.strong }}>
          {Constants['combinedFiltersArray']}
        </Text>
      </View>

      <Modal
        style={[
          styles.Modal_5J,
          {
            backgroundColor: theme.colors.background,
            borderColor: theme.colors.background,
          },
        ]}
        animationType={'slide'}
        presentationStyle={'pageSheet'}
        transparent={false}
      >
        <DatePicker
          onDateChange={newDatePickerValue => {
            const date = newDatePickerValue;
            try {
              setDate(date);
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.DatePickerZt}
          label={'Date'}
          mode={'date'}
          leftIconMode={'inset'}
          type={'solid'}
          date={date}
        />
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidMc: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: 8,
  },
  ButtonSolidz2: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidGH: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginRight: 8,
  },
  ButtonSolidJ9: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidap: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidX8: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidQs: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  TextTf: {
    fontSize: 12,
  },
  ButtonSolidAX: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewVz: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  View_43: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableEQ: {
    borderTopWidth: 8,
  },
  ViewzD: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_84: {
    borderTopWidth: 8,
  },
  ViewFC: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablemX: {
    borderTopWidth: 8,
  },
  Viewb4: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablemC: {
    borderTopWidth: 8,
  },
  ViewMH: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablern: {
    borderTopWidth: 8,
  },
  Viewnm: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchableul: {
    borderTopWidth: 8,
  },
  ViewlF: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablezp: {
    borderTopWidth: 8,
  },
  ViewG6: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableLk: {
    borderTopWidth: 8,
  },
  Viewpn: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  ButtonOutline_8B: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ViewzV: {
    marginTop: 8,
    minHeight: 8,
  },
  FlatListrZContent: {
    flex: 1,
  },
  DatePickerw7: {
    marginTop: 60,
  },
  DatePickerCi: {
    marginTop: 60,
  },
  ViewZU: {
    width: '100%',
    height: '100%',
    opacity: 0.37,
  },
  Modalia: {
    opacity: 1,
  },
  DatePickerZt: {
    marginTop: 60,
  },
  Viewr7: {
    opacity: 0.57,
    height: '100%',
  },
  Modal_5J: {
    opacity: 0.52,
  },
  screen: {
    paddingTop: 20,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
});

export default withTheme(MyBetsTestScreenFilters);
