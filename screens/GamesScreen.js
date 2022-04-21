import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import { ButtonSolid, Divider, Icon, ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { ActivityIndicator, FlatList, Image, Modal, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fetch } from 'react-request';

    

    const GamesScreen = props => {
      const Constants = GlobalVariables.useValues();
         const Variables = Constants;
      const setGlobalVariableValue = GlobalVariables.useSetValue();

      const getBetType = (x) => {
  return x[1];
};

const homeTeamOutcome = (outcomes) => {
  return outcomes[1];
};

const compareFanDuel = (x) => {
  return x === "FanDuel";
};

const compareBarstool = (x) => {
  return x === "Barstool";
};

const compareUnibet = (x) => {
  return x === "Unibet";
};

const dateTimeShort = (commence_time) => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
const date = new Date(commence_time)

let str = month[date.getMonth()] + " " + date.getDate() + ", "
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


/*
const now = new Date(); //added

if(now.getTime() > date.getTime()){  //this line and 2 lines below
return " ";
} else {
let str = month[date.getMonth()] + " " + date.getDate() + ", "
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
*/
  };

const teamNameShorten = (x) => {
  if (x.length > 5){
return x.substring(0,5) + "...";
}else{
return x;
}
};

const emptySearchBar = () => {
  setTextInputValue("");
};

const oddsChangeLeague = (x) => {
  Constants.oddsDisplayed[0] = x;
return [x,Constants.oddsDisplayed[1]];
};

const typeTotalCompare = (x) => {
  return x === "totals";
};

const oddsFutures = (x) => {
  return x[1] === "outrights";
};

const compareBetRivers = (x) => {
  return x === "BetRivers";
};

const unibetAwayLine = (x) => {
    if (!x[5].awayTeamLine) {
line = "";
} else if (x[5].awayTeamLine < 0) {
line = x[5].awayTeamLine + " ";
} else {
line = "+" + x[5].awayTeamLine + " ";
};

if (!x[5].awayTeamOddsAmerican) {
odds = "";
} else if (!x[5].awayTeamLine && (x[5].awayTeamOddsAmerican < 0)) {
odds = x[5].awayTeamOddsAmerican;
} else if (!x[5].awayTeamLine && (x[5].awayTeamOddsAmerican >= 0)) {
odds = "+" + x[5].awayTeamOddsAmerican;
} else if (x[5].awayTeamOddsAmerican < 0) {
odds = "(" + x[5].awayTeamOddsAmerican + ")";
} else {
odds = "(+" + x[5].awayTeamOddsAmerican + ")";
};

return line + odds;
  };

const oddsAmericanSyntax = (oddsAmerican) => {
    if (!oddsAmerican) {
return "-";
} else if (oddsAmerican < 0) {
return "(" + oddsAmerican + ")";
} else {
return "(+" + oddsAmerican + ")";
};
  };

const betRiversAwayLine = (x) => {
    if (!x[4].awayTeamLine) {
line = "";
} else if (x[4].awayTeamLine < 0) {
line = x[4].awayTeamLine + " ";
} else {
line = "+" + x[4].awayTeamLine + " ";
};

if (!x[4].awayTeamOddsAmerican) {
odds = "";
} else if (!x[4].awayTeamLine && (x[4].awayTeamOddsAmerican < 0)) {
odds = x[4].awayTeamOddsAmerican;
} else if (!x[4].awayTeamLine && (x[4].awayTeamOddsAmerican >= 0)) {
odds = "+" + x[4].awayTeamOddsAmerican;
} else if (x[4].awayTeamOddsAmerican < 0) {
odds = "(" + x[4].awayTeamOddsAmerican + ")";
} else {
odds = "(+" + x[4].awayTeamOddsAmerican + ")";
};

return line + odds;
  };

const abbrTeamName = (x) => {
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
"Boston College Eagles": "Boston College",
"Clemson Tigers": "Clemson",
"Duke Blue Devils": "Duke",
"Florida State Seminoles": "Florida State",
"Georgia Tech Yellow Jackets": "Georgia Tech",
"Louisville Cardinals": "Louisville",
"Miami (FL) Hurricanes": "Miami (FL)",
"NC State Wolfpack": "NC State",
"Pittsburgh Panthers": "Pittsburgh",
"Syracuse Orange": "Syracuse",
"North Carolina Tar Heels": "North Carolina",
"Virginia Cavaliers": "Virginia",
"Virginia Tech Hokies": "Virginia Tech",
"Wake Forest Demon Deacons": "Wake Forest",
"Illinois Fighting Illini": "Illinois",
"Indiana Hoosiers": "Indiana",
"Iowa Hawkeyes": "Iowa",
"Michigan Wolverines": "Michigan",
"Michigan State Spartans": "Michigan State",
"Minnesota Golden Gophers": "Minnesota",
"Nebraska Cornhuskers": "Nebraska",
"Northwestern Wildcats": "Northwestern",
"Ohio State Buckeyes": "Ohio State",
"Penn State Nittany Lions": "Penn State",
"Purdue Boilermakers": "Purdue",
"Rutgers Scarlet Knights": "Rutgers",
"Maryland Terrapins": "Maryland",
"Wisconsin Badgers": "Wisconsin",
"Baylor Bears": "Baylor",
"Iowa State Cyclones": "Iowa State",
"Kansas Jayhawks": "Kansas",
"Kansas State Wildcats": "Kansas State",
"Oklahoma Sooners": "Oklahoma",
"Oklahoma State Cowboys": "Oklahoma State",
"TCU Horned Frogs": "TCU",
"Texas Longhorns": "Texas",
"Texas Tech Red Raiders": "Texas Tech",
"West Virginia Mountaineers": "West Virginia",
"Arizona Wildcats": "Arizona",
"Arizona State Sun Devils": "Arizona State",
"California Golden Bears": "California",
"Colorado Buffaloes": "Colorado",
"Oregon Ducks": "Oregon",
"Oregon State Beavers": "Oregon State",
"Stanford Cardinal": "Stanford",
"UCLA Bruins": "UCLA",
"USC Trojans": "USC",
"Utah Utes": "Utah",
"Washington Huskies": "Washington",
"Washington State Cougars": "Washington State",
"Alabama Crimson Tide": "Alabama",
"Arkansas Razorbacks": "Arkansas",
"Auburn Tigers": "Auburn",
"Florida Gators": "Florida",
"Georgia Bulldogs": "Georgia",
"Kentucky Wildcats": "Kentucky",
"LSU Tigers": "LSU",
"Ole Miss Rebels": "Ole Miss",
"Mississippi State Bulldogs": "Mississippi State",
"Missouri Tigers": "Missouri",
"South Carolina Gamecocks": "South Carolina",
"Tennessee Volunteers": "Tennessee",
"Texas A&M Aggies": "Texas A&M",
"Vanderbilt Commodores": "Vanderbilt",
"BYU Cougars": "BYU",
"Army Black Knights": "Army",
"UMass Minutemen": "UMass",
"Notre Dame Fighting Irish": "Notre Dame",
"Cincinnati Bearcats": "Cincinnati",
"UConn Huskies": "UConn",
"ECU Pirates": "ECU",
"Houston Cougars": "Houston",
"Memphis Tigers": "Memphis",
"Navy Midshipmen": "Navy",
"SMU Mustangs": "SMU",
"South Florida Bulls": "South Florida",
"Temple Owls": "Temple",
"Tulane Green Wave": "Tulane",
"Tulsa Golden Hurricane": "Tulsa",
"UCF Knights": "UCF",
"Charlotte 49ers": "Charlotte",
"FAU Owls": "FAU",
"FIU Panthers": "FIU",
"Louisiana Tech Bulldogs": "Louisiana Tech",
"Marshall Thundering Herd": "Marshall",
"Middle Tennessee Blue Raiders": "Middle Tennessee",
"North Texas Mean Green": "North Texas",
"Old Dominion Monarchs": "Old Dominion",
"Rice Owls": "Rice",
"Southern Miss Golden Eagles": "Southern Miss",
"UTEP Miners": "UTEP",
"UTSA Roadrunners": "UTSA",
"WKU Hilltoppers": "WKU",
"Akron Zips": "Akron",
"Ball State Cardinals": "Ball State",
"Bowling Green Falcons": "Bowling Green",
"Buffalo Bulls": "Buffalo",
"Central Michigan Chippewas": "Central Michigan",
"Eastern Michigan Eagles": "Eastern Michigan",
"Kent State Golden Flashes": "Kent State",
"Miami (OH) Redhawks": "Miami (OH)",
"Northern Illinois Huskies": "Northern Illinois",
"Ohio Bobcats": "Ohio",
"Toledo Rockets": "Toledo",
"Western Michigan Broncos": "Western Michigan",
"Air Force Falcons": "Air Force",
"Boise State Broncos": "Boise State",
"Colorado State Rams": "Colorado State",
"Fresno State Bulldogs": "Fresno State",
"Hawaii Rainbow Warriors": "Hawaii",
"Nevada Wolf Pack": "Nevada",
"New Mexico Lobos": "New Mexico",
"San Diego State Aztecs": "San Diego State",
"San José State Spartans": "San José State",
"UNLV Rebels": "UNLV",
"Utah State Aggies": "Utah State",
"Wyoming Cowboys": "Wyoming",
"Appalachian State Mountaineers": "Appalachian State",
"Arkansas State Red Wolves": "Arkansas State",
"Georgia Southern Eagles": "Georgia Southern",
"Georgia State Panthers": "Georgia State",
"Idaho Vandals": "Idaho",
"Louisiana Lafayette Ragin' Cajuns": "Louisiana Lafayette",
"Louisiana Monroe Warhawks": "Louisiana Monroe",
"New Mexico State Aggies": "New Mexico State",
"South Alabama Jaguars": "South Alabama",
"Texas State Bobcats": "Texas State",
"Troy Trojans": "Troy",
"Cal Poly Mustangs": "Cal Poly",
"Eastern Washington Eagles": "Eastern Washington",
"Idaho State Bengals": "Idaho State",
"Montana Grizzlies": "Montana",
"Montana State Bobcats": "Montana State",
"North Dakota Fighting Hawks": "North Dakota",
"Northern Arizona Lumberjacks": "Northern Arizona",
"Northern Colorado Bears": "Northern Colorado",
"Portland State Vikings": "Portland State",
"Sacramento State Hornets": "Sacramento State",
"Southern Utah Thunderbirds": "Southern Utah",
"UC Davis Aggies": "UC Davis",
"Weber State Wildcats": "Weber State",
"Charleston Southern Buccaneers": "Charleston Southern",
"Coastal Carolina Chanticleers": "Coastal Carolina",
"Gardner-Webb Runnin' Bulldogs": "Gardner-Webb",
"Kennesaw State Owls": "Kennesaw State",
"Liberty Flames": "Liberty",
"Monmouth Hawks": "Monmouth",
"Presbyterian Blue Hose": "Presbyterian",
"Albany Great Danes": "Albany",
"Delaware Fightin' Blue Hens": "Delaware",
"Elon Phoenix": "Elon",
"James Madison Dukes": "James Madison",
"Maine Black Bears": "Maine",
"New Hampshire Wildcats": "New Hampshire",
"Rhode Island Rams": "Rhode Island",
"Richmond Spiders": "Richmond",
"Stony Brook Seawolves": "Stony Brook",
"Towson Tigers": "Towson",
"Villanova Wildcats": "Villanova",
"William & Mary Tribe": "William & Mary",
"Brown Bears": "Brown",
"Cornell Big Red": "Cornell",
"Columbia Lions": "Columbia",
"Dartmouth Big Green": "Dartmouth",
"Harvard Crimson": "Harvard",
"UPenn Quakers": "UPenn",
"Princeton Tigers": "Princeton",
"Yale Bulldogs": "Yale",
"Bethune-Cookman Wildcats": "Bethune-Cookman",
"Delaware State Hornets": "Delaware State",
"Florida A&M Rattlers": "Florida A&M",
"Hampton Pirates": "Hampton",
"Howard Bison": "Howard",
"Morgan State Bears": "Morgan State",
"Norfolk State Spartans": "Norfolk State",
"North Carolina A&T Aggies": "North Carolina A&T",
"NC Central Eagles": "NC Central",
"Savannah State Tigers": "Savannah State",
"South Carolina State Bulldogs": "South Carolina State",
"Illinois State Redbirds": "Illinois State",
"Indiana State Sycamores": "Indiana State",
"Missouri State Bears": "Missouri State",
"North Dakota State Bison": "North Dakota State",
"Northern Iowa Panthers": "Northern Iowa",
"South Dakota Coyotes": "South Dakota",
"South Dakota State Jackrabbits": "South Dakota State",
"Southern Illinois Salukis": "Southern Illinois",
"Western Illinois Leathernecks": "Western Illinois",
"Youngstown State Penguins": "Youngstown State",
"Bryant Bulldogs": "Bryant",
"Central Connecticut Blue Devils": "Central Connecticut",
"Duquesne Dukes": "Duquesne",
"Robert Morris (PA) Colonials": "Robert Morris (PA)",
"Sacred Heart Pioneers": "Sacred Heart",
"St. Francis (PA) Red Flash": "St. Francis (PA)",
"Wagner Seahawks": "Wagner",
"Austin Peay Governors": "Austin Peay",
"Eastern Illinois Panthers": "Eastern Illinois",
"Eastern Kentucky Colonels": "Eastern Kentucky",
"Jacksonville State Gamecocks": "Jacksonville State",
"Murray State Racers": "Murray State",
"Southeast Missouri Redhawks": "Southeast Missouri",
"Tennessee State Tigers": "Tennessee State",
"Tennessee Tech Golden Eagles": "Tennessee Tech",
"Tennessee-Martin Skyhawks": "Tennessee-Martin",
"Bucknell Bison": "Bucknell",
"Colgate Raiders": "Colgate",
"Fordham Rams": "Fordham",
"Georgetown Hoyas": "Georgetown",
"Holy Cross Crusaders": "Holy Cross",
"Lafayette Leopards": "Lafayette",
"Lehigh Mountain Hawks": "Lehigh",
"Butler Bulldogs": "Butler",
"Campbell Fighting Camels": "Campbell",
"Davidson Wildcats": "Davidson",
"Dayton Flyers": "Dayton",
"Drake Bulldogs": "Drake",
"Jacksonville Dolphins": "Jacksonville",
"Marist Red Foxes": "Marist",
"Morehead State Eagles": "Morehead State",
"San Diego Toreros": "San Diego",
"Stetson Hatters": "Stetson",
"Valparaiso Beacons": "Valparaiso",
"Chattanooga Mocs": "Chattanooga",
"ETSU Buccaneers": "ETSU",
"Furman Paladins": "Furman",
"Mercer Bears": "Mercer",
"Samford Bulldogs": "Samford",
"The Citadel Bulldogs": "The Citadel",
"VMI Keydets": "VMI",
"Western Carolina Catamounts": "Western Carolina",
"Wofford Terriers": "Wofford",
"Abilene Christian Wildcats": "Abilene Christian",
"Central Arkansas Bears": "Central Arkansas",
"Houston Baptist Huskies": "Houston Baptist",
"Incarnate Word Cardinals": "Incarnate Word",
"Lamar Cardinals": "Lamar",
"McNeese State Cowboys": "McNeese State",
"Nicholls State Colonels": "Nicholls State",
"Northwestern State Demons": "Northwestern State",
"Sam Houston State Bearkats": "Sam Houston State",
"Southeastern Louisiana Lions": "Southeastern Louisiana",
"Stephen F. Austin Lumberjacks": "Stephen F. Austin",
"Alabama A&M Bulldogs": "Alabama A&M",
"Alabama State Hornets": "Alabama State",
"Alcorn State Braves": "Alcorn State",
"Arkansas-Pine Bluff Golden Lions": "Arkansas-Pine Bluff",
"Grambling State Tigers": "Grambling State",
"Jackson State Tigers": "Jackson State",
"Mississippi Valley State Delta Devils": "Mississippi Valley State",
"Prairie View A&M Panthers": "Prairie View A&M",
"Southern University Jaguars": "Southern University",
"Texas Southern Tigers": "Texas Southern",
"Wichita State Shockers": "Wichita State",
"Winthrop Eagles": "Winthrop",
"Green Bay Phoenix": "Green Bay",
"Milwaukee Panthers": "Milwaukee",
"Wright State Raiders": "Wright State",
"Xavier Musketeers": "Xavier",
"Kansas City Roos": "Kansas City",
"Mount St. Mary's Mountaineers": "Mount St. Mary's",
"Omaha Mavericks": "Omaha",
"NJIT Highlanders": "NJIT",
"New Orleans Privateers": "New Orleans",
"Niagara Purple Eagles": "Niagara",
"UNC Asheville Bulldogs": "UNC Asheville",
"UNC Greensboro Spartans": "UNC Greensboro",
"UNC Wilmington Seahawks": "UNC Wilmington",
"North Florida Ospreys": "North Florida",
"Northeastern Huskies": "Northeastern",
"Northern Kentucky Norse": "Northern Kentucky",
"Oakland Golden Grizzlies": "Oakland",
"Oral Roberts Golden Eagles": "Oral Roberts",
"Pacific Tigers": "Pacific",
"Pepperdine Waves": "Pepperdine",
"Portland Pilots": "Portland",
"Providence Friars": "Providence",
"Purdue Fort Wayne Mastodons": "Purdue Fort Wayne",
"Quinnipiac Bobcats": "Quinnipiac",
"Radford Highlanders": "Radford",
"Rider Broncs": "Rider",
"St. Bonaventure Bonnies": "St. Bonaventure",
"St. Francis Brooklyn Terriers": "St. Francis Brooklyn",
"St. John's Red Storm": "St. John's",
"Saint Joseph's Hawks": "Saint Joseph's",
"Saint Louis Billikens": "Saint Louis",
"Saint Mary's Gaels": "Saint Mary's",
"Saint Peter's Peacocks": "Saint Peter's",
"San Francisco Dons": "San Francisco",
"Santa Clara Broncos": "Santa Clara",
"Seattle Redhawks": "Seattle",
"Seton Hall Pirates": "Seton Hall",
"Siena Saints": "Siena",
"USC Upstate Spartans": "USC Upstate",
"Southern Jaguars": "Southern",
"SIU Edwardsville Cougars": "SIU Edwardsville",
"Texas A&M-Corpus Christi Islanders": "Texas A&M-Corpus Christi",
"UT Arlington Mavericks": "UT Arlington",
"UTRGV Vaqueros": "UTRGV",
"Utah Valley Wolverines": "Utah Valley",
"Vermont Catamounts": "Vermont",
"VCU Rams": "VCU",
"UAB Blazers": "UAB",
"American Eagles": "American",
"Little Rock Trojans": "Little Rock",
"Belmont Bruins": "Belmont",
"Binghamton Bearcats": "Binghamton",
"Boston University Terriers": "Boston University",
"Bradley Braves": "Bradley",
"UC Irvine Anteaters": "UC Irvine",
"UC Riverside Highlanders": "UC Riverside",
"UC Santa Barbara Gauchos": "UC Santa Barbara",
"Cal State Bakersfield Roadrunners": "Cal State Bakersfield",
"Cal State Fullerton Titans": "Cal State Fullerton",
"Long Beach State The Beach": "Long Beach State",
"Cal State Northridge Matadors": "Cal State Northridge",
"Canisius Golden Griffins": "Canisius",
"College of Charleston Cougars": "College of Charleston",
"Chicago State Cougars": "Chicago State",
"Cleveland State Vikings": "Cleveland State",
"Coppin State Eagles": "Coppin State",
"Creighton Bluejays": "Creighton",
"Denver Pioneers": "Denver",
"DePaul Blue Demons": "DePaul",
"Detroit Titans": "Detroit",
"Drexel Dragons": "Drexel",
"Evansville Purple Aces": "Evansville",
"Fairfield Stags": "Fairfield",
"Fairleigh Dickinson Knights": "Fairleigh Dickinson",
"FGCU Eagles": "FGCU",
"George Mason Patriots": "George Mason",
"George Washington Colonials": "George Washington",
"Gonzaga Bulldogs": "Gonzaga",
"Grand Canyon Antelopes": "Grand Canyon",
"Hartford Hawks": "Hartford",
"High Point Panthers": "High Point",
"Hofstra Pride": "Hofstra",
"UIC Flames": "UIC",
"IUPUI Jaguars": "IUPUI",
"Iona Gaels": "Iona",
"La Salle Explorers": "La Salle",
"Lipscomb Bisons": "Lipscomb",
"LIU Sharks": "LIU",
"Longwood Lancers": "Longwood",
"Loyola Chicago Ramblers": "Loyola Chicago",
"Loyola (MD) Greyhounds": "Loyola (MD)",
"Loyola Marymount Lions": "Loyola Marymount",
"Manhattan Jaspers": "Manhattan",
"Marquette Golden Eagles": "Marquette",
"UMBC Retrievers": "UMBC",
"Maryland Eastern Shore Hawks": "Maryland Eastern Shore",
"UMass Lowell River Hawks": "UMass Lowell",
// MLB
"Arizona Diamondbacks": "ARI",
"Atlanta Braves": "ATL",
"Baltimore Orioles": "BAL",
"Boston Red Sox": "BOS",
"Chicago White Sox": "CWS",
"Chicago Cubs": "CHC",
"Cincinnati Reds": "CIN",
"Cleveland Guardians": "CLE",
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

return teamsTable[x] || x;
  };

const getLeague = (x) => {
  return x[0];
};

const oddsMMA = (x) => {
  return x[0] === "mma_mixed_martial_arts";
};

const compareCaesars = (x) => {
  return x === "Caesars";
};

const oddsMoneyline = (x) => {
  return x[1] === "h2h";
};

const setSearchEmpty = () => {
  Constants.textInputValue = '';
};

const oddsAmericanMoneylineSyntax = (oddsAmerican) => {
    if (!oddsAmerican) {
return "-";
} else if (oddsAmerican < 0) {
return oddsAmerican;
} else {
return "+" + oddsAmerican;
}
  };

const oddsNBA = (x) => {
  return x[0] === "basketball_nba";
};

const filterList = (list) => {
  console.log(list,textInputValue)

newList = list.filter(item => (item.awayTeam.includes(textInputValue)
|| item.homeTeam.includes(textInputValue)
|| item.awayTeam.toLowerCase().includes(textInputValue)
|| item.homeTeam.toLowerCase().includes(textInputValue)))

return newList
};

const typeFuturesCompare = (x) => {
  return x === "outrights";
};

const compareFoxBet = (x) => {
  return x === "FOX Bet";
};

const checkAwayTeamWinning = () => {
  if (parseInt(Constants.awayScore) > parseInt(Constants.homeScore)){
return true;
} else if (parseInt(Constants.awayScore) < parseInt(Constants.homeScore)) {
return false;
} else {
return null;
};
};

const oddsNHL = (x) => {
  return x[0] === "icehockey_nhl";
};

const comparePointsBet = (x) => {
  return x === "PointsBet";
};

const findBestLine = (odds) => {
  /*let exist = false;

for (x = 0; x < odds.bookmakers.length; x++){

}



Math.max()

function loopDate() {
    let exist = false;
    let d = new Date();
    for (let x = 0; x < betslips.bets.length; x++){
        if (betslips.bets[x].event === null || betslips.bets[x].event.league === null) {
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

*/
};

const compareDraftKings = (x) => {
  return x === "DraftKings";
};

const isLive = (commence_time) => {
    const date = new Date(commence_time)
const now = new Date();

return (now.getTime() > date.getTime()) ? true : false;

/*if(now.getTime() > date.getTime()){  //this line and 2 lines below
return true;
} else {
let str = month[date.getMonth()] + " " + date.getDate() + ", "
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
};*/
  };

const compareBetMGM = (x) => {
  return x === "BetMGM";
};

const oddsChangeBetType = (x) => {
  Constants.oddsDisplayed[1] = x;
return [Constants.oddsDisplayed[0],x];
};

const lineSyntax = (point) => {
    if (!point) {
return "";
} else if (point <= 0) {
return point + " ";
} else {
return "+" + point + " ";
}
  };

const betRiversHomeLine = (x) => {
    if (!x[4].homeTeamLine) {
line = "";
} else if (x[4].homeTeamLine < 0) {
line = x[4].homeTeamLine + " ";
} else {
line = "+" + x[4].homeTeamLine + " ";
};

if (!x[4].homeTeamOddsAmerican) {
odds = "";
} else if (!x[4].homeTeamLine && (x[4].homeTeamOddsAmerican < 0)) {
odds = x[4].homeTeamOddsAmerican;
} else if (!x[4].homeTeamLine && (x[4].homeTeamOddsAmerican >= 0)) {
odds = "+" + x[4].homeTeamOddsAmerican;
} else if (x[4].homeTeamOddsAmerican < 0) {
odds = "(" + x[4].homeTeamOddsAmerican + ")";
} else {
odds = "(+" + x[4].homeTeamOddsAmerican + ")";
};

return line + odds;
  };

const totalUnderSyntax = (x) => {
  return "u" + x + " ";
};

const typeSpreadCompare = (x) => {
  return x === "spreads";
};

const oddsNCAAB = (x) => {
  return x[0] === "basketball_ncaab";
};

const unibetHomeLine = (x) => {
    if (!x[5].homeTeamLine) {
line = "";
} else if (x[5].homeTeamLine < 0) {
line = x[5].homeTeamLine + " ";
} else {
line = "+" + x[5].homeTeamLine + " ";
};

if (!x[5].homeTeamOddsAmerican) {
odds = "";
} else if (!x[5].homeTeamLine && (x[5].homeTeamOddsAmerican < 0)) {
odds = x[5].homeTeamOddsAmerican;
} else if (!x[5].homeTeamLine && (x[5].homeTeamOddsAmerican >= 0)) {
odds = "+" + x[5].homeTeamOddsAmerican;
} else if (x[5].homeTeamOddsAmerican < 0) {
odds = "(" + x[5].homeTeamOddsAmerican + ")";
} else {
odds = "(+" + x[5].homeTeamOddsAmerican + ")";
};

return line + odds;
  };

const oddsTotal = (x) => {
  return x[1] === "totals";
};

const oddsNFL = (x) => {
  return x[0] === "americanfootball_nfl";
};

const oddsNCAAF = (x) => {
  return x[0] === "americanfootball_ncaaf";
};

const totalOverSyntax = (x) => {
  return "o" + x + " ";
};

const oddsMLB = (x) => {
  return x[0] === "baseball_mlb";
};

const betMgmAwayLine = (x) => {
    if (!x[2].awayTeamLine) {
line = "";
} else if (x[2].awayTeamLine < 0) {
line = x[2].awayTeamLine + " ";
} else {
line = "+" + x[2].awayTeamLine + " ";
};

if (!x[2].awayTeamOddsAmerican) {
odds = "";
} else if (!x[2].awayTeamLine && (x[2].awayTeamOddsAmerican < 0)) {
odds = x[2].awayTeamOddsAmerican;
} else if (!x[2].awayTeamLine && (x[2].awayTeamOddsAmerican >= 0)) {
odds = "+" + x[2].awayTeamOddsAmerican;
} else if (x[2].awayTeamOddsAmerican < 0) {
odds = "(" + x[2].awayTeamOddsAmerican + ")";
} else {
odds = "(+" + x[2].awayTeamOddsAmerican + ")";
};

return line + odds;
  };

const awayTeamFilter = (outcomes) => {
  const away_team = Constants.awayTeam;
const awayTeamDisplayed = outcomes.filter(outcome => outcome.name == away_team);

return awayTeamDisplayed;
};

const betMgmHomeLine = (x) => {
    if (!x[2].homeTeamLine) {
line = "";
} else if (x[2].homeTeamLine < 0) {
line = x[2].homeTeamLine + " ";
} else {
line = "+" + x[2].homeTeamLine + " ";
};

if (!x[2].homeTeamOddsAmerican) {
odds = "";
} else if (!x[2].homeTeamLine && (x[2].homeTeamOddsAmerican < 0)) {
odds = x[2].homeTeamOddsAmerican;
} else if (!x[2].homeTeamLine && (x[2].homeTeamOddsAmerican >= 0)) {
odds = "+" + x[2].homeTeamOddsAmerican;
} else if (x[2].homeTeamOddsAmerican < 0) {
odds = "(" + x[2].homeTeamOddsAmerican + ")";
} else {
odds = "(+" + x[2].homeTeamOddsAmerican + ")";
};

return line + odds;
  };

const oddsSpread = (x) => {
  return x[1] === "spreads";
};

const typeMoneylineCompare = (x) => {
  return x === "h2h";
};
      
      const { theme } = props;
      
      
      
      
      React.useEffect(() => {
  StatusBar.setBarStyle('light-content');
}, []);
      
      
      
      
      
      
      
      const [awayLineBetMGM, setAwayLineBetMGM] = React.useState("");
const [awayScore, setAwayScore] = React.useState(13);
const [awayTeam, setAwayTeam] = React.useState("");
const [awayTeamWinning, setAwayTeamWinning] = React.useState(false);
const [dummy, setDummy] = React.useState(0);
const [homeLineBetMGM, setHomeLineBetMGM] = React.useState("");
const [homeScore, setHomeScore] = React.useState(10);
const [homeTeam, setHomeTeam] = React.useState("");
const [selectedSportsbook, setSelectedSportsbook] = React.useState("");
const [selectedSportsbookAffiliateUrl, setSelectedSportsbookAffiliateUrl] = React.useState("");
const [selectedSportsbookOffer, setSelectedSportsbookOffer] = React.useState("");
const [selectedSportsbookUrl, setSelectedSportsbookUrl] = React.useState("");
const [selectedTeam, setSelectedTeam] = React.useState("");
const [selectedTeamLine, setSelectedTeamLine] = React.useState(0);
const [selectedTeamOddsAmerican, setSelectedTeamOddsAmerican] = React.useState(0);
const [startTime, setStartTime] = React.useState("");
const [textInputValue, setTextInputValue] = React.useState("");
      
      

      return (
        
      <ScreenContainer   hasSafeArea={false} scrollable={false} hasTopSafeArea={true}>
        
      <Surface  style={{ borderRadius: 0, backgroundColor: theme.colors.background }} elevation={3}>
        
      <View  style={[styles.ViewjO, { borderRadius: 0 }]} >
        
      <View  style={styles.ViewMM} >
        
      <View  style={[styles.ViewUB, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        <>{ !(oddsNFL(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.View_03} >
        <Icon  style={styles.IconGo} name={"Ionicons/ios-american-football"} color={theme.colors.light} size={28} />
      <Text  style={[styles.Textut, { color: theme.colors.light }]} >
        {"NFL"}
      </Text>
    
      </View>
     }</><>{ !(oddsNCAAF(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.View_7s} >
        <Icon  style={styles.Icon_8S} name={"Ionicons/ios-american-football-outline"} color={theme.colors.light} size={28} />
      <Text  style={[styles.Texta6, { color: theme.colors.light }]} >
        {"NCAAF"}
      </Text>
    
      </View>
     }</><>{ !(oddsNBA(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.ViewV3} >
        <Icon  style={styles.IconYU} name={"Ionicons/ios-basketball"} color={theme.colors.light} size={28} />
      <Text  style={[styles.Textza, { color: theme.colors.light }]} >
        {"NBA"}
      </Text>
    
      </View>
     }</><>{ !(oddsNCAAB(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.ViewH3} >
        <Icon  style={styles.Iconoe} name={"Ionicons/ios-basketball-outline"} color={theme.colors.light} size={28} />
      <Text  style={[styles.Text_4b, { color: theme.colors.light }]} >
        {"NCAAMB"}
      </Text>
    
      </View>
     }</><>{ !(oddsMLB(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.ViewUz} >
        <Icon  style={styles.IconM5} name={"Ionicons/ios-baseball"} color={theme.colors.light} size={28} />
      <Text  style={[styles.TextZT, { color: theme.colors.light }]} >
        {"MLB"}
      </Text>
    
      </View>
     }</><>{ !(oddsNHL(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.View_7I} >
        <Icon  style={styles.Icondo} name={"MaterialCommunityIcons/hockey-sticks"} color={theme.colors.light} size={28} />
      <Text  style={[styles.Text_3J, { color: theme.colors.light }]} >
        {"NHL"}
      </Text>
    
      </View>
     }</><>{ !(oddsMMA(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.ViewyT} >
        <Icon  style={styles.IconNE} name={"MaterialCommunityIcons/boxing-glove"} color={theme.colors.light} size={28} />
      <Text  style={[styles.TextEn, { color: theme.colors.light }]} >
        {"MMA"}
      </Text>
    
      </View>
     }</>
      </Touchable>
    
      </View>
    
      <View  style={styles.ViewEW} >
        <Image  style={styles.Imaget0} resizeMode={"contain"} source={Images.VaultLogoLightFontClearBackground} />
      </View>
    
      <View  style={[styles.View_5F, { borderRadius: 0 }]} >
        <>{ Constants["toggleGamesSearchBar"] ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleGamesSearchBar",
          value: true
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewFS} >
        <Icon   name={"Ionicons/ios-search"} size={28} color={theme.colors.light} />
      </View>
    
      </Touchable>
     }</><>{ !(Constants["toggleGamesSearchBar"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          emptySearchBar();
  setGlobalVariableValue({
          key: "toggleGamesSearchBar",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewBK} >
        <Icon   name={"Ionicons/ios-close"} size={28} color={theme.colors.primary} />
      </View>
    
      </Touchable>
     }</>
      </View>
    
      </View>
    
      </View>
    
      </Surface>
    
      <ScrollView   contentContainerStyle={styles.ScrollViewINContent} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} bounces={true}>
        
      <View  style={styles.ViewFZ} >
        
      <Touchable onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1666694");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.View_7r} >
        <Image  style={styles.Imageol} source={Images.UntitledDesign7} resizeMode={"contain"} />
      </View>
    
      </Touchable>
    <>{ !(Constants["toggleGamesSearchBar"]) ? null : 
      <View  style={styles.ViewIP} >
        <TextInput onChangeText={
     (newTextInputValue) => { const textInputValue = newTextInputValue;
      try {
          setTextInputValue(textInputValue);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.TextInputHU, { backgroundColor: theme.colors.divider, color: theme.colors.background_inverse }]} placeholder={"Search teams..."} value={textInputValue} placeholderTextColor={theme.colors.light} clearButtonMode={"always"} autoCapitalize={"words"} autoFocus={true} />
      </View>
     }</>
      <View  style={styles.Viewum} >
        <>{ !(oddsSpread(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.View_1K} >
        
      <Text  style={[styles.Text_28, { color: theme.colors.background_inverse }]} >
        {"Spread"}
      </Text>
    
      </View>
     }</><>{ oddsSpread(Constants["oddsDisplayed"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeBetType("spreads")
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_4W} >
        
      <Text  style={[styles.TextJx, { color: theme.colors.divider }]} >
        {"Spread"}
      </Text>
    
      </Touchable>
     }</><>{ !(oddsTotal(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.Viewev} >
        
      <Text  style={[styles.Text_7Q, { color: theme.colors.background_inverse }]} >
        {"Total"}
      </Text>
    
      </View>
     }</><>{ oddsTotal(Constants["oddsDisplayed"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeBetType("totals")
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_7t} >
        
      <Text  style={[styles.Text_6v, { color: theme.colors.divider }]} >
        {"Total"}
      </Text>
    
      </Touchable>
     }</><>{ !(oddsMoneyline(Constants["oddsDisplayed"])) ? null : 
      <View  style={styles.ViewCI} >
        
      <Text  style={[styles.Textj9, { color: theme.colors.background_inverse }]} >
        {"Moneyline"}
      </Text>
    
      </View>
     }</><>{ oddsMoneyline(Constants["oddsDisplayed"]) ? null : 
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeBetType("h2h")
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchable_8l} >
        
      <Text  style={[styles.Text_5A, { color: theme.colors.divider }]} >
        {"Moneyline"}
      </Text>
    
      </Touchable>
     }</>
      </View>
    
<SwaggerAPIApi.FetchOddsDataGET
  
  betType={getBetType(Constants["oddsDisplayed"])} sport={getLeague(Constants["oddsDisplayed"])}
  
 >
  {({ loading, error, data, refetchOddsData }) => {
    const fetchData = data;
    if (!fetchData || loading) {
      return <ActivityIndicator />;
    }

    if (error) {
      return <Text style={{ textAlign: "center" }}>There was a problem fetching this data</Text>;
    }

    return (<><Divider  style={styles.DividerGK} color={theme.colors.divider} />
      <View  style={styles.View_7k} >
        
      <Surface  style={{ backgroundColor: theme.colors.divider, borderRadius: 6 }} elevation={1}>
        <FlatList data={filterList(fetchData)} listKey={"6YmN1bjB"} keyExtractor={({ item }) => item?.id || item?.uuid || item} renderItem={({ item }) => { const listData = item; return (<>
      <Touchable onPress={
     () => { 
      try {
          setAwayTeam(listData?.awayTeam);
  setHomeTeam(listData?.homeTeam);
  setStartTime(listData?.startTime);
  setGlobalVariableValue({
          key: "toggleGameInfoModal",
          value: true
        });
  setGlobalVariableValue({
          key: "selectedGame",
          value: fetchData && fetchData["[0]"]
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.Viewgz} >
        <>{ isLive(listData?.startTime) ? null : 
      <Text  style={[styles.TextIX, { color: theme.colors.light }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {dateTimeShort(listData?.startTime)}
      </Text>
     }</><>{ !(isLive(listData?.startTime)) ? null : 
      <Text  style={[styles.Text_4q, { color: theme.colors.good }]} >
        {"LIVE"}
      </Text>
     }</>
      <View  style={styles.ViewLG} >
        
      <Text  style={[styles.TextrZ, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {abbrTeamName(listData?.awayTeam)}
      </Text>
    
      </View>
    
      <View  style={styles.Viewb2} >
        
      <Text  style={[styles.TextLi, { color: theme.colors.background_inverse }]} >
        {"@"}
      </Text>
    
      </View>
    
      <View  style={styles.Viewea} >
        
      <Text  style={[styles.Textbo, { color: theme.colors.background_inverse }]}  ellipsizeMode={"tail"} numberOfLines={1}>
        {abbrTeamName(listData?.homeTeam)}
      </Text>
    
      </View>
    
      </View>
    
      </Touchable>
    <Divider  style={styles.DividerFP} color={theme.colors.background} /></>) }}  contentContainerStyle={styles.FlatList_6YContent} numColumns={1} />
      </Surface>
    
      <ScrollView   showsVerticalScrollIndicator={false} bounces={false} horizontal={true} showsHorizontalScrollIndicator={false}>
        <Utils.CustomCodeErrorBoundary><CustomCode.GamesScrollList data={filterList(fetchData)} selectedTeam={selectedTeam} setSelectedTeam = {setSelectedTeam} selectedTeamLine={selectedTeamLine} setSelectedTeamLine = {setSelectedTeamLine} selectedTeamOddsAmerican={selectedTeamOddsAmerican} setSelectedTeamOddsAmerican = {setSelectedTeamOddsAmerican} selectedSportsbook={selectedSportsbook} setSelectedSportsbook = {setSelectedSportsbook} selectedSportsbookUrl={selectedSportsbookUrl} setSelectedSportsbookUrl = {setSelectedSportsbookUrl}>
</CustomCode.GamesScrollList></Utils.CustomCodeErrorBoundary>
      </ScrollView>
    
      </View>
    
      <Modal   visible={Constants["toggleSportsbookModal"]} animationType={"slide"} transparent={true} presentationStyle={"pageSheet"}>
        <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleSportsbookModal",
          value: false
        });
  setSelectedSportsbookUrl("");
  setSelectedSportsbook("");
  setSelectedTeam("");
  setSelectedTeamLine("");
  setSelectedTeamOddsAmerican("");
      } catch (err) {
        console.error(err)
      }
    }
  } style={styles.Touchablexa}  />
      <View  style={[styles.ViewyK, { backgroundColor: theme.colors.background, borderRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }]} >
        
      <View   >
        
      <View  style={[styles.View_9r, { borderRadius: 10 }]} >
        
      <View  style={[styles.Viewob, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleSportsbookModal",
          value: false
        });
  setSelectedSportsbookUrl("");
  setSelectedSportsbook("");
  setSelectedTeam("");
  setSelectedTeamLine("");
  setSelectedTeamOddsAmerican("");
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewwL} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.TextYV, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.Viewua} >
        
      <Text  style={[styles.Textrf, { color: theme.colors.background_inverse }]}  numberOfLines={1} ellipsizeMode={"tail"}>
        {selectedTeam}
      </Text>
    
      </View>
    
      <View  style={[styles.ViewlS, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          Linking.openURL(`${selectedSportsbookUrl}`);
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        <>{ !(compareDraftKings(selectedSportsbook)) ? null : <Image  style={styles.ImageSC} resizeMode={"contain"} source={Images.UntitledDesign} /> }</><>{ !(compareFanDuel(selectedSportsbook)) ? null : <Image  style={styles.Imageh2} resizeMode={"contain"} source={Images.FanDuelLogo} /> }</><>{ !(compareBetMGM(selectedSportsbook)) ? null : <Image  style={styles.Image_6T} source={Images.BetMGMLogo} resizeMode={"contain"} /> }</><>{ !(comparePointsBet(selectedSportsbook)) ? null : <Image  style={styles.Image_9b} source={Images.PointsBetLogo} resizeMode={"contain"} /> }</><>{ !(compareBetRivers(selectedSportsbook)) ? null : <Image  style={styles.ImagemJ} source={Images.BetRiversLogo} resizeMode={"contain"} /> }</><>{ !(compareUnibet(selectedSportsbook)) ? null : <Image  style={styles.Imagexa} source={Images.UnibetLogo} resizeMode={"contain"} /> }</><>{ !(compareBarstool(selectedSportsbook)) ? null : <Image  style={styles.ImageP9} source={Images.BarstoolLogo} resizeMode={"contain"} /> }</><>{ !(compareFoxBet(selectedSportsbook)) ? null : <Image  style={styles.ImagelS} resizeMode={"contain"} source={Images.FoxBetLogo} /> }</><>{ !(compareCaesars(selectedSportsbook)) ? null : <Image  style={styles.ImageJ0} source={Images.CaesarsLogo} resizeMode={"contain"} /> }</>
      </Touchable>
    
      </View>
    
      </View>
    
      <View  style={styles.ViewpU} >
        <>{ !(selectedSportsbookUrl) ? null : <ButtonSolid onPress={
     () => { 
      try {
          Linking.openURL(`${selectedSportsbookUrl}`);
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidPm, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={`Bet ${selectedTeamLine}${selectedTeamOddsAmerican} on ${selectedSportsbook}`} /> }</><>{ !(compareBetMGM(selectedSportsbook)) ? null : <ButtonSolid onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://mediaserver.betmgmpartners.com/renderBanner.do?zoneId=1666694");
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidZ4, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"$600 Risk-Free Bet on BetMGM"} /> }</><>{ !(compareBetRivers(selectedSportsbook)) ? null : <ButtonSolid onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://www.vaultsportshq.com/betrivers");
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSoliduz, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"$250 Bonus Match on BetRivers"} /> }</><>{ !(compareUnibet(selectedSportsbook)) ? null : <ButtonSolid onPress={
    async () => { 
      try {
         await WebBrowser.openBrowserAsync("https://wlkindred.adsrv.eacdn.com/C.ashx?btag=a_2165b_334c_&affid=76&siteid=2165&adid=334&c=[acid]");
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidp0, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"$250 Risk-Free Bet on Unibet"} /> }</>
      </View>
    
      </View>
    
      </View>
    
      </Modal>
    
      <Modal  style={{ backgroundColor: theme.colors.background }} visible={Constants["toggleLeaguesModal"]} animationType={"slide"} presentationStyle={"pageSheet"}>
        
      <View  style={[styles.Viewde, { backgroundColor: theme.colors.background }]} >
        
      <Surface  style={[styles.SurfacevB, { backgroundColor: theme.colors.background }]} elevation={2} elevation={2}>
        
      <View  style={styles.View_06} >
        
      <View  style={[styles.ViewJ8, { borderRadius: 0 }]} >
        
      <Touchable onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  }  >
        
      <View  style={styles.ViewDv} >
        <Icon   name={"Ionicons/ios-chevron-back"} size={32} color={theme.colors.background_inverse} />
      <Text  style={[styles.TextCP, { color: theme.colors.background_inverse }]} >
        {"Back"}
      </Text>
    
      </View>
    
      </Touchable>
    
      </View>
    
      <View  style={styles.Viewl5} >
        
      <Text  style={[styles.TextaH, { color: theme.colors.background_inverse }]} >
        {"Leagues"}
      </Text>
    
      </View>
    <View  style={[styles.ViewbS, { borderRadius: 0 }]}  />
      </View>
    
      </Surface>
    
      <View  style={styles.Viewkc} >
        
      <View  style={styles.ViewRG} >
        
      <View  style={styles.Viewxh} >
        <>{ !(oddsNFL(Constants["oddsDisplayed"])) ? null : <ButtonSolid  style={[styles.ButtonSolidJj, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"NFL"}  icon={"Ionicons/ios-american-football"} /> }</><>{ oddsNFL(Constants["oddsDisplayed"]) ? null : <ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeLeague("americanfootball_nfl")
        });
  setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidYJ, { backgroundColor: theme.colors.background, color: theme.colors.background_inverse }]} title={"NFL"}  icon={"Ionicons/ios-american-football"} /> }</>
      </View>
    
      <View  style={styles.ViewEe} >
        <>{ !(oddsNCAAF(Constants["oddsDisplayed"])) ? null : <ButtonSolid  style={[styles.ButtonSolidIC, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"NCAAF"}  icon={"Ionicons/ios-american-football-outline"} /> }</><>{ oddsNCAAF(Constants["oddsDisplayed"]) ? null : <ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeLeague("americanfootball_ncaaf")
        });
  setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolid_2D, { backgroundColor: theme.colors.background, color: theme.colors.background_inverse }]} title={"NCAAF"}  icon={"Ionicons/ios-american-football-outline"} /> }</>
      </View>
    
      <View  style={styles.Viewbq} >
        <>{ !(oddsNBA(Constants["oddsDisplayed"])) ? null : <ButtonSolid  style={[styles.ButtonSoliddf, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"NBA"}  icon={"Ionicons/ios-basketball"} /> }</><>{ oddsNBA(Constants["oddsDisplayed"]) ? null : <ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeLeague("basketball_nba")
        });
  setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidEB, { backgroundColor: theme.colors.background, color: theme.colors.background_inverse }]} title={"NBA"}  icon={"Ionicons/ios-basketball"} /> }</>
      </View>
    
      <View  style={styles.ViewLg} >
        <>{ !(oddsNCAAB(Constants["oddsDisplayed"])) ? null : <ButtonSolid  style={[styles.ButtonSolidcM, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"NCAAMB"}  icon={"Ionicons/ios-basketball-outline"} /> }</><>{ oddsNCAAB(Constants["oddsDisplayed"]) ? null : <ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeLeague("basketball_ncaab")
        });
  setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidV1, { backgroundColor: theme.colors.background, color: theme.colors.background_inverse }]} title={"NCAAMB"}  icon={"Ionicons/ios-basketball-outline"} /> }</>
      </View>
    
      <View  style={styles.ViewM9} >
        <>{ !(oddsMLB(Constants["oddsDisplayed"])) ? null : <ButtonSolid  style={[styles.ButtonSolidfo, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"MLB"}  icon={"Ionicons/ios-baseball"} /> }</><>{ oddsMLB(Constants["oddsDisplayed"]) ? null : <ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeLeague("baseball_mlb")
        });
  setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidZf, { backgroundColor: theme.colors.background, color: theme.colors.background_inverse }]} title={"MLB"}  icon={"Ionicons/ios-baseball"} /> }</>
      </View>
    
      <View  style={styles.Viewds} >
        <>{ !(oddsNHL(Constants["oddsDisplayed"])) ? null : <ButtonSolid  style={[styles.ButtonSolidpe, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"NHL"}  icon={"MaterialCommunityIcons/hockey-sticks"} /> }</><>{ oddsNHL(Constants["oddsDisplayed"]) ? null : <ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeLeague("icehockey_nhl")
        });
  setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidMz, { backgroundColor: theme.colors.background, color: theme.colors.background_inverse }]} title={"NHL"}  icon={"MaterialCommunityIcons/hockey-sticks"} /> }</>
      </View>
    
      <View  style={styles.View_3q} >
        <>{ !(oddsMMA(Constants["oddsDisplayed"])) ? null : <ButtonSolid  style={[styles.ButtonSolidO2, { backgroundColor: theme.colors.primary, color: theme.colors.strong }]} title={"MMA"}  icon={"MaterialCommunityIcons/boxing-glove"} /> }</><>{ oddsMMA(Constants["oddsDisplayed"]) ? null : <ButtonSolid onPress={
     () => { 
      try {
          setGlobalVariableValue({
          key: "oddsDisplayed",
          value: oddsChangeLeague("mma_mixed_martial_arts")
        });
  setGlobalVariableValue({
          key: "toggleLeaguesModal",
          value: false
        });
      } catch (err) {
        console.error(err)
      }
    }
  } style={[styles.ButtonSolidjU, { backgroundColor: theme.colors.background, color: theme.colors.background_inverse }]} title={"MMA"}  icon={"MaterialCommunityIcons/boxing-glove"} /> }</>
      </View>
    
      </View>
    
      </View>
    
      </View>
    
      </Modal>
    </>)
  }}
</SwaggerAPIApi.FetchOddsDataGET>
      </View>
    
      </ScrollView>
    
      </ScreenContainer>
    
      );
    };
    

const styles = StyleSheet.create({ Icongp: {
marginRight: 3,
}, Texttm: {
fontSize: 10,
}, IcongT: {
left: 2,
}, View_0d: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, Iconyr: {
marginRight: 3,
}, TextLC: {
fontSize: 10,
}, IconIp: {
left: 2,
}, ViewHh: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, IconGo: {
marginRight: 3,
}, Textut: {
fontSize: 10,
}, Iconbn: {
left: 2,
}, View_03: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, Icon_8S: {
marginRight: 3,
}, Texta6: {
fontSize: 10,
}, IconEk: {
left: 2,
}, View_7s: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, IconYU: {
marginRight: 3,
}, Textza: {
fontSize: 10,
}, Icont8: {
left: 2,
}, ViewV3: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, Iconoe: {
marginRight: 3,
}, Text_4b: {
fontSize: 10,
}, IconNz: {
left: 2,
}, ViewH3: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, IconM5: {
marginRight: 3,
}, TextZT: {
fontSize: 10,
}, IconY5: {
left: 2,
}, ViewUz: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, Icondo: {
marginRight: 3,
}, Text_3J: {
fontSize: 10,
}, IconMr: {
left: 2,
}, View_7I: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, IconNE: {
marginRight: 3,
}, TextEn: {
fontSize: 10,
}, IconHt: {
left: 2,
}, ViewyT: {
alignItems: 'center',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
height: 50,
}, ViewUB: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, Imaget0: {
opacity: 1,
height: 50,
width: 125,
}, ViewEW: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
}, ViewYK: {
justifyContent: 'center',
height: 50,
}, Textvs: {
fontSize: 10,
}, ViewQD: {
justifyContent: 'center',
height: 50,
paddingLeft: 3,
paddingRight: 3,
}, ViewE5: {
justifyContent: 'center',
height: 50,
}, ViewaK: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'flex-end',
}, ViewsF: {
justifyContent: 'center',
alignItems: 'flex-end',
paddingLeft: 10,
paddingRight: 10,
}, TextRw: {
fontFamily: 'System', fontWeight: '200',
fontSize: 14,
}, Viewjy: {
paddingRight: 16,
paddingLeft: 16,
}, ViewFS: {
alignItems: 'flex-end',
justifyContent: 'center',
height: 50,
paddingLeft: 16,
paddingRight: 16,
}, ViewBK: {
alignItems: 'flex-end',
justifyContent: 'center',
height: 50,
paddingLeft: 16,
paddingRight: 16,
}, View_5F: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '33%',
height: 50,
}, ViewMM: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ViewjO: {
justifyContent: 'center',
}, Imageol: {
width: 375,
height: 60,
}, View_7r: {
paddingRight: '4%',
alignItems: 'center',
justifyContent: 'center',
}, TextInputHU: {
paddingLeft: 8,
paddingRight: 8,
paddingTop: 8,
paddingBottom: 8,
borderRadius: 6,
}, ViewIP: {
paddingRight: '4%',
paddingBottom: 10,
paddingTop: 18,
}, Text_28: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, View_1K: {
marginRight: 20,
}, TextJx: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Touchable_4W: {
marginRight: 20,
}, Text_7Q: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Viewev: {
marginRight: 20,
}, Text_6v: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Touchable_7t: {
marginRight: 20,
}, Textj9: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, ViewCI: {
marginRight: 20,
}, Text_5A: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Touchable_8l: {
marginRight: 20,
}, Text_5E: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
}, Text_1t: {
fontFamily: 'System', fontWeight: '700',
fontSize: 20,
}, Viewum: {
marginTop: 18,
marginRight: '4%',
flexDirection: 'row',
}, DividerGK: {
height: 1,
marginLeft: 6,
marginTop: 10,
}, TextIX: {
fontSize: 8,
marginBottom: 5,
fontFamily: 'System', fontWeight: '400',
}, Text_4q: {
fontSize: 8,
marginBottom: 5,
}, TextrZ: {
fontFamily: 'System', fontWeight: '700',
}, IconXW: {
marginLeft: 6,
}, ViewLG: {
alignItems: 'center',
flexDirection: 'row',
}, TextLi: {
fontSize: 10,
}, Viewb2: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}, Textbo: {
fontFamily: 'System', fontWeight: '700',
}, Iconof: {
marginLeft: 6,
}, Viewea: {
alignItems: 'center',
flexDirection: 'row',
}, Viewgz: {
paddingLeft: 6,
paddingRight: 6,
paddingTop: 12,
paddingBottom: 12,
maxWidth: 110,
}, DividerFP: {
height: 1,
}, FlatList_6YContent: {
flex: 1,
}, DividerUI: {
height: 1,
}, TextV8: {
marginTop: 12,
fontSize: 8,
marginBottom: 5,
fontFamily: 'System', fontWeight: '600',
}, Text_9N: {
fontSize: 14,
}, Iconpg: {
marginLeft: 3,
}, ViewvO: {
flexDirection: 'row',
alignItems: 'center',
}, TextOh: {
fontSize: 10,
}, TextDa: {
fontSize: 14,
}, Icon_7e: {
marginLeft: 3,
}, View_3D: {
flexDirection: 'row',
alignItems: 'center',
}, Viewmt: {
alignItems: 'center',
width: 115,
}, FlatListmmContent: {
flex: 1,
}, TextyC: {
fontFamily: 'System', fontWeight: '600',
fontSize: 8,
marginTop: 12,
marginBottom: 5,
}, Iconil: {
marginLeft: 3,
}, View_3J: {
flexDirection: 'row',
alignItems: 'center',
}, TextOl: {
fontSize: 10,
}, IconJs: {
marginLeft: 3,
}, ViewR2: {
flexDirection: 'row',
alignItems: 'center',
}, View_2o: {
alignItems: 'center',
width: 115,
}, FlatListVDContent: {
flex: 1,
}, Textfy: {
marginTop: 12,
marginBottom: 5,
fontSize: 8,
fontFamily: 'System', fontWeight: '600',
}, IconVe: {
marginLeft: 3,
}, Viewi4: {
flexDirection: 'row',
alignItems: 'center',
}, Textpr: {
fontSize: 10,
}, Iconky: {
marginLeft: 3,
}, View_4J: {
flexDirection: 'row',
alignItems: 'center',
}, Viewae: {
width: 100,
alignItems: 'center',
}, FlatList_82Content: {
flex: 1,
}, ViewDg: {
paddingBottom: 12,
}, DividerTk: {
height: 1,
}, View_7k: {
flexDirection: 'row',
flex: 1,
}, Touchablexa: {
width: '100%',
height: '65%',
}, TextYV: {
fontSize: 18,
}, ViewwL: {
alignItems: 'center',
paddingRight: 16,
flexDirection: 'row',
height: 50,
}, Viewob: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '25%',
}, Textrf: {
fontSize: 18,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, TextbX: {
fontSize: 12,
}, TextlB: {
fontSize: 7,
}, TextUa: {
fontSize: 12,
}, ViewZ8: {
alignItems: 'center',
}, Viewua: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
width: '50%',
}, ImageSC: {
width: 30,
height: 30,
}, Imageh2: {
width: 30,
height: 30,
}, Image_6T: {
width: 30,
height: 30,
}, Image_9b: {
width: 30,
height: 30,
}, ImagemJ: {
width: 30,
height: 30,
}, Imagexa: {
width: 30,
height: 30,
}, ImageP9: {
width: 30,
height: 30,
}, ImagelS: {
width: 30,
height: 30,
}, ImageJ0: {
width: 30,
height: 30,
}, ViewlS: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '25%',
paddingRight: 16,
}, View_9r: {
flexDirection: 'row',
justifyContent: 'space-between',
}, ButtonSolidPm: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginTop: 10,
}, ButtonSolidZ4: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginTop: 10,
}, ButtonSoliduz: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginTop: 10,
}, ButtonSolidp0: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
marginTop: 10,
}, ViewpU: {
paddingLeft: '4%',
paddingRight: '4%',
paddingTop: 4,
}, ViewcM: {
height: 11,
}, ViewyK: {
height: '35%',
justifyContent: 'space-between',
}, TextCP: {
fontSize: 18,
}, ViewDv: {
alignItems: 'center',
paddingRight: 16,
flexDirection: 'row',
height: 50,
}, ViewJ8: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '33%',
}, TextaH: {
fontSize: 18,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, Viewl5: {
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center',
height: 50,
}, ViewbS: {
alignItems: 'flex-end',
justifyContent: 'center',
width: '33%',
}, View_06: {
flexDirection: 'row',
justifyContent: 'space-between',
}, SurfacevB: {
minHeight: 40,
}, ButtonSolidDe: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolidwB: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ViewEc: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSolidBv: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolid_9H: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ViewLR: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSolidJj: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolidYJ: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, Viewxh: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSolidIC: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolid_2D: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ViewEe: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSoliddf: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolidEB: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, Viewbq: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSolidcM: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolidV1: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ViewLg: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSolidfo: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolidZf: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ViewM9: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSolidpe: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolidMz: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, Viewds: {
marginBottom: 3,
alignItems: 'flex-start',
}, ButtonSolidO2: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, ButtonSolidjU: {
borderRadius: 6,
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
height: 40,
}, View_3q: {
marginBottom: 3,
alignItems: 'flex-start',
}, ViewRG: {
alignItems: 'flex-start',
}, Viewkc: {
alignItems: 'flex-start',
paddingTop: 18,
paddingBottom: 28,
paddingLeft: '4%',
paddingRight: '4%',
}, Viewde: {
height: '100%',
}, TouchablejY: {
width: '100%',
height: '25%',
}, Textpk: {
fontSize: 18,
}, View_0b: {
paddingRight: 16,
height: 50,
flexDirection: 'row',
alignItems: 'center',
}, ViewkM: {
alignItems: 'flex-start',
justifyContent: 'center',
width: '25%',
}, TextmL: {
fontSize: 18,
fontFamily: 'System', fontWeight: '700',
alignSelf: 'flex-end',
}, Viewma: {
flex: 1,
}, TextkU: {
fontSize: 18,
fontFamily: 'System', fontWeight: '700',
}, Text_8t: {
fontSize: 18,
fontFamily: 'System', fontWeight: '700',
alignSelf: 'flex-start',
}, View_88: {
flex: 1,
}, ViewrK: {
height: 50,
alignContent: 'center',
alignItems: 'center',
justifyContent: 'center',
flexDirection: 'row',
width: '50%',
}, Vieweb: {
alignItems: 'flex-end',
justifyContent: 'center',
paddingRight: 16,
paddingLeft: 16,
}, TextbZ: {
fontSize: 8,
marginRight: 2,
}, View_4q: {
alignItems: 'center',
justifyContent: 'flex-end',
paddingRight: 16,
paddingLeft: 16,
flexDirection: 'row',
}, ViewhV: {
width: '25%',
alignItems: 'flex-end',
justifyContent: 'center',
}, ViewAM: {
flexDirection: 'row',
justifyContent: 'space-between',
}, SurfacemM: {
minHeight: 40,
}, Text_95: {
fontSize: 28,
fontFamily: 'System', fontWeight: '300',
}, ViewpL: {
flex: 1,
marginRight: 12,
alignItems: 'flex-start',
}, Textzz: {
fontSize: 35,
fontFamily: 'System', fontWeight: '700',
alignSelf: 'flex-start',
}, Icon_8c: {
marginLeft: 10,
}, ViewSZ: {
flexDirection: 'row',
alignItems: 'center',
}, Text_4d: {
fontFamily: 'System', fontWeight: '400',
textAlign: 'left',
fontSize: 12,
}, Viewu4: {
alignItems: 'flex-start',
width: '35%',
}, Textw7: {
textAlign: 'center',
fontSize: 10,
}, TextAe: {
fontFamily: 'System', fontWeight: '700',
textAlign: 'center',
}, Viewbi: {
width: '20%',
alignItems: 'center',
}, Icon_8P: {
marginRight: 10,
}, TextCR: {
fontSize: 35,
fontFamily: 'System', fontWeight: '700',
}, Textbb: {
fontSize: 28,
fontFamily: 'System', fontWeight: '300',
}, ViewRI: {
flex: 1,
marginLeft: 12,
alignItems: 'flex-end',
}, Viewlz: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'flex-end',
}, TextlK: {
fontFamily: 'System', fontWeight: '400',
textAlign: 'right',
fontSize: 12,
}, Viewir: {
alignItems: 'flex-end',
width: '35%',
alignContent: 'flex-end',
}, View_8n: {
paddingLeft: '4%',
paddingRight: '4%',
flexDirection: 'row',
justifyContent: 'space-between',
}, TextYY: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
marginBottom: 10,
marginTop: 28,
}, SurfacetA: {
minHeight: 40,
}, ViewfO: {
paddingLeft: '4%',
paddingRight: '4%',
}, TextLE: {
fontSize: 20,
fontFamily: 'System', fontWeight: '700',
marginBottom: 10,
marginTop: 28,
}, Imagel3: {
width: 187,
height: 50,
}, ViewJe: {
width: 187.5,
height: 50,
}, TextpG: {
fontFamily: 'System', fontWeight: '700',
}, Textgb: {
fontFamily: 'System', fontWeight: '400',
}, TextaQ: {
fontFamily: 'System', fontWeight: '700',
}, ViewTv: {
justifyContent: 'center',
}, Viewbd: {
flexDirection: 'row',
justifyContent: 'flex-end',
alignItems: 'center',
}, Surfacev9: {
minHeight: 40,
flexDirection: 'row',
justifyContent: 'space-between',
}, View_1C: {
paddingLeft: '4%',
paddingRight: '4%',
}, ScrollViewWIContent: {
paddingTop: 18,
paddingBottom: 22,
}, FlatListhdContent: {
flex: 1,
}, ViewGp: {
height: '75%',
}, FetchIP: {
minHeight: 40,
}, ViewFZ: {
paddingLeft: '4%',
}, ScrollViewINContent: {
paddingBottom: 18,
} });


export default withTheme(GamesScreen);