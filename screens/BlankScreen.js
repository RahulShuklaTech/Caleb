import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonOutline,
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
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const BlankScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const typeSpreadCompare = x => {
    return x === 'spreads';
  };

  const getBetType = x => {
    return x[1];
  };

  const getLeague = x => {
    return x[0];
  };

  const testSwitchFunction = bets => {
    let display = true;

    switch (x) {
      case 0:
        return display;
      default:
        let exist = false;
        if (x > 10) {
          exist;
        } else {
          exist = true;
        }

        if ((exist = false)) {
          display = false;
          console.log(display);
        }

        return display;
    }

    /*
switch (Constants.dummyVar.length) {
case 0:
  return true;
default:
  let exist = false
  if (x > 10) {
      exist;
  } else {
      exist = true;
  };

  if (exist = false) {
      return false;
  } else {
    return true;
  }
};

/////////

above this run a function to check if length is 0, or not. if it isn't, then 

const results = bets.filter(element => {
if (Constants.filterLeagueApply.length === 0) {
  return true;
} else if (Constants.filterLeagueApply.includes(element.event.league)) {
  return true;
} else if (Constants.filterLeagueApply.includes('otherLeagues')) {
  return (primaryLeagues.includes(element.event.league)) ? false : true;
} else {
  return false;
};
});


try {
  let exist = false
  for (let x = 0; x < bets.length; x++){
    //console.log(bets[x])
    if (Constants.filterLeagueApply.includes(bets[x].event.league)) {
      exist = true;
    } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
      exist = (primaryLeagues.includes(bets[x].event.league)) ? exist : true;
    } else {
      exist;
    };
  }
  return exist;
}
catch (y){
    return false;
};

*/
  };

  const filterList = list => {
    console.log(list, textInputValue);

    newList = list.filter(
      item =>
        item.awayTeam.includes(textInputValue) ||
        item.homeTeam.includes(textInputValue) ||
        item.awayTeam.toLowerCase().includes(textInputValue) ||
        item.homeTeam.toLowerCase().includes(textInputValue)
    );

    return newList;
  };

  const bestLineAwayMoneyline = bookmakers => {
    /*
var largestNumber = [0,0,0,0,0,0,0,0,0];
for(var arrayIndex = 0; arrayIndex < bookmakers.length; arrayIndex++) {
   for(var subArrayIndex = 0; subArrayIndex < bookmakers[arrayIndex].length; subArrayIndex++) {
       if(bookmakers[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = bookmakers[arrayIndex][subArrayIndex];
       }
   }
}
return largestNumber; // This returns an array
*/

    /////
    const arrayIndex = 0;
    var largestNumber = 0;
    for (var x = 0; x < bookmakers.length; x++) {
      if (bookmakers[arrayIndex] >= largestNumber) {
        largestNumber[arrayIndex] = bookmakers[arrayIndex][subArrayIndex];
      }
    }
    return largestNumber; // This returns an array

    //let exist = false;

    /*
if(bookmakers.awayTeamOddsAmerican === null) {
   return false;
} else if (bookmakers.awayTeamOddsAmerican > 0) {
   return true;
} else {
   return false;
}
*/

    /*

1. Use a given entry's odds American and line values 
  - Conditional display based on 'bookmakers'
  - Get the entry's index (variable is 'index' in this case)
2. Compare it to the values of the other items in the array using a for loop
3. 


///// Left off here VVVVVVV
const index = 0 // Will need to figure out how to get the proper index

if (bookmakers[index].awayTeamOddsAmerican === null) {
   return false;
} else {
   let exist = false;
   for (let x = 0; x < bookmakers.length; x++){
       if (bookmakers[index].awayTeamOddsAmerican >= bookmakers[x].awayTeamOddsAmerican) {
           exist = true;
       } else {
           exist;
       };
   };
   return exist;
};


function largestOfFour(bookmakers) {
  var largestNumber = [0,0,0,0];
  for(var arrayIndex = 0; arrayIndex < bookmakers.length; arrayIndex++) {
   for(var subArrayIndex = 0; subArrayIndex < bookmakers[arrayIndex].length; subArrayIndex++) {
      if(bookmakers[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
         largestNumber[arrayIndex] = bookmakers[arrayIndex][subArrayIndex];
       }
   }
}
return largestNumber;
}
*/

    /*
for (let x = 0; x < bookmakers.length; x++){
   if (bookmakers[x].awayTeamOddsAmerican === null) {
       return false;
   } else if (bookmakers[x].awayTeamOddsAmerican) {
       return true;
   } else if (
       Constants.filterUnderdogApply.includes('underdog')
       && ((betslips.bets[x].proposition === 'moneyline'
       && betslips.bets[x].oddsAmerican > 0)
       || (betslips.bets[x].proposition === 'spread'
       && betslips.bets[x].line > 0))
   ) {
   exist = true;
   } else {
   exist;
   };
};
return exist;
*/

    /*function loopUnderdog() {
       let exist = false;
       for (let x = 0; x < betslips.bets.length; x++){
           if (betslips.bets[x].proposition === null) {
           exist;
           } else if (
               Constants.filterUnderdogApply.includes('favorite')
               && ((betslips.bets[x].proposition === 'moneyline'
               && betslips.bets[x].oddsAmerican < 0)
               || (betslips.bets[x].proposition === 'spread'
               && betslips.bets[x].line < 0))
           ) {
           exist = true;
           } else if (
               Constants.filterUnderdogApply.includes('underdog')
               && ((betslips.bets[x].proposition === 'moneyline'
               && betslips.bets[x].oddsAmerican > 0)
               || (betslips.bets[x].proposition === 'spread'
               && betslips.bets[x].line > 0))
           ) {
           exist = true;
           } else {
           exist;
           };
       };
       return exist;
   };
   */
  };

  const emptySearchBar = () => {
    //console.log(textInputValue)

    setTextInputValue('');
  };

  const oddsChangeBetType = x => {
    Constants.oddsDisplayed[1] = x;
    return [Constants.oddsDisplayed[0], x];
  };

  const { theme } = props;

  const [dummyTwo, setDummyTwo] = React.useState(0);
  const [searchBarInput, setSearchBarInput] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer>
      <View pointerEvents={'auto'}></View>

      <View style={styles.ViewLl} pointerEvents={'auto'}>
        <Text style={[styles.Textx4, { color: theme.colors.error }]}>
          {'DISPLAY'}
        </Text>
        <ButtonOutline
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'oddsDisplayed',
                value: oddsChangeBetType('totals'),
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ButtonOutlineCw}
          title={'Totals'}
        />
        <ButtonOutline
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'oddsDisplayed',
                value: oddsChangeBetType('spreads'),
              });
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ButtonOutlinekI}
          title={'Spreads'}
        />
        <ButtonOutline
          onPress={() => {
            try {
              emptySearchBar();
            } catch (err) {
              console.error(err);
            }
          }}
          style={styles.ButtonOutlineHE}
          title={'Clear Search Bar'}
        />
        <TextInput
          onChangeText={newTextInputValue => {
            const textInputValue = newTextInputValue;
            try {
              setTextInputValue(textInputValue);
              setSearchBarInput(newTextInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.TextInputUy,
            { backgroundColor: theme.colors.background_inverse },
          ]}
          placeholder={'Enter a value...'}
          value={textInputValue}
          clearButtonMode={'while-editing'}
          autoCapitalize={'words'}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
        <View pointerEvents={'auto'}>
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
                <View style={styles.View_7l} pointerEvents={'auto'}>
                  <FlatList
                    data={filterList(fetchData)}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <View
                          style={[
                            styles.ViewwW,
                            { backgroundColor: theme.colors.divider },
                          ]}
                          pointerEvents={'auto'}
                        >
                          <Text
                            style={[
                              styles.TextRH,
                              { color: theme.colors.good },
                            ]}
                          >
                            {listData?.awayTeam}
                          </Text>

                          <Text
                            style={[
                              styles.Text_2J,
                              { color: theme.colors.good },
                            ]}
                          >
                            {listData?.homeTeam}
                          </Text>
                          <Divider
                            style={styles.Dividerw9}
                            color={theme.colors.error}
                          />
                        </View>
                      );
                    }}
                    contentContainerStyle={styles.FlatListz7Content}
                    numColumns={1}
                  />
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <Utils.CustomCodeErrorBoundary>
                      <CustomCode.GamesScrollList
                        data={filterList(fetchData)}
                      />
                    </Utils.CustomCodeErrorBoundary>
                  </ScrollView>
                </View>
              );
            }}
          </SwaggerAPIApi.FetchOddsDataGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageeQ: {
    width: 12,
    height: 12,
  },
  Imaget5: {
    width: 12,
    height: 12,
  },
  ImageL0: {
    width: 12,
    height: 12,
  },
  ImagepC: {
    width: 12,
    height: 12,
  },
  ImageCJ: {
    width: 12,
    height: 12,
  },
  ImageIF: {
    width: 12,
    height: 12,
  },
  ImagerS: {
    width: 12,
    height: 12,
  },
  ImageXl: {
    width: 12,
    height: 12,
  },
  Imagee1: {
    width: 12,
    height: 12,
  },
  ImageXX: {
    width: 12,
    height: 12,
  },
  ImageQy: {
    width: 12,
    height: 12,
  },
  Imageb9: {
    width: 12,
    height: 12,
  },
  Viewhi: {
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center',
  },
  Textx4: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  ButtonOutlineCw: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ButtonOutlinekI: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ButtonOutlineHE: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  TextInputUy: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 6,
  },
  ViewLl: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  TextRH: {
    fontSize: 10,
  },
  Text_2J: {
    fontSize: 10,
  },
  Dividerw9: {
    height: 1,
    width: '100%',
  },
  ViewwW: {
    height: 86,
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  FlatListz7Content: {
    flex: 1,
  },
  ViewlY: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  FlatList_26Content: {
    flex: 1,
  },
  FlatListMEContent: {
    flex: 1,
  },
  View_7l: {
    flex: 1,
    flexDirection: 'row',
  },
  FetchNd: {
    minHeight: 40,
  },
  TextNg: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextMS: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_89: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablejQ: {
    marginTop: 8,
  },
  TextP3: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewDN: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableWu: {
    marginTop: 8,
  },
  Textvy: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewUG: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchabledI: {
    marginTop: 8,
  },
  Text_5E: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewEd: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablem3: {
    marginTop: 8,
  },
  Text_1d: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewAP: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablebR: {
    marginTop: 8,
  },
  Text_3a: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewDJ: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableGa: {
    marginTop: 8,
  },
  ViewFo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  DividerTY: {
    height: 1,
    marginTop: 18,
  },
  ViewBA: {
    paddingTop: 28,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  Textqu: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextlU: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewt7: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablewh: {
    marginTop: 8,
  },
  TextOa: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewkk: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablePc: {
    marginTop: 8,
  },
  TextPK: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewel: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableRb: {
    marginTop: 8,
  },
  TextmB: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewwe: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablepn: {
    marginTop: 8,
  },
  TextpK: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewUE: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchabledO: {
    marginTop: 8,
  },
  TextGQ: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_7r: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_4Q: {
    marginTop: 8,
  },
  TextJd: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewSb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_2G: {
    marginTop: 8,
  },
  Texteo: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewHz: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableCD: {
    marginTop: 8,
  },
  TextvB: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewxB: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_5Q: {
    marginTop: 8,
  },
  Textd3: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewyR: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_2P: {
    marginTop: 8,
  },
  Text_5M: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewfY: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableF4: {
    marginTop: 8,
  },
  Text_3T: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewZZ: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablexf: {
    marginTop: 8,
  },
  Textft: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewKG: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablebv: {
    marginTop: 8,
  },
  TextNQ: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_6M: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablevo: {
    marginTop: 8,
  },
  TextJ0: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_1y: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchablelO: {
    marginTop: 8,
  },
  TextFj: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewRb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_2c: {
    marginTop: 8,
  },
  TextzI: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewMZ: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableA0: {
    marginTop: 8,
  },
  TextsJ: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewiI: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablek2: {
    marginTop: 8,
  },
  Viewac: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  DividernD: {
    height: 1,
    marginTop: 18,
  },
  View_0c: {
    paddingTop: 28,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  Textse: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Text_9R: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewDg: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableWI: {
    marginTop: 8,
  },
  TextlV: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewoh: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablei4: {
    marginTop: 8,
  },
  TextAK: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewXs: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableRU: {
    marginTop: 8,
  },
  TextlF: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewmo: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_1Z: {
    marginTop: 8,
  },
  Text_06: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_4o: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableCe: {
    marginTop: 8,
  },
  Textkq: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewvy: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_8b: {
    marginTop: 8,
  },
  TextjG: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  VieweX: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchablez9: {
    marginTop: 8,
  },
  TextE4: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewIr: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_8Q: {
    marginTop: 8,
  },
  View_02: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  DividerG5: {
    height: 1,
    marginTop: 18,
  },
  ViewJv: {
    paddingTop: 28,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
});

export default withTheme(BlankScreen);
