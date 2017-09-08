{
	"layers": [{
		"holdback": 0,
		"activation": {},
		"integrationSettings": {},
		"integrationStringVersion": 2,
		"viewIds": ["8377623485"],
		"experiments": [{
			"weightDistributions": [{
				"entityId": "8571914270",
				"endOfRange": 5000
			}, {
				"entityId": "8573975598",
				"endOfRange": 10000
			}],
			"audienceName": null,
			"name": null,
			"bucketingStrategy": null,
			"variations": [{
				"id": "8571914270",
				"actions": [{
					"viewId": "8377623485",
					"changes": []
				}],
				"name": null
			}, {
				"id": "8573975598",
				"actions": [{
					"viewId": "8377623485",
					"changes": [{
						"selector": "a.btn",
						"dependencies": [],
						"attributes": {},
						"type": "attribute",
						"id": "36458A29-A8FC-4387-88FC-8BC7CA15C4C4",
						"css": {
							"background-color": "rgba(255, 0, 0, 1)"
						}
					}, {
						"selector": ".hero__title",
						"dependencies": ["36458A29-A8FC-4387-88FC-8BC7CA15C4C4"],
						"attributes": {
							"html": "Welcome"
						},
						"type": "attribute",
						"id": "2D0D4F46-6074-407F-BBC7-4B4F7F9BB318",
						"css": {}
					}]
				}],
				"name": null
			}],
			"audienceIds": null,
			"changes": null,
			"id": "8583423784",
			"integrationSettings": null
		}],
		"id": "8577988372",
		"weightDistributions": null,
		"name": null,
		"groupId": null,
		"commitId": "8581453580",
		"decisionMetadata": null,
		"policy": "single_experiment",
		"changes": null
	}, {
		"holdback": 0,
		"activation": {},
		"integrationSettings": {},
		"integrationStringVersion": 2,
		"viewIds": ["8377623485"],
		"experiments": [{
			"weightDistributions": [{
				"entityId": "8690730579",
				"endOfRange": 5000
			}, {
				"entityId": "8667861201",
				"endOfRange": 10000
			}],
			"audienceName": null,
			"name": null,
			"bucketingStrategy": null,
			"variations": [{
				"id": "8690730579",
				"actions": [{
					"viewId": "8377623485",
					"changes": []
				}],
				"name": null
			}, {
				"id": "8667861201",
				"actions": [{
					"viewId": "8377623485",
					"changes": [{
						"selector": ".hero__title",
						"dependencies": [],
						"attributes": {
							"html": "Hello!"
						},
						"type": "attribute",
						"id": "B857BEFF-8D4F-4750-90DC-358655B0EA30",
						"css": {}
					}, {
						"selector": "a.btn",
						"dependencies": [],
						"attributes": {},
						"type": "attribute",
						"id": "A1B4D91C-1EF3-4A1D-A674-4B2F7C8EAEAE",
						"css": {
							"background-color": "rgba(255, 21, 21, 1)"
						}
					}, {
						"selector": ".hero__subtitle",
						"dependencies": [],
						"attributes": {
							"html": "Summer Deals"
						},
						"type": "attribute",
						"id": "51BD939B-9AAC-4950-875C-7095E9179F93",
						"css": {}
					}]
				}],
				"name": null
			}],
			"audienceIds": null,
			"changes": null,
			"id": "8685700870",
			"integrationSettings": null
		}],
		"id": "8632468906",
		"weightDistributions": null,
		"name": null,
		"groupId": null,
		"commitId": "8692440056",
		"decisionMetadata": null,
		"policy": "single_experiment",
		"changes": null
	}],
	"groups": [],
	"views": [{
		"category": "other",
		"staticConditions": ["and", ["or", {
			"type": "url",
			"value": "https://atticandbutton.us/",
			"match": "simple"
		}]],
		"name": null,
		"tags": [],
		"apiName": "8316902607_homepage_1",
		"id": "8377623485"
	}, {
		"category": "other",
		"staticConditions": ["and", ["or", {
			"type": "url",
			"value": "https://atticandbutton.us/collections/all",
			"match": "simple"
		}]],
		"name": null,
		"tags": [],
		"apiName": "8316902607_collections_all",
		"id": "8477600801"
	}, {
		"category": "other",
		"staticConditions": ["and", ["or", {
			"type": "url",
			"value": "https://www.uber.com/drive/",
			"match": "simple"
		}]],
		"name": null,
		"tags": [],
		"apiName": "8316902607_uber_home",
		"id": "8587174170"
	}, {
		"category": "other",
		"staticConditions": ["and", ["or", {
			"type": "url",
			"value": "amy.com",
			"match": "simple"
		}]],
		"name": null,
		"tags": [],
		"apiName": "8316902607_amy_page",
		"id": "8689350194"
	}],
	"projectId": "8316902607",
	"namespace": "8316902607",
	"listTargetingCookies": [],
	"dimensions": [],
	"audiences": [],
	"integrationSettings": [],
	"anonymizeIP": false,
	"visitorAttributes": [],
	"accountId": "2036520223",
	"events": [{
		"category": "other",
		"name": null,
		"eventType": "click",
		"viewId": "8377623485",
		"apiName": "8316902607_shop_now_click_1",
		"id": "8411821264",
		"eventFilter": {
			"filterType": "target_selector",
			"selector": "a.btn"
		}
	}, {
		"category": "other",
		"name": null,
		"eventType": "click",
		"viewId": "8377623485",
		"apiName": "8316902607_clicked_home",
		"id": "8413692135",
		"eventFilter": {
			"filterType": "target_selector",
			"selector": "li:nth-of-type(2) > a.site-nav__link"
		}
	}, {
		"category": "other",
		"name": null,
		"eventType": "click",
		"viewId": "8377623485",
		"apiName": "8316902607_clicked_cart_thing",
		"id": "8439070312",
		"eventFilter": {
			"filterType": "target_selector",
			"selector": ".site-nav__link--icon.cart-link"
		}
	}, {
		"category": "other",
		"name": null,
		"eventType": "click",
		"viewId": "8377623485",
		"apiName": "8316902607_logo_click",
		"id": "8682950618",
		"eventFilter": {
			"filterType": "target_selector",
			"selector": ".logo--inverted > img"
		}
	}],
	"revision": "108"
}