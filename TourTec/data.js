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
          "target": "camino-principal"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-zona0-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 3.1087355192201738,
        "pitch": 0.07911220346343839,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -0.08579595790989991,
          "pitch": 0.44647589287045086,
          "rotation": 0,
          "target": "D1-entrada"
        },
        {
          "yaw": -2.973074373201772,
          "pitch": 0.24493679804896118,
          "rotation": 6.283185307179586,
          "target": "D1-2piso-zona0"
        },
        {
          "yaw": -2.296182147584709,
          "pitch": 0.2618339224012374,
          "rotation": 1.5707963267948966,
          "target": "D1-zonaeste-1"
        },
        {
          "yaw": 2.370281966738963,
          "pitch": 0.32493612975286723,
          "rotation": 4.71238898038469,
          "target": "D1-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-zonaeste-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.2545212154104952,
        "pitch": 0.1399790807799164,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.5119183802176526,
          "pitch": 0.31132993157698685,
          "rotation": 0,
          "target": "D1-zonaeste-2"
        },
        {
          "yaw": 1.2685186438052618,
          "pitch": 0.5421564228563369,
          "rotation": 5.497787143782138,
          "target": "D1-zona0-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-zonaeste-2", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.735440738499637,
        "pitch": 0.09066418617589278,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.456618830750113,
          "pitch": 0.28553326465930695,
          "rotation": 0,
          "target": "D1-zonaeste-1"
        },
        {
          "yaw": 1.6441300125881515,
          "pitch": 0.35849477254171624,
          "rotation": 0,
          "target": "D1-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-zonaeste-3", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.5281008359445885,
        "pitch": 0.18172045600659104,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.5198706670001947,
          "pitch": 0.5276916123889599,
          "rotation": 0,
          "target": "D1-zonaeste-2"
        },
        {
          "yaw": -1.64202037603917,
          "pitch": 0.6162182957351732,
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-zonaoeste-1", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.011717731967966,
        "pitch": 0.05758862862713521,
        "fov": 1.3961014885228744
      },
      "linkHotspots": [
        {
          "yaw": 1.0687056065422276,
          "pitch": 0.6684998480806446,
          "rotation": 0.7853981633974483,
          "target": "D1-zona0-1"
        },
        {
          "yaw": -2.0511305621436016,
          "pitch": 0.30510927666956533,
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-zonaoeste-2", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.4270224220350833,
        "pitch": 0.14629435647237088,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.5724921434528865,
          "pitch": 0.33920713797086677,
          "rotation": 0,
          "target": "D1-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -42.56678386676067,
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -1.378339443692422,
          "pitch": 0.5687240529921738,
          "rotation": 0,
          "target": "D1-Esc-ext-3"
        },
        {
          "yaw": 3.0872517690978922,
          "pitch": 0.38858465065027126,
          "rotation": 0,
          "target": "D1-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-Esc-ext-3", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.1572821718188866,
        "pitch": 0.2782035424155467,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 2.974049147409122,
          "pitch": 0.6360347294689941,
          "rotation": 0,
          "target": "D1-Esc-ext-1"
        },
        {
          "yaw": -42.56678386676067,
          "pitch": -6,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-2piso-zona0", //oriente-station
      "name": "Edificio D1",
      "edificio": "Edificio D1",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.272786173116655,
        "pitch": 0.13486138341906795,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.3305991772438794,
          "pitch": 0.34642712956594757,
          "rotation": 0,
          "target": "D1-zona0-1"
        },
        {
          "yaw": 3.067008290882657,
          "pitch": 0.3289943077756572,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -89.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zona0"
        },
        {
          "yaw": -42.2,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -89.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-2piso-zonaoeste-1"
        },
        {
          "yaw": -42.56678386676067,
          "pitch": -5.8,
          "rotation": 0,
          "target": "D1-Esc-ext-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": 9.6000111111,
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-Esc-ext-1", //oriente-station  
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -20.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-3"
        },
        {
          "yaw": -66.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-6"
        },
        {
          "yaw": -50.2,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-Esc-ext-3", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -100.4,
          "pitch": -5.6,
          "rotation": 0,
          "target": "Z-Esc-ext-1"
        },
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-2piso-zonaoeste-4", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-3"
        },
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-2piso-zonaoeste-3", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-4"
        },
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-2piso-zonaoeste-2", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-3"
        },
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-2piso-zonaoeste-1", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-2"
        },
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zona0"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-2piso-zona0", //oriente-station 
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zonaoeste-1"
        },
        {
          "yaw": -50.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zona0-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-zonaeste-1", //oriente-station  
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zona0-1"
        },
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-zonaeste-2", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-1"
        },
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-zonaeste-3", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-Esc-ext-1"
        },
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-zonaoeste-1", //oriente-station 
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zona0-1"
        },
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-zonaoeste-2", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-1"
        },
        {
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-zonaoeste-3", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -89.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "Z-zona0-1", //oriente-station
      "name": "Edificio Z",
      "edificio": "Edificio Z",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -41.9,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-2piso-zona0"
        },
        {
          "yaw": -77.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaeste-1"
        },
        {
          "yaw": -99.9,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "Z-zonaoeste-1"
        }
        //hace falta la salida
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "camino-principal", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.325875243477963,
        "pitch": 0.13274829198208593,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -7.9897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "Entrada-tec-1"
        },
        {
          "yaw": 1.361065935288833,
          "pitch": 0.2579142191080006,
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -6.2807869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-entrada-norte-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "target": "Q-entrada" //1.4.1
        },
        {
          "yaw": -9.45897869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "B-Q-3" //1.4.2
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "target": "B-Q-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "B-Q-A-H-3", //oriente-station
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
          "target": "B-Q@-2"
        },
        {
          "yaw": -3.20897869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "B-Q-A-H-4"
        },
        {
          "yaw": -0.1344830672478885,
          "pitch": 0.2223241422930009,
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": 0.17256574188341567,
          "pitch": 0.22706038591711497,
          "rotation": 0.7853981633974483,
          "target": "B-entrada-norte-2"
        },
        {
          "yaw": 1.4792421737038701,
          "pitch": 0.29377786071126444,
          "rotation": 0,
          "target": "I-V-EN-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "B-Q-A-H-3.1", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "B-Q-A-H-3.2", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-entrada-norte-1", //oriente-station
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
          "target": "B-Q-A-H-3.1"
        },
        {
          "yaw": -6.2097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-1"
        },
        {
          "yaw": -3.2097869,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-entrada-norte-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-J-T-1", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "J-entrada", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-J-T-F-G-1", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-J-T-2", //oriente-station
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
          "yaw": -4,
          "pitch": -100.333333333,
          "rotation": -1,
          "target": "K-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-J-T-3", //oriente-station
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
          "yaw": -89.5,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-1"
        },
        {
          "yaw": -42.5,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "J-1", //oriente-station
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
          "yaw": -89.5,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-2"
        },
        {
          "yaw": -42.5,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "H-J-T-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "J-2", //oriente-station
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
          "target": "J-K-1"
        },
        {
          "yaw": -42.5,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "J-K-1", //oriente-station
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
          "yaw": -89.5,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-K-2"
        },
        {
          "yaw": -42.5,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "J-K-2", //oriente-station
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
          "yaw": -6.2,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-3"
        },
        {
          "yaw": -3.1,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "K-1"
        },
        {
          "yaw": -4.8,
          "pitch": -100.333333333,
          "rotation": 0,
          "target": "J-K-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "K-1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.3949222124784662,
        "pitch": -0.014793440155589366,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 2.9549475834093535,
          "pitch": 0.24555667262256264,
          "rotation": 0,
          "target": "H-J-T-2"
        },
        {
          "yaw": -0.21982975704571572,
          "pitch": 0.2448473076563502,
          "rotation": 0,
          "target": "J-K-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "K-3", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -3.06094520660789,
        "pitch": -0.09705884425549982,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -89.4,
          "pitch": -6.1,
          "rotation": 0,
          "target": "J-K-2"
        },
        {
          "yaw": -0.024858150434774018,
          "pitch": 0.5018824118026632,
          "rotation": 0,
          "target": "K-4"
        },
        {
          "yaw": -1.5218701141026365,
          "pitch": 0.32062681865535936,
          "rotation": 0,
          "target": "K-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "K-4", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.5100757212688247,
        "pitch": -0.010173539042835245,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.5626927571806632,
          "pitch": 0.40074446715798473,
          "rotation": 6.283185307179586,
          "target": "K-3"
        },
        {
          "yaw": 3.0676873448655524,
          "pitch": 0.2860914991184771,
          "rotation": 0,
          "target": "K-6"
        },
        {
          "yaw": 0.874712453710309,
          "pitch": 0.377247665150346,
          "rotation": 0,
          "target": "H-F-G-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "K-6", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 3.023743064955898,
        "pitch": -0.04028877538683773,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.7207993579665128,
          "pitch": 0.24978852424346698,
          "rotation": 0,
          "target": "K-4"
        },
        {
          "yaw": 1.846571915315228,
          "pitch": 0.22990443062130161,
          "rotation": 5.497787143782138,
          "target": "K-8"
        },
        {
          "yaw": 2.9146879444777225,
          "pitch": 0.1730114278270385,
          "rotation": 0,
          "target": "K-7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "K-7", //oriente-station
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
          "yaw": -6.42,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "K-Z-1"
        },
        {
          "yaw": 1.6380426426345949,
          "pitch": 0.318978870339361,
          "rotation": 0,
          "target": "K-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "K-8", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.04920100178968667,
        "pitch": 0.2304798745019898,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.6642636823238757,
          "pitch": 0.20789249062026194,
          "rotation": 0,
          "target": "K-9"
        },
        {
          "yaw": 2.384307209752735,
          "pitch": 0.22491129888385508,
          "rotation": 5.497787143782138,
          "target": "K-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "target": "K-7"
        },
        {
          "yaw": -2.5597869,
          "pitch": -100.333333333,
          "rotation": 1,
          "target": "K-Z-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "K-9", //oriente-station
      "name": "q",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.22805471243104058,
        "pitch": 0.11190892947124453,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -2.0875546596071555,
          "pitch": 0.12103284286293814,
          "rotation": 5.497787143782138,
          "target": "K-8"
        },
        {
          "yaw": 0.052590150355968035,
          "pitch": 0.3216477347619655,
          "rotation": 0,
          "target": "I-8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-1", //oriente-station
      "name": "I-1",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02869423558588302,
          "pitch": 0.4079032198687216,
          "rotation": 0,
          "target": "I-2"
        },
        {
          "yaw": 3.1153763831801005,
          "pitch": 0.29812024238496093,
          "rotation": 0,
          "target": "EAD-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-2", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.3753116151084281,
        "pitch": 0.01267818055963943,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.6131799099915778,
          "pitch": 0.26101766189737496,
          "rotation": 0,
          "target": "I-1"
        },
        {  
          "yaw": -1.4553133324545993,
          "pitch": 0.2949524994979651,
          "rotation": 0,
          "target": "I-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-3", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.8832942601330256,
        "pitch": 0.1435822822506445,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.6140341770800326,
          "pitch": 0.3549963128694955,
          "rotation": 0,
          "target": "I-2"
        },
        {
          "yaw": 0.04131923540292348,
          "pitch": 0.46133538812952324,
          "rotation": 0,
          "target": "I-4"
        },
        {
          "yaw": -3.064691508391224,
          "pitch": 0.2637982080842267,
          "rotation": 0,
          "target": "I-7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-4", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5325622863665043,
        "pitch": 0.12841272001335113,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.409355029282576,
          "pitch": 0.3286574894677816,
          "rotation": 0,
          "target": "I-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-7", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -3.0049870137893873,
        "pitch": 0.050777019460745976,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.5554462584333022,
          "pitch": 0.3023233797917211,
          "rotation": 0,
          "target": "I-3"
        },
        {
          "yaw": 0.01731944014308162,
          "pitch": 0.32582749155090696,
          "rotation": 0,
          "target": "I-V-1"
        },
        {
          "yaw": -3.081464151448536,
          "pitch": 0.2739733416350951,
          "rotation": 0,
          "target": "I-8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-8", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.3525969652195435,
        "pitch": 0.08092587874986812,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.560002086456385,
          "pitch": 0.25919402879601705,
          "rotation": 0,
          "target": "I-7"
        },
        {
          "yaw": -0.05659896611443571,
          "pitch": 0.43854646290017385,
          "rotation": 0,
          "target": "K-9"
        },
        {
          "yaw": -1.592616652225745,
          "pitch": 0.2409239265778922,
          "rotation": 0,
          "target": "CANCHA"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "EAD-1", //oriente-station
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
          "yaw": -0.0646455292163175,
          "pitch": 0.3053894854242909,
          "rotation": 0,
          "target": "EAD-2"
        },
        {
          "yaw": 3.0741392598956407,
          "pitch": 0.2859764933028863,
          "rotation": 0,
          "target": "CANCHA"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "EAD-2", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -3.1329078923716196,
        "pitch": -0.1474109785024318,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 3.090170713043804,
          "pitch": 0.3400747923126026,
          "rotation": 0,
          "target": "EAD-1"
        },
        {
          "yaw": -1.5404317199359188,
          "pitch": 0.2783201659896726,
          "rotation": 0,
          "target": "EAD-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "EAD-4", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -1.3551343624088688,
        "pitch": 0.06127485262986987,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.5561583391610654,
          "pitch": 0.37402778603763487,
          "rotation": 0,
          "target": "EAD-2"
        },
        {
          "yaw": 1.5046622162913348,
          "pitch": 0.36744134790383853,
          "rotation": 0,
          "target": "EAD-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "EAD-5", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.02599544186194791,
        "pitch": 0.04323754093206844,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 0.6211177398700194,
          "pitch": 0.5186154982462359,
          "rotation": 5.497787143782138,
          "target": "EAD-4"
        },
        {
          "yaw": -1.7178952949703472,
          "pitch": 0.4218450091271251,
          "rotation": 0,
          "target": "EAD-6"
        },
        {
          "yaw": 3.028552576258507,
          "pitch": 0.4610114681138917,
          "rotation": 0,
          "target": "I-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "EAD-6", //oriente-station
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
          "yaw": -1.5223896980391327,
          "pitch": 0.4254439723397052,
          "rotation": 0,
          "target": "EAD-5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-V-1", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.7897391727863532,
        "pitch": 0.054638920893861354,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.3840139345394231,
          "pitch": 0.2254002400084758,
          "rotation": 0,
          "target": "I-V-2"
        },
        {
          "yaw": 1.6731154372499173,
          "pitch": 0.33727777272776827,
          "rotation": 0,
          "target": "I-7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-V-2", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.187669847329164,
        "pitch": 0.17723329571661495,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.3400911700984377,
          "pitch": 0.43578531277175614,
          "rotation": 0,
          "target": "I-V-1"
        },
        {
          "yaw": 3.010835847044916,
          "pitch": 0.29935039799024565,
          "rotation": 0,
          "target": "I-V-EN-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-V-EN-2", //oriente-station
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
          "yaw": -0.44442016423844777,
          "pitch": 0.31750136189720024,
          "rotation": 5.497787143782138,
          "target": "I-V-2"
        },
        {
          "yaw": 3.0669120338327884,
          "pitch": 0.21319648733801344,
          "rotation": 0,
          "target": "PASICAFE"
        },
        {
          "yaw": 0.2455594572805122,
          "pitch": 0.3482627728849135,
          "rotation": 7.0685834705770345,
          "target": "I-V-EN-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-V-EN-3", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 3.069563726257943,
        "pitch": 0.04641677188296356,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -0.3458471579522513,
          "pitch": 0.2903478572340372,
          "rotation": 0.7853981633974483,
          "target": "I-V-EN-2"
        },
        {
          "yaw": -2.234667697032865,
          "pitch": 0.14300731012782109,
          "rotation": 5.497787143782138,
          "target": "I-V-EN-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "I-V-EN-4", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.3296833399045767,
        "pitch": 0.020536459617435554,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.5994666195818823,
          "pitch": 0.24339016897390842,
          "rotation": 0,
          "target": "I-V-EN-3"
        },
        {
          "yaw": 1.3635055136199288,
          "pitch": 0.17253462651520124,
          "rotation": 0,
          "target": "B-Q-A-H-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "J-entrada-oeste", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-F-G-2", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-F-G-3", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "H-F-G-4", //oriente-station
      "name": "H-F-G-4",
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
          "yaw": 2.0951883779017706,
          "pitch": 0.2787774168937922,
          "rotation": 0.7853981633974483,
          "target": "K-4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "J-entrada-norte-1", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "T-entrada-2", //oriente-station
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-Z-1", //oriente-station
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
          "yaw": -89.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-entrada"
        },
        {
          "yaw": -42.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-Z-2", //oriente-station
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
          "yaw": -89.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-3"
        },
        {
          "yaw": -42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-Z-3", //oriente-station
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
          "yaw": -47.1,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-4"
        },
        {
          "yaw": -100.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-Z-4", //oriente-station
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
          "yaw": -46.9,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-5"
        },
        {
          "yaw": -100.3,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-Z-5", //oriente-station
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
          "yaw": -89.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-4"
        },
        {
          "yaw": 46.8,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "D1-Z-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "D1-Z-6", //oriente-station
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
          "yaw": -42.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "K-Z-1"
        },
        {
          "yaw": -89.4,
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
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIOPASI", //oriente-station
      "name": "Pasillo",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.5731055653348012,
        "pitch": 0.01017353904284235,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 0.10601983418443339,
          "pitch": 0.28290691877561613,
          "rotation": 0,
          "target": "BIBLIO1"
        },
        {
          "yaw": 1.621690564545137,
          "pitch": 0.31896811037691997,
          "rotation": 0,
          "target": "B-Q-A-H-3"
        },
        {
          "yaw": -1.4181663464723826,
          "pitch": 0.09192131684461735,
          "rotation": 4.71238898038469,
          "target": "H-entrada-norte-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIO1", //oriente-station
      "name": "Biblioteca",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.3815301524088124,
        "pitch": 0.0927179353677019,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 3.0567545981496584,
          "pitch": 0.35087415519834586,
          "rotation": 0,
          "target": "BIBLIO2"
        },
        {
          "yaw": 0.04057047227825983,
          "pitch": 0.5330162053028857,
          "rotation": 0,
          "target": "BIBLIOPASI"
        },
        {
          "yaw": 1.8968649012237329,
          "pitch": 0.40652275233293267,
          "rotation": 5.497787143782138,
          "target": "BIBLIO7"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIO2", //oriente-station
      "name": "Biblioteca",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.630654077620937,
        "pitch": 0.10051334386648847,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -2.8919320697821576,
          "pitch": 0.471866529255319,
          "rotation": 5.497787143782138,
          "target": "BIBLIO3"
        },
        {
          "yaw": 1.341399145706431,
          "pitch": 0.5018259276939361,
          "rotation": 0,
          "target": "BIBLIO1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIO3", //oriente-station
      "name": "Biblioteca",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.135128081427224,
        "pitch": 0.030599680605607915,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.4004131664174153,
          "pitch": 0.39041988922905446,
          "rotation": 0,
          "target": "BIBLIO4"
        },
        {
          "yaw": 1.6487433326199747,
          "pitch": 0.49550228895256865,
          "rotation": 0,
          "target": "BIBLIO2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIO4", //oriente-station
      "name": "Biblioteca",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.795280154250003,
        "pitch": 0.11351008848427213,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.6772208566412097,
          "pitch": 0.5391474364465996,
          "rotation": 0,
          "target": "BIBLIO5"
        },
        {
          "yaw": 1.8582281306068102,
          "pitch": 0.5033314625379521,
          "rotation": 0.7853981633974483,
          "target": "BIBLIO3"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIO5", //oriente-station
      "name": "Biblioteca",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.033936036765005895,
        "pitch": 0.09845821773812702,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -3.125657889195539,
          "pitch": 0.6865330230818323,
          "rotation": 0,
          "target": "BIBLIO6"
        },
        {
          "yaw": 1.5526189153744019,
          "pitch": 0.6309572055458741,
          "rotation": 0,
          "target": "BIBLIO4"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIO6", //oriente-station
      "name": "Biblioteca",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.9978148972984595,
        "pitch": 0.11232779385856517,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.5957444643342296,
          "pitch": 0.39948661426298493,
          "rotation": 0,
          "target": "BIBLIO7"
        },
        {
          "yaw": 1.4381089984846032,
          "pitch": 0.5953081571370866,
          "rotation": 0,
          "target": "BIBLIO5"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "BIBLIO7", //oriente-station
      "name": "Biblioteca",
      "edificio": "Biblioteca",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 2.8256869080990015,
        "pitch": 0.16454428071569538,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.4231556485708055,
          "pitch": 0.30643939967810496,
          "rotation": 0,
          "target": "BIBLIO1"
        },
        {
          "yaw": 1.6625214050697537,
          "pitch": 0.4228105650909022,
          "rotation": 0,
          "target": "BIBLIO6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "PASICAFE", //oriente-station
      "name": "Pasillo",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -2.861160499646866,
        "pitch": 0.03036211123801813,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 1.7129362297444777,
          "pitch": 0.2527762890606535,
          "rotation": 0,
          "target": "CAFE1"
        },
        {
          "yaw": -2.956185446647723,
          "pitch": 0.25105640316850497,
          "rotation": 0,
          "target": "I-V-EN-2"
        },
        {
          "yaw": 0.15865168218687842,
          "pitch": 0.2188934990171525,
          "rotation": 0,
          "target": "camino-principal"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CAFE1", //oriente-station
      "name": "Cafeteria",
      "edificio": "Cafeteria",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.5178364267860438,
        "pitch": 0.21341310310324246,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -1.7034748572971097,
          "pitch": 0.33563746197499533,
          "rotation": 0,
          "target": "PASICAFE"
        },
        {
          "yaw": 1.420407329362261,
          "pitch": 0.38178186946886683,
          "rotation": 0,
          "target": "CAFE2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CAFE2", //oriente-station
      "name": "Cafeteria",
      "edificio": "Cafeteria",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.534823399219686,
        "pitch": 0.11185935786765988,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 0.10995464220950169,
          "pitch": 0.406994806205212,
          "rotation": 0,
          "target": "CAFE3"
        },
        {
          "yaw": -1.3756290432619789,
          "pitch": 0.19491453931619063,
          "rotation": 0,
          "target": "CAFE1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CAFE3", //oriente-station
      "name": "Cafeteria",
      "edificio": "Cafeteria",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -3.1243725527070865,
        "pitch": 0.05345089918268364,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 3.115056863141774,
          "pitch": 0.38385102703702323,
          "rotation": 0,
          "target": "CAFE2"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHA", //oriente-station
      "name": "Cancha",
      "edificio": "Cancha",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.12184192734016719,
        "pitch": 0.04187834812234392,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": -0.5358813097193433,
          "pitch": 0.21093696602406453,
          "rotation": 0,
          "target": "CANCHATECHA1"
        },
        {
          "yaw": -42.56678386676067,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO1"
        },
        {
          "yaw": 2.239563739175628,
          "pitch": 0.15978416981734256,
          "rotation": 5.497787143782138,
          "target": "EAD-1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHATECHA1", //oriente-station
      "name": "Cancha",
      "edificio": "CanchaTecha",
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.5171186375250709,
        "pitch": 0.038392472759163354,
        "fov": 1.4080178966706975
      },
      "linkHotspots": [
        {
          "yaw": 0.02381961524991283,
          "pitch": 0.43856178562037407,
          "rotation": 0.7853981633974483,
          "target": "CANCHATECHA3"
        },
        {
          "yaw": -1.2873223112394445,
          "pitch": 0.32722986215237526,
          "rotation": 6.283185307179586,
          "target": "CANCHA"
        },
        {
          "yaw": -2.366896749094497,
          "pitch": 0.3474620054306836,
          "rotation": 11.780972450961727,
          "target": "I-8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHATECHA3", //oriente-station
      "name": "Cancha",
      "edificio": "CanchaTecha",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5011973402132668,
          "pitch": 0.1895903714822076,
          "rotation": 0,
          "target": "CANCHATECHA1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHAPASILLO1", //oriente-station
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
          "yaw": -2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO5"
        },
        {
          "yaw": -9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHA"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHAPASILLO5", //oriente-station
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
          "yaw": -2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO1"
        },
        {
          "yaw": -9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHAPASILLO6", //oriente-station
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
          "yaw": -2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO5"
        },
        {
          "yaw": -4.4,
          "pitch": -3.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6-6"
        },
        {
          "yaw": -9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHAPASILLO6-6", //oriente-station
      "name": "Gimnasio",
      "edificio": "0",
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "FUT7"
        },
        {
          "yaw": -4.4,
          "pitch": -3.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6"
        },
        {
          "yaw": -9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CAMPO1"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHAPASILLO8", //oriente-station
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
          "yaw": -2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO6"
        },
        {
          "yaw": -9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO9"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    },
    {
      "id": "CANCHAPASILLO9", //oriente-station
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
          "yaw": -2.4,
          "pitch": -6.0076340532339251865,
          "rotation": 0,
          "target": "CANCHAPASILLO8"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
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
          "yaw": -9.4,
          "pitch": -1.5,
          "rotation": 0,
          "target": "CANCHAPASILLO6-6"
        }
      ],
      "infoHotspots": [{}],
      "photoHotspots": [{}],
      "videoHotspots": [{}]
    }
  ],
  "name": "Sample Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
