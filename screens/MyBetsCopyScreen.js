import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { ButtonOutline, Divider, Icon, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, FlatList, Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const MyBetsCopyScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      const setGlobalVariableValue = GlobalVariables.useSetValue();
      const typeParlayCompare = (type) => {
  return type === "parlay";
};

const positionSuffix = (position) => {
  return position == null ? "" : position + " ";
};

const eventNotExist = (event) => {
  return event == null;
};

const typePropCompare = (type) => {
  return type === "prop";
};

const gradedBetsFound = (topLevel) => {
    let counter = 0;
for (const input of topLevel) {
if (input.outcome != null) counter += 1;
}
return counter > 0 ? false : true;
  };

const pendingBetsFound = (topLevel) => {
    let counter = 0;
for (const input of topLevel) {
if (input.outcome === "pending") counter += 1;
}
return counter > 0 ? false : true;
  };

const winOutcomeCompare = (outcome) => {
  return outcome === "win" || outcome === "halfwin";
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

const cashoutOutcomeCompare = (outcome) => {
  return outcome === "cashout";
};

const futureBetExists = (future) => {
  return future == true ? "(Future) " : "";
};

const pendingArrayWorkaround = (test) => {
  console.log("pendingArray",test.length)
return test.filter(item => item.outcome === "pending")
};

const statusPendingCompare = (status) => {
  return status === "pending";
};

const lineSuffix = (line) => {
  if(line == null){return ""}
else if(line <= 0){return line + " "}
else if(line > 0){return "+" + line + " "};
};

const typeTeaserCompare = (type) => {
  return type === "teaser";
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

const typeSingleCompare = (type) => {
  return type === "single";
};

const parlayLegCount = (bets) => {
  return bets.length;
};

const spacingSuffix = (x) => {
  return x == null ? "" : x + " ";
};

const eventLeagueSuffix = (league) => {
  return league == null ? "" : league + " | ";
};

const applyFilters = (topLevelResponse) => {
  let filterData = topLevelResponse.filter(x => {
x == filter.league


})
return filterData
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

const typeStraightCompare = (type) => {
  return type === "straight";
};

const voidOutcomeCompare = (outcome) => {
  return outcome === "void";
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
 "St. Louis Cardinals": "STL",
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
 "Montreal Canadiens": "MTL",
 "Philadelphia Flyers": "PHI",
 "Pittsburgh Penguins": "PIT",
 "San Jose Sharks": "SJS",
 "Florida Panthers": "FLA",
 "Nashville Predators": "NSH",
 "Tampa Bay Lightning": "TBL",
 "Toronto Maple Leafs": "TOR",
 "St. Louis Blues": "STL",
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

const oddsAmericanSyntax = (oddsAmerican) => {
  return oddsAmerican < 0 ? "(" + oddsAmerican + ") " : "(+" + oddsAmerican + ") ";
};

const propositionTotal = (proposition) => {
  return proposition === "total";
};

const pendingOutcomeCompare = (outcome) => {
  return outcome === "pending" || outcome == null;
};

const propDetailsMetricSpecial = (metricSpecial) => {
  return metricSpecial == null ? "" : metricSpecial.charAt(0).toUpperCase() + metricSpecial.slice(1) + " ";
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

const pushOutcomeCompare = (outcome) => {
  return outcome === "push";
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

const typeMultilegCompare = (type) => {
  return type === "parlay" || type === "teaser";
};

const segmentExists = (segment) => {
  return segment == null ? "" : "(" + segment + ") ";
};

const notPendingOutcomeCompare = (outcome) => {
  return outcome !== "pending"
};

const futureHideDate = (future) => {
  return future == true;
};

const lossOutcomeCompare = (outcome) => {
  return outcome === "loss" || outcome === "halfloss";
};

const liveBetExists = (live) => {
  return live == true ? "(Live)" : "";
};
      
      const { theme } = props;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      

      return (
        
      <ScreenContainer   hasSafeArea={true}>
        
      <Surface  style={{ borderRadius: 0, backgroundColor: theme.colors.background }} elevation={3}>
        
      <View  style={[styles.ViewR6, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewGJ} pointerEvents={"auto"}>
        
      <View  style={[styles.Viewuh, { borderRadius: 0 }]} >
        
      <Touchable   >
        
      <View  style={styles.Viewtb} >
        <Icon  style={styles.IconNW} name={"Ionicons/ios-analytics-sharp"} color={theme.colors.light} size={28} /><Icon   name={"MaterialIcons/filter-alt"} color={theme.colors.primary} size={12} />
      <Text  style={[styles.TextX0, { color: theme.colors.background }]} >
        {"10"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.ViewLv} >
        <Image  style={styles.ImageeX} resizeMode={"contain"} source={Images.VaultLogoLightFontClearBackground} />
      </View>
    
      <View  style={[styles.ViewpJ, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewNH} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textz9, { color: theme.colors.light }]} >
        {"BETA"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      <ScrollView   showsVerticalScrollIndicator={true} bounces={true}>
        <>{ !(Constants["toggleMyBetsAnalysis"]) ? null : 
      <View   >
        
      <View   >
        
      <View  style={styles.ViewSU} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleMyBetsAnalysis",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableQG} >
        
      <View  style={styles.ViewtB} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextIF, { color: theme.colors.background_inverse }]} >
        {"Analysis"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-up-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    <Icon   color={theme.colors.primary} name={"MaterialIcons/filter-alt"} size={12} />
      </View>
    
      <View  style={styles.ViewVY} pointerEvents={"auto"}>
        
      <ScrollView   contentContainerStyle={styles.ScrollView_4vContent} showsVerticalScrollIndicator={false} bounces={false} horizontal={true} showsHorizontalScrollIndicator={false}>
        
      <Surface  style={[styles.SurfacedD, { backgroundColor: theme.colors.divider, borderRadius: 6 }]} elevation={1}>
        
      <View  style={styles.ViewCx} pointerEvents={"auto"}>
        <View  style={styles.ViewkE} pointerEvents={"auto"} />
      <View  style={styles.ViewRn} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextrO, { color: theme.colors.background_inverse }]} >
        {"Record"}
      </Text>
    
      </View>
    
      <View  style={styles.View_5U} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextHS, { color: theme.colors.background_inverse }]} >
        {"Net"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewC3} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textl1, { color: theme.colors.background_inverse }]} >
        {"Units"}
      </Text>
    
      </View>
    
      <View  style={styles.View_1b} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextVl, { color: theme.colors.background_inverse }]} >
        {"ROI"}
      </Text>
    
      </View>
    
      <View  style={styles.View_3v} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextLL, { color: theme.colors.background_inverse }]} >
        {"CLV"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewXz} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextSr, { color: theme.colors.background_inverse }]} >
        {"CLV Best Avail"}
      </Text>
    
      </View>
    
      <View  style={styles.View_15} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextMi, { color: theme.colors.background_inverse }]} >
        {"Avg Bet Size"}
      </Text>
    
      </View>
    
      </View>
    <Divider  style={styles.Dividerpt} color={theme.colors.light} />
      <View  style={styles.ViewQa} pointerEvents={"auto"}>
        
      <View  style={styles.ViewA8} pointerEvents={"auto"}>
        
      <View  style={styles.View_4w} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextfO, { color: theme.colors.background_inverse }]} >
        {"DraftKings"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewef} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_11, { color: theme.colors.background_inverse }]} >
        {"00-00-00 (000.0%)"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewAI} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_6m, { color: theme.colors.good }]} >
        {"$1000000.00"}
      </Text>
    
      <Text  style={[styles.TextUx, { color: theme.colors.background_inverse }]} >
        {"$0.00"}
      </Text>
    
      <Text  style={[styles.TextdS, { color: theme.colors.error }]} >
        {"-$1000000.00"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewL0} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texta0, { color: theme.colors.good }]} >
        {"+1000000.00U"}
      </Text>
    
      <Text  style={[styles.TextaR, { color: theme.colors.background_inverse }]} >
        {"+0.00U"}
      </Text>
    
      <Text  style={[styles.TextcM, { color: theme.colors.error }]} >
        {"-1000000.00U"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewga} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textg5, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.Text_9G, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.TextSn, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewVr} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextjD, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.TextBx, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.Text_2a, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewDf} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextnY, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.Texty0, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.Text_0s, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewab} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextnS, { color: theme.colors.background_inverse }]} >
        {"$000000.00"}
      </Text>
    
      </View>
    
      </View>
    <Divider  style={styles.Dividerig} color={theme.colors.light} />
      </View>
    
      <View  style={styles.Viewr1} pointerEvents={"auto"}>
        
      <View  style={styles.ViewEa} pointerEvents={"auto"}>
        
      <View  style={styles.ViewbJ} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextaR, { color: theme.colors.background_inverse }]} >
        {"DraftKings NFL"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewb1} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_79, { color: theme.colors.background_inverse }]} >
        {"00-00-00 (000.0%)"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewBi} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_94, { color: theme.colors.good }]} >
        {"$1000000.00"}
      </Text>
    
      <Text  style={[styles.Text_4Z, { color: theme.colors.background_inverse }]} >
        {"$0.00"}
      </Text>
    
      <Text  style={[styles.Textzu, { color: theme.colors.error }]} >
        {"-$1000000.00"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewyW} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextQ7, { color: theme.colors.good }]} >
        {"+1000000.00U"}
      </Text>
    
      <Text  style={[styles.Text_0Q, { color: theme.colors.background_inverse }]} >
        {"+0.00U"}
      </Text>
    
      <Text  style={[styles.Textsa, { color: theme.colors.error }]} >
        {"-1000000.00U"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewYH} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextoI, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.TextSm, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.Texte7, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewiB} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextRa, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.TextrN, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.Textyz, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewOb} pointerEvents={"auto"}>
        
      <Text  style={[styles.Texthh, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.Text_0k, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.TextIl, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.Vieww9} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_9C, { color: theme.colors.background_inverse }]} >
        {"$000000.00"}
      </Text>
    
      </View>
    
      </View>
    <Divider  style={styles.DividerJN} color={theme.colors.light} />
      </View>
    
      <View  style={styles.Viewd5} pointerEvents={"auto"}>
        
      <View  style={styles.View_5E} pointerEvents={"auto"}>
        
      <View  style={styles.ViewAC} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextBQ, { color: theme.colors.background_inverse }]} >
        {"Overall"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewPA} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextAe, { color: theme.colors.background_inverse }]} >
        {"00-00-00 (000.0%)"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewzg} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextgK, { color: theme.colors.good }]} >
        {"$1000000.00"}
      </Text>
    
      <Text  style={[styles.TextkZ, { color: theme.colors.background_inverse }]} >
        {"$0.00"}
      </Text>
    
      <Text  style={[styles.Text_2V, { color: theme.colors.error }]} >
        {"-$1000000.00"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewMG} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textrw, { color: theme.colors.good }]} >
        {"+1000000.00U"}
      </Text>
    
      <Text  style={[styles.Text_9w, { color: theme.colors.background_inverse }]} >
        {"+0.00U"}
      </Text>
    
      <Text  style={[styles.TextoL, { color: theme.colors.error }]} >
        {"-1000000.00U"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewQ7} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextPV, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.TextZR, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.Text_9Z, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewVq} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextoO, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.TextvT, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.TextDk, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.View_5W} pointerEvents={"auto"}>
        
      <Text  style={[styles.Text_1U, { color: theme.colors.good }]} >
        {"+100.0%"}
      </Text>
    
      <Text  style={[styles.Textra, { color: theme.colors.background_inverse }]} >
        {"+0.0%"}
      </Text>
    
      <Text  style={[styles.TextRE, { color: theme.colors.error }]} >
        {"-100.0%"}
      </Text>
    
      </View>
    
      <View  style={styles.ViewQv} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textm4, { color: theme.colors.background_inverse }]} >
        {"$000000.00"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      </ScrollView>
    
      </View>
    
      </View>
    
      </View>
     }</><>{ Constants["toggleMyBetsAnalysis"] ? null : 
      <View   >
        
      <View  style={styles.View_6B} >
        
      <View  style={styles.Viewaw} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleMyBetsAnalysis",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableHy} >
        
      <View  style={styles.ViewFU} pointerEvents={"auto"}>
        
      <Text  style={[styles.Textqg, { color: theme.colors.background_inverse }]} >
        {"Analysis"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    <Icon   color={theme.colors.primary} name={"MaterialIcons/filter-alt"} size={12} />
      </View>
    
      </View>
    
      </View>
     }</><>{ !(Constants["togglePendingBetsList"]) ? null : 
      <View  style={styles.View_0B} >
        
      <View  style={styles.ViewJK} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "togglePendingBetsList",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.TouchableRW} >
        
      <View  style={styles.ViewQc} >
        
      <Text  style={[styles.Text_9E, { color: theme.colors.background_inverse }]} >
        {"Pending"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-up-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    <Icon   name={"MaterialIcons/filter-alt"} color={theme.colors.primary} size={12} />
      </View>
    
      <View  style={styles.Viewa6} pointerEvents={"auto"}>
        
<SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET
  
   
  
 >
  {({ loading, error, data, refetchGetBetslipsByBettorIdNotKate$s }) => {
    const fetchPendingData = data;
    if (!fetchPendingData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (<><FlatList data={pendingArrayWorkaround(fetchPendingData)} renderItem={({ item }) => { const listPendingData = item; return (
      <View  style={styles.ViewpD} pointerEvents={"auto"}>
        
      <Touchable   >
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.View_8Q, { backgroundColor: theme.colors.divider, borderRadius: 6, borderColor: theme.colors.divider }]} collapsable={false}>
        
      <View  style={styles.ViewMV} >
        
      <View  style={styles.Viewka} >
        <>{ !(pendingOutcomeCompare(listPendingData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} color={theme.colors.light} size={32} /> }</>
      </View>
    
      <View  style={styles.ViewOo} >
        <>{ !(typeSingleCompare(listPendingData?.type)) ? null : <FlatList data={listPendingData?.bets} renderItem={({ item }) => { const pendingSingleBetLowerLevelData = item; return (<><>{ propositionTotal(pendingSingleBetLowerLevelData?.proposition) ? null : 
      <Text  style={[styles.Texts2, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.team)}{propositionUncommonDisplay(pendingSingleBetLowerLevelData?.proposition)}{spacingSuffix(pendingSingleBetLowerLevelData?.position)}{lineSuffix(pendingSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(pendingSingleBetLowerLevelData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(pendingSingleBetLowerLevelData?.oddsAmerican)}{segmentExists(pendingSingleBetLowerLevelData?.segment)}{futureBetExists(pendingSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(pendingSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ !(propositionTotal(pendingSingleBetLowerLevelData?.proposition)) ? null : 
      <Text  style={[styles.TextY0, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(pendingSingleBetLowerLevelData?.propDetails?.team)}{spacingSuffix(pendingSingleBetLowerLevelData?.position)}{spacingSuffix(pendingSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(pendingSingleBetLowerLevelData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(listPendingData?.oddsAmerican)}{segmentExists(pendingSingleBetLowerLevelData?.segment)}{futureBetExists(pendingSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(pendingSingleBetLowerLevelData?.live)}
      </Text>
     }</></>) }}  contentContainerStyle={styles.FlatListjpContent} numColumns={1} /> }</><>{ !(typeParlayCompare(listPendingData?.type)) ? null : 
      <Text  style={[styles.Textpb, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {parlayLegCount(listPendingData?.bets)}{"X Parlay "}{oddsAmericanSyntax(listPendingData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeTeaserCompare(listPendingData?.type)) ? null : 
      <Text  style={[styles.TextsD, { color: theme.colors.background_inverse }]} >
        {"Teaser "}{oddsAmericanSyntax(listPendingData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeMultilegCompare(listPendingData?.type)) ? null : <FlatList data={listPendingData?.bets} renderItem={({ item }) => { const pendingMultilegData = item; return (
      <View  style={styles.ViewXe} pointerEvents={"auto"}>
        
      <View  style={styles.Viewzs} >
        <>{ !(pendingOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={20} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={20} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={20} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(pendingMultilegData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={20} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.ViewXW} pointerEvents={"auto"}>
        <>{ propositionTotal(pendingMultilegData?.proposition) ? null : 
      <Text  style={[styles.TextGd, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingMultilegData?.propDetails?.player)}{spacingSuffix(pendingMultilegData?.propDetails?.team)}{propositionUncommonDisplay(pendingMultilegData?.proposition)}{spacingSuffix(pendingMultilegData?.position)}{lineSuffix(pendingMultilegData?.line)}{propDetailsMetricSpecial(pendingMultilegData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(pendingMultilegData?.oddsAmerican)}{segmentExists(pendingMultilegData?.segment)}{futureBetExists(pendingMultilegData?.propDetails?.future)}{liveBetExists(pendingMultilegData?.live)}
      </Text>
     }</><>{ !(propositionTotal(pendingMultilegData?.proposition)) ? null : 
      <Text  style={[styles.TextPI, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(pendingMultilegData?.propDetails?.player)}{spacingSuffix(pendingMultilegData?.propDetails?.team)}{spacingSuffix(pendingMultilegData?.position)}{spacingSuffix(pendingMultilegData?.line)}{propDetailsMetricSpecial(pendingMultilegData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(pendingMultilegData?.oddsAmerican)}{segmentExists(pendingMultilegData?.segment)}{futureBetExists(pendingMultilegData?.propDetails?.future)}{liveBetExists(pendingMultilegData?.live)}
      </Text>
     }</>
      </View>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListIbContent} numColumns={1} /> }</><>{ !(typeSingleCompare(listPendingData?.type)) ? null : <FlatList data={listPendingData?.bets} renderItem={({ item }) => { const pendingMultiSingleBetLowerLevelData = item; return (<><>{ eventNotExist(pendingMultiSingleBetLowerLevelData?.event) ? null : 
      <Text  style={[styles.TextIX, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {eventLeagueSuffix(pendingMultiSingleBetLowerLevelData?.event?.league)}{pendingMultiSingleBetLowerLevelData?.event?.name}
      </Text>
     }</><>{ eventNotExist(pendingMultiSingleBetLowerLevelData?.event) ? null : 
      <View  style={styles.ViewTB} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextPU, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {dateTimeStandard(pendingMultiSingleBetLowerLevelData?.event?.startTime)}
      </Text>
    
      </View>
     }</></>) }}  contentContainerStyle={styles.FlatListaTContent} numColumns={1} /> }</>
      </View>
    
      </View>
    
      <View  style={styles.ViewcA} >
        
      <View  style={styles.ViewhP} >
        
      <Text  style={[styles.Textko, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {atRiskSuffix(listPendingData?.atRisk)}
      </Text>
    
      <Text  style={[styles.TextLC, { color: theme.colors.light }]} >
        {"Risk"}
      </Text>
    
      </View>
    
      <View  style={styles.View_70} >
        
      <Text  style={[styles.TextEX, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {toWinSuffix(listPendingData?.toWin)}
      </Text>
    
      <Text  style={[styles.Text_11, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {"To Win"}
      </Text>
    
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      </Touchable>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListMhContent} numColumns={1} /><>{ !(pendingBetsFound(fetchPendingData)) ? null : 
      <Text  style={[styles.TextZG, { color: theme.colors.light }]} >
        {"No pending bets found."}
      </Text>
     }</></>)
  }}
</SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET>
      </View>
    
      </View>
     }</><>{ Constants["togglePendingBetsList"] ? null : 
      <View  style={styles.ViewKn} pointerEvents={"auto"}>
        
      <View  style={styles.ViewFb} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "togglePendingBetsList",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_5H} >
        
      <View  style={styles.ViewRq} >
        
      <Text  style={[styles.TextbM, { color: theme.colors.background_inverse }]} >
        {"Pending"}
      </Text>
    <Icon   name={"Ionicons/ios-chevron-down-sharp"} size={20} color={theme.colors.background_inverse} />
      </View>
    
      </Touchable>
    <Icon   name={"MaterialIcons/filter-alt"} color={theme.colors.primary} size={12} />
      </View>
    
      </View>
     }</>
      <View  style={styles.ViewpB} >
        
      <View  style={styles.ViewBF} >
        
      <Text  style={[styles.TextXT, { color: theme.colors.background_inverse }]} >
        {"Historical"}
      </Text>
    <Icon   name={"MaterialIcons/filter-alt"} color={theme.colors.background} size={12} />
      </View>
    
      <View  style={styles.ViewFO} >
        
<SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET
  
   
  
 >
  {({ loading, error, data, refetchGetBetslipsByBettorIdNotKate$s }) => {
    const fetchGradedData = data;
    if (!fetchGradedData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (<><FlatList data={fetchGradedData} renderItem={({ item }) => { const listGradedData = item; return (<><>{ !(notPendingOutcomeCompare(listGradedData?.outcome)) ? null : 
      <View  style={styles.ViewbQ} pointerEvents={"auto"}>
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleMyBetsHistoricalModal",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        
      <View  style={[styles.ViewXz, { backgroundColor: theme.colors.divider, borderRadius: 6, borderColor: theme.colors.divider }]} collapsable={false}>
        
      <View  style={styles.Viewdw} >
        
      <View  style={styles.ViewYl} >
        <>{ !(lossOutcomeCompare(listGradedData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={32} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(listGradedData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={32} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(listGradedData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={32} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(listGradedData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={32} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(listGradedData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={32} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.ViewRz} >
        <>{ !(typeSingleCompare(listGradedData?.type)) ? null : <FlatList data={listGradedData?.bets} renderItem={({ item }) => { const gradedSingleBetLowerLevelData = item; return (<><>{ propositionTotal(gradedSingleBetLowerLevelData?.proposition) ? null : 
      <Text  style={[styles.TextlF, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.team)}{propositionUncommonDisplay(gradedSingleBetLowerLevelData?.proposition)}{spacingSuffix(gradedSingleBetLowerLevelData?.position)}{lineSuffix(gradedSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(gradedSingleBetLowerLevelData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(listGradedData?.oddsAmerican)}{segmentExists(gradedSingleBetLowerLevelData?.segment)}{futureBetExists(gradedSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(gradedSingleBetLowerLevelData?.live)}
      </Text>
     }</><>{ !(propositionTotal(gradedSingleBetLowerLevelData?.proposition)) ? null : 
      <Text  style={[styles.TextmL, { color: theme.colors.background_inverse }]}  numberOfLines={2} ellipsizeMode={"tail"}>
        {spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.player)}{spacingSuffix(gradedSingleBetLowerLevelData?.propDetails?.team)}{spacingSuffix(gradedSingleBetLowerLevelData?.position)}{spacingSuffix(gradedSingleBetLowerLevelData?.line)}{propDetailsMetricSpecial(gradedSingleBetLowerLevelData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(listGradedData?.oddsAmerican)}{segmentExists(gradedSingleBetLowerLevelData?.segment)}{futureBetExists(gradedSingleBetLowerLevelData?.propDetails?.future)}{liveBetExists(gradedSingleBetLowerLevelData?.live)}
      </Text>
     }</></>) }}  contentContainerStyle={styles.FlatListyeContent} numColumns={1} /> }</><>{ !(typeParlayCompare(listGradedData?.type)) ? null : 
      <Text  style={[styles.Text_6h, { color: theme.colors.background_inverse }]} >
        {parlayLegCount(listGradedData?.bets)}{"X Parlay "}{oddsAmericanSyntax(listGradedData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeTeaserCompare(listGradedData?.type)) ? null : 
      <Text  style={[styles.TextwJ, { color: theme.colors.background_inverse }]} >
        {"Teaser "}{oddsAmericanSyntax(listGradedData?.oddsAmerican)}
      </Text>
     }</><>{ !(typeMultilegCompare(listGradedData?.type)) ? null : <FlatList data={listGradedData?.bets} renderItem={({ item }) => { const gradedMultilegBetData = item; return (
      <View  style={styles.ViewjH} pointerEvents={"auto"}>
        
      <View  style={styles.View_5H} >
        <>{ !(pendingOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-radio-button-on-sharp"} size={20} color={theme.colors.light} /> }</><>{ !(lossOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-close-circle"} size={20} color={theme.colors.error} /> }</><>{ !(winOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-checkmark-circle"} size={20} color={theme.colors.good} /> }</><>{ !(pushOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(voidOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-remove-circle"} size={20} color={theme.colors.light} /> }</><>{ !(cashoutOutcomeCompare(gradedMultilegBetData?.outcome)) ? null : <Icon   name={"Ionicons/ios-arrow-undo-circle"} size={20} color={theme.colors.fair} /> }</>
      </View>
    
      <View  style={styles.ViewnC} pointerEvents={"auto"}>
        <>{ propositionTotal(gradedMultilegBetData?.proposition) ? null : 
      <Text  style={[styles.Text_6E, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(gradedMultilegBetData?.propDetails?.player)}{spacingSuffix(gradedMultilegBetData?.propDetails?.team)}{propositionUncommonDisplay(gradedMultilegBetData?.proposition)}{spacingSuffix(gradedMultilegBetData?.position)}{lineSuffix(gradedMultilegBetData?.line)}{propDetailsMetricSpecial(gradedMultilegBetData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(gradedMultilegBetData?.oddsAmerican)}{segmentExists(gradedMultilegBetData?.segment)}{futureBetExists(gradedMultilegBetData?.propDetails?.future)}{liveBetExists(gradedMultilegBetData?.live)}
      </Text>
     }</><>{ !(propositionTotal(gradedMultilegBetData?.proposition)) ? null : 
      <Text  style={[styles.Textix, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {spacingSuffix(gradedMultilegBetData?.propDetails?.player)}{spacingSuffix(gradedMultilegBetData?.propDetails?.team)}{spacingSuffix(gradedMultilegBetData?.position)}{spacingSuffix(gradedMultilegBetData?.line)}{propDetailsMetricSpecial(gradedMultilegBetData?.propDetails?.metricSpecial)}{oddsAmericanSyntax(gradedMultilegBetData?.oddsAmerican)}{segmentExists(gradedMultilegBetData?.segment)}{futureBetExists(gradedMultilegBetData?.propDetails?.future)}{liveBetExists(gradedMultilegBetData?.live)}
      </Text>
     }</>
      </View>
    
      </View>
    ) }}  contentContainerStyle={styles.FlatListAwContent} numColumns={1} /> }</><>{ !(typeSingleCompare(listGradedData?.type)) ? null : <FlatList data={listGradedData?.bets} renderItem={({ item }) => { const gradedMultiSingleBetLowerLevelData = item; return (<><>{ eventNotExist(gradedMultiSingleBetLowerLevelData?.event) ? null : 
      <Text  style={[styles.Textah, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={2}>
        {eventLeagueSuffix(gradedMultiSingleBetLowerLevelData?.event?.league)}{pendingMultiSingleBetLowerLevelData?.event?.name}
      </Text>
     }</><>{ eventNotExist(gradedMultiSingleBetLowerLevelData?.event) ? null : 
      <View  style={styles.ViewY9} pointerEvents={"auto"}>
        
      <Text  style={[styles.TextnN, { color: theme.colors.light }]}  numberOfLines={1} ellipsizeMode={"tail"}>
        {dateStandard(gradedMultiSingleBetLowerLevelData?.event?.startTime)}
      </Text>
    
      </View>
     }</></>) }}  contentContainerStyle={styles.FlatListWkContent} numColumns={1} /> }</>
      </View>
    
      </View>
    
      <View  style={styles.Viewb4} >
        
      <View  style={styles.ViewHY} >
        <>{ !(lossOutcomeCompare(listGradedData?.outcome)) ? null : 
      <Text  style={[styles.Texte0, { color: theme.colors.error }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(listGradedData?.netProfit)}
      </Text>
     }</><>{ !(winOutcomeCompare(listGradedData?.outcome)) ? null : 
      <Text  style={[styles.Textq9, { color: theme.colors.good }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(listGradedData?.netProfit)}
      </Text>
     }</><>{ !(pushOutcomeCompare(listGradedData?.outcome)) ? null : 
      <Text  style={[styles.Text_2u, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(listGradedData?.netProfit)}
      </Text>
     }</><>{ !(voidOutcomeCompare(listGradedData?.outcome)) ? null : 
      <Text  style={[styles.Textb0, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(listGradedData?.netProfit)}
      </Text>
     }</><>{ !(cashoutOutcomeCompare(listGradedData?.outcome)) ? null : 
      <Text  style={[styles.TextNR, { color: theme.colors.fair }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {netProfitSuffix(listGradedData?.netProfit)}
      </Text>
     }</>
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      </Touchable>
    
      </View>
     }</>
      <Modal  style={{ backgroundColor: theme.colors.background }} animationType={"slide"} presentationStyle={"pageSheet"}>
        
      <Text  style={{ color: theme.colors.strong }} >
        {"TEST "}{null}
      </Text>
    <ButtonOutline onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleMyBetsHistoricalModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.ButtonOutlinetY} title={"Close"}  />
      </Modal>
    </>) }}  contentContainerStyle={styles.FlatListbuContent} numColumns={1} /><>{ !(gradedBetsFound(fetchGradedData)) ? null : 
      <Text  style={[styles.Textp4, { color: theme.colors.light }]} >
        {"No historical bets found."}
      </Text>
     }</></>)
  }}
</SwaggerAPIApi.FetchGetBetslipsByBettorIdNotKate$sGET>
      </View>
    
      </View>
    
      </ScrollView>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ IconNW: {
marginRight: 6,
}, TextX0: {
fontSize: 10,
}, Viewtb: {
justifyContent: 'center',
alignItems: 'center',
paddingRight: 6,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, Viewuh: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, ImageeX: {
opacity: 1,
height: 50,
width: 125,
}, ViewLv: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
}, Textz9: {
fontFamily: 'System', fontWeight: '200',
fontSize: 14,
}, ViewNH: {
paddingRight: 16,
paddingLeft: 16,
}, ViewpJ: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '33%',
height: 50,
}, ViewGJ: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewR6: {
justifyContent: 'center',
}, TextIF: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewtB: {
flexDirection: 'row',
alignItems: 'center',
}, TouchableQG: {
marginRight: 6,
}, ViewSU: {
opacity: 1,
marginTop: 18,
flexDirection: 'row',
alignItems: 'center',
marginLeft: '4%',
marginRight: '4%',
}, ViewkE: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
}, TextrO: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, ViewRn: {
justifyContent: 'center',
width: 90,
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextHS: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, View_5U: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Textl1: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, ViewC3: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextVl: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, View_1b: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextLL: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
}, View_3v: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextSr: {
fontSize: 10,
textAlign: 'center',
fontFamily: 'System', fontWeight: '700',
}, ViewXz: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextMi: {
fontSize: 10,
textAlign: 'center',
fontFamily: 'System', fontWeight: '700',
}, View_15: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, ViewCx: {
flexDirection: 'row',
marginBottom: 12,
}, Dividerpt: {
height: 2,
marginLeft: 3,
marginRight: 3,
}, TextfO: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, View_4w: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
paddingLeft: 1,
paddingRight: 1,
}, Text_11: {
fontSize: 10,
textAlign: 'center',
}, Viewef: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Text_6m: {
fontSize: 10,
textAlign: 'center',
}, TextUx: {
fontSize: 10,
textAlign: 'center',
}, TextdS: {
fontSize: 10,
textAlign: 'center',
}, ViewAI: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Texta0: {
fontSize: 10,
textAlign: 'center',
}, TextaR: {
fontSize: 10,
textAlign: 'center',
}, TextcM: {
fontSize: 10,
textAlign: 'center',
}, ViewL0: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Textg5: {
fontSize: 10,
textAlign: 'center',
}, Text_9G: {
fontSize: 10,
textAlign: 'center',
}, TextSn: {
fontSize: 10,
textAlign: 'center',
}, Viewga: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextjD: {
fontSize: 10,
textAlign: 'center',
}, TextBx: {
fontSize: 10,
textAlign: 'center',
}, Text_2a: {
fontSize: 10,
textAlign: 'center',
}, ViewVr: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextnY: {
fontSize: 10,
textAlign: 'center',
}, Texty0: {
fontSize: 10,
textAlign: 'center',
}, Text_0s: {
fontSize: 10,
textAlign: 'center',
}, ViewDf: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextnS: {
fontSize: 10,
textAlign: 'center',
}, Viewab: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, ViewA8: {
flexDirection: 'row',
marginBottom: 6,
minHeight: 24,
}, Dividerig: {
height: 1,
marginLeft: 3,
marginRight: 3,
}, ViewQa: {
marginTop: 6,
}, TextaR: {
fontSize: 12,
fontFamily: 'System', fontWeight: '400',
textAlign: 'center',
}, ViewbJ: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
paddingLeft: 1,
paddingRight: 1,
}, Text_79: {
fontSize: 10,
textAlign: 'center',
}, Viewb1: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Text_94: {
fontSize: 10,
textAlign: 'center',
}, Text_4Z: {
fontSize: 10,
textAlign: 'center',
}, Textzu: {
fontSize: 10,
textAlign: 'center',
}, ViewBi: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextQ7: {
fontSize: 10,
textAlign: 'center',
}, Text_0Q: {
fontSize: 10,
textAlign: 'center',
}, Textsa: {
fontSize: 10,
textAlign: 'center',
}, ViewyW: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextoI: {
fontSize: 10,
textAlign: 'center',
}, TextSm: {
fontSize: 10,
textAlign: 'center',
}, Texte7: {
fontSize: 10,
textAlign: 'center',
}, ViewYH: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextRa: {
fontSize: 10,
textAlign: 'center',
}, TextrN: {
fontSize: 10,
textAlign: 'center',
}, Textyz: {
fontSize: 10,
textAlign: 'center',
}, ViewiB: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Texthh: {
fontSize: 10,
textAlign: 'center',
}, Text_0k: {
fontSize: 10,
textAlign: 'center',
}, TextIl: {
fontSize: 10,
textAlign: 'center',
}, ViewOb: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingRight: 1,
paddingLeft: 1,
}, Text_9C: {
fontSize: 10,
textAlign: 'center',
}, Vieww9: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, ViewEa: {
flexDirection: 'row',
marginBottom: 6,
minHeight: 24,
}, DividerJN: {
height: 1,
marginLeft: 3,
marginRight: 3,
}, Viewr1: {
marginTop: 6,
}, TextBQ: {
fontSize: 12,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, ViewAC: {
justifyContent: 'center',
alignItems: 'center',
width: 90,
paddingLeft: 1,
paddingRight: 1,
}, TextAe: {
fontSize: 10,
textAlign: 'center',
}, ViewPA: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextgK: {
fontSize: 10,
textAlign: 'center',
}, TextkZ: {
fontSize: 10,
textAlign: 'center',
}, Text_2V: {
fontSize: 10,
textAlign: 'center',
}, Viewzg: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Textrw: {
fontSize: 10,
textAlign: 'center',
}, Text_9w: {
fontSize: 10,
textAlign: 'center',
}, TextoL: {
fontSize: 10,
textAlign: 'center',
}, ViewMG: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, TextPV: {
fontSize: 10,
textAlign: 'center',
}, TextZR: {
fontSize: 10,
textAlign: 'center',
}, Text_9Z: {
fontSize: 10,
textAlign: 'center',
}, ViewQ7: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingRight: 1,
paddingLeft: 1,
}, TextoO: {
fontSize: 10,
textAlign: 'center',
}, TextvT: {
fontSize: 10,
textAlign: 'center',
}, TextDk: {
fontSize: 10,
textAlign: 'center',
}, ViewVq: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, Text_1U: {
fontSize: 10,
textAlign: 'center',
}, Textra: {
fontSize: 10,
textAlign: 'center',
}, TextRE: {
fontSize: 10,
textAlign: 'center',
}, View_5W: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingRight: 1,
paddingLeft: 1,
}, Textm4: {
fontSize: 10,
textAlign: 'center',
}, ViewQv: {
width: 90,
justifyContent: 'center',
alignItems: 'center',
paddingLeft: 1,
paddingRight: 1,
}, View_5E: {
flexDirection: 'row',
minHeight: 24,
}, Viewd5: {
marginTop: 12,
}, SurfacedD: {
paddingTop: 12,
paddingBottom: 12,
}, ScrollView_4vContent: {
justifyContent: 'center',
paddingLeft: '4%',
paddingRight: '4%',
}, ViewVY: {
marginTop: 10,
}, Textqg: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewFU: {
flexDirection: 'row',
alignItems: 'center',
}, TouchableHy: {
marginRight: 6,
}, Viewaw: {
opacity: 1,
marginTop: 18,
flexDirection: 'row',
alignItems: 'center',
}, View_6B: {
marginLeft: '4%',
marginRight: '4%',
}, Text_9E: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
textTransform: 'none',
}, ViewQc: {
opacity: 1,
flexDirection: 'row',
alignItems: 'center',
}, TouchableRW: {
marginRight: 6,
}, ViewJK: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 18,
marginLeft: '4%',
marginRight: '4%',
}, Viewka: {
alignContent: 'center',
marginRight: 6,
alignItems: 'center',
justifyContent: 'center',
}, Texts2: {
fontFamily: 'System', fontWeight: '700',
}, TextY0: {
fontFamily: 'System', fontWeight: '700',
}, FlatListjpContent: {
flex: 1,
}, Textpb: {
fontFamily: 'System', fontWeight: '700',
}, TextsD: {
fontFamily: 'System', fontWeight: '700',
}, Viewzs: {
alignContent: 'center',
marginRight: 1,
alignItems: 'center',
justifyContent: 'center',
}, TextGd: {
fontSize: 12,
}, TextPI: {
fontSize: 12,
}, ViewXW: {
justifyContent: 'center',
flex: 1,
}, ViewXe: {
flexDirection: 'row',
alignItems: 'center',
}, FlatListIbContent: {
flex: 1,
}, TextIX: {
fontSize: 12,
}, TextPU: {
fontSize: 12,
}, ViewTB: {
flexDirection: 'row',
}, FlatListaTContent: {
flex: 1,
}, ViewOo: {
marginRight: 6,
justifyContent: 'center',
flex: 1,
}, ViewMV: {
flexDirection: 'row',
width: '70%',
}, Textko: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, TextLC: {
fontSize: 10,
}, ViewhP: {
justifyContent: 'center',
alignItems: 'flex-end',
flex: 1,
}, TextEX: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, Text_11: {
fontSize: 10,
}, View_70: {
alignItems: 'flex-end',
justifyContent: 'center',
marginLeft: 6,
flex: 1,
}, ViewcA: {
flexDirection: 'row',
justifyContent: 'flex-end',
flex: 1,
width: '25%',
}, View_8Q: {
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
}, ViewpD: {
marginTop: 6,
}, FlatListMhContent: {
flex: 1,
}, TextZG: {
marginTop: 6,
}, FetchAV: {
minHeight: 40,
}, Viewa6: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 4,
}, View_0B: {
paddingBottom: 12,
}, TextbM: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
textTransform: 'none',
}, ViewRq: {
opacity: 1,
flexDirection: 'row',
alignItems: 'center',
}, Touchable_5H: {
marginRight: 6,
}, ViewFb: {
flexDirection: 'row',
alignItems: 'center',
marginTop: 18,
marginLeft: '4%',
marginRight: '4%',
}, ViewKn: {
paddingBottom: 12,
}, TextXT: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
marginRight: 6,
}, ViewBF: {
opacity: 1,
marginLeft: '4%',
marginRight: '4%',
flexDirection: 'row',
alignItems: 'center',
marginTop: 16,
}, ViewYl: {
alignContent: 'center',
marginRight: 6,
alignItems: 'center',
justifyContent: 'center',
}, TextlF: {
fontFamily: 'System', fontWeight: '700',
}, TextmL: {
fontSize: 14,
fontFamily: 'System', fontWeight: '700',
}, FlatListyeContent: {
flex: 1,
}, Text_6h: {
fontFamily: 'System', fontWeight: '700',
}, TextwJ: {
fontFamily: 'System', fontWeight: '700',
}, View_5H: {
alignContent: 'center',
marginRight: 1,
alignItems: 'center',
justifyContent: 'center',
}, Text_6E: {
fontSize: 12,
}, Textix: {
fontSize: 12,
}, ViewnC: {
justifyContent: 'center',
flex: 1,
}, ViewjH: {
flexDirection: 'row',
alignItems: 'center',
}, FlatListAwContent: {
flex: 1,
}, Textah: {
fontSize: 12,
}, TextnN: {
fontSize: 12,
}, ViewY9: {
flexDirection: 'row',
}, FlatListWkContent: {
flex: 1,
}, ViewRz: {
marginRight: 6,
justifyContent: 'center',
flex: 1,
}, Viewdw: {
flexDirection: 'row',
width: '70%',
}, Texte0: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, Textq9: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, Text_2u: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, Textb0: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, TextNR: {
fontFamily: 'System', fontWeight: '700',
fontSize: 14,
}, ViewHY: {
alignItems: 'flex-end',
justifyContent: 'center',
flex: 1,
}, Viewb4: {
flexDirection: 'row',
justifyContent: 'flex-end',
width: '25%',
}, ViewXz: {
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
}, ViewbQ: {
marginTop: 6,
}, ButtonOutlinetY: {
backgroundColor: 'transparent',
borderRadius: 8,
fontFamily: 'System', fontWeight: '700',
borderWidth: 1,
textAlign: 'center',
}, FlatListbuContent: {
flex: 1,
}, Textp4: {
marginTop: 6,
}, Fetchth: {
minHeight: 40,
}, ViewFO: {
marginLeft: '4%',
marginRight: '4%',
marginTop: 4,
}, ViewpB: {
paddingBottom: 18,
} });


export default withTheme(MyBetsCopyScreen);