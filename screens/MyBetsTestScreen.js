import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import { ButtonSolid, DatePicker, IconButton, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const MyBetsTestScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      
const setGlobalVariableValue = GlobalVariables.useSetValue();
      const filterBetTypeButton = (x) => {
  return Constants.filterBetType.includes(x) ? true : false;
};

const filterBetslipApplied = (betslip) => {
    // console.log("abc ",betslip)
const primaryBetTypes = ['spread','total','moneyline','3-way'];
const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];

function loopLeague () {
let exist = false;
for (let x = 0; x < betslip.bets.length; x++){
  if (betslip.bets[x].event === null || betslip.bets[x].event.league === null) {
    exist;
  } else if (Constants.filterLeagueApply.includes(betslip.bets[x].event.league)) {
    exist = true;
  } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
    exist = (primaryLeagues.includes(betslip.bets[x].event.league)) ? exist : true;
  } else {
    exist;
  };
};
return exist;
};


let available = false;

if (
// No filters
(Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0)


// Only Bet Type filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& (Constants.filterBetTypeApply.includes(betslip.type)
|| (betslip.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslip.bets[0].type)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslip.bets[0].proposition)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslip.bets[0].proposition)))

 
// Only Sportsbook filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterSportsbookApply.includes(betslip.book.name))


// Only League filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& loopLeague())


// Only Sportsbook and Bet Type filters
|| (Constants.filterLeagueApply.length == 0
&& Constants.filterSportsbookApply.includes(betslip.book.name)
&& ((Constants.filterBetTypeApply.includes(betslip.type))
|| (betslip.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslip.bets[0].type)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslip.bets[0].proposition)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslip.bets[0].proposition)))


// Only League and Sportsbook filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterSportsbookApply.includes(betslip.book.name)
&& loopLeague())


// Only League and Bet Type filters
|| (Constants.filterSportsbookApply.length == 0
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslip.type)
|| (betslip.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslip.bets[0].type)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslip.bets[0].proposition)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslip.bets[0].proposition)))


// Only League, Bet Type, and Sportsbook filters
|| (Constants.filterSportsbookApply.includes(betslip.book.name)
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslip.type)
|| (betslip.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslip.bets[0].type)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslip.bets[0].proposition)
|| (betslip.bets.length == 1)
&& (betslip.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslip.bets[0].proposition)))

){available = true;
} else {
available
};

//available == true ? (betslip.netProfit + Constants.statsNetProfit) : Constants.statsNetProfit;

Constants.statsNetProfit = available ? (betslip.netProfit + Constants.statsNetProfit) : Constants.statsNetProfit;
Constants.statsToRisk = available ? (betslip.toRisk + Constants.statsToRisk) : Constants.statsToRisk;

(Constants.statsWins = available && betslip.outcome === "win") ? (1 + Constants.statsWins) : Constants.statsWins;
(Constants.statsLosses = available && betslip.outcome === "loss") ? (1 + Constants.statsLosses) : Constants.statsLosses;
(Constants.statsPushes = available && betslip.outcome === "push") ? (1 + Constants.statsPushes) : Constants.statsPushes;

return available;
  };

const statsNetUnits = (x) => {
    let sum = 0;

for (let i = 0; i < x.length; i++) {
sum += x.netProfit[i];
Constants.statsNetProfit = sum;
return true;
};

/*
let sum = 0;

for (let i = 0; i < x.length; i++) {
  sum += x.netProfit[i];
};

const units = (sum/100)/Constants.userDefaultUnitSize;
return "(" + `${Math.round(units * 100) / 100}` + "U)";
*/
  };

const addStatusFilter = async (item) => {
  await
Constants.filterStatus.push(item);
};

const addOutcomeFilter = async (item) => {
  await
Constants.filterOutcome.push(item);
};

// Counts the number of filters that are being applied to the bets.
const countFilters = () => {
  return (Constants.filterLeagueApply.length);   // Simply add all other filters arrays onto here to create the count
};

const filterDateButton = (x) => {
  /*let y = await Constants.filterDate
console.log("filter date button" + y)*/

return Constants.filterDate.includes(x) ? true : false;
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

const statsListArray = (x) => {
  return x[0];
};

const filterDateApplied = (bets) => {
    //Old Code that works below
let d = new Date();

function getYTD() {
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
return day;
}

if (Constants.filterDateApply.length === 0) {
return true;
} else {
try {
  let exist = false
  for (let x = 0; x < bets.length; x++){
    if (Constants.filterDateApply.includes('sevenDays')) {
      days = 7;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('twentyEightDays')) {
      days = 28;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('threeMonths')) {
      days = 90;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('sixMonths')) {
      days = 180;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('yearToDate')) {
      days = getYTD();
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('twelveMonths')) {
      days = 365;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
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


/*
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
*/



//Old Code that works above


/*
if (bets[0].event === null) {
  return false;
} else if (bets[0].event.startTime === null) {
  return false;
} else {
  return new Date(bets[0].event.startTime) >= (d.setDate(d.getDate() - days));
};
*/



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

const filterStatsBetslipApplied = (array) => {
    if (array.outcome !== "pending") {
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

const removeOutcomeFilter = async (item) => {
  const array = Constants.filterOutcome;
for( var i = 0; i < array.length; i++){
if ( array[i] === item) { 
    await    // Not sure if this is needed, or if this needs to be asynchronous
    array.splice(i, 1); 
}
};

// Code found here: https://love2dev.com/blog/javascript-remove-from-array/
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

const filterSportsbookButton = (x) => {
  if (Constants.filterSportsbook.length == 0 && x === "Total") {
return true;
} else if (Constants.filterSportsbook.includes(x)) {
return true;
} else {
return false;
};
};

// Determines if all leagues are included in the filters.
const filterAllLeagues = (x) => {
  /*let y = await x

console.log(y)

return y.length === 0; */

return x.length == 0;
};

const addUnderdogFilter = async (item) => {
  await
Constants.filterUnderdog.splice(0,1,item);
};

const addBetTypeFilter = async (item) => {
  await
Constants.filterBetType.push(item);
};

const countBets = (x) => {
  return x.length !== 0;
};

const addUnderFilter = async (item) => {
  await
Constants.filterUnder.splice(0,1,item);
};

const modifySportsbookName = (x) => {
  return x === "Total" ? "All Sportsbooks" : x;
};

const testFunction = (array) => {
  return [...array]
};

const filterBetslips = (betslips) => {
  const primaryBetTypes = ['spread','total','moneyline','3-way'];
const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];


function isDisplayed(betslips) {

function getYTD() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day;
};


function loopDate() {
    let exist = false;
    for (let x = 0; x < betslips.bets.length; x++){
        let d = new Date();
        if (betslips.bets[x].event === null || betslips.bets[x].event.startTime === null) {
            exist;
        } else if (Constants.filterDateApply.includes('sevenDays')) {
            exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - 7));
        } else if (Constants.filterDateApply.includes('twentyEightDays')) {
            exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - 28));
        } else if (Constants.filterDateApply.includes('threeMonths')) {
            exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - 90));
        } else if (Constants.filterDateApply.includes('sixMonths')) {
            exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - 180));
        } else if (Constants.filterDateApply.includes('yearToDate')) {
            exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - getYTD()));
        } else if (Constants.filterDateApply.includes('twelveMonths')) {
            exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - 365));
        } else {
            exist;
        };
    };
    return exist;
};


function loopLeague() {
    let exist = false;
    for (let x = 0; x < betslips.bets.length; x++){
        if (betslips.bets[x].event === null || betslips.bets[x].event.league === null) {
        exist;
        } else if (Constants.filterLeagueApply.includes(betslips.bets[x].event.league)) {
        exist = true;
        } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
        exist = (primaryLeagues.includes(betslips.bets[x].event.league)) ? exist : true;
        } else {
        exist;
        };
    };
    return exist;
};


function loopUnderdog() {
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


function loopUnder() {
    let exist = false;
    for (let x = 0; x < betslips.bets.length; x++){
        if (betslips.bets[x].position === null) {
        exist;
        } else if (Constants.filterUnderApply.includes(betslips.bets[x].position)) {
        exist = true;
        } else {
        exist;
        };
    };
    return exist;
};


if (

// Practice
(((Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending")
|| (Constants.filterBetStatusApply.includes(betslips.outcome)))

&& ((Constants.filterSportsbookApply.length == 0)
|| (Constants.filterSportsbookApply.includes(betslips.book.name)))

&& ((Constants.filterBetTypeApply.length == 0) 
|| (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))

&& ((Constants.filterLeagueApply.length == 0)
|| (loopLeague()))

&& ((Constants.filterDateApply.length == 0)
|| (loopDate()))

&& ((Constants.filterUnderdogApply.length == 0)
|| (loopUnderdog()))

&& ((Constants.filterOutcomeApply.length == 0)
|| (Constants.filterOutcomeApply.includes(betslips.outcome)))

&& ((Constants.filterUnderApply.length == 0)
|| (loopUnder())))


/*
/////// OLD WORKING WAY OF FILTERING BELOW //////
// No filters
(Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterUnderdogApply.length == 0)


// Only Fav/Dog filter
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& loopUnderdog())


// Only Bet Type filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only Sportsbook filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name))


// Only League filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterDateApply.length == 0
&& loopLeague())


// Only Bet Status filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome))


// Only Date filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& loopDate())


// Only Sportsbook and Bet Type filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& ((Constants.filterBetTypeApply.includes(betslips.type))
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only League and Sportsbook filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague())


// Only League and Bet Type filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterDateApply.length == 0
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only Bet Status and Sportsbook filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& Constants.filterBetStatusApply.includes(betslips.outcome))


// Only Bet Status and League filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterDateApply.length == 0
&& loopLeague()
&& Constants.filterBetStatusApply.includes(betslips.outcome))


// Only Bet Status and Bet Type filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only Date and Sportsbook filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopDate())


// Only Date and League filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& loopLeague()
&& loopDate())


// Only Date and Bet Type filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& loopDate()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only Date and Bet Status filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& loopDate())


// Only League, Bet Type, and Sportsbook filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterDateApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only League, Bet Type, and Bet Status filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only League, Sportsbook, and Bet Status filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& loopLeague())


// Only Bet Type, Sportsbook, and Bet Status filters
|| (Constants.filterLeagueApply.length == 0
&& Constants.filterDateApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// League, Sportsbook, and Date filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague()
&& loopDate())


// League, Bet Type, and Date filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.length == 0
&& loopLeague()
&& loopDate()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// League, Bet Status, and Date filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& loopLeague()
&& loopDate())


// Sportsbook, Bet Type, and Date filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterLeagueApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopDate()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Sportsbook, Bet Status, and Date filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& loopDate())


// Bet Type, Bet Status, and Date filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& loopDate()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only League, Bet Type, Sportsbook, and Bet Status filters
|| (Constants.filterDateApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// League, Bet Type, Bet Status, Date filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& loopLeague()
&& loopDate()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// League, Sportsbook, Bet Status, Date filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague()
&& loopDate())


// League, Sportsbook, Bet Type, Date filters
|| (Constants.filterBetStatusApply.length == 0
&& betslips.outcome !== "pending"
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague()
&& loopDate()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Sportsbook, Bet Type, Bet Status, Date filters
|| (Constants.filterLeagueApply.length == 0
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopDate()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Sportsbook, Bet Type, Bet Status, League, Date filters
|| (loopDate()
&& Constants.filterBetStatusApply.includes(betslips.outcome)
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))
*/

){
    return true;
} else {
    return false;
};
};

betslips = betslips.filter(isDisplayed);

//Constants.betsFound = betslips.length == 0 ? false : true;

Constants.statsNetProfit = betslips.reduce((a,b) => a + b.netProfit, 0);

Constants.statsAtRisk = betslips.reduce((a,b) => a + b.atRisk, 0);

Constants.statsPendingAmount = betslips.reduce((a,b) => a + b.toWin, 0);

Constants.statsWins = betslips.filter(obj => {
if (obj.outcome === "win") {
    return true;
}
}).length;

Constants.statsLosses = betslips.filter(obj => {
if (obj.outcome === "loss") {
    return true;
}
}).length;

Constants.statsPushes = betslips.filter(obj => {
if (obj.outcome === "push") {
    return true;
}
}).length;

Constants.statsPendingCount = betslips.filter(obj => {
if (obj.outcome === "pending") {
    return true;
}
}).length;


setA(Constants.statsNetProfit)
/*setVarAtRisk(Constants.statsAtRisk)
setVarPendingAmount(Constants.statsPendingAmount)
setVarWins(Constants.statsWins)
setVarLosses(Constants.statsLosses)
setVarPushes(Constants.statsPushes)
setVarPendingCount(Constants.statsPendingCount)
setBetsFound(Constants.betsFound)*/


return betslips;
};

const filterTopLevelBetslipsAppliedTwo = (betslips) => {
    /*
const primaryBetTypes = ['spread','total','moneyline','3-way'];
const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];


function isDisplayed(betslips) {

  function getYTD() {
      var now = new Date();
      var start = new Date(now.getFullYear(), 0, 0);
      var diff = now - start;
      var oneDay = 1000 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      return day;
  };


  function loopDate() {
      let exist = false;
      let d = new Date();
      for (let x = 0; x < betslips.bets.length; x++){
          if (Constants.filterDateApply.includes('sevenDays')) {
              days = 7;
              exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
          } else if (Constants.filterDateApply.includes('twentyEightDays')) {
              days = 28;
              exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
          } else if (Constants.filterDateApply.includes('threeMonths')) {
              days = 90;
              exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
          } else if (Constants.filterDateApply.includes('sixMonths')) {
              days = 180;
              exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
          } else if (Constants.filterDateApply.includes('yearToDate')) {
              days = getYTD();
              exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
          } else if (Constants.filterDateApply.includes('twelveMonths')) {
              days = 365;
              exist = new Date(betslips.bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
          } else {
              exist;
          };
      };
      return exist;
  };
  

  function loopLeague() {
      let exist = false;
      for (let x = 0; x < betslips.bets.length; x++){
          if (betslips.bets[x].event === null || betslips.bets[x].event.league === null) {
          exist;
          } else if (Constants.filterLeagueApply.includes(betslips.bets[x].event.league)) {
          exist = true;
          } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
          exist = (primaryLeagues.includes(betslips.bets[x].event.league)) ? exist : true;
          } else {
          exist;
          };
      };
      return exist;
  };
  

  if (
  // No filters
  (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0)
  

  // Only Bet Type filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))

  
  // Only Sportsbook filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name))
  
  
  // Only League filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterDateApply.length == 0
  && loopLeague())


  // Only Bet Status filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterBetStatusApply.includes(betslips.outcome))


  // Only Date filters
  (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0)


  // Only Sportsbook and Bet Type filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && ((Constants.filterBetTypeApply.includes(betslips.type))
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League and Sportsbook filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague())
  
  
  // Only League and Bet Type filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterDateApply.length == 0
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only Bet Status and Sportsbook filters
  || (Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && Constants.filterBetStatusApply.includes(betslips.outcome))


  // Only Bet Status and League filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterDateApply.length == 0
  && loopLeague()
  && Constants.filterBetStatusApply.includes(betslips.outcome))


  // Only Bet Status and Bet Type filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only Date and Sportsbook filters


  // Only Date and League filters


  // Only Date and Bet Type filters


  // Only Date and Bet Status filters
  

  // Only League, Bet Type, and Sportsbook filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterDateApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League, Bet Type, and Bet Status filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && Constants.filterDateApply.length == 0
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League, Sportsbook, and Bet Status filters
  || (Constants.filterBetTypeApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && loopLeague())


  // Only Bet Type, Sportsbook, and Bet Status filters
  || (Constants.filterLeagueApply.length == 0
  && Constants.filterDateApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // League, Sportsbook, and Date filters


  // League, Bet Type, and Date filters


  // League, Bet Status, and Date filters


  // Sportsbook, Bet Type, and Date filters


  // Sportsbook, Bet Status, and Date filters


  // Bet Type, Bet Status, and Date filters


  // Only League, Bet Type, Sportsbook, and Bet Status filters
  || (Constants.filterDateApply.length == 0
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // League, Bet Type, Bet Status, Date filters


  // League, Sportsbook, Bet Status, Date filters


  // League, Sportsbook, Bet Type, Date filters


  // Sportsbook, Bet Type, Bet Status, Date filters


  // Sportsbook, Bet Type, Bet Status, League, Date filters


  ){
      return true;
      //available = true;
  } else {
      return false;
      //available
  };
  //return available;
};


betslips = betslips.filter(isDisplayed);


Constants.statsNetProfit = betslips.map(item => item.netProfit).reduce((a,b) => a + b, 0);

Constants.statsAtRisk = betslips.map(item => item.atRisk).reduce((a,b) => a + b, 0);

Constants.statsPendingAmount = betslips.map(item => item.toWin).reduce((a,b) => a + b, 0);

Constants.statsWins = betslips.filter(obj => {
  if (obj.outcome === "win") {
      return true;
  }
}).length;

Constants.statsLosses = betslips.filter(obj => {
  if (obj.outcome === "loss") {
      return true;
  }
}).length;

Constants.statsPushes = betslips.filter(obj => {
  if (obj.outcome === "push") {
      return true;
  }
}).length;

Constants.statsPendingCount = betslips.filter(obj => {
  if (obj.outcome === "pending") {
      return true;
  }
}).length;


return betslips;
*/


///////////////////////////////

/*
let d = new Date();

function getYTD() {
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
return day;
};

if (Constants.filterDateApply.length === 0) {
return true;
} else {
try {
  let exist = false
  for (let x = 0; x < bets.length; x++){
    if (Constants.filterDateApply.includes('sevenDays')) {
      days = 7;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('twentyEightDays')) {
      days = 28;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('threeMonths')) {
      days = 90;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('sixMonths')) {
      days = 180;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('yearToDate')) {
      days = getYTD();
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
    } else if (Constants.filterDateApply.includes('twelveMonths')) {
      days = 365;
      exist = new Date(bets[x].event.startTime) >= (d.setDate(d.getDate() - days));
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









const primaryBetTypes = ['spread','total','moneyline','3-way'];
const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];


function isDisplayed(betslips) {

  function loopLeague() {
      let exist = false;
      for (let x = 0; x < betslips.bets.length; x++){
          if (betslips.bets[x].event === null || betslips.bets[x].event.league === null) {
          exist;
          } else if (Constants.filterLeagueApply.includes(betslips.bets[x].event.league)) {
          exist = true;
          } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
          exist = (primaryLeagues.includes(betslips.bets[x].event.league)) ? exist : true;
          } else {
          exist;
          };
      };
      return exist;
  };
  

  if (
  // No filters
  (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0)
  

  // Only Bet Type filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))

  
  // Only Sportsbook filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name))
  
  
  // Only League filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && loopLeague())


  // Only Bet Status filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterBetStatusApply.includes(betslips.outcome))


  // Only Sportsbook and Bet Type filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterLeagueApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && ((Constants.filterBetTypeApply.includes(betslips.type))
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League and Sportsbook filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague())
  
  
  // Only League and Bet Type filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.length == 0
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only Bet Status and Sportsbook filters
  || (Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && Constants.filterBetStatusApply.includes(betslips.outcome))


  // Only Bet Status and League filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && loopLeague()
  && Constants.filterBetStatusApply.includes(betslips.outcome))


  // Only Bet Status and Bet Type filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))
  

  // Only League, Bet Type, and Sportsbook filters
  || (Constants.filterBetStatusApply.length == 0
  && betslips.outcome !== "pending"
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League, Bet Type, and Bet Status filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League, Sportsbook, and Bet Status filters
  || (Constants.filterBetTypeApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && loopLeague())


  // Only Bet Type, Sportsbook, and Bet Status filters
  || (Constants.filterLeagueApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && Constants.filterBetStatusApply.includes(betslips.outcome)
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League, Bet Type, Sportsbook, and Bet Status filters
  || (Constants.filterBetStatusApply.includes(betslips.outcome)
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  ){
      return true;
      //available = true;
  } else {
      return false;
      //available
  };
  //return available;
};

betslips = betslips.filter(isDisplayed);


Constants.statsNetProfit = betslips.map(item => item.netProfit).reduce((a,b) => a + b, 0);

Constants.statsAtRisk = betslips.map(item => item.atRisk).reduce((a,b) => a + b, 0);

Constants.statsPendingAmount = betslips.map(item => item.toWin).reduce((a,b) => a + b, 0);

Constants.statsWins = betslips.filter(obj => {
  if (obj.outcome === "win") {
      return true;
  }
}).length;

Constants.statsLosses = betslips.filter(obj => {
  if (obj.outcome === "loss") {
      return true;
  }
}).length;

Constants.statsPushes = betslips.filter(obj => {
  if (obj.outcome === "push") {
      return true;
  }
}).length;

Constants.statsPendingCount = betslips.filter(obj => {
  if (obj.outcome === "pending") {
      return true;
  }
}).length;


return betslips;




/////////////////////////////////////////////////////////////////////
//const primaryBetTypes = ['spread','total','moneyline','3-way'];
//const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];

/*
let available = false;
for (let y = 0; y < betslips.length; y++){
  
  function loopLeague () {
      let exist = false;
      for (let x = 0; x < betslips.bets.length; x++){
          if (betslips.bets[x].event === null || betslips.bets[x].event.league === null) {
          exist;
          } else if (Constants.filterLeagueApply.includes(betslips.bets[x].event.league)) {
          exist = true;
          } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
          exist = (primaryLeagues.includes(betslips.bets[x].event.league)) ? exist : true;
          } else {
          exist;
          };
      };
      return exist;
  };
  

  if (
  // No filters
  (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0)
  

  // Only Bet Type filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))

  
  // Only Sportsbook filters
  || (Constants.filterBetTypeApply.length == 0
  && Constants.filterLeagueApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name))
  
  
  // Only League filters
  || (Constants.filterSportsbookApply.length == 0
  && Constants.filterBetTypeApply.length == 0
  && loopLeague())
  

  // Only Sportsbook and Bet Type filters
  || (Constants.filterLeagueApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && ((Constants.filterBetTypeApply.includes(betslips.type))
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))


  // Only League and Sportsbook filters
  || (Constants.filterBetTypeApply.length == 0
  && Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague())
  
  
  // Only League and Bet Type filters
  || (Constants.filterSportsbookApply.length == 0
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))

  
  // Only League, Bet Type, and Sportsbook filters
  || (Constants.filterSportsbookApply.includes(betslips.book.name)
  && loopLeague()
  && (Constants.filterBetTypeApply.includes(betslips.type)
  || (betslips.bets.length == 1)
  && Constants.filterBetTypeApply.includes(betslips.bets[0].type)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
  || (betslips.bets.length == 1)
  && (betslips.bets[0].type != 'prop')
  && Constants.filterLeagueApply.includes('otherBetTypes')
  && !primaryBetTypes.includes(betslips.bets[0].proposition)))

  ){available = true;
  } else {
  available
  };
};

//available == true ? (betslips.netProfit + Constants.statsNetProfit) : Constants.statsNetProfit;


Constants.statsNetProfit = available ? (betslips.netProfit + Constants.statsNetProfit) : Constants.statsNetProfit;
Constants.statsToRisk = available ? (betslips.toRisk + Constants.statsToRisk) : Constants.statsToRisk;

(Constants.statsWins = available && betslips.outcome === "win") ? (1 + Constants.statsWins) : Constants.statsWins;
(Constants.statsLosses = available && betslips.outcome === "loss") ? (1 + Constants.statsLosses) : Constants.statsLosses;
(Constants.statsPushes = available && betslips.outcome === "push") ? (1 + Constants.statsPushes) : Constants.statsPushes;

return available;

*/
  };

const addFilter = async (item) => {
  await
Constants.filterLeague.push(item);
};

const filterTopLevelBetslipsApplied = (betslips) => {
  // console.log("abc ",betslips)
const primaryBetTypes = ['spread','total','moneyline','3-way'];
const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];


let available = false;
for (let y = 0; y < betslips.length; y++){

function loopLeague () {
    let exist = false;
    for (let x = 0; x < betslips.bets.length; x++){
        if (betslips.bets[x].event === null || betslips.bets[x].event.league === null) {
        exist;
        } else if (Constants.filterLeagueApply.includes(betslips.bets[x].event.league)) {
        exist = true;
        } else if (Constants.filterLeagueApply.includes('otherLeagues')) {
        exist = (primaryLeagues.includes(betslips.bets[x].event.league)) ? exist : true;
        } else {
        exist;
        };
    };
    return exist;
};


if (
// No filters
(Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0)


// Only Bet Type filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only Sportsbook filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterLeagueApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name))


// Only League filters
|| (Constants.filterSportsbookApply.length == 0
&& Constants.filterBetTypeApply.length == 0
&& loopLeague())


// Only Sportsbook and Bet Type filters
|| (Constants.filterLeagueApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& ((Constants.filterBetTypeApply.includes(betslips.type))
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only League and Sportsbook filters
|| (Constants.filterBetTypeApply.length == 0
&& Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague())


// Only League and Bet Type filters
|| (Constants.filterSportsbookApply.length == 0
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))


// Only League, Bet Type, and Sportsbook filters
|| (Constants.filterSportsbookApply.includes(betslips.book.name)
&& loopLeague()
&& (Constants.filterBetTypeApply.includes(betslips.type)
|| (betslips.bets.length == 1)
&& Constants.filterBetTypeApply.includes(betslips.bets[0].type)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterBetTypeApply.includes(betslips.bets[0].proposition)
|| (betslips.bets.length == 1)
&& (betslips.bets[0].type != 'prop')
&& Constants.filterLeagueApply.includes('otherBetTypes')
&& !primaryBetTypes.includes(betslips.bets[0].proposition)))

){available = true;
} else {
available
};
};

//available == true ? (betslips.netProfit + Constants.statsNetProfit) : Constants.statsNetProfit;


Constants.statsNetProfit = available ? (betslips.netProfit + Constants.statsNetProfit) : Constants.statsNetProfit;
Constants.statsToRisk = available ? (betslips.toRisk + Constants.statsToRisk) : Constants.statsToRisk;

(Constants.statsWins = available && betslips.outcome === "win") ? (1 + Constants.statsWins) : Constants.statsWins;
(Constants.statsLosses = available && betslips.outcome === "loss") ? (1 + Constants.statsLosses) : Constants.statsLosses;
(Constants.statsPushes = available && betslips.outcome === "push") ? (1 + Constants.statsPushes) : Constants.statsPushes;

return available;
};

const filterSportsbookAppliedTest = (x) => {
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
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i].netProfit;
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

const addDateFilter = async (item) => {
  await
Constants.filterDate.splice(0,1,item);

//Constants.filterDate = [item];


// Old way
//Constants.filterDate = [];
//await
//Constants.filterDate.push(item);
};

const netProfitSyntax = (x) => {
    let res = ((Math.abs(x))/100).toFixed(2);
let lastIndex = res[res.length - 1];
let secondLastIndex = res[res.length - 2];
const comp = lastIndex == 0 && secondLastIndex == 0

if(comp) {
res = parseInt(res)
};

if(x < 0) {
return "-$" + res;
} else {
return "$" + res;
};
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
  };

const filterLeagueButton = (x) => {
  return Constants.filterLeague.includes(x) ? true : false;
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

const checkLeague = () => {
  //listData?.bets[0].event.league;

listData?.bets;
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

const addBetStatusFilter = (item) => {
  
Constants.filterBetStatusApply.push(item);
};
      
      const { theme } = props;
      
      
      
      
      
      
      
      
      
      
      
      
      const [Test, setTest] = React.useState(0);
const [a, setA] = React.useState(0);
const [applyLoading, setApplyLoading] = React.useState(false);
const [cancelLoading, setCancelLoading] = React.useState(false);
const [clearloading, setClearloading] = React.useState(false);
const [dateEnd, setDateEnd] = React.useState(new Date());
const [datePickerValue, setDatePickerValue] = React.useState(new Date());
const [dateStart, setDateStart] = React.useState(new Date());
const [dummyOne, setDummyOne] = React.useState(1);
const [dummyTest, setDummyTest] = React.useState("test");
const [dummyTwo, setDummyTwo] = React.useState(1);
const [toggleAnalysisTestModal, setToggleAnalysisTestModal] = React.useState(false);
      
      

      return (
        
      <ScreenContainer  style={styles.screen} scrollable={true}>
        
      <View  style={styles.View_3b} pointerEvents={"auto"}>
        <IconButton onPress={
     () => { 
      try {
          setToggleAnalysisTestModal(true);
      } catch (err) {
        console.error(err)
      }
    }
  }  icon={"FontAwesome/photo"} size={32} /><ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterBetStatusApply",
          value: []
        });
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidYS, { backgroundColor: theme.colors.primary }]} title={"Historical Bets"} /><ButtonSolid onPress={
     () => { 
      try {
          addBetStatusFilter("pending");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidib, { backgroundColor: theme.colors.primary }]} title={"Pending Bets"} />
      <View  style={styles.ViewNU} pointerEvents={"auto"}>
        <>{ !(countFilters()) ? null : 
      <Text  style={{ color: theme.colors.error }} >
        {countFilters()}
      </Text>
     }</>
      <Text  style={[styles.TexteY, { color: theme.colors.good }]} >
        {Constants["filterLeagueApply"]}
      </Text>
    
      <Text  style={{ color: theme.colors.error }} >
        {"DISPLAY"}
      </Text>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.custom_rgb0_122_255 }} >
        {"Net Profit: "}{netProfitSyntax(Constants["statsNetProfit"])}{" "}
      </Text>
    
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

    return (<><FlatList data={filterBetslips(fetchData)} renderItem={({ item }) => { const listData = item; return (<>
      <View  style={[styles.View_1G, { backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.good }} >
        {listData?.id}
      </Text>
    
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
    
      <Text  style={[styles.TextyU, { color: theme.colors.good }]} >
        {dateStandard(listData?.event?.startTime)}
      </Text>
    
      <Text  style={[styles.TextkJ, { color: theme.colors.good }]} >
        {listData?.proposition}{" ... "}{listData?.position}{" ... "}{listData?.line}{" ... "}{listData?.oddsAmerican}
      </Text>
    </>) }}  contentContainerStyle={styles.FlatListbEContent} numColumns={1} />
      <Text  style={{ color: theme.colors.z_dummy_color }} >
        {"Net Profit: "}{netProfitSyntax(listData?.netProfit)}
      </Text>
    
      </View>
    </>) }}  contentContainerStyle={styles.FlatListz5Content} numColumns={1} /></>)
  }}
</SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET>
      <Modal  style={{ backgroundColor: theme.colors.background }} visible={toggleAnalysisTestModal} animationType={"slide"} presentationStyle={"pageSheet"} transparent={true}>
        
      <View  style={[styles.ViewHE, { backgroundColor: theme.colors.background }]} pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterLeague: "}{(Constants["filterLeague"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterLeagueApply: "}{(Constants["filterLeagueApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.Viewqi} pointerEvents={"auto"}>
        <>{ applyLoading ? null : <ButtonSolid onPress={
     () => { 
      try {
         
          const valueuSGveZmJ = true
          setApplyLoading(valueuSGveZmJ);
          const t1 = valueuSGveZmJ;
        
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
          key: "filterUnderdogApply",
          value: testFunction(Constants["filterUnderdog"])
        });
  setGlobalVariableValue({
          key: "filterUnderApply",
          value: testFunction(Constants["filterUnder"])
        });
  setGlobalVariableValue({
          key: "filterOutcomeApply",
          value: testFunction(Constants["filterOutcome"])
        });
  setToggleAnalysisTestModal(false);
 
          const valuejO72mSL8 = false
          setApplyLoading(valuejO72mSL8);
          const t2 = valuejO72mSL8;
        
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidbv, { backgroundColor: theme.colors.primary }]} title={"Apply"} /> }</><>{ !(applyLoading) ? null : <ButtonSolid  style={[styles.ButtonSolid_6a, { backgroundColor: theme.colors.primary }]} title={""} loading={true} /> }</><>{ clearloading ? null : <ButtonSolid onPress={
     () => { 
      try {
          setClearloading(true);
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
  setGlobalVariableValue({
          key: "filterUnderdog",
          value: []
        });
  setGlobalVariableValue({
          key: "filterUnder",
          value: []
        });
  setGlobalVariableValue({
          key: "filterOutcome",
          value: []
        });
  setClearloading(false);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidr6, { backgroundColor: theme.colors.primary }]} title={"Clear All"} /> }</><>{ !(clearloading) ? null : <ButtonSolid  style={[styles.ButtonSolidAG, { backgroundColor: theme.colors.primary }]} title={""} loading={true} /> }</><>{ cancelLoading ? null : <ButtonSolid onPress={
     () => { 
      try {
         
          const valuepkCzeNoY = true
          setCancelLoading(valuepkCzeNoY);
          const t1 = valuepkCzeNoY;
        
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
  setGlobalVariableValue({
          key: "filterUnderdog",
          value: testFunction(Constants["filterUnderdogApply"])
        });
  setGlobalVariableValue({
          key: "filterUnder",
          value: testFunction(Constants["filterUnderApply"])
        });
 
          const valueLaz8XOdr = false
          setCancelLoading(valueLaz8XOdr);
          const t2 = valueLaz8XOdr;
        
  setGlobalVariableValue({
          key: "filterOutcome",
          value: testFunction(Constants["filterOutcomeApply"])
        });
  setToggleAnalysisTestModal(false);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidPE, { backgroundColor: theme.colors.primary }]} title={"Cancel"} /> }</><>{ !(cancelLoading) ? null : <ButtonSolid  style={[styles.ButtonSolidKQ, { backgroundColor: theme.colors.primary }]} title={""} loading={true} /> }</>
      </View>
    
      <ScrollView   showsVerticalScrollIndicator={true} bounces={true}>
        
      <View   pointerEvents={"auto"}>
        <View   pointerEvents={"auto"} />
      <View  style={styles.Viewi8} >
        <>{ !(filterAllLeagues(Constants["filterLeague"])) ? null : 
      <Touchable  style={styles.TouchablexY} >
        
      <View  style={[styles.ViewNI, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
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
  } style={styles.TouchableQ9} >
        
      <View  style={[styles.View_1u, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
 console.log(Constants["filterLeague"])
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablelS} >
        
      <View  style={[styles.ViewOq, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
 console.log(Constants["filterLeague"])
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_51} >
        
      <View  style={[styles.View_3B, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchabledC} >
        
      <View  style={[styles.ViewQD, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_1F} >
        
      <View  style={[styles.Viewlu, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablemA} >
        
      <View  style={[styles.Viewap, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_2S} >
        
      <View  style={[styles.ViewOD, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableqQ} >
        
      <View  style={[styles.ViewaN, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableUS} >
        
      <View  style={[styles.ViewM3, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_0o} >
        
      <View  style={[styles.ViewxJ, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableWO} >
        
      <View  style={[styles.ViewwQ, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableAm} >
        
      <View  style={[styles.Viewh8, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableNK} >
        
      <View  style={[styles.ViewYc, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableDu} >
        
      <View  style={[styles.ViewBb, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_5r} >
        
      <View  style={[styles.ViewzO, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableoX} >
        
      <View  style={[styles.ViewL4, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablemW} >
        
      <View  style={[styles.Viewa8, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"Other Leagues"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterDate: "}{(Constants["filterDate"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterDateApply: "}{(Constants["filterDateApply"]).toString()}
      </Text>
    
      <View  style={styles.ViewNp} pointerEvents={"auto"}>
        <>{ !(filterAllLeagues(Constants["filterDate"])) ? null : 
      <Touchable  style={styles.Touchable_7b} >
        
      <View  style={[styles.Viewbw, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextH4, { color: theme.colors.strong }]} >
        {"All Time"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterAllLeagues(Constants["filterDate"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableTz} >
        
      <View  style={[styles.ViewcA, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textur, { color: theme.colors.background_inverse }]} >
        {"All Time"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterDateButton("sevenDays")) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchableah} >
        
      <View  style={[styles.View_7o, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_1y, { color: theme.colors.strong }]} >
        {"Last 7 Days"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterDateButton("sevenDays") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addDateFilter("sevenDays");
  setDummyTwo((dummyTwo) + 1);
 console.log(Constants["filterDate"])
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablecQ} >
        
      <View  style={[styles.ViewMr, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_8J, { color: theme.colors.background_inverse }]} >
        {"Last 7 Days"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterDateButton("twentyEightDays")) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_0Q} >
        
      <View  style={[styles.ViewbR, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextUG, { color: theme.colors.strong }]} >
        {"Last 28 Days"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterDateButton("twentyEightDays") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addDateFilter("twentyEightDays");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablehB} >
        
      <View  style={[styles.ViewDa, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextTc, { color: theme.colors.background_inverse }]} >
        {"Last 28 Days"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterDateButton("threeMonths")) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableHV} >
        
      <View  style={[styles.View_7U, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_7k, { color: theme.colors.strong }]} >
        {"Last 3 Months"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterDateButton("threeMonths") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addDateFilter("threeMonths");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablewV} >
        
      <View  style={[styles.ViewGQ, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textpv, { color: theme.colors.background_inverse }]} >
        {"Last 3 Months"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterDateButton("yearToDate")) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableLa} >
        
      <View  style={[styles.ViewpF, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_0L, { color: theme.colors.strong }]} >
        {"Year To Date"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterDateButton("yearToDate") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addDateFilter("yearToDate");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableEK} >
        
      <View  style={[styles.ViewLu, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextHK, { color: theme.colors.background_inverse }]} >
        {"Year To Date"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterDateButton("twelveMonths")) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableaI} >
        
      <View  style={[styles.ViewrT, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TexthT, { color: theme.colors.strong }]} >
        {"Last 12 Months"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterDateButton("twelveMonths") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addDateFilter("twelveMonths");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableWN} >
        
      <View  style={[styles.ViewaP, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TexthT, { color: theme.colors.background_inverse }]} >
        {"Last 12 Months"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterDateButton("sixMonths")) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterDate",
          value: []
        });
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablevc} >
        
      <View  style={[styles.ViewAB, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextRL, { color: theme.colors.strong }]} >
        {"Last 6 Months"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterDateButton("sixMonths") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addDateFilter("sixMonths");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableuK} >
        
      <View  style={[styles.View_4J, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texthc, { color: theme.colors.background_inverse }]} >
        {"Last 6 Months"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    
      <View  style={styles.ViewyV} pointerEvents={"auto"}>
        <DatePicker onDateChange={
     (newDatePickerStartValue) => { const dateStart = newDatePickerStartValue;
      try {
         
  setDateStart(dateStart);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.DatePicker_0x} label={"Start"} date={dateStart} mode={"date"} leftIconMode={"inset"} type={"solid"} /><DatePicker onDateChange={
     (newDatePickerEndValue) => { const dateEnd = newDatePickerEndValue;
      try {
         
  setDateEnd(dateEnd);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.DatePickeroI} label={"End"} date={dateEnd} mode={"date"} leftIconMode={"inset"} type={"solid"} /><View  style={{ borderRadius: 6 }} pointerEvents={"auto"} />
      </View>
    
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableKM} >
        
      <View  style={[styles.ViewnK, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextBA, { color: theme.colors.strong }]} >
        {modifySportsbookName(listData?.account?.book?.name)}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterSportsbookButton(listData?.account?.book?.name) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addSportsbookFilter(listData?.account?.book?.name);
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablevt} >
        
      <View  style={[styles.ViewS2, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextVx, { color: theme.colors.background_inverse }]} >
        {modifySportsbookName(listData?.account?.book?.name)}
      </Text>
    
      </View>
    
      </Touchable>
     }</></>) }}  contentContainerStyle={styles.FlatListyUContent} numColumns={1} />)
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
    
      <View  style={styles.ViewWv} pointerEvents={"auto"}>
        <>{ !(filterAllLeagues(Constants["filterBetType"])) ? null : 
      <Touchable  style={styles.TouchableYY} >
        
      <View  style={[styles.ViewbA, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextMZ, { color: theme.colors.strong }]} >
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
  } style={styles.TouchableHT} >
        
      <View  style={[styles.ViewcK, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextB6, { color: theme.colors.background_inverse }]} >
        {"All Bet Types"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("spread")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("spread");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableBU} >
        
      <View  style={[styles.ViewgB, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextFb, { color: theme.colors.strong }]} >
        {"Spreads"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("spread") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("spread");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableoE} >
        
      <View  style={[styles.View_0a, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextJe, { color: theme.colors.background_inverse }]} >
        {"Spreads"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("total")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("total");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchables7} >
        
      <View  style={[styles.Viewbs, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextNF, { color: theme.colors.strong }]} >
        {"Totals"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("total") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("total");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablef1} >
        
      <View  style={[styles.Viewx1, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextE2, { color: theme.colors.background_inverse }]} >
        {"Totals"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("moneyline")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("moneyline");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_9a} >
        
      <View  style={[styles.Viewsy, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextMR, { color: theme.colors.strong }]} >
        {"Moneylines"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("moneyline") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("moneyline");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablexW} >
        
      <View  style={[styles.ViewMo, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_6V, { color: theme.colors.background_inverse }]} >
        {"Moneylines"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("3-way")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("3-way");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablepk} >
        
      <View  style={[styles.Viewa9, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texti2, { color: theme.colors.strong }]} >
        {"3-ways"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("3-way") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("3-way");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_3d} >
        
      <View  style={[styles.ViewGF, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textaj, { color: theme.colors.background_inverse }]} >
        {"3-ways"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("prop")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("prop");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablelt} >
        
      <View  style={[styles.Viewi2, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_2f, { color: theme.colors.strong }]} >
        {"Props"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("prop") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("prop");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_0U} >
        
      <View  style={[styles.ViewEq, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textp1, { color: theme.colors.background_inverse }]} >
        {"Props"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("parlay")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("parlay");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablegT} >
        
      <View  style={[styles.Viewyf, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextkS, { color: theme.colors.strong }]} >
        {"Parlays"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("parlay") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("parlay");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_1Y} >
        
      <View  style={[styles.View_4q, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textby, { color: theme.colors.background_inverse }]} >
        {"Parlays"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterBetTypeButton("teaser")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeBetTypeFilter("teaser");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableLm} >
        
      <View  style={[styles.Viewi8, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextZv, { color: theme.colors.strong }]} >
        {"Teasers"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterBetTypeButton("teaser") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetTypeFilter("teaser");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_84} >
        
      <View  style={[styles.ViewlU, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_3z, { color: theme.colors.background_inverse }]} >
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
    
      <View  style={styles.ViewBo} pointerEvents={"auto"}>
        
      <Touchable  style={styles.TouchableWx} >
        
      <View  style={[styles.ViewmR, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_03, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterUnderdog",
          value: []
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableSE} >
        
      <View  style={[styles.View_36, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextOU, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchableie} >
        
      <View  style={[styles.ViewWT, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextH4, { color: theme.colors.strong }]} >
        {"Favorites"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await addUnderdogFilter("favorite");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableRv} >
        
      <View  style={[styles.ViewNV, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextfX, { color: theme.colors.background_inverse }]} >
        {"Favorites"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablebD} >
        
      <View  style={[styles.ViewFp, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textfu, { color: theme.colors.strong }]} >
        {"Underdogs"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await addUnderdogFilter("underdog");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablehn} >
        
      <View  style={[styles.ViewGl, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textfu, { color: theme.colors.background_inverse }]} >
        {"Underdogs"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterUnder: "}{(Constants["filterUnder"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterUnderApply: "}{(Constants["filterUnderApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.ViewE0} pointerEvents={"auto"}>
        
      <Touchable  style={styles.TouchableDS} >
        
      <View  style={[styles.ViewZx, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextFe, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterUnder",
          value: []
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableRG} >
        
      <View  style={[styles.ViewWg, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textpz, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableWb} >
        
      <View  style={[styles.ViewjX, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextfJ, { color: theme.colors.strong }]} >
        {"Overs"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await addUnderFilter("Over");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableKy} >
        
      <View  style={[styles.View_7l, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextrJ, { color: theme.colors.background_inverse }]} >
        {"Overs Only"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablenK} >
        
      <View  style={[styles.ViewDc, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textbt, { color: theme.colors.strong }]} >
        {"Unders"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await addUnderFilter("Under");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchabletW} >
        
      <View  style={[styles.ViewpE, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextIl, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      <View   pointerEvents={"auto"}>
        
      <View   pointerEvents={"auto"}>
        
      <Text  style={{ color: theme.colors.error }} >
        {"filterOutcome: "}{(Constants["filterOutcome"]).toString()}
      </Text>
    
      <Text  style={{ color: theme.colors.good }} >
        {"filterOutcomeApply: "}{(Constants["filterOutcomeApply"]).toString()}
      </Text>
    
      </View>
    
      <View  style={styles.Viewax} pointerEvents={"auto"}>
        
      <Touchable  style={styles.TouchableTd} >
        
      <View  style={[styles.ViewjF, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextwQ, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "filterOutcome",
          value: []
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableOj} >
        
      <View  style={[styles.View_1J, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextVn, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await removeOutcomeFilter("win");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableoP} >
        
      <View  style={[styles.Viewv7, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextEE, { color: theme.colors.strong }]} >
        {"Wins"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await addOutcomeFilter("win");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableUw} >
        
      <View  style={[styles.ViewCL, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextFp, { color: theme.colors.background_inverse }]} >
        {"Wins"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await removeOutcomeFilter("loss");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablexE} >
        
      <View  style={[styles.View_3h, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextOr, { color: theme.colors.strong }]} >
        {"Losses"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await addOutcomeFilter("loss");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableSb} >
        
      <View  style={[styles.ViewkT, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextJV, { color: theme.colors.background_inverse }]} >
        {"Losses"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await removeOutcomeFilter("push");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableOb} >
        
      <View  style={[styles.Viewsj, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextRi, { color: theme.colors.strong }]} >
        {"Pushes"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable onPress={
    async () => { 
      try {
         await addOutcomeFilter("push");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_01} >
        
      <View  style={[styles.ViewkR, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextZ1, { color: theme.colors.background_inverse }]} >
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
    
      <View  style={styles.View_39} pointerEvents={"auto"}>
        
      <Touchable  style={styles.Touchable_6r} >
        
      <View  style={[styles.Viewy2, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textcw, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchableyz} >
        
      <View  style={[styles.ViewrV, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textbe, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableXX} >
        
      <View  style={[styles.ViewiM, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextW3, { color: theme.colors.strong }]} >
        {"Bonuses Only"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableH8} >
        
      <View  style={[styles.ViewRL, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextAG, { color: theme.colors.background_inverse }]} >
        {"Bonuses Only"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableYn} >
        
      <View  style={[styles.Viewg1, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TexthQ, { color: theme.colors.strong }]} >
        {"No Bonuses"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablehK} >
        
      <View  style={[styles.Viewpa, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textzv, { color: theme.colors.background_inverse }]} >
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
    
      <View  style={styles.ViewY3} pointerEvents={"auto"}>
        
      <Touchable  style={styles.TouchableaY} >
        
      <View  style={[styles.Viewyq, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextVU, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchablegk} >
        
      <View  style={[styles.ViewsX, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textmu, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchableIf} >
        
      <View  style={[styles.Viewri, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textlv, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.TouchablecR} >
        
      <View  style={[styles.ViewGW, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_15, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchablele} >
        
      <View  style={[styles.ViewBp, { borderRadius: 6, backgroundColor: theme.colors.primary }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextVV, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
    
      <Touchable  style={styles.Touchable_2y} >
        
      <View  style={[styles.ViewLg, { borderRadius: 6, backgroundColor: theme.colors.divider }]} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_3U, { color: theme.colors.background_inverse }]} >
        {"All"}
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
    
      <View  style={styles.ViewBi} pointerEvents={"auto"}>
        <Utils.CustomCodeErrorBoundary><CustomCode.MultiTeamSelect/></Utils.CustomCodeErrorBoundary>
      </View>
    
      </View>
    
      </View>
    
      </ScrollView>
    
      </View>
    
      </Modal>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ ButtonSolidYS: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, ButtonSolidib: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, TexteY: {
marginLeft: 10,
}, ViewNU: {
flexDirection: 'row',
}, View_3b: {
flexDirection: 'row',
flexWrap: 'wrap',
}, View_7f: {
height: 100,
marginLeft: '4%',
marginRight: '4%',
}, ViewIm: {
height: 100,
marginLeft: '4%',
marginRight: '4%',
}, ViewYd: {
height: 100,
marginLeft: '4%',
marginRight: '4%',
}, FlatList_85Content: {
flex: 1,
}, TextyU: {
fontSize: 10,
}, TextkJ: {
fontSize: 10,
}, FlatListbEContent: {
flex: 1,
}, View_1G: {
marginBottom: 12,
}, ViewnG: {
marginTop: 6,
}, FlatListz5Content: {
flex: 1,
}, FetchEM: {
minHeight: 40,
}, ButtonSolidbv: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolid_6a: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidr6: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidAG: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidPE: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, ButtonSolidKQ: {
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginRight: 8,
width: 95,
}, Viewqi: {
flexDirection: 'row',
}, ViewNI: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, TouchablexY: {
marginTop: 8,
}, View_1u: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, TouchableQ9: {
marginTop: 8,
}, ViewOq: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, TouchablelS: {
marginTop: 8,
}, View_3B: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, Touchable_51: {
marginTop: 8,
}, ViewQD: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, TouchabledC: {
marginTop: 8,
}, Viewlu: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, Touchable_1F: {
marginTop: 8,
}, Viewap: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablemA: {
marginTop: 8,
}, ViewOD: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_2S: {
marginTop: 8,
}, ViewaN: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableqQ: {
marginTop: 8,
}, ViewM3: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableUS: {
marginTop: 8,
}, ViewxJ: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_0o: {
marginTop: 8,
}, ViewwQ: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableWO: {
marginTop: 8,
}, Viewh8: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableAm: {
marginTop: 8,
}, ViewYc: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableNK: {
marginTop: 8,
}, ViewBb: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableDu: {
marginTop: 8,
}, ViewzO: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_5r: {
marginTop: 8,
}, ViewL4: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableoX: {
marginTop: 8,
}, Viewa8: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablemW: {
marginTop: 8,
}, Viewi8: {
flexWrap: 'wrap',
flexDirection: 'row',
marginTop: 6,
marginBottom: 20,
}, TextH4: {
fontFamily: 'System', fontWeight: '700',
}, Viewbw: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchable_7b: {
marginTop: 8,
}, Textur: {
fontFamily: 'System', fontWeight: '700',
}, ViewcA: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableTz: {
marginTop: 8,
}, Text_1y: {
fontFamily: 'System', fontWeight: '700',
}, View_7o: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchableah: {
marginTop: 8,
}, Text_8J: {
fontFamily: 'System', fontWeight: '700',
}, ViewMr: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchablecQ: {
marginTop: 8,
}, TextUG: {
fontFamily: 'System', fontWeight: '700',
}, ViewbR: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchable_0Q: {
marginTop: 8,
}, TextTc: {
fontFamily: 'System', fontWeight: '700',
}, ViewDa: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchablehB: {
marginTop: 8,
}, Text_7k: {
fontFamily: 'System', fontWeight: '700',
}, View_7U: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableHV: {
marginTop: 8,
}, Textpv: {
fontFamily: 'System', fontWeight: '700',
}, ViewGQ: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchablewV: {
marginTop: 8,
}, Text_0L: {
fontFamily: 'System', fontWeight: '700',
}, ViewpF: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableLa: {
marginTop: 8,
}, TextHK: {
fontFamily: 'System', fontWeight: '700',
}, ViewLu: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableEK: {
marginTop: 8,
}, TexthT: {
fontFamily: 'System', fontWeight: '700',
}, ViewrT: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableaI: {
marginTop: 8,
}, TexthT: {
fontFamily: 'System', fontWeight: '700',
}, ViewaP: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableWN: {
marginTop: 8,
}, TextRL: {
fontFamily: 'System', fontWeight: '700',
}, ViewAB: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchablevc: {
marginTop: 8,
}, Texthc: {
fontFamily: 'System', fontWeight: '700',
}, View_4J: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableuK: {
marginTop: 8,
}, ViewNp: {
marginBottom: 18,
flexDirection: 'row',
flexWrap: 'wrap',
}, DatePicker_0x: {
opacity: 1,
marginRight: 8,
width: 175,
}, DatePickeroI: {
width: 175,
}, ViewyV: {
flexDirection: 'row',
flexWrap: 'wrap',
}, TextBA: {
fontFamily: 'System', fontWeight: '700',
}, ViewnK: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableKM: {
marginTop: 8,
}, TextVx: {
fontFamily: 'System', fontWeight: '700',
}, ViewS2: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablevt: {
marginTop: 8,
}, FlatListyUContent: {
flexWrap: 'wrap',
flexDirection: 'row',
}, FetchPJ: {
minHeight: 40,
}, TextMZ: {
fontFamily: 'System', fontWeight: '700',
}, ViewbA: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableYY: {
marginTop: 8,
}, TextB6: {
fontFamily: 'System', fontWeight: '700',
}, ViewcK: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableHT: {
marginTop: 8,
}, TextFb: {
fontFamily: 'System', fontWeight: '700',
}, ViewgB: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableBU: {
marginTop: 8,
}, TextJe: {
fontFamily: 'System', fontWeight: '700',
}, View_0a: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableoE: {
marginTop: 8,
}, TextNF: {
fontFamily: 'System', fontWeight: '700',
}, Viewbs: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchables7: {
marginTop: 8,
}, TextE2: {
fontFamily: 'System', fontWeight: '700',
}, Viewx1: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablef1: {
marginTop: 8,
}, TextMR: {
fontFamily: 'System', fontWeight: '700',
}, Viewsy: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_9a: {
marginTop: 8,
}, Text_6V: {
fontFamily: 'System', fontWeight: '700',
}, ViewMo: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablexW: {
marginTop: 8,
}, Texti2: {
fontFamily: 'System', fontWeight: '700',
}, Viewa9: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablepk: {
marginTop: 8,
}, Textaj: {
fontFamily: 'System', fontWeight: '700',
}, ViewGF: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_3d: {
marginTop: 8,
}, Text_2f: {
fontFamily: 'System', fontWeight: '700',
}, Viewi2: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablelt: {
marginTop: 8,
}, Textp1: {
fontFamily: 'System', fontWeight: '700',
}, ViewEq: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_0U: {
marginTop: 8,
}, TextkS: {
fontFamily: 'System', fontWeight: '700',
}, Viewyf: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablegT: {
marginTop: 8,
}, Textby: {
fontFamily: 'System', fontWeight: '700',
}, View_4q: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_1Y: {
marginTop: 8,
}, TextZv: {
fontFamily: 'System', fontWeight: '700',
}, Viewi8: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableLm: {
marginTop: 8,
}, Text_3z: {
fontFamily: 'System', fontWeight: '700',
}, ViewlU: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_84: {
marginTop: 8,
}, ViewWv: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, Text_03: {
fontFamily: 'System', fontWeight: '700',
}, ViewmR: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableWx: {
marginTop: 8,
}, TextOU: {
fontFamily: 'System', fontWeight: '700',
}, View_36: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableSE: {
marginTop: 8,
}, TextH4: {
fontFamily: 'System', fontWeight: '700',
}, ViewWT: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchableie: {
marginTop: 8,
}, TextfX: {
fontFamily: 'System', fontWeight: '700',
}, ViewNV: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableRv: {
marginTop: 8,
}, Textfu: {
fontFamily: 'System', fontWeight: '700',
}, ViewFp: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablebD: {
marginTop: 8,
}, Textfu: {
fontFamily: 'System', fontWeight: '700',
}, ViewGl: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchablehn: {
marginTop: 8,
}, ViewBo: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, TextFe: {
fontFamily: 'System', fontWeight: '700',
}, ViewZx: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableDS: {
marginTop: 8,
}, Textpz: {
fontFamily: 'System', fontWeight: '700',
}, ViewWg: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableRG: {
marginTop: 8,
}, TextfJ: {
fontFamily: 'System', fontWeight: '700',
}, ViewjX: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableWb: {
marginTop: 8,
}, TextrJ: {
fontFamily: 'System', fontWeight: '700',
}, View_7l: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableKy: {
marginTop: 8,
}, Textbt: {
fontFamily: 'System', fontWeight: '700',
}, ViewDc: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablenK: {
marginTop: 8,
}, TextIl: {
fontFamily: 'System', fontWeight: '700',
}, ViewpE: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchabletW: {
marginTop: 8,
}, ViewE0: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, TextwQ: {
fontFamily: 'System', fontWeight: '700',
}, ViewjF: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableTd: {
marginTop: 8,
}, TextVn: {
fontFamily: 'System', fontWeight: '700',
}, View_1J: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableOj: {
marginTop: 8,
}, TextEE: {
fontFamily: 'System', fontWeight: '700',
}, Viewv7: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableoP: {
marginTop: 8,
}, TextFp: {
fontFamily: 'System', fontWeight: '700',
}, ViewCL: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableUw: {
marginTop: 8,
}, TextOr: {
fontFamily: 'System', fontWeight: '700',
}, View_3h: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablexE: {
marginTop: 8,
}, TextJV: {
fontFamily: 'System', fontWeight: '700',
}, ViewkT: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableSb: {
marginTop: 8,
}, TextRi: {
fontFamily: 'System', fontWeight: '700',
}, Viewsj: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableOb: {
marginTop: 8,
}, TextZ1: {
fontFamily: 'System', fontWeight: '700',
}, ViewkR: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_01: {
marginTop: 8,
}, Viewax: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, Textcw: {
fontFamily: 'System', fontWeight: '700',
}, Viewy2: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_6r: {
marginTop: 8,
}, Textbe: {
fontFamily: 'System', fontWeight: '700',
}, ViewrV: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchableyz: {
marginTop: 8,
}, TextW3: {
fontFamily: 'System', fontWeight: '700',
}, ViewiM: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableXX: {
marginTop: 8,
}, TextAG: {
fontFamily: 'System', fontWeight: '700',
}, ViewRL: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableH8: {
marginTop: 8,
}, TexthQ: {
fontFamily: 'System', fontWeight: '700',
}, Viewg1: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableYn: {
marginTop: 8,
}, Textzv: {
fontFamily: 'System', fontWeight: '700',
}, Viewpa: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablehK: {
marginTop: 8,
}, View_39: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, TextVU: {
fontFamily: 'System', fontWeight: '700',
}, Viewyq: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableaY: {
marginTop: 8,
}, Textmu: {
fontFamily: 'System', fontWeight: '700',
}, ViewsX: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchablegk: {
marginTop: 8,
}, Textlv: {
fontFamily: 'System', fontWeight: '700',
}, Viewri: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchableIf: {
marginTop: 8,
}, Text_15: {
fontFamily: 'System', fontWeight: '700',
}, ViewGW: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, TouchablecR: {
marginTop: 8,
}, TextVV: {
fontFamily: 'System', fontWeight: '700',
}, ViewBp: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchablele: {
marginTop: 8,
}, Text_3U: {
fontFamily: 'System', fontWeight: '700',
}, ViewLg: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingLeft: 16,
paddingRight: 16,
}, Touchable_2y: {
marginTop: 8,
}, ViewY3: {
marginTop: 6,
marginBottom: 20,
flexDirection: 'row',
flexWrap: 'wrap',
}, ViewBi: {
marginTop: 6,
marginBottom: 400,
paddingLeft: '4%',
paddingRight: '4%',
}, ViewHE: {
width: '100%',
height: '100%',
opacity: 1,
}, screen: {
marginTop: 30,
marginBottom: 30,
} });


export default withTheme(MyBetsTestScreen);