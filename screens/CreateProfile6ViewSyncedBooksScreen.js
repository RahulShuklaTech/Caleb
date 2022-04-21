import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { ButtonOutline, Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const CreateProfile6ViewSyncedBooksScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
      const bookStatus = (latestRefreshResponse) => {
  return latestRefreshResponse == 403 || latestRefreshResponse ==  500;
};

const bookRegionSyntax = (abbr) => {
  return " (" + abbr.toUpperCase() + ")";
};

const booksSynced = (book) => {
  return book.length === 0;
};

const checkSportsbooksSynced = (sportsbooks) => {
  Constants.sportsbooksSynced = sportsbooks.length == 0 ? false : true;

setSportsbooksSynced(Constants.sportsbooksSynced);

return sportsbooks;
};
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [sportsbooksSynced, setSportsbooksSynced] = React.useState(false);
      
      

      return (
        
      <ScreenContainer  style={styles.screen} scrollable={true} hasSafeArea={true}>
        
      <View   pointerEvents={"auto"}>
        
      <View  style={[styles.View_4k, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewwO} pointerEvents={"auto"}>
        
      <View  style={[styles.View_0R, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.goBack();
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewdK} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.TextWw, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    <View  style={styles.ViewVd}  /><View  style={[styles.Viewg8, { borderRadius: 0 }]}  />
      </View>
    
      </View>
    
<SwaggerAPIApi.FetchGetAllBettorAccountsKate$sGET
  
  internalId={Constants["internalId"]}
  
 >
  {({ loading, error, data, refetchGetAllBettorAccountsKate$s }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (<>
      <View   >
        
      <View  style={styles.Viewdy} >
        <>{ booksSynced(fetchData) ? null : 
      <Text  style={[styles.TextxB, { color: theme.colors.background_inverse }]} >
        {"These are the books you have synced 🔗"}
      </Text>
     }</><>{ !(booksSynced(fetchData)) ? null : 
      <Text  style={[styles.TextbE, { color: theme.colors.background_inverse }]} >
        {"Sync your first sportsbook 🔗"}
      </Text>
     }</><>{ !(booksSynced(fetchData)) ? null : 
      <Text  style={[styles.Text_3O, { color: theme.colors.background_inverse }]} >
        {"Vault uses sportsbook sync technology to securely track your bets for you."}
      </Text>
     }</><>{ !(booksSynced(fetchData)) ? null : 
      <View  style={styles.Viewqp} pointerEvents={"auto"}>
        <Image  style={styles.ImageGp} resizeMode={"contain"} source={Images.SecureLinkToBooks} />
      </View>
     }</>
      </View>
    
      </View>
    <FlatList data={checkSportsbooksSynced(fetchData)} renderItem={({ item }) => { const listData = item; return (
      <View  style={styles.ViewWF} pointerEvents={"auto"}>
        
      <View  style={styles.Viewt2} pointerEvents={"auto"}>
        
      <View  style={styles.Viewo1} pointerEvents={"auto"}>
        
      <View  style={styles.Viewgj} pointerEvents={"auto"}>
        <Icon   name={"Ionicons/ios-checkmark-circle-sharp"} color={theme.colors.good} size={24} /><Icon   name={"Ionicons/ios-close-circle-sharp"} color={theme.colors.light} size={24} />
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <Text  style={[styles.TextzH, { color: theme.colors.background_inverse }]} >
        {null}{null}
      </Text>
    
      <Text  style={[styles.Text_3u, { color: theme.colors.light }]} >
        {"Error connecting this book."}
      </Text>
    
      </View>
    
      </View>
    <>{ !(bookStatus(listData?.latestRefreshResponse?.status)) ? null : 
      <View   pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('SharpSportsFormScreen');
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={[styles.Textmx, { color: theme.colors.light }]} >
        {"Resync"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
     }</>
      </View>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListICContent} numColumns={1} /><>{ booksSynced(fetchData) ? null : 
      <View  style={styles.ViewrQ} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextuU, { color: theme.colors.light }]} >
        {"*Vault stores up to 5000 of the most recent bets for each sportsbook."}
      </Text>
    
      </View>
     }</></>)
  }}
</SwaggerAPIApi.FetchGetAllBettorAccountsKate$sGET>
      </View>
    
      <View   pointerEvents={"auto"}>
        
<SwaggerAPIApi.FetchGetAllBettorAccountsKate$sGET
  
  internalId={Constants["internalId"]}
  
 >
  {({ loading, error, data, refetchGetAllBettorAccountsKate$s }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (
      <View  style={[styles.View_1B, { borderColor: theme.colors.divider }]} >
        
      <View  style={styles.ViewLL} >
        
      <View  style={styles.ViewPP} >
        <>{ booksSynced(fetchData) ? null : <ButtonOutline onPress={
     () => { 
      try {
          navigation.navigate("MainTabNavigator");
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonOutlinePr, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"Go To My Vault"}  /> }</><>{ !(booksSynced(fetchData)) ? null : <ButtonOutline onPress={
     () => { 
      try {
          navigation.navigate('CreateProfileBetaStack',
{ screen: 'SharpSportsFormScreen'});
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonOutlineEr, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"Sync A Sportsbook"}  /> }</><>{ booksSynced(fetchData) ? null : 
      <View  style={styles.Viewq4} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('SharpSportsFormScreen');
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_6b} >
        
      <Text  style={[styles.TextF1, { color: theme.colors.light }]} >
        {"Sync another sportsbook"}
      </Text>
    
      </Touchable>
    
      </View>
     }</><>{ !(booksSynced(fetchData)) ? null : 
      <View  style={styles.View_8t} >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate("MainTabNavigator");
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableLx} >
        
      <Text  style={[styles.TextLa, { color: theme.colors.light }]} >
        {"Skip this for now"}
      </Text>
    
      </Touchable>
    
      </View>
     }</>
      </View>
    
      </View>
    
      </View>
    )
  }}
</SwaggerAPIApi.FetchGetAllBettorAccountsKate$sGET>
      </View>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ TextWw: {
fontSize: 18,
}, ViewdK: {
alignItems: 'center',
paddingRight: 16,
flexDirection: 'row',
height: 50,
}, View_0R: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-start',
}, ViewVd: {
alignContent: 'center',
justifyContent: 'center',
minWidth: '33%',
maxWidth: '34%',
maxHeight: 50,
}, Viewg8: {
minWidth: '33%',
maxWidth: '34%',
alignItems: 'flex-end',
}, ViewwO: {
flexDirection: 'row',
justifyContent: 'space-between',
}, View_4k: {
justifyContent: 'center',
}, TextxB: {
textAlign: 'left',
fontSize: 28,
fontFamily: 'System', fontWeight: '700',
}, TextbE: {
textAlign: 'left',
fontSize: 28,
fontFamily: 'System', fontWeight: '700',
}, Text_3O: {
textAlign: 'left',
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
marginTop: 48,
}, ImageGp: {
height: 200,
}, Viewqp: {
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
height: 200,
marginTop: 18,
}, Viewdy: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 10,
}, Viewgj: {
marginRight: 8,
}, TextzH: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Text_3u: {
fontSize: 12,
fontFamily: 'System', fontWeight: '400',
}, Viewo1: {
flexDirection: 'row',
alignItems: 'center',
}, Textmx: {
fontFamily: 'System', fontWeight: '700',
}, Viewt2: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 14,
justifyContent: 'space-between',
}, ViewWF: {
marginBottom: 6,
marginLeft: '4%',
marginRight: '4%',
}, FlatListICContent: {
flex: 1,
marginTop: 48,
}, TextuU: {
fontSize: 12,
}, ViewrQ: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 28,
}, Fetch_2w: {
minHeight: 40,
}, ButtonOutlinePr: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
height: 54,
}, ButtonOutlineEr: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
fontSize: 16,
height: 54,
}, TextF1: {
fontFamily: 'System', fontWeight: '700',
}, Touchable_6b: {
alignItems: 'center',
justifyContent: 'center',
height: '100%',
}, Viewq4: {
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'center',
marginTop: 24,
flex: 1,
}, TextLa: {
fontFamily: 'System', fontWeight: '700',
}, TouchableLx: {
alignItems: 'center',
justifyContent: 'center',
height: '100%',
}, View_8t: {
alignItems: 'center',
flexDirection: 'row',
justifyContent: 'center',
marginTop: 24,
flex: 1,
}, ViewPP: {
width: '100%',
paddingLeft: 34,
paddingRight: 34,
}, ViewLL: {
justifyContent: 'center',
}, View_1B: {
paddingBottom: 34,
paddingTop: 16,
borderTopWidth: 1,
justifyContent: 'center',
}, FetchI4: {
minHeight: 40,
}, screen: {
justifyContent: 'space-between',
} });


export default withTheme(CreateProfile6ViewSyncedBooksScreen);