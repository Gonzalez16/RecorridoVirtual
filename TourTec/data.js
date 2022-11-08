/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var data = {
  "scenes": [
    {
      "id": "Entrada-tec-1", //oriente-station
      "name": "Entrada Tec",
      "edificio": "Entrada",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -50.28309173,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "Entrada-tec-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Entrada-tec-2", //oriente-station
      "name": "Entrada Tec- Int",
      "edificio": "Entrada",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.098090898,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1"
        },
        {
          "yaw": -1002917267,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "Entrada-tec-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-zona0", //oriente-station
      "name": "Entrada",
      "edificio": "Edificio B",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.2087869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-entrada"
        },
        {
          "yaw": -9.2587859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-zona1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-zona1", //oriente-station
      "name": "Pasillo",
      "edificio": "Edificio B",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -9.4087859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-zona0"
        },
        {
          "yaw": -5.3587859,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "B-zonaeste"
        },
        {
          "yaw": -7.2587859,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-zonaoeste"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-zonaoeste", //oriente-station
      "name": "Pasillo",
      "edificio": "Edificio B",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -10.3087859,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "B-zona1"
        },
        {
          "yaw": -5.3087869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-zonanorte"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-zonaeste", //oriente-station
      "name": "Pasillo",
      "edificio": "Edificio B",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -8.6087859,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-zona1"
        },
        {
          "yaw": -6.807869,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "B-zonanorte"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-zonanorte", //oriente-station
      "name": "Entrada",
      "edificio": "Edificio B",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -9.4087859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3.2.2"
        },
        {
          "yaw": -5.2787869,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "B-zonaoeste"
        },
        {
          "yaw": -7.3587869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-zonaeste"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-entrada", //oriente-station
      "name": "Edificio B",
      "edificio": "Edificio B",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.3087869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.1"
        },
        {
          "yaw": -9.4087859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-zona0"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Z-1", //oriente-station
      "name": "D1-Z-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-entrada"
        },
        {
          "yaw":-42.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Z-2", //oriente-station
      "name": "D1-Z-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-3"
        },
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-zona0-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 6.121156678386676067,
          "pitch": -1300.3829292,
          "rotation": 0,
          "target": "D1-entrada"
        },
        {
          "yaw": 14.98728787859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "D1-zona0-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-zona0-2", 
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 64.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zona0-1"
        },
        {
          "yaw": -100.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-1"
        },
        {
          "yaw": -78.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-zonaeste-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -64.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-2"
        },
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zona0-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-zonaeste-2", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -64.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-1"
        },
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-zonaeste-3", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-2"
        },
        {
          "yaw": -64.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Esc-ext-1"
        },
        {
          "yaw": 9.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-salonredes"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-salonredes", //oriente-station
      "name": "Salon Redes",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-zonaoeste-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zona0-2"
        },
        {
          "yaw": -64.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaoeste-2"
        },
        {
          "yaw": -60.3,
          "pitch": -0.0076340532339251865,
          "rotation": 0,
          "target": "D1-IOs-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-zonaoeste-2", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-IOs-1", //oriente-station
      "name": "Salon IOS",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-IOs-2"
        },
        {
          "yaw": 9.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-IOs-2", //oriente-station
      "name": "Salon IOS",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -84.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-IOs-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Esc-ext-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Esc-ext-2"
        },
        {
          "yaw":-40.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Esc-ext-2", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.56678386676067,
          "pitch": -5.8,
          "rotation": 0,
          "target": "D1-Esc-ext-1"
        },
        {
          "yaw": 5.56678386676067,
          "pitch": -0.0076340532339251865,
          "rotation": 0,
          "target": "D1-Esc-ext-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Esc-ext-3", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 9.3,
          "pitch": -5.8,
          "rotation": 0,
          "target": "D1-Esc-ext-2"
        },
        {
          "yaw":-42.56678386676067,
          "pitch": -6,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Esc-int", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 5.56678386676067,
          "pitch": -0.0076340532339251865,
          "rotation": 0,
          "target": "D1-zona0-2"
        },
        {
          "yaw": -5.56678386676067,
          "pitch": -0.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zona0"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-2piso-zona0", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Esc-int"
        },
        {
          "yaw": 65.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-2piso-zonaoeste-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zona0"
        },
        {
          "yaw":-42.2,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-2piso-zonaoeste-2", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-1"
        },
        {
          "yaw":-42.56678386676067,
          "pitch": -5.8,
          "rotation": 0,
          "target": "D1-Esc-ext-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-entrada", //oriente-station 
      "name": "Entrada Al Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 10.0000111111,
          "pitch": -6.00073240232339251865,
          "rotation": 0,
          "target": "D1-zona0-1"
        },
        {
          "yaw": -25.0000111111,
          "pitch": -6.00073240232339251865,
          "rotation": 0,
          "target": "D1-Z-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-Esc-ext-1", //oriente-station  
      "name": "Z-esc-ext-1",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [ 
        {
          "yaw":-20.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-3"
        },
        {
          "yaw":-66.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-6"
        },
        {
          "yaw":-50.2,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-Esc-ext-2", //oriente-station
      "name": "Z-esc-ext-2",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-60.2,
          "pitch": -5.6,
          "rotation": 0,
          "target": "Z-Esc-ext-1"
        },
        {
          "yaw":-21.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-Esc-ext-3", //oriente-station
      "name": "Z-esc-ext-3",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-100.4,
          "pitch": -5.6,
          "rotation": 0,
          "target": "Z-Esc-ext-2"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-2piso-zonaoeste-4", //oriente-station
      "name": "Z-2piso-zonaoeste-4",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-3"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-2piso-zonaoeste-3", //oriente-station
      "name": "Z-2piso-zonaoeste-3",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-4"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-2piso-zonaoeste-2", //oriente-station
      "name": "Z-2piso-zonaoeste-2",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-3"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-2piso-zonaoeste-1", //oriente-station
      "name": "Z-2piso-zonaoeste-1",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-2"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zona0"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-2piso-zona0", //oriente-station 
      "name": "Z-2piso-zona0",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-1"
        },
        {
          "yaw":-50.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-int-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-Esc-int-2", //oriente-station
      "name": "Z-Esc-int-2",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-40.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zona0"
        },
        {
          "yaw":-80.1,
          "pitch": -5.6,
          "rotation": 0,
          "target": "Z-Esc-int-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-Esc-int-1", //oriente-station
      "name": "Z-Esc-int-1",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-57.8,
          "pitch": -5.6,
          "rotation": 0,
          "target": "Z-Esc-int-2"
        },
        {
          "yaw":-40.6,
          "pitch": -5.6,
          "rotation": 0,
          "target": "Z-zona0-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zona0-2", //oriente-station   
      "name": "Z-zona0-2",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-60.3,
          "pitch": -6.2,
          "rotation": 0,
          "target": "Z-Esc-int-1"
        },
        {
          "yaw":-70.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zona0-1"
        },
        {
          "yaw":-77.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-1"
        },
        {
          "yaw":-99.9,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zonaeste-1", //oriente-station  
      "name": "Z-zonaeste-1",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zona0-2"
        },
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zonaeste-2", //oriente-station
      "name": "Z-zonaeste-2",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-1"
        },
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zonaeste-3", //oriente-station
      "name": "Z-zonaeste-3",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-1"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zonaoeste-1", //oriente-station 
      "name": "Z-zonaoeste-1",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zona0-2"
        },
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zonaoeste-2", //oriente-station
      "name": "Z-zonaoeste-2",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-1"
        },
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zonaoeste-3", //oriente-station
      "name": "Z-zonaoeste-3",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Z-zona0-1", //oriente-station
      "name": "Z-zona0-1",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-41.9,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zona0-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": -110,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -7.9897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "Entrada-tec-2"
        },
        {
          "yaw": 7.8787859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "D1-Z-6"
        }
        ,
        {
          "yaw": -9.6087859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.0"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.0", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.1897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1"
        },
        {
          "yaw": -3.1897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.1"
        }
        
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.19897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.0"
        },
        {
          "yaw": -4.59897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-entrada"
        }
        ,
        {
          "yaw": -9.19897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.2", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.19897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.1"
        },
        {
          "yaw": -4.65897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3"
        },
        {
          "yaw": -9.95897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "camino-1.4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.3", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -4.90897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.2"
        },
        {
          "yaw": -8.10897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3.1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.4", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -8.25897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "camino-1.2"
        },
        {
          "yaw": -4.65897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.4.1" //1.4.1
        },
        {
          "yaw": -9.45897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "camino-1.4.2" //1.4.2
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.4.1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -7.85897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.4"
        },
        {
          "yaw": -4.65897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.4.1.1" //1.4.1
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.4.1.1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -7.85897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.4.1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.4.2", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.35897869,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "camino-1.4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.3.1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -4.90897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3"
        },
        {
          "yaw": -3.20897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3.1.1" //1.3.1.1
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.3.1.1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -7.75897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3.1"
        },
        {
          "yaw": -6.1597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "camino-1.3.2.1" //1.3.1.1
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.3.2.1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -7.85897869,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "camino-1.3.1.1"
        },
        {
          "yaw":  -6.2807869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3.2.2" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "camino-1.3.2.2", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -4.6357869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "camino-1.3.2.1"
        },
        {
          "yaw": -8.80897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-zonanorte" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Z-3", //oriente-station
      "name": "D1-Z-3",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-47.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-4"
        },
        {
          "yaw":-100.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Z-4", //oriente-station
      "name": "D1-Z-4",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-46.9,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-5"
        },
        {
          "yaw":-100.3,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Z-5", //oriente-station
      "name": "D1-Z-5",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-89.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-4"
        },
        {
          "yaw":46.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "D1-Z-6", //oriente-station
      "name": "D1-Z-6",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Entrada-tec-1"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-5"
        },
        {
          "yaw": 9.7,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
  ],
  "name": "Sample Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
