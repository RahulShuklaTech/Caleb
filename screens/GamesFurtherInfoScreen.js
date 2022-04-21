import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { parseBoolean } from '../utils';
import { Divider, Icon, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const GamesFurtherInfoScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      const setGlobalVariableValue = GlobalVariables.useSetValue();
      
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   scrollable={false} hasSafeArea={false}>
        
      <ScrollView  style={styles.ScrollViewj1}  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={true} bounces={true}>
        
      <View  style={styles.View_3F} pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={[styles.TextF1, { color: theme.colors.background_inverse }]} >
        {"MIL @ MIA"}
      </Text>
    
      <Text  style={[styles.Textrl, { color: theme.colors.light }]} >
        {"Jan 2, 2022, 12:30p"}
      </Text>
    
      </View>
    
      <Touchable   >
        
      <View  style={styles.Viewfw} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-flag"} color={theme.colors.primary} size={24} />
      <Text  style={[styles.Textcq, { color: theme.colors.primary }]} >
        {"Following"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable   >
        
      <View  style={styles.ViewJg} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-flag-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.ViewCq} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextwU, { color: theme.colors.background_inverse }]} >
        {"Line Alert"}
      </Text>
    <View   pointerEvents={"auto"} />
      </View>
    
      <View   >
        
      <View  style={styles.ViewZM} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleOddsSpread",
          value: false
        });
  setGlobalVariableValue({
          key: "toggleOddsTotal",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablesX} >
        
      <View  style={styles.Viewf1} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextbE, { color: theme.colors.background_inverse }]} >
        {"Spread"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleOddsTotal",
          value: false
        });
  setGlobalVariableValue({
          key: "toggleOddsMoneyline",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableZ6} >
        
      <View  style={styles.View_4h} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextFa, { color: theme.colors.background_inverse }]} >
        {"Total"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleOddsMoneyline",
          value: false
        });
  setGlobalVariableValue({
          key: "toggleOddsFutures",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_9U} >
        
      <View  style={styles.View_8a} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextAB, { color: theme.colors.background_inverse }]} >
        {"Moneyline"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleOddsFutures",
          value: false
        });
  setGlobalVariableValue({
          key: "toggleOddsSpread",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableQk} >
        
      <View  style={styles.ViewYN} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_0O, { color: theme.colors.background_inverse }]} >
        {"Futures"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.ViewFC} pointerEvents={"auto"}>
        
      <View  style={styles.Viewe4} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={styles.ViewS3} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextV0, { color: theme.colors.divider }]} >
        {"-"}
      </Text>
    
      <View  style={styles.ViewWq} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextjF, { color: theme.colors.background_inverse }]} >
        {"MIL"}
      </Text>
    <Icon  style={styles.IconHv} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      <Text  style={[styles.TextJQ, { color: theme.colors.background_inverse }]} >
        {"@"}
      </Text>
    
      <View  style={styles.ViewK1} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextMi, { color: theme.colors.background_inverse }]} >
        {"MIA"}
      </Text>
    <Icon  style={styles.IconSi} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      </View>
    
      </Surface>
    
      <ScrollView   showsVerticalScrollIndicator={false} bounces={false} horizontal={true} showsHorizontalScrollIndicator={false}>
        
      <View  style={styles.Viewp9} pointerEvents={"auto"}>
        
      <View  style={styles.View_7E} pointerEvents={"auto"}>
        <Divider  style={styles.DividerSw} color={theme.colors.divider} />
      <View  style={styles.ViewvM} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextLF, { color: theme.colors.light }]} >
        {"DraftKings"}
      </Text>
    
      <View  style={styles.Viewdn} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextY1, { color: theme.colors.background_inverse }]} >
        {"+2.5 (-110)"}
      </Text>
    <Icon  style={styles.IconbG} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      <Text  style={[styles.TextHT, { color: theme.colors.background }]} >
        {"-"}
      </Text>
    
      <View  style={styles.Viewfi} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textp0, { color: theme.colors.background_inverse }]} >
        {"-2.5 (-110)"}
      </Text>
    <Icon  style={styles.IconF7} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      </View>
    <Divider  style={styles.Dividerkt} color={theme.colors.divider} />
      </View>
    
      <View  style={styles.Viewbj} pointerEvents={"auto"}>
        <Divider  style={styles.DividerLc} color={theme.colors.divider} />
      <View  style={styles.Viewaw} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextLC, { color: theme.colors.light }]} >
        {"DraftKings"}
      </Text>
    
      <View  style={styles.ViewWK} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextHg, { color: theme.colors.background_inverse }]} >
        {"+2.5 (-110)"}
      </Text>
    <Icon  style={styles.IconAg} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      <Text  style={[styles.TextcS, { color: theme.colors.background }]} >
        {"-"}
      </Text>
    
      <View  style={styles.View_6r} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextJw, { color: theme.colors.background_inverse }]} >
        {"-2.5 (-110)"}
      </Text>
    <Icon  style={styles.Icon_72} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      </View>
    <Divider  style={styles.DividerB5} color={theme.colors.divider} />
      </View>
    
      <View  style={styles.ViewPm} pointerEvents={"auto"}>
        <Divider  style={styles.DividerqH} color={theme.colors.divider} />
      <View  style={styles.ViewK4} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextKO, { color: theme.colors.light }]} >
        {"DraftKings"}
      </Text>
    
      <View  style={styles.ViewGK} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texto3, { color: theme.colors.background_inverse }]} >
        {"+2.5 (-110)"}
      </Text>
    <Icon  style={styles.Iconmn} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      <Text  style={[styles.TextBe, { color: theme.colors.background }]} >
        {"-"}
      </Text>
    
      <View  style={styles.ViewPE} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextIG, { color: theme.colors.background_inverse }]} >
        {"-2.5 (-110)"}
      </Text>
    <Icon  style={styles.Iconaj} name={"MaterialIcons/stop-circle"} color={theme.colors.good} size={6} />
      </View>
    
      </View>
    <Divider  style={styles.Divideruz} color={theme.colors.divider} />
      </View>
    
      </View>
    
      </ScrollView>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewG1} >
        
      <View  style={styles.ViewKs} >
        
      <Text  style={[styles.TextnP, { color: theme.colors.background_inverse }]} >
        {"Trends"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewBi} >
        
      <Surface  style={[styles.Surface_2a, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} elevation={1}>
        
      <View  style={[styles.ViewCX, { backgroundColor: theme.colors.divider, borderRadius: 6, borderColor: theme.colors.divider }]} collapsable={false}>
        
      <View  style={styles.ViewLA} >
        <Icon   name={"AntDesign/exclamationcircle"} color={theme.colors.good} size={28} /><Icon   name={"AntDesign/exclamationcircle"} color={theme.colors.fair} size={28} />
      </View>
    
      <View  style={styles.Viewze} >
        
      <Text  style={{ color: theme.colors.light }}  ellipsizeMode={"head"}>
        {"Our simulation has MIA favored by -2 points, a -5.5 point difference from the William Hill line."}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      </View>
    
      </ScrollView>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ TextF1: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Textrl: {
fontSize: 12,
}, Textcq: {
fontSize: 8,
}, Viewfw: {
alignItems: 'center',
}, ViewJg: {
alignItems: 'center',
}, View_3F: {
marginTop: 18,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'space-between',
paddingLeft: '4%',
paddingRight: '4%',
}, TextwU: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewCq: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 28,
}, TextbE: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Viewf1: {
flexDirection: 'row',
alignItems: 'center',
}, TouchablesX: {
width: '50%',
}, TextFa: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, View_4h: {
flexDirection: 'row',
alignItems: 'center',
}, TouchableZ6: {
width: '50%',
}, TextAB: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, View_8a: {
flexDirection: 'row',
alignItems: 'center',
}, Touchable_9U: {
width: '50%',
}, Text_0O: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewYN: {
flexDirection: 'row',
alignItems: 'center',
}, TouchableQk: {
width: '50%',
}, ViewZM: {
marginTop: 28,
paddingLeft: '4%',
paddingRight: '4%',
}, TextV0: {
fontSize: 8,
marginBottom: 3,
fontFamily: 'System', fontWeight: '400',
}, TextjF: {
fontFamily: 'System', fontWeight: '700',
}, IconHv: {
marginLeft: 6,
}, ViewWq: {
alignItems: 'center',
flexDirection: 'row',
}, TextJQ: {
fontSize: 10,
}, TextMi: {
fontFamily: 'System', fontWeight: '700',
}, IconSi: {
marginLeft: 6,
}, ViewK1: {
alignItems: 'center',
flexDirection: 'row',
}, ViewS3: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 6,
paddingBottom: 8,
}, DividerSw: {
height: 1,
}, TextLF: {
marginTop: 6,
fontSize: 8,
fontFamily: 'System', fontWeight: '600',
marginBottom: 3,
}, TextY1: {
fontSize: 14,
}, IconbG: {
marginLeft: 3,
}, Viewdn: {
flexDirection: 'row',
alignItems: 'center',
}, TextHT: {
fontSize: 10,
}, Textp0: {
fontSize: 14,
}, IconF7: {
marginLeft: 3,
}, Viewfi: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 8,
}, ViewvM: {
alignItems: 'center',
}, Dividerkt: {
height: 1,
}, View_7E: {
width: 115,
}, DividerLc: {
height: 1,
}, TextLC: {
marginTop: 6,
fontSize: 8,
fontFamily: 'System', fontWeight: '600',
marginBottom: 3,
}, TextHg: {
fontSize: 14,
}, IconAg: {
marginLeft: 3,
}, ViewWK: {
flexDirection: 'row',
alignItems: 'center',
}, TextcS: {
fontSize: 10,
}, TextJw: {
fontSize: 14,
}, Icon_72: {
marginLeft: 3,
}, View_6r: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 8,
}, Viewaw: {
alignItems: 'center',
}, DividerB5: {
height: 1,
}, Viewbj: {
width: 115,
}, DividerqH: {
height: 1,
}, TextKO: {
marginTop: 6,
fontSize: 8,
fontFamily: 'System', fontWeight: '600',
marginBottom: 3,
}, Texto3: {
fontSize: 14,
}, Iconmn: {
marginLeft: 3,
}, ViewGK: {
flexDirection: 'row',
alignItems: 'center',
}, TextBe: {
fontSize: 10,
}, TextIG: {
fontSize: 14,
}, Iconaj: {
marginLeft: 3,
}, ViewPE: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 8,
}, ViewK4: {
alignItems: 'center',
}, Divideruz: {
height: 1,
}, ViewPm: {
width: 115,
}, Viewp9: {
flexDirection: 'row',
marginRight: 12,
}, Viewe4: {
flexDirection: 'row',
}, ViewFC: {
marginTop: 10,
paddingLeft: '4%',
}, TextnP: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, ViewKs: {
opacity: 1,
marginTop: 28,
marginLeft: '4%',
marginRight: '4%',
flexDirection: 'row',
alignItems: 'center',
}, ViewLA: {
alignContent: 'center',
marginRight: 12,
alignItems: 'center',
justifyContent: 'center',
}, Viewze: {
flex: 1,
maxHeight: 75,
justifyContent: 'center',
}, ViewCX: {
paddingLeft: 12,
paddingTop: 12,
paddingRight: 12,
paddingBottom: 12,
borderTopWidth: 1,
borderRightWidth: 1,
borderLeftWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
}, Surface_2a: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 10,
}, ViewBi: {
minHeight: 50,
marginBottom: 18,
}, ViewG1: {
minHeight: 50,
}, ScrollViewj1: {
flexGrow: 1,
} });


export default withTheme(GamesFurtherInfoScreen);