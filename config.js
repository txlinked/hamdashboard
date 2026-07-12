const disableSetup = false;
const disableLdCfg = false;

var topBarCenterText = `N3DMC - Waco, Texas - Central Texas`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Format:
// ["COLOR", "MENU TEXT", "URL", "SCALE", "SIDE"]
//
// No side setting = left side
// "R" = right side

var aURL = [
[
"f3de21",
"SATS",
"satellite.js"
],

[
"2196F3",
"SUPERMON",
"https://hotarc.txlinked.com/supermon/link.php?nodes=645310,559820,559822,503600",
"1"
],

[
"2196F3",
"N3DMC",
"https://n3dmc.org/",
"1"
],

[
"2196F3",
"CTXRS",
"https://ctxrs.org/",
"1"
],

[
"2196F3",
"HOTARC",
"https://hotarc.org/",
"1"
],

[
"2196F3",
"CLUBLOG",
"https://clublog.org/livestream/N3DMC",
"1.7"
],

[
"2196F3",
"CONTEST",
"https://www.contestcalendar.com/fivewkcal.html",
"1"
],

[
"2196F3",
"DX CLUSTER",
"https://dxcluster.ha8tks.hu/map/",
"1"
],

[
"2196F3",
"APRS",
"https://aprs.fi/#!lat=31.5500&lng=-97.1500",
"1"
],

[
"2196F3",
"LIGHTNING",
"https://map.blitzortung.org/#7/31.55/-97.15",
"1",
"R"
],

[
"2196F3",
"NWS WACO",
"https://forecast.weather.gov/MapClick.php?lat=31.55&lon=-97.15",
"1",
"R"
],

[
"2196F3",
"RADAR",
"https://radar.weather.gov/",
"1",
"R"
],

[
"2196F3",
"WEATHER",
"https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=31.55&lon=-97.15&zoom=7",
"1",
"R"
],

[
"2196F3",
"WINDS",
"https://earth.nullschool.net/#current/wind/surface/level/orthographic=-97.15,31.55,3000",
"1",
"R"
],

[
"2196F3",
"TIME",
"https://time.is/Waco",
"1",
"R"
],

[
"2196F3",
"ADSB",
"https://globe.adsbexchange.com/?airport=ACT",
"1",
"R"
]
];

// Dashboard tiles
// A 4 by 3 grid requires exactly 12 tiles.

var aIMG = [
[
"W5ZDN SUPERMON",
"iframe|https://hotarc.txlinked.com/supermon/link.php?nodes=645310,559820,559822,503600"
],

[
"CENTRAL TEXAS RADAR",
"https://radar.weather.gov/ridge/standard/KFWS_loop.gif"
],

[
"CENTRAL TEXAS RADAR SOUTH",
"https://radar.weather.gov/ridge/standard/KGRK_loop.gif"
],

[
"CONUS RADAR",
"https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
],

[
"CONUS RADAR LARGE",
"https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif"
],

[
"ISS POSITION",
"https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"
],

[
"NORTH AMERICA LIGHTNING",
"https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"
],

[
"WACO WEATHER FORECAST",
"https://forecast.weather.gov/meteograms/Plotter.php?lat=31.55&lon=-97.15&wfo=FWD&zcode=TXZ118&gset=18&gdiff=3&unit=0&tinfo=CY6&ahour=0&pcmd=111011111111100000000000000000000000000000000000000000000"
],

[
"HF PROPAGATION",
"https://www.hamqsl.com/solar101vhf.php"
],

[
"PLANETARY K INDEX",
"https://services.swpc.noaa.gov/images/planetary-k-index.gif"
],

[
"SOLAR X-RAY FLUX",
"https://services.swpc.noaa.gov/images/goes-xray-flux.gif"
],

[
"DRAP ABSORPTION",
"https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
]
];

// Tile reload and rotation times in milliseconds

var tileDelay = [
60000,
30000,
30000,
30000,

30000,
30000,
30000,
300000,

60000,
60000,
60000,
60000
];

// RSS feeds
// Format:
// ["FEED URL", REFRESH INTERVAL IN MINUTES]

var aRSS = [
[
"https://www.amsat.org/feed/",
60
],

[
"https://daily.hamweekly.com/atom.xml",
120
]
];
