import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import { Divider, IconButton, ScreenContainer, Surface, Swiper, SwiperItem, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const TeamMultiselectTestScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
      const testSyncedSportsbooks = (sportsbooks) => {
  Constants.sportsbooksSynced = sportsbooks.length == 0 ? false : true;

//setSportsbooksSynced(Constants.sportsbooksSynced);

return sportsbooks;
};
      
      const { theme } = props;
      
      
      
      
      
      
      
      
      
      
      
      
      const [dummyTwo, setDummyTwo] = React.useState(0);
      
      

      return (
        
      <ScreenContainer  style={styles.screen} >
        
<SwaggerAPIApi.FetchGetBankrollPageByIdGET
  
  dummy={Constants["updatedSportsBook"]} internalId={Constants["internalId"]}
  
 >
  {({ loading, error, data, refetchGetBankrollPageById }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (
      <Text  style={{ color: theme.colors.error }} >
        {(Constants["sportsbooksSyncedVar"]).toString()}
      </Text>
    )
  }}
</SwaggerAPIApi.FetchGetBankrollPageByIdGET>
      <Text  style={{ color: theme.colors.good }} >
        {(Constants["sportsbooksSyncedVar"]).toString()}
      </Text>
    <View  style={styles.ViewM5} pointerEvents={"auto"} />
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Fetchzz: {
minHeight: 40,
}, DividergF: {
height: 1,
marginTop: 18,
}, ViewQB: {
paddingLeft: '4%',
paddingRight: '4%',
marginTop: 20,
}, Imageax: {
width: 325,
height: 325,
}, SwiperItemwh: {
alignItems: 'center',
}, SwiperKS: {
height: 425,
width: '100%',
marginTop: 50,
}, ViewM5: {
marginTop: 4,
}, TextA0: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Viewlr: {
paddingTop: 28,
paddingRight: '4%',
paddingLeft: '4%',
}, ImageI3: {
width: 300,
height: 300,
}, ViewPG: {
width: 300,
height: 300,
overflow: 'hidden',
}, SurfacetB: {
flex: 1,
width: 300,
height: 300,
}, TouchablePn: {
width: 300,
height: 300,
}, ViewIs: {
flexDirection: 'row',
marginRight: 12,
}, Imageac: {
width: 300,
height: 300,
}, Viewpu: {
width: 300,
height: 300,
overflow: 'hidden',
}, SurfacexF: {
flex: 1,
width: 300,
height: 300,
}, TouchableX9: {
width: 300,
height: 300,
}, View_67: {
flexDirection: 'row',
marginRight: 12,
}, Imageb2: {
width: 300,
height: 300,
}, ViewQt: {
width: 300,
height: 300,
overflow: 'hidden',
}, SurfaceIw: {
flex: 1,
width: 300,
height: 300,
}, Touchabledp: {
width: 300,
height: 300,
}, ViewjR: {
flexDirection: 'row',
marginRight: 12,
}, ScrollViewlQContent: {
marginTop: 6,
paddingLeft: '4%',
paddingBottom: 6,
}, Viewlm: {
marginTop: 4,
}, screen: {
paddingTop: 25,
} });


export default withTheme(TeamMultiselectTestScreen);