import React from 'react';
import { Icon, ScreenContainer, Surface, withTheme } from '@draftbit/ui';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const DashboardGradesScreen = props => {
      
      
      
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   scrollable={true} hasSafeArea={false}>
        
      <View   >
        
      <View   >
        
      <View  style={styles.ViewFs} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.View_4G, { borderRadius: 6, backgroundColor: theme.colors.divider, borderColor: theme.colors.divider }]} >
        
      <View  style={styles.ViewyU} >
        <Icon   name={"Ionicons/ios-cash-sharp"} color={theme.colors.background_inverse} size={45} />
      </View>
    
      <View  style={styles.Viewdv} >
        
      <Text  style={[styles.TextNY, { color: theme.colors.background_inverse }]} ellipsizeMode={"tail"} >
        {"Unit Size Consistency Grade"}
      </Text>
    
      <Text  style={{ color: theme.colors.light }} ellipsizeMode={"tail"} >
        {"How consistent your bets are across various leagues. Sticking to sports you're the best at improves this grade."}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      <View  style={styles.View_4E} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.ViewMG, { borderRadius: 6, backgroundColor: theme.colors.divider, borderColor: theme.colors.divider }]} >
        
      <View  style={styles.ViewSV} >
        <Icon   name={"Ionicons/ios-american-football-sharp"} color={theme.colors.background_inverse} size={45} />
      </View>
    
      <View  style={styles.View_7e} >
        
      <Text  style={[styles.Textnf, { color: theme.colors.background_inverse }]} ellipsizeMode={"tail"} >
        {"League Consistency Grade"}
      </Text>
    
      <Text  style={{ color: theme.colors.light }} ellipsizeMode={"tail"} >
        {"How consistent your bets are across various leagues. Sticking to sports you're the best at improves this grade."}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      <View  style={styles.ViewJt} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.ViewP8, { borderRadius: 6, backgroundColor: theme.colors.divider, borderColor: theme.colors.divider }]} >
        
      <View  style={styles.View_52} >
        <Icon   name={"Ionicons/ios-list-sharp"} color={theme.colors.background_inverse} size={45} />
      </View>
    
      <View  style={styles.ViewT5} >
        
      <Text  style={[styles.TextsZ, { color: theme.colors.background_inverse }]} ellipsizeMode={"tail"} >
        {"Best Line Grade"}
      </Text>
    
      <Text  style={{ color: theme.colors.light }} ellipsizeMode={"tail"} >
        {"How consistent your bets are across various leagues. Sticking to sports you're the best at improves this grade."}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      <View  style={styles.View_2m} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.View_4G, { borderRadius: 6, backgroundColor: theme.colors.divider, borderColor: theme.colors.divider }]} >
        
      <View  style={styles.ViewyJ} >
        <Icon   name={"MaterialCommunityIcons/traffic-cone"} color={theme.colors.background_inverse} size={45} />
      </View>
    
      <View  style={styles.ViewwQ} >
        
      <Text  style={[styles.Text_8B, { color: theme.colors.background_inverse }]} ellipsizeMode={"tail"} >
        {"Trap Avoidance Grade"}
      </Text>
    
      <Text  style={{ color: theme.colors.light }} ellipsizeMode={"tail"} >
        {"How consistent your bets are across various leagues. Sticking to sports you're the best at improves this grade."}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ ViewyU: {
alignSelf: 'center',
width: 75,
height: 75,
marginRight: 12,
justifyContent: 'center',
alignItems: 'center',
}, TextNY: {
fontFamily: 'System', fontWeight: '700',
}, Viewdv: {
alignSelf: 'center',
flex: 1,
}, View_4G: {
paddingLeft: 12,
paddingTop: 12,
paddingRight: 12,
paddingBottom: 12,
borderLeftWidth: 1,
borderTopWidth: 1,
borderRightWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
}, ViewFs: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 18,
}, ViewSV: {
alignSelf: 'center',
width: 75,
height: 75,
marginRight: 12,
justifyContent: 'center',
alignItems: 'center',
}, Textnf: {
fontFamily: 'System', fontWeight: '700',
}, View_7e: {
alignSelf: 'center',
flex: 1,
}, ViewMG: {
paddingLeft: 12,
paddingTop: 12,
paddingRight: 12,
paddingBottom: 12,
borderLeftWidth: 1,
borderTopWidth: 1,
borderRightWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
}, View_4E: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 10,
}, View_52: {
alignSelf: 'center',
width: 75,
height: 75,
marginRight: 12,
justifyContent: 'center',
alignItems: 'center',
}, TextsZ: {
fontFamily: 'System', fontWeight: '700',
}, ViewT5: {
alignSelf: 'center',
flex: 1,
}, ViewP8: {
paddingLeft: 12,
paddingTop: 12,
paddingRight: 12,
paddingBottom: 12,
borderLeftWidth: 1,
borderTopWidth: 1,
borderRightWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
}, ViewJt: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 10,
}, ViewyJ: {
alignSelf: 'center',
width: 75,
height: 75,
marginRight: 12,
justifyContent: 'center',
alignItems: 'center',
}, Text_8B: {
fontFamily: 'System', fontWeight: '700',
}, ViewwQ: {
alignSelf: 'center',
flex: 1,
}, View_4G: {
paddingLeft: 12,
paddingTop: 12,
paddingRight: 12,
paddingBottom: 12,
borderLeftWidth: 1,
borderTopWidth: 1,
borderRightWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
}, View_2m: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 10,
} });


export default withTheme(DashboardGradesScreen);