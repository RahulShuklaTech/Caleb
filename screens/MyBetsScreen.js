import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import { ButtonOutline, DatePicker, Divider, Icon, IconButton, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const MyBetsScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      const setGlobalVariableValue = GlobalVariables.useSetValue();

      const filterDateButton = (x) => {
  return Constants.filterDate.includes(x) ? true : false;
};

const compareFoxBet = (x) => {
  return x === "FoxBet";
};

const pendingBetsFound = (topLevel) => {
    let counter = 0;
for (const input of topLevel) {
if (input.outcome === "pending") counter += 1;
}
return counter > 0 ? false : true;
  };

const compareCaesars = (x) => {
  return x === "Caesars";

};

const compareBarstool = (x) => {
  return x === "Barstool";
};

const typeTeaserCompare = (type) => {
  return type === "teaser";
};

const toUpperCase = (x) => {
  return x.toUpperCase();
};

const gradedBetsFound = (topLevel) => {
    let counter = 0;
for (const input of topLevel) {
if (input.outcome != null) counter += 1;
}
return counter > 0 ? false : true;
  };

const checkEarlyAccessCode = (x) => {
  return x !== "V7XyG" ? true : false;
};

const propDetailsMetricSpecial = (metricSpecial) => {
  return metricSpecial == null ? "" : metricSpecial.charAt(0).toUpperCase() + metricSpecial.slice(1) + " ";
};

const winOutcomeCompare = (outcome) => {
  return outcome === "win" || outcome === "halfwin";
};

const countFilters = () => {
  const length =
Constants.filterLeague.length +
Constants.filterSportsbook.length +
Constants.filterDate.length +
Constants.filterBetType.length +
Constants.filterUnderdog.length +
Constants.filterUnder.length +
Constants.filterOutcome.length;
// Simply add all other filters arrays onto here to create the count
return length != 0 ? " (" + length + ")" : "";
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
} else {
return false;
};

/*
} else if ((x.bets.length == 1) && (x.bets[0].type != 'prop') && Constants.filterLeagueApply.includes('otherBetTypes')) {
  return (primaryBetTypes.includes(x.bets[0].proposition)) ? false : true;
*/
  };

const addFilter = async (item) => {
  await
Constants.filterLeague.push(item);
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

const filterUnderdogButton = (x) => {
  return Constants.filterUnderdog.includes(x) ? true : false;
};

const getProposition = (x) => {
  return x[0].proposition;
};

const compareFubo = (x) => {
  return x === "Fubo";
};

const positionSuffix = (position) => {
  return position == null ? "" : position + " ";
};

const combinedFilters = (x) => {
  /*let array =
[...Constants.filterSportsbookApply,
...Constants.filterDateApply,
...Constants.filterLeagueApply,
...Constants.filterBetTypeApply,
...Constants.filterUnderdogApply,
...Constants.filterUnderApply,
...Constants.filterOutcomeApply]

array.length > 0 ? Constants.combinedFiltersArray = array.join(" ") : Constants.combinedFiltersArray = "None";


Constants.combinedFiltersArray.push(...)

let firstArray = [1, 2, 3, 'Shinchan']
let secondArray = ['Nohara', 4, 5, 6]
let thirdArray = [7, 8, 9, 'Himawari']

let combinedArray = []


Constants.combinedFiltersArray = [];

Constants.combinedFiltersArray.push(
...Constants.filterSportsbookApply,
...Constants.filterDateApply,
...Constants.filterLeagueApply,
...Constants.filterBetTypeApply,
...Constants.filterUnderdogApply,
...Constants.filterUnderApply,
...Constants.filterOutcomeApply);
*/

//return x.toString() + ", ";

return x.length !== 0 ? x.join(', ') + ", " : "";
};

const countBets = (x) => {
  return x.length !== 0;
};

const getEventName = (x) => {
  return x[0].event == null ? "" : x[0].event.name;
};

const myFunctionName = () => {
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
  };

const comparePointsBet = (x) => {
  return x === "PointsBet";
};

const compareBetMGM = (x) => {
  return x === "BetMGM";
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
};

const spacingSuffix = (x) => {
  return x == null ? "" : x + " ";
};

const cashoutOutcomeCompare = (outcome) => {
  return outcome === "cashout";
};

const getLine = (x) => {
  return x[0].line;
};

const compareWynnBet = (x) => {
  return x === "WynnBet";
};

const getLive = (x) => {
  return x[0].live;
};

const addUnderFilter = async (item) => {
  await
Constants.filterUnder.splice(0,1,item);
};

const arrayChange = (array) => {
  return [...array];
};

const addUnderdogFilter = async (item) => {
  await
Constants.filterUnderdog.splice(0,1,item);
};

const typeSingleCompare = (type) => {
  return type === "single";
};

const betStatusHistorical = (x) => {
  return !x.includes("pending");
};

const filterLeagueApplied = (bets) => {
    const primaryLeagues = ['NFL','NCAAF','NBA','NCAAMB','MLB','NHL','UFC',null];

if (Constants.filterLeagueApply.length == 0) {
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


// Three alternatives exist here.
// The first is if All Leagues is selected, it should just call everything true.  (COMPLETE)
// The second is if otherLeagues is selected, it should pull anything that does not equal NFL, NCAAF, NCAAB, etc.
// The third is if the league is empty/null. In this case, it should not pull the bets when otherLeagues is selected
  };

const filterBetsFunction = (x) => {
  let data = Constants.filterLeague

data = data.filter(function(item){
return item.state == ""
})

//Constants.oddsDisplayed[1] = x;
//return [Constants.oddsDisplayed[0],x];
};

const futureBetExists = (future) => {
  return future == true ? "(Future) " : "";
};

const abbrTeamName = (x) => {
     /// THIS DOES NOT WORK RIGHT NOW
// If contains doesn't contain @, then keep x (the name of the event) the same. If it DOES contain @, break it apart
// removing all spaces, changes each team to the proper abbreviation, and then put it back together.

const teamsTable = {
 // NFL
 "Arizona Cardinals": "ARI",
 "Atlanta Falcons": "ATL",
 "Baltimore Ravens": "BAL",
 "Buffalo Bills": "BUF",
 "Carolina Panthers": "CAR",
 "Chicago Bears": "CHI",
 "Cincinnati Bengals": "CIN",
 "Cleveland Browns": "CLE",
 "Dallas Cowboys": "DAL",
 "Denver Broncos": "DEN",
 "Detroit Lions": "DET",
 "Green Bay Packers": "GB",
 "Houston Texans": "HOU",
 "Indianapolis Colts": "IND",
 "Jacksonville Jaguars": "JAC",
 "Kansas City Chiefs": "KC",
 "Las Vegas Raiders": "LV",
 "Los Angeles Chargers": "LAC",
 "Los Angeles Rams": "LAR",
 "Miami Dolphins": "MIA",
 "Minnesota Vikings": "MIN",
 "New England Patriots": "NE",
 "New Orleans Saints": "NO",
 "New York Giants": "NYG",
 "New York Jets": "NYJ",
 "Philadelphia Eagles": "PHI",
 "Pittsburgh Steelers": "PIT",
 "San Francisco 49ers": "SF",
 "Seattle Seahawks": "SEA",
 "Tampa Bay Buccaneers": "TB",
 "Tennessee Titans": "TEN",
 "Washington Football Team": "WAS",
 // NBA
 "Atlanta Hawks": "ATL",
 "Brooklyn Nets": "BKN",
 "Boston Celtics": "BOS",
 "Charlotte Hornets": "CHA",
 "Chicago Bulls": "CHI",
 "Cleveland Cavaliers": "CLE",
 "Dallas Mavericks": "DAL",
 "Denver Nuggets": "DEN",
 "Detroit Pistons": "DET",
 "Golden State Warriors": "GSW",
 "Houston Rockets": "HOU",
 "Indiana Pacers": "IND",
 "Los Angeles Clippers": "LAC",
 "Los Angeles Lakers": "LAL",
 "Memphis Grizzlies": "MEM",
 "Miami Heat": "MIA",
 "Milwaukee Bucks": "MIL",
 "Minnesota Timberwolves": "MIN",
 "New Orleans Pelicans": "NOP",
 "New York Knicks": "NYK",
 "Oklahoma City Thunder": "OKC",
 "Orlando Magic": "ORL",
 "Philadelphia 76ers": "PHI",
 "Phoenix Suns": "PHX",
 "Portland Trail Blazers": "POR",
 "Sacramento Kings": "SAC",
 "San Antonio Spurs": "SAS",
 "Toronto Raptors": "TOR",
 "Utah Jazz": "UTA",
 "Washington Wizards": "WAS",
 // NCAA
 "Boston College": "BC",
 "Clemson": "CLEM",
 "Duke": "DUKE",
 "Florida State": "FSU",
 "Georgia Tech": "GT",
 "Louisville": "LOU",
 "Miami (FL)": "MIA",
 "NC State": "NCST",
 "Pittsburgh": "PITT",
 "Syracuse": "SYR",
 "North Carolina": "UNC",
 "Virginia": "UVA",
 "Virginia Tech": "VT",
 "Wake Forest": "WAKE",
 "Illinois": "ILL",
 "Indiana": "IND",
 "Iowa": "IOWA",
 "Michigan": "MICH",
 "Michigan State": "MSU",
 "Minnesota": "MINN",
 "Nebraska": "NEB",
 "Northwestern": "NW",
 "Ohio State": "OSU",
 "Penn State": "PSU",
 "Purdue": "PUR",
 "Rutgers": "RUTG",
 "Maryland": "UMD",
 "Wisconsin": "WIS",
 "Baylor": "BAY",
 "Iowa State": "ISU",
 "Kansas": "KU",
 "Kansas State": "KSU",
 "Oklahoma": "OKLA",
 "Oklahoma State": "OKST",
 "TCU": "TCU",
 "Texas": "TEX",
 "Texas Tech": "TTU",
 "West Virginia": "WVU",
 "Arizona": "ARIZ",
 "Arizona State": "ASU",
 "Cal": "CAL",
 "Colorado": "COLO",
 "Oregon": "ORE",
 "Oregon State": "ORST",
 "Stanford": "STAN",
 "UCLA": "UCLA",
 "USC": "USC",
 "Utah": "UTAH",
 "Washington": "WASH",
 "Washington State": "WSU",
 "Alabama": "BAMA",
 "Arkansas": "ARK",
 "Auburn": "AUB",
 "Florida": "FLA",
 "Georgia": "UGA",
 "Kentucky": "UK",
 "LSU": "LSU",
 "Ole Miss": "MISS",
 "Mississippi State": "MSST",
 "Missouri": "MIZZ",
 "South Carolina": "SCAR",
 "Tennessee": "TENN",
 "Texas A&M": "TAMU",
 "Vanderbilt": "VAN",
 "BYU": "BYU",
 "Army": "ARMY",
 "UMass": "UMASS",
 "Notre Dame": "ND",
 "Cincinnati": "CIN",
 "UConn": "CONN",
 "ECU": "ECU",
 "Houston": "HOU",
 "Memphis": "MEM",
 "Navy": "NAVY",
 "SMU": "SMU",
 "South Florida": "USF",
 "Temple": "TEM",
 "Tulane": "TULN",
 "Tulsa": "TLSA",
 "UCF": "UCF",
 "Charlotte": "CHAR",
 "FAU": "FAU",
 "FIU": "FIU",
 "Louisiana Tech": "LT",
 "Marshall": "MRSH",
 "Middle Tennessee": "MTSU",
 "North Texas": "UNT",
 "Old Dominion": "ODU",
 "Rice": "RICE",
 "Southern Miss": "USM",
 "UTEP": "UTEP",
 "UTSA": "UTSA",
 "WKU": "WKU",
 "Akron": "AKR",
 "Ball State": "BALL",
 "Bowling Green": "BGSU",
 "Buffalo": "BUFF",
 "Central Michigan": "CMU",
 "Eastern Michigan": "EMU",
 "Kent State": "KENT",
 "Miami (OH)": "M-OH",
 "Northern Illinois": "NIU",
 "Ohio": "OHIO",
 "Toledo": "TOL",
 "Western Michigan": "WMU",
 "Air Force": "AFA",
 "Boise State": "BSU",
 "Colorado State": "CSU",
 "Fresno State": "FRES",
 "Hawaii": "HAW",
 "Nevada": "NEV",
 "New Mexico": "UNM",
 "San Diego State": "SDSU",
 "San José State": "SJSU",
 "UNLV": "UNLV",
 "Utah State": "USU",
 "Wyoming": "WYO",
 "Appalachian State": "APP",
 "Arkansas State": "ARST",
 "Georgia Southern": "GASO",
 "Georgia State": "GSU",
 "Idaho": "IDHO",
 "Louisiana Lafayette": "ULL",
 "Louisiana Monroe": "ULM",
 "New Mexico State": "NMSU",
 "South Alabama": "USA",
 "Texas State": "TXST",
 "Troy": "TROY",
 "Cal Poly": "CP",
 "Eastern Washington": "EWU",
 "Idaho State": "IDST",
 "Montana": "MONT",
 "Montana State": "MTST",
 "North Dakota": "UND",
 "Northern Arizona": "NAU",
 "Northern Colorado": "UNCO",
 "Portland State": "PRST",
 "Sacramento State": "SAC",
 "Southern Utah": "SUU",
 "UC Davis": "UCD",
 "Weber State": "WEB",
 "Charleston Southern": "CHSO",
 "Coastal Carolina": "CCAR",
 "Gardner-Webb": "WEBB",
 "Kennesaw State": "KENN",
 "Liberty": "LIB",
 "Monmouth": "MONM",
 "Presbyterian": "PRE",
 "Albany": "ALBY",
 "Delaware": "DEL",
 "Elon": "ELON",
 "James Madison": "JMU",
 "Maine": "MNE",
 "New Hampshire": "UNH",
 "Rhode Island": "URI",
 "Richmond": "RICH",
 "Stony Brook": "STON",
 "Towson": "TOWS",
 "Villanova": "NOVA",
 "William & Mary": "W&M",
 "Brown": "BRWN",
 "Cornell": "COR",
 "Columbia": "CLMB",
 "Dartmouth": "DART",
 "Harvard": "HARV",
 "UPenn": "PENN",
 "Princeton": "PRIN",
 "Yale": "YALE",
 "Bethune-Cookman": "COOK",
 "Delaware State": "DSU",
 "Florida A&M": "FAMU",
 "Hampton": "HAMP",
 "Howard": "HOW",
 "Morgan State": "MORG",
 "Norfolk State": "NORF",
 "North Carolina A&T": "NCAT",
 "NC Central": "NCCU",
 "Savannah State": "SAV",
 "South Carolina State": "SCST",
 "Illinois State": "ILST",
 "Indiana State": "INST",
 "Missouri State": "MOST",
 "North Dakota State": "NDSU",
 "Northern Iowa": "UNI",
 "South Dakota": "SDAK",
 "South Dakota State": "SDSU",
 "Southern Illinois": "SIU",
 "Western Illinois": "WIU",
 "Youngstown State": "YSU",
 "Bryant": "BRY",
 "Central Connecticut": "CCSU",
 "Duquesne": "DUQ",
 "Robert Morris (PA)": "RMU",
 "Sacred Heart": "SHU",
 "St. Francis (PA)": "SFU",
 "Wagner": "WAG",
 "Austin Peay": "PEAY",
 "Eastern Illinois": "EIU",
 "Eastern Kentucky": "EKY",
 "Jacksonville State": "JVST",
 "Murray State": "MURR",
 "Southeast Missouri": "SEMO",
 "Tennessee State": "TNST",
 "Tennessee Tech": "TNTC",
 "Tennessee-Martin": "UTM",
 "Bucknell": "BUCK",
 "Colgate": "COLG",
 "Fordham": "FOR",
 "Georgetown": "GTWN",
 "Holy Cross": "HC",
 "Lafayette": "LAF",
 "Lehigh": "LEH",
 "Butler": "BUT",
 "Campbell": "CAMP",
 "Davidson": "DAV",
 "Dayton": "DAY",
 "Drake": "DRKE",
 "Jacksonville": "JAC",
 "Marist": "MRST",
 "Morehead State": "MORE",
 "San Diego": "USD",
 "Stetson": "STET",
 "Valparaiso": "VALP",
 "Chattanooga": "CHAT",
 "ETSU": "ETSU",
 "Furman": "FUR",
 "Mercer": "MER",
 "Samford": "SAM",
 "The Citadel": "CIT",
 "VMI": "VMI",
 "Western Carolina": "WCU",
 "Wofford": "WOF",
 "Abilene Christian": "ACU",
 "Central Arkansas": "UCA",
 "Houston Baptist": "HBU",
 "Incarnate Word": "IW",
 "Lamar": "LAM",
 "McNeese State": "MCNS",
 "Nicholls State": "NICH",
 "Northwestern State": "NWST",
 "Sam Houston State": "SHSU",
 "Southeastern Louisiana": "SELA",
 "Stephen F. Austin": "SFA",
 "Alabama A&M": "AAMU",
 "Alabama State": "ALST",
 "Alcorn State": "ALCN",
 "Arkansas-Pine Bluff": "ARPB",
 "Grambling State": "GRAM",
 "Jackson State": "JKST",
 "Mississippi Valley State": "MVSU",
 "Prairie View A&M": "PV",
 "Southern University": "SOU",
 "Texas Southern": "TXSO",
 // MLB
 "Arizona Diamondbacks": "ARI",
 "Atlanta Braves": "ATL",
 "Baltimore Orioles": "BAL",
 "Boston Red Sox": "BOS",
 "Chicago White Sox": "CWS",
 "Chicago Cubs": "CHC",
 "Cinncinnati Reds": "CIN",
 "Cleveland Indians": "CLE",
 "Colorado Rockies": "COL",
 "Detroit Tigers": "DET",
 "Houston Astros": "HOU",
 "Kansas City Royals": "KC",
 "Los Angeles Angels": "ANA",
 "Los Angeles Dodgers": "LA",
 "Miami Marlins": "MIA",
 "Milwaukee Brewers": "MIL",
 "Minnesota Twins": "MIN",
 "New York Mets": "NYM",
 "New York Yankees": "NYY",
 "Oakland Athletics": "OAK",
 "Philadelphia Phillies": "PHI",
 "Pittsburgh Pirates": "PIT",
 "San Diego Padres": "SD",
 "San Francisco Giants": "SF",
 "Seattle Mariners": "SEA",
 "St Louis Cardinals": "STL",
 "Tampa Bay Rays": "TB",
 "Texas Rangers": "TEX",
 "Toronto Blue Jays": "TOR",
 "Washington Nationals": "WAS",
 // NHL
 "Anaheim Ducks": "ANA",
 "Buffalo Sabres": "BUF",
 "Boston Bruins": "BOS",
 "Arizona Coyotes": "ARI",
 "Colorado Avalanche": "COL",
 "Chicago Blackhawks": "CHI",
 "Dallas Stars": "DAL",
 "Carolina Hurricanes": "CAR",
 "Edmonton Oilers": "EDM",
 "Minnesota Wild": "MIN",
 "Detroit Red Wings": "DET",
 "Columbus Blue Jackets": "CBJ",
 "Los Angeles Kings": "LAK",
 "New Jersey Devils": "NJD",
 "New York Rangers": "NYR",
 "New York Islanders": "NYI",
 "Calgary Flames": "CGY",
 "Ottawa Senators": "OTT",
 "Montréal Canadiens": "MTL",
 "Philadelphia Flyers": "PHI",
 "Pittsburgh Penguins": "PIT",
 "San Jose Sharks": "SJS",
 "Florida Panthers": "FLA",
 "Nashville Predators": "NSH",
 "Tampa Bay Lightning": "TBL",
 "Toronto Maple Leafs": "TOR",
 "St Louis Blues": "STL",
 "Vancouver Canucks": "VAN",
 "Vegas Golden Knights": "VGK",
 "Washington Capitals": "WSH",
 "Winnipeg Jets": "WPG",
 "Seattle Kraken": "SEA"
};

const [away, home] = x.split(' @ ');

let atSymbol = " @ ";

if (x.includes(atSymbol)) {
	setAway(away);
 setHome(home);
 return (teamTable[away] || away) + " @ " + (teamTable[home] || home);
} else {
	return x;
}
   };

const pushOutcomeCompare = (outcome) => {
  return outcome === "push";
};

const typeMultilegCompare = (type) => {
  return type === "parlay" || type === "teaser";
};

const addSportsbookFilter = async (item) => {
  if (item === "Total") {
Constants.filterSportsbook.length = 0;
} else {
await
Constants.filterSportsbook.push(item);
};
};

const filterAllLeagues = (x) => {
  return x.length === 0;
};

// Filters the betslips based on the filters applied
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

){
    return true;
} else {
    return false;
};
};

betslips = betslips.filter(isDisplayed);

Constants.betsFound = betslips.length == 0 ? false : true;

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


setVarNetProfit(Constants.statsNetProfit);
setVarAtRisk(Constants.statsAtRisk);
setVarPendingAmount(Constants.statsPendingAmount);
setVarWins(Constants.statsWins);
setVarLosses(Constants.statsLosses);
setVarPushes(Constants.statsPushes);
setVarPendingCount(Constants.statsPendingCount);
setBetsFound(Constants.betsFound);


return betslips;
};

const filterLeagueButton = (x) => {
  return Constants.filterLeague.includes(x) ? true : false;
};

const typePropCompare = (type) => {
  return type === "prop";
};

const typeStraightCompare = (type) => {
  return type === "straight";
};

const pendingOutcomeCompare = (outcome) => {
  return outcome === "pending" || outcome == null;
};

const eventNotExist = (event) => {
  return event == null;
};

const filterOutcomeButton = (x) => {
  return Constants.filterOutcome.includes(x) ? true : false;
};

const getEvent = (x) => {
  return x[0].event;
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

const futureHideDate = (future) => {
  return future == true;
};

const liveBetExists = (live) => {
  return live == true ? "(Live)" : "";
};

const oddsAmericanSyntax = (oddsAmerican) => {
  return oddsAmerican < 0 ? "(" + oddsAmerican + ") " : "(+" + oddsAmerican + ") ";
};

const lineSuffix = (line) => {
  if(line == null){return ""}
else if(line <= 0){return line + " "}
else if(line > 0){return "+" + line + " "};
};

const getPropDetailsPlayer = (x) => {
  return x[0].propDetails == null ? "" : x[0].propDetails.player;
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

const compareBorgata = (x) => {
  return x === "Borgata";
};

const parlayLegCount = (bets) => {
  return bets.length;
};

const getEventStartTime = (x) => {
  return x[0].event == null ? "" : x[0].event.startTime;
};

const voidOutcomeCompare = (outcome) => {
  return outcome === "void";
};

const modifySportsbookName = (x) => {
  return x === "Total" ? "All Sportsbooks" : x;
};

const eventLeagueSuffix = (league) => {
  return league == null ? "" : league + " | ";
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

const addDateFilter = async (item) => {
  await
Constants.filterDate.splice(0,1,item);
};

const propositionTotal = (proposition) => {
  return proposition === "total";
};

const statusPendingCompare = (status) => {
  return status === "pending";
};

const getSegment = (x) => {
  return x[0].segment;
};

const lossOutcomeCompare = (outcome) => {
  return outcome === "loss" || outcome === "halfloss";
};

const compreBetMGM = (x) => {
  return x === "BetMGM";
};

const countFiltersApplied = () => {
  const length =
Constants.filterLeagueApply.length +
Constants.filterSportsbookApply.length +
Constants.filterDateApply.length +
Constants.filterBetTypeApply.length +
Constants.filterUnderdog.length +
Constants.filterUnder.length +
Constants.filterOutcome.length;
// Simply add all other filters arrays onto here to create the count
return length != 0 ? length : false;
};

const typeParlayCompare = (type) => {
  return type === "parlay";
};

const addOutcomeFilter = async (item) => {
  await
Constants.filterOutcome.push(item);
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

const getPropDetailsTeam = (x) => {
  return x[0].propDetails == null ? "" : x[0].propDetails.team;
};

const notPendingOutcomeCompare = (outcome) => {
  return outcome !== "pending"
};

const filterSportsbookAppliedPending = (x) => {
    if (Constants.filterSportsbookApply.length == 0) {
return true;
} else if (Constants.filterSportsbookApply.includes(x.book.name)) {
return true;
} else {
return false;
};
  };

const getPosition = (x) => {
  return x[0].position;
};

const filterBetStatusFunction = (x) => {
  return x == Constants.filterBetType;
};

const pendingArrayWorkaround = (test) => {
  console.log("pendingArray",test.length)
return test.filter(item => item.outcome === "pending")
};

const filterBetTypeButton = (x) => {
  return Constants.filterBetType.includes(x) ? true : false;
};

const propositionUncommonDisplay = (proposition) => {
     if(proposition == null){return ""}
else if(proposition === "spread"){return ""}
else if(proposition === "total"){return ""}
else if(proposition === "moneyline"){return ""}
else if(proposition === "method of result"){return ""}
else {return proposition.charAt(0).toUpperCase() + proposition.slice(1) + " "};


// || "total" || "moneyline" || "method of result"


/*if (proposition == "total" || "spread" || "moneyline" || "method of result" || null){
 return null}
else{
return proposition.charAt(0).toUpperCase() + proposition.slice(1)};*/

//return proposition == "total" || "spread" || "moneyline" || "method of result" || null ? "" : " " + proposition2;
   };

const filterSportsbookApplied = (x) => {
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
  };

const compareFanDuel = (x) => {
  return x === "FanDuel";
};

const addBetStatusFilter = async (item) => {
  await
Constants.filterBetStatusApply.push(item);
};

const applyFilters = (topLevelResponse) => {
  let filterData = topLevelResponse.filter(x => {
x == filter.league


})
return filterData
};

const getEventLeague = (x) => {
  return x[0].event == null ? "" : x[0].event.league;
};

const compareBet365 = (x) => {
  return x === "Bet365";
};

const compareBetway = (x) => {
  return x === "Betway";
};

const filterUnderButton = (x) => {
  return Constants.filterUnder.includes(x) ? true : false;
};

const addBetTypeFilter = async (item) => {
  await
Constants.filterBetType.push(item);
};

const checkSportsbooksSynced = (sportsbooks) => {
  if (sportsbooks.length !== 0){
Constants.sportsbooksSynced = true;
Constants.waitlisted = false;
};

//Constants.sportsbooksSynced = sportsbooks.length == 0 ? false : true;
//Constants.waitlisted = sportsbooks.length == 0 ? true : false;

setSportsbooksSynced(Constants.sportsbooksSynced);
//setWaitlisted(Constants.waitlisted);

return sportsbooks;
};

const getPropDetailsFuture = (x) => {
  return x[0].propDetails == null ? "" : x[0].propDetails.future;
};

const compareDraftKings = (x) => {
  return x === "DraftKings";
};

const filterLeagueFunction = (x) => {
    return x === "All Leagues";

/*const leaguesFilterTable = {
// NFL
"Arizona Cardinals": "ARI",
"Atlanta Falcons": "ATL",
"Baltimore Ravens": "BAL",
"Buffalo Bills": "BUF"
};

return leaguesFilterTable[x[0]] || x; */
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

const getOddsAmerican = (x) => {
  return x[0].oddsAmerican;
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

const checkLeague = () => {
  listData?.bets;
};

const segmentExists = (segment) => {
  return segment == null ? "" : "(" + segment + ") ";
};

const getPropDetailsMetricSpecial = (x) => {
  return x[0].propDetails == null ? "" : x[0].propDetails.metricSpecial;
};
      
      const { theme } = props;
      const { navigation } = props;
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [betsFound, setBetsFound] = React.useState(true);
const [date, setDate] = React.useState(new Date());
const [datePickerValue, setDatePickerValue] = React.useState(new Date());
const [dateRangeEnd, setDateRangeEnd] = React.useState(new Date());
const [dateRangeStart, setDateRangeStart] = React.useState(new Date());
const [dummyTwo, setDummyTwo] = React.useState(1);
const [loadingApply, setLoadingApply] = React.useState(false);
const [loadingCancel, setLoadingCancel] = React.useState(false);
const [loadingReset, setLoadingReset] = React.useState(false);
const [moreInfo, setMoreInfo] = React.useState([]);
const [sendEvent, setSendEvent] = React.useState("");
const [sendEventLeague, setSendEventLeague] = React.useState("");
const [sendEventName, setSendEventName] = React.useState("");
const [sendEventStartTime, setSendEventStartTime] = React.useState("");
const [sendLine, setSendLine] = React.useState(0);
const [sendLive, setSendLive] = React.useState(false);
const [sendOddsAmerican, setSendOddsAmerican] = React.useState(0);
const [sendOddsAmericanUpperLevel, setSendOddsAmericanUpperLevel] = React.useState("");
const [sendOutcome, setSendOutcome] = React.useState("");
const [sendParlayLegCount, setSendParlayLegCount] = React.useState("");
const [sendPosition, setSendPosition] = React.useState("");
const [sendPropDetailsFuture, setSendPropDetailsFuture] = React.useState(false);
const [sendPropDetailsMetricSpecial, setSendPropDetailsMetricSpecial] = React.useState("");
const [sendPropDetailsPlayer, setSendPropDetailsPlayer] = React.useState("");
const [sendPropDetailsTeam, setSendPropDetailsTeam] = React.useState("");
const [sendProposition, setSendProposition] = React.useState("");
const [sendSegment, setSendSegment] = React.useState("");
const [sendTypeLowerLevel, setSendTypeLowerLevel] = React.useState("");
const [sendTypeUpperLevel, setSendTypeUpperLevel] = React.useState("");
const [sportsbooksSynced, setSportsbooksSynced] = React.useState(false);
const [textInputValue, setTextInputValue] = React.useState("");
const [varAtRisk, setVarAtRisk] = React.useState(0);
const [varLosses, setVarLosses] = React.useState(0);
const [varNetProfit, setVarNetProfit] = React.useState(0);
const [varPendingAmount, setVarPendingAmount] = React.useState(0);
const [varPendingCount, setVarPendingCount] = React.useState(0);
const [varPushes, setVarPushes] = React.useState(0);
const [varWins, setVarWins] = React.useState(0);
      
      

      return (
        
      <ScreenContainer   hasSafeArea={false} hasTopSafeArea={true}>
        
      <Surface  style={{ borderRadius: 0, backgroundColor: theme.colors.background }} elevation={3}>
        
      <View  style={[styles.Viewk0, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewXe} >
        
      <View  style={[styles.ViewLU, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleFiltersModal",
          value: true
        });
 console.log(netProfitSuffix(Constants["statsNetProfit"]))
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewL9} >
        <>{ !(countFiltersApplied()) ? null : <Icon   name={"MaterialIcons/filter-alt"} color={theme.colors.primary} size={28} /> }</><>{ countFiltersApplied() ? null : <Icon   name={"MaterialIcons/filter-alt"} color={theme.colors.light} size={28} /> }</><>{ !(countFiltersApplied()) ? null : 
      <Text  style={[styles.TextOF, { color: theme.colors.primary }]} >
        {countFiltersApplied()}
      </Text>
     }</>
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.Viewpv} >
        <Image  style={styles.ImageCb} resizeMode={"contain"} source={Images.VaultLogoLightFontClearBackground} />
      </View>
    
      <View  style={[styles.Viewjg, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleShareModal",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewLf} >
        <Icon   name={"MaterialIcons/ios-share"} size={28} color={theme.colors.light} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    <>{ !(Constants["waitlisted"]) ? null : 
      <View  style={styles.ViewTD} >
        
      <View  style={[styles.Viewyt, { backgroundColor: theme.colors.primary }]} >
        
      <View  style={styles.ViewGX} >
        
      <View  style={styles.Viewm1} >
        
      <Text  style={[styles.Texthn, { color: theme.colors.strong }]} >
        {"You're On the Waitlist!"}
      </Text>
    
<SwaggerAPIApi.FetchGetBankrollPageByIdGET
  
  dummy={Constants["updatedSportsBook"]} internalId={Constants["internalId"]}
  onData={
     (fetchData) => { 
      try {
          checkSportsbooksSynced(fetchData);
      } catch (err) {
        console.error(err)
      }
    }
  }
 >
  {({ loading, error, data, refetchGetBankrollPageById }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (null)
  }}
</SwaggerAPIApi.FetchGetBankrollPageByIdGET>
      </View>
    
      <Text  style={[styles.TexteV, { color: theme.colors.strong }]} >
        {"We're currently at capacity but we'll let you know as soon as space is available. You can still use the Games tab while you wait!"}
      </Text>
    
      <View  style={styles.Viewvl} >
        <TextInput onChangeText={
     (newTextInputValue) => { const textInputValue = newTextInputValue;
      try {
         
  setTextInputValue(newTextInputValue);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextInputdX, { borderColor: theme.colors.divider, color: theme.colors.strong }]} value={textInputValue} placeholder={"Early Access Code..."} placeholderTextColor={theme.colors.divider} /><IconButton onPress={
     () => { 
      try {
         if (checkEarlyAccessCode(textInputValue)) { return }
  setGlobalVariableValue({
          key: "waitlisted",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.IconButtonjM} icon={"Ionicons/ios-arrow-forward-circle"} size={32} color={theme.colors.strong} />
      </View>
    
      </View>
    
      </View>
    
      <ScrollView   contentContainerStyle={styles.ScrollViewAnContent} showsVerticalScrollIndicator={true} bounces={true}>
        
      <View  style={styles.VieweL} >
        <Image  style={styles.ImageDi} source={Images.MyBetsDemo} resizeMode={"contain"} />
      </View>
    
      </ScrollView>
    
      </View>
     }</><>{ Constants["waitlisted"] ? null : 
      <View   >
        <>{ sportsbooksSynced ? null : 
      <View  style={styles.ViewXj} >
        
      <View   >
        
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('MainTabNavigator',
{ screen: 'BankrollStack',
params: { screen: 'SharpSportsFormScreen'}});
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={[styles.ViewE0, { backgroundColor: theme.colors.primary }]} >
        <Icon  style={styles.IconJ5} name={"Ionicons/ios-add-circle"} size={28} color={theme.colors.strong} />
      <View  style={styles.View_4o} >
        
      <Text  style={[styles.TextGt, { color: theme.colors.strong }]} >
        {"You're In Demo Mode"}
      </Text>
    
      <Text  style={[styles.Textkx, { color: theme.colors.strong }]} >
        {"Sync at least one sportsbook to automatically track your bets and view your stats!"}
      </Text>
    
      </View>
    
<SwaggerAPIApi.FetchGetBankrollPageByIdGET
  
  dummy={Constants["updatedSportsBook"]} internalId={Constants["internalId"]}
  onData={
     (fetchData) => { 
      try {
          checkSportsbooksSynced(fetchData);
      } catch (err) {
        console.error(err)
      }
    }
  }
 >
  {({ loading, error, data, refetchGetBankrollPageById }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (null)
  }}
</SwaggerAPIApi.FetchGetBankrollPageByIdGET>
      </View>
    
      </Touchable>
    
      </View>
    
      <ScrollView   contentContainerStyle={styles.ScrollViewukContent} showsVerticalScrollIndicator={true} bounces={true}>
        
      <View  style={styles.Viewb6} >
        <Image  style={styles.ImagemV} source={Images.MyBetsDemo} resizeMode={"contain"} />
      </View>
    
      </ScrollView>
    
      </View>
     }</>
      </View>
     }</>
      <ScrollView   showsVerticalScrollIndicator={true} bounces={true}>
        
      <View  style={styles.ViewBU} >
        <>{ !(betStatusHistorical(Constants["filterBetStatusApply"])) ? null : 
      <View  style={styles.Viewrz} >
        
      <Text  style={[styles.Text_0B, { color: theme.colors.background_inverse }]} >
        {"Historical"}
      </Text>
    
      </View>
     }</><>{ betStatusHistorical(Constants["filterBetStatusApply"]) ? null : 
      <Touchable onPress={
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
  } style={styles.TouchableOT} >
        
      <Text  style={[styles.TextSc, { color: theme.colors.divider }]} >
        {"Historical"}
      </Text>
    
      </Touchable>
     }</><>{ betStatusHistorical(Constants["filterBetStatusApply"]) ? null : 
      <View  style={styles.Viewb4} >
        
      <Text  style={[styles.TextoG, { color: theme.colors.background_inverse }]} >
        {"Pending"}
      </Text>
    
      </View>
     }</><>{ !(betStatusHistorical(Constants["filterBetStatusApply"])) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addBetStatusFilter("pending");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablejr} >
        
      <Text  style={[styles.TextSR, { color: theme.colors.divider }]} >
        {"Pending"}
      </Text>
    
      </Touchable>
     }</>
      </View>
    <>{ !(betStatusHistorical(Constants["filterBetStatusApply"])) ? null : 
      <View  style={styles.Viewhb} >
        <Utils.CustomCodeErrorBoundary><CustomCode.VictoryPieRecordFour/></Utils.CustomCodeErrorBoundary>
      </View>
     }</><>{ betStatusHistorical(Constants["filterBetStatusApply"]) ? null : 
      <View  style={styles.Viewc8} >
        <Utils.CustomCodeErrorBoundary><CustomCode.VictoryPieRecordPending/></Utils.CustomCodeErrorBoundary>
      </View>
     }</>
<SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET
  
  dummy={Constants["updatedSportsBook"]} internalId={Constants["internalId"]}
  
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
      <View  style={styles.ViewTg} >
        <>{ betsFound ? null : 
      <View  style={styles.ViewSS} >
        
      <Text  style={[styles.TextOm, { color: theme.colors.light }]} >
        {"No Bets Found"}
      </Text>
    
      </View>
     }</><FlatList data={filterBetslips(fetchData)} renderItem={({ item }) => { const allBetsListData = item; return (<><>{ !(betStatusHistorical(Constants["filterBetStatusApply"])) ? null : 
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('MyBetsBetInfoScreen', {Bet: allBetsListData?.id});
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableYw} >
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.ViewYa, { backgroundColor: theme.colors.divider, borderRadius: 6, borderColor: theme.colors.divider }]} collapsable={false}>
        
      <View  style={styles.ViewCN} >
        
      <View  style={styles.ViewPf} >
        <>{ !(lossOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={32} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={32} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={32} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={32} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={32} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.Viewiy} >
        <>{ !(typeSingleCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const gradedSingleBetLowerLevelData = item; return (<><>{ propositionTotal(gradedSingleBetLowerLevelData?.proposition) ? null : 
      <Text  style={[styles.TextbH, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.team)}{propositionUncommonDisplay(gradedSingleBetLowerLevelData?.proposition)}{spacingSuffix(gradedSingleBetLowerLevelData?.position)}{lineSuffix(gradedSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(gradedSingleBetLowerLevelData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}{segmentExists(gradedSingleBetLowerLevelData?.segment)}{futureBetExists(gradedSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(gradedSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ !(propositionTotal(gradedSingleBetLowerLevelData?.proposition)) ? null : 
      <Text  style={[styles.TextqS, { color: theme.colors.background_inverse }]}  numberOfLines={2} ellipsizeMode={"tail"}>
        {spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.team)}{spacingSuffix(gradedSingleBetLowerLevelData?.position)}{spacingSuffix(gradedSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(gradedSingleBetLowerLevelData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}{segmentExists(gradedSingleBetLowerLevelData?.segment)}{futureBetExists(gradedSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(gradedSingleBetLowerLevelData?.live)}
      </Text>
     }</></>) }}  contentContainerStyle={styles.FlatListpDContent} numColumns={1} /> }</><>{ !(typeParlayCompare(allBetsListData?.type)) ? null : 
      <Text  style={[styles.Textjy, { color: theme.colors.background_inverse }]} >
        {parlayLegCount(allBetsListData?.bets)}{"X Parlay "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeTeaserCompare(allBetsListData?.type)) ? null : 
      <Text  style={[styles.TextfT, { color: theme.colors.background_inverse }]} >
        {"Teaser "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeMultilegCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const gradedMultilegBetData = item; return (
      <View  style={styles.ViewBb} >
        
      <View  style={styles.ViewAK} >
        <>{ !(pendingOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={20} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={20} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={20} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={20} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.Viewgy} >
        <>{ propositionTotal(gradedMultilegBetData?.proposition) ? null : 
      <Text  style={[styles.Textmz, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(gradedMultilegBetData?.propDetails?.player)}{spacingSuffix(gradedMultilegBetData?.propDetails?.team)}{propositionUncommonDisplay(gradedMultilegBetData?.proposition)}{spacingSuffix(gradedMultilegBetData?.position)}{lineSuffix(gradedMultilegBetData?.line)}{propDetailsMetricSpecial(gradedMultilegBetData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(gradedMultilegBetData?.oddsAmerican)}{segmentExists(gradedMultilegBetData?.segment)}{futureBetExists(gradedMultilegBetData?.propDetails?.future)}{liveBetExists(gradedMultilegBetData?.live)}
      </Text>
     }</><>{ !(propositionTotal(gradedMultilegBetData?.proposition)) ? null : 
      <Text  style={[styles.TexttJ, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(gradedMultilegBetData?.propDetails?.player)}{spacingSuffix(gradedMultilegBetData?.propDetails?.team)}{spacingSuffix(gradedMultilegBetData?.position)}{spacingSuffix(gradedMultilegBetData?.line)}{propDetailsMetricSpecial(gradedMultilegBetData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(gradedMultilegBetData?.oddsAmerican)}{segmentExists(gradedMultilegBetData?.segment)}{futureBetExists(gradedMultilegBetData?.propDetails?.future)}{liveBetExists(gradedMultilegBetData?.live)}
      </Text>
     }</>
      </View>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListQkContent} numColumns={1} /> }</><>{ !(typeSingleCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const gradedMultiSingleBetLowerLevelData = item; return (<><>{ eventNotExist(gradedMultiSingleBetLowerLevelData?.event) ? null : 
      <Text  style={[styles.TextBe, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {eventLeagueSuffix(gradedMultiSingleBetLowerLevelData?.event?.league)}{gradedMultiSingleBetLowerLevelData?.event?.name}
      </Text>
     }</><>{ eventNotExist(gradedMultiSingleBetLowerLevelData?.event) ? null : 
      <View  style={styles.ViewCr} >
        
      <Text  style={[styles.Text_7j, { color: theme.colors.light }]}  numberOfLines={1} ellipsizeMode={"tail"}>
        {dateStandard(gradedMultiSingleBetLowerLevelData?.event?.startTime)}
      </Text>
    
      </View>
     }</></>) }}  contentContainerStyle={styles.FlatListbJContent} numColumns={1} /> }</>
      </View>
    
      </View>
    
      <View  style={styles.Viewys} >
        
      <View  style={styles.ViewSg} >
        
      <Text  style={[styles.Text_6T, { color: theme.colors.divider }]} >
        {"-"}
      </Text>
    
      <View  style={styles.View_8D} >
        <>{ !(lossOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.TextR7, { color: theme.colors.error }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(winOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.Texti4, { color: theme.colors.good }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(pushOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.Textsx, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(voidOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.TextTr, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(cashoutOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.TextSj, { color: theme.colors.fair }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</>
      </View>
    
      <Text  style={[styles.Textk7, { color: theme.colors.light }]} >
        {toUpperCase(allBetsListData?.book?.abbr)}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      </Touchable>
     }</><>{ betStatusHistorical(Constants["filterBetStatusApply"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          navigation.navigate('MyBetsBetInfoScreen', {Bet: allBetsListData?.id});
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableKt} >
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.ViewFI, { backgroundColor: theme.colors.divider, borderRadius: 6, borderColor: theme.colors.divider }]} collapsable={false}>
        
      <View  style={styles.ViewiQ} >
        
      <View  style={styles.ViewBu} >
        <>{ !(pendingOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} color={theme.colors.light} size={32} /> }</>
      </View>
    
      <View  style={styles.ViewRa} >
        <>{ !(typeSingleCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const pendingSingleBetLowerLevelData = item; return (<><>{ propositionTotal(pendingSingleBetLowerLevelData?.proposition) ? null : 
      <Text  style={[styles.TextyF, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.team)}{propositionUncommonDisplay(pendingSingleBetLowerLevelData?.proposition)}{spacingSuffix(pendingSingleBetLowerLevelData?.position)}{lineSuffix(pendingSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(pendingSingleBetLowerLevelData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(pendingSingleBetLowerLevelData?.oddsAmerican)}{segmentExists(pendingSingleBetLowerLevelData?.segment)}{futureBetExists(pendingSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(pendingSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ !(propositionTotal(pendingSingleBetLowerLevelData?.proposition)) ? null : 
      <Text  style={[styles.TextEf, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.team)}{spacingSuffix(pendingSingleBetLowerLevelData?.position)}{spacingSuffix(pendingSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(pendingSingleBetLowerLevelData?.propDetails?.metricSpecial)}{null}{segmentExists(pendingSingleBetLowerLevelData?.segment)}{futureBetExists(pendingSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(pendingSingleBetLowerLevelData?.live)}
      </Text>
     }</></>) }}  contentContainerStyle={styles.FlatListQ5Content} numColumns={1} /> }</><>{ !(typeParlayCompare(allBetsListData?.type)) ? null : 
      <Text  style={[styles.TextEs, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {parlayLegCount(allBetsListData?.bets)}{"X Parlay "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeTeaserCompare(allBetsListData?.type)) ? null : 
      <Text  style={[styles.TextIq, { color: theme.colors.background_inverse }]} >
        {"Teaser "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeMultilegCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const pendingMultilegData = item; return (
      <View  style={styles.ViewPk} >
        
      <View  style={styles.ViewcK} >
        <>{ !(pendingOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={20} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={20} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={20} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={20} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.View_57} >
        <>{ propositionTotal(pendingMultilegData?.proposition) ? null : 
      <Text  style={[styles.Textov, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingMultilegData?.propDetails?.player)}{spacingSuffix(pendingMultilegData?.propDetails?.team)}{propositionUncommonDisplay(pendingMultilegData?.proposition)}{spacingSuffix(pendingMultilegData?.position)}{lineSuffix(pendingMultilegData?.line)}{propDetailsMetricSpecial(pendingMultilegData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(pendingMultilegData?.oddsAmerican)}{segmentExists(pendingMultilegData?.segment)}{futureBetExists(pendingMultilegData?.propDetails?.future)}{liveBetExists(pendingMultilegData?.live)}
      </Text>
     }</><>{ !(propositionTotal(pendingMultilegData?.proposition)) ? null : 
      <Text  style={[styles.TextCE, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingMultilegData?.propDetails?.player)}{spacingSuffix(pendingMultilegData?.propDetails?.team)}{spacingSuffix(pendingMultilegData?.position)}{spacingSuffix(pendingMultilegData?.line)}{propDetailsMetricSpecial(pendingMultilegData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(pendingMultilegData?.oddsAmerican)}{segmentExists(pendingMultilegData?.segment)}{futureBetExists(pendingMultilegData?.propDetails?.future)}{liveBetExists(pendingMultilegData?.live)}
      </Text>
     }</>
      </View>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatList_1CContent} numColumns={1} /> }</><>{ !(typeSingleCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const pendingMultiSingleBetLowerLevelData = item; return (<><>{ eventNotExist(pendingMultiSingleBetLowerLevelData?.event) ? null : 
      <Text  style={[styles.TextEe, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {eventLeagueSuffix(pendingMultiSingleBetLowerLevelData?.event?.league)}{pendingMultiSingleBetLowerLevelData?.event?.name}
      </Text>
     }</><>{ eventNotExist(pendingMultiSingleBetLowerLevelData?.event) ? null : 
      <View  style={styles.ViewQS} >
        
      <Text  style={[styles.Textbq, { color: theme.colors.light }]}  numberOfLines={1} ellipsizeMode={"tail"}>
        {dateTimeStandard(pendingMultiSingleBetLowerLevelData?.event?.startTime)}
      </Text>
    
      </View>
     }</></>) }}  contentContainerStyle={styles.FlatListiYContent} numColumns={1} /> }</>
      </View>
    
      </View>
    
      <View  style={styles.ViewlM} >
        
      <Text  style={[styles.TextRn, { color: theme.colors.divider }]} >
        {"-"}
      </Text>
    
      <View  style={styles.Viewok} >
        
      <View  style={styles.ViewHB} >
        
      <Text  style={[styles.TextGW, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {atRiskSuffix(allBetsListData?.atRisk)}
      </Text>
    
      <Text  style={[styles.Textax, { color: theme.colors.light }]} >
        {"Risk"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewCa} >
        
      <Text  style={[styles.Text_8Z, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {toWinSuffix(allBetsListData?.toWin)}
      </Text>
    
      <Text  style={[styles.TextG6, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"To Win"}
      </Text>
    
      </View>
    
      </View>
    
      <Text  style={[styles.TextIS, { color: theme.colors.light }]} >
        {toUpperCase(allBetsListData?.book?.abbr)}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      </Touchable>
     }</></>) }}  contentContainerStyle={styles.FlatList_6zContent} numColumns={1} />
      <View  style={styles.ViewHJ} >
        <>{ Constants["loadingRefresh"] ? null : <ButtonOutline onPress={
    async () => { 
      try {
          setGlobalVariableValue({
          key: "loadingRefresh",
          value: true
        });
 await SwaggerAPIApi.cacheUserBetsGET(Constants, {internalId: Constants["internalId"],});
  setGlobalVariableValue({
          key: "loadingRefresh",
          value: false
        });
  setGlobalVariableValue({
          key: "updatedSportsBook",
          value: (Constants["updatedSportsBook"]) + 1
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonOutlineJ6, { color: theme.colors.primary }]} title={"Refresh"} icon={"Ionicons/ios-refresh"} /> }</><>{ !(Constants["loadingRefresh"]) ? null : <ButtonOutline  style={[styles.ButtonOutline_67, { color: theme.colors.primary }]} title={"Refresh"} loading={true} /> }</>
      <Text  style={[styles.Texts4, { color: theme.colors.light }]} >
        {"Recently placed bets may take up to 8 hours to load 😮‍💨"}
      </Text>
    
      </View>
    
      </View>
    <>{ !(Constants["toggleShareModal"]) ? null : 
      <Modal  style={{ backgroundColor: theme.colors.background }} animationType={"slide"} presentationStyle={"pageSheet"}>
        
      <View  style={[styles.ViewNJ, { backgroundColor: theme.colors.background }]} >
        
      <Surface  style={[styles.SurfaceaB, { backgroundColor: theme.colors.background }]} elevation={2}>
        
      <View  style={styles.ViewXO} >
        
      <View  style={styles.View_8p} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleShareModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewOx} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.TextYu, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.ViewQc} >
        
      <Text  style={[styles.TextHF, { color: theme.colors.background_inverse }]}  numberOfLines={1} ellipsizeMode={"tail"}>
        {Constants["username"]}
      </Text>
    
      </View>
    
      <View  style={styles.ViewV2} >
        
      <View  style={styles.ViewVy} >
        <Image  style={styles.Image_5D} source={Images.VaultLogoLightFontClearBackground} resizeMode={"contain"} />
      </View>
    
      <Text  style={[styles.TextD7, { color: theme.colors.background_inverse }]} >
        {"Verified"}
      </Text>
    
      </View>
    
      </View>
    
      </Surface>
    
      <View   >
        
      <View  style={styles.ViewGh} >
        
      <Text  style={[styles.TextX1, { color: theme.colors.light }]} >
        {"Filters applied: "}{combinedFilters(Constants["filterSportsbookApply"])}{combinedFilters(Constants["filterDateApply"])}{combinedFilters(Constants["filterLeagueApply"])}{combinedFilters(Constants["filterBetTypeApply"])}{combinedFilters(Constants["filterUnderdogApply"])}{combinedFilters(Constants["filterUnderApply"])}{combinedFilters(Constants["filterOutcomeApply"])}
      </Text>
    
      </View>
    <>{ !(betStatusHistorical(Constants["filterBetStatusApply"])) ? null : 
      <View  style={styles.Viewz1} >
        <Utils.CustomCodeErrorBoundary><CustomCode.VictoryPieRecordFour/></Utils.CustomCodeErrorBoundary>
      </View>
     }</><>{ betStatusHistorical(Constants["filterBetStatusApply"]) ? null : 
      <View  style={styles.ViewEW} >
        <Utils.CustomCodeErrorBoundary><CustomCode.VictoryPieRecordPending/></Utils.CustomCodeErrorBoundary>
      </View>
     }</>
      </View>
    
      <ScrollView   contentContainerStyle={styles.ScrollViewByContent} showsVerticalScrollIndicator={false} bounces={true}>
        
      <View  style={styles.ViewOm} >
        <FlatList data={filterBetslips(fetchData)} renderItem={({ item }) => { const allBetsListData = item; return (<><>{ !(betStatusHistorical(Constants["filterBetStatusApply"])) ? null : 
      <Surface  style={[styles.Surface_86, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} elevation={1}>
        
      <View  style={[styles.Viewe3, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <View  style={styles.Viewld} >
        
      <View  style={styles.ViewrK} >
        <>{ !(lossOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={16} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={16} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={16} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={16} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={16} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.Vieweo} >
        <>{ !(typeSingleCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const gradedSingleBetLowerLevelData = item; return (<><>{ propositionTotal(gradedSingleBetLowerLevelData?.proposition) ? null : 
      <Text  style={[styles.TextpV, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {(gradedSingleBetLowerLevelData?.propDetails).player}{(gradedSingleBetLowerLevelData?.propDetails).team}{propositionUncommonDisplay(gradedSingleBetLowerLevelData?.proposition)}{spacingSuffix(gradedSingleBetLowerLevelData?.position)}{lineSuffix(gradedSingleBetLowerLevelData?.line)}{(gradedSingleBetLowerLevelData?.propDetails).metricSpecial}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}{segmentExists(gradedSingleBetLowerLevelData?.segment)}{(gradedSingleBetLowerLevelData?.propDetails).future}{liveBetExists(gradedSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ !(propositionTotal(gradedSingleBetLowerLevelData?.proposition)) ? null : 
      <Text  style={[styles.TextHo, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {(gradedSingleBetLowerLevelData?.propDetails).player}{(gradedSingleBetLowerLevelData?.propDetails).team}{spacingSuffix(gradedSingleBetLowerLevelData?.position)}{spacingSuffix(gradedSingleBetLowerLevelData?.line)}{(gradedSingleBetLowerLevelData?.propDetails).metricSpecial}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}{segmentExists(gradedSingleBetLowerLevelData?.segment)}{(gradedSingleBetLowerLevelData?.propDetails).future}{liveBetExists(gradedSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ eventNotExist(gradedSingleBetLowerLevelData?.event) ? null : 
      <Text  style={[styles.TextZH, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {eventLeagueSuffix(gradedSingleBetLowerLevelData?.event?.league)}{gradedSingleBetLowerLevelData?.event?.name}
      </Text>
     }</></>) }}  contentContainerStyle={styles.FlatListxpContent} numColumns={1} /> }</><>{ !(typeParlayCompare(allBetsListData?.type)) ? null : 
      <Text  style={[styles.Text_2d, { color: theme.colors.background_inverse }]} >
        {parlayLegCount(allBetsListData?.bets)}{"X Parlay "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeTeaserCompare(allBetsListData?.type)) ? null : 
      <Text  style={[styles.TextHc, { color: theme.colors.background_inverse }]} >
        {"Teaser "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeMultilegCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const gradedMultilegBetData = item; return (
      <View  style={styles.Vieway} >
        
      <View  style={styles.ViewCm} >
        <>{ !(pendingOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on"} size={12} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={12} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={12} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={12} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={12} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={12} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.ViewhT} >
        <>{ propositionTotal(gradedMultilegBetData?.proposition) ? null : 
      <Text  style={[styles.Text_9a, { color: theme.colors.light }]}  numberOfLines={2} ellipsizeMode={"tail"}>
        {(gradedSingleBetLowerLevelData?.propDetails).player}{(gradedSingleBetLowerLevelData?.propDetails).team}{propositionUncommonDisplay(gradedMultilegBetData?.proposition)}{spacingSuffix(gradedMultilegBetData?.position)}{lineSuffix(gradedMultilegBetData?.line)}{(gradedSingleBetLowerLevelData?.propDetails).metricSpecial}{oddsAmericanSyntax(gradedMultilegBetData?.oddsAmerican)}{segmentExists(gradedMultilegBetData?.segment)}{(gradedSingleBetLowerLevelData?.propDetails).future}{liveBetExists(gradedMultilegBetData?.live)}
      </Text>
     }</><>{ !(propositionTotal(gradedMultilegBetData?.proposition)) ? null : 
      <Text  style={[styles.TextLu, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {(gradedMultilegBetData?.propDetails).player}{(gradedMultilegBetData?.propDetails).team}{spacingSuffix(gradedMultilegBetData?.position)}{spacingSuffix(gradedMultilegBetData?.line)}{(gradedMultilegBetData?.propDetails).metricSpecial}{oddsAmericanSyntax(gradedMultilegBetData?.oddsAmerican)}{segmentExists(gradedMultilegBetData?.segment)}{(gradedMultilegBetData?.propDetails).future}{liveBetExists(gradedMultilegBetData?.live)}
      </Text>
     }</>
      </View>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListpbContent} numColumns={1} /> }</>
      </View>
    
      </View>
    
      <View  style={styles.Viewpm} >
        
      <View  style={styles.View_3v} >
        <>{ !(lossOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.TextiC, { color: theme.colors.error }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(winOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.Text_3c, { color: theme.colors.good }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(pushOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.TextO1, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(voidOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.TextnC, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</><>{ !(cashoutOutcomeCompare(allBetsListData?.outcome)) ? null : 
      <Text  style={[styles.TextsN, { color: theme.colors.fair }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(allBetsListData?.netProfit)}
      </Text>
     }</>
      </View>
    
      </View>
    
      </View>
    
      </Surface>
     }</><>{ betStatusHistorical(Constants["filterBetStatusApply"]) ? null : 
      <Surface  style={[styles.SurfacetG, { borderRadius: 6, backgroundColor: theme.colors.divider }]} elevation={1}>
        
      <View  style={[styles.View_4G, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <View  style={styles.Viewyi} >
        
      <View  style={styles.ViewxH} >
        <>{ !(pendingOutcomeCompare(allBetsListData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on"} size={16} color={theme.colors.light} /> }</>
      </View>
    
      <View  style={styles.Viewom} >
        <>{ !(typeSingleCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const pendingSingleBetLowerLevelData = item; return (<><>{ propositionTotal(pendingSingleBetLowerLevelData?.proposition) ? null : 
      <Text  style={[styles.TextTc, { color: theme.colors.background_inverse }]}  numberOfLines={2} ellipsizeMode={"tail"}>
        {(gradedMultilegBetData?.propDetails).player}{(gradedMultilegBetData?.propDetails).team}{propositionUncommonDisplay(pendingSingleBetLowerLevelData?.proposition)}{spacingSuffix(pendingSingleBetLowerLevelData?.position)}{lineSuffix(pendingSingleBetLowerLevelData?.line)}{(gradedMultilegBetData?.propDetails).metricSpecial}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}{segmentExists(pendingSingleBetLowerLevelData?.segment)}{(gradedMultilegBetData?.propDetails).future}{liveBetExists(pendingSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ !(propositionTotal(pendingSingleBetLowerLevelData?.proposition)) ? null : 
      <Text  style={[styles.TextGw, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {(pendingSingleBetLowerLevelData?.propDetails).player}{(pendingSingleBetLowerLevelData?.propDetails).team}{spacingSuffix(pendingSingleBetLowerLevelData?.position)}{spacingSuffix(pendingSingleBetLowerLevelData?.line)}{(pendingSingleBetLowerLevelData?.propDetails).metricSpecial}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}{segmentExists(pendingSingleBetLowerLevelData?.segment)}{(pendingSingleBetLowerLevelData?.propDetails).future}{liveBetExists(pendingSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ eventNotExist(pendingSingleBetLowerLevelData?.event) ? null : 
      <Text  style={[styles.TextL3, { color: theme.colors.light }]} >
        {eventLeagueSuffix(pendingSingleBetLowerLevelData?.event?.league)}{pendingSingleBetLowerLevelData?.event?.name}
      </Text>
     }</></>) }}  contentContainerStyle={styles.FlatListxBContent} numColumns={1} /> }</><>{ !(typeParlayCompare(allBetsListData?.type)) ? null : 
      <Text  style={{ color: theme.colors.strong }} >
        {parlayLegCount(allBetsListData?.bets)}{"X Parlay "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeTeaserCompare(allBetsListData?.type)) ? null : 
      <Text  style={{ color: theme.colors.strong }} >
        {"Teaser "}{oddsAmericanSyntax(allBetsListData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeMultilegCompare(allBetsListData?.type)) ? null : <FlatList data={allBetsListData?.bets} renderItem={({ item }) => { const pendingMultilegBetData = item; return (
      <View  style={styles.Viewyn} >
        
      <View  style={styles.VieweU} >
        <>{ !(pendingOutcomeCompare(pendingMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on"} size={12} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(pendingMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={12} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(pendingMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={12} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(pendingMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={12} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(pendingMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={12} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(pendingMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={12} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.ViewPh} >
        <>{ propositionTotal(pendingMultilegBetData?.proposition) ? null : 
      <Text  style={[styles.TextOF, { color: theme.colors.light }]}  numberOfLines={2} ellipsizeMode={"tail"}>
        {(pendingMultilegBetData?.propDetails).player}{(pendingMultilegBetData?.propDetails).team}{propositionUncommonDisplay(pendingMultilegBetData?.proposition)}{spacingSuffix(pendingMultilegBetData?.position)}{lineSuffix(pendingMultilegBetData?.line)}{(pendingMultilegBetData?.propDetails).metricSpecial}{oddsAmericanSyntax(pendingMultilegBetData?.oddsAmerican)}{segmentExists(pendingMultilegBetData?.segment)}{(pendingMultilegBetData?.propDetails).future}{liveBetExists(pendingMultilegBetData?.live)}
      </Text>
     }</><>{ !(propositionTotal(pendingMultilegBetData?.proposition)) ? null : 
      <Text  style={[styles.Textpx, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {(pendingMultilegBetData?.propDetails).player}{(pendingMultilegBetData?.propDetails).team}{spacingSuffix(pendingMultilegBetData?.position)}{spacingSuffix(pendingMultilegBetData?.line)}{(pendingMultilegBetData?.propDetails).metricSpecial}{oddsAmericanSyntax(pendingMultilegBetData?.oddsAmerican)}{segmentExists(pendingMultilegBetData?.segment)}{(pendingMultilegBetData?.propDetails).future}{liveBetExists(pendingMultilegBetData?.live)}
      </Text>
     }</>
      </View>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListuTContent} numColumns={1} /> }</>
      </View>
    
      </View>
    
      <View  style={styles.Views4} >
        
      <View  style={styles.ViewJO} >
        
      <View  style={styles.Viewif} >
        
      <Text  style={[styles.TextGz, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {atRiskSuffix(allBetsListData?.atRisk)}
      </Text>
    
      <Text  style={[styles.TextWQ, { color: theme.colors.light }]} >
        {"Risk"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewee} >
        
      <Text  style={[styles.Textrs, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {toWinSuffix(allBetsListData?.toWin)}
      </Text>
    
      <Text  style={[styles.Text_1O, { color: theme.colors.light }]} >
        {"To Win"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
     }</></>) }}  contentContainerStyle={styles.FlatListaxContent} numColumns={1} />
      </View>
    
      </ScrollView>
    
      <View  style={styles.View_8N} >
        
      <View  style={styles.ViewoR} >
        <Icon  style={styles.IconLj} name={"Ionicons/ios-camera"} size={16} color={theme.colors.light} />
      <Text  style={[styles.Textam, { color: theme.colors.light }]} >
        {"Take a screenshot and share"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </Modal>
     }</></>)
  }}
</SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET>
      </ScrollView>
    
      <Modal  style={{ backgroundColor: theme.colors.background }} visible={Constants["toggleFiltersModal"]} animationType={"slide"} presentationStyle={"pageSheet"}>
        
      <View  style={[styles.ViewbX, { backgroundColor: theme.colors.background }]} >
        
      <Surface  style={[styles.SurfaceYk, { backgroundColor: theme.colors.background }]} elevation={2} elevation={2}>
        
      <View  style={styles.Viewza} >
        
      <View  style={[styles.View_8o, { borderRadius: 0 }]} >
        <>{ loadingCancel ? null : 
      <Touchable onPress={
     () => { 
      try {
          setLoadingCancel(true);
  setGlobalVariableValue({
          key: "filterLeague",
          value: arrayChange(Constants["filterLeagueApply"])
        });
  setGlobalVariableValue({
          key: "filterSportsbook",
          value: arrayChange(Constants["filterSportsbookApply"])
        });
  setGlobalVariableValue({
          key: "filterBetType",
          value: arrayChange(Constants["filterBetTypeApply"])
        });
  setGlobalVariableValue({
          key: "filterDate",
          value: arrayChange(Constants["filterDateApply"])
        });
  setGlobalVariableValue({
          key: "filterUnderdog",
          value: arrayChange(Constants["filterUnderdogApply"])
        });
  setGlobalVariableValue({
          key: "filterUnder",
          value: arrayChange(Constants["filterUnderApply"])
        });
  setGlobalVariableValue({
          key: "filterOutcome",
          value: arrayChange(Constants["filterOutcomeApply"])
        });
  setGlobalVariableValue({
          key: "toggleFiltersModal",
          value: false
        });
  setLoadingCancel(false);
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewbK} >
        
      <Text  style={[styles.TextIH, { color: theme.colors.background_inverse }]} >
        {"Cancel"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(loadingCancel) ? null : <ActivityIndicator  style={styles.ActivityIndicatorDT} size={"small"} animating={true} hidesWhenStopped={true} color={theme.colors.background_inverse} /> }</>
      </View>
    
      <View  style={styles.ViewPJ} >
        
      <Text  style={[styles.Text_2K, { color: theme.colors.background_inverse }]} >
        {"Filters"}
      </Text>
    
      </View>
    
      <View  style={[styles.ViewZI, { borderRadius: 0 }]} >
        <>{ loadingReset ? null : 
      <Touchable onPress={
     () => { 
      try {
          setLoadingReset(true);
  setGlobalVariableValue({
          key: "filterLeague",
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
          key: "filterDate",
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
  setLoadingReset(false);
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.View_3X} >
        <>{ loadingReset ? null : 
      <Text  style={[styles.TextJt, { color: theme.colors.background_inverse }]} >
        {"Clear"}
      </Text>
     }</>
      </View>
    
      </Touchable>
     }</><>{ !(loadingReset) ? null : <ActivityIndicator  style={styles.ActivityIndicatoruw} size={"small"} animating={true} hidesWhenStopped={true} color={theme.colors.primary} /> }</>
      </View>
    
      </View>
    
      </Surface>
    
      <ScrollView   contentContainerStyle={styles.ScrollViewICContent} showsVerticalScrollIndicator={false} bounces={true} showsHorizontalScrollIndicator={true} showsHorizontalScrollIndicator={false}>
        
      <View  style={styles.Viewmr} >
        
      <Text  style={[styles.TextLr, { color: theme.colors.background_inverse }]} >
        {"Sportsbooks"}
      </Text>
    
      <View  style={styles.View_04} >
        
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
  } style={styles.TouchableaL} >
        
      <View  style={[styles.ViewbT, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TexthP, { color: theme.colors.strong }]} >
        {modifySportsbookName(listData?.account?.book?.name)}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterSportsbookButton(listData?.account?.book?.name) ? null : 
      <Touchable onPress={
    async () => { 
      try {
          setDummyTwo((dummyTwo) + 1);
 await addSportsbookFilter(listData?.account?.book?.name);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablebU} >
        
      <View  style={[styles.Viewzy, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextHk, { color: theme.colors.background_inverse }]} >
        {modifySportsbookName(listData?.account?.book?.name)}
      </Text>
    
      </View>
    
      </Touchable>
     }</></>) }}  contentContainerStyle={styles.FlatList_3LContent} numColumns={1} />)
  }}
</SwaggerAPIApi.FetchGetBankrollPageByIdGET>
      </View>
    <Divider  style={styles.Divider_4Q} color={theme.colors.divider} />
      </View>
    
      <View  style={styles.ViewBL} >
        
      <Text  style={[styles.TextZN, { color: theme.colors.background_inverse }]} >
        {"Dates"}
      </Text>
    
      <View  style={styles.Viewc3} >
        
      <View  style={styles.Viewwq} >
        <>{ !(filterAllLeagues(Constants["filterDate"])) ? null : 
      <Touchable  style={styles.TouchableFN} >
        
      <View  style={[styles.ViewpG, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextuH, { color: theme.colors.strong }]} >
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
  } style={styles.TouchablecK} >
        
      <View  style={[styles.ViewWW, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_5C, { color: theme.colors.background_inverse }]} >
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
  } style={styles.TouchableUL} >
        
      <View  style={[styles.ViewnF, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TexthN, { color: theme.colors.strong }]} >
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
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_8C} >
        
      <View  style={[styles.Viewu5, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_5V, { color: theme.colors.background_inverse }]} >
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
  } style={styles.TouchableQL} >
        
      <View  style={[styles.ViewhB, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textrw, { color: theme.colors.strong }]} >
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
  } style={styles.Touchablelc} >
        
      <View  style={[styles.Viewuf, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TexthE, { color: theme.colors.background_inverse }]} >
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
  } style={styles.Touchable_0u} >
        
      <View  style={[styles.ViewZ5, { borderRadius: 6, backgroundColor: theme.colors.primary }]} >
        
      <Text  style={[styles.TextOQ, { color: theme.colors.strong }]} >
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
  } style={styles.Touchablexn} >
        
      <View  style={[styles.Viewi7, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_79, { color: theme.colors.background_inverse }]} >
        {"Last 3 Months"}
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
  } style={styles.TouchableCx} >
        
      <View  style={[styles.ViewrY, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextFf, { color: theme.colors.strong }]} >
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
  } style={styles.TouchableiY} >
        
      <View  style={[styles.ViewYO, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextHf, { color: theme.colors.background_inverse }]} >
        {"Last 6 Months"}
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
  } style={styles.TouchableVH} >
        
      <View  style={[styles.ViewbB, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textqj, { color: theme.colors.strong }]} >
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
  } style={styles.Touchablerl} >
        
      <View  style={[styles.ViewHa, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextoW, { color: theme.colors.background_inverse }]} >
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
  } style={styles.Touchable_2n} >
        
      <View  style={[styles.ViewZu, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextHW, { color: theme.colors.strong }]} >
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
  } style={styles.TouchableNU} >
        
      <View  style={[styles.ViewlO, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textej, { color: theme.colors.background_inverse }]} >
        {"Last 12 Months"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    
      </View>
    <Divider  style={styles.DividerrB} color={theme.colors.divider} />
      </View>
    
      <View  style={styles.ViewlD} >
        
      <Text  style={[styles.TextrU, { color: theme.colors.background_inverse }]} >
        {"Leagues"}
      </Text>
    
      <View  style={styles.ViewRW} >
        <>{ !(filterAllLeagues(Constants["filterLeague"])) ? null : 
      <Touchable  style={styles.TouchablebU} >
        
      <View  style={[styles.ViewTW, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
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
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablesZ} >
        
      <View  style={[styles.View_9D, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
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
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_0G} >
        
      <View  style={[styles.ViewIn, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
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
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_8o} >
        
      <View  style={[styles.Viewml, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
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
  } style={styles.TouchableQP} >
        
      <View  style={[styles.ViewJa, { borderRadius: theme.roundness, backgroundColor: theme.colors.primary }]} >
        
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
  } style={styles.Touchablel5} >
        
      <View  style={[styles.Viewr1, { borderRadius: theme.roundness, backgroundColor: theme.colors.divider }]} >
        
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
  } style={styles.TouchableQl} >
        
      <View  style={[styles.Viewa3, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  } style={styles.TouchableB3} >
        
      <View  style={[styles.ViewKq, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  } style={styles.Touchable_0T} >
        
      <View  style={[styles.Viewf6, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness, color: theme.colors.divider }]} >
        
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
  } style={styles.TouchableVG} >
        
      <View  style={[styles.View_79, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  } style={styles.Touchable_1n} >
        
      <View  style={[styles.ViewTQ, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  } style={styles.TouchableBc} >
        
      <View  style={[styles.Viewa3, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  } style={styles.Touchable_5R} >
        
      <View  style={[styles.ViewbS, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  } style={styles.Touchablebb} >
        
      <View  style={[styles.ViewJ9, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  } style={styles.TouchableQE} >
        
      <View  style={[styles.View_6t, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  } style={styles.TouchableKK} >
        
      <View  style={[styles.ViewdK, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
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
  } style={styles.Touchablesa} >
        
      <View  style={[styles.ViewbT, { backgroundColor: theme.colors.primary, borderRadius: theme.roundness }]} >
        
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
  } style={styles.TouchableGu} >
        
      <View  style={[styles.Viewp5, { backgroundColor: theme.colors.divider, borderRadius: theme.roundness }]} >
        
      <Text  style={[theme.typography.button, { color: theme.colors.background_inverse }]} >
        {"Other Leagues"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    <Divider  style={styles.Divideruy} color={theme.colors.divider} />
      </View>
    
      <View  style={styles.ViewRA} >
        
      <Text  style={[styles.TextCA, { color: theme.colors.background_inverse }]} >
        {"Bet Types"}
      </Text>
    
      <View  style={styles.ViewsH} >
        <>{ !(filterAllLeagues(Constants["filterBetType"])) ? null : 
      <Touchable  style={styles.Touchableoo} >
        
      <View  style={[styles.ViewGg, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textbe, { color: theme.colors.strong }]} >
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
  } style={styles.TouchablevM} >
        
      <View  style={[styles.ViewkK, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextyJ, { color: theme.colors.background_inverse }]} >
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
  } style={styles.TouchableeW} >
        
      <View  style={[styles.ViewDA, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextdG, { color: theme.colors.strong }]} >
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
  } style={styles.Touchablek3} >
        
      <View  style={[styles.Viewn1, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextHF, { color: theme.colors.background_inverse }]} >
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
  } style={styles.Touchable_8N} >
        
      <View  style={[styles.Viewgm, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextWJ, { color: theme.colors.strong }]} >
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
  } style={styles.Touchablec1} >
        
      <View  style={[styles.ViewfW, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextuZ, { color: theme.colors.background_inverse }]} >
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
  } style={styles.Touchabler2} >
        
      <View  style={[styles.ViewPa, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextA6, { color: theme.colors.strong }]} >
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
  } style={styles.TouchableC6} >
        
      <View  style={[styles.ViewJa, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textgz, { color: theme.colors.background_inverse }]} >
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
  } style={styles.TouchableAi} >
        
      <View  style={[styles.View_5P, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextwH, { color: theme.colors.strong }]} >
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
  } style={styles.TouchableAS} >
        
      <View  style={[styles.ViewM1, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextvV, { color: theme.colors.background_inverse }]} >
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
  } style={styles.TouchableG8} >
        
      <View  style={[styles.View_3B, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextYT, { color: theme.colors.strong }]} >
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
  } style={styles.Touchablega} >
        
      <View  style={[styles.ViewoA, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_60, { color: theme.colors.background_inverse }]} >
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
  } style={styles.TouchableIx} >
        
      <View  style={[styles.ViewoJ, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextRN, { color: theme.colors.strong }]} >
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
  } style={styles.TouchableEA} >
        
      <View  style={[styles.Viewse, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextDU, { color: theme.colors.background_inverse }]} >
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
  } style={styles.TouchablekY} >
        
      <View  style={[styles.ViewIE, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textg7, { color: theme.colors.strong }]} >
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
  } style={styles.TouchableVn} >
        
      <View  style={[styles.Viewy2, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textd0, { color: theme.colors.background_inverse }]} >
        {"Teasers"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    <Divider  style={styles.Dividerv0} color={theme.colors.divider} />
      </View>
    <>{ Constants["toggleAdvancedFilters"] ? null : 
      <View   >
        
      <View  style={styles.VieweS} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleAdvancedFilters",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.Viewjo} >
        
      <Text  style={[styles.Textjp, { color: theme.colors.background_inverse }]} >
        {"Advanced Filters"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      </View>
    
      </View>
     }</><>{ !(Constants["toggleAdvancedFilters"]) ? null : 
      <View   >
        
      <View  style={styles.View_1s} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleAdvancedFilters",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewLY} >
        
      <Text  style={[styles.TextsX, { color: theme.colors.background_inverse }]} >
        {"Advanced Filters"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-up"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.View_94} >
        
      <Text  style={[styles.TextZb, { color: theme.colors.background_inverse }]} >
        {"Favorites/Underdogs"}
      </Text>
    
      <View  style={styles.ViewfF} >
        <>{ !(filterAllLeagues(Constants["filterUnderdog"])) ? null : 
      <Touchable  style={styles.Touchable_1z} >
        
      <View  style={[styles.ViewZC, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_3A, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterAllLeagues(Constants["filterUnderdog"]) ? null : 
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
  } style={styles.TouchableJY} >
        
      <View  style={[styles.ViewMM, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_3K, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterUnderdogButton("favorite")) ? null : 
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
  } style={styles.Touchable_7C} >
        
      <View  style={[styles.ViewbH, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextCw, { color: theme.colors.strong }]} >
        {"Favorites"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterUnderdogButton("favorite") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addUnderdogFilter("favorite");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableaV} >
        
      <View  style={[styles.Viewk9, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textg0, { color: theme.colors.background_inverse }]} >
        {"Favorites"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterUnderdogButton("underdog")) ? null : 
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
  } style={styles.Touchablee8} >
        
      <View  style={[styles.Viewrt, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_2W, { color: theme.colors.strong }]} >
        {"Underdogs"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterUnderdogButton("underdog") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addUnderdogFilter("underdog");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableeC} >
        
      <View  style={[styles.ViewTa, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textab, { color: theme.colors.background_inverse }]} >
        {"Underdogs"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    <Divider  style={styles.DividerTg} color={theme.colors.divider} />
      </View>
    
      <View  style={styles.ViewgU} >
        
      <Text  style={[styles.TextKr, { color: theme.colors.background_inverse }]} >
        {"Overs/Unders"}
      </Text>
    
      <View  style={styles.View_9v} >
        <>{ !(filterAllLeagues(Constants["filterUnder"])) ? null : 
      <Touchable  style={styles.TouchableoX} >
        
      <View  style={[styles.ViewQs, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextmA, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterAllLeagues(Constants["filterUnder"]) ? null : 
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
  } style={styles.TouchablePB} >
        
      <View  style={[styles.View_5Y, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textkr, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterUnderButton("Over")) ? null : 
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
  } style={styles.TouchableA4} >
        
      <View  style={[styles.Views3, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextyI, { color: theme.colors.strong }]} >
        {"Overs"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterUnderButton("Over") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addUnderFilter("Over");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableTW} >
        
      <View  style={[styles.ViewuC, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_3w, { color: theme.colors.background_inverse }]} >
        {"Overs"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterUnderButton("Under")) ? null : 
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
  } style={styles.Touchable_1N} >
        
      <View  style={[styles.Viewad, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Text_1G, { color: theme.colors.strong }]} >
        {"Unders"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterUnderButton("Under") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addUnderFilter("Under");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableB4} >
        
      <View  style={[styles.ViewMs, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextNb, { color: theme.colors.background_inverse }]} >
        {"Unders"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    <Divider  style={styles.Dividervu} color={theme.colors.divider} />
      </View>
    
      <View  style={styles.View_8q} >
        
      <Text  style={[styles.TextXM, { color: theme.colors.background_inverse }]} >
        {"Outcome"}
      </Text>
    
      <View  style={styles.Viewmx} >
        <>{ !(filterAllLeagues(Constants["filterOutcome"])) ? null : 
      <Touchable  style={styles.TouchableBZ} >
        
      <View  style={[styles.View_4I, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextVF, { color: theme.colors.strong }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterAllLeagues(Constants["filterOutcome"]) ? null : 
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
  } style={styles.TouchableLw} >
        
      <View  style={[styles.ViewIb, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textuk, { color: theme.colors.background_inverse }]} >
        {"All"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterOutcomeButton("win")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeOutcomeFilter("win");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableyW} >
        
      <View  style={[styles.Viewbp, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textgf, { color: theme.colors.strong }]} >
        {"Wins"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterOutcomeButton("win") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addOutcomeFilter("win");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableCZ} >
        
      <View  style={[styles.View_7O, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textnf, { color: theme.colors.background_inverse }]} >
        {"Wins"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterOutcomeButton("loss")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeOutcomeFilter("loss");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableBg} >
        
      <View  style={[styles.ViewaG, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextEw, { color: theme.colors.strong }]} >
        {"Losses"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterOutcomeButton("loss") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addOutcomeFilter("loss");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableSE} >
        
      <View  style={[styles.ViewT9, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.Texta9, { color: theme.colors.background_inverse }]} >
        {"Losses"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ !(filterOutcomeButton("push")) ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await removeOutcomeFilter("push");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchablekG} >
        
      <View  style={[styles.ViewaC, { backgroundColor: theme.colors.primary, borderRadius: 6 }]} >
        
      <Text  style={[styles.Textez, { color: theme.colors.strong }]} >
        {"Pushes"}
      </Text>
    
      </View>
    
      </Touchable>
     }</><>{ filterOutcomeButton("push") ? null : 
      <Touchable onPress={
    async () => { 
      try {
         await addOutcomeFilter("push");
  setDummyTwo((dummyTwo) + 1);
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_9d} >
        
      <View  style={[styles.Viewk2, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} >
        
      <Text  style={[styles.TextpF, { color: theme.colors.background_inverse }]} >
        {"Pushes"}
      </Text>
    
      </View>
    
      </Touchable>
     }</>
      </View>
    <Divider  style={styles.Divider_62} color={theme.colors.divider} />
      </View>
    
      </View>
     }</>
      </ScrollView>
    
      <View  style={styles.ViewAW} >
        
      <Surface  style={{ backgroundColor: theme.colors.background, borderRadius: 6 }} elevation={2}>
        
      <Touchable onPress={
     () => { 
      try {
          setLoadingApply(true);
  setGlobalVariableValue({
          key: "filterLeagueApply",
          value: arrayChange(Constants["filterLeague"])
        });
  setGlobalVariableValue({
          key: "filterBetTypeApply",
          value: arrayChange(Constants["filterBetType"])
        });
  setGlobalVariableValue({
          key: "filterSportsbookApply",
          value: arrayChange(Constants["filterSportsbook"])
        });
  setGlobalVariableValue({
          key: "filterDateApply",
          value: arrayChange(Constants["filterDate"])
        });
  setGlobalVariableValue({
          key: "filterUnderdogApply",
          value: arrayChange(Constants["filterUnderdog"])
        });
  setGlobalVariableValue({
          key: "filterUnderApply",
          value: arrayChange(Constants["filterUnder"])
        });
  setGlobalVariableValue({
          key: "filterOutcomeApply",
          value: arrayChange(Constants["filterOutcome"])
        });
  setGlobalVariableValue({
          key: "toggleFiltersModal",
          value: false
        });
  setLoadingApply(false);
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={[styles.ViewIM, { borderRadius: 6, backgroundColor: theme.colors.good }]} >
        <>{ loadingApply ? null : 
      <Text  style={[styles.Textb5, { color: theme.colors.background_inverse }]} >
        {"Apply"}{countFilters()}
      </Text>
     }</><>{ !(loadingApply) ? null : <ActivityIndicator  style={styles.ActivityIndicatorWg} size={"small"} animating={true} hidesWhenStopped={true} /> }</>
      </View>
    
      </Touchable>
    
      </Surface>
    
      </View>
    
      </View>
    
      </Modal>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Viewz7: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, ImagenW: {
opacity: 1,
height: 50,
width: 125,
}, ViewjD: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
}, TextyI: {
fontFamily: 'System', fontWeight: '200',
fontSize: 14,
}, ViewBD: {
paddingRight: 16,
paddingLeft: 16,
}, ViewFk: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '33%',
height: 50,
}, ViewMr: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewlM: {
justifyContent: 'center',
}, TextOF: {
fontSize: 10,
}, ViewL9: {
justifyContent: 'center',
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, ViewLU: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, ImageCb: {
opacity: 1,
height: 50,
width: 125,
}, Viewpv: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
}, Textoh: {
fontFamily: 'System', fontWeight: '200',
fontSize: 14,
}, View_3U: {
paddingRight: 16,
paddingLeft: 16,
}, ViewLf: {
alignItems: 'flex-end',
justifyContent: 'center',
paddingLeft: 16,
paddingRight: 16,
height: 50,
}, Viewjg: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '33%',
height: 50,
}, ViewXe: {
flexDirection: 'row',
justifyContent: 'space-between',
}, Viewk0: {
justifyContent: 'center',
}, Texthn: {
fontSize: 16,
fontFamily: 'System', fontWeight: '700',
marginRight: 3,
}, FetchW5: {
minHeight: 40,
}, Viewm1: {
flexDirection: 'row',
alignItems: 'center',
}, TexteV: {
fontSize: 12,
marginTop: 10,
}, TextInputdX: {
borderLeftWidth: 1,
borderRightWidth: 1,
borderTopWidth: 1,
borderBottomWidth: 1,
paddingLeft: 8,
paddingRight: 8,
paddingTop: 8,
paddingBottom: 8,
borderRadius: 8,
}, IconButtonjM: {
marginLeft: 6,
}, Viewvl: {
flexDirection: 'row',
marginTop: 20,
alignItems: 'center',
}, ViewGX: {
flex: 1,
}, Viewyt: {
paddingTop: 12,
paddingBottom: 12,
paddingLeft: '4%',
paddingRight: '4%',
flexDirection: 'row',
}, ImageDi: {
width: '100%',
height: '100%',
}, VieweL: {
alignItems: 'center',
width: 375,
height: 1000,
}, ScrollViewAnContent: {
alignItems: 'center',
}, ViewTD: {
paddingBottom: 150,
}, IconJ5: {
marginRight: 6,
}, TextGt: {
fontFamily: 'System', fontWeight: '700',
fontSize: 16,
}, Textkx: {
fontSize: 12,
}, View_4o: {
flex: 1,
marginRight: 6,
}, FetchuO: {
minHeight: 40,
}, ViewE0: {
flexDirection: 'row',
alignItems: 'center',
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 6,
paddingBottom: 6,
}, ImagemV: {
width: '100%',
height: '100%',
}, Viewb6: {
alignItems: 'center',
width: 375,
height: 1000,
}, ScrollViewukContent: {
alignItems: 'center',
}, ViewXj: {
paddingBottom: 135,
}, Text_0B: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Viewrz: {
marginRight: 20,
}, TextSc: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TouchableOT: {
marginRight: 20,
}, TextoG: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Viewb4: {
marginRight: 20,
}, TextSR: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Touchablejr: {
marginRight: 20,
}, Textcm: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextKh: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewBU: {
marginLeft: '4%',
marginTop: 18,
marginRight: '4%',
flexDirection: 'row',
}, Viewhb: {
height: 100,
marginLeft: '4%',
marginRight: '4%',
marginTop: 20,
marginBottom: 14,
}, Viewc8: {
height: 100,
marginLeft: '4%',
marginRight: '4%',
marginTop: 20,
marginBottom: 14,
}, Text_1y: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewoK: {
flexDirection: 'row',
alignItems: 'center',
}, TouchableMj: {
marginRight: 6,
}, ViewvJ: {
opacity: 1,
marginTop: 18,
flexDirection: 'row',
alignItems: 'center',
marginLeft: '4%',
marginRight: '4%',
}, Viewcb: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
}, TextwY: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, ViewaE: {
justifyContent: 'center',
width: 90,
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TexteT: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, View_10: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Text_4I: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, Viewj4: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextaT: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, ViewVN: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextJl: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, ViewNB: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextrF: {
fontSize: 10,
textAlign: 'center',
fontFamily: 'System', fontWeight: '700',
}, ViewAC: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextGT: {
fontSize: 10,
textAlign: 'center',
fontFamily: 'System', fontWeight: '700',
}, ViewS6: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, ViewMB: {
flexDirection: 'row',
marginBottom: 12,
}, DividerDv: {
height: 2,
marginLeft: 3,
marginRight: 3,
}, Text_7X: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, ViewTu: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
paddingLeft: 1,
paddingRight: 1,
}, TextDu: {
fontSize: 10,
textAlign: 'center',
}, ViewnD: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextMx: {
fontSize: 10,
textAlign: 'center',
}, Texto5: {
fontSize: 10,
textAlign: 'center',
}, TextMa: {
fontSize: 10,
textAlign: 'center',
}, Viewv8: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TexttK: {
fontSize: 10,
textAlign: 'center',
}, Textap: {
fontSize: 10,
textAlign: 'center',
}, Textfe: {
fontSize: 10,
textAlign: 'center',
}, ViewUg: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Textd2: {
fontSize: 10,
textAlign: 'center',
}, Textvt: {
fontSize: 10,
textAlign: 'center',
}, TextkO: {
fontSize: 10,
textAlign: 'center',
}, ViewF5: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextwL: {
fontSize: 10,
textAlign: 'center',
}, TextVj: {
fontSize: 10,
textAlign: 'center',
}, Text_41: {
fontSize: 10,
textAlign: 'center',
}, Viewq4: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextRm: {
fontSize: 10,
textAlign: 'center',
}, Text_8s: {
fontSize: 10,
textAlign: 'center',
}, TextCn: {
fontSize: 10,
textAlign: 'center',
}, ViewMH: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextnW: {
fontSize: 10,
textAlign: 'center',
}, Viewza: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, ViewSY: {
flexDirection: 'row',
marginBottom: 6,
minHeight: 24,
}, DividerbK: {
height: 1,
marginLeft: 3,
marginRight: 3,
}, Viewhf: {
marginTop: 6,
}, TextSQ: {
fontSize: 12,
fontFamily: 'System', fontWeight: '400',
textAlign: 'center',
}, ViewfC: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
paddingLeft: 1,
paddingRight: 1,
}, Text_41: {
fontSize: 10,
textAlign: 'center',
}, ViewVU: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextcN: {
fontSize: 10,
textAlign: 'center',
}, TextOh: {
fontSize: 10,
textAlign: 'center',
}, TextOG: {
fontSize: 10,
textAlign: 'center',
}, ViewKT: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TexteD: {
fontSize: 10,
textAlign: 'center',
}, TextSN: {
fontSize: 10,
textAlign: 'center',
}, TextvY: {
fontSize: 10,
textAlign: 'center',
}, Viewwe: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextVi: {
fontSize: 10,
textAlign: 'center',
}, TextNo: {
fontSize: 10,
textAlign: 'center',
}, Text_2D: {
fontSize: 10,
textAlign: 'center',
}, View_99: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextiS: {
fontSize: 10,
textAlign: 'center',
}, Textrc: {
fontSize: 10,
textAlign: 'center',
}, Textat: {
fontSize: 10,
textAlign: 'center',
}, View_3n: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Textrd: {
fontSize: 10,
textAlign: 'center',
}, TexteU: {
fontSize: 10,
textAlign: 'center',
}, Textbm: {
fontSize: 10,
textAlign: 'center',
}, ViewtN: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingRight: 1,
paddingLeft: 1,
}, Text_1j: {
fontSize: 10,
textAlign: 'center',
}, View_6D: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Viewa8: {
flexDirection: 'row',
marginBottom: 6,
minHeight: 24,
}, DivideraE: {
height: 1,
marginLeft: 3,
marginRight: 3,
}, ViewaR: {
marginTop: 6,
}, TextUL: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, ViewP3: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
paddingLeft: 1,
paddingRight: 1,
}, TextmO: {
fontSize: 10,
textAlign: 'center',
}, Viewv0: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Textb7: {
fontSize: 10,
textAlign: 'center',
}, Text_2j: {
fontSize: 10,
textAlign: 'center',
}, Texto5: {
fontSize: 10,
textAlign: 'center',
}, ViewJA: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextQs: {
fontSize: 10,
textAlign: 'center',
}, Text_9Q: {
fontSize: 10,
textAlign: 'center',
}, Textgz: {
fontSize: 10,
textAlign: 'center',
}, View_02: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextX5: {
fontSize: 10,
textAlign: 'center',
}, Text_7x: {
fontSize: 10,
textAlign: 'center',
}, Textqy: {
fontSize: 10,
textAlign: 'center',
}, ViewU9: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingRight: 1,
paddingLeft: 1,
}, Textfw: {
fontSize: 10,
textAlign: 'center',
}, Text_2u: {
fontSize: 10,
textAlign: 'center',
}, Text_9Y: {
fontSize: 10,
textAlign: 'center',
}, ViewKA: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Textmv: {
fontSize: 10,
textAlign: 'center',
}, TextxH: {
fontSize: 10,
textAlign: 'center',
}, TextGb: {
fontSize: 10,
textAlign: 'center',
}, ViewwB: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingRight: 1,
paddingLeft: 1,
}, Textry: {
fontSize: 10,
textAlign: 'center',
}, ViewwI: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, ViewnJ: {
flexDirection: 'row',
minHeight: 24,
}, ViewBG: {
marginTop: 12,
}, SurfaceJi: {
paddingTop: 12,
paddingBottom: 12,
}, ScrollView_11Content: {
justifyContent: 'center',
paddingLeft: '4%',
paddingRight: '4%',
}, ViewdM: {
marginTop: 10,
}, TextqN: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewCd: {
flexDirection: 'row',
alignItems: 'center',
}, Touchableb8: {
marginRight: 6,
}, ViewD3: {
opacity: 1,
marginTop: 18,
flexDirection: 'row',
alignItems: 'center',
}, Viewir: {
marginLeft: '4%',
marginRight: '4%',
}, TextOm: {
fontFamily: 'System', fontWeight: '700',
}, ViewSS: {
alignItems: 'center',
marginTop: 18,
}, ViewPf: {
alignContent: 'center',
marginRight: 6,
alignItems: 'center',
justifyContent: 'center',
}, TextbH: {
fontFamily: 'System', fontWeight: '700',
}, TextqS: {
fontSize: 14,
fontFamily: 'System', fontWeight: '700',
}, FlatListpDContent: {
flex: 1,
}, Textjy: {
fontFamily: 'System', fontWeight: '700',
}, TextfT: {
fontFamily: 'System', fontWeight: '700',
}, ViewAK: {
alignContent: 'center',
marginRight: 1,
alignItems: 'center',
justifyContent: 'center',
}, Textmz: {
fontSize: 12,
}, TexttJ: {
fontSize: 12,
}, Viewgy: {
justifyContent: 'center',
flex: 1,
}, ViewBb: {
flexDirection: 'row',
alignItems: 'center',
}, FlatListQkContent: {
flex: 1,
}, TextBe: {
fontSize: 12,
}, Text_7j: {
fontSize: 12,
}, Image_2n: {
width: 12,
height: 12,
}, ImageNp: {
width: 12,
height: 12,
}, Image_8n: {
width: 12,
height: 12,
}, Imagey1: {
width: 12,
height: 12,
}, ImageQm: {
width: 12,
height: 12,
}, Imagew2: {
width: 12,
height: 12,
}, ImageJQ: {
width: 12,
height: 12,
}, Image_5o: {
width: 12,
height: 12,
}, ImageBQ: {
width: 12,
height: 12,
}, ImageuS: {
width: 12,
height: 12,
}, ImagejO: {
width: 12,
height: 12,
}, Imagekp: {
width: 12,
height: 12,
}, Viewd3: {
flexDirection: 'row',
marginLeft: 5,
alignItems: 'center',
}, ViewCr: {
flexDirection: 'row',
}, FlatListbJContent: {
flex: 1,
}, Viewiy: {
marginRight: 6,
justifyContent: 'center',
flex: 1,
}, ViewCN: {
flexDirection: 'row',
width: '70%',
}, Text_6T: {
fontSize: 8,
}, TextR7: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, Texti4: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, Textsx: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, TextTr: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, TextSj: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, View_8D: {
alignItems: 'flex-end',
justifyContent: 'center',
flex: 1,
}, Textk7: {
fontSize: 8,
}, ViewSg: {
justifyContent: 'space-between',
alignItems: 'flex-end',
}, Viewys: {
flexDirection: 'row',
justifyContent: 'flex-end',
width: '30%',
}, ViewYa: {
paddingLeft: 6,
paddingTop: 6,
paddingRight: 6,
paddingBottom: 6,
borderTopWidth: 1,
borderRightWidth: 1,
borderLeftWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
justifyContent: 'space-between',
}, TouchableYw: {
marginTop: 6,
}, ViewBu: {
alignContent: 'center',
marginRight: 6,
alignItems: 'center',
justifyContent: 'center',
}, TextyF: {
fontFamily: 'System', fontWeight: '700',
}, TextEf: {
fontFamily: 'System', fontWeight: '700',
}, FlatListQ5Content: {
flex: 1,
}, TextEs: {
fontFamily: 'System', fontWeight: '700',
}, TextIq: {
fontFamily: 'System', fontWeight: '700',
}, ViewcK: {
alignContent: 'center',
marginRight: 1,
alignItems: 'center',
justifyContent: 'center',
}, Textov: {
fontSize: 12,
}, TextCE: {
fontSize: 12,
}, View_57: {
justifyContent: 'center',
flex: 1,
}, ViewPk: {
flexDirection: 'row',
alignItems: 'center',
}, FlatList_1CContent: {
flex: 1,
}, TextEe: {
fontSize: 12,
}, Textbq: {
fontSize: 12,
}, ViewQS: {
flexDirection: 'row',
}, FlatListiYContent: {
flex: 1,
}, ViewRa: {
marginRight: 6,
justifyContent: 'center',
flex: 1,
}, ViewiQ: {
flexDirection: 'row',
width: '60%',
}, TextRn: {
fontSize: 8,
}, TextGW: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, Textax: {
fontSize: 10,
}, ViewHB: {
justifyContent: 'center',
alignItems: 'flex-end',
}, Text_8Z: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, TextG6: {
fontSize: 10,
}, ViewCa: {
alignItems: 'flex-end',
justifyContent: 'center',
marginLeft: 10,
}, Viewok: {
flexDirection: 'row',
justifyContent: 'flex-end',
flex: 1,
}, TextIS: {
fontSize: 8,
}, ViewlM: {
width: '25%',
width: '40%',
alignItems: 'flex-end',
justifyContent: 'space-between',
}, ViewFI: {
paddingLeft: 6,
paddingTop: 6,
paddingRight: 6,
paddingBottom: 6,
borderTopWidth: 1,
borderRightWidth: 1,
borderLeftWidth: 1,
borderBottomWidth: 1,
flexDirection: 'row',
justifyContent: 'space-between',
}, TouchableKt: {
marginTop: 6,
}, Textg7: {
fontSize: 18,
}, ViewZN: {
alignItems: 'center',
paddingRight: 16,
flexDirection: 'row',
height: 50,
}, ViewkM: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, ViewkT: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
}, ViewoN: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '33%',
}, ViewOh: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewLO: {
justifyContent: 'center',
alignItems: 'center',
marginRight: 3,
}, TextNp: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Textg5: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextTd: {
fontFamily: 'System', fontWeight: '700',
marginTop: 4,
}, TextMF: {
marginTop: 4,
}, View_2z: {
flex: 1,
}, TextyG: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextbW: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewH2: {
flexDirection: 'row',
flexDirection: 'row',
alignItems: 'center',
marginTop: 18,
marginLeft: '4%',
marginRight: '4%',
}, View_1W: {
marginTop: 10,
marginLeft: '4%',
marginRight: '4%',
}, Viewbk: {
height: '100%',
}, ModalUE: {
height: 25,
}, FlatList_6zContent: {
flex: 1,
}, ButtonOutlineJ6: {
backgroundColor: 'transparent',
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
}, ButtonOutline_67: {
backgroundColor: 'transparent',
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
}, Texts4: {
fontSize: 10,
textAlign: 'center',
marginTop: 12,
}, ViewHJ: {
alignItems: 'center',
marginTop: 32,
marginBottom: 10,
}, ViewTg: {
paddingBottom: 18,
marginLeft: '4%',
marginRight: '4%',
marginTop: 4,
}, TextYu: {
fontSize: 18,
}, ViewOx: {
flexDirection: 'row',
alignItems: 'center',
paddingRight: 16,
}, View_8p: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, TextHF: {
fontSize: 18,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, ViewQc: {
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
height: 50,
}, Image_5D: {
height: 23,
width: 75,
}, ViewVy: {
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
height: 23,
}, TextD7: {
fontSize: 8,
textAlign: 'right',
fontFamily: 'System', fontWeight: '300',
fontFamily: 'System', fontWeight: '400',
}, ViewV2: {
alignItems: 'flex-end',
width: '33%',
paddingRight: 16,
justifyContent: 'center',
}, ViewXO: {
flexDirection: 'row',
justifyContent: 'space-between',
}, SurfaceaB: {
minHeight: 40,
}, TextX1: {
fontFamily: 'System', fontWeight: '400',
fontSize: 10,
}, Textun: {
fontSize: 8,
fontFamily: 'System', fontWeight: '400',
}, ViewI8: {
paddingLeft: 4,
paddingRight: 4,
paddingTop: 2,
paddingBottom: 2,
marginRight: 2,
marginTop: 2,
}, Text_6n: {
fontSize: 8,
fontFamily: 'System', fontWeight: '400',
}, ViewKp: {
paddingLeft: 4,
paddingRight: 4,
paddingTop: 2,
paddingBottom: 2,
marginRight: 2,
marginTop: 2,
}, FlatListyuContent: {
flex: 1,
}, ViewhH: {
flexWrap: 'wrap',
flexDirection: 'row',
}, ViewGh: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 8,
}, Viewz1: {
height: 100,
marginTop: 10,
marginBottom: 10,
marginLeft: '4%',
marginRight: '4%',
}, ViewEW: {
marginTop: 10,
height: 100,
marginBottom: 10,
marginLeft: '4%',
marginRight: '4%',
}, ViewrK: {
justifyContent: 'center',
alignItems: 'center',
alignContent: 'center',
marginRight: 2,
}, TextpV: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, TextHo: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, TextZH: {
fontSize: 10,
}, FlatListxpContent: {
flex: 1,
}, Text_2d: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, TextHc: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, ViewCm: {
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
marginRight: 1,
}, Text_9a: {
fontSize: 10,
}, TextLu: {
fontSize: 10,
}, ViewhT: {
justifyContent: 'center',
flex: 1,
}, Vieway: {
flexDirection: 'row',
alignItems: 'center',
}, FlatListpbContent: {
flex: 1,
}, Vieweo: {
justifyContent: 'center',
flex: 1,
}, Viewld: {
flexDirection: 'row',
width: '75%',
}, TextiC: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, Text_3c: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, TextO1: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, TextnC: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, TextsN: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, View_3v: {
alignItems: 'flex-end',
justifyContent: 'center',
flex: 1,
}, Viewpm: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '25%',
}, Viewe3: {
flexDirection: 'row',
justifyContent: 'space-between',
paddingTop: 2,
paddingBottom: 2,
paddingLeft: 2,
paddingRight: 2,
}, Surface_86: {
marginTop: 3,
}, ViewxH: {
justifyContent: 'center',
alignItems: 'center',
alignContent: 'center',
marginRight: 2,
}, TextTc: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, TextGw: {
fontFamily: 'System', fontWeight: '700',
fontSize: 12,
}, TextL3: {
fontSize: 10,
}, FlatListxBContent: {
flex: 1,
}, VieweU: {
alignItems: 'center',
justifyContent: 'center',
alignContent: 'center',
marginRight: 1,
}, TextOF: {
fontSize: 10,
}, Textpx: {
fontSize: 10,
}, ViewPh: {
justifyContent: 'center',
flex: 1,
}, Viewyn: {
flexDirection: 'row',
alignItems: 'center',
}, FlatListuTContent: {
flex: 1,
}, Viewom: {
justifyContent: 'center',
flex: 1,
}, Viewyi: {
flexDirection: 'row',
width: '75%',
}, TextGz: {
fontSize: 10,
fontFamily: 'System', fontWeight: '700',
}, TextWQ: {
fontSize: 8,
}, Viewif: {
alignItems: 'flex-end',
justifyContent: 'center',
flex: 1,
}, Textrs: {
fontSize: 10,
fontFamily: 'System', fontWeight: '700',
}, Text_1O: {
fontSize: 8,
}, Viewee: {
alignItems: 'flex-end',
justifyContent: 'center',
flex: 1,
marginLeft: 3,
}, ViewJO: {
flexDirection: 'row',
justifyContent: 'flex-end',
flex: 1,
}, Views4: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '25%',
}, View_4G: {
flexDirection: 'row',
justifyContent: 'space-between',
paddingTop: 2,
paddingBottom: 2,
paddingLeft: 2,
paddingRight: 2,
}, SurfacetG: {
marginTop: 3,
}, FlatListaxContent: {
flex: 1,
}, ViewOm: {
paddingLeft: '4%',
paddingRight: '4%',
}, ScrollViewByContent: {
paddingBottom: 10,
}, IconLj: {
marginRight: 5,
}, Textam: {
fontSize: 12,
}, ViewoR: {
flexDirection: 'row',
alignItems: 'center',
paddingTop: 3,
paddingBottom: 16,
}, View_8N: {
alignItems: 'center',
}, ViewNJ: {
height: '100%',
}, Fetchk6: {
minHeight: 40,
}, TextIH: {
fontSize: 18,
}, ViewbK: {
alignItems: 'center',
paddingRight: 16,
flexDirection: 'row',
height: 50,
paddingLeft: 16,
}, ActivityIndicatorDT: {
width: 36,
height: 36,
marginLeft: 16,
}, View_8o: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, Text_2K: {
fontSize: 18,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, ViewPJ: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
}, TextJt: {
fontSize: 18,
}, View_3X: {
alignItems: 'flex-end',
paddingRight: 16,
height: 50,
justifyContent: 'center',
paddingLeft: 16,
}, ActivityIndicatoruw: {
width: 36,
height: 36,
marginRight: 16,
}, ViewZI: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '33%',
}, Viewza: {
flexDirection: 'row',
justifyContent: 'space-between',
}, SurfaceYk: {
minHeight: 40,
}, TextLr: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, TexthP: {
fontFamily: 'System', fontWeight: '700',
}, ViewbT: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableaL: {
marginTop: 8,
}, TextHk: {
fontFamily: 'System', fontWeight: '700',
}, Viewzy: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchablebU: {
marginTop: 8,
}, FlatList_3LContent: {
flexDirection: 'row',
flexWrap: 'wrap',
}, FetchJf: {
minHeight: 40,
}, View_04: {
marginTop: 6,
}, Divider_4Q: {
height: 1,
marginTop: 18,
}, Viewmr: {
paddingLeft: '4%',
paddingTop: 28,
paddingRight: '4%',
}, TextZN: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextuH: {
fontFamily: 'System', fontWeight: '700',
}, ViewpG: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableFN: {
marginTop: 8,
}, Text_5C: {
fontFamily: 'System', fontWeight: '700',
}, ViewWW: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchablecK: {
marginTop: 8,
}, TexthN: {
fontFamily: 'System', fontWeight: '700',
}, ViewnF: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableUL: {
marginTop: 8,
}, Text_5V: {
fontFamily: 'System', fontWeight: '700',
}, Viewu5: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchable_8C: {
marginTop: 8,
}, Textrw: {
fontFamily: 'System', fontWeight: '700',
}, ViewhB: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableQL: {
marginTop: 8,
}, TexthE: {
fontFamily: 'System', fontWeight: '700',
}, Viewuf: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchablelc: {
marginTop: 8,
}, TextOQ: {
fontFamily: 'System', fontWeight: '400',
fontFamily: 'System', fontWeight: '700',
}, ViewZ5: {
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_0u: {
marginTop: 8,
}, TextKo: {
fontFamily: 'System', fontWeight: '700',
}, Viewmx: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableW0: {
marginTop: 8,
}, Text_79: {
fontFamily: 'System', fontWeight: '700',
}, Viewi7: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchablexn: {
marginTop: 8,
}, TextFf: {
fontFamily: 'System', fontWeight: '700',
}, ViewrY: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableCx: {
marginTop: 8,
}, TextHf: {
fontFamily: 'System', fontWeight: '700',
}, ViewYO: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableiY: {
marginTop: 8,
}, Textqj: {
fontFamily: 'System', fontWeight: '700',
}, ViewbB: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableVH: {
marginTop: 8,
}, TextoW: {
fontFamily: 'System', fontWeight: '700',
}, ViewHa: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchablerl: {
marginTop: 8,
}, TextHW: {
fontFamily: 'System', fontWeight: '700',
}, ViewZu: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, Touchable_2n: {
marginTop: 8,
}, Textej: {
fontFamily: 'System', fontWeight: '700',
}, ViewlO: {
paddingTop: 8,
marginRight: 8,
paddingLeft: 16,
paddingBottom: 8,
paddingRight: 16,
}, TouchableNU: {
marginTop: 8,
}, Viewwq: {
marginBottom: 18,
flexDirection: 'row',
flexWrap: 'wrap',
}, DatePickertx: {
marginBottom: 8,
}, DatePicker_6F: {
marginBottom: 8,
}, ViewmP: {
minHeight: 50,
marginTop: 8,
flexWrap: 'wrap',
flexDirection: 'row',
}, Viewc3: {
minHeight: 50,
marginTop: 6,
}, DividerrB: {
marginTop: 18,
height: 1,
}, ViewBL: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 28,
}, TextrU: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewTW: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, TouchablebU: {
marginTop: 8,
}, View_9D: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, TouchablesZ: {
marginTop: 8,
}, ViewIn: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, Touchable_0G: {
marginTop: 8,
}, Viewml: {
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
marginRight: 8,
}, Touchable_8o: {
marginTop: 8,
}, ViewJa: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, TouchableQP: {
marginTop: 8,
}, Viewr1: {
paddingLeft: 16,
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
}, Touchablel5: {
marginTop: 8,
}, Viewa3: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableQl: {
marginTop: 8,
}, ViewKq: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableB3: {
marginTop: 8,
}, Viewf6: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_0T: {
marginTop: 8,
}, View_79: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableVG: {
marginTop: 8,
}, ViewTQ: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_1n: {
marginTop: 8,
}, Viewa3: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableBc: {
marginTop: 8,
}, ViewbS: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchable_5R: {
marginTop: 8,
}, ViewJ9: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablebb: {
marginTop: 8,
}, View_6t: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableQE: {
marginTop: 8,
}, ViewdK: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableKK: {
marginTop: 8,
}, ViewbT: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, Touchablesa: {
marginTop: 8,
}, Viewp5: {
marginRight: 8,
paddingBottom: 8,
paddingTop: 8,
paddingRight: 16,
paddingLeft: 16,
}, TouchableGu: {
marginTop: 8,
}, ViewRW: {
flexWrap: 'wrap',
flexDirection: 'row',
marginTop: 6,
}, Divideruy: {
marginTop: 18,
height: 1,
}, ViewlD: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 28,
}, TextCA: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Textbe: {
fontFamily: 'System', fontWeight: '700',
}, ViewGg: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchableoo: {
marginTop: 8,
}, TextyJ: {
fontFamily: 'System', fontWeight: '700',
}, ViewkK: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchablevM: {
marginTop: 8,
}, TextdG: {
fontFamily: 'System', fontWeight: '700',
}, ViewDA: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableeW: {
marginTop: 8,
}, TextHF: {
fontFamily: 'System', fontWeight: '700',
}, Viewn1: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchablek3: {
marginTop: 8,
}, TextWJ: {
fontFamily: 'System', fontWeight: '700',
}, Viewgm: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchable_8N: {
marginTop: 8,
}, TextuZ: {
fontFamily: 'System', fontWeight: '700',
}, ViewfW: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchablec1: {
marginTop: 8,
}, TextA6: {
fontFamily: 'System', fontWeight: '700',
}, ViewPa: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchabler2: {
marginTop: 8,
}, Textgz: {
fontFamily: 'System', fontWeight: '700',
}, ViewJa: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableC6: {
marginTop: 8,
}, TextwH: {
fontFamily: 'System', fontWeight: '700',
}, View_5P: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableAi: {
marginTop: 8,
}, TextvV: {
fontFamily: 'System', fontWeight: '700',
}, ViewM1: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableAS: {
marginTop: 8,
}, TextYT: {
fontFamily: 'System', fontWeight: '700',
}, View_3B: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableG8: {
marginTop: 8,
}, Text_60: {
fontFamily: 'System', fontWeight: '700',
}, ViewoA: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchablega: {
marginTop: 8,
}, TextRN: {
fontFamily: 'System', fontWeight: '700',
}, ViewoJ: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableIx: {
marginTop: 8,
}, TextDU: {
fontFamily: 'System', fontWeight: '700',
}, Viewse: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableEA: {
marginTop: 8,
}, Textg7: {
fontFamily: 'System', fontWeight: '700',
}, ViewIE: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchablekY: {
marginTop: 8,
}, Textd0: {
fontFamily: 'System', fontWeight: '700',
}, Viewy2: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableVn: {
marginTop: 8,
}, Textkb: {
fontFamily: 'System', fontWeight: '700',
}, View_1Q: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableFL: {
marginTop: 8,
}, Texto6: {
fontFamily: 'System', fontWeight: '700',
}, View_6V: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchablejd: {
marginTop: 8,
}, ViewsH: {
flexDirection: 'row',
flexWrap: 'wrap',
marginTop: 6,
}, Dividerv0: {
height: 1,
marginTop: 18,
}, ViewRA: {
paddingTop: 28,
paddingLeft: '4%',
paddingRight: '4%',
}, Textjp: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Viewjo: {
flexDirection: 'row',
alignItems: 'center',
}, VieweS: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 28,
}, TextsX: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewLY: {
flexDirection: 'row',
alignItems: 'center',
}, View_1s: {
paddingTop: 28,
paddingLeft: '4%',
paddingRight: '4%',
}, TextZb: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Text_3A: {
fontFamily: 'System', fontWeight: '700',
}, ViewZC: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchable_1z: {
marginTop: 8,
}, Text_3K: {
fontFamily: 'System', fontWeight: '700',
}, ViewMM: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableJY: {
marginTop: 8,
}, TextCw: {
fontFamily: 'System', fontWeight: '700',
}, ViewbH: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchable_7C: {
marginTop: 8,
}, Textg0: {
fontFamily: 'System', fontWeight: '700',
}, Viewk9: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableaV: {
marginTop: 8,
}, Text_2W: {
fontFamily: 'System', fontWeight: '700',
}, Viewrt: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchablee8: {
marginTop: 8,
}, Textab: {
fontFamily: 'System', fontWeight: '700',
}, ViewTa: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableeC: {
marginTop: 8,
}, ViewfF: {
flexDirection: 'row',
flexWrap: 'wrap',
marginTop: 6,
}, DividerTg: {
height: 1,
marginTop: 18,
}, View_94: {
paddingTop: 28,
paddingLeft: '4%',
paddingRight: '4%',
}, TextKr: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextmA: {
fontFamily: 'System', fontWeight: '700',
}, ViewQs: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableoX: {
marginTop: 8,
}, Textkr: {
fontFamily: 'System', fontWeight: '700',
}, View_5Y: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchablePB: {
marginTop: 8,
}, TextyI: {
fontFamily: 'System', fontWeight: '700',
}, Views3: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableA4: {
marginTop: 8,
}, Text_3w: {
fontFamily: 'System', fontWeight: '700',
}, ViewuC: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableTW: {
marginTop: 8,
}, Text_1G: {
fontFamily: 'System', fontWeight: '700',
}, Viewad: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchable_1N: {
marginTop: 8,
}, TextNb: {
fontFamily: 'System', fontWeight: '700',
}, ViewMs: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableB4: {
marginTop: 8,
}, View_9v: {
flexDirection: 'row',
flexWrap: 'wrap',
marginTop: 6,
}, Dividervu: {
height: 1,
marginTop: 18,
}, ViewgU: {
paddingTop: 28,
paddingLeft: '4%',
paddingRight: '4%',
}, TextXM: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, TextVF: {
fontFamily: 'System', fontWeight: '700',
}, View_4I: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableBZ: {
marginTop: 8,
}, Textuk: {
fontFamily: 'System', fontWeight: '700',
}, ViewIb: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableLw: {
marginTop: 8,
}, Textgf: {
fontFamily: 'System', fontWeight: '700',
}, Viewbp: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableyW: {
marginTop: 8,
}, Textnf: {
fontFamily: 'System', fontWeight: '700',
}, View_7O: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableCZ: {
marginTop: 8,
}, TextEw: {
fontFamily: 'System', fontWeight: '700',
}, ViewaG: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableBg: {
marginTop: 8,
}, Texta9: {
fontFamily: 'System', fontWeight: '700',
}, ViewT9: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchableSE: {
marginTop: 8,
}, Textez: {
fontFamily: 'System', fontWeight: '700',
}, ViewaC: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, TouchablekG: {
marginTop: 8,
}, TextpF: {
fontFamily: 'System', fontWeight: '700',
}, Viewk2: {
paddingLeft: 16,
paddingRight: 16,
paddingTop: 8,
paddingBottom: 8,
marginRight: 8,
}, Touchable_9d: {
marginTop: 8,
}, Viewmx: {
flexDirection: 'row',
flexWrap: 'wrap',
marginTop: 6,
}, Divider_62: {
height: 1,
marginTop: 18,
}, View_8q: {
paddingTop: 28,
paddingLeft: '4%',
paddingRight: '4%',
}, ScrollViewICContent: {
paddingBottom: 100,
}, Textb5: {
fontFamily: 'System', fontWeight: '700',
fontSize: 16,
}, ActivityIndicatorWg: {
width: 36,
height: 36,
}, ViewIM: {
paddingBottom: 8,
paddingTop: 8,
paddingLeft: 16,
paddingRight: 16,
}, ViewAW: {
alignItems: 'flex-end',
position: 'absolute',
right: '4%',
bottom: 30,
}, ViewbX: {
height: '100%',
} });


export default withTheme(MyBetsScreen);