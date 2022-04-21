import React from 'react';
import Images from '../config/Images';
import { Icon, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const MyBetsShareScreen = props => {
      
      
      
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   scrollable={false} hasSafeArea={false}>
        
      <View   >
        
      <View  style={styles.ViewUq} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textyp, { color: theme.colors.background_inverse }]} >
        {"Zmannichols's record verified by"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewRy} pointerEvents={"auto"}>
        
      <View  style={styles.View_2e} >
        <Image  style={styles.ImageDV} resizeMode={"center"} source={Images.VaultLogoLightFontClearBackground} />
      </View>
    
      <Touchable   >
        
      <View  style={styles.Viewci} >
        <Icon   name={"Ionicons/ios-share-outline"} size={28} color={theme.colors.light} />
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.Viewuc} >
        
      <View  style={styles.Viewas} pointerEvents={"auto"}>
        
      <View  style={styles.ViewtE} pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.light }} >
        {"Filters applied:"}
      </Text>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.light }} >
        {"Unit Size: $100"}
      </Text>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewVz} >
        
      <View  style={[styles.ViewWE, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[styles.TextzQ, { color: theme.colors.strong }]} >
        {"Moneyline"}
      </Text>
    
      </View>
    
      <View  style={[styles.Viewl6, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[styles.TextRm, { color: theme.colors.strong }]} >
        {"Moneyline"}
      </Text>
    
      </View>
    
      <View  style={[styles.Viewn4, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[styles.TextPN, { color: theme.colors.strong }]} >
        {"Moneyline"}
      </Text>
    
      </View>
    
      <View  style={[styles.ViewSY, { borderRadius: theme.roundness, backgroundColor: theme.colors.light }]} >
        
      <Text  style={[styles.TextlF, { color: theme.colors.strong }]} >
        {"None"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewDs} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.Viewdr, { borderRadius: 6, backgroundColor: theme.colors.divider, borderColor: theme.colors.divider }]} >
        
      <View  style={styles.View_8U} >
        <View  style={styles.Viewmd}  />
      <Text  style={[styles.Text_51, { color: theme.colors.light }]} >
        {"Record"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewFC} >
        <View  style={styles.ViewPm}  />
      <Text  style={[styles.Textz3, { color: theme.colors.light }]} >
        {"Net"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewNd} >
        <View  style={styles.Viewal}  />
      <Text  style={[styles.TextaV, { color: theme.colors.light }]} >
        {"ROI"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewi8} >
        <View  style={styles.ViewJG}  />
      <Text  style={[styles.Textj9, { color: theme.colors.light }]} >
        {"CLV"}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      </View>
    
      </View>
    
      <ScrollView   showsVerticalScrollIndicator={true} bounces={true}>
        
      <View  style={styles.ViewwI} >
        
      <View  style={styles.ViewIz} >
        
      <View  style={styles.ViewvY} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} >
        
      <View  style={[styles.View_59, { backgroundColor: theme.colors.divider, borderRadius: 6, borderColor: theme.colors.divider }]} collapsable={false}>
        
      <View  style={styles.ViewdR} >
        
      <View  style={styles.ViewOU} >
        <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={20} color={theme.colors.light} /><Icon   name={"Ionicons/ios-close-circle-sharp"} size={20} color={theme.colors.error} /><Icon   name={"Ionicons/ios-checkmark-circle-sharp"} size={20} color={theme.colors.good} /><Icon   name={"Ionicons/ios-remove-circle-sharp"} size={20} color={theme.colors.light} /><Icon   name={"Ionicons/ios-arrow-undo-circle-sharp"} size={20} color={theme.colors.fair} />
      </View>
    
      <View  style={styles.ViewkS} >
        
      <Text  style={[styles.TextG2, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {"POR -7 (+130) (First Half) asdf;adsf ;kj dj k j djk dk l dk l dfk jl;dfas kjldsafkjl kjl asdfk ja kldf ask jl df jdfk j daak dfs"}
      </Text>
    
      <View  style={styles.ViewSW} pointerEvents={"auto"}>
        
      <View  style={styles.ViewbS} >
        <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={12} color={theme.colors.light} /><Icon   name={"Ionicons/ios-close-circle-sharp"} size={12} color={theme.colors.error} /><Icon   name={"Ionicons/ios-checkmark-circle-sharp"} size={12} color={theme.colors.good} /><Icon   name={"Ionicons/ios-remove-circle-sharp"} size={12} color={theme.colors.light} /><Icon   name={"Ionicons/ios-arrow-undo-circle-sharp"} size={12} color={theme.colors.fair} />
      </View>
    
      <View  style={styles.ViewTa} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textij, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {"CLE +4.5 (-110) (First Half) asdfs dakjldsf  f fdjkdfak fds kl kk lfkjdsafkjldafs kl dfk d kl dfskj fkj fsa"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.Viewvl} >
        
      <View  style={styles.ViewpV} >
        
      <Text  style={[styles.TextPU, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"$100"}
      </Text>
    
      <Text  style={[styles.Text_8D, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"Risk"}
      </Text>
    
      <Text  style={[styles.TextUN, { color: theme.colors.error }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"-$100"}
      </Text>
    
      <Text  style={[styles.Textok, { color: theme.colors.good }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"$100"}
      </Text>
    
      <Text  style={[styles.Text_3w, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"$0"}
      </Text>
    
      <Text  style={[styles.Textox, { color: theme.colors.fair }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"-$50"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewAY} >
        
      <View  style={styles.View_27} pointerEvents={"auto"}>
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} >
        
      <View  style={[styles.ViewFX, { backgroundColor: theme.colors.divider, borderRadius: 6, borderColor: theme.colors.divider }]} collapsable={false}>
        
      <View  style={styles.ViewMJ} >
        
      <View  style={styles.ViewrA} >
        <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={20} color={theme.colors.light} /><Icon   name={"Ionicons/ios-close-circle-sharp"} size={20} color={theme.colors.error} /><Icon   name={"Ionicons/ios-checkmark-circle-sharp"} size={20} color={theme.colors.good} /><Icon   name={"Ionicons/ios-remove-circle-sharp"} size={20} color={theme.colors.light} /><Icon   name={"Ionicons/ios-arrow-undo-circle-sharp"} size={20} color={theme.colors.fair} />
      </View>
    
      <View  style={styles.Viewtb} >
        
      <Text  style={[styles.Textwe, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {"POR -7 (+130) (First Half) asdf;adsf ;kj dj k j djk dk l dk l dfk jl;dfas kjldsafkjl kjl asdfk ja kldf ask jl df jdfk j daak dfs"}
      </Text>
    
      <View  style={styles.Viewba} pointerEvents={"auto"}>
        
      <View  style={styles.View_4s} >
        <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={12} color={theme.colors.light} /><Icon   name={"Ionicons/ios-close-circle-sharp"} size={12} color={theme.colors.error} /><Icon   name={"Ionicons/ios-checkmark-circle-sharp"} size={12} color={theme.colors.good} /><Icon   name={"Ionicons/ios-remove-circle-sharp"} size={12} color={theme.colors.light} /><Icon   name={"Ionicons/ios-arrow-undo-circle-sharp"} size={12} color={theme.colors.fair} />
      </View>
    
      <View  style={styles.ViewxE} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextxY, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {"CLE +4.5 (-110) (First Half) asdfs dakjldsf  f fdjkdfak fds kl kk lfkjdsafkjldafs kl dfk d kl dfskj fkj fsa"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.View_8g} >
        
      <View  style={styles.ViewrC} >
        
      <Text  style={[styles.Texty4, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"$100"}
      </Text>
    
      <Text  style={[styles.TextEf, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"Risk"}
      </Text>
    
      <Text  style={[styles.TextYH, { color: theme.colors.error }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"-$100"}
      </Text>
    
      <Text  style={[styles.TextaG, { color: theme.colors.good }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"$100"}
      </Text>
    
      <Text  style={[styles.TextMy, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"$0"}
      </Text>
    
      <Text  style={[styles.Textad, { color: theme.colors.fair }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"-$50"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      </View>
    
      </View>
    
      </View>
    
      </ScrollView>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Textyp: {
fontFamily: 'System', fontWeight: '700',
}, ViewUq: {
marginTop: 12,
marginLeft: '4%',
marginRight: '4%',
}, ImageDV: {
opacity: 1,
height: '100%',
width: '100%',
}, View_2e: {
alignContent: 'center',
justifyContent: 'center',
minWidth: '33%',
maxWidth: '34%',
maxHeight: 40,
}, Viewci: {
justifyContent: 'center',
alignItems: 'flex-end',
}, ViewRy: {
flexDirection: 'row',
justifyContent: 'space-between',
marginLeft: '4%',
marginRight: '4%',
}, ViewtE: {
flexDirection: 'row',
justifyContent: 'space-between',
}, TextzQ: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, ViewWE: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, TextRm: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, Viewl6: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, TextPN: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, Viewn4: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, TextlF: {
fontSize: 10,
fontFamily: 'System', fontWeight: '400',
}, ViewSY: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 3,
paddingBottom: 3,
marginRight: 3,
marginTop: 4,
}, ViewVz: {
flexWrap: 'wrap',
flexDirection: 'row',
}, Viewas: {
marginLeft: '4%',
marginRight: '4%',
}, Viewmd: {
minHeight: 50,
alignContent: 'center',
}, Text_51: {
textAlign: 'center',
fontSize: 14,
marginTop: 6,
alignSelf: 'center',
}, View_8U: {
alignSelf: 'center',
width: '20%',
}, ViewPm: {
minHeight: 50,
alignContent: 'center',
}, Textz3: {
textAlign: 'center',
fontSize: 14,
marginTop: 6,
alignSelf: 'center',
}, ViewFC: {
alignSelf: 'center',
width: '20%',
}, Viewal: {
minHeight: 50,
alignContent: 'center',
}, TextaV: {
textAlign: 'center',
fontSize: 14,
marginTop: 6,
alignSelf: 'center',
}, ViewNd: {
alignSelf: 'center',
width: '20%',
}, ViewJG: {
minHeight: 50,
alignContent: 'center',
}, Textj9: {
textAlign: 'center',
fontSize: 14,
marginTop: 6,
alignSelf: 'center',
}, Viewi8: {
alignSelf: 'center',
width: '20%',
}, Viewdr: {
paddingLeft: 12,
paddingTop: 12,
paddingRight: 12,
paddingBottom: 12,
borderLeftWidth: 1,
borderTopWidth: 1,
borderRightWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewDs: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
}, Viewuc: {
marginTop: 20,
paddingBottom: 8,
}, ViewOU: {
alignContent: 'center',
marginRight: 3,
alignItems: 'center',
justifyContent: 'center',
}, TextG2: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, ViewbS: {
alignContent: 'center',
marginRight: 1,
alignItems: 'center',
justifyContent: 'center',
}, Textij: {
fontSize: 10,
}, ViewTa: {
flex: 1,
justifyContent: 'center',
}, ViewSW: {
flexDirection: 'row',
alignItems: 'center',
}, ViewkS: {
marginRight: 6,
justifyContent: 'center',
flex: 1,
}, ViewdR: {
flexDirection: 'row',
width: '75%',
}, TextPU: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, Text_8D: {
fontFamily: 'System', fontWeight: '400',
fontSize: 8,
}, TextUN: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, Textok: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, Text_3w: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, Textox: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, ViewpV: {
alignItems: 'flex-end',
justifyContent: 'center',
flex: 1,
}, Viewvl: {
flexDirection: 'row',
justifyContent: 'flex-end',
width: '20%',
}, View_59: {
paddingLeft: 3,
paddingTop: 3,
paddingRight: 3,
paddingBottom: 3,
borderTopWidth: 1,
borderRightWidth: 1,
borderLeftWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewvY: {
marginTop: 2,
}, ViewIz: {
marginLeft: '4%',
marginRight: '4%',
}, ViewrA: {
alignContent: 'center',
marginRight: 3,
alignItems: 'center',
justifyContent: 'center',
}, Textwe: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, View_4s: {
alignContent: 'center',
marginRight: 1,
alignItems: 'center',
justifyContent: 'center',
}, TextxY: {
fontSize: 10,
}, ViewxE: {
flex: 1,
justifyContent: 'center',
}, Viewba: {
flexDirection: 'row',
alignItems: 'center',
}, Viewtb: {
marginRight: 6,
justifyContent: 'center',
flex: 1,
}, ViewMJ: {
flexDirection: 'row',
width: '75%',
}, Texty4: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, TextEf: {
fontFamily: 'System', fontWeight: '400',
fontSize: 8,
}, TextYH: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, TextaG: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, TextMy: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, Textad: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, ViewrC: {
alignItems: 'flex-end',
justifyContent: 'center',
flex: 1,
}, View_8g: {
flexDirection: 'row',
justifyContent: 'flex-end',
width: '20%',
}, ViewFX: {
paddingLeft: 3,
paddingTop: 3,
paddingRight: 3,
paddingBottom: 3,
borderTopWidth: 1,
borderRightWidth: 1,
borderLeftWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
justifyContent: 'space-between',
}, View_27: {
marginTop: 2,
}, ViewAY: {
marginLeft: '4%',
marginRight: '4%',
}, ViewwI: {
paddingBottom: 18,
} });


export default withTheme(MyBetsShareScreen);