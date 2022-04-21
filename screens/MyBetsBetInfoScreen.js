import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { parseBoolean } from '../utils';
import { Icon, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const MyBetsBetInfoScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      const setGlobalVariableValue = GlobalVariables.useSetValue();
      const typeTeaserCompare = (type) => {
  return type === "teaser";
};

const cashoutOutcomeCompare = (outcome) => {
  return outcome === "cashout";
};

const segmentExists = (segment) => {
  return segment == null ? "" : "(" + segment + ") ";
};

const propDetailsMetricSpecial = (metricSpecial) => {
  return metricSpecial == null ? "" : metricSpecial.charAt(0).toUpperCase() + metricSpecial.slice(1) + " ";
};

const lossOutcomeCompare = (outcome) => {
  return outcome === "loss" || outcome === "halfloss";
};

const halflossOutcomeCompare = (outcome) => {
  return outcome === "halfloss";
};

const winOutcomeCompare = (outcome) => {
  return outcome === "win" || outcome === "halfwin";
};

const testFunctionBetId = (id) => {
  return "SLIP_ea60c952a6fa43a5b4c9597ecb03836d";
};

const typeStraightCompare = (type) => {
  return type === "straight";
};

const netProfitSuffix = (netProfit) => {
    // Old suffix
// return netProfit < 0 ? "-$" + Math.abs(netProfit/100) : "$" + (netProfit/100);

let res = ((Math.abs(netProfit))/100).toFixed(2);
let lastIndex = res[res.length - 1];
let secondLastIndex = res[res.length - 2];
const comp = lastIndex == 0 && secondLastIndex == 0
if(comp) {
res = parseInt(res)
};

if(netProfit < 0) {
return "-$" + res;
} else {
return "$" + res;
}
  };

const dateTimeStandard = (startTime) => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date(startTime)
let str = month[date.getMonth()] + " " + date.getDate() + ", "
if(date.getFullYear() === new Date().getFullYear()){
str = str
}else{
str = str + date.getFullYear() + ", "
}
if(date.getHours() >= 12){
if(date.getHours() == 12){
  str = str + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "p"
}else{
  str = str + (date.getHours() - 12) + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "p"
}
}else{
if(date.getHours() == 0){
  str = str + (date.getHours() + 12) + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "a"
}else{
  str = str + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "a"
}
}
return str


function pad(n) {
  return (n < 10) ? ("0" + n) : n;
}
  };

const propositionTotal = (proposition) => {
  return proposition === "total";
};

const spacingSuffix = (x) => {
  return x == null ? "" : x + " ";
};

const typeSingleCompare = (type) => {
  return type === "single";
};

const voidOutcomeCompare = (outcome) => {
  return outcome === "void";
};

const futureHideDate = (future) => {
  return future == true;
};

const bookRegionSyntax = (abbr) => {
  return "(" + abbr.toUpperCase() + ")";
};

const typeParlayCompare = (type) => {
  return type === "parlay";
};

const atRiskSuffix = (atRisk) => {
    // Old Suffix
// return "$" + (atRisk/100);

let res = ((Math.abs(atRisk))/100).toFixed(2);
let lastIndex = res[res.length - 1];
let secondLastIndex = res[res.length - 2];
const comp = lastIndex == 0 && secondLastIndex == 0
if(comp) {
res = parseInt(res)
};

if(atRisk < 0) {
return "-$" + res;
} else {
return "$" + res;
}
  };

const liveBetExists = (live) => {
  return live == true ? "(Live)" : "";
};

const oddsAmericanSyntax = (oddsAmerican) => {
  return oddsAmerican < 0 ? "(" + oddsAmerican + ") " : "(+" + oddsAmerican + ") ";
};

const halfwinOutcomeCompare = (outcome) => {
  return outcome === "halfwin";
};

const typeMultilegCompare = (type) => {
  return type === "parlay" || type === "teaser";
};

const dateStandard = (startTime) => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date(startTime)
let str = month[date.getMonth()] + " " + date.getDate();
if(date.getFullYear() === new Date().getFullYear()){
str = str
}else{
str = str + ", " + date.getFullYear();
}
return str
  };

const timePlacedSyntax = (timePlaced) => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date(timePlaced)

if (timePlaced == null){
return ""
}else{
let str = " (" + month[date.getMonth()] + " " + date.getDate() + ", "
if(date.getFullYear() === new Date().getFullYear()){
  str = str
}else{
  str = str + date.getFullYear() + ", "
}
if(date.getHours() >= 12){
  if(date.getHours() == 12){
    str = str + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "p"
  }else{
    str = str + (date.getHours() - 12) + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "p"
  }
}else{
  if(date.getHours() == 0){
    str = str + (date.getHours() + 12) + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "a"
  }else{
    str = str + date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + "a"
  }
}
return str + ")"
}
  };

const lineSuffix = (line) => {
  if(line == null){return ""}
else if(line <= 0){return line + " "}
else if(line > 0){return "+" + line + " "};
};

const toWinSuffix = (toWin) => {
    // Old Suffix
// return "$" + (toWin/100);

let res = ((Math.abs(toWin))/100).toFixed(2);
let lastIndex = res[res.length - 1];
let secondLastIndex = res[res.length - 2];
const comp = lastIndex == 0 && secondLastIndex == 0
if(comp) {
res = parseInt(res)
};

if(toWin < 0) {
return "-$" + res;
} else {
return "$" + res;
}
  };

const pendingOutcomeCompare = (outcome) => {
  return outcome === "pending" || outcome == null;
};

const pushOutcomeCompare = (outcome) => {
  return outcome === "push";
};

const parlayLegCount = (bets) => {
  return bets.length;
};

const eventNotExist = (event) => {
  return event == null;
};

const positionSuffix = (position) => {
  return position == null ? "" : position + " ";
};

const futureBetExists = (future) => {
  return future == true ? "(Future) " : "";
};

const propositionUncommonDisplay = (proposition) => {
  if(proposition == null){return ""}
else if(proposition === "spread"){return ""}
else if(proposition === "total"){return ""}
else if(proposition === "moneyline"){return ""}
else if(proposition === "method of result"){return ""}
else {return proposition.charAt(0).toUpperCase() + proposition.slice(1) + " "};
};

const outcomeNullCompare = (outcome) => {
  return outcome == null ? true : null;
};

const typePropCompare = (type) => {
  return type === "prop";
};

const eventLeagueSuffix = (league) => {
  return league == null ? "" : league + " | ";
};

const testFunctionUserId = (id) => {
  return "0ab65253-7104-4712-b2c5-bdac5be81862";
};
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   scrollable={true} hasSafeArea={false}>
        
      <View  style={styles.Viewbm} pointerEvents={"auto"}>
        
<SwaggerAPIApi.FetchGetBetslipsByBettorIdAndBetslipGET
  
  betslipId={(() => {try { return props.route?.params?.Bet ?? "" } catch(e) { console.error(e); return "" }})()} userId={Constants["internalId"]}
  
 >
  {({ loading, error, data, refetchGetBetslipsByBettorIdAndBetslip }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (<>
      <View   >
        
      <View  style={styles.Viewtb} >
        
      <View  style={styles.ViewUd} >
        <>{ !(pendingOutcomeCompare(fetchData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={32} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(fetchData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle-sharp"} size={32} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(fetchData?.outcome)) ? null : <Icon   size={32} color={theme.colors.good} name={"Ionicons/ios-checkmark-circle-sharp"} /> }</><>{ !(voidOutcomeCompare(fetchData?.outcome)) ? null : <Icon   color={theme.colors.light} name={"Ionicons/ios-remove-circle-sharp"} size={32} /> }</><>{ !(pushOutcomeCompare(fetchData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle-sharp"} color={theme.colors.light} size={32} /> }</><>{ !(cashoutOutcomeCompare(fetchData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle-sharp"} size={32} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.ViewOT} pointerEvents={"auto"}>
        <>{ !(typeSingleCompare(fetchData?.type)) ? null : <FlatList data={fetchData?.bets} renderItem={({ item }) => { const singleBetsData = item; return (<><>{ propositionTotal(singleBetsData?.proposition) ? null : 
      <Text  style={[styles.TextqT, { color: theme.colors.background_inverse }]} >
        {spacingSuffix(singleBetsData?.propDetails?.player)}{spacingSuffix(singleBetsData?.propDetails?.team)}{propositionUncommonDisplay(singleBetsData?.proposition)}{spacingSuffix(singleBetsData?.position)}{lineSuffix(singleBetsData?.line)}{propDetailsMetricSpecial(singleBetsData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(fetchData?.oddsAmerican)}{segmentExists(singleBetsData?.segment)}{futureBetExists(singleBetsData?.propDetails?.future)}{liveBetExists(singleBetsData?.live)}
      </Text>
     }</><>{ !(propositionTotal(singleBetsData?.proposition)) ? null : 
      <Text  style={[styles.Textw4, { color: theme.colors.background_inverse }]} >
        {spacingSuffix(singleBetsData?.propDetails?.player)}{spacingSuffix(singleBetsData?.propDetails?.team)}{spacingSuffix(singleBetsData?.position)}{spacingSuffix(singleBetsData?.line)}{propDetailsMetricSpecial(singleBetsData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(fetchData?.oddsAmerican)}{segmentExists(singleBetsData?.segment)}{futureBetExists(singleBetsData?.propDetails?.future)}{liveBetExists(singleBetsData?.live)}
      </Text>
     }</><>{ eventNotExist(singleBetsData?.event) ? null : 
      <Text  style={[styles.TextJv, { color: theme.colors.light }]} >
        {eventLeagueSuffix(singleBetsData?.event?.league)}{singleBetsData?.event?.name}
      </Text>
     }</><>{ eventNotExist(singleBetsData?.event) ? null : 
      <Text  style={[styles.Textxk, { color: theme.colors.light }]} >
        {dateTimeStandard(singleBetsData?.event?.startTime)}
      </Text>
     }</></>) }}  contentContainerStyle={styles.FlatList_3rContent} numColumns={1} /> }</><>{ !(typeParlayCompare(fetchData?.type)) ? null : 
      <Text  style={[styles.TextHT, { color: theme.colors.background_inverse }]} >
        {parlayLegCount(fetchData?.bets)}{"X Parlay "}{oddsAmericanSyntax(fetchData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeTeaserCompare(fetchData?.type)) ? null : 
      <Text  style={[styles.TextD5, { color: theme.colors.background_inverse }]} >
        {"Teaser "}{oddsAmericanSyntax(fetchData?.oddsAmerican)}
      </Text>
     }</>
      </View>
    
      </View>
    
      <View  style={styles.ViewUB} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.ViewZa, { borderRadius: 6, backgroundColor: theme.colors.divider, borderColor: theme.colors.divider }]} >
        
      <View  style={styles.Viewkb} pointerEvents={"auto"}>
        
      <View  style={styles.ViewVT} >
        
      <View  style={styles.ViewKS} >
        
      <Text  style={[styles.TextZx, { color: theme.colors.background_inverse }]} >
        {atRiskSuffix(fetchData?.atRisk)}
      </Text>
    
      </View>
    
      <Text  style={[styles.Textz2, { color: theme.colors.light }]} >
        {"Risk"}
      </Text>
    
      </View>
    
      <View  style={styles.View_2K} >
        
      <View  style={styles.ViewVg} >
        
      <Text  style={[styles.TextZR, { color: theme.colors.background_inverse }]} >
        {toWinSuffix(fetchData?.toWin)}
      </Text>
    
      </View>
    
      <Text  style={[styles.Text_8x, { color: theme.colors.light }]} >
        {"To Win"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewHt} >
        
      <View  style={styles.ViewEI} >
        <>{ !(pendingOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.Textbn, { color: theme.colors.background_inverse }]} >
        {"-"}
      </Text>
     }</><>{ !(lossOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.Text_4b, { color: theme.colors.error }]} >
        {netProfitSuffix(fetchData?.netProfit)}
      </Text>
     }</><>{ !(winOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.Text_4d, { color: theme.colors.good }]} >
        {netProfitSuffix(fetchData?.netProfit)}
      </Text>
     }</><>{ !(voidOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.TextmD, { color: theme.colors.background_inverse }]} >
        {netProfitSuffix(fetchData?.netProfit)}
      </Text>
     }</><>{ !(cashoutOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.TextPM, { color: theme.colors.fair }]} >
        {netProfitSuffix(fetchData?.netProfit)}
      </Text>
     }</><>{ !(pushOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.TextgL, { color: theme.colors.background_inverse }]} >
        {netProfitSuffix(fetchData?.netProfit)}
      </Text>
     }</>
      </View>
    <>{ !(cashoutOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.TextIb, { color: theme.colors.fair }]} >
        {"Cashout"}
      </Text>
     }</><>{ !(halfwinOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.TextSu, { color: theme.colors.good }]} >
        {"Half Win"}
      </Text>
     }</><>{ !(halflossOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.TextOL, { color: theme.colors.error }]} >
        {"Half Loss"}
      </Text>
     }</><>{ !(voidOutcomeCompare(fetchData?.outcome)) ? null : 
      <Text  style={[styles.TextYo, { color: theme.colors.background_inverse }]} >
        {"Void"}
      </Text>
     }</>
      <Text  style={[styles.TextSI, { color: theme.colors.light }]} >
        {"Net Profit"}
      </Text>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <Text  style={[styles.Textgx, { color: theme.colors.light }]} >
        {"Bet on "}{fetchData?.book?.name}
      </Text>
    <>{ !(typeSingleCompare(fetchData?.type)) ? null : 
      <Text  style={[styles.TextJd, { color: theme.colors.light }]} >
        {fetchData?.description}
      </Text>
     }</>
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      </View>
    <>{ !(typeMultilegCompare(fetchData?.type)) ? null : 
      <View  style={styles.View_4X} pointerEvents={"auto"}>
        <>{ Constants["toggleMultilegBetInfo"] ? null : 
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleMultilegBetInfo",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewRo} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texth7, { color: theme.colors.background_inverse }]} >
        {"Bets"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
     }</><>{ !(Constants["toggleMultilegBetInfo"]) ? null : 
      <View   pointerEvents={"auto"}>
        
      <View  style={styles.ViewK7} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleMultilegBetInfo",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewTy} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextGB, { color: theme.colors.background_inverse }]} >
        {"Bets"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-up-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      </View>
    <FlatList data={fetchData?.bets} renderItem={({ item }) => { const listData = item; return (
      <View  style={styles.Viewiq} pointerEvents={"auto"}>
        
      <Surface  style={[styles.SurfacetW, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} elevation={1}>
        
      <View  style={styles.ViewOc} pointerEvents={"auto"}>
        
      <View  style={styles.Viewir} >
        <>{ !(pendingOutcomeCompare(listData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={32} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(listData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle-sharp"} size={32} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(listData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle-sharp"} size={32} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(listData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle-sharp"} size={32} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(listData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle-sharp"} size={32} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(listData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle-sharp"} size={32} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.Viewjb} pointerEvents={"auto"}>
        <>{ propositionTotal(listData?.proposition) ? null : 
      <Text  style={[styles.Textpo, { color: theme.colors.background_inverse }]} >
        {spacingSuffix(listData?.propDetails?.player)}{spacingSuffix(listData?.propDetails?.team)}{propositionUncommonDisplay(listData?.proposition)}{spacingSuffix(listData?.position)}{lineSuffix(listData?.line)}{propDetailsMetricSpecial(listData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(listData?.oddsAmerican)}{segmentExists(listData?.segment)}{futureBetExists(listData?.propDetails?.future)}{liveBetExists(listData?.live)}
      </Text>
     }</><>{ !(propositionTotal(listData?.proposition)) ? null : 
      <Text  style={[styles.Textta, { color: theme.colors.background_inverse }]} >
        {spacingSuffix(listData?.propDetails?.player)}{spacingSuffix(listData?.propDetails?.team)}{spacingSuffix(listData?.position)}{spacingSuffix(listData?.line)}{propDetailsMetricSpecial(listData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(listData?.oddsAmerican)}{segmentExists(listData?.segment)}{futureBetExists(listData?.propDetails?.future)}{liveBetExists(listData?.live)}
      </Text>
     }</>
      <Text  style={[styles.TextED, { color: theme.colors.light }]} >
        {eventLeagueSuffix(listData?.event?.league)}{listData?.bookDescription}
      </Text>
    <>{ eventNotExist(listData?.event) ? null : 
      <Text  style={[styles.Text_6m, { color: theme.colors.light }]} >
        {dateTimeStandard(listData?.event?.startTime)}
      </Text>
     }</>
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListOtContent} numColumns={1} />
      </View>
     }</>
      </View>
     }</></>)
  }}
</SwaggerAPIApi.FetchGetBetslipsByBettorIdAndBetslipGET>
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ ViewUd: {
alignContent: 'center',
alignItems: 'center',
justifyContent: 'center',
marginRight: 3,
}, TextqT: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, Textw4: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, TextJv: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
marginTop: 4,
}, Textxk: {
fontFamily: 'System', fontWeight: '400',
fontSize: 14,
marginTop: 4,
}, FlatList_3rContent: {
flex: 1,
}, TextHT: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, TextD5: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, ViewOT: {
flex: 1,
}, Viewtb: {
opacity: 1,
marginTop: 18,
marginLeft: '4%',
marginRight: '4%',
flexDirection: 'row',
alignItems: 'center',
}, TextZx: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
fontSize: 20,
}, ViewKS: {
alignContent: 'center',
}, Textz2: {
textAlign: 'center',
fontSize: 14,
alignSelf: 'center',
marginTop: 4,
}, ViewVT: {
alignSelf: 'center',
width: '30%',
}, TextZR: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
fontSize: 20,
}, ViewVg: {
alignContent: 'center',
}, Text_8x: {
textAlign: 'center',
fontSize: 14,
alignSelf: 'center',
marginTop: 4,
}, View_2K: {
alignSelf: 'center',
width: '30%',
}, Textbn: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
fontSize: 20,
}, Text_4b: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
fontSize: 20,
}, Text_4d: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
fontSize: 20,
}, TextmD: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
fontSize: 20,
}, TextPM: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
fontSize: 20,
}, TextgL: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, ViewEI: {
alignContent: 'center',
}, TextIb: {
fontSize: 8,
alignSelf: 'center',
textAlign: 'center',
}, TextSu: {
fontSize: 8,
textAlign: 'center',
alignSelf: 'center',
}, TextOL: {
fontSize: 8,
textAlign: 'center',
alignSelf: 'center',
}, TextYo: {
fontSize: 8,
textAlign: 'center',
alignSelf: 'center',
}, TextSI: {
textAlign: 'center',
fontSize: 14,
alignSelf: 'center',
marginTop: 4,
}, ViewHt: {
alignSelf: 'center',
width: '30%',
}, Viewkb: {
flexDirection: 'row',
justifyContent: 'space-between',
}, Textgx: {
marginTop: 16,
fontSize: 12,
textAlign: 'center',
}, TextJd: {
marginTop: 16,
fontSize: 12,
textAlign: 'center',
}, ViewZa: {
paddingLeft: 12,
paddingTop: 12,
paddingRight: 12,
paddingBottom: 12,
borderLeftWidth: 1,
borderTopWidth: 1,
borderRightWidth: 1,
borderBottomWidth: 1,
}, ViewUB: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 10,
}, Texth7: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewRo: {
flexDirection: 'row',
alignItems: 'center',
}, TextGB: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewTy: {
flexDirection: 'row',
alignItems: 'center',
}, ViewK7: {
paddingBottom: 4,
}, Viewir: {
alignContent: 'center',
marginRight: 6,
alignItems: 'center',
justifyContent: 'center',
}, Textpo: {
fontFamily: 'System', fontWeight: '700',
}, Textta: {
fontFamily: 'System', fontWeight: '700',
}, TextED: {
fontSize: 12,
}, Text_6m: {
fontSize: 12,
}, Viewjb: {
alignItems: 'flex-start',
justifyContent: 'center',
flex: 1,
}, ViewOc: {
flexDirection: 'row',
}, SurfacetW: {
paddingTop: 6,
paddingLeft: 6,
paddingBottom: 6,
paddingRight: 6,
}, Viewiq: {
marginTop: 6,
}, FlatListOtContent: {
flex: 1,
}, View_4X: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 28,
marginBottom: 18,
}, FetchPp: {
minHeight: 40,
}, Viewbm: {
minHeight: 50,
flexGrow: 1,
} });


export default withTheme(MyBetsBetInfoScreen);