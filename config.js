```javascript
const disableSetup = false;
const disableLdCfg = false;

var topBarCenterText = `N3DMC - Waco, Texas - Central Texas`;

// ============================================================
// GRID LAYOUT
// ============================================================

var layout_cols = 4;
var layout_rows = 3;


// ============================================================
// SIDE MENU ITEMS
//
// Format:
// ["COLOR", "BUTTON NAME", "URL", "SCALE", "SIDE"]
//
// Leave SIDE blank for the left menu.
// Use "R" for the right menu.
// ============================================================

var aURL = [

  // Configuration selector
  ["f3de21", "SATS", "satellite.js"],

  // Left-side menu
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

  // Right-side menu
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
    "https://radar.weather.gov/?settings=v1_eyJhZGRyZXNzIjoid2FjbywgdHgiLCJsb2NhdGlvbiI6WzMxLjU1LC05Ny4xNV0sInpvb20iOjcsImZpbHRlciI6ImxvdyIsImxheWVycyI6eyJiYXNlIjp0cnVlLCJicmVmIjp0cnVlLCJib3VuZHMiOnRydWUsImNvdW50eSI6ZmFsc2UsImNpdGllcyI6dHJ1ZSwiaGlnaHdheSI6ZmFsc2UsImludGVyc3RhdGUiOmZhbHNlLCJzdGF0ZSI6dHJ1ZSwic3RhdGVXYXJuaW5nIjpmYWxzZX19",
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


// ============================================================
// DASHBOARD TILES
//
// There are 12 tiles in the 4-column by 3-row layout.
//
// Standard image:
// ["TITLE", "IMAGE URL"]
//
// Rotating images:
// [["TITLE 1", "TITLE 2"], "URL 1", "URL 2"]
//
// Embedded webpage:
// ["TITLE", "iframe|URL"]
//
// Inverted image:
// ["TITLE", "invert|IMAGE URL"]
// ============================================================

var aIMG = [

  // Tile 1
  [
    ["CONUS RADAR LARGE", "CONUS RADAR"],
    "https://radar.weather.gov/ridge/standard/CONUS-LARGE_loop.gif",
    "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"
  ],

  // Tile 2
  [
    "CENTRAL TEXAS RADAR",
    "https://radar.weather.gov/ridge/standard/KFWS_loop.gif"
  ],

  // Tile 3
  [
    "SEVERE WEATHER OUTLOOK",
    "https://www.spc.noaa.gov/products/outlook/day1otlk.gif"
  ],

  // Tile 4
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"
  ],

  // Tile 5
  [
    "SOUTHERN PLAINS SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/sp/GEOCOLOR/GOES19-SP-GEOCOLOR-600x600.gif"
  ],

  // Tile 6
  [
    "GULF COAST SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/SECTOR/gm/GEOCOLOR/GOES19-GM-GEOCOLOR-600x600.gif"
  ],

  // Tile 7
  [
    "NORTH AMERICA LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa"
  ],

  // Tile 8
  [
    "WACO WEATHER",
    "iframe|https://forecast.weather.gov/MapClick.php?lat=31.55&lon=-97.15"
  ],

  // Tile 9
  [
    "WACO AIR TRAFFIC",
    "iframe|https://globe.adsbexchange.com/?airport=ACT"
  ],

  // Tile 10
  [
    "CENTRAL TEXAS APRS",
    "iframe|https://aprs.fi/#!lat=31.55&lng=-97.15"
  ],

  // Tile 11
  [
    "CTXRS",
    "iframe|https://ctxrs.org/"
  ],

  // Tile 12
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"
  ]

];


// ============================================================
// TILE ROTATION AND REFRESH DELAYS
//
// Values are milliseconds.
// Each number corresponds to one dashboard tile.
//
// 10000 milliseconds = 10 seconds
// 30000 milliseconds = 30 seconds
// 60000 milliseconds = 1 minute
// ============================================================

var tileDelay = [

  30000,  // Tile 1 - CONUS radar
  30000,  // Tile 2 - Central Texas radar
  60000,  // Tile 3 - Severe weather outlook
  30000,  // Tile 4 - ISS position

  30000,  // Tile 5 - Southern Plains satellite
  30000,  // Tile 6 - Gulf Coast satellite
  30000,  // Tile 7 - Lightning
  300000, // Tile 8 - Waco weather

  60000,  // Tile 9 - Waco air traffic
  60000,  // Tile 10 - APRS
  60000,  // Tile 11 - CTXRS
  60000   // Tile 12 - HF propagation

];


// ============================================================
// RSS FEEDS
//
// Format:
// ["RSS URL", REFRESH INTERVAL IN MINUTES]
// ============================================================

var aRSS = [

  [
    "https://www.arrl.org/rss/news",
    60
  ],

  [
    "https://www.amsat.org/feed/",
    60
  ],

  [
    "https://daily.hamweekly.com/atom.xml",
    120
  ]

];
```
