// src/data/mockShipments.js

// Données de suivi visuelles par commande
export const trackingData = {
  "AT-74291-FR": {
    brand: "Atelier Tuffery", currentStep: 3, progressWidth: "70%",
    status: { 
      fr: "Votre colis a quitté le centre de tri.", 
      en: "Your package has left the sorting center.",
      es: "Su paquete ha salido del centro de clasificación.",
      de: "Ihr Paket hat das Sortierzentrum verlassen.",
      it: "Il tuo pacco ha lasciato il centro di smistamento."
    }
  },
  "SPD-9942-X": {
    brand: "SPIDER", currentStep: 3, progressWidth: "75%",
    status: { 
      fr: "Votre colis est pris en charge par notre transporteur.", 
      en: "Your package is handled by our carrier.",
      es: "Su paquete es gestionado por notre transportista.",
      de: "Ihr Paket wird von unserem Spediteur bearbeitet.",
      it: "Il tuo pacco è stato preso in carico dal nostro corriere."
    }
  },
  "JUL-88321-FR": {
    brand: "JULES", currentStep: 2, progressWidth: "45%",
    status: { 
      fr: "Vos articles JULES sont préparés avec soin par nos équipes logistiques.", 
      en: "Your JULES items are being carefully prepared by our logistics team.",
      es: "Sus artículos JULES están siendo preparados cuidadosamente por nuestro equipo.",
      de: "Ihre JULES-Artikel werden von unserem Logistikteam sorgfältig vorbereitet.",
      it: "I tuoi articoli JULES sono preparati con cura dal nostro team logistico."
    }
  }
};

// Détails bruts de l'expédition (JSON fourni)
export const mockShipmentData = {
  "id": "recsPo5wueSCM56fT",
  "displayId": "recsPo5wueSCM56fT",
  "externalId": {
    "id": "12956746154329",
    "system": "shopify"
  },
  "brand": {
    "id": "recPaYuDWGIjQNPhn",
    "name": "La Fiancée"
  },
  "buyer": {
    "id": "user_01KT660QWFNF4B5BSFNJKQ32H9",
    "firstName": "muriel",
    "lastName": "beney",
    "email": "muriel.beney@orange.fr",
    "phoneNumber": null
  },
  "invoicingAddress": {
    "firstName": "muriel",
    "lastName": "beney",
    "company": "",
    "line1": "1792 route des sartres",
    "line2": null,
    "zip": "33220",
    "city": "FOUGUEYROLLES",
    "countryCode": "FR",
    "phone": "0687143445",
    "latitude": 44.87179,
    "longitude": 0.2100673
  },
  "status": "PAID",
  "orderLines": [
    {
      "id": "recC3Qy1SSF5Z4noV",
      "externalId": {
        "id": "37085655761241",
        "system": "shopify"
      },
      "listing": {
        "id": "listing_01K8WYM3TX3D0SGCJW6SVCYWWF",
        "name": {
          "fr": "Robe imprimée coton bio JASMINY 42 Corail"
        },
        "seller": {
          "sellerType": "CUSTOMER"
        },
        "sellerReference": null,
        "price": {
          "value": 1300,
          "currency": "eur"
        },
        "condition": "VERY_GOOD_CONDITION"
      },
      "statusHistory": {
        "PENDING": "2026-06-03T07:26:29.439Z",
        "CONFIRMED": "2026-06-09T14:57:46.682Z"
      },
      "status": "CONFIRMED",
      "commission": {
        "percentageWithTax": 0.24
      },
      "sellerPaymentMethods": [
        "COUPON"
      ],
      "creditor": {
        "type": "BRAND",
        "brand": {
          "id": "recPaYuDWGIjQNPhn",
          "name": "La Fiancée"
        }
      },
      "giftCards": [
        {
          "id": "recAwQ3gw4kkzrGGc",
          "amount": {
            "value": 1560,
            "currency": "eur"
          },
          "code": "7365390212956",
          "status": "SENT",
          "statusHistory": {
            "TO_CREATE": "2026-06-09T14:57:51.000Z",
            "TO_SEND": "2026-06-09T14:57:57.251Z",
            "SENT": "2026-06-10T02:57:11.316Z"
          }
        }
      ],
      "value": {
        "value": 1300,
        "currency": "eur"
      },
      "creditorProductsRevenue": {
        "value": 988.0000000000001,
        "currency": "eur"
      }
    }
  ],
  "giftCards": [
    {
      "id": "recAwQ3gw4kkzrGGc",
      "amount": {
        "value": 1560,
        "currency": "eur"
      },
      "code": "7365390212956",
      "status": "SENT",
      "statusHistory": {
        "TO_CREATE": "2026-06-09T14:57:51.000Z",
        "TO_SEND": "2026-06-09T14:57:57.251Z",
        "SENT": "2026-06-10T02:57:11.316Z"
      }
    }
  ],
  "shipments": [
    {
      "id": "recfquiBxqk6vmY2I",
      "externalId": {
        "id": "80471622"
      },
      "statusHistory": {
        "CREATED": "2026-06-03T07:27:03.000Z",
        "VALIDATED": "2026-06-03T07:37:21.530Z",
        "SHIPPED": "2026-06-05T07:58:19.822Z",
        "DELIVERED": "2026-06-06T11:39:10.238Z",
        "CONFIRMED": "2026-06-09T14:57:45.911Z"
      },
      "status": "CONFIRMED",
      "orderLines": [
        {
          "id": "recC3Qy1SSF5Z4noV",
          "externalId": {
            "id": "37085655761241",
            "system": "shopify"
          },
          "listing": {
            "id": "listing_01K8WYM3TX3D0SGCJW6SVCYWWF",
            "name": {
              "fr": "Robe imprimée coton bio JASMINY 42 Corail"
            },
            "seller": {
              "sellerType": "CUSTOMER"
            },
            "sellerReference": null,
            "price": {
              "value": 1300,
              "currency": "eur"
            },
            "condition": "VERY_GOOD_CONDITION"
          },
          "statusHistory": {
            "PENDING": "2026-06-03T07:26:29.439Z",
            "CONFIRMED": "2026-06-09T14:57:46.682Z"
          },
          "status": "CONFIRMED",
          "commission": {
            "percentageWithTax": 0.24
          },
          "sellerPaymentMethods": [
            "COUPON"
          ],
          "creditor": {
            "type": "BRAND",
            "brand": {
              "id": "recPaYuDWGIjQNPhn",
              "name": "La Fiancée"
            }
          },
          "giftCards": [
            {
              "id": "recAwQ3gw4kkzrGGc",
              "amount": {
                "value": 1560,
                "currency": "eur"
              },
              "code": "7365390212956",
              "status": "SENT",
              "statusHistory": {
                "TO_CREATE": "2026-06-09T14:57:51.000Z",
                "TO_SEND": "2026-06-09T14:57:57.251Z",
                "SENT": "2026-06-10T02:57:11.316Z"
              }
            }
          ],
          "value": {
            "value": 1300,
            "currency": "eur"
          },
          "creditorProductsRevenue": {
            "value": 988.0000000000001,
            "currency": "eur"
          }
        }
      ],
      "sellerType": "CUSTOMER",
      "deliveryMode": "HOME",
      "sender": {
        "id": "user_01K8V3ZMZZXPR05D768WYW2YQ7",
        "firstName": "Mathilde",
        "lastName": "Miguet",
        "email": "mathilde-miguet@wanadoo.fr",
        "phoneNumber": null
      },
      "destination": {
        "firstName": "muriel",
        "lastName": "beney",
        "company": "",
        "line1": "1792 route des sartres",
        "line2": null,
        "zip": "33220",
        "city": "FOUGUEYROLLES",
        "countryCode": "FR",
        "phone": "0687143445",
        "latitude": 44.87179,
        "longitude": 0.2100673
      },
      "origin": {
        "firstName": "Mathilde",
        "lastName": "Miguet",
        "company": null,
        "line1": "84b rue du bois hardy",
        "line2": null,
        "zip": "44100",
        "city": "nantes",
        "countryCode": "FR",
        "phone": "+33677413507",
        "latitude": null,
        "longitude": null
      },
      "carrier": {
        "code": "CHRP",
        "name": "Chronopost"
      },
      "tracking": {
        "trackingNumber": "XT260262675TS",
        "trackingUrl": "https://www.chronopost.fr/tracking-no-cms/suivi-page?listeNumerosLT=XT260262675TS",
        "isTracked": "true"
      },
      "lastUpdateDate": "2026-06-09T14:57:46.000Z",
      "expeditionSupport": {
        "type": "GENERIC_LABEL",
        "url": "https://drive.google.com/uc?id=1uwPQ94VlEFAvVPTPda0OClfnEY5BDww6&export=download"
      }
    }
  ],
  "returns": [],
  "payIns": [
    {
      "id": "payin_01KT6664NXXBH84JBMY4AW51S5",
      "createdAt": "2026-06-03T07:29:23.644Z",
      "ventilation": [
        {
          "orderLineId": "recC3Qy1SSF5Z4noV",
          "type": "MERCHANDISE",
          "amount": {
            "value": 1300,
            "currency": "eur"
          }
        },
        {
          "orderLineId": null,
          "type": "SHIPPING_FEES",
          "amount": {
            "value": 699,
            "currency": "eur"
          }
        }
      ]
    }
  ],
  "payOuts": [],
  "refunds": [],
  "creationDate": "2026-06-03T07:26:20.000Z",
  "lastUpdateDate": "2026-06-03T07:27:03.000Z",
  "value": {
    "value": 1300,
    "currency": "eur"
  },
  "anomaly": "false"
};