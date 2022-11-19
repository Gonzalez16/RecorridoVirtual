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
      "name": "Lobby",
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
          "target": "camino-principal"
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
          "target": "B-entrada-norte-1"
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
          "target": "Entrada-BQ@-1"
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
      "id": "camino-principal", //oriente-station
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
          "target": "PASICAFE"
        },
        {
          "yaw": -9.6087859,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "Entrada-B-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Entrada-B-1", //oriente-station
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
          "target": "camino-principal"
        },
        {
          "yaw": -3.1897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "Entrada-BQ@-1"
        }
        
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-entrada-norte-2", //oriente-station
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
          "target": "B-Q-A-H-4"
        },
        {
          "yaw":  -6.2807869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-entrada-norte-1" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-entrada-norte-1", //oriente-station
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
          "target": "B-entrada-norte-2"
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
      "id": "Entrada-BQ@-1", //oriente-station
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
          "target": "Entrada-B-1"
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
          "target": "B-Q@-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q@-1", //oriente-station
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
          "target": "Entrada-BQ@-1"
        },
        {
          "yaw": -4.65897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q@-2"
        },
        {
          "yaw": -9.95897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-Q-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q@-2", //oriente-station
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
          "target": "B-Q@-1"
        },
        {
          "yaw": -8.10897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q-A-H-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q-1", //oriente-station
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
          "target": "B-Q@-1"
        },
        {
          "yaw": -4.65897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q-2" //1.4.1
        },
        {
          "yaw": -9.45897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-Q-3" //1.4.2
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q-2", //oriente-station
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
          "target": "B-Q-1"
        },
        {
          "yaw": -4.65897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "Q-entrada" //1.4.1
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "Q-entrada", //oriente-station
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
          "target": "B-Q-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q-3", //oriente-station
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
          "target": "B-Q-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q-A-H-3", //oriente-station
      "name": "3",
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
          "target": "B-Q@-2"
        },
        {
          "yaw": -3.20897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q-A-H-4" 
        },
        {
          "yaw": -3.20897869,
          "pitch": -100.1,
          "rotation": 0,
          "target": "BIBLIOPASI" 
        },
        {
          "yaw": -7.80897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q-A-H-3.1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q-A-H-4", //oriente-station
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
          "target": "B-Q-A-H-3"
        },
        {
          "yaw": -6.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-entrada-norte-2" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q-A-H-3.1", //oriente-station
      "name": "3.1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -4.00897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-Q-A-H-3"
        },
        {
          "yaw": -4.7597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q-A-H-3.2" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "B-Q-A-H-3.2", //oriente-station
      "name": "3.2",
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
          "target": "B-Q-A-H-3.1"
        },
        {
          "yaw": -6.3597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-F-G-2" 
        },
        {
          "yaw": -4.7597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-entrada-norte-1" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-entrada-norte-1", //oriente-station
      "name": "hentrada",
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
          "target": "B-Q-A-H-3.1"
        },
        {
          "yaw": -6.2097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-1" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-J-T-1", //oriente-station
      "name": "h-j-t-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.15897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-F-G-1"
        },
        {
          "yaw": -4.7097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-entrada-norte-1" 
        },
        {
          "yaw": -6.8597869,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "J-entrada" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "J-entrada", //oriente-station
      "name": "j-entrada",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.20897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-1"
        },
        {
          "yaw": -6.3097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-entrada-norte-1" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-J-T-F-G-1", //oriente-station
      "name": "h-j-t-f-g-1",
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
          "target": "H-J-T-1"
        },
        {
          "yaw": -3.0097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-2"
        },
        {
          "yaw": -4.6097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-F-G-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-J-T-2", //oriente-station
      "name": "h-j-t-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.30897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-F-G-1"
        },
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-3"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "J-entrada-oeste"
        },
        {
          "yaw": -6.30897869,
          "pitch": -1.333333333,
          "rotation": 0,
          "target": "K-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-J-T-3", //oriente-station
      "name": "h-j-t-3",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "J-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "J-1", //oriente-station
      "name": "j-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-3"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "J-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "J-2", //oriente-station
      "name": "j-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-K-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "J-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "J-K-1", //oriente-station
      "name": "j-k-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-K-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "J-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "J-K-2", //oriente-station
      "name": "j-k-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-K-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-1", //oriente-station
      "name": "k-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-K-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-2", //oriente-station
      "name": "k-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-3", //oriente-station
      "name": "k-3",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-4", //oriente-station
      "name": "k-4",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-3"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-5", //oriente-station
      "name": "k-5",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-4"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-6", //oriente-station
      "name": "k-6",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-5"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-7", //oriente-station
      "name": "k-7",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-6"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-8", //oriente-station
      "name": "k-8",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-7"
        },
        {
          "yaw": -30.0597869,
          "pitch": -10.333333333,
          "rotation": 0,
          "target": "K-Z-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-9"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-Z-1", //oriente-station
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
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-8"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-Z-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-Z-2", //oriente-station
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
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-Z-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "D1-Z-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "K-9", //oriente-station
      "name": "k-9",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-8"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-1", //oriente-station
      "name": "i-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "EAD-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-2", //oriente-station
      "name": "i-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-3", //oriente-station
      "name": "i-3",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-4", //oriente-station
      "name": "i-4",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-3"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-5", //oriente-station
      "name": "i-5",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-4"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-6", //oriente-station
      "name": "i-6",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-5"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-7", //oriente-station
      "name": "i-7",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-6"
        },
        {
          "yaw": -3.0597869,
          "pitch": -1.333333333,
          "rotation": 0,
          "target": "I-V-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-8", //oriente-station
      "name": "i-8",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-7"
        },
        {
          "yaw": -18.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-9"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-9"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-9", //oriente-station
      "name": "i-9",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-8"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "EAD-1", //oriente-station
      "name": "ead-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "EAD-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "EAD-2", //oriente-station
      "name": "ead-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "EAD-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "EAD-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "EAD-3", //oriente-station
      "name": "ead-3",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "EAD-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "EAD-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "EAD-4", //oriente-station
      "name": "ead-4",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "EAD-3"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "EAD-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "EAD-5", //oriente-station
      "name": "ead-5",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "EAD-4"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "EAD-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "EAD-6", //oriente-station
      "name": "ead-6",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "EAD-5"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "EAD-6", //oriente-station
      "name": "ead-6",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "EAD-5"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-V-1", //oriente-station
      "name": "i-v-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-V-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-V-2", //oriente-station
      "name": "i-v-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-V-1"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-V-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-V-3", //oriente-station
      "name": "i-v-3",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-V-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-V-EN-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-V-EN-1", //oriente-station
      "name": "i-v-en-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-V-3"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-V-EN-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-V-EN-2", //oriente-station
      "name": "i-v-en-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-V-EN-1"
        },
        {
          "yaw": -30.0597869,
          "pitch": -10.333333333,
          "rotation": 0,
          "target": "PASICAFE"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-V-EN-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-V-EN-3", //oriente-station
      "name": "i-v-en-3",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-V-EN-2"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-V-EN-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "I-V-EN-4", //oriente-station
      "name": "i-v-en-4",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "I-V-EN-3"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "I-V-EN-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "J-entrada-oeste", //oriente-station
      "name": "j-entrada-oeste",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -6.2509786,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-2"
        },
        {
          "yaw": -4.1597869,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "H-J-T-2"
        },
        {
          "yaw": -3.0597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-entrada-norte-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-F-G-2", //oriente-station
      "name": "h-f-g-2",
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
          "target": "H-F-G-3" 
        },
        {
          "yaw": -3.1597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q-A-H-3.2" 
        },
        {
          "yaw": -4.7597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-F-G-1" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-F-G-3", //oriente-station
      "name": "h-f-g-3",
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
          "target": "H-F-G-2" 
        },
        {
          "yaw": -4.7597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-F-G-4" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "H-F-G-4", //oriente-station
      "name": "h-f-g-4",
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
          "target": "H-F-G-3" //EL QUE SIGUE
        },
        {
          "yaw": -4.7597869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-F-G-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "J-entrada-norte-1", //oriente-station
      "name": "j-entrada-norte-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.15897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-entrada"
        },
        {
          "yaw": -7.9097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-entrada-oeste" 
        },
        {
          "yaw": -6.1097869,
          "pitch": -100.333333333,
          "rotation": 5,
          "target": "T-entrada-2" 
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "T-entrada-2", //oriente-station
      "name": "T-entrada-2",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -4.0897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "J-entrada-norte-1"
        },
        {
          "yaw": -7.9257869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-entrada-norte-1" 
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
    {
      "id": "BIBLIOPASI", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO1"
        },
        {
          "yaw":-4.4,
          "pitch": -60.0076340532339251865,
          "rotation": 0,
          "target": "B-Q-A-H-3"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIOPASI1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIOPASI1", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO1"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIOPASI"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO1", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO2"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIOPASI"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO2", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO3"
        },
        {
          "yaw":-4.4,
          "pitch": -8.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO2-9"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO3", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO4"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO4", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO5"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO5", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO7"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO7-6", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO7", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO8"
        },
        {
          "yaw":-4.4,
          "pitch": -60.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO7-6"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO8", //oriente-station
      "name": "Biblioteca",
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
          "target": "BIBLIO1"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "BIBLIO7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "BIBLIO2-9", //oriente-station
      "name": "Biblioteca",
      "edificio": "0",
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
          "target": "BIBLIO2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "PASICAFE", //oriente-station
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
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "PASICAFE1"
        },
        {
          "yaw":-4.4,
          "pitch": -60.0076340532339251865,
          "rotation": 0,
          "target": "I-V-EN-2"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "camino-principal"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "PASICAFE1", //oriente-station
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
          "yaw":-42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "PASICAFE"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CAFE1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CAFE1", //oriente-station
      "name": "Cafeteria",
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
          "target": "PASICAFE1"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CAFE2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CAFE2", //oriente-station
      "name": "Cafeteria",
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
          "target": "CAFE3"
        },
        {
          "yaw":-89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CAFE1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CAFE3", //oriente-station
      "name": "Cafeteria",
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
          "target": "CAFE2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CAMINOCANCHAS", //oriente-station
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
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHATECHA1"
        },
        {
          "yaw":-42.4,
          "pitch": -3.0076340532339251865,
          "rotation": 0,
          "target": "CANCHA"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "I-8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHA", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CAMINOCANCHAS"
        },
        {
          "yaw":-7.4,
          "pitch": -3.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO1"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "EAD-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHATECHA1", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHATECHA2"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CAMINOCANCHAS"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHATECHA2", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHATECHA1"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHATECHA3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHATECHA3", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHATECHA2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO1", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO2"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHA"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO2", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO1"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO3", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO2"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO4", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO3"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO5", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO4"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "FUT7", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO6", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO5"
        },
        {
          "yaw":-4.4,
          "pitch": -3.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6-6"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO6-6", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "FUT7"
        },
        {
          "yaw":-4.4,
          "pitch": -3.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CAMPO"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO7", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO8", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO7"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO9"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CANCHAPASILLO9", //oriente-station
      "name": "Cancha",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CAMPO", //oriente-station
      "name": "Campo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CAMPO1"
        },
        {
          "yaw":-9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO6-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots":[{}],
      "videoHotspots":[{}]
    },
    {
      "id": "CAMPO1", //oriente-station
      "name": "Campo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw":-2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CAMPO"
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
