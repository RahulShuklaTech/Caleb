import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ButtonSolid, DatePicker, Icon, IconButton, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const MyBetsTestScreenCopy = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      const setGlobalVariableValue = GlobalVariables.useSetValue();

      const statsNetUnits = (x) => {
  let sum = 0;

for (let i = 0; i < x.length; i++) {
sum += x.netProfit[i];
};

const units = (sum/100)/Constants.userDefaultUnitSize;
return "(" + `${Math.round(units * 100) / 100}` + "U)";
};

const countBets = (x) => {
  return x.length !== 0;
};

const statsNetProfit = (array) => {
    //return array[12].netProfit;

let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i].netProfit;
};

let res = ((Math.abs(sum))/100).toFixed(2);
let lastIndex = res[res.length - 1];
let secondLastIndex = res[res.length - 2];
const comp = lastIndex == 0 && secondLastIndex == 0
if(comp) {
res = parseInt(res)
};
if(sum < 0) {
return "-$" + res;
} else {
return "$" + res;
};
  };

const filterDateApplied = (bets) => {
    //Old Code that works below
let d = new Date();

if (Constants.filterDateApply.length === 0) {
return true;
} else {
try {
  let exist = false
  for (let x = 0; x < bets.length; x++){
    if (Constants.filterLeagueApply.includes(bets[x].event.league)) {
      exist = true;
    } else if (Constants.filterDateApply.includes('sevenDays')) {
      exist = (primaryLeagues.includes(bets[x].event.league)) ? exist : true;
      return new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
if (bets[0].event === null) {
  return false;
} else if (bets[0].event.startTime === null) {
  return false;
} else {
  return new Date(bets[0].event.startTime) >= (d.setDate(d.getDate() - days));
};
    } else {
      exist;
    };
  }
  return exist;
}
catch (y){
    return false;
};
};
//Old Code that works above




///// Code I'm working on starts here!
/*
if (Constants.filterLeagueApply.length == 0) {
if (Constants.filterDateApply.length == 0) {
  return true;
} else {
  let a = Constants.filterDateApply;
  if (a.includes("sevenDays")) {
    days = 7;
  } else if (a.includes("twentyEightDays")) {
    days = 28;
  } else if (a.includes("threeMonths")) {
    days = 90;
  } else if (a.includes("sixMonths")) {
    days = 180;
  } else if (a.includes("yearToDate")) {
    days = getYTD();
  } else if (a.includes("twelveMonths")) {
    days = 365
  } else {
    return false;
  };

//// LEFT OFF HERE AND NEED TO FIX the try/catch stuff
  try {
    let existy = false
    for (let x = 0; x < bets.length; x++){
      if (Constants.filterLeagueApply.includes(bets[x].event.league)) {
        existy = true;
      } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
        existy = (primaryLeagues.includes(bets[x].event.league)) ? existy : true;
      } else {
        existy;
      };
    };
    return existy;
  }
  catch (y){
    return false;
  };

  let d = new Date();
  if (bets[0].event === null) {
    return false;
  } else if (bets[0].event.startTime === null) {
    return false;
  } else {
    return new Date(bets[0].event.startTime) >= (d.setDate(d.getDate() - days));
  };
};
*/
  };

const removeSportsbookFilter = async (item) => {
  const array = Constants.filterSportsbook;

if (item === "Total") {
return false;
} else {
for( var i = 0; i < array.length; i++){
    if ( array[i] === item) { 
        await    // Not sure if this is needed, or if this needs to be asynchronous
        array.splice(i, 1); 
    }
};
};


// Old code that worked
/*const array = Constants.filterSportsbook;
for( var i = 0; i < array.length; i++){
if ( array[i] === item) { 
    await    // Not sure if this is needed, or if this needs to be asynchronous
    array.splice(i, 1); 
}
};*/


// Code found here: https://love2dev.com/blog/javascript-remove-from-array/
};

const filterBetslipApplied = (x) => {
    if (x.outcome !== "pending") {
if (Constants.filterSportsbookApply.length == 0) {
  return true;
} else if (Constants.filterSportsbookApply.includes(x.book.name)) {
  return true;
} else {
  return false;
}
} else {
return false;
};





/*
const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];

if (Constants.filterLeagueApply.length === 0) {
return true;
} else {
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
};
*/
  };

// Counts the number of filters that are being applied to the bets.
const countFilters = () => {
  return (Constants.filterLeagueApply.length);   // Simply add all other filters arrays onto here to create the count
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

const filterBetTypeButton = (x) => {
  return Constants.filterBetType.includes(x) ? true : false;
};

const filterDateButton = (x) => {
  /*let y = await Constants.filterDate
console.log("filter date button" + y)*/

return Constants.filterDate.includes(x) ? true : false;
};

const statsROI = (x) => {
  let sum = 0;
let suma = 0;

for (let i = 0; i < x.length; i++) {
sum += x.netProfit[i];
};

for (let i = 0; i < x.length; i++) {
suma += x.toRisk[i];
};

const roi = sum / suma;

return `${Math.round(roi * 10000) / 100}%`;
};

const filterLeagueButton = (x) => {
  return Constants.filterLeague.includes(x) ? true : false;
};

const testFunction = (array) => {
  return [...array]
};

const testSwitchFunction = (x) => {
    //// Requirements
// Need to be able to have multiple filters, like multiple if statements or switch statements.
// Most likely start with let display = true, and then going down the list of functions until either
// a false is reached, or you get to the end and display 


const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];

const results = x.filter(element => {
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


/*let display = true

switch (x) {
case 0:
  break;
default:
  let exist = false
  if (x > 10) {
      exist;
  } else {
      exist = true;
  };

  if (exist = false) {
      return false;
  }
};

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
*/
  };

const removeBetTypeFilter = async (item) => {
  const array = Constants.filterBetType;
for( var i = 0; i < array.length; i++){
if ( array[i] === item) { 
    await    // Not sure if this is needed, or if this needs to be asynchronous
    array.splice(i, 1); 
}
};

// Code found here: https://love2dev.com/blog/javascript-remove-from-array/
};

const filterBetTypeApplied = (x) => {
    const primaryBetTypes = ['spread','total','moneyline','3-way'];

if (Constants.filterBetTypeApply.length == 0) {
  return true;
} else if (Constants.filterBetTypeApply.includes(x.type)) {  // checking for parlay or teaser
  return true;
} else if ((x.bets.length == 1) && Constants.filterBetTypeApply.includes(x.bets[0].type)) { // checking for prop
  return true;
} else if ((x.bets.length == 1) && (x.bets[0].type != 'prop') && Constants.filterBetTypeApply.includes(x.bets[0].proposition)) { // checking for total, moneyline, spread, or 3-way
  return true;
} else if ((x.bets.length == 1) && (x.bets[0].type != 'prop') && Constants.filterLeagueApply.includes('otherBetTypes')) {
  return (primaryBetTypes.includes(x.bets[0].proposition)) ? false : true;
} else {
return false;
};


  };

const addBetTypeFilter = async (item) => {
  await
Constants.filterBetType.push(item);
};

const filterSportsbookButton = (x) => {
  if (Constants.filterSportsbook.length == 0 && x === "Total") {
return true;
} else if (Constants.filterSportsbook.includes(x)) {
return true;
} else {
return false;
};
};

const filterBetsApplied = (bets) => {
    /*const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];

if (Constants.filterLeagueApply.length === 0) {
return true;

} else {

try {
  let exist = false
  for (let x = 0; x < bets.length; x++){
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

};
*/


/*
/// Example ///
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
return age >= 18;
}


//// Trial 1 w/ filter ////
const league = Constants.filterLeagueApplied.filter(betsFunction)

function betsfunction(bets) {
  return bets
}
*/

/// Trial 2 w/ switch ///
///////////////////////////. Create this and have Zach help with nitty gritty stuff.

const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];
let display = true

switch (Constants.filterLeagueApply.length) {
case 0:
  display;
  break;
default:
  try {
    let exist = false
    for (let x = 0; x < bets.length; x++){
      if (Constants.filterLeagueApply.includes(bets[x].event.league)) {
        exist = true;
      } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
        exist = (primaryLeagues.includes(bets[x].event.league)) ? exist : true;
      } else {
        exist;
      };
    }
    if (exist = false) {
      display = false
      return display;
    };
  }
  catch (y){
    return false;
  };
};

switch (Constants.filterBetTypeApply.length) {
case 0:
  return display;
default:
  try {
    let exist1 = false
    for (let x = 0; x < bets.length; x++){
      if (Constants.filterBetTypeApply.includes(bets[x].proposition)) {
        exist1 = true;
      } else {
        exist1;
      };
    }
    if (exist1 = false) {
      display = false
      return display;
    } else {
      return display;
    };
  }
  catch (y){
    return false;
  };
}

/*

switch (Constants.filterBetTypeApply.length) {
case 0:
  display;
  break;
default:
  // code for determining bet type
  // if true, then do nothing. I false, then return false;
};

switch (Constants.filterDateApply.length) {
case 0:
  display;
  break;
default:
  // code for determining date
  // if true, then do nothing. I false, then return false;
};

switch (Constants.filterSportbookApply.length) {
case 0:
  display;
  break;
default:
  // code for determining sportsbook
  // if true, then do nothing. I false, then return false;
};

*/
  };

const addSportsbookFilter = async (item) => {
  //const array = Constants.filterSportsbook;

if (item === "Total") {
Constants.filterSportsbook.length = 0;
} else {
await
Constants.filterSportsbook.push(item);
};


//Old code that worked
//await
//Constants.filterSportsbook.push(item);
};

const checkLeague = () => {
  //listData?.bets[0].event.league;

listData?.bets;
};

const modifySportsbookName = (x) => {
  return x === "Total" ? "All Sportsbooks" : x;
};

// Determines if all leagues are included in the filters.
const filterAllLeagues = (x) => {
  /*let y = await x

console.log(y)

return y.length === 0; */

return x.length == 0;
};

// Checks what leagues are included in the filters in order to display only the selected ones.
  const filterLeagueApplied = (bets) => {
    const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];

if (Constants.filterLeagueApply.length === 0) {
return true;

} else {

try {
  let exist = false
  for (let x = 0; x < bets.length; x++){
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
};
//Old Code that works above




///// Code I'm working on starts here!
/*

function getYTD() {
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
return day;
};

if (Constants.filterLeagueApply.length == 0) {
if (Constants.filterDateApply.length == 0) {
  return true;
} else {
  let a = Constants.filterDateApply;
  if (a.includes("sevenDays")) {
    days = 7;
  } else if (a.includes("twentyEightDays")) {
    days = 28;
  } else if (a.includes("threeMonths")) {
    days = 90;
  } else if (a.includes("sixMonths")) {
    days = 180;
  } else if (a.includes("yearToDate")) {
    days = getYTD();
  } else if (a.includes("twelveMonths")) {
    days = 365
  } else {
    return false;
  };

//// LEFT OFF HERE AND NEED TO FIX the try/catch stuff
  try {
    let existy = false
    for (let x = 0; x < bets.length; x++){
      if (Constants.filterLeagueApply.includes(bets[x].event.league)) {
        existy = true;
      } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
        existy = (primaryLeagues.includes(bets[x].event.league)) ? existy : true;
      } else {
        existy;
      };
    };
    return existy;
  }
  catch (y){
    return false;
  };

  let d = new Date();
  if (bets[0].event === null) {
    return false;
  } else if (bets[0].event.startTime === null) {
    return false;
  } else {
    return new Date(bets[0].event.startTime) >= (d.setDate(d.getDate() - days));
  };
};

} else {

try {
  let exist = false
  for (let x = 0; x < bets.length; x++){
    if (Constants.filterLeagueApply.includes(bets[x].event.league)) {
      exist = true;
    } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
      exist = (primaryLeagues.includes(bets[x].event.league)) ? exist : true;
    } else {
      exist;
    };
  };

  if (exist === false) {
    return false;
  } else {
    if (Constants.filterDateApply.length == 0) {
      return true;
    } else {
      let a = Constants.filterDateApply;
      if (a.includes("sevenDays")) {
        days = 7;
      } else if (a.includes("twentyEightDays")) {
        days = 28;
      } else if (a.includes("threeMonths")) {
        days = 90;
      } else if (a.includes("sixMonths")) {
        days = 180;
      } else if (a.includes("yearToDate")) {
        days = getYTD();
      } else if (a.includes("twelveMonths")) {
        days = 365
      } else {
        return false;
      };

////////try{}
      let d = new Date();
      if (bets[0].event === null) {
        return false;
      } else if (bets[0].event.startTime === null) {
        return false;
      } else {
        return new Date(bets[0].event.startTime) >= (d.setDate(d.getDate() - days));
      };
    };
  };

}
catch (y){
    return false;
};
};
*/

/*
if (x.outcome !== "pending") {
if (Constants.filterSportsbookApply.length == 0) {


  if (Constants.filterDateApply.length == 0) {
    return true;
  } else {

    let a = Constants.filterDateApply;

    if (a.includes("sevenDays")) {
      days = 7;
    } else if (a.includes("twentyEightDays")) {
      days = 28;
    } else if (a.includes("threeMonths")) {
      days = 90;
    } else if (a.includes("sixMonths")) {
      days = 180;
    } else if (a.includes("yearToDate")) {
      days = getYTD();
    } else if (a.includes("twelveMonths")) {
      days = 365
    } else {
      return false;
    };

    let d = new Date();
    if (x[0].event.startTime === null || x[0].event === null) {
      return false;
    } else {
      return new Date(x[0].event.startTime) >= (d.setDate(d.getDate() - days));
    };
  };



} else if (Constants.filterSportsbookApply.includes(x.book.name)) {



  if (Constants.filterDateApply.length == 0) {
        return true;
      } else {

        let a = Constants.filterDateApply;

        if (a.includes("sevenDays")) {
          days = 7;
        } else if (a.includes("twentyEightDays")) {
          days = 28;
        } else if (a.includes("threeMonths")) {
          days = 90;
        } else if (a.includes("sixMonths")) {
          days = 180;
        } else if (a.includes("yearToDate")) {
          days = getYTD();
        } else if (a.includes("twelveMonths")) {
          days = 365
        } else {
          return false;
        };

        let d = new Date();
        if (x[0].event.startTime === null || x[0].event === null) {
          return false;
        } else {
          return new Date(x[0].event.startTime) >= (d.setDate(d.getDate() - days));
        };
      };



} else {
  return false;
}
} else {
return false;
};

//// And ends here!
*/



/*
if (Constants.filterLeagueApply.length == 0) {
if (Constants.filterDate.length == 0) {
  return true;
} else {
  try {                 ////Pull from an array what functions to carry out for the date
    let exist = false
    for (let x = 0; x < bets.length; x++){
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
}
} else {
if (Constants.filterDate.length == 0) {
  return true;
} else {
  Run a try/catch statement in here for the dates
}
}
*/

//dateArray = Constants.filterDate

/*
switch (dateArray) {
case "sevenDays":
  //Statements executed when the
  //result of expression matches value1
  [break;]
case "twentyEightDays":
  //Statements executed when the
  //result of expression matches value2
  [break;]
case "threeMonths":
  //Statements executed when the
  //result of expression matches value2
  [break;]
case "yearToDate":
  //Statements executed when the
  //result of expression matches value2
  [break;]
case "twelveMonths":
  //Statements executed when the
  //result of expression matches value2
  [break;]
[default:
  //Statements executed when none of
  //the values match the value of the expression
  [break;]]
}
*/


/// Old Code
/*if (bets.outcome !== "pending"){

if (Constants.filterLeagueApply.length === 0) {
  return true;
} else {
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
};

} else {
return false;
};*/




// Three alternatives exist here.
// The first is if All Leagues is selected, it should just call everything true.  (COMPLETE)
// The second is if otherLeagues is selected, it should pull anything that does not equal NFL, NCAAF, NCAAB, etc.
// The third is if the league is empty/null. In this case, it should not pull the bets when otherLeagues is selected
  };

const addDateFilter = async (item) => {
  await
Constants.filterDate.splice(0,1,item);

//Constants.filterDate = [item];


// Old way
//Constants.filterDate = [];
//await
//Constants.filterDate.push(item);
};

const addFilter = async (item) => {
  await
Constants.filterLeague.push(item);
};

const removeFilter = async (item) => {
  const array = Constants.filterLeague;
for( var i = 0; i < array.length; i++){
if ( array[i] === item) { 
    await    // Not sure if this is needed, or if this needs to be asynchronous
    array.splice(i, 1); 
}
};

// Code found here: https://love2dev.com/blog/javascript-remove-from-array/
};
      
      const { theme } = props;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer  style={styles.screen} scrollable={true}>
        
      <View  style={styles.View_8y} pointerEvents={"auto"}>
        <IconButton onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleFiltersModal",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  icon={"FontAwesome/photo"} size={32} /><Icon   name={"FontAwesome/photo"} size={24} />
      <View  style={styles.ViewHb} pointerEvents={"auto"}>
        <>{ !(countFilters()) ? null : 
      <Text  style={{ color: theme.colors.error }} >
        {countFilters()}
      </Text>
     }</>
      <Text  style={[styles.Textpd, { color: theme.colors.good }]} >
        {Constants["filterLeagueApply"]}
      </Text>
    
      <Text  style={{ color: theme.colors.error }} >
        {"DISPLAY"}
      </Text>
    
      </View>
    
      </View>
    
<SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET
  
   internalId={Constants["internalId"]}
  
 >
  {({ loading, error, data, refetchGetBetslipsByBettorIdNotKate$s }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (<>
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        <>{ !(filterLeagueApplied(fetchData)) ? null : 
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.fair }} >
        {"Record: "}{null}
      </Text>
    
      <Text  style={{ color: theme.colors.fair }} >
        {"Record %: "}{null}
      </Text>
    
      <Text  style={{ color: theme.colors.fair }} >
        {"Net: "}{statsNetProfit(fetchData)}
      </Text>
    
      <Text  style={{ color: theme.colors.fair }} >
        {"Net Units: "}{null}
      </Text>
    
      <Text  style={{ color: theme.colors.fair }} >
        {"ROI: "}{null}
      </Text>
    
      </View>
    
      </View>
     }</>
      </View>
    
      </View>
    <FlatList data={fetchData} renderItem={({ item }) => { const listData = item; return (<><>{ !(filterBetslipApplied(listData)) ? null : 
      <View   pointerEvents={"auto"}>
        <>{ !(filterBetTypeApplied(listData)) ? null : 
      <View   pointerEvents={"auto"}>
        <>{ !(filterLeagueApplied(listData?.bets)) ? null : 
      <View   pointerEvents={"auto"}>
        
      <View  style={[styles.ViewCs, { backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {listData?.outcome}
      </Text>
    
      <Text  style={{ color: theme.colors.error }} >
        {listData?.type}
      </Text>
    
      <Text  style={{ color: theme.colors.error }} >
        {listData?.book?.name}
      </Text>
    <FlatList data={listData?.bets} renderItem={({ item }) => { const listData = item; return (<>
      <Text  style={{ color: theme.colors.custom_rgb0_122_255 }} >
        {listData?.event?.league}
      </Text>
    
      <Text  style={[styles.TextnK, { color: theme.colors.good }]} >
        {listData?.proposition}
      </Text>
    <>{ !(filterLeagueApplied(listData?.event?.league)) ? null : <View  style={{ backgroundColor: theme.colors.light }} pointerEvents={"auto"} /> }</></>) }}  contentContainerStyle={styles.FlatListcaContent} numColumns={1} />
      </View>
    
      </View>
     }</>
      </View>
     }</>
      </View>
     }</><>{ !(filterBetslipApplied(listData?.outcome)) ? null : <View  style={styles.ViewN3} pointerEvents={"auto"} /> }</></>) }}  contentContainerStyle={styles.FlatListbGContent} numColumns={1} /></>)
  }}
</SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET>
      <Modal  style={{ backgroundColor: theme.colors.background }} visible={Constants["toggleFiltersModal"]} animationType={"slide"} presentationStyle={"pageSheet"} transparent={true}>
        
      <View  style={[styles.View_1K, { backgroundColor: theme.colors.background }]} pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterLeague: "}{(Constants["filterLeague"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterLeagueApply: "}{(Constants["filterLeagueApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.View_9l} pointerEvents={"auto"}>
        <>{ null ? null : <ButtonSolid onPress={
     () => { 
      try {
         
  setGlobalVariableValue({
          key: "filterLeagueApply",
          value: testFunction(Constants["filterLeague"])
        });
  setGlobalVariableValue({
          key: "filterDateApply",
          value: testFunction(Constants["filterDate"])
        });
  setGlobalVariableValue({
          key: "filterSportsbookApply",
          value: testFunction(Constants["filterSportsbook"])
        });
  setGlobalVariableValue({
          key: "filterBetTypeApply",
          value: testFunction(Constants["filterBetType"])
        });
  setGlobalVariableValue({
          key: "toggleFiltersModal",
          value: false
        });
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidaZ, { backgroundColor: theme.colors.primary }]} title={"Apply"} /> }</><>{ !(null) ? null : <ButtonSolid  style={[styles.ButtonSolidSq, { backgroundColor: theme.colors.primary }]} title={""} loading={true} /> }</><>{ null ? null : <ButtonSolid onPress={
     () => { 
      try {
         
  setGlobalVariableValue({
          key: "filterLeague",
          value: []
        });
  setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
  setGlobalVariableValue({
          key: "filterSportsbook",
          value: []
        });
  setGlobalVariableValue({
          key: "filterBetType",
          value: []
        });
 
 console.log(Constants["filterLeague"])
 console.log(Constants["filterDate"])
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidPb, { backgroundColor: theme.colors.primary }]} title={"Clear All"} /> }</><>{ !(null) ? null : <ButtonSolid  style={[styles.ButtonSoliduS, { backgroundColor: theme.colors.primary }]} title={""} loading={true} /> }</><>{ null ? null : <ButtonSolid onPress={
     () => { 
      try {
         
  setGlobalVariableValue({
          key: "filterLeague",
          value: testFunction(Constants["filterLeagueApply"])
        });
  setGlobalVariableValue({
          key: "filterDate",
          value: testFunction(Constants["filterDateApply"])
        });
  setGlobalVariableValue({
          key: "filterSportsbook",
          value: testFunction(Constants["filterSportsbookApply"])
        });
  setGlobalVariableValue({
          key: "filterBetType",
          value: testFunction(Constants["filterBetTypeApply"])
        });
 
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidSv, { backgroundColor: theme.colors.primary }]} title={"Cancel"} /> }</><>{ !(null) ? null : <ButtonSolid  style={[styles.ButtonSolidLC, { backgroundColor: theme.colors.primary }]} title={""} loading={true} /> }</>
      </View>
    
      <ScrollView   showsVerticalScrollIndicator={true} bounces={true}>
        
      <View   pointerEvents={"auto"}>
        <View   pointerEvents={"auto"} />
      <View  style={styles.View_1S} >
        <>{ !(filterAllLeagues(Constants["filterLeague"])) ? null : 
      <Touchable  style={styles.TouchablegB} >
        
      <View  style={[styles.View_8a, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"All Leagues"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterAllLeagues(Constants["filterLeague"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterLeague",
          value: []
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableoA} >
        
      <View  style={[styles.Viewav, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"All Leagues"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("NFL")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("NFL");
 
 console.log(Constants["filterLeague"])
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableYL} >
        
      <View  style={[styles.Viewm9, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"NFL"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("NFL") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("NFL");
 
 console.log(Constants["filterLeague"])
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_8p} >
        
      <View  style={[styles.ViewmV, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"NFL"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("NCAAF")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("NCAAF");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableE0} >
        
      <View  style={[styles.ViewUY, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"NCAAF"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("NCAAF") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("NCAAF");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableRk} >
        
      <View  style={[styles.ViewiF, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"NCAAF"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("NBA")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("NBA");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_6a} >
        
      <View  style={[styles.ViewRt, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"NBA"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("NBA") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("NBA");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablewB} >
        
      <View  style={[styles.ViewBN, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"NBA"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("NCAAMB")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("NCAAMB");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablesA} >
        
      <View  style={[styles.ViewAz, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"NCAAMB"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("NCAAMB") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("NCAAMB");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableBj} >
        
      <View  style={[styles.Viewrk, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"NCAAMB"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("MLB")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("MLB");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablemW} >
        
      <View  style={[styles.ViewQ0, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"MLB"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("MLB") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("MLB");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchableub} >
        
      <View  style={[styles.Viewxs, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"MLB"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("NHL")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("NHL");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableaI} >
        
      <View  style={[styles.ViewLV, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"NHL"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("NHL") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("NHL");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchableli} >
        
      <View  style={[styles.ViewA7, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"NHL"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("UFC")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("UFC");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablelg} >
        
      <View  style={[styles.Viewbl, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"UFC"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("UFC") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("UFC");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_1a} >
        
      <View  style={[styles.Viewg0, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"UFC"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterLeagueButton("otherLeagues")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeFilter("otherLeagues");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableWT} >
        
      <View  style={[styles.ViewGg, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.strong }]} >
        {"Other Leagues"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterLeagueButton("otherLeagues") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addFilter("otherLeagues");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableWY} >
        
      <View  style={[styles.ViewXi, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"Other Leagues"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterSportsbook: "}{(Constants["filterSportsbook"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterSportsbookApply: "}{(Constants["filterSportsbookApply"]).toString()}
      </Text>
    
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

    return (<FlatList data={fetchData} renderItem={({ item }) => { const listData = item; return (<><>{ !(filterSportsbookButton(listData?.account?.book?.name)) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeSportsbookFilter(listData?.account?.book?.name);
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablepn} >
        
      <View  style={[styles.View_4b, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textjt, { color: theme.colors.strong }]} >
        {modifySportsbookName(listData?.account?.book?.name)}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterSportsbookButton(listData?.account?.book?.name) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addSportsbookFilter(listData?.account?.book?.name);
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableTR} >
        
      <View  style={[styles.Viewoy, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textdz, { color: theme.colors.background_inverse }]} >
        {modifySportsbookName(listData?.account?.book?.name)}
      </Text>
    
      </View>
    
      </Touchable>
     }</></>) }}  contentContainerStyle={styles.FlatList_53Content} numColumns={1} />)
  }}
</SwaggerAPIApi.FetchGetBankrollPageByIdGET>
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterBetType: "}{(Constants["filterBetType"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterBetTypeApply: "}{(Constants["filterBetTypeApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.ViewIb} pointerEvents={"auto"}>
        <>{ !(filterAllLeagues(Constants["filterBetType"])) ? null : 
      <Touchable  style={styles.TouchableC9} >
        
      <View  style={[styles.ViewVy, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextiF, { color: theme.colors.strong }]} >
        {"All Bet Types"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterAllLeagues(Constants["filterBetType"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterBetType",
          value: []
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablegO} >
        
      <View  style={[styles.View_3u, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textps, { color: theme.colors.background_inverse }]} >
        {"All Bet Types"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("spread")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("spread");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_3s} >
        
      <View  style={[styles.ViewHy, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textju, { color: theme.colors.strong }]} >
        {"Spreads"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("spread") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("spread");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchableg7} >
        
      <View  style={[styles.View_1k, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextAH, { color: theme.colors.background_inverse }]} >
        {"Spreads"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("total")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("total");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablebr} >
        
      <View  style={[styles.Viewga, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextRR, { color: theme.colors.strong }]} >
        {"Totals"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("total") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("total");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_0U} >
        
      <View  style={[styles.ViewsW, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextsH, { color: theme.colors.background_inverse }]} >
        {"Totals"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("moneyline")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("moneyline");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablesG} >
        
      <View  style={[styles.ViewkF, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TexteA, { color: theme.colors.strong }]} >
        {"Moneylines"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("moneyline") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("moneyline");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableEh} >
        
      <View  style={[styles.ViewWW, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextlX, { color: theme.colors.background_inverse }]} >
        {"Moneylines"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("3-way")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("3-way");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableVm} >
        
      <View  style={[styles.View_2j, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_7x, { color: theme.colors.strong }]} >
        {"3-ways"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("3-way") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("3-way");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablegC} >
        
      <View  style={[styles.ViewyJ, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_7l, { color: theme.colors.background_inverse }]} >
        {"3-ways"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("prop")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("prop");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_9X} >
        
      <View  style={[styles.Viewyb, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextaI, { color: theme.colors.strong }]} >
        {"Props"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("prop") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("prop");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableRq} >
        
      <View  style={[styles.View_9d, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextGp, { color: theme.colors.background_inverse }]} >
        {"Props"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("parlay")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("parlay");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableOJ} >
        
      <View  style={[styles.View_9e, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextiG, { color: theme.colors.strong }]} >
        {"Parlays"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("parlay") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("parlay");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableOx} >
        
      <View  style={[styles.ViewAA, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextJH, { color: theme.colors.background_inverse }]} >
        {"Parlays"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("teaser")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("teaser");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableiZ} >
        
      <View  style={[styles.Viewo7, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextIS, { color: theme.colors.strong }]} >
        {"Teasers"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("teaser") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("teaser");
 
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableZu} >
        
      <View  style={[styles.ViewPa, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextkX, { color: theme.colors.background_inverse }]} >
        {"Teasers"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterUnderdog: "}{(Constants["filterUnderdog"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterUnderdogApply: "}{(Constants["filterUnderdogApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.ViewhN} pointerEvents={"auto"}>
        
      <Touchable  style={styles.TouchableeY} >
        
      <View  style={[styles.Viewhr, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texten, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchable_2y} >
        
      <View  style={[styles.Viewir, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextbM, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablezB} >
        
      <View  style={[styles.View_3i, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_6z, { color: theme.colors.strong }]} >
        {"Favorites"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableUg} >
        
      <View  style={[styles.ViewGS, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textz3, { color: theme.colors.background_inverse }]} >
        {"Favorites"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableLf} >
        
      <View  style={[styles.ViewLH, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextXN, { color: theme.colors.strong }]} >
        {"Underdogs"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableSU} >
        
      <View  style={[styles.ViewaR, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textgb, { color: theme.colors.background_inverse }]} >
        {"Underdogs"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterUnders: "}{(Constants["filterUnder"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterUndersApply: "}{(Constants["filterUnderApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.ViewjF} pointerEvents={"auto"}>
        
      <Touchable  style={styles.Touchable_3H} >
        
      <View  style={[styles.ViewfH, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextSr, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablebF} >
        
      <View  style={[styles.Viewak, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextZZ, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchabletf} >
        
      <View  style={[styles.ViewyC, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextAR, { color: theme.colors.strong }]} >
        {"Overs"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchable_8g} >
        
      <View  style={[styles.ViewAs, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextHa, { color: theme.colors.background_inverse }]} >
        {"Overs Only"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablesU} >
        
      <View  style={[styles.ViewA5, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextiE, { color: theme.colors.strong }]} >
        {"Unders"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchableq5} >
        
      <View  style={[styles.Viewnb, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextFw, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterStatus: "}{(Constants["filterOutcome"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterStatusApply: "}{(Constants["filterOutcomeApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.Viewor} pointerEvents={"auto"}>
        
      <Touchable  style={styles.TouchableZ9} >
        
      <View  style={[styles.Viewvj, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextDM, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableAd} >
        
      <View  style={[styles.Viewxh, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textxa, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableNq} >
        
      <View  style={[styles.ViewZh, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextF2, { color: theme.colors.strong }]} >
        {"Wins"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchabledg} >
        
      <View  style={[styles.ViewKO, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextGg, { color: theme.colors.background_inverse }]} >
        {"Wins"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchableg1} >
        
      <View  style={[styles.ViewJE, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextcJ, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablefY} >
        
      <View  style={[styles.ViewWN, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TexteX, { color: theme.colors.background_inverse }]} >
        {"Losses"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchableql} >
        
      <View  style={[styles.ViewlC, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextYV, { color: theme.colors.strong }]} >
        {"Pushes"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableRi} >
        
      <View  style={[styles.ViewZG, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextQ5, { color: theme.colors.background_inverse }]} >
        {"Pushes"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterBonus: "}{(Constants["filterBonus"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterBonusApply: "}{(Constants["filterBonusApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.Viewh3} pointerEvents={"auto"}>
        
      <Touchable  style={styles.Touchable_9Y} >
        
      <View  style={[styles.ViewZB, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textd3, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchablep3} >
        
      <View  style={[styles.View_0I, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextjZ, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchableb8} >
        
      <View  style={[styles.ViewaU, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textqz, { color: theme.colors.strong }]} >
        {"Bonuses Only"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchableag} >
        
      <View  style={[styles.View_4E, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextsN, { color: theme.colors.background_inverse }]} >
        {"Bonuses Only"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchabley7} >
        
      <View  style={[styles.Viewsb, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextBS, { color: theme.colors.strong }]} >
        {"No Bonuses"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchable_36} >
        
      <View  style={[styles.View_9G, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_7M, { color: theme.colors.background_inverse }]} >
        {"No Bonuses"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterLiveBet: "}{(Constants["filterLiveBet"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterLiveBetApply: "}{(Constants["filterLiveBetApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.ViewlX} pointerEvents={"auto"}>
        
      <Touchable  style={styles.TouchableJF} >
        
      <View  style={[styles.ViewnN, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextUT, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchable_6f} >
        
      <View  style={[styles.ViewMs, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_05, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablebN} >
        
      <View  style={[styles.ViewQT, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texty0, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablehE} >
        
      <View  style={[styles.ViewvY, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textm4, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchablezw} >
        
      <View  style={[styles.View_8c, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextmV, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableMf} >
        
      <View  style={[styles.ViewcR, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextOP, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      </ScrollView>
    
      </View>
    
      </Modal>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Textpd: {
marginLeft: 10,
}, ViewHb: {
flexDirection: 'row',
}, View_8y: {
flexDirection: 'row',
flexWrap: 'wrap',
}, FlatListLfContent: {
flex: 1,
}, Text_9L: {
fontSize: 10,
}, TextnK: {
fontSize: 10,
}, FlatListcaContent: {
flex: 1,
}, ViewCs: {
marginBottom: 12,
}, ViewN3: {
marginTop: 6,
}, FlatListbGContent: {
flex: 1,
}, FetchJi: {
minHeight: 40,
}, ButtonSolidaZ: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidSq: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidPb: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSoliduS: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidSv: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidLC: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, View_9l: {
flexDirection: 'row',
}, View_8a: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, TouchablegB: {
marginTop: 8,
}, Viewav: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, TouchableoA: {
marginTop: 8,
}, Viewm9: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, TouchableYL: {
marginTop: 8,
}, ViewmV: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, Touchable_8p: {
marginTop: 8,
}, ViewUY: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, TouchableE0: {
marginTop: 8,
}, ViewiF: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, TouchableRk: {
marginTop: 8,
}, ViewRt: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_6a: {
marginTop: 8,
}, ViewBN: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablewB: {
marginTop: 8,
}, ViewAz: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablesA: {
marginTop: 8,
}, Viewrk: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableBj: {
marginTop: 8,
}, ViewQ0: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablemW: {
marginTop: 8,
}, Viewxs: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchableub: {
marginTop: 8,
}, ViewLV: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableaI: {
marginTop: 8,
}, ViewA7: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchableli: {
marginTop: 8,
}, Viewbl: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablelg: {
marginTop: 8,
}, Viewg0: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_1a: {
marginTop: 8,
}, ViewGg: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableWT: {
marginTop: 8,
}, ViewXi: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableWY: {
marginTop: 8,
}, View_1S: {
flexWrap: 'wrap',
flexDirection: 'row',
marginTop: 6,
marginBottom: 20,
}, Textks: {
fontFamily: 'System', fontWeight: '700',
}, Viewfd: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchableib: {
marginTop: 8,
}, Textbp: {
fontFamily: 'System', fontWeight: '700',
}, Viewxo: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableMT: {
marginTop: 8,
}, TextYV: {
fontFamily: 'System', fontWeight: '700',
}, Viewx0: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableN5: {
marginTop: 8,
}, Text_7r: {
fontFamily: 'System', fontWeight: '700',
}, ViewRt: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableGf: {
marginTop: 8,
}, Textac: {
fontFamily: 'System', fontWeight: '700',
}, ViewTl: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableQp: {
marginTop: 8,
}, Textjb: {
fontFamily: 'System', fontWeight: '700',
}, ViewcV: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchablepP: {
marginTop: 8,
}, Texta1: {
fontFamily: 'System', fontWeight: '700',
}, ViewoT: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchable_3b: {
marginTop: 8,
}, TextL9: {
fontFamily: 'System', fontWeight: '700',
}, ViewjD: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableSG: {
marginTop: 8,
}, Texts2: {
fontFamily: 'System', fontWeight: '700',
}, Viewqu: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchablemB: {
marginTop: 8,
}, Text_9O: {
fontFamily: 'System', fontWeight: '700',
}, ViewhX: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchablety: {
marginTop: 8,
}, Textix: {
fontFamily: 'System', fontWeight: '700',
}, Viewgx: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchableas: {
marginTop: 8,
}, TextoP: {
fontFamily: 'System', fontWeight: '700',
}, ViewOe: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableHM: {
marginTop: 8,
}, Text_6M: {
fontFamily: 'System', fontWeight: '700',
}, ViewUj: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableUq: {
marginTop: 8,
}, TextwD: {
fontFamily: 'System', fontWeight: '700',
}, ViewC5: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchablevu: {
marginTop: 8,
}, Viewtk: {
marginBottom: 18,
flexDirection: 'row',
flexWrap: 'wrap',
}, DatePickerfp: {
opacity: 1,
marginRight: 8,
width: 175,
}, DatePickerJU: {
width: 175,
}, Viewuj: {
flexDirection: 'row',
flexWrap: 'wrap',
}, Textjt: {
fontFamily: 'System', fontWeight: '700',
}, View_4b: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchablepn: {
marginTop: 8,
}, Textdz: {
fontFamily: 'System', fontWeight: '700',
}, Viewoy: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableTR: {
marginTop: 8,
}, FlatList_53Content: {
flexWrap: 'wrap',
flexDirection: 'row',
}, Fetch_33: {
minHeight: 40,
}, TextiF: {
fontFamily: 'System', fontWeight: '700',
}, ViewVy: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableC9: {
marginTop: 8,
}, Textps: {
fontFamily: 'System', fontWeight: '700',
}, View_3u: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablegO: {
marginTop: 8,
}, Textju: {
fontFamily: 'System', fontWeight: '700',
}, ViewHy: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_3s: {
marginTop: 8,
}, TextAH: {
fontFamily: 'System', fontWeight: '700',
}, View_1k: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchableg7: {
marginTop: 8,
}, TextRR: {
fontFamily: 'System', fontWeight: '700',
}, Viewga: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablebr: {
marginTop: 8,
}, TextsH: {
fontFamily: 'System', fontWeight: '700',
}, ViewsW: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_0U: {
marginTop: 8,
}, TexteA: {
fontFamily: 'System', fontWeight: '700',
}, ViewkF: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablesG: {
marginTop: 8,
}, TextlX: {
fontFamily: 'System', fontWeight: '700',
}, ViewWW: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableEh: {
marginTop: 8,
}, Text_7x: {
fontFamily: 'System', fontWeight: '700',
}, View_2j: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableVm: {
marginTop: 8,
}, Text_7l: {
fontFamily: 'System', fontWeight: '700',
}, ViewyJ: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablegC: {
marginTop: 8,
}, TextaI: {
fontFamily: 'System', fontWeight: '700',
}, Viewyb: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_9X: {
marginTop: 8,
}, TextGp: {
fontFamily: 'System', fontWeight: '700',
}, View_9d: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableRq: {
marginTop: 8,
}, TextiG: {
fontFamily: 'System', fontWeight: '700',
}, View_9e: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableOJ: {
marginTop: 8,
}, TextJH: {
fontFamily: 'System', fontWeight: '700',
}, ViewAA: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableOx: {
marginTop: 8,
}, TextIS: {
fontFamily: 'System', fontWeight: '700',
}, Viewo7: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableiZ: {
marginTop: 8,
}, TextkX: {
fontFamily: 'System', fontWeight: '700',
}, ViewPa: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableZu: {
marginTop: 8,
}, ViewIb: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, Texten: {
fontFamily: 'System', fontWeight: '700',
}, Viewhr: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableeY: {
marginTop: 8,
}, TextbM: {
fontFamily: 'System', fontWeight: '700',
}, Viewir: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_2y: {
marginTop: 8,
}, Text_6z: {
fontFamily: 'System', fontWeight: '700',
}, View_3i: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablezB: {
marginTop: 8,
}, Textz3: {
fontFamily: 'System', fontWeight: '700',
}, ViewGS: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableUg: {
marginTop: 8,
}, TextXN: {
fontFamily: 'System', fontWeight: '700',
}, ViewLH: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableLf: {
marginTop: 8,
}, Textgb: {
fontFamily: 'System', fontWeight: '700',
}, ViewaR: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableSU: {
marginTop: 8,
}, ViewhN: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, TextSr: {
fontFamily: 'System', fontWeight: '700',
}, ViewfH: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_3H: {
marginTop: 8,
}, TextZZ: {
fontFamily: 'System', fontWeight: '700',
}, Viewak: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablebF: {
marginTop: 8,
}, TextAR: {
fontFamily: 'System', fontWeight: '700',
}, ViewyC: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchabletf: {
marginTop: 8,
}, TextHa: {
fontFamily: 'System', fontWeight: '700',
}, ViewAs: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_8g: {
marginTop: 8,
}, TextiE: {
fontFamily: 'System', fontWeight: '700',
}, ViewA5: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablesU: {
marginTop: 8,
}, TextFw: {
fontFamily: 'System', fontWeight: '700',
}, Viewnb: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchableq5: {
marginTop: 8,
}, ViewjF: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, TextDM: {
fontFamily: 'System', fontWeight: '700',
}, Viewvj: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableZ9: {
marginTop: 8,
}, Textxa: {
fontFamily: 'System', fontWeight: '700',
}, Viewxh: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableAd: {
marginTop: 8,
}, TextF2: {
fontFamily: 'System', fontWeight: '700',
}, ViewZh: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableNq: {
marginTop: 8,
}, TextGg: {
fontFamily: 'System', fontWeight: '700',
}, ViewKO: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchabledg: {
marginTop: 8,
}, TextcJ: {
fontFamily: 'System', fontWeight: '700',
}, ViewJE: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchableg1: {
marginTop: 8,
}, TexteX: {
fontFamily: 'System', fontWeight: '700',
}, ViewWN: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablefY: {
marginTop: 8,
}, TextYV: {
fontFamily: 'System', fontWeight: '700',
}, ViewlC: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchableql: {
marginTop: 8,
}, TextQ5: {
fontFamily: 'System', fontWeight: '700',
}, ViewZG: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableRi: {
marginTop: 8,
}, Viewor: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, Textd3: {
fontFamily: 'System', fontWeight: '700',
}, ViewZB: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_9Y: {
marginTop: 8,
}, TextjZ: {
fontFamily: 'System', fontWeight: '700',
}, View_0I: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchablep3: {
marginTop: 8,
}, Textqz: {
fontFamily: 'System', fontWeight: '700',
}, ViewaU: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchableb8: {
marginTop: 8,
}, TextsN: {
fontFamily: 'System', fontWeight: '700',
}, View_4E: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchableag: {
marginTop: 8,
}, TextBS: {
fontFamily: 'System', fontWeight: '700',
}, Viewsb: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchabley7: {
marginTop: 8,
}, Text_7M: {
fontFamily: 'System', fontWeight: '700',
}, View_9G: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_36: {
marginTop: 8,
}, Viewh3: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, TextUT: {
fontFamily: 'System', fontWeight: '700',
}, ViewnN: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableJF: {
marginTop: 8,
}, Text_05: {
fontFamily: 'System', fontWeight: '700',
}, ViewMs: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_6f: {
marginTop: 8,
}, Texty0: {
fontFamily: 'System', fontWeight: '700',
}, ViewQT: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablebN: {
marginTop: 8,
}, Textm4: {
fontFamily: 'System', fontWeight: '700',
}, ViewvY: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablehE: {
marginTop: 8,
}, TextmV: {
fontFamily: 'System', fontWeight: '700',
}, View_8c: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchablezw: {
marginTop: 8,
}, TextOP: {
fontFamily: 'System', fontWeight: '700',
}, ViewcR: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableMf: {
marginTop: 8,
}, ViewlX: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, View_1K: {
width: '100%',
height: '100%',
opacity: 1,
}, screen: {
marginTop: 30,
marginBottom: 30,
} });


export default withTheme(MyBetsTestScreenCopy);