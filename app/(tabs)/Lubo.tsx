import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';

// ⬇️ TU JE TVOJ PAYLOAD priamo natvrdo v kóde
const payload = {
      "aggregations": [
        {
          "type": "category",
          "categoryParentId": 100890,
          "message": "Kategorie",
          "buckets": [
            {
              "value": 100893,
              "seoUrl": "tv-audio-video",
              "message": "TV, audio, video",
              "count": 15272,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100894,
              "seoUrl": "foto",
              "message": "Foto",
              "count": 9792,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100892,
              "seoUrl": "male-elektrospotrebice",
              "message": "Malé elektrospotřebiče",
              "count": 5590,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100898,
              "seoUrl": "elektronika",
              "message": "Elektronika",
              "count": 13748,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100891,
              "seoUrl": "velke-elektrospotrebice",
              "message": "Velké elektrospotřebiče",
              "count": 1877,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 101208,
              "seoUrl": "baterie-a-nabijecky-baterii",
              "message": "Baterie a nabíječky baterií",
              "count": 1481,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 251673,
              "seoUrl": "rc-modely-drony",
              "message": "Drony",
              "count": 319,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100895,
              "seoUrl": "pristroje-pece-o-telo",
              "message": "Péče o tělo a zdraví",
              "count": 3049,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100896,
              "seoUrl": "vzduchotechnika-topeni",
              "message": "Vzduchotechnika, topení",
              "count": 2171,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100897,
              "seoUrl": "zaznamova-media",
              "message": "Záznamová média",
              "count": 2000,
              "landingPage": false,
              "leaf": false
            },
            {
              "value": 100899,
              "seoUrl": "ostatni-elektro",
              "message": "Ostatní elektro",
              "count": 2772,
              "landingPage": false,
              "leaf": false
            }
          ],
          "otherCount": 0
        },
        {
          "type": "destination",
          "message": "Země doručení",
          "buckets": [
            {
              "value": "cz",
              "message": "Česká republika",
              "count": 58071,
              "landingPage": false
            },
            {
              "value": "sk",
              "message": "Slovensko",
              "count": 53906,
              "landingPage": false
            },
            {
              "value": "hu",
              "message": "Maďarsko",
              "count": 50738,
              "landingPage": false
            },
            {
              "value": "abroad",
              "message": "Ostatní země",
              "count": 32951,
              "landingPage": false
            },
            {
              "value": "at",
              "message": "Rakousko",
              "count": 32951,
              "landingPage": false
            },
            {
              "value": "de",
              "message": "Německo",
              "count": 32951,
              "landingPage": false
            }
          ],
          "otherCount": 0
        },
        {
          "type": "buy_now",
          "message": "Kup teď",
          "buckets": [
            {
              "value": true,
              "message": "Kup teď",
              "count": 43606,
              "landingPage": false
            }
          ],
          "otherCount": 14465
        },
        {
          "type": "auction",
          "message": "Aukce",
          "buckets": [
            {
              "value": true,
              "message": "Aukce",
              "count": 17728,
              "landingPage": false
            }
          ],
          "otherCount": 40343
        },
        {
          "type": "hot_auction",
          "message": "Žhavé aukce",
          "buckets": [
            {
              "value": true,
              "message": "Žhavé aukce",
              "count": 251,
              "landingPage": false
            }
          ],
          "otherCount": 0
        },
        {
          "type": "attribute",
          "attributeId": 48,
          "attributePosition": 0,
          "message": "Stav zboží",
          "buckets": [
            {
              "value": 1,
              "seoUrl": "nove-1-48",
              "message": "Nové",
              "count": 28430,
              "landingPage": true
            },
            {
              "value": 3,
              "seoUrl": "rozbaleno-3-48",
              "message": "Rozbaleno",
              "count": 5900,
              "landingPage": true
            },
            {
              "value": 6,
              "message": "Zánovní",
              "count": 3873,
              "landingPage": false
            },
            {
              "value": 2,
              "seoUrl": "pouzite-2-48",
              "message": "Použité",
              "count": 18049,
              "landingPage": true
            },
            {
              "value": 5,
              "message": "Opravené",
              "count": 114,
              "landingPage": false
            },
            {
              "value": 10,
              "seoUrl": "repasovane-10-48",
              "message": "Repasované",
              "count": 2,
              "landingPage": true
            },
            {
              "value": 14,
              "seoUrl": "poskozeno-14-48",
              "message": "Poškozeno",
              "count": 18,
              "landingPage": true
            },
            {
              "value": 4,
              "seoUrl": "nefunkcni-na-dily-4-48",
              "message": "Nefunkční / na díly",
              "count": 1676,
              "landingPage": true
            }
          ],
          "otherCount": 0
        },
        {
          "type": "attribute",
          "attributeId": 666,
          "attributePosition": 0,
          "message": "Úroveň repasu",
          "buckets": [
            {
              "value": 1,
              "seoUrl": "repas-grade-a-1-666",
              "message": "A",
              "count": 4,
              "landingPage": true
            },
            {
              "value": 2,
              "seoUrl": "repas-grade-b-2-666",
              "message": "B",
              "count": 4,
              "landingPage": true
            },
            {
              "value": 3,
              "seoUrl": "repas-grade-c-3-666",
              "message": "C",
              "count": 1,
              "landingPage": true
            },
            {
              "value": 4,
              "seoUrl": "repas-grade-d-4-666",
              "message": "D",
              "count": 2,
              "landingPage": true
            }
          ],
          "otherCount": 0
        },
        {
          "type": "attribute",
          "attributeId": 8820,
          "attributePosition": 4,
          "message": "Doba dodání (od obdržení platby)",
          "buckets": [
            {
              "value": 1,
              "message": "1-2 dny",
              "count": 8332,
              "landingPage": false
            },
            {
              "value": 2,
              "message": "2-3 dny",
              "count": 15686,
              "landingPage": false
            },
            {
              "value": 3,
              "message": "4-6 dní",
              "count": 5155,
              "landingPage": false
            },
            {
              "value": 4,
              "message": "7-10 dní",
              "count": 4364,
              "landingPage": false
            },
            {
              "value": 5,
              "message": "více než 10 dní",
              "count": 30,
              "landingPage": false
            }
          ],
          "otherCount": 0
        }
      ],
      "minPrice": 1,
      "maxPrice": 1300500,
      "categoryPath": [
        {
          "id": 100890,
          "level": 0,
          "name": "Elektro",
          "shortName": "Elektro",
          "fullName": "Elektro",
          "seoUrl": "elektro",
          "active": true,
          "itemCategoryId": 100890
        }
      ],
      "resultReport": {
        "excludedCategory": false,
        "state": "DEFAULT",
        "algorithmByKey": {
          "wsrv-7": "algorithm not found",
          "wsrv-8": "algorithm not found",
          "wsrv-12": "algorithm not found",
          "wsrv-5": "algorithm not found",
          "wsrv-11": "algorithm not found",
          "wsrv-6": "algorithm not found",
          "wsrv-10": "algorithm not found",
          "wsrv-9": "algorithm not found",
          "listing": "algorithm not found",
          "wsrv-3": "algorithm not found",
          "wsrv-4": "algorithm not found",
          "wsrv-1": "algorithm not found",
          "wsrv-2": "algorithm not found"
        },
        "sort": "relevance",
        "defaultSort": "relevance",
        "sortDirection": "DESC",
        "defaultSortDirection": "DESC",
        "defaultLayout": "LIST",
        "hideAds": false
      },
      "currentCategory": {
        "id": 100890,
        "active": true,
        "hiddenForExpose": false,
        "feedRestriction": false,
        "position": 2,
        "root": true,
        "leaf": false,
        "level": 0,
        "statusAdultContent": false,
        "statusHpPromoRestriction": false,
        "statusJuniorRestriction": false,
        "statusOriginalArtContent": false,
        "botRestriction": false,
        "hreflang": true,
        "buyersProtectionAvailable": true,
        "subbrands": [
          "BAZAAR"
        ],
        "maxItemImages": 8,
        "translateName": false,
        "name": "Elektro",
        "shortName": "Elektro",
        "seoUrl": "elektro",
        "metaDescription": "Najděte si <category_name>. Více než 41800 nabídek v aukci, často už od 1 Kč. <category_name> máme nové i z druhé ruky. Výhodná cena v aukci nebo okamžitý Kup Teď.",
        "description": "<div class=\"aukro-wysiwyg-default\"><div class=\"intro-row\" data-layout=\"text\"><div class=\"text-container ql-editor\"><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Elektronika je součástí každého našeho dne. Pomáhá nám ulehčit každodenní život. Podívejte se na naši aktuální nabídku elektro produktů.</span></p></div></div><div  data-layout=\"text-image\"><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Audio, TV a video</span></h2><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Moderní doba nám </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">umožňuje sledovat filmy</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> na opravdu velkých </span><a href=\"/tv\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">televizích</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> s kvalitním doprovodem hudby pomocí </span><a href=\"/domaci-kina\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">domácích kin</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">. Rádi si pustíte cestou do práce vaši </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">oblíbenou hudbu</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">? Pak jistě oceníte </span><a href=\"/sluchatka-k-tv-audio-video\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">sluchátka</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, </span><a href=\"/mp3-mp4-prehravace\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">přehrávače</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> nebo </span><a href=\"/autoradia\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">autorádio</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">. Kvalitní hudbu vám samozřejmě poskytnou pro domácí odpočinek i </span><a href=\"/hi-fi-komponenty\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">Hi-fi komponenty</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">. </span></p></div></div><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936155.jpeg\" alt=\"Televize\"></div></div><div  data-layout=\"image-text\"><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936178.jpeg\" alt=\"Fotoaparát\"></div><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Fotoaparáty a foto příslušenství</span></h2><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Ať už jste </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">začátečník</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> či </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">profesionální fotograf</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> v naší </span><a href=\"/foto\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: rgb(17, 85, 204);\">nabídce</a><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> si vybere opravdu každý, ať už příslušenství nebo rovnou </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">nový fotoaparát</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">. Rádi vám poradíme s výběrem vhodného typu fotoaparátu. Fotka vám pak </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">připomene prožité chvíle</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> z dovolené, výletu nebo důležité životní události.</span></p></div></div></div><div  data-layout=\"text-image\"><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Elektrosoučástky a další elektronika</span></h2><p><a href=\"/merici-pristroje\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">Měřicí stroje</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> najdou uplatnění hned </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">ve spoustě oborů</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, ale jsou vhodná i třeba pro volnočasové aktivity. Stavíte-li pro zábavu elektrické obvody, v naší nabídce objevíte </span><a href=\"/elektrosoucastky\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\"><strong>elektronické součástky</strong></a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></div></div><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936185.jpeg\" alt=\"Laboratorní zdroj\"></div></div><div  data-layout=\"image-text\"><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936208.jpeg\" alt=\"Kávovar\"></div><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Žehličky, vysavače a další malé elektrospotřebiče</span></h2><p><a href=\"/male-elektrospotrebice\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: rgb(17, 85, 204);\">Malé elektrospotřebiče</a><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> jsou nedílnou součástí dnešní doby, dokáží nám velice usnadnit běžný den, ať už jde o </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">přípravu pokrmů</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> a </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">nápojů</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">úklid</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">, </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">opravy</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\"> nebo </span><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\">rovnání oděvů</strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">. V naší nabídce naleznete i celou řadu příslušenství.</span></p></div></div></div><div  data-layout=\"text-image\"><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Lednice, pračky a ostatní velké elektrospotřebiče</span></h2><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">V dnešní době si už jen hrstka celosvětové populace dokáže představit život bez </span><a href=\"/velke-elektrospotrebice\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">velkých spotřebičů</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, které usnadňují život, a to </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">uchováním potravin</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, jsou </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">pomocníky pro přípravu hlavních jídel</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">čištění oděvů</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> a následného </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">sušení</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">.</span></p></div></div><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936225.jpeg\" alt=\"Pračka\"></div></div><div  data-layout=\"image-text\"><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936249.jpeg\" alt=\"Holící strojek\"></div><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">IPL epilátory, holicí strojky a jiné přístroje pro péči o tělo</span></h2><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Péče o vzhled je nedílnou součástí každodenní rutiny každého z nás. V naší nabídce naleznete </span><a href=\"/osobni-vahy\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\"><strong>osobní váhy</strong></a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, </span><a href=\"/pece-o-zuby\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\"><strong>elektrické zubní kartáčky</strong></a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, </span><a href=\"/holici-strojky-epilatory\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\"><strong>holicí strojky a epilátory</strong></a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> a další. V této kategorii naleznou své oblíbené produkty nejen ženy, ale i muži.</span></p></div></div></div><div  data-layout=\"text-image\"><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Záznamová média</span></h2><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Pokud potřebujete uchovat vaše soubory ve fyzickém stavu, v naší nabídce </span><a href=\"/zaznamova-media\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\">záznamových médií</a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> naleznete </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">CD</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> a </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">DVD</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">paměťové karty</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, </span><strong style=\"color: rgb(0, 0, 0); background-color: transparent;\">flash disky</strong><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">. Tyto paměťová média vám poskytnou místo na pracovní soubory nebo fotky a videa z dovolených, výletů a životních událostí.</span></p></div></div><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936264.jpeg\" alt=\"Flash disk\"></div></div><div  data-layout=\"image-text\"><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936286.jpeg\" alt=\"Čistička vzduchu\"></div><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">Vzduchotechnika a topení</span></h2><p><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">V zimních i letních měsících můžete pomocí </span><a href=\"/vzduchotechnika-topeni\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: rgb(17, 85, 204);\"><strong>vzduchotechniky a topení</strong></a><strong style=\"background-color: transparent; color: rgb(0, 0, 0);\"> </strong><span style=\"background-color: transparent; color: rgb(0, 0, 0);\">ovlivnit teplotu ve vašem bytě nebo domě. Další podkategorií jsou čističe vzduchu, které odstraní z místnosti alergeny a nečistoty.</span></p></div></div></div><div  data-layout=\"text-image\"><div class=\"text-container ql-editor\"><div class=\"inner-container\"><h2><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Baterie, kalkulačky a další elektro</span></h2><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">Nedílnou součástí drobného elektra jsou </span><a href=\"/baterie-a-nabijecky-baterii\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\"><strong>baterie</strong></a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">, které pohání vaše bezdrátové pomocníky. </span><a href=\"/kalkulatory\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(17, 85, 204); background-color: transparent;\"><strong>Kalkulačky</strong></a><span style=\"color: rgb(0, 0, 0); background-color: transparent;\"> mohou využít nejen vaše děti ve škole, hodí se i pro rychlé počítání, pokud potřebujete složitější výpočet.</span></p></div></div><div class=\"image-container\"><img src=\"https://cdn.aukro.cz/category/115936302.jpeg\" alt=\"Kalkulačka\"></div></div></div>",
        "title": "Elektro",
        "otherLangUrl": {
          "DE": "elektro",
          "CS": "elektro",
          "HU": "elektro",
          "SK": "elektro"
        },
        "hasLandingPage": false,
        "itemCategoryId": 100890,
        "categoryId": 100890
      },
      "recommendedCategories": [
        {
          "id": 1099,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Samsung",
          "seoUrl": "lp/samsung",
          "hasLandingPage": false,
          "itemCategoryId": 1099,
          "categoryId": 1099
        },
        {
          "id": 1113,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Philips",
          "seoUrl": "lp/philips",
          "hasLandingPage": false,
          "itemCategoryId": 1113,
          "categoryId": 1113
        },
        {
          "id": 1145,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Nikon",
          "seoUrl": "lp/nikon",
          "hasLandingPage": false,
          "itemCategoryId": 1145,
          "categoryId": 1145
        },
        {
          "id": 1146,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Bosch",
          "seoUrl": "lp/bosch",
          "hasLandingPage": false,
          "itemCategoryId": 1146,
          "categoryId": 1146
        },
        {
          "id": 1148,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "De'Longhi",
          "seoUrl": "lp/delonghi",
          "hasLandingPage": false,
          "itemCategoryId": 1148,
          "categoryId": 1148
        },
        {
          "id": 1160,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Whirlpool",
          "seoUrl": "lp/whirlpool",
          "hasLandingPage": false,
          "itemCategoryId": 1160,
          "categoryId": 1160
        },
        {
          "id": 1170,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Sony",
          "seoUrl": "lp/sony",
          "hasLandingPage": false,
          "itemCategoryId": 1170,
          "categoryId": 1170
        },
        {
          "id": 2542,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Marshall",
          "seoUrl": "lp/marshall",
          "hasLandingPage": false,
          "itemCategoryId": 2542,
          "categoryId": 2542
        },
        {
          "id": 1299,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Yenkee",
          "seoUrl": "lp/yenkee",
          "hasLandingPage": false,
          "itemCategoryId": 1299,
          "categoryId": 1299
        },
        {
          "id": 1513,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Grundig",
          "seoUrl": "lp/grundig",
          "hasLandingPage": false,
          "itemCategoryId": 1513,
          "categoryId": 1513
        },
        {
          "id": 1522,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Canon",
          "seoUrl": "lp/canon",
          "hasLandingPage": false,
          "itemCategoryId": 1522,
          "categoryId": 1522
        },
        {
          "id": 1528,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Pentax",
          "seoUrl": "lp/pentax",
          "hasLandingPage": false,
          "itemCategoryId": 1528,
          "categoryId": 1528
        },
        {
          "id": 1531,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Minidisc",
          "seoUrl": "lp/minidisc",
          "hasLandingPage": false,
          "itemCategoryId": 1531,
          "categoryId": 1531
        },
        {
          "id": 1593,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Xmartian",
          "seoUrl": "lp/xmartian",
          "hasLandingPage": false,
          "itemCategoryId": 1593,
          "categoryId": 1593
        },
        {
          "id": 1703,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "JVC",
          "seoUrl": "lp/jvc",
          "hasLandingPage": false,
          "itemCategoryId": 1703,
          "categoryId": 1703
        },
        {
          "id": 1762,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Panasonic",
          "seoUrl": "lp/panasonic",
          "hasLandingPage": false,
          "itemCategoryId": 1762,
          "categoryId": 1762
        },
        {
          "id": 1775,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "LG",
          "seoUrl": "lp/lg",
          "hasLandingPage": false,
          "itemCategoryId": 1775,
          "categoryId": 1775
        },
        {
          "id": 1779,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Amazon",
          "seoUrl": "lp/amazon",
          "hasLandingPage": false,
          "itemCategoryId": 1779,
          "categoryId": 1779
        },
        {
          "id": 1786,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Dyson",
          "seoUrl": "lp/dyson",
          "hasLandingPage": false,
          "itemCategoryId": 1786,
          "categoryId": 1786
        },
        {
          "id": 1797,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Meopta",
          "seoUrl": "lp/meopta",
          "hasLandingPage": false,
          "itemCategoryId": 1797,
          "categoryId": 1797
        },
        {
          "id": 1940,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "BenQ",
          "seoUrl": "lp/benq",
          "hasLandingPage": false,
          "itemCategoryId": 1940,
          "categoryId": 1940
        },
        {
          "id": 1941,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Toshiba",
          "seoUrl": "lp/toshiba",
          "hasLandingPage": false,
          "itemCategoryId": 1941,
          "categoryId": 1941
        },
        {
          "id": 1977,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Sencor",
          "seoUrl": "lp/sencor",
          "hasLandingPage": false,
          "itemCategoryId": 1977,
          "categoryId": 1977
        },
        {
          "id": 2014,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Electrolux",
          "seoUrl": "lp/electrolux",
          "hasLandingPage": false,
          "itemCategoryId": 2014,
          "categoryId": 2014
        },
        {
          "id": 2045,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "AEG",
          "seoUrl": "lp/aeg",
          "hasLandingPage": false,
          "itemCategoryId": 2045,
          "categoryId": 2045
        },
        {
          "id": 2108,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Tesla",
          "seoUrl": "lp/tesla",
          "hasLandingPage": false,
          "itemCategoryId": 2108,
          "categoryId": 2108
        },
        {
          "id": 2117,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Mystery boxy",
          "seoUrl": "lp/mystery-boxy",
          "hasLandingPage": false,
          "itemCategoryId": 2117,
          "categoryId": 2117
        },
        {
          "id": 2123,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "BOSE",
          "seoUrl": "lp/bose",
          "hasLandingPage": false,
          "itemCategoryId": 2123,
          "categoryId": 2123
        },
        {
          "id": 2155,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "SilverCrest",
          "seoUrl": "lp/silvercrest",
          "hasLandingPage": false,
          "itemCategoryId": 2155,
          "categoryId": 2155
        },
        {
          "id": 2194,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Zesilovače",
          "seoUrl": "lp/zesilovace",
          "hasLandingPage": false,
          "itemCategoryId": 2194,
          "categoryId": 2194
        },
        {
          "id": 2241,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Google",
          "seoUrl": "lp/google",
          "hasLandingPage": false,
          "itemCategoryId": 2241,
          "categoryId": 2241
        },
        {
          "id": 2345,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Paralyzéry",
          "seoUrl": "lp/paralyzery",
          "hasLandingPage": false,
          "itemCategoryId": 2345,
          "categoryId": 2345
        },
        {
          "id": 2753,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Ultrazvuková čistička",
          "seoUrl": "lp/ultrazvukova-cisticka",
          "hasLandingPage": false,
          "itemCategoryId": 2753,
          "categoryId": 2753
        },
        {
          "id": 2945,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "O2 Smart Boxy",
          "seoUrl": "lp/o2-smart-boxy",
          "hasLandingPage": false,
          "itemCategoryId": 2945,
          "categoryId": 2945
        },
        {
          "id": 2974,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Sharp",
          "seoUrl": "lp/sharp",
          "hasLandingPage": false,
          "itemCategoryId": 2974,
          "categoryId": 2974
        },
        {
          "id": 3683,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Flipper Zero",
          "seoUrl": "lp/flipper-zero",
          "hasLandingPage": false,
          "itemCategoryId": 3683,
          "categoryId": 3683
        },
        {
          "id": 3775,
          "active": false,
          "hiddenForExpose": false,
          "feedRestriction": false,
          "position": 0,
          "root": false,
          "leaf": false,
          "statusAdultContent": false,
          "statusHpPromoRestriction": false,
          "statusJuniorRestriction": false,
          "statusOriginalArtContent": false,
          "botRestriction": false,
          "hreflang": false,
          "buyersProtectionAvailable": false,
          "maxItemImages": 0,
          "translateName": false,
          "shortName": "Zigbee",
          "seoUrl": "lp/zigbee",
          "hasLandingPage": false,
          "itemCategoryId": 3775,
          "categoryId": 3775
        }
      ],
      "categoryBanners": [],
      "fallbackItems": [],
      "seoNiceUrlData": {
        "url": "/elektro",
        "title": "Elektro",
        "htmlTitle": "Elektro",
        "filter": {
          "categorySeoUrl": "elektro",
          "landingPage": false,
          "cashOnDelivery": false,
          "buyersProtection": false,
          "subbrandExclusive": false,
          "currency": "CZK",
          "domain": "CZ",
          "visibleByCountry": true,
          "excludeHiddenInSellerSoldList": false,
          "excludeHiddenInSellerNotSoldList": false,
          "splitGroups": {},
          "noContent": false,
          "hotAuction": false,
          "searchRedirectDisabled": false,
          "priceDeliveryIncluded": false,
          "favouriteSearch": false,
          "listingCode": "LISTING_BAZAR",
          "requestFromBot": false,
          "requestClientVersion": "2025-07-01-r1"
        }
      },
      "listingModDto": {
        "productBoxInsertionModList": [
          {
            "placement": {
              "gridViewRow": 0,
              "listViewRow": 0
            },
            "components": [
              {
                "type": "UniversalItems",
                "visible": [
                  "desktop",
                  "tablet",
                  "mobile"
                ],
                "moCode": "LM_TP_100890_REPAS",
                "content": {
                  "categoryIds": [
                    100890
                  ],
                  "sorting": {
                    "field": "userWatchingCount",
                    "direction": "DESC"
                  },
                  "attributes": [
                    {
                      "values": [
                        "Repasované",
                        "Felújított"
                      ],
                      "attributeId": 48
                    }
                  ],
                  "YUSPenabled": false,
                  "title": "Repasované zboží",
                  "items": [
                    {
                      "endingTime": "2025-07-30T15:19:59+02:00",
                      "id": 7092471706,
                      "name": "AirPods Pro 2 s Lightning MagSafe nabíjecím pouzdrem - Bílá",
                      "status": "ACTIVE",
                      "topSeller": true,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 4399,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 4399,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 4399,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 6090,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599145/thumbnail/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402684.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599145/73x73/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402684.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599145/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402684.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599145/400x300/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402684.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599145/730x548/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402684.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100988,
                          "name": "Sluchátka, mikrofony",
                          "seoUrl": "sluchatka-mikrofony"
                        },
                        {
                          "id": 256901,
                          "name": "Bezdrátová sluchátka",
                          "seoUrl": "bezdratova-sluchatka"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Repasované",
                          "attributeValueId": 10,
                          "position": 0
                        },
                        {
                          "attributeId": 602,
                          "attributeName": "EAN",
                          "attributeValue": "194253397472",
                          "position": 8
                        },
                        {
                          "attributeId": 666,
                          "attributeName": "Úroveň repasu",
                          "attributeValue": "D",
                          "attributeValueId": 4,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "1-2 dny",
                          "attributeValueId": 1,
                          "position": 4
                        },
                        {
                          "attributeId": 10483,
                          "attributeName": "Značka",
                          "attributeValue": "Apple",
                          "attributeValueId": 8,
                          "position": 0
                        },
                        {
                          "attributeId": 18152,
                          "attributeName": "Kód zboží",
                          "attributeValue": "V-3560-A-",
                          "position": 6
                        },
                        {
                          "attributeId": 130547,
                          "attributeName": "Doba záruky (měsíců)",
                          "attributeValue": "12",
                          "position": 5
                        }
                      ],
                      "watchersCount": 0,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-30T15:19:59+02:00",
                      "id": 7092471708,
                      "name": "AirPods Pro 2 s Lightning MagSafe nabíjecím pouzdrem - Bílá",
                      "status": "ACTIVE",
                      "topSeller": true,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 4499,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 4499,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 4499,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 6090,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599830/thumbnail/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402688.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599830/73x73/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402688.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599830/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402688.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599830/400x300/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402688.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1751289599830/730x548/airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila-233402688.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "airpods-pro-2-s-lightning-magsafe-nabijecim-pouzdrem-bila",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100988,
                          "name": "Sluchátka, mikrofony",
                          "seoUrl": "sluchatka-mikrofony"
                        },
                        {
                          "id": 256901,
                          "name": "Bezdrátová sluchátka",
                          "seoUrl": "bezdratova-sluchatka"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Repasované",
                          "attributeValueId": 10,
                          "position": 0
                        },
                        {
                          "attributeId": 602,
                          "attributeName": "EAN",
                          "attributeValue": "194253397472",
                          "position": 8
                        },
                        {
                          "attributeId": 666,
                          "attributeName": "Úroveň repasu",
                          "attributeValue": "C",
                          "attributeValueId": 3,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "1-2 dny",
                          "attributeValueId": 1,
                          "position": 4
                        },
                        {
                          "attributeId": 10483,
                          "attributeName": "Značka",
                          "attributeValue": "Apple",
                          "attributeValueId": 8,
                          "position": 0
                        },
                        {
                          "attributeId": 18152,
                          "attributeName": "Kód zboží",
                          "attributeValue": "V-3560-A_A-",
                          "position": 6
                        },
                        {
                          "attributeId": 130547,
                          "attributeName": "Doba záruky (měsíců)",
                          "attributeValue": "12",
                          "position": 5
                        }
                      ],
                      "watchersCount": 0,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    }
                  ],
                  "titleUrl": "/stranka/repasovane-zbozi"
                }
              }
            ]
          },
          {
            "placement": {
              "gridViewRow": 6,
              "listViewRow": 12
            },
            "components": [
              {
                "type": "UniversalItems",
                "visible": [
                  "desktop",
                  "tablet",
                  "mobile"
                ],
                "moCode": "LM_TP_100890_BUY-NOW",
                "content": {
                  "itemType": "BUYNOW",
                  "categoryIds": [
                    100890
                  ],
                  "maxMinutesAfterStart": 43200,
                  "fallbackFilterUpdates": [
                    {
                      "interestFilter": {
                        "watchers": {
                          "min": 5
                        }
                      }
                    },
                    {
                      "priceFilter": {
                        "price": {
                          "min": 499
                        }
                      }
                    },
                    {
                      "priceFilter": {
                        "price": {
                          "min": 10
                        }
                      }
                    }
                  ],
                  "YUSPenabled": false,
                  "priceFilter": {
                    "price": {
                      "min": 899
                    }
                  },
                  "interestFilter": {
                    "watchers": {
                      "min": 9
                    }
                  },
                  "title": "Populární nabídky",
                  "items": [
                    {
                      "endingTime": "2025-07-01T23:18:55+02:00",
                      "id": 7090337050,
                      "name": "Gramofon Technics SL-221 ( 1978)",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 5900,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 5900,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 6000,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748812616045/thumbnail/gramofon-technics-sl-221-1978-230792724.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748812616045/73x73/gramofon-technics-sl-221-1978-230792724.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748812616045/gramofon-technics-sl-221-1978-230792724.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748812616045/400x300/gramofon-technics-sl-221-1978-230792724.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748812616045/730x548/gramofon-technics-sl-221-1978-230792724.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "gramofon-technics-sl-221-1978",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101033,
                          "name": "Gramofony",
                          "seoUrl": "gramofony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "2-3 dny",
                          "attributeValueId": 2,
                          "position": 4
                        }
                      ],
                      "watchersCount": 9,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T10:23:17+02:00",
                      "id": 7090360600,
                      "name": "Osciloskop TEKTRONIX TDS 210 - 2x60Mhz",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 5557,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 5557,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 5683,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748852290011/thumbnail/osciloskop-tektronix-tds-210-2x60mhz-230818176.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748852290011/73x73/osciloskop-tektronix-tds-210-2x60mhz-230818176.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748852290011/osciloskop-tektronix-tds-210-2x60mhz-230818176.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748852290011/400x300/osciloskop-tektronix-tds-210-2x60mhz-230818176.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748852290011/730x548/osciloskop-tektronix-tds-210-2x60mhz-230818176.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "osciloskop-tektronix-tds-210-2x60mhz",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101202,
                          "name": "Měřicí přístroje",
                          "seoUrl": "merici-pristroje"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 362,
                          "attributeName": "Druh měřícího přístroje",
                          "attributeValue": "Osciloskopy",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 18152,
                          "attributeName": "Kód zboží",
                          "attributeValue": "#3780",
                          "position": 6
                        }
                      ],
                      "watchersCount": 11,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T12:40:18+02:00",
                      "id": 7092119220,
                      "name": "URS konektory 37 ks",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 13800,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 13800,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 13863,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750847802206/thumbnail/urs-konektory-37-ks-233006019.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750847802206/73x73/urs-konektory-37-ks-233006019.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750847802206/urs-konektory-37-ks-233006019.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750847802206/400x300/urs-konektory-37-ks-233006019.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750847802206/730x548/urs-konektory-37-ks-233006019.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "urs-konektory-37-ks",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101201,
                          "name": "Elektronické součástky",
                          "seoUrl": "elektrosoucastky"
                        },
                        {
                          "id": 101250,
                          "name": "Elektronické konektory",
                          "seoUrl": "elektronicke-konektory"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nefunkční / na díly",
                          "attributeValueId": 4,
                          "position": 0
                        },
                        {
                          "attributeId": 585,
                          "attributeName": "Typ",
                          "attributeValue": "Průmyslové",
                          "attributeValueId": 1,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "4-6 dní",
                          "attributeValueId": 3,
                          "position": 4
                        }
                      ],
                      "watchersCount": 17,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T14:21:43+02:00",
                      "id": 7090372773,
                      "name": "DJI NEO",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 4000,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 4000,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 4063,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746276462175/thumbnail/dji-neo-227798364.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746276462175/73x73/dji-neo-227798364.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746276462175/dji-neo-227798364.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746276462175/400x300/dji-neo-227798364.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746276462175/730x548/dji-neo-227798364.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "dji-neo",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 251673,
                          "name": "Drony",
                          "seoUrl": "rc-modely-drony"
                        },
                        {
                          "id": 256913,
                          "name": "Profesionální drony",
                          "seoUrl": "profesionalni-drony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Zánovní",
                          "attributeValueId": 6,
                          "position": 0
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Kamera",
                          "attributeValueId": 1,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Ovládání gesty",
                          "attributeValueId": 10,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Slot na paměťovou kartu",
                          "attributeValueId": 12,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Online přenos videa",
                          "attributeValueId": 13,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Kompas",
                          "attributeValueId": 2,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "GPS",
                          "attributeValueId": 3,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Auto start/přistání",
                          "attributeValueId": 5,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Auto návrat",
                          "attributeValueId": 6,
                          "position": -1
                        },
                        {
                          "attributeId": 617,
                          "attributeName": "Maximální doba letu",
                          "attributeValue": "20 - 29 min.",
                          "attributeValueId": 3,
                          "position": 1
                        },
                        {
                          "attributeId": 618,
                          "attributeName": "Hmotnost dronu",
                          "attributeValue": "Méně než 250 g",
                          "attributeValueId": 1,
                          "position": 2
                        },
                        {
                          "attributeId": 619,
                          "attributeName": "Maximální rozlišení",
                          "attributeValue": "2K (2048×1080)",
                          "attributeValueId": 3,
                          "position": 0
                        },
                        {
                          "attributeId": 657,
                          "attributeName": "Značka",
                          "attributeValue": "DJI",
                          "attributeValueId": 1,
                          "position": -1
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "7-10 dní",
                          "attributeValueId": 4,
                          "position": 4
                        }
                      ],
                      "watchersCount": 10,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T14:23:09+02:00",
                      "id": 7090372840,
                      "name": "DJI MINI 3 - JEN DRON",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 5000,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 5000,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 5070,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744129185099/thumbnail/dji-mini-3-jen-dron-225386852.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744129185099/73x73/dji-mini-3-jen-dron-225386852.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744129185099/dji-mini-3-jen-dron-225386852.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744129185099/400x300/dji-mini-3-jen-dron-225386852.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744129185099/730x548/dji-mini-3-jen-dron-225386852.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "dji-mini-3-jen-dron",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 3,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 251673,
                          "name": "Drony",
                          "seoUrl": "rc-modely-drony"
                        },
                        {
                          "id": 256913,
                          "name": "Profesionální drony",
                          "seoUrl": "profesionalni-drony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Zánovní",
                          "attributeValueId": 6,
                          "position": 0
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Kamera",
                          "attributeValueId": 1,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Ovládání gesty",
                          "attributeValueId": 10,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Následuj mě",
                          "attributeValueId": 11,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Slot na paměťovou kartu",
                          "attributeValueId": 12,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Online přenos videa",
                          "attributeValueId": 13,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Kompas",
                          "attributeValueId": 2,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "GPS",
                          "attributeValueId": 3,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Auto start/přistání",
                          "attributeValueId": 5,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Auto návrat",
                          "attributeValueId": 6,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Sledování objektu",
                          "attributeValueId": 7,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "3D akrobacie (Flip)",
                          "attributeValueId": 8,
                          "position": -1
                        },
                        {
                          "attributeId": 617,
                          "attributeName": "Maximální doba letu",
                          "attributeValue": "30 - 39 min.",
                          "attributeValueId": 4,
                          "position": 1
                        },
                        {
                          "attributeId": 618,
                          "attributeName": "Hmotnost dronu",
                          "attributeValue": "Méně než 250 g",
                          "attributeValueId": 1,
                          "position": 2
                        },
                        {
                          "attributeId": 619,
                          "attributeName": "Maximální rozlišení",
                          "attributeValue": "4K (4096×2160)",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 657,
                          "attributeName": "Značka",
                          "attributeValue": "DJI",
                          "attributeValueId": 1,
                          "position": -1
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "7-10 dní",
                          "attributeValueId": 4,
                          "position": 4
                        }
                      ],
                      "watchersCount": 12,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T16:12:09+02:00",
                      "id": 7090379437,
                      "name": "🔥 Profesionální Meteostanice SainLogic, 14v1, 7,5\" Display",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 1999,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1999,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 2062,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748873362642/thumbnail/profesionalni-meteostanice-sainlogic-14v1-7-5-display-230842112.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748873362642/73x73/profesionalni-meteostanice-sainlogic-14v1-7-5-display-230842112.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748873362642/profesionalni-meteostanice-sainlogic-14v1-7-5-display-230842112.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748873362642/400x300/profesionalni-meteostanice-sainlogic-14v1-7-5-display-230842112.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748873362642/730x548/profesionalni-meteostanice-sainlogic-14v1-7-5-display-230842112.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "profesionalni-meteostanice-sainlogic-14v1-7-5-display",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100892,
                          "name": "Malé elektrospotřebiče",
                          "seoUrl": "male-elektrospotrebice"
                        },
                        {
                          "id": 100932,
                          "name": "Meteostanice",
                          "seoUrl": "meteostanice"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nové",
                          "attributeValueId": 1,
                          "position": 0
                        },
                        {
                          "attributeId": 10360,
                          "attributeName": "Značka",
                          "attributeValue": "Ostatní",
                          "attributeValueId": 100,
                          "position": 0
                        }
                      ],
                      "watchersCount": 9,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T21:44:44+02:00",
                      "id": 7090405257,
                      "name": "IPL eplipátor PHILIPS Lumea BRI976/00",
                      "status": "ACTIVE",
                      "topSeller": true,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 7500,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 7500,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 7565,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748893483618/thumbnail/ipl-eplipator-philips-lumea-bri976-00-230880656.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748893483618/73x73/ipl-eplipator-philips-lumea-bri976-00-230880656.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748893483618/ipl-eplipator-philips-lumea-bri976-00-230880656.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748893483618/400x300/ipl-eplipator-philips-lumea-bri976-00-230880656.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748893483618/730x548/ipl-eplipator-philips-lumea-bri976-00-230880656.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "ipl-eplipator-philips-lumea-bri976-00",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 2,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100895,
                          "name": "Péče o tělo a zdraví",
                          "seoUrl": "pristroje-pece-o-telo"
                        },
                        {
                          "id": 101140,
                          "name": "Holicí strojky, epilátory",
                          "seoUrl": "holici-strojky-epilatory"
                        },
                        {
                          "id": 101159,
                          "name": "Epilátory",
                          "seoUrl": "epilatory"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Rozbaleno",
                          "attributeValueId": 3,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "1-2 dny",
                          "attributeValueId": 1,
                          "position": 4
                        },
                        {
                          "attributeId": 9926,
                          "attributeName": "Systém napájení",
                          "attributeValue": "Akumulátor",
                          "attributeValueId": 10,
                          "position": 0
                        },
                        {
                          "attributeId": 9928,
                          "attributeName": "Značka",
                          "attributeValue": "Philips",
                          "attributeValueId": 40,
                          "position": 0
                        },
                        {
                          "attributeId": 9930,
                          "attributeName": "Vlastnosti",
                          "attributeValue": "Bikiny hlava",
                          "attributeValueId": 1,
                          "position": 0
                        },
                        {
                          "attributeId": 9930,
                          "attributeName": "Vlastnosti",
                          "attributeValue": "Depilace",
                          "attributeValueId": 2,
                          "position": 0
                        }
                      ],
                      "watchersCount": 10,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-05T22:57:13+02:00",
                      "id": 7090590506,
                      "name": "LUXUSNÍ GRAMOFON SANSUI FR-D4 (1979) PŘÍMÝ NÁHON ,PLNÝ AUTOMAT",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 9900,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 9900,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 10000,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749156999200/thumbnail/luxusni-gramofon-sansui-fr-d4-1979-primy-nahon-plny-automat-231181182.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749156999200/73x73/luxusni-gramofon-sansui-fr-d4-1979-primy-nahon-plny-automat-231181182.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749156999200/luxusni-gramofon-sansui-fr-d4-1979-primy-nahon-plny-automat-231181182.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749156999200/400x300/luxusni-gramofon-sansui-fr-d4-1979-primy-nahon-plny-automat-231181182.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749156999200/730x548/luxusni-gramofon-sansui-fr-d4-1979-primy-nahon-plny-automat-231181182.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "luxusni-gramofon-sansui-fr-d4-1979-primy-nahon-plny-automat",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101033,
                          "name": "Gramofony",
                          "seoUrl": "gramofony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "2-3 dny",
                          "attributeValueId": 2,
                          "position": 4
                        }
                      ],
                      "watchersCount": 9,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-06T10:26:21+02:00",
                      "id": 7090657257,
                      "name": "RECEIVER STEREO ZESILOVAČ TECHNICS SA-GX130 + DÁLKOVÉ OVLÁDÁNÍ",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 2499,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 2499,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 2618,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749198015178/thumbnail/receiver-stereo-zesilovac-technics-sa-gx130-dalkove-ovladani-231207579.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749198015178/73x73/receiver-stereo-zesilovac-technics-sa-gx130-dalkove-ovladani-231207579.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749198015178/receiver-stereo-zesilovac-technics-sa-gx130-dalkove-ovladani-231207579.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749198015178/400x300/receiver-stereo-zesilovac-technics-sa-gx130-dalkove-ovladani-231207579.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749198015178/730x548/receiver-stereo-zesilovac-technics-sa-gx130-dalkove-ovladani-231207579.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "receiver-stereo-zesilovac-technics-sa-gx130-dalkove-ovladani",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101037,
                          "name": "Hi-Fi zesilovače",
                          "seoUrl": "hi-fi-zesilovace"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "2-3 dny",
                          "attributeValueId": 2,
                          "position": 4
                        }
                      ],
                      "watchersCount": 14,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-06T22:22:33+02:00",
                      "id": 7090693296,
                      "name": "MD-MS701H(S) 》MINIDISC SHARP 》Přenosný magnetofón MD",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 1667,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1667,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 1768,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749241190317/thumbnail/md-ms701h-s-minidisc-sharp-prenosny-magnetofon-md-231260953.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749241190317/73x73/md-ms701h-s-minidisc-sharp-prenosny-magnetofon-md-231260953.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749241190317/md-ms701h-s-minidisc-sharp-prenosny-magnetofon-md-231260953.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749241190317/400x300/md-ms701h-s-minidisc-sharp-prenosny-magnetofon-md-231260953.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749241190317/730x548/md-ms701h-s-minidisc-sharp-prenosny-magnetofon-md-231260953.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "md-ms701h-s-minidisc-sharp-prenosny-magnetofon-md",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101029,
                          "name": "CD přehrávače",
                          "seoUrl": "cd-prehravace"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nefunkční / na díly",
                          "attributeValueId": 4,
                          "position": 0
                        },
                        {
                          "attributeId": 10403,
                          "attributeName": "Značka",
                          "attributeValue": "Sharp",
                          "attributeValueId": 75,
                          "position": 0
                        },
                        {
                          "attributeId": 18152,
                          "attributeName": "Kód zboží",
                          "attributeValue": "#3812",
                          "position": 6
                        }
                      ],
                      "watchersCount": 13,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-07T09:48:06+02:00",
                      "id": 7090713793,
                      "name": "Pozlacené Tranzistory - 0.4kg / mix pozlacene soucastky",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 5999,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 5999,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 6098,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749282351063/thumbnail/pozlacene-tranzistory-0-4kg-mix-pozlacene-soucastky-231283038.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749282351063/73x73/pozlacene-tranzistory-0-4kg-mix-pozlacene-soucastky-231283038.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749282351063/pozlacene-tranzistory-0-4kg-mix-pozlacene-soucastky-231283038.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749282351063/400x300/pozlacene-tranzistory-0-4kg-mix-pozlacene-soucastky-231283038.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749282351063/730x548/pozlacene-tranzistory-0-4kg-mix-pozlacene-soucastky-231283038.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "pozlacene-tranzistory-0-4kg-mix-pozlacene-soucastky",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101201,
                          "name": "Elektronické součástky",
                          "seoUrl": "elektrosoucastky"
                        },
                        {
                          "id": 101244,
                          "name": "Polovodiče",
                          "seoUrl": "polovodice"
                        },
                        {
                          "id": 101247,
                          "name": "Tranzistory",
                          "seoUrl": "tranzistory-a-spinaci-prvky"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 18152,
                          "attributeName": "Kód zboží",
                          "attributeValue": "#3848",
                          "position": 6
                        }
                      ],
                      "watchersCount": 20,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-07T11:02:21+02:00",
                      "id": 7090717944,
                      "name": "Plc Logo Siemens + zdroj modul",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 1150,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1150,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 1283,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749286891698/thumbnail/plc-logo-siemens-zdroj-modul-231287335.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749286891698/73x73/plc-logo-siemens-zdroj-modul-231287335.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749286891698/plc-logo-siemens-zdroj-modul-231287335.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749286891698/400x300/plc-logo-siemens-zdroj-modul-231287335.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749286891698/730x548/plc-logo-siemens-zdroj-modul-231287335.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "plc-logo-siemens-zdroj-modul",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101204,
                          "name": "Programovatelné obvody",
                          "seoUrl": "programovatelne-obvody"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        }
                      ],
                      "watchersCount": 9,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-07T11:08:31+02:00",
                      "id": 7090718366,
                      "name": "Plc Logo Siemens 8 + zdroj a modul",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 3199,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 3199,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 3338,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749287048865/thumbnail/plc-logo-siemens-8-zdroj-a-modul-231287565.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749287048865/73x73/plc-logo-siemens-8-zdroj-a-modul-231287565.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749287048865/plc-logo-siemens-8-zdroj-a-modul-231287565.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749287048865/400x300/plc-logo-siemens-8-zdroj-a-modul-231287565.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749287048865/730x548/plc-logo-siemens-8-zdroj-a-modul-231287565.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "plc-logo-siemens-8-zdroj-a-modul",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101204,
                          "name": "Programovatelné obvody",
                          "seoUrl": "programovatelne-obvody"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Zánovní",
                          "attributeValueId": 6,
                          "position": 0
                        }
                      ],
                      "watchersCount": 9,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-07T18:34:11+02:00",
                      "id": 7090739974,
                      "name": "Plně funkční dron DJI MINI 3 PRO",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 8600,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 8600,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 8679,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746183979960/thumbnail/plne-funkcni-dron-dji-mini-3-pro-227719103.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746183979960/73x73/plne-funkcni-dron-dji-mini-3-pro-227719103.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746183979960/plne-funkcni-dron-dji-mini-3-pro-227719103.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746183979960/400x300/plne-funkcni-dron-dji-mini-3-pro-227719103.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1746183979960/730x548/plne-funkcni-dron-dji-mini-3-pro-227719103.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "plne-funkcni-dron-dji-mini-3-pro",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 251673,
                          "name": "Drony",
                          "seoUrl": "rc-modely-drony"
                        },
                        {
                          "id": 256913,
                          "name": "Profesionální drony",
                          "seoUrl": "profesionalni-drony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Zánovní",
                          "attributeValueId": 6,
                          "position": 0
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Kamera",
                          "attributeValueId": 1,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Ovládání gesty",
                          "attributeValueId": 10,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Následuj mě",
                          "attributeValueId": 11,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Slot na paměťovou kartu",
                          "attributeValueId": 12,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Online přenos videa",
                          "attributeValueId": 13,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Kompas",
                          "attributeValueId": 2,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "GPS",
                          "attributeValueId": 3,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Barometr",
                          "attributeValueId": 4,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Auto start/přistání",
                          "attributeValueId": 5,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Auto návrat",
                          "attributeValueId": 6,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Sledování objektu",
                          "attributeValueId": 7,
                          "position": -1
                        },
                        {
                          "attributeId": 616,
                          "attributeName": "Funkce",
                          "attributeValue": "Detekce překážek",
                          "attributeValueId": 9,
                          "position": -1
                        },
                        {
                          "attributeId": 617,
                          "attributeName": "Maximální doba letu",
                          "attributeValue": "30 - 39 min.",
                          "attributeValueId": 4,
                          "position": 1
                        },
                        {
                          "attributeId": 618,
                          "attributeName": "Hmotnost dronu",
                          "attributeValue": "Méně než 250 g",
                          "attributeValueId": 1,
                          "position": 2
                        },
                        {
                          "attributeId": 619,
                          "attributeName": "Maximální rozlišení",
                          "attributeValue": "4K (4096×2160)",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 657,
                          "attributeName": "Značka",
                          "attributeValue": "DJI",
                          "attributeValueId": 1,
                          "position": -1
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "7-10 dní",
                          "attributeValueId": 4,
                          "position": 4
                        }
                      ],
                      "watchersCount": 10,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-08T08:03:15+02:00",
                      "id": 7090781290,
                      "name": "7.1 RECEIVER ZESILOVAČ PIONEER VSX-1021-K USB HDMI DLNA AIRPLAY",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 4999,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 4999,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 5128,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744114023914/thumbnail/7-1-receiver-zesilovac-pioneer-vsx-1021-k-usb-hdmi-dlna-airplay-225346366.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744114023914/73x73/7-1-receiver-zesilovac-pioneer-vsx-1021-k-usb-hdmi-dlna-airplay-225346366.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744114023914/7-1-receiver-zesilovac-pioneer-vsx-1021-k-usb-hdmi-dlna-airplay-225346366.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744114023914/400x300/7-1-receiver-zesilovac-pioneer-vsx-1021-k-usb-hdmi-dlna-airplay-225346366.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744114023914/730x548/7-1-receiver-zesilovac-pioneer-vsx-1021-k-usb-hdmi-dlna-airplay-225346366.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "7-1-receiver-zesilovac-pioneer-vsx-1021-k-usb-hdmi-dlna-airplay",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101028,
                          "name": "AV receivery",
                          "seoUrl": "av-prijimace"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "2-3 dny",
                          "attributeValueId": 2,
                          "position": 4
                        }
                      ],
                      "watchersCount": 9,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-09T19:35:33+02:00",
                      "id": 7090950621,
                      "name": "Tape deck Technics RS-AZ7",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 10999,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 10999,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 11062,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749490381439/thumbnail/tape-deck-technics-rs-az7-231586775.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749490381439/73x73/tape-deck-technics-rs-az7-231586775.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749490381439/tape-deck-technics-rs-az7-231586775.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749490381439/400x300/tape-deck-technics-rs-az7-231586775.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749490381439/730x548/tape-deck-technics-rs-az7-231586775.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "tape-deck-technics-rs-az7",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101030,
                          "name": "Kazetové magnetofony",
                          "seoUrl": "kazetove-magnetofony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Opravené",
                          "attributeValueId": 5,
                          "position": 0
                        }
                      ],
                      "watchersCount": 10,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-11T20:50:29+02:00",
                      "id": 7091123871,
                      "name": "6x digitron RFT z5660m - testované ",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 9150,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 9150,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 9227,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749667605153/thumbnail/6x-digitron-rft-z5660m-testovane-231791409.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749667605153/73x73/6x-digitron-rft-z5660m-testovane-231791409.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749667605153/6x-digitron-rft-z5660m-testovane-231791409.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749667605153/400x300/6x-digitron-rft-z5660m-testovane-231791409.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749667605153/730x548/6x-digitron-rft-z5660m-testovane-231791409.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "6x-digitron-rft-z5660m-testovane",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101201,
                          "name": "Elektronické součástky",
                          "seoUrl": "elektrosoucastky"
                        },
                        {
                          "id": 101238,
                          "name": "Elektronky",
                          "seoUrl": "elektronky"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        }
                      ],
                      "watchersCount": 16,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-11T21:06:32+02:00",
                      "id": 7091126185,
                      "name": "6x digitron RFT z566m - testované ",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 8250,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 8250,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 8327,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749668765746/thumbnail/6x-digitron-rft-z566m-testovane-231794486.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749668765746/73x73/6x-digitron-rft-z566m-testovane-231794486.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749668765746/6x-digitron-rft-z566m-testovane-231794486.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749668765746/400x300/6x-digitron-rft-z566m-testovane-231794486.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749668765746/730x548/6x-digitron-rft-z566m-testovane-231794486.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BUYNOW",
                      "seoUrl": "6x-digitron-rft-z566m-testovane",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 0,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101201,
                          "name": "Elektronické součástky",
                          "seoUrl": "elektrosoucastky"
                        },
                        {
                          "id": 101238,
                          "name": "Elektronky",
                          "seoUrl": "elektronky"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        }
                      ],
                      "watchersCount": 14,
                      "userWatching": false,
                      "buyNowActive": true,
                      "charity": false
                    }
                  ]
                }
              }
            ]
          },
          {
            "placement": {
              "gridViewRow": 12,
              "listViewRow": 18
            },
            "components": [
              {
                "type": "UniversalItems",
                "visible": [
                  "desktop",
                  "tablet",
                  "mobile"
                ],
                "moCode": "LM_TP_100890_OOB",
                "content": {
                  "itemType": "AUCTION",
                  "categoryIds": [
                    100890
                  ],
                  "YUSPenabled": false,
                  "interestFilter": {
                    "bidders": {
                      "max": 1,
                      "min": 1
                    }
                  },
                  "title": "Populární nabídky",
                  "items": [
                    {
                      "endingTime": "2025-07-01T21:30:00+02:00",
                      "id": 7092059610,
                      "name": "**ŠIKOVNÁ DÁLKOVÉ OVLÁDÁNÍ VIESSMANN VITOCAL 100-A- VÝHODNÁ KOUPĚ**",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 141,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1742821898413/thumbnail/sikovna-dalkove-ovladani-viessmann-vitocal-100-a-vyhodna-koupe-223714446.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1742821898413/73x73/sikovna-dalkove-ovladani-viessmann-vitocal-100-a-vyhodna-koupe-223714446.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1742821898413/sikovna-dalkove-ovladani-viessmann-vitocal-100-a-vyhodna-koupe-223714446.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1742821898413/400x300/sikovna-dalkove-ovladani-viessmann-vitocal-100-a-vyhodna-koupe-223714446.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1742821898413/730x548/sikovna-dalkove-ovladani-viessmann-vitocal-100-a-vyhodna-koupe-223714446.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "sikovna-dalkove-ovladani-viessmann-vitocal-100-a-vyhodna-koupe",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100896,
                          "name": "Vzduchotechnika, topení",
                          "seoUrl": "vzduchotechnika-topeni"
                        },
                        {
                          "id": 101186,
                          "name": "Příslušenství k vzduchotechnice a topení",
                          "seoUrl": "prislusenstvi-k-vzduchotechnice-a-topeni"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nové",
                          "attributeValueId": 1,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "1-2 dny",
                          "attributeValueId": 1,
                          "position": 4
                        }
                      ],
                      "watchersCount": 1,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-01T21:35:00+02:00",
                      "id": 7091071198,
                      "name": "Starý retro Battery tester BT1, funkční ",
                      "status": "ACTIVE",
                      "topSeller": true,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 99,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 198,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749631031940/thumbnail/stary-retro-battery-tester-bt1-funkcni-231726259.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749631031940/73x73/stary-retro-battery-tester-bt1-funkcni-231726259.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749631031940/stary-retro-battery-tester-bt1-funkcni-231726259.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749631031940/400x300/stary-retro-battery-tester-bt1-funkcni-231726259.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749631031940/730x548/stary-retro-battery-tester-bt1-funkcni-231726259.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "stary-retro-battery-tester-bt1-funkcni",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101202,
                          "name": "Měřicí přístroje",
                          "seoUrl": "merici-pristroje"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Zánovní",
                          "attributeValueId": 6,
                          "position": 0
                        }
                      ],
                      "watchersCount": 7,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-01T21:37:00+02:00",
                      "id": 7090456426,
                      "name": "STARÁ VHS DEMOLITION MAN ",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 199,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 284,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748966572108/thumbnail/stara-vhs-demolition-man-230943019.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748966572108/73x73/stara-vhs-demolition-man-230943019.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748966572108/stara-vhs-demolition-man-230943019.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748966572108/400x300/stara-vhs-demolition-man-230943019.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1748966572108/730x548/stara-vhs-demolition-man-230943019.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "stara-vhs-demolition-man",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100989,
                          "name": "Ostatní TV, audio, video",
                          "seoUrl": "ostatni-tv-audio-video"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        }
                      ],
                      "watchersCount": 2,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-01T21:48:06+02:00",
                      "id": 7092335383,
                      "name": "Vařič vajec Switch On EB-B0101 ",
                      "status": "ACTIVE",
                      "topSeller": true,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 169,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 239,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744798946088/thumbnail/varic-vajec-switch-on-eb-b0101-226118941.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744798946088/73x73/varic-vajec-switch-on-eb-b0101-226118941.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744798946088/varic-vajec-switch-on-eb-b0101-226118941.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744798946088/400x300/varic-vajec-switch-on-eb-b0101-226118941.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1744798946088/730x548/varic-vajec-switch-on-eb-b0101-226118941.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "varic-vajec-switch-on-eb-b0101",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100892,
                          "name": "Malé elektrospotřebiče",
                          "seoUrl": "male-elektrospotrebice"
                        },
                        {
                          "id": 256871,
                          "name": "Vaření a pečení",
                          "seoUrl": "vareni-a-peceni"
                        },
                        {
                          "id": 100940,
                          "name": "Vařiče",
                          "seoUrl": "varice"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nové",
                          "attributeValueId": 1,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "2-3 dny",
                          "attributeValueId": 2,
                          "position": 4
                        },
                        {
                          "attributeId": 10227,
                          "attributeName": "Značka",
                          "attributeValue": "Ostatní",
                          "attributeValueId": 80,
                          "position": 0
                        }
                      ],
                      "watchersCount": 2,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-01T21:51:09+02:00",
                      "id": 7092171352,
                      "name": "Digestoř WHIRLPOOL AKR 749/1 NB",
                      "status": "ACTIVE",
                      "topSeller": true,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 389,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 788,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750917098251/thumbnail/digestor-whirlpool-akr-749-1-nb-233069609.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750917098251/73x73/digestor-whirlpool-akr-749-1-nb-233069609.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750917098251/digestor-whirlpool-akr-749-1-nb-233069609.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750917098251/400x300/digestor-whirlpool-akr-749-1-nb-233069609.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750917098251/730x548/digestor-whirlpool-akr-749-1-nb-233069609.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "digestor-whirlpool-akr-749-1-nb",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100891,
                          "name": "Velké elektrospotřebiče",
                          "seoUrl": "velke-elektrospotrebice"
                        },
                        {
                          "id": 100900,
                          "name": "Digestoře",
                          "seoUrl": "digestore"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nefunkční / na díly",
                          "attributeValueId": 4,
                          "position": 0
                        },
                        {
                          "attributeId": 10283,
                          "attributeName": "Značka",
                          "attributeValue": "Whirpool",
                          "attributeValueId": 114,
                          "position": 0
                        },
                        {
                          "attributeId": 10284,
                          "attributeName": "Typ digestoře",
                          "attributeValue": "Vestavné",
                          "attributeValueId": 40,
                          "position": 0
                        },
                        {
                          "attributeId": 18152,
                          "attributeName": "Kód zboží",
                          "attributeValue": "AUP246267",
                          "position": 6
                        }
                      ],
                      "watchersCount": 15,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-01T21:55:54+02:00",
                      "id": 7092087724,
                      "name": "Pračka beko",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 3000,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 750,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 1750,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1741736025330/thumbnail/pracka-beko-222375348.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1741736025330/73x73/pracka-beko-222375348.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1741736025330/pracka-beko-222375348.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1741736025330/400x300/pracka-beko-222375348.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1741736025330/730x548/pracka-beko-222375348.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "pracka-beko",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100891,
                          "name": "Velké elektrospotřebiče",
                          "seoUrl": "velke-elektrospotrebice"
                        },
                        {
                          "id": 100909,
                          "name": "Pračky",
                          "seoUrl": "pracky"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nefunkční / na díly",
                          "attributeValueId": 4,
                          "position": 0
                        },
                        {
                          "attributeId": 10513,
                          "attributeName": "Značka",
                          "attributeValue": "Beko",
                          "attributeValueId": 30,
                          "position": 0
                        },
                        {
                          "attributeId": 10514,
                          "attributeName": "Způsob plnění",
                          "attributeValue": "Přední",
                          "attributeValueId": 20,
                          "position": 0
                        }
                      ],
                      "watchersCount": 3,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-01T22:16:41+02:00",
                      "id": 7091860849,
                      "name": "TV káble a antena",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 100,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750536956748/thumbnail/tv-kable-a-antena-232683534.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750536956748/73x73/tv-kable-a-antena-232683534.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750536956748/tv-kable-a-antena-232683534.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750536956748/400x300/tv-kable-a-antena-232683534.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750536956748/730x548/tv-kable-a-antena-232683534.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "tv-kable-a-antena",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100976,
                          "name": "DVB-T a satelitní technika",
                          "seoUrl": "dvb-t-technika"
                        },
                        {
                          "id": 101010,
                          "name": "Antény k TV a audio",
                          "seoUrl": "anteny-k-tv-a-audio"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        }
                      ],
                      "watchersCount": 1,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-01T22:52:36+02:00",
                      "id": 7092090071,
                      "name": "3D brýle Samsung SSG-5100GB originální sada ",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 64,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750797247794/thumbnail/3d-bryle-samsung-ssg-5100gb-originalni-sada-232970184.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750797247794/73x73/3d-bryle-samsung-ssg-5100gb-originalni-sada-232970184.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750797247794/3d-bryle-samsung-ssg-5100gb-originalni-sada-232970184.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750797247794/400x300/3d-bryle-samsung-ssg-5100gb-originalni-sada-232970184.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750797247794/730x548/3d-bryle-samsung-ssg-5100gb-originalni-sada-232970184.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "3d-bryle-samsung-ssg-5100gb-originalni-sada",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100974,
                          "name": "TV - Televize",
                          "seoUrl": "tv"
                        },
                        {
                          "id": 100997,
                          "name": "TV příslušenství",
                          "seoUrl": "tv-prislusenstvi"
                        },
                        {
                          "id": 100999,
                          "name": "3D brýle k TV",
                          "seoUrl": "3d-bryle-k-tv"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nové",
                          "attributeValueId": 1,
                          "position": 0
                        },
                        {
                          "attributeId": 322,
                          "attributeName": "Typ příslušenství",
                          "attributeValue": "Brýle",
                          "attributeValueId": 6,
                          "position": 0
                        },
                        {
                          "attributeId": 597,
                          "attributeName": "Značka",
                          "attributeValue": "Samsung",
                          "attributeValueId": 7,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "4-6 dní",
                          "attributeValueId": 3,
                          "position": 4
                        }
                      ],
                      "watchersCount": 7,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T03:03:56+02:00",
                      "id": 7091568966,
                      "name": "Digitální zrcadlovka CHINON AF-120",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1191,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 1254,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750208451366/thumbnail/digitalni-zrcadlovka-chinon-af-120-232335518.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750208451366/73x73/digitalni-zrcadlovka-chinon-af-120-232335518.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750208451366/digitalni-zrcadlovka-chinon-af-120-232335518.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750208451366/400x300/digitalni-zrcadlovka-chinon-af-120-232335518.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750208451366/730x548/digitalni-zrcadlovka-chinon-af-120-232335518.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "digitalni-zrcadlovka-chinon-af-120",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100894,
                          "name": "Foto",
                          "seoUrl": "foto"
                        },
                        {
                          "id": 101076,
                          "name": "Digitální fotoaparáty",
                          "seoUrl": "digitalni-fotoaparaty"
                        },
                        {
                          "id": 101081,
                          "name": "Digitální zrcadlovky",
                          "seoUrl": "zrcadlovky"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Zánovní",
                          "attributeValueId": 6,
                          "position": 0
                        },
                        {
                          "attributeId": 9764,
                          "attributeName": "Značka",
                          "attributeValue": "Ostatní",
                          "attributeValueId": 400,
                          "position": 0
                        }
                      ],
                      "watchersCount": 4,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T08:50:49+02:00",
                      "id": 7090574092,
                      "name": "Vačkový přepínač OBZOR ZLÍN VS 63",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 135,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 212,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749105959289/thumbnail/vackovy-prepinac-obzor-zlin-vs-63-231098444.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749105959289/73x73/vackovy-prepinac-obzor-zlin-vs-63-231098444.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749105959289/vackovy-prepinac-obzor-zlin-vs-63-231098444.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749105959289/400x300/vackovy-prepinac-obzor-zlin-vs-63-231098444.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1749105959289/730x548/vackovy-prepinac-obzor-zlin-vs-63-231098444.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "vackovy-prepinac-obzor-zlin-vs-63",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101201,
                          "name": "Elektronické součástky",
                          "seoUrl": "elektrosoucastky"
                        },
                        {
                          "id": 101255,
                          "name": "Spínače",
                          "seoUrl": "spinace"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nové",
                          "attributeValueId": 1,
                          "position": 0
                        }
                      ],
                      "watchersCount": 3,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T08:54:16+02:00",
                      "id": 7091871103,
                      "name": "TESLA Zesilovač Receiver 638A Bratislava",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 669,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 735,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750575095016/thumbnail/tesla-zesilovac-receiver-638a-bratislava-232695132.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750575095016/73x73/tesla-zesilovac-receiver-638a-bratislava-232695132.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750575095016/tesla-zesilovac-receiver-638a-bratislava-232695132.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750575095016/400x300/tesla-zesilovac-receiver-638a-bratislava-232695132.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750575095016/730x548/tesla-zesilovac-receiver-638a-bratislava-232695132.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "tesla-zesilovac-receiver-638a-bratislava",
                      "paymentViaAukro": false,
                      "buyersProtectionAvailable": false,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101031,
                          "name": "Kotoučové magnetofony",
                          "seoUrl": "kotoucove-magnetofony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "2-3 dny",
                          "attributeValueId": 2,
                          "position": 4
                        }
                      ],
                      "watchersCount": 10,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T09:38:21+02:00",
                      "id": 7092108257,
                      "name": "Aiwa HS-PX557 walkman",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 2200,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1700,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 1825,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750836390343/thumbnail/aiwa-hs-px557-walkman-232988647.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750836390343/73x73/aiwa-hs-px557-walkman-232988647.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750836390343/aiwa-hs-px557-walkman-232988647.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750836390343/400x300/aiwa-hs-px557-walkman-232988647.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750836390343/730x548/aiwa-hs-px557-walkman-232988647.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "aiwa-hs-px557-walkman",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100893,
                          "name": "TV, audio, video",
                          "seoUrl": "tv-audio-video"
                        },
                        {
                          "id": 100982,
                          "name": "Hi-Fi",
                          "seoUrl": "hi-fi-komponenty"
                        },
                        {
                          "id": 101030,
                          "name": "Kazetové magnetofony",
                          "seoUrl": "kazetove-magnetofony"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 520,
                          "attributeName": "Značka",
                          "attributeValue": "Aiwa",
                          "attributeValueId": 9,
                          "position": 0
                        }
                      ],
                      "watchersCount": 10,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T09:42:34+02:00",
                      "id": 7092108499,
                      "name": "TRANSFORMÁTOR",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 400,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 530,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1740429257062/thumbnail/transformator-220743841.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1740429257062/73x73/transformator-220743841.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1740429257062/transformator-220743841.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1740429257062/400x300/transformator-220743841.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1740429257062/730x548/transformator-220743841.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "transformator",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101201,
                          "name": "Elektronické součástky",
                          "seoUrl": "elektrosoucastky"
                        },
                        {
                          "id": 101256,
                          "name": "Transformátory",
                          "seoUrl": "transformatory"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 361,
                          "attributeName": "Typ transformátoru",
                          "attributeValue": "Jednofázový",
                          "attributeValueId": 1,
                          "position": 0
                        }
                      ],
                      "watchersCount": 17,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T10:00:00+02:00",
                      "id": 7091868470,
                      "name": "DSLR Nikon D5100 - pouze tělo, aukce od 1Kč",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 2,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 92,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750572577453/thumbnail/dslr-nikon-d5100-pouze-telo-aukce-od-1kc-232694004.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750572577453/73x73/dslr-nikon-d5100-pouze-telo-aukce-od-1kc-232694004.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750572577453/dslr-nikon-d5100-pouze-telo-aukce-od-1kc-232694004.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750572577453/400x300/dslr-nikon-d5100-pouze-telo-aukce-od-1kc-232694004.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750572577453/730x548/dslr-nikon-d5100-pouze-telo-aukce-od-1kc-232694004.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "dslr-nikon-d5100-pouze-telo-aukce-od-1kc",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100894,
                          "name": "Foto",
                          "seoUrl": "foto"
                        },
                        {
                          "id": 101076,
                          "name": "Digitální fotoaparáty",
                          "seoUrl": "digitalni-fotoaparaty"
                        },
                        {
                          "id": 101081,
                          "name": "Digitální zrcadlovky",
                          "seoUrl": "zrcadlovky"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nefunkční / na díly",
                          "attributeValueId": 4,
                          "position": 0
                        },
                        {
                          "attributeId": 9764,
                          "attributeName": "Značka",
                          "attributeValue": "Nikon",
                          "attributeValueId": 110,
                          "position": 0
                        }
                      ],
                      "watchersCount": 8,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T10:15:24+02:00",
                      "id": 7091876310,
                      "name": "Mikrotlačítko 4FK57300, baleni 100ks",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 116,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750579904413/thumbnail/mikrotlacitko-4fk57300-baleni-100ks-232698563.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750579904413/73x73/mikrotlacitko-4fk57300-baleni-100ks-232698563.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750579904413/mikrotlacitko-4fk57300-baleni-100ks-232698563.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750579904413/400x300/mikrotlacitko-4fk57300-baleni-100ks-232698563.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750579904413/730x548/mikrotlacitko-4fk57300-baleni-100ks-232698563.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "mikrotlacitko-4fk57300-baleni-100ks",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101206,
                          "name": "Ostatní elektronika",
                          "seoUrl": "ostatni-elektronika"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nové",
                          "attributeValueId": 1,
                          "position": 0
                        },
                        {
                          "attributeId": 8820,
                          "attributeName": "Doba dodání (od obdržení platby)",
                          "attributeValue": "4-6 dní",
                          "attributeValueId": 3,
                          "position": 4
                        }
                      ],
                      "watchersCount": 3,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T10:23:34+02:00",
                      "id": 7091876593,
                      "name": "Směs starých potenciometru",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 1,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 116,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750580538869/thumbnail/smes-starych-potenciometru-232699042.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750580538869/73x73/smes-starych-potenciometru-232699042.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750580538869/smes-starych-potenciometru-232699042.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750580538869/400x300/smes-starych-potenciometru-232699042.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750580538869/730x548/smes-starych-potenciometru-232699042.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "smes-starych-potenciometru",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100898,
                          "name": "Elektronika",
                          "seoUrl": "elektronika"
                        },
                        {
                          "id": 101201,
                          "name": "Elektronické součástky",
                          "seoUrl": "elektrosoucastky"
                        },
                        {
                          "id": 101254,
                          "name": "Rezistory a potenciometry",
                          "seoUrl": "rezistory-a-potenciometry"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Použité",
                          "attributeValueId": 2,
                          "position": 0
                        },
                        {
                          "attributeId": 587,
                          "attributeName": "Konstrukce",
                          "attributeValue": "Uhlíkové",
                          "attributeValueId": 2,
                          "position": 0
                        }
                      ],
                      "watchersCount": 6,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T10:40:38+02:00",
                      "id": 7092111591,
                      "name": "Vysavač Vorwerk VK135 na ND",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 500,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 700,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750840123477/thumbnail/vysavac-vorwerk-vk135-na-nd-232994103.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750840123477/73x73/vysavac-vorwerk-vk135-na-nd-232994103.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750840123477/vysavac-vorwerk-vk135-na-nd-232994103.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750840123477/400x300/vysavac-vorwerk-vk135-na-nd-232994103.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750840123477/730x548/vysavac-vorwerk-vk135-na-nd-232994103.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "vysavac-vorwerk-vk135-na-nd",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100892,
                          "name": "Malé elektrospotřebiče",
                          "seoUrl": "male-elektrospotrebice"
                        },
                        {
                          "id": 256876,
                          "name": "Vysavače, mopy a čističe",
                          "seoUrl": "vysavace-mopy-cistice"
                        },
                        {
                          "id": 100930,
                          "name": "Vysavače",
                          "seoUrl": "vysavace"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nefunkční / na díly",
                          "attributeValueId": 4,
                          "position": 0
                        },
                        {
                          "attributeId": 10346,
                          "attributeName": "Značka",
                          "attributeValue": "Ostatní",
                          "attributeValueId": 160,
                          "position": 0
                        }
                      ],
                      "watchersCount": 6,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    },
                    {
                      "endingTime": "2025-07-02T10:59:56+02:00",
                      "id": 7092112602,
                      "name": "Krční ventilátor",
                      "status": "ACTIVE",
                      "topSeller": false,
                      "paymentOnline": false,
                      "buyNowPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "biddingPrice": {
                        "amount": 253,
                        "currency": "CZK"
                      },
                      "priceWithShipping": {
                        "amount": 354,
                        "currency": "CZK"
                      },
                      "retailPrice": {
                        "amount": 0,
                        "currency": "CZK"
                      },
                      "freeShipping": false,
                      "images": {
                        "lists": {
                          "medium_preview": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750841649130/thumbnail/krcni-ventilator-232996182.jpeg",
                              "size": "MEDIUM_PREVIEW",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "small": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750841649130/73x73/krcni-ventilator-232996182.jpeg",
                              "size": "SMALL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "original": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750841649130/krcni-ventilator-232996182.jpeg",
                              "size": "ORIGINAL",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "medium": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750841649130/400x300/krcni-ventilator-232996182.jpeg",
                              "size": "MEDIUM",
                              "thumbnailState": "ALL"
                            }
                          ],
                          "large": [
                            {
                              "position": 0,
                              "titleImage": true,
                              "url": "https://cdn.aukro.cz/images/sk1750841649130/730x548/krcni-ventilator-232996182.jpeg",
                              "size": "LARGE",
                              "thumbnailState": "ALL"
                            }
                          ]
                        }
                      },
                      "itemTypeEnumCode": "BIDDING",
                      "seoUrl": "krcni-ventilator",
                      "paymentViaAukro": true,
                      "buyersProtectionAvailable": true,
                      "statusAdultContent": false,
                      "bidderCount": 1,
                      "categoryPath": [
                        {
                          "id": 100890,
                          "name": "Elektro",
                          "seoUrl": "elektro"
                        },
                        {
                          "id": 100896,
                          "name": "Vzduchotechnika, topení",
                          "seoUrl": "vzduchotechnika-topeni"
                        },
                        {
                          "id": 256888,
                          "name": "Chlazení",
                          "seoUrl": "chlazeni"
                        },
                        {
                          "id": 101183,
                          "name": "Ventilátory",
                          "seoUrl": "domaci-ventilatory"
                        }
                      ],
                      "attributes": [
                        {
                          "attributeId": 48,
                          "attributeName": "Stav zboží",
                          "attributeValue": "Nové",
                          "attributeValueId": 1,
                          "position": 0
                        }
                      ],
                      "watchersCount": 2,
                      "userWatching": false,
                      "buyNowActive": false,
                      "charity": false
                    }
                  ]
                }
              }
            ]
          }
        ],
        "categoryTilesExtendMod": {
          "style": {},
          "tiles": [
            {
              "title": "Samsung",
              "tooltip": "Samsung",
              "destinationUrl": "/lp/samsung"
            },
            {
              "title": "Philips",
              "tooltip": "Philips",
              "destinationUrl": "/lp/philips"
            },
            {
              "title": "Panasonic",
              "tooltip": "Panasonic",
              "destinationUrl": "/lp/panasonic"
            },
            {
              "title": "Sencor",
              "tooltip": "Sencor",
              "destinationUrl": "/lp/sencor"
            }
          ]
        },
        "titleExtendMod": {
          "components": [
            {
              "type": "UniversalItems",
              "visible": [
                "desktop",
                "tablet",
                "mobile"
              ],
              "moCode": "LM_CARUSELS_DL12G6_100890_MAX-BID",
              "content": {
                "categoryIds": [
                  100890
                ],
                "fallbackFilterUpdates": [
                  {
                    "itemType": "AUCTION",
                    "priceFilter": {
                      "price": {
                        "min": 100
                      },
                      "maxBidShare": {}
                    },
                    "interestFilter": {
                      "bidders": {
                        "max": 1,
                        "min": 1
                      }
                    }
                  },
                  {
                    "priceFilter": {
                      "price": {},
                      "maxBidShare": {}
                    },
                    "interestFilter": {
                      "watchers": {
                        "min": 5
                      }
                    }
                  }
                ],
                "YUSPenabled": false,
                "priceFilter": {
                  "price": {
                    "min": 200
                  },
                  "maxBidShare": {
                    "max": 0.5,
                    "min": 0
                  }
                },
                "title": "Populární nabídky",
                "items": [
                  {
                    "endingTime": "2025-07-01T21:44:27+02:00",
                    "id": 7092041560,
                    "name": "Tyčový vysavač Rowenta RH98C8WO X-Force Flex 12.60 4v1 Aqua Auto 150AW",
                    "status": "ACTIVE",
                    "topSeller": true,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 1620,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 1749,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750751155457/thumbnail/tycovy-vysavac-rowenta-rh98c8wo-x-force-flex-12-60-4v1-aqua-auto-150aw-232903568.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750751155457/73x73/tycovy-vysavac-rowenta-rh98c8wo-x-force-flex-12-60-4v1-aqua-auto-150aw-232903568.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750751155457/tycovy-vysavac-rowenta-rh98c8wo-x-force-flex-12-60-4v1-aqua-auto-150aw-232903568.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750751155457/400x300/tycovy-vysavac-rowenta-rh98c8wo-x-force-flex-12-60-4v1-aqua-auto-150aw-232903568.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750751155457/730x548/tycovy-vysavac-rowenta-rh98c8wo-x-force-flex-12-60-4v1-aqua-auto-150aw-232903568.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "tycovy-vysavac-rowenta-rh98c8wo-x-force-flex-12-60-4v1-aqua-auto-150aw",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 10,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100892,
                        "name": "Malé elektrospotřebiče",
                        "seoUrl": "male-elektrospotrebice"
                      },
                      {
                        "id": 256876,
                        "name": "Vysavače, mopy a čističe",
                        "seoUrl": "vysavace-mopy-cistice"
                      },
                      {
                        "id": 100930,
                        "name": "Vysavače",
                        "seoUrl": "vysavace"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Použité",
                        "attributeValueId": 2,
                        "position": 0
                      },
                      {
                        "attributeId": 10346,
                        "attributeName": "Značka",
                        "attributeValue": "Rowenta",
                        "attributeValueId": 130,
                        "position": 0
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "AUP247118",
                        "position": 6
                      }
                    ],
                    "watchersCount": 42,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T09:29:00+02:00",
                    "id": 7092101813,
                    "name": "Profesionální mixážní pult DYNACORD - super stav jako nový Funkční ",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 1251,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 1551,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750832877769/thumbnail/profesionalni-mixazni-pult-dynacord-super-stav-jako-novy-funkcni-232983972.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750832877769/73x73/profesionalni-mixazni-pult-dynacord-super-stav-jako-novy-funkcni-232983972.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750832877769/profesionalni-mixazni-pult-dynacord-super-stav-jako-novy-funkcni-232983972.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750832877769/400x300/profesionalni-mixazni-pult-dynacord-super-stav-jako-novy-funkcni-232983972.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750832877769/730x548/profesionalni-mixazni-pult-dynacord-super-stav-jako-novy-funkcni-232983972.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "profesionalni-mixazni-pult-dynacord-super-stav-jako-novy-funkcni",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": false,
                    "statusAdultContent": false,
                    "bidderCount": 8,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100893,
                        "name": "TV, audio, video",
                        "seoUrl": "tv-audio-video"
                      },
                      {
                        "id": 100982,
                        "name": "Hi-Fi",
                        "seoUrl": "hi-fi-komponenty"
                      },
                      {
                        "id": 101034,
                        "name": "DJ pulty a kontrolery",
                        "seoUrl": "mixazni-pulty"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Zánovní",
                        "attributeValueId": 6,
                        "position": 0
                      }
                    ],
                    "watchersCount": 45,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T13:01:43+02:00",
                    "id": 7091883143,
                    "name": "Osciloskop 2x100MHz HANTEK DSO5102P",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 2720,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 2835,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750589889463/thumbnail/osciloskop-2x100mhz-hantek-dso5102p-232707713.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750589889463/73x73/osciloskop-2x100mhz-hantek-dso5102p-232707713.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750589889463/osciloskop-2x100mhz-hantek-dso5102p-232707713.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750589889463/400x300/osciloskop-2x100mhz-hantek-dso5102p-232707713.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750589889463/730x548/osciloskop-2x100mhz-hantek-dso5102p-232707713.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "osciloskop-2x100mhz-hantek-dso5102p",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 2,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100898,
                        "name": "Elektronika",
                        "seoUrl": "elektronika"
                      },
                      {
                        "id": 101202,
                        "name": "Měřicí přístroje",
                        "seoUrl": "merici-pristroje"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Zánovní",
                        "attributeValueId": 6,
                        "position": 0
                      },
                      {
                        "attributeId": 362,
                        "attributeName": "Druh měřícího přístroje",
                        "attributeValue": "Osciloskopy",
                        "attributeValueId": 2,
                        "position": 0
                      },
                      {
                        "attributeId": 8820,
                        "attributeName": "Doba dodání (od obdržení platby)",
                        "attributeValue": "4-6 dní",
                        "attributeValueId": 3,
                        "position": 4
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "R198",
                        "position": 6
                      }
                    ],
                    "watchersCount": 46,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T14:59:00+02:00",
                    "id": 7092379357,
                    "name": "Prodám receiver zesilovač-JVC RX-5052S",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 214,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 364,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751201819209/thumbnail/prodam-receiver-zesilovac-jvc-rx-5052s-233300765.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751201819209/73x73/prodam-receiver-zesilovac-jvc-rx-5052s-233300765.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751201819209/prodam-receiver-zesilovac-jvc-rx-5052s-233300765.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751201819209/400x300/prodam-receiver-zesilovac-jvc-rx-5052s-233300765.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751201819209/730x548/prodam-receiver-zesilovac-jvc-rx-5052s-233300765.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "prodam-receiver-zesilovac-jvc-rx-5052s",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": false,
                    "statusAdultContent": false,
                    "bidderCount": 7,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100893,
                        "name": "TV, audio, video",
                        "seoUrl": "tv-audio-video"
                      },
                      {
                        "id": 100982,
                        "name": "Hi-Fi",
                        "seoUrl": "hi-fi-komponenty"
                      },
                      {
                        "id": 101037,
                        "name": "Hi-Fi zesilovače",
                        "seoUrl": "hi-fi-zesilovace"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Použité",
                        "attributeValueId": 2,
                        "position": 0
                      }
                    ],
                    "watchersCount": 23,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T18:18:00+02:00",
                    "id": 7091893724,
                    "name": "Napájecí zdroj Tesla AYN 403 k magnetofonu A3",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 268,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 353,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750601826779/thumbnail/napajeci-zdroj-tesla-ayn-403-k-magnetofonu-a3-232722722.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750601826779/73x73/napajeci-zdroj-tesla-ayn-403-k-magnetofonu-a3-232722722.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750601826779/napajeci-zdroj-tesla-ayn-403-k-magnetofonu-a3-232722722.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750601826779/400x300/napajeci-zdroj-tesla-ayn-403-k-magnetofonu-a3-232722722.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750601826779/730x548/napajeci-zdroj-tesla-ayn-403-k-magnetofonu-a3-232722722.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "napajeci-zdroj-tesla-ayn-403-k-magnetofonu-a3",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 2,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100893,
                        "name": "TV, audio, video",
                        "seoUrl": "tv-audio-video"
                      },
                      {
                        "id": 100989,
                        "name": "Ostatní TV, audio, video",
                        "seoUrl": "ostatni-tv-audio-video"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Použité",
                        "attributeValueId": 2,
                        "position": 0
                      }
                    ],
                    "watchersCount": 17,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T20:57:36+02:00",
                    "id": 7092227761,
                    "name": "Lednice GORENJE RF212EPW4",
                    "status": "ACTIVE",
                    "topSeller": true,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 910,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 1309,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751003884735/thumbnail/lednice-gorenje-rf212epw4-233136933.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751003884735/73x73/lednice-gorenje-rf212epw4-233136933.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751003884735/lednice-gorenje-rf212epw4-233136933.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751003884735/400x300/lednice-gorenje-rf212epw4-233136933.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751003884735/730x548/lednice-gorenje-rf212epw4-233136933.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "lednice-gorenje-rf212epw4",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 7,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100891,
                        "name": "Velké elektrospotřebiče",
                        "seoUrl": "velke-elektrospotrebice"
                      },
                      {
                        "id": 100901,
                        "name": "Lednice",
                        "seoUrl": "chladnicky"
                      },
                      {
                        "id": 100902,
                        "name": "Americké lednice",
                        "seoUrl": "klasicke-chladnicky"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Použité",
                        "attributeValueId": 2,
                        "position": 0
                      },
                      {
                        "attributeId": 10383,
                        "attributeName": "Značka",
                        "attributeValue": "Gorenje",
                        "attributeValueId": 90,
                        "position": 0
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "AUP247376",
                        "position": 6
                      }
                    ],
                    "watchersCount": 34,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T21:12:02+02:00",
                    "id": 7092153860,
                    "name": "Automatická kulma MoistureProtect PHILIPS BHB887/00",
                    "status": "ACTIVE",
                    "topSeller": true,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 530,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 595,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1729353261173/thumbnail/automaticka-kulma-moistureprotect-philips-bhb887-00-207973943.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1729353261173/73x73/automaticka-kulma-moistureprotect-philips-bhb887-00-207973943.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1729353261173/automaticka-kulma-moistureprotect-philips-bhb887-00-207973943.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1729353261173/400x300/automaticka-kulma-moistureprotect-philips-bhb887-00-207973943.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1729353261173/730x548/automaticka-kulma-moistureprotect-philips-bhb887-00-207973943.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "automaticka-kulma-moistureprotect-philips-bhb887-00",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 3,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100895,
                        "name": "Péče o tělo a zdraví",
                        "seoUrl": "pristroje-pece-o-telo"
                      },
                      {
                        "id": 101138,
                        "name": "Péče o vlasy",
                        "seoUrl": "vysousece-vlasu-kulmy"
                      },
                      {
                        "id": 101154,
                        "name": "Kulmy",
                        "seoUrl": "kulmy"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Rozbaleno",
                        "attributeValueId": 3,
                        "position": 0
                      },
                      {
                        "attributeId": 8820,
                        "attributeName": "Doba dodání (od obdržení platby)",
                        "attributeValue": "1-2 dny",
                        "attributeValueId": 1,
                        "position": 4
                      },
                      {
                        "attributeId": 9916,
                        "attributeName": "Značka",
                        "attributeValue": "Philips",
                        "attributeValueId": 60,
                        "position": 0
                      },
                      {
                        "attributeId": 9917,
                        "attributeName": "Vlastnosti",
                        "attributeValue": "Ionizace",
                        "attributeValueId": 1,
                        "position": 0
                      }
                    ],
                    "watchersCount": 17,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T21:30:00+02:00",
                    "id": 7092123046,
                    "name": "ŠIKOVNÁ DVOUMOTOROVÁ DIGESTOŘ PHILCO PEC 350WR - VELMI VÝHODNÁ KOUPĚ",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 656,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 796,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750242262030/thumbnail/sikovna-dvoumotorova-digestor-philco-pec-350wr-velmi-vyhodna-koupe-232359876.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750242262030/73x73/sikovna-dvoumotorova-digestor-philco-pec-350wr-velmi-vyhodna-koupe-232359876.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750242262030/sikovna-dvoumotorova-digestor-philco-pec-350wr-velmi-vyhodna-koupe-232359876.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750242262030/400x300/sikovna-dvoumotorova-digestor-philco-pec-350wr-velmi-vyhodna-koupe-232359876.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750242262030/730x548/sikovna-dvoumotorova-digestor-philco-pec-350wr-velmi-vyhodna-koupe-232359876.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "sikovna-dvoumotorova-digestor-philco-pec-350wr-velmi-vyhodna-koupe",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": false,
                    "statusAdultContent": false,
                    "bidderCount": 5,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100891,
                        "name": "Velké elektrospotřebiče",
                        "seoUrl": "velke-elektrospotrebice"
                      },
                      {
                        "id": 100900,
                        "name": "Digestoře",
                        "seoUrl": "digestore"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nové",
                        "attributeValueId": 1,
                        "position": 0
                      },
                      {
                        "attributeId": 470,
                        "attributeName": "Počet rychlostí",
                        "attributeValue": "3 –⁠ 4",
                        "attributeValueId": 2,
                        "position": 0
                      },
                      {
                        "attributeId": 8820,
                        "attributeName": "Doba dodání (od obdržení platby)",
                        "attributeValue": "1-2 dny",
                        "attributeValueId": 1,
                        "position": 4
                      },
                      {
                        "attributeId": 10283,
                        "attributeName": "Značka",
                        "attributeValue": "Ostatní",
                        "attributeValueId": 170,
                        "position": 0
                      },
                      {
                        "attributeId": 10284,
                        "attributeName": "Typ digestoře",
                        "attributeValue": "Podvěsné",
                        "attributeValueId": 30,
                        "position": 0
                      },
                      {
                        "attributeId": 10285,
                        "attributeName": "Hlučnost",
                        "attributeValue": "61 - 64 dB",
                        "attributeValueId": 30,
                        "position": 0
                      },
                      {
                        "attributeId": 10286,
                        "attributeName": "Výkon odsávání",
                        "attributeValue": "500 m3/hod. a méně",
                        "attributeValueId": 10,
                        "position": 0
                      },
                      {
                        "attributeId": 10367,
                        "attributeName": "Odtah",
                        "attributeValue": "Horní",
                        "attributeValueId": 20,
                        "position": 0
                      },
                      {
                        "attributeId": 10368,
                        "attributeName": "Osvětlení",
                        "attributeValue": "LED diody",
                        "attributeValueId": 20,
                        "position": 0
                      },
                      {
                        "attributeId": 10369,
                        "attributeName": "Vlastnosti",
                        "attributeValue": "Recirkulace",
                        "attributeValueId": 1,
                        "position": 0
                      }
                    ],
                    "watchersCount": 8,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T21:30:00+02:00",
                    "id": 7092123226,
                    "name": "**ŠIKOVNÝ MULTIFUNKČNÍ ROBOT SENCOR STM 3787CH - VELMI VÝHODNÁ KOUPĚ**",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 1336,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 1476,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1748950786568/thumbnail/sikovny-multifunkcni-robot-sencor-stm-3787ch-velmi-vyhodna-koupe-230921128.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1748950786568/73x73/sikovny-multifunkcni-robot-sencor-stm-3787ch-velmi-vyhodna-koupe-230921128.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1748950786568/sikovny-multifunkcni-robot-sencor-stm-3787ch-velmi-vyhodna-koupe-230921128.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1748950786568/400x300/sikovny-multifunkcni-robot-sencor-stm-3787ch-velmi-vyhodna-koupe-230921128.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1748950786568/730x548/sikovny-multifunkcni-robot-sencor-stm-3787ch-velmi-vyhodna-koupe-230921128.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "sikovny-multifunkcni-robot-sencor-stm-3787ch-velmi-vyhodna-koupe",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": false,
                    "statusAdultContent": false,
                    "bidderCount": 9,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100892,
                        "name": "Malé elektrospotřebiče",
                        "seoUrl": "male-elektrospotrebice"
                      },
                      {
                        "id": 100942,
                        "name": "Kuchyňské roboty",
                        "seoUrl": "kuchynske-roboty"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nové",
                        "attributeValueId": 1,
                        "position": 0
                      },
                      {
                        "attributeId": 8820,
                        "attributeName": "Doba dodání (od obdržení platby)",
                        "attributeValue": "1-2 dny",
                        "attributeValueId": 1,
                        "position": 4
                      },
                      {
                        "attributeId": 10235,
                        "attributeName": "Značka",
                        "attributeValue": "Sencor",
                        "attributeValueId": 112,
                        "position": 0
                      },
                      {
                        "attributeId": 10236,
                        "attributeName": "Vlastnosti",
                        "attributeValue": "Hnětač",
                        "attributeValueId": 1,
                        "position": 0
                      },
                      {
                        "attributeId": 10236,
                        "attributeName": "Vlastnosti",
                        "attributeValue": "Šlehání",
                        "attributeValueId": 128,
                        "position": 0
                      },
                      {
                        "attributeId": 10236,
                        "attributeName": "Vlastnosti",
                        "attributeValue": "Mlýnek na maso",
                        "attributeValueId": 16,
                        "position": 0
                      },
                      {
                        "attributeId": 10236,
                        "attributeName": "Vlastnosti",
                        "attributeValue": "Regulace rychlosti",
                        "attributeValueId": 512,
                        "position": 0
                      },
                      {
                        "attributeId": 10236,
                        "attributeName": "Vlastnosti",
                        "attributeValue": "Mixování",
                        "attributeValueId": 64,
                        "position": 0
                      },
                      {
                        "attributeId": 10237,
                        "attributeName": "Příkon",
                        "attributeValue": "1000 W a více",
                        "attributeValueId": 50,
                        "position": 0
                      },
                      {
                        "attributeId": 10238,
                        "attributeName": "Objem nádoby",
                        "attributeValue": "4 - 4,9 l",
                        "attributeValueId": 40,
                        "position": 0
                      }
                    ],
                    "watchersCount": 35,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-02T21:46:22+02:00",
                    "id": 7092236115,
                    "name": "Operační paměť Patriot Viper Venom 32GB KIT DDR5 6000MHz CL30",
                    "status": "ACTIVE",
                    "topSeller": true,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 269,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 398,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751014030341/thumbnail/operacni-pamet-patriot-viper-venom-32gb-kit-ddr5-6000mhz-cl30-233145478.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751014030341/73x73/operacni-pamet-patriot-viper-venom-32gb-kit-ddr5-6000mhz-cl30-233145478.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751014030341/operacni-pamet-patriot-viper-venom-32gb-kit-ddr5-6000mhz-cl30-233145478.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751014030341/400x300/operacni-pamet-patriot-viper-venom-32gb-kit-ddr5-6000mhz-cl30-233145478.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751014030341/730x548/operacni-pamet-patriot-viper-venom-32gb-kit-ddr5-6000mhz-cl30-233145478.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "operacni-pamet-patriot-viper-venom-32gb-kit-ddr5-6000mhz-cl30",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 1,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100897,
                        "name": "Záznamová média",
                        "seoUrl": "zaznamova-media"
                      },
                      {
                        "id": 101195,
                        "name": "Paměťové karty",
                        "seoUrl": "pametove-karty"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nefunkční / na díly",
                        "attributeValueId": 4,
                        "position": 0
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "AUP247420",
                        "position": 6
                      }
                    ],
                    "watchersCount": 21,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-03T20:01:01+02:00",
                    "id": 7091953240,
                    "name": "Objektiv Samyang AF 135mm f/1.8 Sony FE",
                    "status": "ACTIVE",
                    "topSeller": true,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 2663,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 2792,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750665716097/thumbnail/objektiv-samyang-af-135mm-f-1-8-sony-fe-232791246.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750665716097/73x73/objektiv-samyang-af-135mm-f-1-8-sony-fe-232791246.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750665716097/objektiv-samyang-af-135mm-f-1-8-sony-fe-232791246.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750665716097/400x300/objektiv-samyang-af-135mm-f-1-8-sony-fe-232791246.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750665716097/730x548/objektiv-samyang-af-135mm-f-1-8-sony-fe-232791246.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "objektiv-samyang-af-135mm-f-1-8-sony-fe",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 3,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100894,
                        "name": "Foto",
                        "seoUrl": "foto"
                      },
                      {
                        "id": 101087,
                        "name": "Objektivy",
                        "seoUrl": "objektivy-prislusenstvi"
                      },
                      {
                        "id": 101105,
                        "name": "Zoom objektivy",
                        "seoUrl": "objektivy"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nefunkční / na díly",
                        "attributeValueId": 4,
                        "position": 0
                      },
                      {
                        "attributeId": 9793,
                        "attributeName": "Značka",
                        "attributeValue": "Samyang",
                        "attributeValueId": 84,
                        "position": 0
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "AUP246907",
                        "position": 6
                      }
                    ],
                    "watchersCount": 25,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-03T20:30:00+02:00",
                    "id": 7091980072,
                    "name": "Tesla T710A  ",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 540,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 630,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750688594161/thumbnail/tesla-t710a-232825762.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750688594161/73x73/tesla-t710a-232825762.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750688594161/tesla-t710a-232825762.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750688594161/400x300/tesla-t710a-232825762.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750688594161/730x548/tesla-t710a-232825762.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "tesla-t710a",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": false,
                    "statusAdultContent": false,
                    "bidderCount": 3,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100893,
                        "name": "TV, audio, video",
                        "seoUrl": "tv-audio-video"
                      },
                      {
                        "id": 100982,
                        "name": "Hi-Fi",
                        "seoUrl": "hi-fi-komponenty"
                      },
                      {
                        "id": 101036,
                        "name": "Hi-Fi tunery",
                        "seoUrl": "hi-fi-tunery"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Použité",
                        "attributeValueId": 2,
                        "position": 0
                      },
                      {
                        "attributeId": 8820,
                        "attributeName": "Doba dodání (od obdržení platby)",
                        "attributeValue": "4-6 dní",
                        "attributeValueId": 3,
                        "position": 4
                      }
                    ],
                    "watchersCount": 39,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-03T21:00:00+02:00",
                    "id": 7092206507,
                    "name": "Projektor Wanbo X5 Air",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 200,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 263,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750956862313/thumbnail/projektor-wanbo-x5-air-233112907.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750956862313/73x73/projektor-wanbo-x5-air-233112907.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750956862313/projektor-wanbo-x5-air-233112907.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750956862313/400x300/projektor-wanbo-x5-air-233112907.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750956862313/730x548/projektor-wanbo-x5-air-233112907.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "projektor-wanbo-x5-air",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 1,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100893,
                        "name": "TV, audio, video",
                        "seoUrl": "tv-audio-video"
                      },
                      {
                        "id": 100975,
                        "name": "Projekční technika",
                        "seoUrl": "projekcni-technika"
                      },
                      {
                        "id": 101005,
                        "name": "Projektory",
                        "seoUrl": "projektory"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nefunkční / na díly",
                        "attributeValueId": 4,
                        "position": 0
                      },
                      {
                        "attributeId": 10257,
                        "attributeName": "Značka",
                        "attributeValue": "Ostatní",
                        "attributeValueId": 150,
                        "position": 0
                      }
                    ],
                    "watchersCount": 5,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-05T18:06:42+02:00",
                    "id": 7092116979,
                    "name": "Pultový mrazák Siguro CF-P15W Fast Freeze 500",
                    "status": "ACTIVE",
                    "topSeller": true,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 807,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 1206,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750846040101/thumbnail/pultovy-mrazak-siguro-cf-p15w-fast-freeze-500-233002760.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750846040101/73x73/pultovy-mrazak-siguro-cf-p15w-fast-freeze-500-233002760.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750846040101/pultovy-mrazak-siguro-cf-p15w-fast-freeze-500-233002760.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750846040101/400x300/pultovy-mrazak-siguro-cf-p15w-fast-freeze-500-233002760.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750846040101/730x548/pultovy-mrazak-siguro-cf-p15w-fast-freeze-500-233002760.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "pultovy-mrazak-siguro-cf-p15w-fast-freeze-500",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 7,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100891,
                        "name": "Velké elektrospotřebiče",
                        "seoUrl": "velke-elektrospotrebice"
                      },
                      {
                        "id": 100905,
                        "name": "Mrazáky",
                        "seoUrl": "mrazaky"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nefunkční / na díly",
                        "attributeValueId": 4,
                        "position": 0
                      },
                      {
                        "attributeId": 10447,
                        "attributeName": "Značka",
                        "attributeValue": "Ostatní",
                        "attributeValueId": 150,
                        "position": 0
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "AUP246608",
                        "position": 6
                      }
                    ],
                    "watchersCount": 25,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-06T19:47:33+02:00",
                    "id": 7092212092,
                    "name": "🔥MYSTERY BOX ELEKTRO🔥",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 320,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 388,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1738769411905/thumbnail/mystery-box-elektro-218574005.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1738769411905/73x73/mystery-box-elektro-218574005.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1738769411905/mystery-box-elektro-218574005.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1738769411905/400x300/mystery-box-elektro-218574005.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1738769411905/730x548/mystery-box-elektro-218574005.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "mystery-box-elektro",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 2,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100898,
                        "name": "Elektronika",
                        "seoUrl": "elektronika"
                      },
                      {
                        "id": 101206,
                        "name": "Ostatní elektronika",
                        "seoUrl": "ostatni-elektronika"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nové",
                        "attributeValueId": 1,
                        "position": 0
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "21",
                        "position": 6
                      }
                    ],
                    "watchersCount": 9,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-06T21:46:00+02:00",
                    "id": 7092125300,
                    "name": "🔥 Velká SMART WiFi Meteostanice , App, 1x Bezdrát. čidlo, Předpověď",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 353,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 416,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750853291245/thumbnail/velka-smart-wifi-meteostanice-app-1x-bezdrat-cidlo-predpoved-233014014.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750853291245/73x73/velka-smart-wifi-meteostanice-app-1x-bezdrat-cidlo-predpoved-233014014.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750853291245/velka-smart-wifi-meteostanice-app-1x-bezdrat-cidlo-predpoved-233014014.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750853291245/400x300/velka-smart-wifi-meteostanice-app-1x-bezdrat-cidlo-predpoved-233014014.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750853291245/730x548/velka-smart-wifi-meteostanice-app-1x-bezdrat-cidlo-predpoved-233014014.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "velka-smart-wifi-meteostanice-app-1x-bezdrat-cidlo-predpoved",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 10,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100892,
                        "name": "Malé elektrospotřebiče",
                        "seoUrl": "male-elektrospotrebice"
                      },
                      {
                        "id": 100932,
                        "name": "Meteostanice",
                        "seoUrl": "meteostanice"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nové",
                        "attributeValueId": 1,
                        "position": 0
                      },
                      {
                        "attributeId": 10360,
                        "attributeName": "Značka",
                        "attributeValue": "Ostatní",
                        "attributeValueId": 100,
                        "position": 0
                      }
                    ],
                    "watchersCount": 42,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-07T19:57:38+02:00",
                    "id": 7092458902,
                    "name": "Reproduktor RCF ART 912-A",
                    "status": "ACTIVE",
                    "topSeller": true,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 6879,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 3299,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 3698,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751277516533/thumbnail/reproduktor-rcf-art-912-a-233387851.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751277516533/73x73/reproduktor-rcf-art-912-a-233387851.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751277516533/reproduktor-rcf-art-912-a-233387851.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751277516533/400x300/reproduktor-rcf-art-912-a-233387851.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1751277516533/730x548/reproduktor-rcf-art-912-a-233387851.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "reproduktor-rcf-art-912-a",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 2,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100893,
                        "name": "TV, audio, video",
                        "seoUrl": "tv-audio-video"
                      },
                      {
                        "id": 100987,
                        "name": "Reproduktory",
                        "seoUrl": "reprosoustavy-a-reproduktory"
                      },
                      {
                        "id": 256911,
                        "name": "Reproduktory k TV",
                        "seoUrl": "reproduktory-k-tv"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Použité",
                        "attributeValueId": 2,
                        "position": 0
                      },
                      {
                        "attributeId": 18152,
                        "attributeName": "Kód zboží",
                        "attributeValue": "AUP247331",
                        "position": 6
                      }
                    ],
                    "watchersCount": 8,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  },
                  {
                    "endingTime": "2025-07-08T20:00:00+02:00",
                    "id": 7091974026,
                    "name": "Fotoaparáty objektivy Royal, Rikoh, Pentax, Taron, Petri, Yashica",
                    "status": "ACTIVE",
                    "topSeller": false,
                    "paymentOnline": false,
                    "buyNowPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "biddingPrice": {
                      "amount": 530,
                      "currency": "CZK"
                    },
                    "priceWithShipping": {
                      "amount": 607,
                      "currency": "CZK"
                    },
                    "retailPrice": {
                      "amount": 0,
                      "currency": "CZK"
                    },
                    "freeShipping": false,
                    "images": {
                      "lists": {
                        "medium_preview": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750684091763/thumbnail/fotoaparaty-objektivy-royal-rikoh-pentax-taron-petri-yashica-232816067.jpeg",
                            "size": "MEDIUM_PREVIEW",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "small": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750684091763/73x73/fotoaparaty-objektivy-royal-rikoh-pentax-taron-petri-yashica-232816067.jpeg",
                            "size": "SMALL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "original": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750684091763/fotoaparaty-objektivy-royal-rikoh-pentax-taron-petri-yashica-232816067.jpeg",
                            "size": "ORIGINAL",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "medium": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750684091763/400x300/fotoaparaty-objektivy-royal-rikoh-pentax-taron-petri-yashica-232816067.jpeg",
                            "size": "MEDIUM",
                            "thumbnailState": "ALL"
                          }
                        ],
                        "large": [
                          {
                            "position": 0,
                            "titleImage": true,
                            "url": "https://cdn.aukro.cz/images/sk1750684091763/730x548/fotoaparaty-objektivy-royal-rikoh-pentax-taron-petri-yashica-232816067.jpeg",
                            "size": "LARGE",
                            "thumbnailState": "ALL"
                          }
                        ]
                      }
                    },
                    "itemTypeEnumCode": "BIDDING",
                    "seoUrl": "fotoaparaty-objektivy-royal-rikoh-pentax-taron-petri-yashica",
                    "paymentViaAukro": true,
                    "buyersProtectionAvailable": true,
                    "statusAdultContent": false,
                    "bidderCount": 9,
                    "categoryPath": [
                      {
                        "id": 100890,
                        "name": "Elektro",
                        "seoUrl": "elektro"
                      },
                      {
                        "id": 100894,
                        "name": "Foto",
                        "seoUrl": "foto"
                      },
                      {
                        "id": 101078,
                        "name": "Historické fotoaparáty",
                        "seoUrl": "historicke-fotoaparaty"
                      }
                    ],
                    "attributes": [
                      {
                        "attributeId": 48,
                        "attributeName": "Stav zboží",
                        "attributeValue": "Nefunkční / na díly",
                        "attributeValueId": 4,
                        "position": 0
                      }
                    ],
                    "watchersCount": 40,
                    "userWatching": false,
                    "buyNowActive": false,
                    "charity": false
                  }
                ]
              }
            }
          ]
        }
      },
      "links": [],
      "content": [
        {
          "itemId": 7092484987,
          "itemName": "BYKITCHEN Příslušenství pro horkovzdušnou fritézu Ninja /397",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100892,
              "name": "Malé elektrospotřebiče",
              "seoUrl": "male-elektrospotrebice"
            },
            {
              "id": 256871,
              "name": "Vaření a pečení",
              "seoUrl": "vareni-a-peceni"
            },
            {
              "id": 100938,
              "name": "Fritézy",
              "seoUrl": "fritovaci-hrnce"
            }
          ],
          "startingTime": "2025-06-30T18:51:00.385+02:00",
          "endingTime": "2025-07-03T18:51:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "1",
              "position": 5
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            },
            {
              "attributeId": 10218,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 70,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1736604187433/thumbnail/bykitchen-prislusenstvi-pro-horkovzdusnou-fritezu-ninja-397-215888622.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1736604187433/thumbnail/bykitchen-prislusenstvi-pro-horkovzdusnou-fritezu-ninja-397-215888622.jpeg",
          "seoUrl": "bykitchen-prislusenstvi-pro-horkovzdusnou-fritezu-ninja-397",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 2,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092214762,
          "itemName": "Krabicový Fotoaparát coronet every",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101078,
              "name": "Historické fotoaparáty",
              "seoUrl": "historicke-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-30T17:23:00.239+02:00",
          "endingTime": "2025-07-07T17:23:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 211,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 11,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 214,
              "attributeName": "Typ objektivu",
              "attributeValue": "Pevné ohnisko",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750962091230/thumbnail/krabicovy-fotoaparat-coronet-every-233120740.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750962091230/thumbnail/krabicovy-fotoaparat-coronet-every-233120740.jpeg",
          "seoUrl": "krabicovy-fotoaparat-coronet-every",
          "ppPriorityList": true,
          "ppHighlight": true,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7091934817,
          "itemName": "Hvězdičkový filtr Cokin A056",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101087,
              "name": "Objektivy",
              "seoUrl": "objektivy-prislusenstvi"
            },
            {
              "id": 101106,
              "name": "Filtry k objektivům",
              "seoUrl": "filtry-k-objektivum"
            }
          ],
          "startingTime": "2025-06-25T17:44:00.486+02:00",
          "endingTime": "2025-07-02T17:44:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 9797,
              "attributeName": "Značka",
              "attributeValue": "Cokin",
              "attributeValueId": 50,
              "position": 0
            },
            {
              "attributeId": 9798,
              "attributeName": "Typ",
              "attributeValue": "Star",
              "attributeValueId": 63,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750625048771/thumbnail/hvezdickovy-filtr-cokin-a056-232771210.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750625048771/thumbnail/hvezdickovy-filtr-cokin-a056-232771210.jpeg",
          "seoUrl": "hvezdickovy-filtr-cokin-a056",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092372208,
          "itemName": "Unidapt Cestovní adaptér, UK adaptér, Německo Anglie /20 W / od koruny",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100899,
              "name": "Ostatní elektro",
              "seoUrl": "ostatni-elektro"
            },
            {
              "id": 101210,
              "name": "Ostatní elektro výrobky",
              "seoUrl": "ostatni-elektro-vyrobky"
            }
          ],
          "startingTime": "2025-06-29T20:03:01.093+02:00",
          "endingTime": "2025-07-02T20:03:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "12",
              "position": 5
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750773809548/thumbnail/unidapt-cestovni-adapter-uk-adapter-nemecko-anglie-20-w-od-koruny-232934908.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750773809548/thumbnail/unidapt-cestovni-adapter-uk-adapter-nemecko-anglie-20-w-od-koruny-232934908.jpeg",
          "seoUrl": "unidapt-cestovni-adapter-uk-adapter-nemecko-anglie-20-w-od-koruny",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "Elektro_Aikela",
          "seller": {
            "userId": 101114501,
            "showName": "Elektro_Aikela",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 2718,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1265,
            "positiveFeedbackPercentage": 0.9984999999999999,
            "feedbackUniqueUserCount": 2721
          },
          "userWatching": false,
          "watchersCount": 5,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha 7",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092494455,
          "itemName": "Kulmofén PHILIPS BHA710/00",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101138,
              "name": "Péče o vlasy",
              "seoUrl": "vysousece-vlasu-kulmy"
            },
            {
              "id": 101155,
              "name": "Kulmofény",
              "seoUrl": "kulmofeny"
            }
          ],
          "startingTime": "2025-06-30T19:46:00.24+02:00",
          "endingTime": "2025-07-07T19:45:02+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 9916,
              "attributeName": "Značka",
              "attributeValue": "Philips",
              "attributeValueId": 60,
              "position": 0
            },
            {
              "attributeId": 9917,
              "attributeName": "Vlastnosti",
              "attributeValue": "Ionizace",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 66,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1746387506312/thumbnail/kulmofen-philips-bha710-00-227939078.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1746387506312/thumbnail/kulmofen-philips-bha710-00-227939078.jpeg",
          "seoUrl": "kulmofen-philips-bha710-00",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "JMservis",
          "seller": {
            "userId": 6566890,
            "showName": "JMservis",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 10207,
            "starType": "GOLD",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/6566890/medium/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/6566890/large/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "favouritedByCount": 1165,
            "positiveFeedbackPercentage": 0.9974,
            "feedbackUniqueUserCount": 10219
          },
          "userWatching": false,
          "watchersCount": 7,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Sezimovo Ústí",
          "postcode": "39102",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092489993,
          "itemName": "Tester pravosti diamantů/Dianant selector 2",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101202,
              "name": "Měřicí přístroje",
              "seoUrl": "merici-pristroje"
            }
          ],
          "startingTime": "2025-06-30T20:05:00.897+02:00",
          "endingTime": "2025-07-07T20:05:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1746538225883/thumbnail/tester-pravosti-diamantu-dianant-selector-2-228089137.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1746538225883/thumbnail/tester-pravosti-diamantu-dianant-selector-2-228089137.jpeg",
          "seoUrl": "tester-pravosti-diamantu-dianant-selector-2",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 15,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092399419,
          "itemName": "Sada na čištění elektroniky (25 v 1) telefon, Laptop, Klávesnice atd.",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101206,
              "name": "Ostatní elektronika",
              "seoUrl": "ostatni-elektronika"
            }
          ],
          "startingTime": "2025-06-29T21:25:01.703+02:00",
          "endingTime": "2025-07-02T21:25:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 3,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 84,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1743668378764/thumbnail/sada-na-cisteni-elektroniky-25-v-1-telefon-laptop-klavesnice-atd-224787289.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1743668378764/thumbnail/sada-na-cisteni-elektroniky-25-v-1-telefon-laptop-klavesnice-atd-224787289.jpeg",
          "seoUrl": "sada-na-cisteni-elektroniky-25-v-1-telefon-laptop-klavesnice-atd",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "Tom80",
          "seller": {
            "userId": 100600524,
            "showName": "Tom80",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3760,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1625,
            "positiveFeedbackPercentage": 0.996,
            "feedbackUniqueUserCount": 3772
          },
          "userWatching": false,
          "watchersCount": 7,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "15800",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092214613,
          "itemName": "Krabicový Fotoaparát Kodak Six 20 Brownie Junior",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101078,
              "name": "Historické fotoaparáty",
              "seoUrl": "historicke-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-30T17:19:00.334+02:00",
          "endingTime": "2025-07-07T17:19:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 211,
              "attributeName": "Značka",
              "attributeValue": "Kodak",
              "attributeValueId": 9,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 214,
              "attributeName": "Typ objektivu",
              "attributeValue": "Pevné ohnisko",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750961875386/thumbnail/krabicovy-fotoaparat-kodak-six-20-brownie-junior-233120486.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750961875386/thumbnail/krabicovy-fotoaparat-kodak-six-20-brownie-junior-233120486.jpeg",
          "seoUrl": "krabicovy-fotoaparat-kodak-six-20-brownie-junior",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 3,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092216479,
          "itemName": "Krabicový Fotoaparát Kodak brownie model 1 Camera",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101078,
              "name": "Historické fotoaparáty",
              "seoUrl": "historicke-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-30T17:47:00.298+02:00",
          "endingTime": "2025-07-07T17:47:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 211,
              "attributeName": "Značka",
              "attributeValue": "Kodak",
              "attributeValueId": 9,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 214,
              "attributeName": "Typ objektivu",
              "attributeValue": "Pevné ohnisko",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750963576288/thumbnail/krabicovy-fotoaparat-kodak-brownie-model-1-camera-233122754.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750963576288/thumbnail/krabicovy-fotoaparat-kodak-brownie-model-1-camera-233122754.jpeg",
          "seoUrl": "krabicovy-fotoaparat-kodak-brownie-model-1-camera",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 5,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092505529,
          "itemName": "SKVĚLÝ STYLOVÝ MLÝNEK NA KÁVU SENCOR SCG 3550SS - VELMI VÝHODNÁ KOUPĚ",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100892,
              "name": "Malé elektrospotřebiče",
              "seoUrl": "male-elektrospotrebice"
            },
            {
              "id": 100944,
              "name": "Kávovary a káva",
              "seoUrl": "espressa-kavovary-cajovary"
            },
            {
              "id": 100946,
              "name": "Mlýnky na kávu",
              "seoUrl": "mlynky-na-kavu"
            }
          ],
          "startingTime": "2025-06-30T21:40:00.406+02:00",
          "endingTime": "2025-07-07T21:40:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 10308,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 60,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 10309,
              "attributeName": "Kapacita násypky",
              "attributeValue": "65 g a méně",
              "attributeValueId": 10,
              "position": 0
            },
            {
              "attributeId": 10245,
              "attributeName": "Značka",
              "attributeValue": "Sencor",
              "attributeValueId": 154,
              "position": 0
            },
            {
              "attributeId": 10310,
              "attributeName": "Příkon",
              "attributeValue": "200 –⁠ 340 W",
              "attributeValueId": 50,
              "position": 0
            },
            {
              "attributeId": 10311,
              "attributeName": "Vlastnosti",
              "attributeValue": "Nastavení hrubosti mletí, Odnímatelná nádoba",
              "attributeValueId": 12,
              "position": 0
            },
            {
              "attributeId": 10248,
              "attributeName": "Vlastnosti",
              "attributeValue": "Mlýnek",
              "attributeValueId": 32,
              "position": 0
            },
            {
              "attributeId": 10249,
              "attributeName": "Příkon",
              "attributeValue": "1100 W a méně",
              "attributeValueId": 10,
              "position": 0
            }
          ],
          "price": {
            "amount": 3,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 143,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1732964740010/thumbnail/skvely-stylovy-mlynek-na-kavu-sencor-scg-3550ss-velmi-vyhodna-koupe-212176460.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1732964740010/thumbnail/skvely-stylovy-mlynek-na-kavu-sencor-scg-3550ss-velmi-vyhodna-koupe-212176460.jpeg",
          "seoUrl": "skvely-stylovy-mlynek-na-kavu-sencor-scg-3550ss-velmi-vyhodna-koupe",
          "ppPriorityList": true,
          "ppHighlight": true,
          "ppBoldTitle": true,
          "buyersCountRelative": 3,
          "itemState": "ACTIVE",
          "sellerLogin": "Polux",
          "seller": {
            "userId": 100978461,
            "showName": "Polux",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 626,
            "starType": "SILVER",
            "aukroPlus": false,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/100978461/medium/154ff73a-cdb5-4881-b5d0-798412026d1b.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/100978461/large/154ff73a-cdb5-4881-b5d0-798412026d1b.jpg",
            "favouritedByCount": 485,
            "positiveFeedbackPercentage": 0.9984000000000001,
            "feedbackUniqueUserCount": 627
          },
          "userWatching": false,
          "watchersCount": 9,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Kladno",
          "postcode": "27201",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092495012,
          "itemName": "12v1 projektor noční oblohy-Domácí Planetárium/12kazet",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100975,
              "name": "Projekční technika",
              "seoUrl": "projekcni-technika"
            },
            {
              "id": 101005,
              "name": "Projektory",
              "seoUrl": "projektory"
            }
          ],
          "startingTime": "2025-06-30T20:56:00.163+02:00",
          "endingTime": "2025-07-07T20:56:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 10257,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 150,
              "position": 0
            }
          ],
          "price": {
            "amount": 3,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 66,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1744369053641/thumbnail/12v1-projektor-nocni-oblohy-domaci-planetarium-12kazet-225659867.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1744369053641/thumbnail/12v1-projektor-nocni-oblohy-domaci-planetarium-12kazet-225659867.jpeg",
          "seoUrl": "12v1-projektor-nocni-oblohy-domaci-planetarium-12kazet",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 7,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092372178,
          "itemName": "HUACAM 2 ks bezdrátový mikrofon Lavalier pro iPhone, mini mikrofon",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100988,
              "name": "Sluchátka, mikrofony",
              "seoUrl": "sluchatka-mikrofony"
            },
            {
              "id": 101052,
              "name": "Mikrofony k TV, audio, video",
              "seoUrl": "mikrofony-k-tv-audio-video"
            }
          ],
          "startingTime": "2025-06-29T20:00:03.076+02:00",
          "endingTime": "2025-07-02T20:00:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "12",
              "position": 5
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750947066339/thumbnail/huacam-2-ks-bezdratovy-mikrofon-lavalier-pro-iphone-mini-mikrofon-233100353.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750947066339/thumbnail/huacam-2-ks-bezdratovy-mikrofon-lavalier-pro-iphone-mini-mikrofon-233100353.jpeg",
          "seoUrl": "huacam-2-ks-bezdratovy-mikrofon-lavalier-pro-iphone-mini-mikrofon",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "Elektro_Aikela",
          "seller": {
            "userId": 101114501,
            "showName": "Elektro_Aikela",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 2718,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1265,
            "positiveFeedbackPercentage": 0.9984999999999999,
            "feedbackUniqueUserCount": 2721
          },
          "userWatching": false,
          "watchersCount": 3,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha 7",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092471500,
          "itemName": "Odvlhčovač Comfee 50 l/den, 4 režimy, chytrý režim, vysoušeč ",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100892,
              "name": "Malé elektrospotřebiče",
              "seoUrl": "male-elektrospotrebice"
            },
            {
              "id": 100934,
              "name": "Ostatní malé elektrospotřebiče",
              "seoUrl": "ostatni-male-elektrospotrebice"
            },
            {
              "id": 100967,
              "name": "Ostatní malé spotřebiče",
              "seoUrl": "ostatni-male-spotebice"
            }
          ],
          "startingTime": "2025-07-01T20:42:01.241+02:00",
          "endingTime": "2025-07-06T20:42:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 100,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751289236382/thumbnail/odvlhcovac-comfee-50-l-den-4-rezimy-chytry-rezim-vysousec-233402161.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751289236382/thumbnail/odvlhcovac-comfee-50-l-den-4-rezimy-chytry-rezim-vysousec-233402161.jpeg",
          "seoUrl": "odvlhcovac-comfee-50-l-den-4-rezimy-chytry-rezim-vysousec",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "eSmouk",
          "seller": {
            "userId": 100674284,
            "showName": "eSmouk",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3450,
            "starType": "GOLD",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/100674284/medium/99b528d9-d912-4be8-86f6-92c00d828b2d.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/100674284/large/99b528d9-d912-4be8-86f6-92c00d828b2d.jpg",
            "favouritedByCount": 1771,
            "positiveFeedbackPercentage": 0.9837,
            "feedbackUniqueUserCount": 3508
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Lískovice",
          "postcode": "50801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7090788926,
          "itemName": "Celokovový USB Flash disk - 64 GB Kodak",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100897,
              "name": "Záznamová média",
              "seoUrl": "zaznamova-media"
            },
            {
              "id": 101197,
              "name": "Flash disky",
              "seoUrl": "pendrive-usb"
            }
          ],
          "startingTime": "2025-06-29T18:00:01.617+02:00",
          "endingTime": "2025-07-02T18:00:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 9911,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 160,
              "position": 0
            },
            {
              "attributeId": 9912,
              "attributeName": "Velikost",
              "attributeValue": "64 GB",
              "attributeValueId": 150,
              "position": 0
            },
            {
              "attributeId": 9913,
              "attributeName": "Rychlost při zápisu",
              "attributeValue": "10 - 17 MB/s",
              "attributeValueId": 40,
              "position": 0
            },
            {
              "attributeId": 9914,
              "attributeName": "Rychlost při čtení",
              "attributeValue": "24 - 30 MB/s",
              "attributeValueId": 40,
              "position": 0
            },
            {
              "attributeId": 9915,
              "attributeName": "Vlastnosti",
              "attributeValue": "Oko na poutko, Voděodolné",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 17,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1728659651716/thumbnail/celokovovy-usb-flash-disk-64-gb-kodak-207264646.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1728659651716/thumbnail/celokovovy-usb-flash-disk-64-gb-kodak-207264646.jpeg",
          "seoUrl": "celokovovy-usb-flash-disk-64-gb-kodak",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "jantarsoft",
          "seller": {
            "userId": 25116744,
            "showName": "jantarsoft",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 214,
            "starType": "BRONZE",
            "aukroPlus": false,
            "favouritedByCount": 45,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 214
          },
          "userWatching": false,
          "watchersCount": 10,
          "pepperLevel": 1,
          "personalPickup": true,
          "location": "Frydek-Mistek",
          "postcode": "73801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092510439,
          "itemName": "Dobíjecí baterie EBL AAA 1100mAh, 8 kusů, vysoce výkonné NOVÉ!záruka!",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 101208,
              "name": "Baterie a nabíječky baterií",
              "seoUrl": "baterie-a-nabijecky-baterii"
            },
            {
              "id": 101211,
              "name": "Baterie",
              "seoUrl": "baterie"
            }
          ],
          "startingTime": "2025-06-30T22:21:00.327+02:00",
          "endingTime": "2025-07-03T22:20:19+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 169,
              "attributeName": "Typ baterie",
              "attributeValue": "Nabíjecí",
              "attributeValueId": 2,
              "position": 0
            }
          ],
          "price": {
            "amount": 2,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 97,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750098817501/thumbnail/dobijeci-baterie-ebl-aaa-1100mah-8-kusu-vysoce-vykonne-nove-zaruka-232219795.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750098817501/thumbnail/dobijeci-baterie-ebl-aaa-1100mah-8-kusu-vysoce-vykonne-nove-zaruka-232219795.jpeg",
          "seoUrl": "dobijeci-baterie-ebl-aaa-1100mah-8-kusu-vysoce-vykonne-nove-zaruka",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "verca1990",
          "seller": {
            "userId": 12327956,
            "showName": "verca1990",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 966,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 367,
            "positiveFeedbackPercentage": 0.9753000000000001,
            "feedbackUniqueUserCount": 988
          },
          "userWatching": false,
          "watchersCount": 15,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "14300",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092491969,
          "itemName": "Marathon2 Bluetooth sportovní sluchátka s mikrofonem (černá)/350/",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100988,
              "name": "Sluchátka, mikrofony",
              "seoUrl": "sluchatka-mikrofony"
            },
            {
              "id": 101051,
              "name": "Drátová sluchátka",
              "seoUrl": "sluchatka-k-tv-audio-video"
            }
          ],
          "startingTime": "2025-06-30T20:31:00.163+02:00",
          "endingTime": "2025-07-03T20:31:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "1",
              "position": 5
            },
            {
              "attributeId": 10483,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 200,
              "position": 0
            },
            {
              "attributeId": 10484,
              "attributeName": "Typ sluchátek",
              "attributeValue": "Náhlavní",
              "attributeValueId": 4,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            },
            {
              "attributeId": 10485,
              "attributeName": "Přenos signálu",
              "attributeValue": "Bezdrátové",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 10486,
              "attributeName": "Vlastnosti",
              "attributeValue": "Bluetooth",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1747577660074/thumbnail/marathon2-bluetooth-sportovni-sluchatka-s-mikrofonem-cerna-350-229318221.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1747577660074/thumbnail/marathon2-bluetooth-sportovni-sluchatka-s-mikrofonem-cerna-350-229318221.jpeg",
          "seoUrl": "marathon2-bluetooth-sportovni-sluchatka-s-mikrofonem-cerna-350",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "Elektro_Aikela",
          "seller": {
            "userId": 101114501,
            "showName": "Elektro_Aikela",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 2718,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1265,
            "positiveFeedbackPercentage": 0.9984999999999999,
            "feedbackUniqueUserCount": 2721
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha 7",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092500725,
          "itemName": "SMARTMI V2-Smart bidetové prkénko/Vyhřívané/Dálkový ovladač",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100899,
              "name": "Ostatní elektro",
              "seoUrl": "ostatni-elektro"
            },
            {
              "id": 101210,
              "name": "Ostatní elektro výrobky",
              "seoUrl": "ostatni-elektro-vyrobky"
            }
          ],
          "startingTime": "2025-06-30T21:05:00.233+02:00",
          "endingTime": "2025-07-07T21:05:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 2,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 65,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1746206598411/thumbnail/smartmi-v2-smart-bidetove-prkenko-vyhrivane-dalkovy-ovladac-227747607.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1746206598411/thumbnail/smartmi-v2-smart-bidetove-prkenko-vyhrivane-dalkovy-ovladac-227747607.jpeg",
          "seoUrl": "smartmi-v2-smart-bidetove-prkenko-vyhrivane-dalkovy-ovladac",
          "ppPriorityList": true,
          "ppHighlight": true,
          "ppBoldTitle": true,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 15,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092484939,
          "itemName": "3-vrstvý prémiový nerezový holicí strojek na žiletky /6ks žiletek/222",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101140,
              "name": "Holicí strojky, epilátory",
              "seoUrl": "holici-strojky-epilatory"
            },
            {
              "id": 101158,
              "name": "Holicí strojky",
              "seoUrl": "holici-strojky"
            }
          ],
          "startingTime": "2025-06-30T18:27:00.321+02:00",
          "endingTime": "2025-07-03T18:27:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "12",
              "position": 5
            },
            {
              "attributeId": 9923,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 90,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 51,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 130,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1744285930617/thumbnail/3-vrstvy-premiovy-nerezovy-holici-strojek-na-ziletky-6ks-ziletek-222-225573222.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1744285930617/thumbnail/3-vrstvy-premiovy-nerezovy-holici-strojek-na-ziletky-6ks-ziletek-222-225573222.jpeg",
          "seoUrl": "3-vrstvy-premiovy-nerezovy-holici-strojek-na-ziletky-6ks-ziletek-222",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 5,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7091905329,
          "itemName": "RUIZHI Mini USB čerpadlo 200 l/h, 1–3 W ponorné/476/",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101206,
              "name": "Ostatní elektronika",
              "seoUrl": "ostatni-elektronika"
            }
          ],
          "startingTime": "2025-06-28T19:53:00.754+02:00",
          "endingTime": "2025-07-03T19:53:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "1",
              "position": 5
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 2,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 81,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750514885740/thumbnail/ruizhi-mini-usb-cerpadlo-200-l-h-13-w-ponorne-476-232659236.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750514885740/thumbnail/ruizhi-mini-usb-cerpadlo-200-l-h-13-w-ponorne-476-232659236.jpeg",
          "seoUrl": "ruizhi-mini-usb-cerpadlo-200-l-h-13-w-ponorne-476",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 10,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7090788948,
          "itemName": "Celokovový USB Flash disk - 64 GB Kodak",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100897,
              "name": "Záznamová média",
              "seoUrl": "zaznamova-media"
            },
            {
              "id": 101197,
              "name": "Flash disky",
              "seoUrl": "pendrive-usb"
            }
          ],
          "startingTime": "2025-06-30T18:00:00.633+02:00",
          "endingTime": "2025-07-03T18:00:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 9911,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 160,
              "position": 0
            },
            {
              "attributeId": 9912,
              "attributeName": "Velikost",
              "attributeValue": "64 GB",
              "attributeValueId": 150,
              "position": 0
            },
            {
              "attributeId": 9913,
              "attributeName": "Rychlost při zápisu",
              "attributeValue": "10 - 17 MB/s",
              "attributeValueId": 40,
              "position": 0
            },
            {
              "attributeId": 9914,
              "attributeName": "Rychlost při čtení",
              "attributeValue": "24 - 30 MB/s",
              "attributeValueId": 40,
              "position": 0
            },
            {
              "attributeId": 9915,
              "attributeName": "Vlastnosti",
              "attributeValue": "Oko na poutko, Voděodolné",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1728659651716/thumbnail/celokovovy-usb-flash-disk-64-gb-kodak-207264646.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1728659651716/thumbnail/celokovovy-usb-flash-disk-64-gb-kodak-207264646.jpeg",
          "seoUrl": "celokovovy-usb-flash-disk-64-gb-kodak",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "jantarsoft",
          "seller": {
            "userId": 25116744,
            "showName": "jantarsoft",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 214,
            "starType": "BRONZE",
            "aukroPlus": false,
            "favouritedByCount": 45,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 214
          },
          "userWatching": false,
          "watchersCount": 6,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Frydek-Mistek",
          "postcode": "73801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092370186,
          "itemName": "Bluetooth in-ear sluchátka, vodotěsná, HiFi stereo, mikrofon/484/",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101206,
              "name": "Ostatní elektronika",
              "seoUrl": "ostatni-elektronika"
            }
          ],
          "startingTime": "2025-06-30T19:01:00.639+02:00",
          "endingTime": "2025-07-03T19:01:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751193264458/thumbnail/bluetooth-in-ear-sluchatka-vodotesna-hifi-stereo-mikrofon-484-233291219.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751193264458/thumbnail/bluetooth-in-ear-sluchatka-vodotesna-hifi-stereo-mikrofon-484-233291219.jpeg",
          "seoUrl": "bluetooth-in-ear-sluchatka-vodotesna-hifi-stereo-mikrofon-484",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 5,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092456390,
          "itemName": "2 * elektronický transformátor Kanlux 60W",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101201,
              "name": "Elektronické součástky",
              "seoUrl": "elektrosoucastky"
            },
            {
              "id": 101256,
              "name": "Transformátory",
              "seoUrl": "transformatory"
            }
          ],
          "startingTime": "2025-06-30T11:09:00.996+02:00",
          "endingTime": "2025-07-05T11:08:02+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 29,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1749124979507/thumbnail/2-elektronicky-transformator-kanlux-60w-231125595.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1749124979507/thumbnail/2-elektronicky-transformator-kanlux-60w-231125595.jpeg",
          "seoUrl": "2-elektronicky-transformator-kanlux-60w",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "cz-autodoplnky",
          "seller": {
            "userId": 12901236,
            "showName": "cz-autodoplnky",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 35,
            "starType": "WHITE",
            "aukroPlus": false,
            "favouritedByCount": 16,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 35
          },
          "userWatching": false,
          "watchersCount": 6,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Šenov",
          "postcode": "73934",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092493614,
          "itemName": "Voděodolné rukavice se zabudovaným LED světlem/2ks(Pár)",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100899,
              "name": "Ostatní elektro",
              "seoUrl": "ostatni-elektro"
            },
            {
              "id": 101210,
              "name": "Ostatní elektro výrobky",
              "seoUrl": "ostatni-elektro-vyrobky"
            }
          ],
          "startingTime": "2025-06-30T20:15:01.024+02:00",
          "endingTime": "2025-07-07T20:15:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            }
          ],
          "price": {
            "amount": 2,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 65,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1741626503425/thumbnail/vodeodolne-rukavice-se-zabudovanym-led-svetlem-2ks-par-222232464.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1741626503425/thumbnail/vodeodolne-rukavice-se-zabudovanym-led-svetlem-2ks-par-222232464.jpeg",
          "seoUrl": "vodeodolne-rukavice-se-zabudovanym-led-svetlem-2ks-par",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 7,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092510421,
          "itemName": "Pro Magsafe Power Bank 12000mAh, 22,5W rychlé nabíjení NOVÉ!záruka!",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 101208,
              "name": "Baterie a nabíječky baterií",
              "seoUrl": "baterie-a-nabijecky-baterii"
            },
            {
              "id": 256791,
              "name": "Powerbanky",
              "seoUrl": "powerbanky"
            }
          ],
          "startingTime": "2025-06-30T22:20:00.313+02:00",
          "endingTime": "2025-07-03T22:19:44+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 96,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751314734745/thumbnail/pro-magsafe-power-bank-12000mah-22-5w-rychle-nabijeni-nove-zaruka-233447195.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751314734745/thumbnail/pro-magsafe-power-bank-12000mah-22-5w-rychle-nabijeni-nove-zaruka-233447195.jpeg",
          "seoUrl": "pro-magsafe-power-bank-12000mah-22-5w-rychle-nabijeni-nove-zaruka",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "verca1990",
          "seller": {
            "userId": 12327956,
            "showName": "verca1990",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 966,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 367,
            "positiveFeedbackPercentage": 0.9753000000000001,
            "feedbackUniqueUserCount": 988
          },
          "userWatching": false,
          "watchersCount": 9,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "14300",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7091930722,
          "itemName": "Gumové sluneční clona se závitem 49mm",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101087,
              "name": "Objektivy",
              "seoUrl": "objektivy-prislusenstvi"
            },
            {
              "id": 101099,
              "name": "Sluneční clony na fotoaparáty",
              "seoUrl": "slunecni-clony-na-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-25T17:07:00.509+02:00",
          "endingTime": "2025-07-02T17:07:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 336,
              "attributeName": "Kompatibilita",
              "attributeValue": "Univerzální",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750622771505/thumbnail/gumove-slunecni-clona-se-zavitem-49mm-232767379.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750622771505/thumbnail/gumove-slunecni-clona-se-zavitem-49mm-232767379.jpeg",
          "seoUrl": "gumove-slunecni-clona-se-zavitem-49mm",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 5,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092210288,
          "itemName": "Balení 4 ks černých hlavic Philips Sonicare Premium Gum Care",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101146,
              "name": "Elektrické zubní kartáčky a sprchy",
              "seoUrl": "pece-o-zuby"
            },
            {
              "id": 101165,
              "name": "Elektrické zubní kartáčky pro dospělé",
              "seoUrl": "elektricke-zubni-kartacky"
            }
          ],
          "startingTime": "2025-06-26T20:28:01.218+02:00",
          "endingTime": "2025-07-03T20:28:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 161,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 224,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1735837087773/thumbnail/baleni-4-ks-cernych-hlavic-philips-sonicare-premium-gum-care-214980512.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1735837087773/thumbnail/baleni-4-ks-cernych-hlavic-philips-sonicare-premium-gum-care-214980512.jpeg",
          "seoUrl": "baleni-4-ks-cernych-hlavic-philips-sonicare-premium-gum-care",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 4,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 23,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092502340,
          "itemName": "OD 1Kč!Dron E88 Pro 4K Bílý / Dualní kamera NOVÝ BOHATÉ Příslušenství!",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 251673,
              "name": "Drony",
              "seoUrl": "rc-modely-drony"
            },
            {
              "id": 256915,
              "name": "Mini drony",
              "seoUrl": "mini-drony"
            }
          ],
          "startingTime": "2025-06-30T21:06:01.417+02:00",
          "endingTime": "2025-07-07T21:05:02+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 616,
              "attributeName": "Funkce",
              "attributeValue": "Auto návrat",
              "attributeValueId": 6,
              "position": -1
            },
            {
              "attributeId": 617,
              "attributeName": "Maximální doba letu",
              "attributeValue": "10 min. a méně",
              "attributeValueId": 1,
              "position": 1
            },
            {
              "attributeId": 619,
              "attributeName": "Maximální rozlišení",
              "attributeValue": "4K (4096×2160)",
              "attributeValueId": 2,
              "position": 0
            }
          ],
          "price": {
            "amount": 5,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 5,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1718455561573/thumbnail/od-1kc-dron-e88-pro-4k-bily-dualni-kamera-novy-bohate-prislusenstvi-198049319.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1718455561573/thumbnail/od-1kc-dron-e88-pro-4k-bily-dualni-kamera-novy-bohate-prislusenstvi-198049319.jpeg",
          "seoUrl": "od-1kc-dron-e88-pro-4k-bily-dualni-kamera-novy-bohate-prislusenstvi",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 3,
          "itemState": "ACTIVE",
          "sellerLogin": "Tongu",
          "seller": {
            "userId": 40082189,
            "showName": "Tongu",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 955,
            "starType": "SILVER",
            "aukroPlus": false,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/40082189/medium/b9792e31-3180-4120-b225-f9aca164bb44.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/40082189/large/b9792e31-3180-4120-b225-f9aca164bb44.jpg",
            "favouritedByCount": 363,
            "positiveFeedbackPercentage": 0.9751000000000001,
            "feedbackUniqueUserCount": 979
          },
          "userWatching": false,
          "watchersCount": 12,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "12000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092497330,
          "itemName": "Sainlogic Bezdrátová meteorologická stanice s čidlem 5v1 NOVÉ!ZÁRUKA!",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100892,
              "name": "Malé elektrospotřebiče",
              "seoUrl": "male-elektrospotrebice"
            },
            {
              "id": 100932,
              "name": "Meteostanice",
              "seoUrl": "meteostanice"
            }
          ],
          "startingTime": "2025-06-30T20:16:00.428+02:00",
          "endingTime": "2025-07-03T20:15:53+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 10360,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 100,
              "position": 0
            }
          ],
          "price": {
            "amount": 66,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 161,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751307272558/thumbnail/sainlogic-bezdratova-meteorologicka-stanice-s-cidlem-5v1-nove-zaruka-233434612.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751307272558/thumbnail/sainlogic-bezdratova-meteorologicka-stanice-s-cidlem-5v1-nove-zaruka-233434612.jpeg",
          "seoUrl": "sainlogic-bezdratova-meteorologicka-stanice-s-cidlem-5v1-nove-zaruka",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 3,
          "itemState": "ACTIVE",
          "sellerLogin": "verca1990",
          "seller": {
            "userId": 12327956,
            "showName": "verca1990",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 966,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 367,
            "positiveFeedbackPercentage": 0.9753000000000001,
            "feedbackUniqueUserCount": 988
          },
          "userWatching": false,
          "watchersCount": 32,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "14300",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092215551,
          "itemName": "Fotoaparát Yashica ME 1",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101077,
              "name": "Klasické fotoaparáty",
              "seoUrl": "klasicke-fotoaparaty"
            },
            {
              "id": 101082,
              "name": "Klasické kompaktní fotoaparáty",
              "seoUrl": "klasicke-kompaktni-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-30T17:37:00.298+02:00",
          "endingTime": "2025-07-07T17:37:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 212,
              "attributeName": "Funkce",
              "attributeValue": "Stativový závit",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 214,
              "attributeName": "Typ objektivu",
              "attributeValue": "Pevné ohnisko",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 9785,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 130,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750962936130/thumbnail/fotoaparat-yashica-me-1-233121890.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750962936130/thumbnail/fotoaparat-yashica-me-1-233121890.jpeg",
          "seoUrl": "fotoaparat-yashica-me-1",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 11,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092508159,
          "itemName": "BALDR Bezdrátová meteorologická stanice a venkovní senzor NOVÉZÁRUKA!",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100892,
              "name": "Malé elektrospotřebiče",
              "seoUrl": "male-elektrospotrebice"
            },
            {
              "id": 100932,
              "name": "Meteostanice",
              "seoUrl": "meteostanice"
            }
          ],
          "startingTime": "2025-06-30T21:52:00.413+02:00",
          "endingTime": "2025-07-03T21:51:58+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 10360,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 100,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 96,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751313075217/thumbnail/baldr-bezdratova-meteorologicka-stanice-a-venkovni-senzor-novezaruka-233445019.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751313075217/thumbnail/baldr-bezdratova-meteorologicka-stanice-a-venkovni-senzor-novezaruka-233445019.jpeg",
          "seoUrl": "baldr-bezdratova-meteorologicka-stanice-a-venkovni-senzor-novezaruka",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "verca1990",
          "seller": {
            "userId": 12327956,
            "showName": "verca1990",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 966,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 367,
            "positiveFeedbackPercentage": 0.9753000000000001,
            "feedbackUniqueUserCount": 988
          },
          "userWatching": false,
          "watchersCount": 25,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "14300",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092329322,
          "itemName": "Kompaktní fotoaparát Nikon Nuvis 200 plně funkční",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101077,
              "name": "Klasické fotoaparáty",
              "seoUrl": "klasicke-fotoaparaty"
            },
            {
              "id": 101082,
              "name": "Klasické kompaktní fotoaparáty",
              "seoUrl": "klasicke-kompaktni-fotoaparaty"
            }
          ],
          "startingTime": "2025-07-01T17:05:00.37+02:00",
          "endingTime": "2025-07-08T17:05:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 212,
              "attributeName": "Funkce",
              "attributeValue": "Vestavěný blesk",
              "attributeValueId": 4,
              "position": 0
            },
            {
              "attributeId": 214,
              "attributeName": "Typ objektivu",
              "attributeValue": "Zoom",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 9785,
              "attributeName": "Značka",
              "attributeValue": "Nikon",
              "attributeValueId": 80,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751133830893/thumbnail/kompaktni-fotoaparat-nikon-nuvis-200-plne-funkcni-233250819.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751133830893/thumbnail/kompaktni-fotoaparat-nikon-nuvis-200-plne-funkcni-233250819.jpeg",
          "seoUrl": "kompaktni-fotoaparat-nikon-nuvis-200-plne-funkcni",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 1,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092456400,
          "itemName": "Skládací ventilátor 102 cm /4 rychlosti, baterie 7200 mAh ",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100896,
              "name": "Vzduchotechnika, topení",
              "seoUrl": "vzduchotechnika-topeni"
            },
            {
              "id": 256888,
              "name": "Chlazení",
              "seoUrl": "chlazeni"
            },
            {
              "id": 101183,
              "name": "Ventilátory",
              "seoUrl": "domaci-ventilatory"
            }
          ],
          "startingTime": "2025-06-30T21:08:00.668+02:00",
          "endingTime": "2025-07-05T21:08:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 150,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 231,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751274502401/thumbnail/skladaci-ventilator-102-cm-4-rychlosti-baterie-7200-mah-233384674.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751274502401/thumbnail/skladaci-ventilator-102-cm-4-rychlosti-baterie-7200-mah-233384674.jpeg",
          "seoUrl": "skladaci-ventilator-102-cm-4-rychlosti-baterie-7200-mah",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 5,
          "itemState": "ACTIVE",
          "sellerLogin": "Tom80",
          "seller": {
            "userId": 100600524,
            "showName": "Tom80",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3760,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1625,
            "positiveFeedbackPercentage": 0.996,
            "feedbackUniqueUserCount": 3772
          },
          "userWatching": false,
          "watchersCount": 14,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "15800",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092147115,
          "itemName": "2xnabíjecí baterie 18650/9900mah 3,7V/Včetně nabíječky",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 101208,
              "name": "Baterie a nabíječky baterií",
              "seoUrl": "baterie-a-nabijecky-baterii"
            },
            {
              "id": 101212,
              "name": "Nabíječky baterií",
              "seoUrl": "nabijecky-baterii"
            }
          ],
          "startingTime": "2025-06-25T20:05:01.556+02:00",
          "endingTime": "2025-07-02T20:05:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 60,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 123,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1729614042661/thumbnail/2xnabijeci-baterie-18650-9900mah-3-7v-vcetne-nabijecky-208274391.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1729614042661/thumbnail/2xnabijeci-baterie-18650-9900mah-3-7v-vcetne-nabijecky-208274391.jpeg",
          "seoUrl": "2xnabijeci-baterie-18650-9900mah-3-7v-vcetne-nabijecky",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 4,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 14,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092483485,
          "itemName": "Tyčový vysavač Siguro VT‑K900B Turbo Vac Star (BLDC) – vysavač 2 v 1 ",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100892,
              "name": "Malé elektrospotřebiče",
              "seoUrl": "male-elektrospotrebice"
            },
            {
              "id": 256876,
              "name": "Vysavače, mopy a čističe",
              "seoUrl": "vysavace-mopy-cistice"
            },
            {
              "id": 100930,
              "name": "Vysavače",
              "seoUrl": "vysavace"
            }
          ],
          "startingTime": "2025-06-30T20:00:00.522+02:00",
          "endingTime": "2025-07-10T20:00:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Zánovní",
              "attributeValueId": 6,
              "position": 0
            },
            {
              "attributeId": 10346,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 160,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 90,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1749837423200/thumbnail/tycovy-vysavac-sigurovtk900b-turbovacstar-bldc-vysavac-2v1-231966523.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1749837423200/thumbnail/tycovy-vysavac-sigurovtk900b-turbovacstar-bldc-vysavac-2v1-231966523.jpeg",
          "seoUrl": "tycovy-vysavac-sigurovtk900b-turbovacstar-bldc-vysavac-2v1",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "lukasveinar",
          "seller": {
            "userId": 36499208,
            "showName": "lukasveinar",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 76,
            "starType": "BRONZE",
            "aukroPlus": false,
            "favouritedByCount": 17,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 76
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Praha 9",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7091985427,
          "itemName": "Krabicový Fotoaparát Kodak Six 20 Brownie E",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101078,
              "name": "Historické fotoaparáty",
              "seoUrl": "historicke-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-27T17:23:00.376+02:00",
          "endingTime": "2025-07-04T17:23:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 211,
              "attributeName": "Značka",
              "attributeValue": "Kodak",
              "attributeValueId": 9,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 212,
              "attributeName": "Funkce",
              "attributeValue": "Stativový závit",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 214,
              "attributeName": "Typ objektivu",
              "attributeValue": "Pevné ohnisko",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750692096973/thumbnail/krabicovy-fotoaparat-kodak-six-20-brownie-e-232834034.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750692096973/thumbnail/krabicovy-fotoaparat-kodak-six-20-brownie-e-232834034.jpeg",
          "seoUrl": "krabicovy-fotoaparat-kodak-six-20-brownie-e",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 9,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092016463,
          "itemName": "Vitafit digitální kuchyňská váha 15 kg, černá, přesnost 1 g/356/",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101142,
              "name": "Osobní váhy",
              "seoUrl": "osobni-vahy"
            }
          ],
          "startingTime": "2025-06-28T19:47:00.639+02:00",
          "endingTime": "2025-07-03T19:47:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 370,
              "attributeName": "Materiál desky",
              "attributeValue": "Sklo",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 371,
              "attributeName": "Typ váhy",
              "attributeValue": "Digitální",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750625420406/thumbnail/vitafit-digitalni-kuchynska-vaha-15-kg-cerna-presnost-1-g-356-232771490.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750625420406/thumbnail/vitafit-digitalni-kuchynska-vaha-15-kg-cerna-presnost-1-g-356-232771490.jpeg",
          "seoUrl": "vitafit-digitalni-kuchynska-vaha-15-kg-cerna-presnost-1-g-356",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7089819284,
          "itemName": "Bezdrátová Bluetooth sluchátka Drsaec I52/ černá /Bluetooth 5.3 |001|",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100988,
              "name": "Sluchátka, mikrofony",
              "seoUrl": "sluchatka-mikrofony"
            },
            {
              "id": 256901,
              "name": "Bezdrátová sluchátka",
              "seoUrl": "bezdratova-sluchatka"
            }
          ],
          "startingTime": "2025-06-29T19:58:01.801+02:00",
          "endingTime": "2025-07-02T19:58:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "12",
              "position": 5
            },
            {
              "attributeId": 10483,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 200,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 18152,
              "attributeName": "Kód zboží",
              "attributeValue": "CVT09910",
              "position": 6
            },
            {
              "attributeId": 602,
              "attributeName": "EAN",
              "attributeValue": "3333300325014",
              "position": 8
            }
          ],
          "price": {
            "amount": 29,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 114,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1748265759616/thumbnail/bezdratova-bluetooth-sluchatka-drsaec-i52-cerna-bluetooth-5-3-001-230131221.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1748265759616/thumbnail/bezdratova-bluetooth-sluchatka-drsaec-i52-cerna-bluetooth-5-3-001-230131221.jpeg",
          "seoUrl": "bezdratova-bluetooth-sluchatka-drsaec-i52-cerna-bluetooth-5-3-001",
          "ppPriorityList": true,
          "ppHighlight": true,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "citydonna",
          "seller": {
            "userId": 12149456,
            "showName": "citydonna",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 11875,
            "starType": "GOLD",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/12149456/medium/10d396eb-d133-47c2-8301-baf8a267f1fe.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/12149456/large/10d396eb-d133-47c2-8301-baf8a267f1fe.jpg",
            "favouritedByCount": 6273,
            "positiveFeedbackPercentage": 0.9998999999999999,
            "feedbackUniqueUserCount": 11874
          },
          "userWatching": false,
          "watchersCount": 11,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha 2",
          "postcode": "12000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7090404759,
          "itemName": "PHILIPS OneBlade Pro QP6504/15",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101145,
              "name": "Zastřihovače",
              "seoUrl": "zastrihovace"
            },
            {
              "id": 101162,
              "name": "Zastřihovače vousů",
              "seoUrl": "zastrihovace-vousu"
            }
          ],
          "startingTime": "2025-06-29T19:20:01.417+02:00",
          "endingTime": "2025-07-06T19:20:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            }
          ],
          "price": {
            "amount": 220,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 285,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1748893090099/thumbnail/philips-oneblade-pro-qp6504-15-230880022.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1748893090099/thumbnail/philips-oneblade-pro-qp6504-15-230880022.jpeg",
          "seoUrl": "philips-oneblade-pro-qp6504-15",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 7,
          "itemState": "ACTIVE",
          "sellerLogin": "JMservis",
          "seller": {
            "userId": 6566890,
            "showName": "JMservis",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 10207,
            "starType": "GOLD",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/6566890/medium/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/6566890/large/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "favouritedByCount": 1165,
            "positiveFeedbackPercentage": 0.9974,
            "feedbackUniqueUserCount": 10219
          },
          "userWatching": false,
          "watchersCount": 27,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Sezimovo Ústí",
          "postcode": "39102",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092486467,
          "itemName": "Skládací solární panel monokrystalický 80W + příslušenství ",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101206,
              "name": "Ostatní elektronika",
              "seoUrl": "ostatni-elektronika"
            }
          ],
          "startingTime": "2025-06-30T21:31:00.593+02:00",
          "endingTime": "2025-07-03T21:31:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 499,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 580,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1743620358490/thumbnail/skladaci-solarni-panel-monokrystalicky-80w-prislusenstvi-224750609.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1743620358490/thumbnail/skladaci-solarni-panel-monokrystalicky-80w-prislusenstvi-224750609.jpeg",
          "seoUrl": "skladaci-solarni-panel-monokrystalicky-80w-prislusenstvi",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 6,
          "itemState": "ACTIVE",
          "sellerLogin": "Tom80",
          "seller": {
            "userId": 100600524,
            "showName": "Tom80",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3760,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1625,
            "positiveFeedbackPercentage": 0.996,
            "feedbackUniqueUserCount": 3772
          },
          "userWatching": false,
          "watchersCount": 26,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "15800",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092456171,
          "itemName": "**ŠIKOVNÝ VYSAVAČ POPELA FIELDMANN FDU 200601 -VELMI VÝHODNÁ KOUPĚ**",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100892,
              "name": "Malé elektrospotřebiče",
              "seoUrl": "male-elektrospotrebice"
            },
            {
              "id": 256876,
              "name": "Vysavače, mopy a čističe",
              "seoUrl": "vysavace-mopy-cistice"
            },
            {
              "id": 100930,
              "name": "Vysavače",
              "seoUrl": "vysavace"
            }
          ],
          "startingTime": "2025-06-30T21:30:00.428+02:00",
          "endingTime": "2025-07-07T21:30:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 10352,
              "attributeName": "Vlastnosti",
              "attributeValue": "Bezsáčkové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 10346,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 160,
              "position": 0
            },
            {
              "attributeId": 10347,
              "attributeName": "Typ vysavače",
              "attributeValue": "Průmyslové",
              "attributeValueId": 16,
              "position": 0
            },
            {
              "attributeId": 10348,
              "attributeName": "Hlučnost",
              "attributeValue": "80 - 82 dB",
              "attributeValueId": 30,
              "position": 0
            },
            {
              "attributeId": 10349,
              "attributeName": "Délka přívodového kabelu",
              "attributeValue": "5 m a méně",
              "attributeValueId": 10,
              "position": 0
            },
            {
              "attributeId": 10350,
              "attributeName": "Hmotnost",
              "attributeValue": "5 kg a méně",
              "attributeValueId": 10,
              "position": 0
            }
          ],
          "price": {
            "amount": 340,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 480,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1747059222959/thumbnail/sikovny-vysavac-popela-fieldmann-fdu-200601-velmi-vyhodna-koupe-228744375.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1747059222959/thumbnail/sikovny-vysavac-popela-fieldmann-fdu-200601-velmi-vyhodna-koupe-228744375.jpeg",
          "seoUrl": "sikovny-vysavac-popela-fieldmann-fdu-200601-velmi-vyhodna-koupe",
          "ppPriorityList": true,
          "ppHighlight": true,
          "ppBoldTitle": true,
          "buyersCountRelative": 4,
          "itemState": "ACTIVE",
          "sellerLogin": "Polux",
          "seller": {
            "userId": 100978461,
            "showName": "Polux",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 626,
            "starType": "SILVER",
            "aukroPlus": false,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/100978461/medium/154ff73a-cdb5-4881-b5d0-798412026d1b.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/100978461/large/154ff73a-cdb5-4881-b5d0-798412026d1b.jpg",
            "favouritedByCount": 485,
            "positiveFeedbackPercentage": 0.9984000000000001,
            "feedbackUniqueUserCount": 627
          },
          "userWatching": false,
          "watchersCount": 12,
          "pepperLevel": 1,
          "personalPickup": true,
          "location": "Kladno",
          "postcode": "27201",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092210735,
          "itemName": "Kulmofén PHILIPS BHA301/00",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101138,
              "name": "Péče o vlasy",
              "seoUrl": "vysousece-vlasu-kulmy"
            },
            {
              "id": 101155,
              "name": "Kulmofény",
              "seoUrl": "kulmofeny"
            }
          ],
          "startingTime": "2025-06-26T19:30:02.632+02:00",
          "endingTime": "2025-07-03T19:29:03+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 9916,
              "attributeName": "Značka",
              "attributeValue": "Philips",
              "attributeValueId": 60,
              "position": 0
            },
            {
              "attributeId": 9917,
              "attributeName": "Vlastnosti",
              "attributeValue": "Ionizace",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 213,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 278,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1746388081301/thumbnail/kulmofen-philips-bha301-00-227939904.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1746388081301/thumbnail/kulmofen-philips-bha301-00-227939904.jpeg",
          "seoUrl": "kulmofen-philips-bha301-00",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "JMservis",
          "seller": {
            "userId": 6566890,
            "showName": "JMservis",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 10207,
            "starType": "GOLD",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/6566890/medium/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/6566890/large/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "favouritedByCount": 1165,
            "positiveFeedbackPercentage": 0.9974,
            "feedbackUniqueUserCount": 10219
          },
          "userWatching": false,
          "watchersCount": 13,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Sezimovo Ústí",
          "postcode": "39102",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7091933738,
          "itemName": "Sirius auto teleconvertor 2x pro PB",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101087,
              "name": "Objektivy",
              "seoUrl": "objektivy-prislusenstvi"
            },
            {
              "id": 101124,
              "name": "Předsádky, redukce a telekonvertory",
              "seoUrl": "foto-redukce"
            }
          ],
          "startingTime": "2025-06-25T17:33:00.811+02:00",
          "endingTime": "2025-07-02T17:33:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750624379037/thumbnail/sirius-auto-teleconvertor-2x-pro-pb-232770271.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750624379037/thumbnail/sirius-auto-teleconvertor-2x-pro-pb-232770271.jpeg",
          "seoUrl": "sirius-auto-teleconvertor-2x-pro-pb",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092371353,
          "itemName": "Tester Baterií BT-168  / od koruny // 222",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101202,
              "name": "Měřicí přístroje",
              "seoUrl": "merici-pristroje"
            }
          ],
          "startingTime": "2025-06-29T19:38:01.418+02:00",
          "endingTime": "2025-07-02T19:38:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "12",
              "position": 5
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            },
            {
              "attributeId": 362,
              "attributeName": "Druh měřícího přístroje",
              "attributeValue": "Ostatní",
              "attributeValueId": 7,
              "position": 0
            }
          ],
          "price": {
            "amount": 42,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 121,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1732541098757/thumbnail/tester-baterii-bt-168-od-koruny-222-211672453.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1732541098757/thumbnail/tester-baterii-bt-168-od-koruny-222-211672453.jpeg",
          "seoUrl": "tester-baterii-bt-168-od-koruny-222",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 10,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092140714,
          "itemName": "Tonor K3/přenosný karaoke stroj s 2 mikrofony/Barva světle modrá",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100989,
              "name": "Ostatní TV, audio, video",
              "seoUrl": "ostatni-tv-audio-video"
            }
          ],
          "startingTime": "2025-06-25T20:53:01.068+02:00",
          "endingTime": "2025-07-02T20:53:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750866722139/thumbnail/tonor-k3-prenosny-karaoke-stroj-s-2-mikrofony-barva-svetle-modra-233031847.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750866722139/thumbnail/tonor-k3-prenosny-karaoke-stroj-s-2-mikrofony-barva-svetle-modra-233031847.jpeg",
          "seoUrl": "tonor-k3-prenosny-karaoke-stroj-s-2-mikrofony-barva-svetle-modra",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 19,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092557598,
          "itemName": "2Din LCD autorádio pro auta Opel / BT/GPS/CD/DVD / od koruny/ 111",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100986,
              "name": "Autorádia, příslušenství",
              "seoUrl": "autoradia-prislusenstvi"
            },
            {
              "id": 101047,
              "name": "Autorádia",
              "seoUrl": "autoradia"
            }
          ],
          "startingTime": "2025-07-01T19:59:01.027+02:00",
          "endingTime": "2025-07-06T19:59:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 130547,
              "attributeName": "Doba záruky (měsíců)",
              "attributeValue": "12",
              "position": 5
            },
            {
              "attributeId": 9747,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 160,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 80,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750258898052/thumbnail/2din-lcd-autoradio-pro-auta-opel-bt-gps-cd-dvd-od-koruny-111-232382538.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750258898052/thumbnail/2din-lcd-autoradio-pro-auta-opel-bt-gps-cd-dvd-od-koruny-111-232382538.jpeg",
          "seoUrl": "2din-lcd-autoradio-pro-auta-opel-bt-gps-cd-dvd-od-koruny-111",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 1,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092489530,
          "itemName": "Solární Micro Inverter WVC-600",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101206,
              "name": "Ostatní elektronika",
              "seoUrl": "ostatni-elektronika"
            }
          ],
          "startingTime": "2025-06-30T20:40:00.204+02:00",
          "endingTime": "2025-07-07T20:40:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 4,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 67,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751302514965/thumbnail/solarni-micro-inverter-wvc-600-233425051.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751302514965/thumbnail/solarni-micro-inverter-wvc-600-233425051.jpeg",
          "seoUrl": "solarni-micro-inverter-wvc-600",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 3,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 14,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092457374,
          "itemName": "**KOMFORTNÍ VYHŘÍVANÁ DEKA SENCOR SUB 181BL  - VELMI VÝHODNÁ KOUPĚ**",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101147,
              "name": "Elektrické dečky",
              "seoUrl": "elektricke-decky"
            }
          ],
          "startingTime": "2025-06-30T21:30:00.722+02:00",
          "endingTime": "2025-07-07T21:30:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 365,
              "attributeName": "Druh",
              "attributeValue": "Deky",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 2,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 142,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1743408474978/thumbnail/komfortni-vyhrivana-deka-sencor-sub-181bl-velmi-vyhodna-koupe-224441465.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1743408474978/thumbnail/komfortni-vyhrivana-deka-sencor-sub-181bl-velmi-vyhodna-koupe-224441465.jpeg",
          "seoUrl": "komfortni-vyhrivana-deka-sencor-sub-181bl-velmi-vyhodna-koupe",
          "ppPriorityList": true,
          "ppHighlight": true,
          "ppBoldTitle": true,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "Polux",
          "seller": {
            "userId": 100978461,
            "showName": "Polux",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 626,
            "starType": "SILVER",
            "aukroPlus": false,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/100978461/medium/154ff73a-cdb5-4881-b5d0-798412026d1b.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/100978461/large/154ff73a-cdb5-4881-b5d0-798412026d1b.jpg",
            "favouritedByCount": 485,
            "positiveFeedbackPercentage": 0.9984000000000001,
            "feedbackUniqueUserCount": 627
          },
          "userWatching": false,
          "watchersCount": 9,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Kladno",
          "postcode": "27201",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092147467,
          "itemName": "Generátor Vodíkové vody/lahev 420ML/Kompaktní/Nová",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100899,
              "name": "Ostatní elektro",
              "seoUrl": "ostatni-elektro"
            },
            {
              "id": 101210,
              "name": "Ostatní elektro výrobky",
              "seoUrl": "ostatni-elektro-vyrobky"
            }
          ],
          "startingTime": "2025-06-25T20:48:00.579+02:00",
          "endingTime": "2025-07-02T20:48:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 205,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 268,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1745518789414/thumbnail/generator-vodikove-vody-lahev-420ml-kompaktni-nova-226964641.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1745518789414/thumbnail/generator-vodikove-vody-lahev-420ml-kompaktni-nova-226964641.jpeg",
          "seoUrl": "generator-vodikove-vody-lahev-420ml-kompaktni-nova",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 6,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 24,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092147243,
          "itemName": "2xBalení/2xBaterie 3,7V 2000mAh baterie 1S SM Plug pro RC Auto",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 101208,
              "name": "Baterie a nabíječky baterií",
              "seoUrl": "baterie-a-nabijecky-baterii"
            },
            {
              "id": 101211,
              "name": "Baterie",
              "seoUrl": "baterie"
            }
          ],
          "startingTime": "2025-06-25T20:20:01.913+02:00",
          "endingTime": "2025-07-02T20:20:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 3,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 66,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1738691669934/thumbnail/2xbaleni-2xbaterie-3-7v-2000mah-baterie-1s-sm-plug-pro-rc-auto-218468871.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1738691669934/thumbnail/2xbaleni-2xbaterie-3-7v-2000mah-baterie-1s-sm-plug-pro-rc-auto-218468871.jpeg",
          "seoUrl": "2xbaleni-2xbaterie-3-7v-2000mah-baterie-1s-sm-plug-pro-rc-auto",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 10,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092506485,
          "itemName": "AYCLIF 10 000 mAh, magnetická bezdrátová powerbanka NOVÉzáruka!",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 101208,
              "name": "Baterie a nabíječky baterií",
              "seoUrl": "baterie-a-nabijecky-baterii"
            },
            {
              "id": 256791,
              "name": "Powerbanky",
              "seoUrl": "powerbanky"
            }
          ],
          "startingTime": "2025-06-30T21:41:00.462+02:00",
          "endingTime": "2025-07-03T21:40:11+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 201,
              "attributeName": "Počet výstupů",
              "attributeValue": "4 a více",
              "attributeValueId": 4,
              "position": 0
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 96,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751312371389/thumbnail/ayclif-10-000-mah-magneticka-bezdratova-powerbanka-novezaruka-233443860.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751312371389/thumbnail/ayclif-10-000-mah-magneticka-bezdratova-powerbanka-novezaruka-233443860.jpeg",
          "seoUrl": "ayclif-10-000-mah-magneticka-bezdratova-powerbanka-novezaruka",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "verca1990",
          "seller": {
            "userId": 12327956,
            "showName": "verca1990",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 966,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 367,
            "positiveFeedbackPercentage": 0.9753000000000001,
            "feedbackUniqueUserCount": 988
          },
          "userWatching": false,
          "watchersCount": 4,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "14300",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092123360,
          "itemName": "Historické Autorádio",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100986,
              "name": "Autorádia, příslušenství",
              "seoUrl": "autoradia-prislusenstvi"
            },
            {
              "id": 101047,
              "name": "Autorádia",
              "seoUrl": "autoradia"
            }
          ],
          "startingTime": "2025-06-25T19:38:01.45+02:00",
          "endingTime": "2025-07-02T19:38:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 9747,
              "attributeName": "Značka",
              "attributeValue": "Ostatní",
              "attributeValueId": 160,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750851368542/thumbnail/historicke-autoradio-233011054.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750851368542/thumbnail/historicke-autoradio-233011054.jpeg",
          "seoUrl": "historicke-autoradio",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "meggie90",
          "seller": {
            "userId": 24996621,
            "showName": "meggie90",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 169,
            "starType": "BRONZE",
            "aukroPlus": false,
            "favouritedByCount": 21,
            "positiveFeedbackPercentage": 0.9884000000000001,
            "feedbackUniqueUserCount": 170
          },
          "userWatching": false,
          "watchersCount": 3,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Albrechtice",
          "postcode": "73543",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7091984005,
          "itemName": "Krásný krabicový fotoaparát Kodak brownie six 20 camera model D",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101078,
              "name": "Historické fotoaparáty",
              "seoUrl": "historicke-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-27T17:09:00.225+02:00",
          "endingTime": "2025-07-04T17:09:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 211,
              "attributeName": "Značka",
              "attributeValue": "Kodak",
              "attributeValueId": 9,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            },
            {
              "attributeId": 212,
              "attributeName": "Funkce",
              "attributeValue": "Stativový závit",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 214,
              "attributeName": "Typ objektivu",
              "attributeValue": "Pevné ohnisko",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 138,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 201,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750691292495/thumbnail/krasny-krabicovy-fotoaparat-kodak-brownie-six-20-camera-model-d-232832024.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750691292495/thumbnail/krasny-krabicovy-fotoaparat-kodak-brownie-six-20-camera-model-d-232832024.jpeg",
          "seoUrl": "krasny-krabicovy-fotoaparat-kodak-brownie-six-20-camera-model-d",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 8,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092495068,
          "itemName": "Mulcort 3v1 Digitální multimetr s osciloskopem 50 MHz NOVÉ!záruka!",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100898,
              "name": "Elektronika",
              "seoUrl": "elektronika"
            },
            {
              "id": 101202,
              "name": "Měřicí přístroje",
              "seoUrl": "merici-pristroje"
            }
          ],
          "startingTime": "2025-06-30T19:52:00.374+02:00",
          "endingTime": "2025-07-03T19:51:03+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            },
            {
              "attributeId": 362,
              "attributeName": "Druh měřícího přístroje",
              "attributeValue": "Osciloskopy",
              "attributeValueId": 2,
              "position": 0
            }
          ],
          "price": {
            "amount": 1252,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 1347,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751305828332/thumbnail/mulcort-3v1-digitalni-multimetr-s-osciloskopem-50-mhz-nove-zaruka-233431601.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751305828332/thumbnail/mulcort-3v1-digitalni-multimetr-s-osciloskopem-50-mhz-nove-zaruka-233431601.jpeg",
          "seoUrl": "mulcort-3v1-digitalni-multimetr-s-osciloskopem-50-mhz-nove-zaruka",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 5,
          "itemState": "ACTIVE",
          "sellerLogin": "verca1990",
          "seller": {
            "userId": 12327956,
            "showName": "verca1990",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 966,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 367,
            "positiveFeedbackPercentage": 0.9753000000000001,
            "feedbackUniqueUserCount": 988
          },
          "userWatching": false,
          "watchersCount": 28,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "14300",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092183234,
          "itemName": "**ŠIKOVNÉ DESIGNOVÉ TOPIDLO SENCOR SCF 2003 - VELMI VÝHODNÁ KOUPĚ**",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100896,
              "name": "Vzduchotechnika, topení",
              "seoUrl": "vzduchotechnika-topeni"
            },
            {
              "id": 256889,
              "name": "Vyhřívání",
              "seoUrl": "vyhrivani"
            },
            {
              "id": 256892,
              "name": "Topidla",
              "seoUrl": "topidla"
            }
          ],
          "startingTime": "2025-06-26T21:30:01.921+02:00",
          "endingTime": "2025-07-03T21:30:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            }
          ],
          "price": {
            "amount": 2,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 142,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750933117100/thumbnail/sikovne-designove-topidlo-sencor-scf-2003-velmi-vyhodna-koupe-233083283.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750933117100/thumbnail/sikovne-designove-topidlo-sencor-scf-2003-velmi-vyhodna-koupe-233083283.jpeg",
          "seoUrl": "sikovne-designove-topidlo-sencor-scf-2003-velmi-vyhodna-koupe",
          "ppPriorityList": true,
          "ppHighlight": true,
          "ppBoldTitle": true,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "Castor210",
          "seller": {
            "userId": 100979018,
            "showName": "Castor210",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 607,
            "starType": "SILVER",
            "aukroPlus": false,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/100979018/medium/6e1e6ebc-e91b-45f0-9e7c-98ccde49a43a.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/100979018/large/6e1e6ebc-e91b-45f0-9e7c-98ccde49a43a.jpg",
            "favouritedByCount": 498,
            "positiveFeedbackPercentage": 0.9951000000000001,
            "feedbackUniqueUserCount": 610
          },
          "userWatching": false,
          "watchersCount": 10,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Kladno",
          "postcode": "27201",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092489098,
          "itemName": "Fotoaparát YASHICA FR",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101078,
              "name": "Historické fotoaparáty",
              "seoUrl": "historicke-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-30T20:20:01.509+02:00",
          "endingTime": "2025-07-07T20:20:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            }
          ],
          "price": {
            "amount": 19,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 84,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751302095540/thumbnail/fotoaparat-yashica-fr-233424270.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751302095540/thumbnail/fotoaparat-yashica-fr-233424270.jpeg",
          "seoUrl": "fotoaparat-yashica-fr",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 3,
          "itemState": "ACTIVE",
          "sellerLogin": "aukrohela",
          "seller": {
            "userId": 15659866,
            "showName": "aukrohela",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 2388,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 570,
            "positiveFeedbackPercentage": 0.9992,
            "feedbackUniqueUserCount": 2388
          },
          "userWatching": false,
          "watchersCount": 18,
          "pepperLevel": 1,
          "personalPickup": true,
          "location": "Praha 4",
          "postcode": "14000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": false,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092239195,
          "itemName": "HD TV Anténa 4K/1080P s Výkonovým Zesilovačem – Vnitřní/Venkovní/333/",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100976,
              "name": "DVB-T a satelitní technika",
              "seoUrl": "dvb-t-technika"
            },
            {
              "id": 101010,
              "name": "Antény k TV a audio",
              "seoUrl": "anteny-k-tv-a-audio"
            }
          ],
          "startingTime": "2025-06-28T19:02:01.23+02:00",
          "endingTime": "2025-07-03T19:02:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "4-6 dní",
              "attributeValueId": 3,
              "position": 4
            }
          ],
          "price": {
            "amount": 12,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 91,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1751016100019/thumbnail/hd-tv-antena-4k-1080p-s-vykonovym-zesilovacem-vnitrni-venkovni-333-233147634.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1751016100019/thumbnail/hd-tv-antena-4k-1080p-s-vykonovym-zesilovacem-vnitrni-venkovni-333-233147634.jpeg",
          "seoUrl": "hd-tv-antena-4k-1080p-s-vykonovym-zesilovacem-vnitrni-venkovni-333",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 4,
          "itemState": "ACTIVE",
          "sellerLogin": "elektro_za_kacku",
          "seller": {
            "userId": 100952050,
            "showName": "elektro_za_kacku",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 3388,
            "starType": "GOLD",
            "aukroPlus": true,
            "favouritedByCount": 1788,
            "positiveFeedbackPercentage": 0.9979,
            "feedbackUniqueUserCount": 3392
          },
          "userWatching": false,
          "watchersCount": 16,
          "pepperLevel": 1,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "17000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092493403,
          "itemName": "Zastřihovač vlasů, vousů a tělový PHILIPS MG7920/15",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100895,
              "name": "Péče o tělo a zdraví",
              "seoUrl": "pristroje-pece-o-telo"
            },
            {
              "id": 101145,
              "name": "Zastřihovače",
              "seoUrl": "zastrihovace"
            },
            {
              "id": 101160,
              "name": "Zastřihovače vlasů",
              "seoUrl": "zastrihovace-vlasu"
            }
          ],
          "startingTime": "2025-06-30T19:36:00.559+02:00",
          "endingTime": "2025-07-07T19:35:04+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "1-2 dny",
              "attributeValueId": 1,
              "position": 4
            }
          ],
          "price": {
            "amount": 423,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 488,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1746387978176/thumbnail/zastrihovac-vlasu-vousu-a-telovy-philips-mg7920-15-227939718.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1746387978176/thumbnail/zastrihovac-vlasu-vousu-a-telovy-philips-mg7920-15-227939718.jpeg",
          "seoUrl": "zastrihovac-vlasu-vousu-a-telovy-philips-mg7920-15",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 4,
          "itemState": "ACTIVE",
          "sellerLogin": "JMservis",
          "seller": {
            "userId": 6566890,
            "showName": "JMservis",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 10207,
            "starType": "GOLD",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/6566890/medium/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/6566890/large/4a74575a-8ff6-4eb0-b9b6-11cc1882c583.jpg",
            "favouritedByCount": 1165,
            "positiveFeedbackPercentage": 0.9974,
            "feedbackUniqueUserCount": 10219
          },
          "userWatching": false,
          "watchersCount": 22,
          "pepperLevel": 0,
          "personalPickup": true,
          "location": "Sezimovo Ústí",
          "postcode": "39102",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092494233,
          "itemName": "Přenosný Bluetooth gramofon Waves/RGB/TF karta/AUX",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100893,
              "name": "TV, audio, video",
              "seoUrl": "tv-audio-video"
            },
            {
              "id": 100989,
              "name": "Ostatní TV, audio, video",
              "seoUrl": "ostatni-tv-audio-video"
            }
          ],
          "startingTime": "2025-06-30T20:43:00.164+02:00",
          "endingTime": "2025-07-07T20:43:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Rozbaleno",
              "attributeValueId": 3,
              "position": 0
            }
          ],
          "price": {
            "amount": 91,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 154,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750696630723/thumbnail/prenosny-bluetooth-gramofon-waves-rgb-tf-karta-aux-232845025.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750696630723/thumbnail/prenosny-bluetooth-gramofon-waves-rgb-tf-karta-aux-232845025.jpeg",
          "seoUrl": "prenosny-bluetooth-gramofon-waves-rgb-tf-karta-aux",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 7,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7092210736,
          "itemName": "Generátor Vodíkové vody/lahev 420ML/Kompaktní/Nová",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100899,
              "name": "Ostatní elektro",
              "seoUrl": "ostatni-elektro"
            },
            {
              "id": 101210,
              "name": "Ostatní elektro výrobky",
              "seoUrl": "ostatni-elektro-vyrobky"
            }
          ],
          "startingTime": "2025-06-26T20:42:01.292+02:00",
          "endingTime": "2025-07-03T20:42:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Nové",
              "attributeValueId": 1,
              "position": 0
            }
          ],
          "price": {
            "amount": 2,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 65,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1745518789414/thumbnail/generator-vodikove-vody-lahev-420ml-kompaktni-nova-226964641.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1745518789414/thumbnail/generator-vodikove-vody-lahev-420ml-kompaktni-nova-226964641.jpeg",
          "seoUrl": "generator-vodikove-vody-lahev-420ml-kompaktni-nova",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": true,
          "buyersCountRelative": 2,
          "itemState": "ACTIVE",
          "sellerLogin": "KlaraCsudaiova",
          "seller": {
            "userId": 24287984,
            "showName": "KlaraCsudaiova",
            "companyAccount": false,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 1078,
            "starType": "SILVER",
            "aukroPlus": false,
            "favouritedByCount": 581,
            "positiveFeedbackPercentage": 1,
            "feedbackUniqueUserCount": 1077
          },
          "userWatching": false,
          "watchersCount": 21,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Praha",
          "postcode": "19000",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": false,
          "auction": true,
          "freeShipping": false,
          "links": []
        },
        {
          "itemId": 7091983161,
          "itemName": "Krabicový Fotoaparát Kodak brownie",
          "categoryPath": [
            {
              "id": 100890,
              "name": "Elektro",
              "seoUrl": "elektro"
            },
            {
              "id": 100894,
              "name": "Foto",
              "seoUrl": "foto"
            },
            {
              "id": 101078,
              "name": "Historické fotoaparáty",
              "seoUrl": "historicke-fotoaparaty"
            }
          ],
          "startingTime": "2025-06-26T17:58:01.074+02:00",
          "endingTime": "2025-07-03T17:58:00+02:00",
          "buyNowActive": false,
          "buyNowPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "quantity": 1,
          "quantityType": "pieces",
          "attributes": [
            {
              "attributeId": 48,
              "attributeName": "Stav zboží",
              "attributeValue": "Použité",
              "attributeValueId": 2,
              "position": 0
            },
            {
              "attributeId": 211,
              "attributeName": "Značka",
              "attributeValue": "Kodak",
              "attributeValueId": 9,
              "position": 0
            },
            {
              "attributeId": 8820,
              "attributeName": "Doba dodání (od obdržení platby)",
              "attributeValue": "2-3 dny",
              "attributeValueId": 2,
              "position": 4
            }
          ],
          "price": {
            "amount": 1,
            "currency": "CZK"
          },
          "priceWithShipping": {
            "amount": 64,
            "currency": "CZK"
          },
          "titleImage": {
            "position": 0,
            "titleImage": false,
            "url": "https://cdn.aukro.cz/images/sk1750690683082/thumbnail/krabicovy-fotoaparat-kodak-brownie-232830546.jpeg"
          },
          "titleImageUrl": "https://cdn.aukro.cz/images/sk1750690683082/thumbnail/krabicovy-fotoaparat-kodak-brownie-232830546.jpeg",
          "seoUrl": "krabicovy-fotoaparat-kodak-brownie",
          "ppPriorityList": true,
          "ppHighlight": false,
          "ppBoldTitle": false,
          "buyersCountRelative": 1,
          "itemState": "ACTIVE",
          "sellerLogin": "David_Lukas",
          "seller": {
            "userId": 101144746,
            "showName": "David_Lukas",
            "companyAccount": true,
            "accountActivated": true,
            "registrationDomain": "CZ",
            "rating": 683,
            "starType": "SILVER",
            "aukroPlus": true,
            "avatarUrlMedium": "https://cdn.aukro.cz/avatar-images/101144746/medium/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "avatarUrl": "https://cdn.aukro.cz/avatar-images/101144746/large/d7184ad6-436e-4468-86d6-99a8f2d5cd4f.jpg",
            "favouritedByCount": 272,
            "positiveFeedbackPercentage": 0.9928,
            "feedbackUniqueUserCount": 688
          },
          "userWatching": false,
          "watchersCount": 7,
          "pepperLevel": 0,
          "personalPickup": false,
          "location": "Žatec",
          "postcode": "43801",
          "aukroFreePriorityList": false,
          "charity": false,
          "paymentViaAukro": true,
          "buyersProtectionAvailable": true,
          "retailPrice": {
            "amount": 0,
            "currency": "CZK"
          },
          "adultContent": false,
          "paymentOnline": false,
          "aukroPlus": true,
          "auction": true,
          "freeShipping": false,
          "links": []
        }
      ],
      "page": {
        "size": 60,
        "totalElements": 58071,
        "totalPages": 968,
        "number": 0
      }
    }

;

// definícia tvojho produktu
interface Product {
  itemName: string;
  price: {
    amount: number;
    currency: string;
  };
  buyNowActive: boolean;
  auction: boolean;
}

export default function TabThreeScreen() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Sending payload to proxy:", payload);

        const response = await fetch('http://localhost:4000/aukro-proxy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        console.log("Raw Response:", response);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`HTTP error! Status: ${response.status}`);
          console.error('Response text:', errorText);
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let json;
        try {
          json = await response.json();
        } catch (e) {
          console.error("Failed to parse JSON:", e);
          throw e;
        }

        console.log("JSON from proxy:", json);

        const itemsRaw = json.content || [];
        console.log("Items Raw:", itemsRaw);

        const items: Product[] = itemsRaw.map((item: any) => ({
          itemName: item.itemName,
          price: {
            amount: item.price?.amount ?? 0,
            currency: item.price?.currency ?? 'EUR',
          },
          buyNowActive: item.buyNowActive ?? false,
          auction: item.auction ?? false,
        }));

        console.log("PARSED PRODUCTS:", items);

        setProducts(items);
      } catch (error) {
        console.error("FETCH ERROR:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Tab Lubomir Postman</Text>
        <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
        />

        {products.length > 0 ? (
            products.map((product, index) => (
                <View key={index} style={styles.productBox}>
                  <Text style={styles.productTitle}>{product.itemName}</Text>
                  <Text>
                    Price: {product.price.amount} {product.price.currency}
                  </Text>
                  <Text>
                    Type:{' '}
                    {product.buyNowActive
                        ? 'Buy Now'
                        : product.auction
                            ? 'Auction'
                            : 'Unknown'}
                  </Text>
                </View>
            ))
        ) : (
            <Text>No products loaded yet.</Text>
        )}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  productBox: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
