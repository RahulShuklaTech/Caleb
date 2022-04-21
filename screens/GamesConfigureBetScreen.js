import React from 'react';
import { ButtonOutline, Container, Divider, Icon, Picker, ScreenContainer, Slider, SwitchRow, TextField, Touchable, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

    

    const GamesConfigureBetScreen = props => {
      
      
      
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [pickerValue, setPickerValue] = React.useState(undefined);
const [sliderValue, setSliderValue] = React.useState(0);
const [switchValue, setSwitchValue] = React.useState(false);
const [textFieldValue, setTextFieldValue] = React.useState("");
      
      

      return (
        
      <ScreenContainer   scrollable={true} hasSafeArea={false}>
        
      <Container  style={{ borderRadius: 0, borderColor: theme.colors.divider }} backgroundImageResizeMode={"cover"} elevation={1}>
        
      <View  style={[styles.ViewnH, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewwJ} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.ViewRv} >
        <Icon   name={"Ionicons/ios-trash-outline"} size={32} color={theme.colors.error} />
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.Viewfp} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextFi, { color: theme.colors.background_inverse }]} >
        {"MIA +3.5 (-110)"}
      </Text>
    
      <Text  style={[styles.TextsU, { color: theme.colors.light }]} >
        {"Today, 6:30 PM"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewPd} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.View_70} >
        <Icon   name={"Ionicons/ios-refresh-sharp"} size={32} color={theme.colors.light} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </Container>
    
      <ScrollView  style={styles.ScrollViewDi}  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} bounces={true}>
        
      <View   >
        
      <View   >
        
      <View  style={styles.ViewYm} >
        
      <Text  style={[styles.Text_1F, { color: theme.colors.background_inverse }]} >
        {"Configure Bet"}
      </Text>
    
      </View>
    
      <KeyboardAvoidingView   enabled={true} behavior={"padding"}>
        
      <View  style={styles.ViewWw} pointerEvents={"auto"}>
        
      <View  style={styles.View_2O} pointerEvents={"auto"}>
        <Picker onValueChange={
     (newPickerUnderlineValue) => { const pickerValue = newPickerUnderlineValue;
      try {
          setPickerValue(pickerValue);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.PickerzR} placeholder={"Select an option"} leftIconMode={"inset"} type={"underline"} value={pickerValue} />
      </View>
    
      <View  style={styles.ViewES} pointerEvents={"auto"}>
        <Picker onValueChange={
     (newPickerUnderlineValue) => { const pickerValue = newPickerUnderlineValue;
      try {
          setPickerValue(pickerValue);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.PickerFy} placeholder={"Select an option"} leftIconMode={"inset"} type={"underline"} value={pickerValue} />
      </View>
    
      </View>
    
      </KeyboardAvoidingView>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <KeyboardAvoidingView   enabled={true} behavior={"padding"}>
        
      <View  style={styles.Viewhg} pointerEvents={"auto"}>
        
      <View  style={styles.ViewCN} pointerEvents={"auto"}>
        <TextField onChangeText={
     (newRiskValue) => { const textFieldValue = newRiskValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </View>
    
      <View  style={styles.Viewoy} pointerEvents={"auto"}>
        <TextField onChangeText={
     (newToWinValue) => { const textFieldValue = newToWinValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </View>
    
      </View>
    
      </KeyboardAvoidingView>
    
      <View  style={styles.Viewps} pointerEvents={"auto"}>
        
      <View  style={styles.View_7Q} pointerEvents={"auto"}>
        
      <KeyboardAvoidingView   enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newOddsValue) => { const textFieldValue = newOddsValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.Viewib} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Line"}
      </Text>
    
      <View  style={styles.View_46} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.ViewGw} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-remove-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      <Text  style={[styles.TextIN, { color: theme.colors.background_inverse }]} >
        {"+3.5"}
      </Text>
    
      <Touchable   >
        
      <View  style={styles.ViewnM} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-add-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewD2} enabled={true} behavior={"padding"}>
        
      <View  style={styles.ViewvE} pointerEvents={"auto"}>
        
      <View  style={styles.Viewl7} pointerEvents={"auto"}>
        <TextField onChangeText={
     (newRiskValue) => { const textFieldValue = newRiskValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </View>
    
      <View  style={styles.ViewIL} pointerEvents={"auto"}>
        <TextField onChangeText={
     (newToWinValue) => { const textFieldValue = newToWinValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </View>
    
      </View>
    
      </KeyboardAvoidingView>
    
      <View  style={styles.Viewvu} pointerEvents={"auto"}>
        
      <View  style={styles.View_1k} pointerEvents={"auto"}>
        
      <KeyboardAvoidingView   enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newOddsValue) => { const textFieldValue = newOddsValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.ViewCJ} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Line"}
      </Text>
    
      <View  style={styles.Viewkc} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.View_25} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-remove-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      <Text  style={[styles.Textfw, { color: theme.colors.background_inverse }]} >
        {"+3.5"}
      </Text>
    
      <Touchable   >
        
      <View  style={styles.ViewJZ} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-add-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View  style={styles.ViewbU} pointerEvents={"auto"}>
        <SwitchRow onValueChange={
     (newFactorAllBankrollsValue) => { const switchValue = newFactorAllBankrollsValue;
      try {
          setSwitchValue(switchValue);
      } catch (err) {
        console.error(err)
      }
    }
  } style={{ color: theme.colors.background_inverse }} label={"First Option"} value={switchValue} />
      <View  style={styles.ViewvB} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Percent of bankroll"}
      </Text>
    
      <View  style={styles.ViewMR} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.ViewsH} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-remove-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      <Text  style={[styles.TextWy, { color: theme.colors.background_inverse }]} >
        {"2.5%"}
      </Text>
    
      <Touchable   >
        
      <View  style={styles.View_9z} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-add-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewCl} pointerEvents={"auto"}>
        
      <View  style={styles.ViewZ1} pointerEvents={"auto"}>
        
      <KeyboardAvoidingView   enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newOddsValue) => { const textFieldValue = newOddsValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.ViewqH} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Line"}
      </Text>
    
      <View  style={styles.View_1v} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.Viewbm} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-remove-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      <Text  style={[styles.TextJL, { color: theme.colors.background_inverse }]} >
        {"+3.5"}
      </Text>
    
      <Touchable   >
        
      <View  style={styles.View_55} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-add-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.Viewen} pointerEvents={"auto"}>
        
      <View  style={styles.ViewMx} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextIO, { color: theme.colors.light }]} >
        {"Bankroll:"}
      </Text>
    
      <Text  style={[styles.TextM8, { color: theme.colors.background_inverse }]} >
        {"$100000"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewcS} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textyb, { color: theme.colors.light }]} >
        {"Bet Amount:"}
      </Text>
    
      <Text  style={[styles.TextBR, { color: theme.colors.background_inverse }]} >
        {"$2830"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View  style={styles.ViewbG} pointerEvents={"auto"}>
        <SwitchRow onValueChange={
     (newFactorAllBankrollsValue) => { const switchValue = newFactorAllBankrollsValue;
      try {
          setSwitchValue(switchValue);
      } catch (err) {
        console.error(err)
      }
    }
  } style={{ color: theme.colors.background_inverse }} label={"First Option"} value={switchValue} />
      <View  style={styles.ViewS8} pointerEvents={"auto"}>
        
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewQ4} enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newChanceOfWinningValue) => { const textFieldValue = newChanceOfWinningValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </KeyboardAvoidingView>
    
      </View>
    
      </View>
    
      <View  style={styles.Viewfv} pointerEvents={"auto"}>
        
      <View  style={styles.ViewDo} pointerEvents={"auto"}>
        
      <KeyboardAvoidingView   enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newOddsValue) => { const textFieldValue = newOddsValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.View_8D} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Line"}
      </Text>
    
      <View  style={styles.ViewOl} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.View_3D} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-remove-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      <Text  style={[styles.Text_8J, { color: theme.colors.background_inverse }]} >
        {"+3.5"}
      </Text>
    
      <Touchable   >
        
      <View  style={styles.ViewRl} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-add-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.View_0C} pointerEvents={"auto"}>
        
      <View  style={styles.View_5U} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.background_inverse }} >
        {"Adjust Kelly"}
      </Text>
    
      <View  style={styles.ViewEB} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <View  style={styles.ViewlY} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-remove-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      <Text  style={[styles.TextT7, { color: theme.colors.background_inverse }]} >
        {"25%"}
      </Text>
    
      <Touchable   >
        
      <View  style={styles.ViewGD} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-add-circle-outline"} color={theme.colors.light} size={24} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewMK} pointerEvents={"auto"}>
        
      <View  style={styles.View_0S} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextCL, { color: theme.colors.light }]} >
        {"Bankroll:"}
      </Text>
    
      <Text  style={[styles.TextQV, { color: theme.colors.background_inverse }]} >
        {"$100000"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewJN} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textcj, { color: theme.colors.light }]} >
        {"% of Bankroll:"}
      </Text>
    
      <Text  style={[styles.TextNg, { color: theme.colors.background_inverse }]} >
        {"2.83%"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewRN} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextjW, { color: theme.colors.light }]} >
        {"Bet Amount:"}
      </Text>
    
      <Text  style={[styles.Textz3, { color: theme.colors.background_inverse }]} >
        {"$2830"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      <View  style={styles.View_3F} pointerEvents={"auto"}>
        
      <Text  style={[styles.TexthM, { color: theme.colors.background_inverse }]} >
        {"Confidence in bet"}
      </Text>
    <Slider onValueChange={
     (newSliderValue) => { const sliderValue = newSliderValue;
      try {
          setSliderValue(sliderValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  value={sliderValue} /><Divider  style={styles.Divider_0P} color={theme.colors.divider} />
      </View>
    
      </View>
    
      <View   >
        
      <View   >
        
      <View  style={styles.ViewOb} >
        
      <Text  style={[styles.TextQc, { color: theme.colors.background_inverse }]} >
        {"Add Tags and Notes"}
      </Text>
    
      </View>
    
      <Text  style={[styles.TextK2, { color: theme.colors.background_inverse }]} >
        {"Automatic Tags"}
      </Text>
    
      <View  style={styles.ViewuV} >
        
      <Touchable  style={styles.TouchableON} >
        
      <View  style={[styles.ViewYp, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"Modified Odds"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablejH} >
        
      <View  style={[styles.ViewTZ, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"Modified Line"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <Text  style={[styles.Textdd, { color: theme.colors.background_inverse }]} >
        {"Recent Tags"}
      </Text>
    
      <View  style={styles.View_5a} >
        
      <Touchable  style={styles.Touchableaj} >
        
      <View  style={[styles.ViewAf, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"Modified Odds"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchable_4o} >
        
      <View  style={[styles.ViewF3, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"Modified Line"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.ViewKI} pointerEvents={"auto"}>
        
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewku} enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newTextFieldUnderlineValue) => { const textFieldValue = newTextFieldUnderlineValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} value={textFieldValue} />
      </KeyboardAvoidingView>
    
      </View>
    
      <View  style={styles.ViewYL} pointerEvents={"auto"}>
        
      <KeyboardAvoidingView  style={styles.KeyboardAvoidingViewpY} enabled={true} behavior={"padding"}>
        <TextField onChangeText={
     (newTextAreaUnderlineValue) => { const textFieldValue = newTextAreaUnderlineValue;
      try {
          setTextFieldValue(textFieldValue);
      } catch (err) {
        console.error(err)
      }
    }
  }  placeholder={"Change my fieldname to email or password on the right side"} type={"underline"} multiline={true} value={textFieldValue} />
      </KeyboardAvoidingView>
    
      </View>
    <Divider  style={styles.DividerJb} color={theme.colors.divider} />
      </View>
    
      </View>
    
      </ScrollView>
    
      <View  style={[styles.Viewma, { borderColor: theme.colors.divider }]} >
        
      <View  style={styles.ViewPf} >
        <ButtonOutline  style={[styles.ButtonOutlineCG, { color: theme.colors.strong, backgroundColor: theme.colors.primary }]} title={"Track Bet"}  />
      </View>
    
      <View  style={styles.ViewVL} >
        
      <Touchable  style={styles.TouchableEt} >
        
      <Text  style={[styles.TextBU, { color: theme.colors.light }]} >
        {"Add more bets"}
      </Text>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ ViewRv: {
minHeight: 55,
justifyContent: 'center',
alignItems: 'flex-start',
paddingLeft: 16,
paddingRight: 16,
}, ViewwJ: {
alignItems: 'flex-start',
width: '25%',
}, TextFi: {
fontFamily: 'System', fontWeight: '700',
}, TextsU: {
fontSize: 10,
}, Viewfp: {
minHeight: 50,
width: '50%',
alignItems: 'center',
justifyContent: 'center',
}, View_70: {
minHeight: 55,
justifyContent: 'center',
alignItems: 'flex-end',
paddingLeft: 16,
paddingRight: 16,
}, ViewPd: {
alignItems: 'flex-end',
width: '25%',
}, ViewnH: {
flexDirection: 'row',
}, Text_1F: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, ViewYm: {
opacity: 1,
marginTop: 12,
marginLeft: '4%',
marginRight: '4%',
flexDirection: 'row',
alignItems: 'center',
}, PickerzR: {
marginLeft: '2%',
marginRight: '2%',
}, View_2O: {
minHeight: 50,
width: '40%',
}, PickerFy: {
marginLeft: '2%',
marginRight: '2%',
}, ViewES: {
minHeight: 50,
width: '40%',
}, ViewWw: {
flexDirection: 'row',
justifyContent: 'space-between',
marginLeft: '4%',
marginRight: '4%',
}, ViewCN: {
width: '40%',
}, Viewoy: {
width: '40%',
}, Viewhg: {
minHeight: 50,
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, View_7Q: {
width: '40%',
}, ViewGw: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, TextIN: {
fontSize: 14,
}, ViewnM: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, View_46: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}, Viewib: {
width: '40%',
}, Viewps: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, Viewl7: {
width: '40%',
}, ViewIL: {
width: '40%',
}, ViewvE: {
minHeight: 50,
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, KeyboardAvoidingViewD2: {
flexGrow: 1,
}, View_1k: {
width: '40%',
}, View_25: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, Textfw: {
fontSize: 14,
}, ViewJZ: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, Viewkc: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}, ViewCJ: {
width: '40%',
}, Viewvu: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewsH: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, TextWy: {
fontSize: 14,
}, View_9z: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, ViewMR: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}, ViewvB: {
width: '40%',
}, ViewbU: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
}, ViewZ1: {
width: '40%',
}, Viewbm: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, TextJL: {
fontSize: 14,
}, View_55: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, View_1v: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}, ViewqH: {
width: '40%',
}, ViewCl: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, TextIO: {
fontFamily: 'System', fontWeight: '400',
}, TextM8: {
fontSize: 14,
fontFamily: 'System', fontWeight: '400',
}, ViewMx: {
width: '30%',
justifyContent: 'center',
marginRight: '5%',
}, Textyb: {
fontFamily: 'System', fontWeight: '400',
}, TextBR: {
fontSize: 14,
fontFamily: 'System', fontWeight: '400',
}, ViewcS: {
width: '30%',
justifyContent: 'center',
}, Viewen: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
}, KeyboardAvoidingViewQ4: {
flexGrow: 1,
}, ViewS8: {
width: '40%',
}, ViewbG: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
}, ViewDo: {
width: '40%',
}, View_3D: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, Text_8J: {
fontSize: 14,
}, ViewRl: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, ViewOl: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}, View_8D: {
width: '40%',
}, Viewfv: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewlY: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, TextT7: {
fontSize: 14,
}, ViewGD: {
justifyContent: 'center',
paddingLeft: 6,
paddingRight: 6,
paddingBottom: 6,
paddingTop: 6,
}, ViewEB: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}, View_5U: {
width: '40%',
minHeight: 55,
}, View_0C: {
minHeight: 50,
flexDirection: 'row',
justifyContent: 'space-between',
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
}, TextCL: {
fontFamily: 'System', fontWeight: '400',
}, TextQV: {
fontSize: 14,
fontFamily: 'System', fontWeight: '400',
}, View_0S: {
width: '30%',
justifyContent: 'center',
}, Textcj: {
fontFamily: 'System', fontWeight: '400',
}, TextNg: {
fontSize: 14,
fontFamily: 'System', fontWeight: '400',
}, ViewJN: {
width: '30%',
justifyContent: 'center',
}, TextjW: {
fontFamily: 'System', fontWeight: '400',
}, Textz3: {
fontSize: 14,
fontFamily: 'System', fontWeight: '400',
}, ViewRN: {
width: '30%',
justifyContent: 'center',
}, ViewMK: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, TexthM: {
fontSize: 14,
}, Divider_0P: {
marginTop: 24,
marginBottom: 16,
height: 1,
marginLeft: '4%',
marginRight: '4%',
}, View_3F: {
marginTop: 12,
marginLeft: '4%',
marginRight: '4%',
}, TextQc: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, ViewOb: {
opacity: 1,
marginTop: 12,
marginLeft: '4%',
marginRight: 4,
flexDirection: 'row',
alignItems: 'center',
}, TextK2: {
marginTop: 12,
marginLeft: '4%',
marginRight: '4%',
fontSize: 14,
}, ViewYp: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableON: {
marginTop: 8,
}, ViewTZ: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchablejH: {
marginTop: 8,
}, ViewuV: {
flexWrap: 'wrap',
flexDirection: 'row',
paddingLeft: '4%',
paddingRight: '4%',
}, Textdd: {
marginTop: 12,
marginLeft: '4%',
marginRight: '4%',
fontSize: 14,
}, ViewAf: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchableaj: {
marginTop: 8,
}, ViewF3: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchable_4o: {
marginTop: 8,
}, View_5a: {
flexWrap: 'wrap',
flexDirection: 'row',
paddingLeft: '4%',
paddingRight: '4%',
}, KeyboardAvoidingViewku: {
flexGrow: 1,
}, ViewKI: {
minHeight: 50,
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, KeyboardAvoidingViewpY: {
flexGrow: 1,
}, ViewYL: {
minHeight: 50,
marginLeft: '4%',
marginRight: '4%',
marginTop: 12,
flexDirection: 'row',
justifyContent: 'space-between',
}, DividerJb: {
marginTop: 24,
marginBottom: 16,
height: 1,
marginLeft: '4%',
marginRight: '4%',
}, ScrollViewDi: {
flexGrow: 1,
}, ButtonOutlineCG: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
}, ViewPf: {
minHeight: 50,
paddingLeft: 34,
paddingRight: 34,
marginTop: 16,
}, TextBU: {
fontFamily: 'System', fontWeight: '700',
}, TouchableEt: {
alignItems: 'center',
justifyContent: 'center',
minHeight: '100%',
width: '50%',
}, ViewVL: {
marginTop: 6,
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'center',
minHeight: 34,
}, Viewma: {
width: '100%',
paddingLeft: 34,
paddingRight: 34,
paddingBottom: '4%',
borderTopWidth: 1,
} });


export default withTheme(GamesConfigureBetScreen);