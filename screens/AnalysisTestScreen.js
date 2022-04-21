import React from 'react';
import * as SwaggerAPIApi from '../apis/SwaggerAPIApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  Divider,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const AnalysisTestScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const findBestLine = odds => {
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

  const abbrTeamName = x => {
    const teamsTable = {
      // NFL
      'Arizona Cardinals': 'ARI',
      'Atlanta Falcons': 'ATL',
      'Baltimore Ravens': 'BAL',
      'Buffalo Bills': 'BUF',
      'Carolina Panthers': 'CAR',
      'Chicago Bears': 'CHI',
      'Cincinnati Bengals': 'CIN',
      'Cleveland Browns': 'CLE',
      'Dallas Cowboys': 'DAL',
      'Denver Broncos': 'DEN',
      'Detroit Lions': 'DET',
      'Green Bay Packers': 'GB',
      'Houston Texans': 'HOU',
      'Indianapolis Colts': 'IND',
      'Jacksonville Jaguars': 'JAC',
      'Kansas City Chiefs': 'KC',
      'Las Vegas Raiders': 'LV',
      'Los Angeles Chargers': 'LAC',
      'Los Angeles Rams': 'LAR',
      'Miami Dolphins': 'MIA',
      'Minnesota Vikings': 'MIN',
      'New England Patriots': 'NE',
      'New Orleans Saints': 'NO',
      'New York Giants': 'NYG',
      'New York Jets': 'NYJ',
      'Philadelphia Eagles': 'PHI',
      'Pittsburgh Steelers': 'PIT',
      'San Francisco 49ers': 'SF',
      'Seattle Seahawks': 'SEA',
      'Tampa Bay Buccaneers': 'TB',
      'Tennessee Titans': 'TEN',
      'Washington Football Team': 'WAS',
      // NBA
      'Atlanta Hawks': 'ATL',
      'Brooklyn Nets': 'BKN',
      'Boston Celtics': 'BOS',
      'Charlotte Hornets': 'CHA',
      'Chicago Bulls': 'CHI',
      'Cleveland Cavaliers': 'CLE',
      'Dallas Mavericks': 'DAL',
      'Denver Nuggets': 'DEN',
      'Detroit Pistons': 'DET',
      'Golden State Warriors': 'GSW',
      'Houston Rockets': 'HOU',
      'Indiana Pacers': 'IND',
      'Los Angeles Clippers': 'LAC',
      'Los Angeles Lakers': 'LAL',
      'Memphis Grizzlies': 'MEM',
      'Miami Heat': 'MIA',
      'Milwaukee Bucks': 'MIL',
      'Minnesota Timberwolves': 'MIN',
      'New Orleans Pelicans': 'NOP',
      'New York Knicks': 'NYK',
      'Oklahoma City Thunder': 'OKC',
      'Orlando Magic': 'ORL',
      'Philadelphia 76ers': 'PHI',
      'Phoenix Suns': 'PHX',
      'Portland Trail Blazers': 'POR',
      'Sacramento Kings': 'SAC',
      'San Antonio Spurs': 'SAS',
      'Toronto Raptors': 'TOR',
      'Utah Jazz': 'UTA',
      'Washington Wizards': 'WAS',
      // NCAA
      'Boston College Eagles': 'Boston College',
      'Clemson Tigers': 'Clemson',
      'Duke Blue Devils': 'Duke',
      'Florida State Seminoles': 'Florida State',
      'Georgia Tech Yellow Jackets': 'Georgia Tech',
      'Louisville Cardinals': 'Louisville',
      'Miami (FL) Hurricanes': 'Miami (FL)',
      'NC State Wolfpack': 'NC State',
      'Pittsburgh Panthers': 'Pittsburgh',
      'Syracuse Orange': 'Syracuse',
      'North Carolina Tar Heels': 'North Carolina',
      'Virginia Cavaliers': 'Virginia',
      'Virginia Tech Hokies': 'Virginia Tech',
      'Wake Forest Demon Deacons': 'Wake Forest',
      'Illinois Fighting Illini': 'Illinois',
      'Indiana Hoosiers': 'Indiana',
      'Iowa Hawkeyes': 'Iowa',
      'Michigan Wolverines': 'Michigan',
      'Michigan State Spartans': 'Michigan State',
      'Minnesota Golden Gophers': 'Minnesota',
      'Nebraska Cornhuskers': 'Nebraska',
      'Northwestern Wildcats': 'Northwestern',
      'Ohio State Buckeyes': 'Ohio State',
      'Penn State Nittany Lions': 'Penn State',
      'Purdue Boilermakers': 'Purdue',
      'Rutgers Scarlet Knights': 'Rutgers',
      'Maryland Terrapins': 'Maryland',
      'Wisconsin Badgers': 'Wisconsin',
      'Baylor Bears': 'Baylor',
      'Iowa State Cyclones': 'Iowa State',
      'Kansas Jayhawks': 'Kansas',
      'Kansas State Wildcats': 'Kansas State',
      'Oklahoma Sooners': 'Oklahoma',
      'Oklahoma State Cowboys': 'Oklahoma State',
      'TCU Horned Frogs': 'TCU',
      'Texas Longhorns': 'Texas',
      'Texas Tech Red Raiders': 'Texas Tech',
      'West Virginia Mountaineers': 'West Virginia',
      'Arizona Wildcats': 'Arizona',
      'Arizona State Sun Devils': 'Arizona State',
      'California Golden Bears': 'California',
      'Colorado Buffaloes': 'Colorado',
      'Oregon Ducks': 'Oregon',
      'Oregon State Beavers': 'Oregon State',
      'Stanford Cardinal': 'Stanford',
      'UCLA Bruins': 'UCLA',
      'USC Trojans': 'USC',
      'Utah Utes': 'Utah',
      'Washington Huskies': 'Washington',
      'Washington State Cougars': 'Washington State',
      'Alabama Crimson Tide': 'Alabama',
      'Arkansas Razorbacks': 'Arkansas',
      'Auburn Tigers': 'Auburn',
      'Florida Gators': 'Florida',
      'Georgia Bulldogs': 'Georgia',
      'Kentucky Wildcats': 'Kentucky',
      'LSU Tigers': 'LSU',
      'Ole Miss Rebels': 'Ole Miss',
      'Mississippi State Bulldogs': 'Mississippi State',
      'Missouri Tigers': 'Missouri',
      'South Carolina Gamecocks': 'South Carolina',
      'Tennessee Volunteers': 'Tennessee',
      'Texas A&M Aggies': 'Texas A&M',
      'Vanderbilt Commodores': 'Vanderbilt',
      'BYU Cougars': 'BYU',
      'Army Black Knights': 'Army',
      'UMass Minutemen': 'UMass',
      'Notre Dame Fighting Irish': 'Notre Dame',
      'Cincinnati Bearcats': 'Cincinnati',
      'UConn Huskies': 'UConn',
      'ECU Pirates': 'ECU',
      'Houston Cougars': 'Houston',
      'Memphis Tigers': 'Memphis',
      'Navy Midshipmen': 'Navy',
      'SMU Mustangs': 'SMU',
      'South Florida Bulls': 'South Florida',
      'Temple Owls': 'Temple',
      'Tulane Green Wave': 'Tulane',
      'Tulsa Golden Hurricane': 'Tulsa',
      'UCF Knights': 'UCF',
      'Charlotte 49ers': 'Charlotte',
      'FAU Owls': 'FAU',
      'FIU Panthers': 'FIU',
      'Louisiana Tech Bulldogs': 'Louisiana Tech',
      'Marshall Thundering Herd': 'Marshall',
      'Middle Tennessee Blue Raiders': 'Middle Tennessee',
      'North Texas Mean Green': 'North Texas',
      'Old Dominion Monarchs': 'Old Dominion',
      'Rice Owls': 'Rice',
      'Southern Miss Golden Eagles': 'Southern Miss',
      'UTEP Miners': 'UTEP',
      'UTSA Roadrunners': 'UTSA',
      'WKU Hilltoppers': 'WKU',
      'Akron Zips': 'Akron',
      'Ball State Cardinals': 'Ball State',
      'Bowling Green Falcons': 'Bowling Green',
      'Buffalo Bulls': 'Buffalo',
      'Central Michigan Chippewas': 'Central Michigan',
      'Eastern Michigan Eagles': 'Eastern Michigan',
      'Kent State Golden Flashes': 'Kent State',
      'Miami (OH) Redhawks': 'Miami (OH)',
      'Northern Illinois Huskies': 'Northern Illinois',
      'Ohio Bobcats': 'Ohio',
      'Toledo Rockets': 'Toledo',
      'Western Michigan Broncos': 'Western Michigan',
      'Air Force Falcons': 'Air Force',
      'Boise State Broncos': 'Boise State',
      'Colorado State Rams': 'Colorado State',
      'Fresno State Bulldogs': 'Fresno State',
      'Hawaii Rainbow Warriors': 'Hawaii',
      'Nevada Wolf Pack': 'Nevada',
      'New Mexico Lobos': 'New Mexico',
      'San Diego State Aztecs': 'San Diego State',
      'San José State Spartans': 'San José State',
      'UNLV Rebels': 'UNLV',
      'Utah State Aggies': 'Utah State',
      'Wyoming Cowboys': 'Wyoming',
      'Appalachian State Mountaineers': 'Appalachian State',
      'Arkansas State Red Wolves': 'Arkansas State',
      'Georgia Southern Eagles': 'Georgia Southern',
      'Georgia State Panthers': 'Georgia State',
      'Idaho Vandals': 'Idaho',
      "Louisiana Lafayette Ragin' Cajuns": 'Louisiana Lafayette',
      'Louisiana Monroe Warhawks': 'Louisiana Monroe',
      'New Mexico State Aggies': 'New Mexico State',
      'South Alabama Jaguars': 'South Alabama',
      'Texas State Bobcats': 'Texas State',
      'Troy Trojans': 'Troy',
      'Cal Poly Mustangs': 'Cal Poly',
      'Eastern Washington Eagles': 'Eastern Washington',
      'Idaho State Bengals': 'Idaho State',
      'Montana Grizzlies': 'Montana',
      'Montana State Bobcats': 'Montana State',
      'North Dakota Fighting Hawks': 'North Dakota',
      'Northern Arizona Lumberjacks': 'Northern Arizona',
      'Northern Colorado Bears': 'Northern Colorado',
      'Portland State Vikings': 'Portland State',
      'Sacramento State Hornets': 'Sacramento State',
      'Southern Utah Thunderbirds': 'Southern Utah',
      'UC Davis Aggies': 'UC Davis',
      'Weber State Wildcats': 'Weber State',
      'Charleston Southern Buccaneers': 'Charleston Southern',
      'Coastal Carolina Chanticleers': 'Coastal Carolina',
      "Gardner-Webb Runnin' Bulldogs": 'Gardner-Webb',
      'Kennesaw State Owls': 'Kennesaw State',
      'Liberty Flames': 'Liberty',
      'Monmouth Hawks': 'Monmouth',
      'Presbyterian Blue Hose': 'Presbyterian',
      'Albany Great Danes': 'Albany',
      "Delaware Fightin' Blue Hens": 'Delaware',
      'Elon Phoenix': 'Elon',
      'James Madison Dukes': 'James Madison',
      'Maine Black Bears': 'Maine',
      'New Hampshire Wildcats': 'New Hampshire',
      'Rhode Island Rams': 'Rhode Island',
      'Richmond Spiders': 'Richmond',
      'Stony Brook Seawolves': 'Stony Brook',
      'Towson Tigers': 'Towson',
      'Villanova Wildcats': 'Villanova',
      'William & Mary Tribe': 'William & Mary',
      'Brown Bears': 'Brown',
      'Cornell Big Red': 'Cornell',
      'Columbia Lions': 'Columbia',
      'Dartmouth Big Green': 'Dartmouth',
      'Harvard Crimson': 'Harvard',
      'UPenn Quakers': 'UPenn',
      'Princeton Tigers': 'Princeton',
      'Yale Bulldogs': 'Yale',
      'Bethune-Cookman Wildcats': 'Bethune-Cookman',
      'Delaware State Hornets': 'Delaware State',
      'Florida A&M Rattlers': 'Florida A&M',
      'Hampton Pirates': 'Hampton',
      'Howard Bison': 'Howard',
      'Morgan State Bears': 'Morgan State',
      'Norfolk State Spartans': 'Norfolk State',
      'North Carolina A&T Aggies': 'North Carolina A&T',
      'NC Central Eagles': 'NC Central',
      'Savannah State Tigers': 'Savannah State',
      'South Carolina State Bulldogs': 'South Carolina State',
      'Illinois State Redbirds': 'Illinois State',
      'Indiana State Sycamores': 'Indiana State',
      'Missouri State Bears': 'Missouri State',
      'North Dakota State Bison': 'North Dakota State',
      'Northern Iowa Panthers': 'Northern Iowa',
      'South Dakota Coyotes': 'South Dakota',
      'South Dakota State Jackrabbits': 'South Dakota State',
      'Southern Illinois Salukis': 'Southern Illinois',
      'Western Illinois Leathernecks': 'Western Illinois',
      'Youngstown State Penguins': 'Youngstown State',
      'Bryant Bulldogs': 'Bryant',
      'Central Connecticut Blue Devils': 'Central Connecticut',
      'Duquesne Dukes': 'Duquesne',
      'Robert Morris (PA) Colonials': 'Robert Morris (PA)',
      'Sacred Heart Pioneers': 'Sacred Heart',
      'St. Francis (PA) Red Flash': 'St. Francis (PA)',
      'Wagner Seahawks': 'Wagner',
      'Austin Peay Governors': 'Austin Peay',
      'Eastern Illinois Panthers': 'Eastern Illinois',
      'Eastern Kentucky Colonels': 'Eastern Kentucky',
      'Jacksonville State Gamecocks': 'Jacksonville State',
      'Murray State Racers': 'Murray State',
      'Southeast Missouri Redhawks': 'Southeast Missouri',
      'Tennessee State Tigers': 'Tennessee State',
      'Tennessee Tech Golden Eagles': 'Tennessee Tech',
      'Tennessee-Martin Skyhawks': 'Tennessee-Martin',
      'Bucknell Bison': 'Bucknell',
      'Colgate Raiders': 'Colgate',
      'Fordham Rams': 'Fordham',
      'Georgetown Hoyas': 'Georgetown',
      'Holy Cross Crusaders': 'Holy Cross',
      'Lafayette Leopards': 'Lafayette',
      'Lehigh Mountain Hawks': 'Lehigh',
      'Butler Bulldogs': 'Butler',
      'Campbell Fighting Camels': 'Campbell',
      'Davidson Wildcats': 'Davidson',
      'Dayton Flyers': 'Dayton',
      'Drake Bulldogs': 'Drake',
      'Jacksonville Dolphins': 'Jacksonville',
      'Marist Red Foxes': 'Marist',
      'Morehead State Eagles': 'Morehead State',
      'San Diego Toreros': 'San Diego',
      'Stetson Hatters': 'Stetson',
      'Valparaiso Beacons': 'Valparaiso',
      'Chattanooga Mocs': 'Chattanooga',
      'ETSU Buccaneers': 'ETSU',
      'Furman Paladins': 'Furman',
      'Mercer Bears': 'Mercer',
      'Samford Bulldogs': 'Samford',
      'The Citadel Bulldogs': 'The Citadel',
      'VMI Keydets': 'VMI',
      'Western Carolina Catamounts': 'Western Carolina',
      'Wofford Terriers': 'Wofford',
      'Abilene Christian Wildcats': 'Abilene Christian',
      'Central Arkansas Bears': 'Central Arkansas',
      'Houston Baptist Huskies': 'Houston Baptist',
      'Incarnate Word Cardinals': 'Incarnate Word',
      'Lamar Cardinals': 'Lamar',
      'McNeese State Cowboys': 'McNeese State',
      'Nicholls State Colonels': 'Nicholls State',
      'Northwestern State Demons': 'Northwestern State',
      'Sam Houston State Bearkats': 'Sam Houston State',
      'Southeastern Louisiana Lions': 'Southeastern Louisiana',
      'Stephen F. Austin Lumberjacks': 'Stephen F. Austin',
      'Alabama A&M Bulldogs': 'Alabama A&M',
      'Alabama State Hornets': 'Alabama State',
      'Alcorn State Braves': 'Alcorn State',
      'Arkansas-Pine Bluff Golden Lions': 'Arkansas-Pine Bluff',
      'Grambling State Tigers': 'Grambling State',
      'Jackson State Tigers': 'Jackson State',
      'Mississippi Valley State Delta Devils': 'Mississippi Valley State',
      'Prairie View A&M Panthers': 'Prairie View A&M',
      'Southern University Jaguars': 'Southern University',
      'Texas Southern Tigers': 'Texas Southern',
      'Wichita State Shockers': 'Wichita State',
      'Winthrop Eagles': 'Winthrop',
      'Green Bay Phoenix': 'Green Bay',
      'Milwaukee Panthers': 'Milwaukee',
      'Wright State Raiders': 'Wright State',
      'Xavier Musketeers': 'Xavier',
      'Kansas City Roos': 'Kansas City',
      "Mount St. Mary's Mountaineers": "Mount St. Mary's",
      'Omaha Mavericks': 'Omaha',
      'NJIT Highlanders': 'NJIT',
      'New Orleans Privateers': 'New Orleans',
      'Niagara Purple Eagles': 'Niagara',
      'UNC Asheville Bulldogs': 'UNC Asheville',
      'UNC Greensboro Spartans': 'UNC Greensboro',
      'UNC Wilmington Seahawks': 'UNC Wilmington',
      'North Florida Ospreys': 'North Florida',
      'Northeastern Huskies': 'Northeastern',
      'Northern Kentucky Norse': 'Northern Kentucky',
      'Oakland Golden Grizzlies': 'Oakland',
      'Oral Roberts Golden Eagles': 'Oral Roberts',
      'Pacific Tigers': 'Pacific',
      'Pepperdine Waves': 'Pepperdine',
      'Portland Pilots': 'Portland',
      'Providence Friars': 'Providence',
      'Purdue Fort Wayne Mastodons': 'Purdue Fort Wayne',
      'Quinnipiac Bobcats': 'Quinnipiac',
      'Radford Highlanders': 'Radford',
      'Rider Broncs': 'Rider',
      'St. Bonaventure Bonnies': 'St. Bonaventure',
      'St. Francis Brooklyn Terriers': 'St. Francis Brooklyn',
      "St. John's Red Storm": "St. John's",
      "Saint Joseph's Hawks": "Saint Joseph's",
      'Saint Louis Billikens': 'Saint Louis',
      "Saint Mary's Gaels": "Saint Mary's",
      "Saint Peter's Peacocks": "Saint Peter's",
      'San Francisco Dons': 'San Francisco',
      'Santa Clara Broncos': 'Santa Clara',
      'Seattle Redhawks': 'Seattle',
      'Seton Hall Pirates': 'Seton Hall',
      'Siena Saints': 'Siena',
      'USC Upstate Spartans': 'USC Upstate',
      'Southern Jaguars': 'Southern',
      'SIU Edwardsville Cougars': 'SIU Edwardsville',
      'Texas A&M-Corpus Christi Islanders': 'Texas A&M-Corpus Christi',
      'UT Arlington Mavericks': 'UT Arlington',
      'UTRGV Vaqueros': 'UTRGV',
      'Utah Valley Wolverines': 'Utah Valley',
      'Vermont Catamounts': 'Vermont',
      'VCU Rams': 'VCU',
      'UAB Blazers': 'UAB',
      'American Eagles': 'American',
      'Little Rock Trojans': 'Little Rock',
      'Belmont Bruins': 'Belmont',
      'Binghamton Bearcats': 'Binghamton',
      'Boston University Terriers': 'Boston University',
      'Bradley Braves': 'Bradley',
      'UC Irvine Anteaters': 'UC Irvine',
      'UC Riverside Highlanders': 'UC Riverside',
      'UC Santa Barbara Gauchos': 'UC Santa Barbara',
      'Cal State Bakersfield Roadrunners': 'Cal State Bakersfield',
      'Cal State Fullerton Titans': 'Cal State Fullerton',
      'Long Beach State The Beach': 'Long Beach State',
      'Cal State Northridge Matadors': 'Cal State Northridge',
      'Canisius Golden Griffins': 'Canisius',
      'College of Charleston Cougars': 'College of Charleston',
      'Chicago State Cougars': 'Chicago State',
      'Cleveland State Vikings': 'Cleveland State',
      'Coppin State Eagles': 'Coppin State',
      'Creighton Bluejays': 'Creighton',
      'Denver Pioneers': 'Denver',
      'DePaul Blue Demons': 'DePaul',
      'Detroit Titans': 'Detroit',
      'Drexel Dragons': 'Drexel',
      'Evansville Purple Aces': 'Evansville',
      'Fairfield Stags': 'Fairfield',
      'Fairleigh Dickinson Knights': 'Fairleigh Dickinson',
      'FGCU Eagles': 'FGCU',
      'George Mason Patriots': 'George Mason',
      'George Washington Colonials': 'George Washington',
      'Gonzaga Bulldogs': 'Gonzaga',
      'Grand Canyon Antelopes': 'Grand Canyon',
      'Hartford Hawks': 'Hartford',
      'High Point Panthers': 'High Point',
      'Hofstra Pride': 'Hofstra',
      'UIC Flames': 'UIC',
      'IUPUI Jaguars': 'IUPUI',
      'Iona Gaels': 'Iona',
      'La Salle Explorers': 'La Salle',
      'Lipscomb Bisons': 'Lipscomb',
      'LIU Sharks': 'LIU',
      'Longwood Lancers': 'Longwood',
      'Loyola Chicago Ramblers': 'Loyola Chicago',
      'Loyola (MD) Greyhounds': 'Loyola (MD)',
      'Loyola Marymount Lions': 'Loyola Marymount',
      'Manhattan Jaspers': 'Manhattan',
      'Marquette Golden Eagles': 'Marquette',
      'UMBC Retrievers': 'UMBC',
      'Maryland Eastern Shore Hawks': 'Maryland Eastern Shore',
      'UMass Lowell River Hawks': 'UMass Lowell',
      // MLB
      'Arizona Diamondbacks': 'ARI',
      'Atlanta Braves': 'ATL',
      'Baltimore Orioles': 'BAL',
      'Boston Red Sox': 'BOS',
      'Chicago White Sox': 'CWS',
      'Chicago Cubs': 'CHC',
      'Cinncinnati Reds': 'CIN',
      'Cleveland Indians': 'CLE',
      'Colorado Rockies': 'COL',
      'Detroit Tigers': 'DET',
      'Houston Astros': 'HOU',
      'Kansas City Royals': 'KC',
      'Los Angeles Angels': 'ANA',
      'Los Angeles Dodgers': 'LA',
      'Miami Marlins': 'MIA',
      'Milwaukee Brewers': 'MIL',
      'Minnesota Twins': 'MIN',
      'New York Mets': 'NYM',
      'New York Yankees': 'NYY',
      'Oakland Athletics': 'OAK',
      'Philadelphia Phillies': 'PHI',
      'Pittsburgh Pirates': 'PIT',
      'San Diego Padres': 'SD',
      'San Francisco Giants': 'SF',
      'Seattle Mariners': 'SEA',
      'St Louis Cardinals': 'STL',
      'Tampa Bay Rays': 'TB',
      'Texas Rangers': 'TEX',
      'Toronto Blue Jays': 'TOR',
      'Washington Nationals': 'WAS',
      // NHL
      'Anaheim Ducks': 'ANA',
      'Buffalo Sabres': 'BUF',
      'Boston Bruins': 'BOS',
      'Arizona Coyotes': 'ARI',
      'Colorado Avalanche': 'COL',
      'Chicago Blackhawks': 'CHI',
      'Dallas Stars': 'DAL',
      'Carolina Hurricanes': 'CAR',
      'Edmonton Oilers': 'EDM',
      'Minnesota Wild': 'MIN',
      'Detroit Red Wings': 'DET',
      'Columbus Blue Jackets': 'CBJ',
      'Los Angeles Kings': 'LAK',
      'New Jersey Devils': 'NJD',
      'New York Rangers': 'NYR',
      'New York Islanders': 'NYI',
      'Calgary Flames': 'CGY',
      'Ottawa Senators': 'OTT',
      'Montréal Canadiens': 'MTL',
      'Philadelphia Flyers': 'PHI',
      'Pittsburgh Penguins': 'PIT',
      'San Jose Sharks': 'SJS',
      'Florida Panthers': 'FLA',
      'Nashville Predators': 'NSH',
      'Tampa Bay Lightning': 'TBL',
      'Toronto Maple Leafs': 'TOR',
      'St Louis Blues': 'STL',
      'Vancouver Canucks': 'VAN',
      'Vegas Golden Knights': 'VGK',
      'Washington Capitals': 'WSH',
      'Winnipeg Jets': 'WPG',
      'Seattle Kraken': 'SEA',
    };

    return teamsTable[x] || x;
  };

  const awayTeamFilter = outcomes => {
    const away_team = Constants.awayTeam;
    const awayTeamDisplayed = outcomes.filter(
      outcome => outcome.name == away_team
    );

    return awayTeamDisplayed;
  };

  const oddsChangeLeague = x => {
    Constants.oddsDisplayed[0] = x;
    return [x, Constants.oddsDisplayed[1]];
  };

  const getLeague = x => {
    return x[0];
  };

  const compareFoxBet = x => {
    return x === 'FOX Bet';
  };

  const oddsNFL = x => {
    return x[0] === 'americanfootball_nfl';
  };

  const compareBetRivers = x => {
    return x === 'BetRivers';
  };

  const typeMoneylineCompare = x => {
    return x === 'h2h';
  };

  const compareCaesars = x => {
    return x === 'Caesars';
  };

  const emptySearchBar = () => {
    setTextInputValue('');
  };

  const isLive = commence_time => {
    const date = new Date(commence_time);
    const now = new Date();

    return now.getTime() > date.getTime() ? true : false;

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

  const dateTimeShort = commence_time => {
    const month = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const date = new Date(commence_time);

    let str = month[date.getMonth()] + ' ' + date.getDate() + ', ';
    if (date.getHours() >= 12) {
      if (date.getHours() == 12) {
        str =
          str +
          date.getHours() +
          ':' +
          (date.getMinutes() < 10
            ? '0' + date.getMinutes()
            : date.getMinutes()) +
          'p';
      } else {
        str =
          str +
          (date.getHours() - 12) +
          ':' +
          (date.getMinutes() < 10
            ? '0' + date.getMinutes()
            : date.getMinutes()) +
          'p';
      }
    } else {
      if (date.getHours() == 0) {
        str =
          str +
          (date.getHours() + 12) +
          ':' +
          (date.getMinutes() < 10
            ? '0' + date.getMinutes()
            : date.getMinutes()) +
          'a';
      } else {
        str =
          str +
          date.getHours() +
          ':' +
          (date.getMinutes() < 10
            ? '0' + date.getMinutes()
            : date.getMinutes()) +
          'a';
      }
    }
    return str;

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

  const typeTotalCompare = x => {
    return x === 'totals';
  };

  const oddsSpread = x => {
    return x[1] === 'spreads';
  };

  const teamNameShorten = x => {
    if (x.length > 5) {
      return x.substring(0, 5) + '...';
    } else {
      return x;
    }
  };

  const oddsNCAAF = x => {
    return x[0] === 'americanfootball_ncaaf';
  };

  const compareBetMGM = x => {
    return x === 'BetMGM';
  };

  const compareDraftKings = x => {
    return x === 'DraftKings';
  };

  const oddsMoneyline = x => {
    return x[1] === 'h2h';
  };

  const oddsFutures = x => {
    return x[1] === 'outrights';
  };

  const homeTeamOutcome = outcomes => {
    return outcomes[1];
  };

  const oddsChangeBetType = x => {
    Constants.oddsDisplayed[1] = x;
    return [Constants.oddsDisplayed[0], x];
  };

  const compareFanDuel = x => {
    return x === 'FanDuel';
  };

  const oddsNCAAB = x => {
    return x[0] === 'basketball_ncaab';
  };

  const setSearchEmpty = () => {
    Constants.textInputValue = '';
  };

  const comparePointsBet = x => {
    return x === 'PointsBet';
  };

  const oddsNBA = x => {
    return x[0] === 'basketball_nba';
  };

  const totalUnderSyntax = x => {
    return 'u' + x + ' ';
  };

  const oddsNHL = x => {
    return x[0] === 'icehockey_nhl';
  };

  const oddsMMA = x => {
    return x[0] === 'mma_mixed_martial_arts';
  };

  const oddsAmericanMoneylineSyntax = oddsAmerican => {
    if (!oddsAmerican) {
      return '-';
    } else if (oddsAmerican < 0) {
      return oddsAmerican;
    } else {
      return '+' + oddsAmerican;
    }
  };

  const compareBarstool = x => {
    return x === 'Barstool';
  };

  const getBetType = x => {
    return x[1];
  };

  const oddsAmericanSyntax = oddsAmerican => {
    if (!oddsAmerican) {
      return '-';
    } else if (oddsAmerican < 0) {
      return '(' + oddsAmerican + ')';
    } else {
      return '(+' + oddsAmerican + ')';
    }
  };

  const totalOverSyntax = x => {
    return 'o' + x + ' ';
  };

  const oddsTotal = x => {
    return x[1] === 'totals';
  };

  const lineSyntax = point => {
    if (!point) {
      return '';
    } else if (point <= 0) {
      return point + ' ';
    } else {
      return '+' + point + ' ';
    }
  };

  const typeSpreadCompare = x => {
    return x === 'spreads';
  };

  const filterList = list => {
    console.log(list, textInputValue);

    newList = list.filter(
      item =>
        item.awayTeam.includes(textInputValue) ||
        item.homeTeam.includes(textInputValue) ||
        item.awayTeam.toLowerCase().includes(textInputValue) ||
        item.homeTeam.toLowerCase().includes(textInputValue)
    );

    return newList;
  };

  const compareUnibet = x => {
    return x === 'Unibet';
  };

  const typeFuturesCompare = x => {
    return x === 'outrights';
  };

  const oddsMLB = x => {
    return x[0] === 'baseball_mlb';
  };

  const { theme } = props;

  const [awayTeam, setAwayTeam] = React.useState('');
  const [homeTeam, setHomeTeam] = React.useState('');
  const [selectedSportsbook, setSelectedSportsbook] = React.useState('');
  const [selectedSportsbookAffiliateUrl, setSelectedSportsbookAffiliateUrl] =
    React.useState('');
  const [selectedSportsbookOffer, setSelectedSportsbookOffer] =
    React.useState('');
  const [selectedSportsbookUrl, setSelectedSportsbookUrl] = React.useState('');
  const [selectedTeam, setSelectedTeam] = React.useState('');
  const [selectedTeamLine, setSelectedTeamLine] = React.useState(0);
  const [selectedTeamOddsAmerican, setSelectedTeamOddsAmerican] =
    React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <ScrollView
        contentContainerStyle={styles.ScrollViewajContent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.Viewwn} pointerEvents={'auto'}>
          <>
            {!Constants['toggleGamesSearchBar'] ? null : (
              <View style={styles.ViewQo} pointerEvents={'auto'}>
                <TextInput
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.TextInputjX,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.background_inverse,
                    },
                  ]}
                  placeholder={'Search teams...'}
                  value={textInputValue}
                  placeholderTextColor={theme.colors.light}
                  clearButtonMode={'always'}
                  autoCapitalize={'words'}
                  autoFocus={true}
                />
              </View>
            )}
          </>
          <View style={styles.ViewqJ} pointerEvents={'auto'}>
            <>
              {!oddsSpread(Constants['oddsDisplayed']) ? null : (
                <View style={styles.ViewP6} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Text_9q,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Spread'}
                  </Text>
                </View>
              )}
            </>
            <>
              {oddsSpread(Constants['oddsDisplayed']) ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'oddsDisplayed',
                        value: oddsChangeBetType('spreads'),
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.Touchableoy}
                >
                  <Text
                    style={[styles.Texta1, { color: theme.colors.divider }]}
                  >
                    {'Spread'}
                  </Text>
                </Touchable>
              )}
            </>
            <>
              {!oddsTotal(Constants['oddsDisplayed']) ? null : (
                <View style={styles.ViewvP} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.TextZq,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Total'}
                  </Text>
                </View>
              )}
            </>
            <>
              {oddsTotal(Constants['oddsDisplayed']) ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'oddsDisplayed',
                        value: oddsChangeBetType('totals'),
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.Touchable_4u}
                >
                  <Text
                    style={[styles.Textnd, { color: theme.colors.divider }]}
                  >
                    {'Total'}
                  </Text>
                </Touchable>
              )}
            </>
            <>
              {!oddsMoneyline(Constants['oddsDisplayed']) ? null : (
                <View style={styles.View_6k} pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.Textaa,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Moneyline'}
                  </Text>
                </View>
              )}
            </>
            <>
              {oddsMoneyline(Constants['oddsDisplayed']) ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'oddsDisplayed',
                        value: oddsChangeBetType('h2h'),
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={styles.TouchableSz}
                >
                  <Text
                    style={[styles.Text_2j, { color: theme.colors.divider }]}
                  >
                    {'Moneyline'}
                  </Text>
                </Touchable>
              )}
            </>
            <>
              {!oddsFutures(Constants['oddsDisplayed']) ? null : (
                <View pointerEvents={'auto'}>
                  <Text
                    style={[
                      styles.TextFA,
                      { color: theme.colors.background_inverse },
                    ]}
                  >
                    {'Futures'}
                  </Text>
                </View>
              )}
            </>
            <>
              {oddsFutures(Constants['oddsDisplayed']) ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setGlobalVariableValue({
                        key: 'oddsDisplayed',
                        value: oddsChangeBetType('outrights'),
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Text
                    style={[styles.TextwI, { color: theme.colors.divider }]}
                  >
                    {'Futures'}
                  </Text>
                </Touchable>
              )}
            </>
          </View>

          <SwaggerAPIApi.FetchOddsDataGET
            betType={getBetType(Constants['oddsDisplayed'])}
            sport={getLeague(Constants['oddsDisplayed'])}
          >
            {({ loading, error, data, refetchOddsData }) => {
              const fetchData = data;
              if (!fetchData || loading) {
                return <ActivityIndicator />;
              }

              if (error) {
                return (
                  <Text style={{ textAlign: 'center' }}>
                    There was a problem fetching this data
                  </Text>
                );
              }

              return (
                <>
                  <Divider
                    style={styles.DividerH2}
                    color={theme.colors.divider}
                  />
                  <View style={styles.Viewow} pointerEvents={'auto'}>
                    <Surface
                      style={{
                        backgroundColor: theme.colors.divider,
                        borderRadius: 6,
                      }}
                      elevation={1}
                    >
                      <FlatList
                        data={filterList(fetchData)}
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              <Touchable>
                                <View
                                  style={styles.ViewVN}
                                  pointerEvents={'auto'}
                                >
                                  <>
                                    {isLive(listData?.startTime) ? null : (
                                      <Text
                                        style={[
                                          styles.Textb5,
                                          { color: theme.colors.light },
                                        ]}
                                        ellipsizeMode={'tail'}
                                        numberOfLines={1}
                                      >
                                        {dateTimeShort(listData?.startTime)}
                                      </Text>
                                    )}
                                  </>
                                  <>
                                    {!isLive(listData?.startTime) ? null : (
                                      <Text
                                        style={[
                                          styles.TextiZ,
                                          { color: theme.colors.good },
                                        ]}
                                      >
                                        {'LIVE'}
                                      </Text>
                                    )}
                                  </>
                                  <View
                                    style={styles.Viewbw}
                                    pointerEvents={'auto'}
                                  >
                                    <Text
                                      style={[
                                        styles.TextfX,
                                        {
                                          color:
                                            theme.colors.background_inverse,
                                        },
                                      ]}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                    >
                                      {abbrTeamName(listData?.awayTeam)}
                                    </Text>
                                  </View>

                                  <View
                                    style={styles.ViewYv}
                                    pointerEvents={'auto'}
                                  >
                                    <Text
                                      style={[
                                        styles.TextJ0,
                                        {
                                          color:
                                            theme.colors.background_inverse,
                                        },
                                      ]}
                                    >
                                      {'@'}
                                    </Text>
                                  </View>

                                  <View
                                    style={styles.ViewNM}
                                    pointerEvents={'auto'}
                                  >
                                    <Text
                                      style={[
                                        styles.TextCc,
                                        {
                                          color:
                                            theme.colors.background_inverse,
                                        },
                                      ]}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                    >
                                      {abbrTeamName(listData?.homeTeam)}
                                    </Text>
                                  </View>
                                </View>
                              </Touchable>
                              <Divider
                                style={styles.DividerPb}
                                color={theme.colors.background}
                              />
                            </>
                          );
                        }}
                        contentContainerStyle={styles.FlatListkYContent}
                        numColumns={1}
                      />
                    </Surface>
                  </View>

                  <Modal
                    style={{ backgroundColor: theme.colors.background }}
                    visible={Constants['toggleLeaguesModal']}
                    animationType={'slide'}
                    presentationStyle={'pageSheet'}
                  >
                    <View
                      style={[
                        styles.ViewsJ,
                        { backgroundColor: theme.colors.background },
                      ]}
                      pointerEvents={'auto'}
                    >
                      <Surface
                        style={[
                          styles.SurfaceYk,
                          { backgroundColor: theme.colors.background },
                        ]}
                        elevation={2}
                        elevation={2}
                      >
                        <View style={styles.View_26} pointerEvents={'auto'}>
                          <View style={[styles.Viewpl, { borderRadius: 0 }]}>
                            <Touchable
                              onPress={() => {
                                try {
                                  setGlobalVariableValue({
                                    key: 'toggleLeaguesModal',
                                    value: false,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View style={styles.Viewat}>
                                <Icon
                                  name={'Ionicons/ios-chevron-back'}
                                  size={32}
                                  color={theme.colors.background_inverse}
                                />
                                <Text
                                  style={[
                                    styles.Text_9c,
                                    { color: theme.colors.background_inverse },
                                  ]}
                                >
                                  {'Back'}
                                </Text>
                              </View>
                            </Touchable>
                          </View>

                          <View style={styles.ViewcY}>
                            <Text
                              style={[
                                styles.TextmM,
                                { color: theme.colors.background_inverse },
                              ]}
                            >
                              {'Leagues'}
                            </Text>
                          </View>
                          <View style={[styles.Viewwa, { borderRadius: 0 }]} />
                        </View>
                      </Surface>

                      <View style={styles.Viewcy} pointerEvents={'auto'}>
                        <View style={styles.Viewta} pointerEvents={'auto'}>
                          <View style={styles.ViewLT} pointerEvents={'auto'}>
                            <ButtonSolid
                              style={[
                                styles.ButtonSolid_62,
                                {
                                  backgroundColor: theme.colors.primary,
                                  color: theme.colors.strong,
                                },
                              ]}
                              title={'Best Bets'}
                              icon={'Ionicons/ios-trophy'}
                            />
                            <ButtonSolid
                              style={[
                                styles.ButtonSolidsl,
                                {
                                  backgroundColor: theme.colors.background,
                                  color: theme.colors.background_inverse,
                                },
                              ]}
                              title={'Best Bets'}
                              icon={'Ionicons/ios-trophy'}
                            />
                          </View>

                          <View style={styles.ViewCc} pointerEvents={'auto'}>
                            <ButtonSolid
                              style={[
                                styles.ButtonSolidj8,
                                {
                                  backgroundColor: theme.colors.primary,
                                  color: theme.colors.strong,
                                },
                              ]}
                              title={'Following'}
                              icon={'Ionicons/ios-flag'}
                            />
                            <ButtonSolid
                              style={[
                                styles.ButtonSolidbd,
                                {
                                  backgroundColor: theme.colors.background,
                                  color: theme.colors.background_inverse,
                                },
                              ]}
                              title={'Following'}
                              icon={'Ionicons/ios-flag'}
                            />
                          </View>

                          <View style={styles.ViewmU} pointerEvents={'auto'}>
                            <>
                              {!oddsNFL(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolidju,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'NFL'}
                                  icon={'Ionicons/ios-american-football'}
                                />
                              )}
                            </>
                            <>
                              {oddsNFL(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'oddsDisplayed',
                                        value: oddsChangeLeague(
                                          'americanfootball_nfl'
                                        ),
                                      });
                                      setGlobalVariableValue({
                                        key: 'toggleLeaguesModal',
                                        value: false,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolidK8,
                                    {
                                      backgroundColor: theme.colors.background,
                                      color: theme.colors.background_inverse,
                                    },
                                  ]}
                                  title={'NFL'}
                                  icon={'Ionicons/ios-american-football'}
                                />
                              )}
                            </>
                          </View>

                          <View style={styles.ViewFz} pointerEvents={'auto'}>
                            <>
                              {!oddsNCAAF(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolidzb,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'NCAAF'}
                                  icon={
                                    'Ionicons/ios-american-football-outline'
                                  }
                                />
                              )}
                            </>
                            <>
                              {oddsNCAAF(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'oddsDisplayed',
                                        value: oddsChangeLeague(
                                          'americanfootball_ncaaf'
                                        ),
                                      });
                                      setGlobalVariableValue({
                                        key: 'toggleLeaguesModal',
                                        value: false,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolidxT,
                                    {
                                      backgroundColor: theme.colors.background,
                                      color: theme.colors.background_inverse,
                                    },
                                  ]}
                                  title={'NCAAF'}
                                  icon={
                                    'Ionicons/ios-american-football-outline'
                                  }
                                />
                              )}
                            </>
                          </View>

                          <View style={styles.View_5d} pointerEvents={'auto'}>
                            <>
                              {!oddsNBA(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolidIy,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'NBA'}
                                  icon={'Ionicons/ios-basketball'}
                                />
                              )}
                            </>
                            <>
                              {oddsNBA(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'oddsDisplayed',
                                        value:
                                          oddsChangeLeague('basketball_nba'),
                                      });
                                      setGlobalVariableValue({
                                        key: 'toggleLeaguesModal',
                                        value: false,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolidSO,
                                    {
                                      backgroundColor: theme.colors.background,
                                      color: theme.colors.background_inverse,
                                    },
                                  ]}
                                  title={'NBA'}
                                  icon={'Ionicons/ios-basketball'}
                                />
                              )}
                            </>
                          </View>

                          <View style={styles.ViewcZ} pointerEvents={'auto'}>
                            <>
                              {!oddsNCAAB(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolidoI,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'NCAAMB'}
                                  icon={'Ionicons/ios-basketball-outline'}
                                />
                              )}
                            </>
                            <>
                              {oddsNCAAB(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'oddsDisplayed',
                                        value:
                                          oddsChangeLeague('basketball_ncaab'),
                                      });
                                      setGlobalVariableValue({
                                        key: 'toggleLeaguesModal',
                                        value: false,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolidqo,
                                    {
                                      backgroundColor: theme.colors.background,
                                      color: theme.colors.background_inverse,
                                    },
                                  ]}
                                  title={'NCAAMB'}
                                  icon={'Ionicons/ios-basketball-outline'}
                                />
                              )}
                            </>
                          </View>

                          <View style={styles.View_4t} pointerEvents={'auto'}>
                            <>
                              {!oddsMLB(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolidFL,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'MLB'}
                                  icon={'Ionicons/ios-baseball'}
                                />
                              )}
                            </>
                            <>
                              {oddsMLB(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'oddsDisplayed',
                                        value: oddsChangeLeague('baseball_mlb'),
                                      });
                                      setGlobalVariableValue({
                                        key: 'toggleLeaguesModal',
                                        value: false,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolidG7,
                                    {
                                      backgroundColor: theme.colors.background,
                                      color: theme.colors.background_inverse,
                                    },
                                  ]}
                                  title={'MLB'}
                                  icon={'Ionicons/ios-baseball'}
                                />
                              )}
                            </>
                          </View>

                          <View style={styles.Viewk1} pointerEvents={'auto'}>
                            <>
                              {!oddsNHL(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolidBn,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'NHL'}
                                  icon={'MaterialCommunityIcons/hockey-sticks'}
                                />
                              )}
                            </>
                            <>
                              {oddsNHL(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'oddsDisplayed',
                                        value:
                                          oddsChangeLeague('icehockey_nhl'),
                                      });
                                      setGlobalVariableValue({
                                        key: 'toggleLeaguesModal',
                                        value: false,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolidwR,
                                    {
                                      backgroundColor: theme.colors.background,
                                      color: theme.colors.background_inverse,
                                    },
                                  ]}
                                  title={'NHL'}
                                  icon={'MaterialCommunityIcons/hockey-sticks'}
                                />
                              )}
                            </>
                          </View>

                          <View style={styles.View_2w} pointerEvents={'auto'}>
                            <>
                              {!oddsMMA(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  style={[
                                    styles.ButtonSolid_62,
                                    {
                                      backgroundColor: theme.colors.primary,
                                      color: theme.colors.strong,
                                    },
                                  ]}
                                  title={'MMA'}
                                  icon={'MaterialCommunityIcons/boxing-glove'}
                                />
                              )}
                            </>
                            <>
                              {oddsMMA(Constants['oddsDisplayed']) ? null : (
                                <ButtonSolid
                                  onPress={() => {
                                    try {
                                      setGlobalVariableValue({
                                        key: 'oddsDisplayed',
                                        value: oddsChangeLeague(
                                          'mma_mixed_martial_arts'
                                        ),
                                      });
                                      setGlobalVariableValue({
                                        key: 'toggleLeaguesModal',
                                        value: false,
                                      });
                                    } catch (err) {
                                      console.error(err);
                                    }
                                  }}
                                  style={[
                                    styles.ButtonSolid_1G,
                                    {
                                      backgroundColor: theme.colors.background,
                                      color: theme.colors.background_inverse,
                                    },
                                  ]}
                                  title={'MMA'}
                                  icon={'MaterialCommunityIcons/boxing-glove'}
                                />
                              )}
                            </>
                          </View>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </>
              );
            }}
          </SwaggerAPIApi.FetchOddsDataGET>
        </View>
      </ScrollView>
      null
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconXr: {
    marginRight: 3,
  },
  TextSd: {
    fontSize: 10,
  },
  IconbG: {
    left: 2,
  },
  View_3K: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  Iconvr: {
    marginRight: 3,
  },
  Text_6G: {
    fontSize: 10,
  },
  IconiN: {
    left: 2,
  },
  Viewap: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  IconSl: {
    marginRight: 3,
  },
  TextY1: {
    fontSize: 10,
  },
  Icon_83: {
    left: 2,
  },
  View_8g: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  Iconmu: {
    marginRight: 3,
  },
  Text_2U: {
    fontSize: 10,
  },
  Icon_4f: {
    left: 2,
  },
  ViewEZ: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  Iconlt: {
    marginRight: 3,
  },
  TextNm: {
    fontSize: 10,
  },
  Icong0: {
    left: 2,
  },
  Viewgi: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  IconrH: {
    marginRight: 3,
  },
  Textyk: {
    fontSize: 10,
  },
  IconRU: {
    left: 2,
  },
  Viewai: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  Icon_16: {
    marginRight: 3,
  },
  Textrl: {
    fontSize: 10,
  },
  IconHe: {
    left: 2,
  },
  ViewtH: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  IconKj: {
    marginRight: 3,
  },
  TextUo: {
    fontSize: 10,
  },
  IconQZ: {
    left: 2,
  },
  Vieww3: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  Iconba: {
    marginRight: 3,
  },
  TextEy: {
    fontSize: 10,
  },
  IconTQ: {
    left: 2,
  },
  View_00: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    height: 50,
  },
  ViewDQ: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '33%',
  },
  ImageaE: {
    opacity: 1,
    height: 50,
    width: 125,
  },
  ViewNn: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  Viewfc: {
    justifyContent: 'center',
    height: 50,
  },
  TextjZ: {
    fontSize: 10,
  },
  ViewG0: {
    justifyContent: 'center',
    height: 50,
    paddingLeft: 3,
    paddingRight: 3,
  },
  Viewu9: {
    justifyContent: 'center',
    height: 50,
  },
  ViewiT: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ViewjB: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
  },
  TextXf: {
    fontFamily: 'System',
    fontWeight: '200',
    fontSize: 14,
  },
  View_5R: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  ViewMV: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  ViewHe: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  ViewDa: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '33%',
    height: 50,
  },
  ViewqJ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewjH: {
    justifyContent: 'center',
  },
  TextInputjX: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 6,
  },
  ViewQo: {
    paddingRight: '4%',
    paddingBottom: 10,
    paddingTop: 18,
  },
  Text_9q: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewP6: {
    marginRight: 20,
  },
  Texta1: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Touchableoy: {
    marginRight: 20,
  },
  TextZq: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewvP: {
    marginRight: 20,
  },
  Textnd: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  Touchable_4u: {
    marginRight: 20,
  },
  Textaa: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  View_6k: {
    marginRight: 20,
  },
  Text_2j: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TouchableSz: {
    marginRight: 20,
  },
  TextFA: {
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextwI: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 20,
  },
  ViewqJ: {
    marginTop: 18,
    marginRight: '4%',
    flexDirection: 'row',
  },
  DividerH2: {
    marginLeft: 6,
    marginTop: 10,
    height: 1,
  },
  Textb5: {
    fontSize: 8,
    marginBottom: 5,
    fontFamily: 'System',
    fontWeight: '400',
  },
  TextiZ: {
    fontSize: 8,
    marginBottom: 5,
  },
  TextfX: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  Viewbw: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TextJ0: {
    fontSize: 10,
  },
  ViewYv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextCc: {
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewNM: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewVN: {
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 12,
    paddingBottom: 12,
    maxWidth: 110,
  },
  DividerPb: {
    height: 1,
  },
  FlatListkYContent: {
    flex: 1,
  },
  DividerEn: {
    height: 1,
  },
  Textp1: {
    marginTop: 12,
    fontSize: 8,
    marginBottom: 5,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Textdk: {
    fontSize: 14,
  },
  IconyO: {
    marginLeft: 3,
  },
  ViewWa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextPq: {
    fontSize: 10,
  },
  TextIx: {
    fontSize: 14,
  },
  IconrL: {
    marginLeft: 3,
  },
  Viewbx: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewRe: {
    alignItems: 'center',
    width: 115,
  },
  FlatListCaContent: {
    flex: 1,
  },
  TextGb: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 8,
    marginTop: 12,
    marginBottom: 5,
  },
  IconO8: {
    marginLeft: 3,
  },
  Viewf0: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text_6Z: {
    fontSize: 10,
  },
  Icon_44: {
    marginLeft: 3,
  },
  Viewkm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewzL: {
    alignItems: 'center',
    width: 115,
  },
  FlatListIFContent: {
    flex: 1,
  },
  TextIj: {
    marginTop: 12,
    marginBottom: 5,
    fontSize: 8,
    fontFamily: 'System',
    fontWeight: '600',
  },
  IconA2: {
    marginLeft: 3,
  },
  ViewMJ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextvY: {
    fontSize: 10,
  },
  IconND: {
    marginLeft: 3,
  },
  ViewMj: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewpj: {
    width: 100,
    alignItems: 'center',
  },
  FlatListZeContent: {
    flex: 1,
  },
  Viewew: {
    paddingBottom: 12,
  },
  Dividerkn: {
    height: 1,
  },
  Viewow: {
    flexDirection: 'row',
    flex: 1,
  },
  TouchableHd: {
    width: '100%',
    height: '65%',
  },
  Textxj: {
    fontSize: 18,
  },
  View_7T: {
    alignItems: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    height: 50,
  },
  Viewbm: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '25%',
  },
  Texta2: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  TextBi: {
    fontSize: 12,
  },
  Text_1o: {
    fontSize: 7,
  },
  Textyi: {
    fontSize: 12,
  },
  ViewKC: {
    alignItems: 'center',
  },
  ViewAF: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '50%',
  },
  Image_8y: {
    width: 30,
    height: 30,
  },
  Imagehd: {
    width: 30,
    height: 30,
  },
  Imageam: {
    width: 30,
    height: 30,
  },
  Imagelr: {
    width: 30,
    height: 30,
  },
  Imageib: {
    width: 30,
    height: 30,
  },
  ImagenD: {
    width: 30,
    height: 30,
  },
  Imageyh: {
    width: 30,
    height: 30,
  },
  Imagevu: {
    width: 30,
    height: 30,
  },
  Imagenj: {
    width: 30,
    height: 30,
  },
  ViewSL: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '25%',
    paddingRight: 16,
  },
  ViewVq: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonSolid_7N: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  ButtonSolidbg: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  ButtonSolidQb: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  ButtonSolidvK: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
  ViewAx: {
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: 4,
  },
  ViewTa: {
    height: 11,
  },
  ViewPE: {
    height: '35%',
    justifyContent: 'space-between',
  },
  Text_9c: {
    fontSize: 18,
  },
  Viewat: {
    alignItems: 'center',
    paddingRight: 16,
    flexDirection: 'row',
    height: 50,
  },
  Viewpl: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '33%',
  },
  TextmM: {
    fontSize: 18,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ViewcY: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  Viewwa: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '33%',
  },
  View_26: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SurfaceYk: {
    minHeight: 40,
  },
  ButtonSolid_62: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidsl: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ViewLT: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolidj8: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidbd: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ViewCc: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolidju: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidK8: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ViewmU: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolidzb: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidxT: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ViewFz: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolidIy: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidSO: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  View_5d: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolidoI: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidqo: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ViewcZ: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolidFL: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidG7: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  View_4t: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolidBn: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolidwR: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  Viewk1: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  ButtonSolid_62: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  ButtonSolid_1G: {
    borderRadius: 6,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    height: 40,
  },
  View_2w: {
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  Viewta: {
    alignItems: 'flex-start',
  },
  Viewcy: {
    alignItems: 'flex-start',
    paddingTop: 18,
    paddingBottom: 28,
    paddingLeft: '4%',
    paddingRight: '4%',
  },
  ViewsJ: {
    height: '100%',
  },
  FetchNm: {
    minHeight: 40,
  },
  Viewwn: {
    paddingLeft: '4%',
  },
  ScrollViewajContent: {
    paddingBottom: 18,
  },
  FetchEo: {
    minHeight: 40,
  },
});

export default withTheme(AnalysisTestScreen);
