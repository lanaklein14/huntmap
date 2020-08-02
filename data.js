const regions = [
    {
        "Name": "漆黒エリア",
        "Class": "grey darken-2 white--text",
        "ZoneIDs": [2953, 2954, 2955, 2956, 2957, 2958]
    },
    {
        "Name": "紅蓮エリア",
        "Class": "red darken-2 white--text",
        "ZoneIDs": [2406, 2407, 2408, 2409, 2410, 2411]
    },
    {
        "Name": "蒼天エリア",
        "Class": "indigo darken-2 white--text",
        "ZoneIDs": [2200, 2100, 2002, 2000, 2001, 2101]
    },
    {
        "Name": "ラノシア",
        "Class": 'red lighten-2 black--text"',
        "ZoneIDs": [30, 31, 32, 33, 34, 350]
    },
    {
        "Name": "グリダニア",
        "Class": "yellow lighten-2 black--text",
        "ZoneIDs": [54, 55, 56, 57]
    },
    {
        "Name": "ザナラーン",
        "Class": "brown lighten-2 black--text",
        "ZoneIDs": [42, 43, 44, 45, 46]
    },
    {
        "Name": "辺境",
        "Class": "brown lighten-4 black--text",
        "ZoneIDs": [67, 63]
    }
];

const zones = [
    {
        "ID": 30,
        "Key": "Middle La Noscea",
        "Name": "中央ラノシア",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "クロック・ミテーヌ"
            },
            {
                "Rank": "A",
                "Name": "醜男のヴォガージャ"
            },
            {
                "Rank": "B",
                "Name": "スコッグ・フリュー"
            }
        ],
        "MobLocations": [
            {
                "X": 16.55,
                "Y": 7.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.6,
                "Y": 9.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.95,
                "Y": 10.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.15,
                "Y": 11.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.9,
                "Y": 11.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.35,
                "Y": 13.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.9,
                "Y": 13.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.4,
                "Y": 13.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.35,
                "Y": 14,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.2,
                "Y": 15.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.75,
                "Y": 15.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.7,
                "Y": 16.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.3,
                "Y": 17,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.15,
                "Y": 17.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.45,
                "Y": 18.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21,
                "Y": 18.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.9,
                "Y": 19.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.25,
                "Y": 20.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.4,
                "Y": 20.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.25,
                "Y": 21.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.9,
                "Y": 22.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.9,
                "Y": 22.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.1,
                "Y": 23.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.2,
                "Y": 24.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 31,
        "Key": "Lower La Noscea",
        "Name": "低地ラノシア",
        "Filter": true,
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ケロゲロス"
            },
            {
                "Rank": "A",
                "Name": "ウンテクヒ"
            },
            {
                "Rank": "B",
                "Name": "バーバステル"
            }
        ],
        "MobLocations": [
            {
                "X": 30.05,
                "Y": 14.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 33,
                "Y": 16.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.5,
                "Y": 16.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29,
                "Y": 17,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 33.5,
                "Y": 17.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.55,
                "Y": 18.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.65,
                "Y": 20.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.1,
                "Y": 22.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.95,
                "Y": 24.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.45,
                "Y": 26.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.3,
                "Y": 26.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.25,
                "Y": 32,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.1,
                "Y": 34.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.7,
                "Y": 34.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.9,
                "Y": 35.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.2,
                "Y": 35.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.6,
                "Y": 35.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.15,
                "Y": 36,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20,
                "Y": 37.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.9,
                "Y": 38.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 32,
        "Key": "Eastern La Noscea",
        "Name": "東ラノシア",
        "Filter": true,
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ガーロック"
            },
            {
                "Rank": "A",
                "Name": "魔導ヘルズクロー"
            },
            {
                "Rank": "B",
                "Name": "ブラッディ・マリー"
            }
        ],
        "MobLocations": [
            {
                "X": 28.95,
                "Y": 19.3,
                "Flags": [
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 30.4,
                "Y": 19.3,
                "Flags": [
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 31.05,
                "Y": 19.95,
                "Flags": [
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 25.55,
                "Y": 20.4,
                "Flags": [
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 28.65,
                "Y": 20.65,
                "Flags": [
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 29.7,
                "Y": 21.4,
                "Flags": [
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 25.4,
                "Y": 21.8,
                "Flags": [
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 27.55,
                "Y": 25,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 30.1,
                "Y": 25,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 20.3,
                "Y": 25.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.25,
                "Y": 25.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.3,
                "Y": 26.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.1,
                "Y": 26.55,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 30.7,
                "Y": 26.7,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 32.1,
                "Y": 27.2,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 17.9,
                "Y": 27.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.35,
                "Y": 28,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.45,
                "Y": 28.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.75,
                "Y": 28.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.3,
                "Y": 29.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.4,
                "Y": 29.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15,
                "Y": 30.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.6,
                "Y": 30.9,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.3,
                "Y": 31.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.55,
                "Y": 31.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.5,
                "Y": 32.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.5,
                "Y": 33.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.7,
                "Y": 33.15,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 25.9,
                "Y": 33.8,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 17,
                "Y": 33.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.9,
                "Y": 35.6,
                "Flags": [
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 31.75,
                "Y": 36.25,
                "Flags": [
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 33,
        "Key": "Western La Noscea",
        "Name": "西ラノシア",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ボナコン"
            },
            {
                "Rank": "A",
                "Name": "ナン"
            },
            {
                "Rank": "B",
                "Name": "ダークヘルメット"
            }
        ],
        "MobLocations": [
            {
                "X": 14.55,
                "Y": 14.25,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 16.1,
                "Y": 14.5,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 12.9,
                "Y": 14.55,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 14.2,
                "Y": 15.85,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 14.35,
                "Y": 17.05,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 20.2,
                "Y": 18.4,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 17.05,
                "Y": 19.4,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 19.6,
                "Y": 19.55,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 23.15,
                "Y": 21.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.85,
                "Y": 21.95,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 24.7,
                "Y": 22.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.1,
                "Y": 23.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.65,
                "Y": 24,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.3,
                "Y": 24.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29,
                "Y": 25.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.25,
                "Y": 27.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 34.05,
                "Y": 28.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.75,
                "Y": 28.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.8,
                "Y": 28.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 33,
                "Y": 29.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.15,
                "Y": 34.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.95,
                "Y": 35.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.95,
                "Y": 36.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 34,
        "Key": "Upper La Noscea",
        "Name": "高地ラノシア",
        "Filter": true,
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ナンディ"
            },
            {
                "Rank": "A",
                "Name": "マーベリー"
            },
            {
                "Rank": "B",
                "Name": "ミラドロッシュ"
            }
        ],
        "MobLocations": [
            {
                "X": 27.7,
                "Y": 19.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.05,
                "Y": 21.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.2,
                "Y": 21.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 10.55,
                "Y": 21.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.15,
                "Y": 21.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.75,
                "Y": 22.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 11.6,
                "Y": 22.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.65,
                "Y": 23.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 35.2,
                "Y": 23.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.35,
                "Y": 23.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.45,
                "Y": 23.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 33.4,
                "Y": 24.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.45,
                "Y": 25.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.05,
                "Y": 25.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.7,
                "Y": 25.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 33.25,
                "Y": 25.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.85,
                "Y": 25.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 42,
        "Key": "Western Thanalan",
        "Name": "西ザナラーン",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ゾーナ・シーカー"
            },
            {
                "Rank": "A",
                "Name": "アレクトリオン"
            },
            {
                "Rank": "B",
                "Name": "スェアーシロップ"
            }
        ],
        "MobLocations": [
            {
                "X": 10.35,
                "Y": 5.25,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 8.45,
                "Y": 5.5,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 12.15,
                "Y": 5.95,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 14.95,
                "Y": 6,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 10.2,
                "Y": 6.4,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 12,
                "Y": 7.5,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 14.05,
                "Y": 7.85,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 18.3,
                "Y": 15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.95,
                "Y": 16.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.85,
                "Y": 16.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.3,
                "Y": 17.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.2,
                "Y": 19.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.85,
                "Y": 20.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.95,
                "Y": 22.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.25,
                "Y": 24,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.3,
                "Y": 24,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.75,
                "Y": 24.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.65,
                "Y": 25.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.1,
                "Y": 26.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.3,
                "Y": 27.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.9,
                "Y": 29.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.3,
                "Y": 29.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 43,
        "Key": "Central Thanalan",
        "Name": "中央ザナラーン",
        "Filter": true,
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ブロンテス"
            },
            {
                "Rank": "A",
                "Name": "サボテンダー・バイラリーナ"
            },
            {
                "Rank": "B",
                "Name": "アヴゼン"
            }
        ],
        "MobLocations": [
            {
                "X": 16.3,
                "Y": 12.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18,
                "Y": 13.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.75,
                "Y": 13.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.9,
                "Y": 15.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.6,
                "Y": 16.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.8,
                "Y": 16.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.1,
                "Y": 17.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.4,
                "Y": 17.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.75,
                "Y": 18,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.9,
                "Y": 18.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.3,
                "Y": 19.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.5,
                "Y": 20.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.6,
                "Y": 21.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.2,
                "Y": 21.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.2,
                "Y": 21.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.95,
                "Y": 23.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.45,
                "Y": 23.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.7,
                "Y": 25.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.45,
                "Y": 26.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.8,
                "Y": 29.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.4,
                "Y": 31.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.9,
                "Y": 31.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.7,
                "Y": 35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 44,
        "Key": "Eastern Thanalan",
        "Name": "東ザナラーン",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "バルウール"
            },
            {
                "Rank": "A",
                "Name": "マヘス"
            },
            {
                "Rank": "B",
                "Name": "ガトリングス"
            }
        ],
        "MobLocations": [
            {
                "X": 12.8,
                "Y": 15.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.5,
                "Y": 16.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.6,
                "Y": 17.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.8,
                "Y": 17.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.35,
                "Y": 17.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.65,
                "Y": 18.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.7,
                "Y": 18.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.3,
                "Y": 18.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 10.4,
                "Y": 19.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.7,
                "Y": 19.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.8,
                "Y": 19.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.4,
                "Y": 20,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.65,
                "Y": 20.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.95,
                "Y": 21.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.1,
                "Y": 21.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.5,
                "Y": 21.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.95,
                "Y": 22.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.45,
                "Y": 22.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25,
                "Y": 23.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.85,
                "Y": 24.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.4,
                "Y": 24.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.7,
                "Y": 25.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.85,
                "Y": 25.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.4,
                "Y": 25.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.9,
                "Y": 25.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.6,
                "Y": 25.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.55,
                "Y": 26.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.4,
                "Y": 26.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.3,
                "Y": 26.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.4,
                "Y": 26.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.45,
                "Y": 28,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.55,
                "Y": 28.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.35,
                "Y": 28.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.9,
                "Y": 29,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 45,
        "Key": "Southern Thanalan",
        "Name": "南ザナラーン",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ヌニュヌウィ"
            },
            {
                "Rank": "A",
                "Name": "ザニゴ"
            },
            {
                "Rank": "B",
                "Name": "死灰のアルビン"
            }
        ],
        "MobLocations": [
            {
                "X": 23.2,
                "Y": 7.95,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 24.65,
                "Y": 9.35,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 18,
                "Y": 10.2,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 21.25,
                "Y": 10.85,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 18.25,
                "Y": 11.2,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 24.65,
                "Y": 11.45,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 17.2,
                "Y": 11.7,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 23.8,
                "Y": 12.45,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 17.2,
                "Y": 16.95,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 19.55,
                "Y": 17.2,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 31,
                "Y": 18.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.7,
                "Y": 19.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 32.9,
                "Y": 19.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.95,
                "Y": 20.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.4,
                "Y": 20.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.5,
                "Y": 20.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.35,
                "Y": 21.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.15,
                "Y": 21.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.45,
                "Y": 22.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.05,
                "Y": 22.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.65,
                "Y": 23.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16,
                "Y": 24.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.8,
                "Y": 24.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.4,
                "Y": 24.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.05,
                "Y": 25.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.15,
                "Y": 26.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.25,
                "Y": 28.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.6,
                "Y": 29.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.85,
                "Y": 30.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.85,
                "Y": 30.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.2,
                "Y": 32.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.85,
                "Y": 33.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.45,
                "Y": 33.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.8,
                "Y": 34.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.5,
                "Y": 34.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.8,
                "Y": 34.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.1,
                "Y": 36.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.45,
                "Y": 36.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.1,
                "Y": 38.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.5,
                "Y": 38.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.75,
                "Y": 38.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.1,
                "Y": 40.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 46,
        "Key": "Northern Thanalan",
        "Name": "北ザナラーン",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ミニョーカオン"
            },
            {
                "Rank": "A",
                "Name": "ファイナルフレイム"
            },
            {
                "Rank": "B",
                "Name": "不滅のフェランド闘軍曹"
            }
        ],
        "MobLocations": [
            {
                "X": 16.05,
                "Y": 14.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.25,
                "Y": 15.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.05,
                "Y": 15.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.05,
                "Y": 16.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.85,
                "Y": 16.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.25,
                "Y": 17.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.75,
                "Y": 18,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.4,
                "Y": 18.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.35,
                "Y": 19.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.95,
                "Y": 22.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.3,
                "Y": 23.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.65,
                "Y": 24.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.05,
                "Y": 25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.6,
                "Y": 25.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.45,
                "Y": 26.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.2,
                "Y": 27,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.6,
                "Y": 27.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 54,
        "Key": "Central Shroud",
        "Name": "黒衣森：中央森林",
        "Filter": true,
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "レドロネット"
            },
            {
                "Rank": "A",
                "Name": "ファルネウス"
            },
            {
                "Rank": "B",
                "Name": "ホワイトジョーカー"
            }
        ],
        "MobLocations": [
            {
                "X": 28.75,
                "Y": 14.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.75,
                "Y": 16.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 9.55,
                "Y": 16.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.65,
                "Y": 17.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.1,
                "Y": 18.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.1,
                "Y": 18.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 10.05,
                "Y": 18.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.1,
                "Y": 19.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.1,
                "Y": 19.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.25,
                "Y": 19.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.8,
                "Y": 19.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.75,
                "Y": 20.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.75,
                "Y": 20.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.05,
                "Y": 21.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 10.45,
                "Y": 21.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.25,
                "Y": 22.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.05,
                "Y": 22.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.65,
                "Y": 23.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 11.6,
                "Y": 23.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.85,
                "Y": 24,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.05,
                "Y": 24.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.4,
                "Y": 27.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.6,
                "Y": 30.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 55,
        "Key": "East Shroud",
        "Name": "黒衣森：東部森林",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ウルガル"
            },
            {
                "Rank": "A",
                "Name": "メルティ・ゼリー"
            },
            {
                "Rank": "B",
                "Name": "スティンキング・ソフィー"
            }
        ],
        "MobLocations": [
            {
                "X": 25.05,
                "Y": 9.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.5,
                "Y": 11.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.5,
                "Y": 11.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.45,
                "Y": 11.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.1,
                "Y": 12.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.9,
                "Y": 13.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.9,
                "Y": 13.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.3,
                "Y": 15.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.9,
                "Y": 15.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.7,
                "Y": 16.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24,
                "Y": 16.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.8,
                "Y": 17.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.3,
                "Y": 17.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27,
                "Y": 17.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.8,
                "Y": 18.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.7,
                "Y": 20.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29,
                "Y": 20.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.7,
                "Y": 21.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.85,
                "Y": 21.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23,
                "Y": 21.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.25,
                "Y": 21.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.6,
                "Y": 22.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.4,
                "Y": 22.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.6,
                "Y": 23.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.3,
                "Y": 23.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.6,
                "Y": 23.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.7,
                "Y": 24.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.8,
                "Y": 25.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.35,
                "Y": 25.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.05,
                "Y": 25.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.5,
                "Y": 27.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22,
                "Y": 28.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.95,
                "Y": 28.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.1,
                "Y": 29.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.8,
                "Y": 30.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 56,
        "Key": "South Shroud",
        "Name": "黒衣森：南部森林",
        "Filter": true,
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "マインドフレア"
            },
            {
                "Rank": "A",
                "Name": "ゲーデ"
            },
            {
                "Rank": "B",
                "Name": "モナーク・オーガフライ"
            }
        ],
        "MobLocations": [
            {
                "X": 27.75,
                "Y": 17.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.35,
                "Y": 18.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.9,
                "Y": 18.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.8,
                "Y": 18.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.15,
                "Y": 19.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.8,
                "Y": 19.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.95,
                "Y": 19.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17,
                "Y": 21.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.4,
                "Y": 21.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.6,
                "Y": 22.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.65,
                "Y": 22.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.05,
                "Y": 22.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.9,
                "Y": 23.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.7,
                "Y": 23.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 32.7,
                "Y": 23.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23,
                "Y": 24.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.85,
                "Y": 24.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.55,
                "Y": 25.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.65,
                "Y": 25.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.4,
                "Y": 27.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.15,
                "Y": 27.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.4,
                "Y": 27.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.7,
                "Y": 28.55,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19,
                "Y": 28.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.25,
                "Y": 30.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.25,
                "Y": 30.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.3,
                "Y": 32.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.15,
                "Y": 32.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 57,
        "Key": "North Shroud",
        "Name": "黒衣森：北部森林",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "サウザンドキャスト・セダ"
            },
            {
                "Rank": "A",
                "Name": "ギルタブ"
            },
            {
                "Rank": "B",
                "Name": "フェクダ"
            }
        ],
        "MobLocations": [
            {
                "X": 23.45,
                "Y": 19.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.45,
                "Y": 20.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.65,
                "Y": 20.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.65,
                "Y": 20.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.6,
                "Y": 21.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.65,
                "Y": 22.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.95,
                "Y": 22.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.15,
                "Y": 23.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.95,
                "Y": 24.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.65,
                "Y": 25.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.8,
                "Y": 25.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.8,
                "Y": 26.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.2,
                "Y": 27.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.05,
                "Y": 27.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.45,
                "Y": 28.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.95,
                "Y": 28.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.55,
                "Y": 28.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.4,
                "Y": 28.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 18.15,
                "Y": 28.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.55,
                "Y": 30.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 63,
        "Key": "Coerthas Central Highlands",
        "Name": "クルザス中央高地",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "サファト"
            },
            {
                "Rank": "A",
                "Name": "マラク"
            },
            {
                "Rank": "B",
                "Name": "ナウル"
            }
        ],
        "MobLocations": [
            {
                "X": 32.05,
                "Y": 7.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.9,
                "Y": 7.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.95,
                "Y": 8.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.65,
                "Y": 9.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.15,
                "Y": 10.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.3,
                "Y": 11.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.1,
                "Y": 11.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 8.95,
                "Y": 11.9,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.2,
                "Y": 12.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 10.8,
                "Y": 12.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.05,
                "Y": 13.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 8.85,
                "Y": 13.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.8,
                "Y": 13.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 11.75,
                "Y": 14.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.5,
                "Y": 14.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 8.85,
                "Y": 14.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.4,
                "Y": 14.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 35.05,
                "Y": 15.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 5.25,
                "Y": 16,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 20.55,
                "Y": 16.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 4.15,
                "Y": 16.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 31.9,
                "Y": 16.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 5.6,
                "Y": 18.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.3,
                "Y": 18.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 10.5,
                "Y": 18.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.4,
                "Y": 18.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.55,
                "Y": 18.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.55,
                "Y": 18.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.5,
                "Y": 18.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 11.55,
                "Y": 19.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.3,
                "Y": 19.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 6.45,
                "Y": 19.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.6,
                "Y": 20,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.85,
                "Y": 20.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.1,
                "Y": 20.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 8.35,
                "Y": 21,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.15,
                "Y": 21.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.4,
                "Y": 22.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 34.8,
                "Y": 22.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 35.8,
                "Y": 23.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 32.8,
                "Y": 23.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.65,
                "Y": 23.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.4,
                "Y": 25.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.9,
                "Y": 25.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 28.1,
                "Y": 25.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 25.65,
                "Y": 25.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.45,
                "Y": 26.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 9,
                "Y": 27.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 11,
                "Y": 27.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.8,
                "Y": 27.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 29.3,
                "Y": 27.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.65,
                "Y": 28.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.4,
                "Y": 28.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 6.6,
                "Y": 28.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.5,
                "Y": 28.7,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 11.05,
                "Y": 28.95,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19.8,
                "Y": 29.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 17.7,
                "Y": 29.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.3,
                "Y": 29.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 30.75,
                "Y": 31.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 67,
        "Key": "Mor Dhona",
        "Name": "モードゥナ",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "アグリッパ"
            },
            {
                "Rank": "A",
                "Name": "クーレア"
            },
            {
                "Rank": "B",
                "Name": "リーチキング"
            }
        ],
        "MobLocations": [
            {
                "X": 30.6,
                "Y": 6.4,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 29.1,
                "Y": 6.5,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 32.3,
                "Y": 6.9,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 29.1,
                "Y": 7.7,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 19.15,
                "Y": 8.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 26.8,
                "Y": 8.5,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 32.45,
                "Y": 8.6,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 27.15,
                "Y": 8.85,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 32.3,
                "Y": 10.2,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 16.05,
                "Y": 10.45,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14,
                "Y": 10.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.4,
                "Y": 10.6,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 24.85,
                "Y": 10.65,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 23.2,
                "Y": 10.7,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 31.45,
                "Y": 11.3,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 11.9,
                "Y": 11.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.75,
                "Y": 11.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 33.6,
                "Y": 12.05,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 13.65,
                "Y": 12.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.4,
                "Y": 12.2,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 25.2,
                "Y": 12.7,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 26.8,
                "Y": 12.7,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 28.25,
                "Y": 13.55,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 12.7,
                "Y": 13.75,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.2,
                "Y": 13.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 9.8,
                "Y": 13.9,
                "Flags": [
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 32.4,
                "Y": 14.35,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 28.95,
                "Y": 14.75,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 30.15,
                "Y": 15.05,
                "Flags": [
                    false,
                    true,
                    true
                ]
            },
            {
                "X": 10.6,
                "Y": 15.15,
                "Flags": [
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 16.4,
                "Y": 15.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 12.6,
                "Y": 16,
                "Flags": [
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 12.25,
                "Y": 16.85,
                "Flags": [
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 16.8,
                "Y": 17.4,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 350,
        "Key": "Outer La Noscea",
        "Name": "外地ラノシア",
        "Type": 0,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "チェルノボーグ"
            },
            {
                "Rank": "A",
                "Name": "コンヌ"
            },
            {
                "Rank": "B",
                "Name": "ヴォコー"
            }
        ],
        "MobLocations": [
            {
                "X": 27,
                "Y": 5.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.5,
                "Y": 6.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.45,
                "Y": 6.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 27.4,
                "Y": 7.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.55,
                "Y": 7.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.75,
                "Y": 8.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23.65,
                "Y": 9.25,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.8,
                "Y": 9.5,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.9,
                "Y": 10.3,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.6,
                "Y": 10.35,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.4,
                "Y": 12.65,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23,
                "Y": 13.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.1,
                "Y": 14.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 21.35,
                "Y": 14.6,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.25,
                "Y": 14.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 19,
                "Y": 15.1,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 22.9,
                "Y": 15.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 24.6,
                "Y": 16.15,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 13.55,
                "Y": 16.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 23,
                "Y": 16.2,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 14.7,
                "Y": 16.85,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 16.45,
                "Y": 17.8,
                "Flags": [
                    true,
                    true,
                    true
                ]
            },
            {
                "X": 15.1,
                "Y": 18.05,
                "Flags": [
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2000,
        "Key": "The Dravanian Forelands",
        "Name": "高地ドラヴァニア",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 44.1,
            "Ymax": 44.1
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "セーンムルウ"
            },
            {
                "Rank": "A",
                "Name": "パイルラスタ"
            },
            {
                "Rank": "A",
                "Name": "ワイバーンロード"
            },
            {
                "Rank": "B",
                "Name": "テクスタ"
            },
            {
                "Rank": "B",
                "Name": "グナース・コメットドローン"
            }
        ],
        "MobLocations": [
            {
                "X": 26.4,
                "Y": 7.5,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 33.9,
                "Y": 8.55,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.9,
                "Y": 11.3,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 34.85,
                "Y": 13.55,
                "Flags": [
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 13.6,
                "Y": 15.05,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 32.5,
                "Y": 18.25,
                "Flags": [
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 21.4,
                "Y": 19.8,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 28.9,
                "Y": 21.8,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 25.7,
                "Y": 24.85,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 38.6,
                "Y": 25.6,
                "Flags": [
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 12.35,
                "Y": 27.6,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 34.6,
                "Y": 28.75,
                "Flags": [
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 20.05,
                "Y": 30.2,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 27.75,
                "Y": 30.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 14.3,
                "Y": 31.35,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 24.9,
                "Y": 32.4,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.15,
                "Y": 33.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 10.25,
                "Y": 35.25,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 17,
                "Y": 35.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 27.4,
                "Y": 37.25,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 17.95,
                "Y": 38.75,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2001,
        "Key": "The Dravanian Hinterlands",
        "Name": "低地ドラヴァニア",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 44.1,
            "Ymax": 44.1
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ペイルライダー"
            },
            {
                "Rank": "A",
                "Name": "機兵のスリップキンクス"
            },
            {
                "Rank": "A",
                "Name": "ストラス"
            },
            {
                "Rank": "B",
                "Name": "ブラクキ"
            },
            {
                "Rank": "B",
                "Name": "プテリゴトゥス"
            }
        ],
        "MobLocations": [
            {
                "X": 13.1,
                "Y": 16.45,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 26.65,
                "Y": 16.6,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 26.85,
                "Y": 20.05,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 31.8,
                "Y": 20.15,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 9.35,
                "Y": 21.35,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 15.05,
                "Y": 21.6,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 35.95,
                "Y": 21.85,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 5.4,
                "Y": 22.15,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 24,
                "Y": 23.5,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 33.95,
                "Y": 24.1,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.1,
                "Y": 25.45,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 26.8,
                "Y": 25.45,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 34.2,
                "Y": 26.85,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 8.6,
                "Y": 28.1,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 38,
                "Y": 28.4,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 12.6,
                "Y": 29.25,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 26.6,
                "Y": 29.4,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.5,
                "Y": 32.05,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 8.45,
                "Y": 34,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 14.5,
                "Y": 35.65,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 26.25,
                "Y": 36.9,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.15,
                "Y": 37.75,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2002,
        "Key": "The Churning Mists",
        "Name": "ドラヴァニア雲海",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 44.1,
            "Ymax": 44.1
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ガンダルヴァ"
            },
            {
                "Rank": "A",
                "Name": "ブネ"
            },
            {
                "Rank": "A",
                "Name": "アガトス"
            },
            {
                "Rank": "B",
                "Name": "スキタリス"
            },
            {
                "Rank": "B",
                "Name": "スケアクロウ"
            }
        ],
        "MobLocations": [
            {
                "X": 25.85,
                "Y": 7.95,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 9.5,
                "Y": 8.5,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 28.25,
                "Y": 10.6,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 7.4,
                "Y": 11.7,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 15.2,
                "Y": 14.5,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 7.9,
                "Y": 15.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 6.85,
                "Y": 20.25,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 11.9,
                "Y": 20.3,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 28.5,
                "Y": 20.35,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 24.9,
                "Y": 20.5,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 33.5,
                "Y": 20.85,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 14,
                "Y": 23.55,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 18.2,
                "Y": 24.35,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 37.2,
                "Y": 26.2,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 26.4,
                "Y": 27.6,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 16.9,
                "Y": 28,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 36.05,
                "Y": 29.05,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.8,
                "Y": 30.25,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 22.45,
                "Y": 31.1,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 31.95,
                "Y": 32.65,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 6.45,
                "Y": 35.65,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 10.05,
                "Y": 38.7,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2100,
        "Key": "The Sea of Clouds",
        "Name": "アバラシア雲海",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 44.1,
            "Ymax": 44.1
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "極楽鳥"
            },
            {
                "Rank": "A",
                "Name": "エンケドラス"
            },
            {
                "Rank": "A",
                "Name": "シシウトゥル"
            },
            {
                "Rank": "B",
                "Name": "スクオンク"
            },
            {
                "Rank": "B",
                "Name": "舞手のサヌバリ"
            }
        ],
        "MobLocations": [
            {
                "X": 29.35,
                "Y": 6.55,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 15.55,
                "Y": 7.5,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.75,
                "Y": 7.65,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 7.5,
                "Y": 8.35,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 36.9,
                "Y": 8.65,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 19.25,
                "Y": 9.45,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 23.25,
                "Y": 10,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 25.05,
                "Y": 13.1,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 15.4,
                "Y": 14.6,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 37.4,
                "Y": 14.65,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.55,
                "Y": 16.05,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 9.05,
                "Y": 16.65,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 31.45,
                "Y": 19.05,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 6.5,
                "Y": 19.3,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 36.5,
                "Y": 21.15,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 20.85,
                "Y": 21.5,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 14.55,
                "Y": 23.5,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 24.45,
                "Y": 25.25,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 26.1,
                "Y": 29.1,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 13.75,
                "Y": 29.15,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 17.9,
                "Y": 29.85,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 34.05,
                "Y": 31.55,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 18.3,
                "Y": 31.65,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 26.6,
                "Y": 33.7,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 31.65,
                "Y": 36.1,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 36.2,
                "Y": 38.5,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "ID": 2101,
        "Key": "Azys Lla",
        "Name": "アジス・ラー",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 44.1,
            "Ymax": 44.1
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "レウクロッタ"
            },
            {
                "Rank": "A",
                "Name": "キャムパクティ"
            },
            {
                "Rank": "A",
                "Name": "センチブロッサム"
            },
            {
                "Rank": "B",
                "Name": "リュキダス"
            },
            {
                "Rank": "B",
                "Name": "オムニ"
            }
        ],
        "MobLocations": [
            {
                "X": 32.7,
                "Y": 5.75,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 37.7,
                "Y": 7.1,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 17.3,
                "Y": 8.55,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 27.65,
                "Y": 11.15,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 33.8,
                "Y": 12.85,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 18.5,
                "Y": 13.25,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 27.4,
                "Y": 15.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 13.9,
                "Y": 16.9,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 9.45,
                "Y": 26.5,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 34.35,
                "Y": 26.65,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 38.95,
                "Y": 27.6,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 29.85,
                "Y": 28.75,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.1,
                "Y": 29.4,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 11.3,
                "Y": 30.35,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 35.9,
                "Y": 30.8,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 8.25,
                "Y": 34,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 36.25,
                "Y": 34.15,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 29.65,
                "Y": 35.05,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 36.35,
                "Y": 37.15,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 12.85,
                "Y": 38.2,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2200,
        "Key": "Coerthas Western Highlands",
        "Name": "クルザス西部高地",
        "Filter": true,
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 44.1,
            "Ymax": 44.1
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "カイザーベヒーモス"
            },
            {
                "Rank": "A",
                "Name": "ミルカ"
            },
            {
                "Rank": "A",
                "Name": "リューバ"
            },
            {
                "Rank": "B",
                "Name": "クルーゼ"
            },
            {
                "Rank": "B",
                "Name": "アルティック"
            }
        ],
        "MobLocations": [
            {
                "X": 28,
                "Y": 7.85,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 35.6,
                "Y": 9.6,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 26.1,
                "Y": 11.6,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.1,
                "Y": 12.1,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 6.65,
                "Y": 12.45,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 36.25,
                "Y": 12.5,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 29.35,
                "Y": 13,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 18,
                "Y": 13.1,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 10,
                "Y": 13.2,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 27.5,
                "Y": 15.9,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 11.6,
                "Y": 17.3,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 32.5,
                "Y": 17.6,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 21.95,
                "Y": 17.65,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 18.1,
                "Y": 18.95,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 22.1,
                "Y": 20.7,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 34.05,
                "Y": 20.8,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 28.15,
                "Y": 21.5,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 33.8,
                "Y": 22.5,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 17.3,
                "Y": 25.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 29.95,
                "Y": 26.75,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 23.5,
                "Y": 28.1,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 16.7,
                "Y": 29.65,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 18.7,
                "Y": 31.2,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 24.95,
                "Y": 32.4,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "ID": 2406,
        "Key": "The Fringes",
        "Name": "ギラバニア辺境地帯",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ウドンゲ"
            },
            {
                "Rank": "A",
                "Name": "オルクス"
            },
            {
                "Rank": "A",
                "Name": "アール"
            },
            {
                "Rank": "B",
                "Name": "オゼルム"
            },
            {
                "Rank": "B",
                "Name": "宵闇のヤミニ"
            }
        ],
        "MobLocations": [
            {
                "X": 18.25,
                "Y": 8.45,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 21.2,
                "Y": 10.55,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 25.35,
                "Y": 11.75,
                "Flags": [
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 14.35,
                "Y": 12.4,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 17.8,
                "Y": 12.75,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 10.45,
                "Y": 14.55,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 34.65,
                "Y": 17.5,
                "Flags": [
                    false,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 12.25,
                "Y": 18,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 24.1,
                "Y": 18.15,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 33.75,
                "Y": 20.9,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 17.5,
                "Y": 21.75,
                "Flags": [
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 27.75,
                "Y": 23.5,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 16.65,
                "Y": 24.3,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 8.7,
                "Y": 25.25,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.35,
                "Y": 26.25,
                "Flags": [
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 25.2,
                "Y": 28.4,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 8.3,
                "Y": 30.55,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 28.95,
                "Y": 30.8,
                "Flags": [
                    true,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 25.85,
                "Y": 31.9,
                "Flags": [
                    false,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 33.3,
                "Y": 33.35,
                "Flags": [
                    false,
                    true,
                    false,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2407,
        "Key": "The Peaks",
        "Name": "ギラバニア山岳地帯",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ボーンクローラー"
            },
            {
                "Rank": "A",
                "Name": "バックスタイン"
            },
            {
                "Rank": "A",
                "Name": "アクラブアメル"
            },
            {
                "Rank": "B",
                "Name": "ブッカブー"
            },
            {
                "Rank": "B",
                "Name": "グアス・ア・ニードル"
            }
        ],
        "MobLocations": [
            {
                "X": 26.95,
                "Y": 7.95,
                "Flags": [
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 11.2,
                "Y": 8.2,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 32.05,
                "Y": 8.3,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 26.25,
                "Y": 12,
                "Flags": [
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 8.7,
                "Y": 12.25,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 36.35,
                "Y": 12.45,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 5.65,
                "Y": 14.75,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 23.35,
                "Y": 14.95,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 25.35,
                "Y": 20.15,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.65,
                "Y": 23.1,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 23.75,
                "Y": 24.25,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 7.8,
                "Y": 25.85,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 18.1,
                "Y": 26.7,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 12.6,
                "Y": 28.3,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 26.65,
                "Y": 29.85,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 11.75,
                "Y": 32.85,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 5.85,
                "Y": 34.8,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 23.65,
                "Y": 36.6,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2408,
        "Key": "The Lochs",
        "Name": "ギラバニア湖畔地帯",
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ソルト・アンド・ライト"
            },
            {
                "Rank": "A",
                "Name": "マヒシャ"
            },
            {
                "Rank": "A",
                "Name": "ルミナーレ"
            },
            {
                "Rank": "B",
                "Name": "マネス"
            },
            {
                "Rank": "B",
                "Name": "キワ"
            }
        ],
        "MobLocations": [
            {
                "X": 18.3,
                "Y": 7.5,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 28.95,
                "Y": 7.85,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 6.45,
                "Y": 8.25,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 22.5,
                "Y": 10.35,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 34.95,
                "Y": 11.2,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 7.7,
                "Y": 14.1,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 25.05,
                "Y": 16.5,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 13.95,
                "Y": 20.55,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 18.8,
                "Y": 25.6,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 23.45,
                "Y": 25.85,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 7.4,
                "Y": 26.3,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 4.6,
                "Y": 29.3,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 6.95,
                "Y": 31.1,
                "Flags": [
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 18.95,
                "Y": 31.75,
                "Flags": [
                    false,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 24.5,
                "Y": 32.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 10.45,
                "Y": 33.7,
                "Flags": [
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 26.4,
                "Y": 34.45,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 3.1,
                "Y": 34.95,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    false
                ]
            },
            {
                "X": 30.1,
                "Y": 36.35,
                "Flags": [
                    true,
                    true,
                    false,
                    false,
                    false
                ]
            }
        ]
    },
    {
        "ID": 2409,
        "Key": "The Ruby Sea",
        "Name": "紅玉海",
        "Filter": true,
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "オキナ"
            },
            {
                "Rank": "A",
                "Name": "船幽霊"
            },
            {
                "Rank": "A",
                "Name": "オニユメミ"
            },
            {
                "Rank": "B",
                "Name": "姑獲鳥"
            },
            {
                "Rank": "B",
                "Name": "剣豪ガウキ"
            }
        ],
        "MobLocations": [
            {
                "X": 7.5,
                "Y": 5.9,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 25.95,
                "Y": 7.05,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 18.85,
                "Y": 8.65,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.55,
                "Y": 10.6,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 14.45,
                "Y": 13.9,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 36.5,
                "Y": 17.95,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 34.95,
                "Y": 21.15,
                "Flags": [
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 5.05,
                "Y": 22.95,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 32.05,
                "Y": 24.3,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 25.3,
                "Y": 26.2,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 6.9,
                "Y": 29.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 27.25,
                "Y": 31.6,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 23.95,
                "Y": 33.2,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 31.05,
                "Y": 38.75,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2410,
        "Key": "Yanxia",
        "Name": "ヤンサ",
        "Filter": true,
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ガンマ"
            },
            {
                "Rank": "A",
                "Name": "ガジャースラ"
            },
            {
                "Rank": "A",
                "Name": "アンガダ"
            },
            {
                "Rank": "B",
                "Name": "雷撃のギョライ"
            },
            {
                "Rank": "B",
                "Name": "デイダラ"
            }
        ],
        "MobLocations": [
            {
                "X": 21.6,
                "Y": 9.45,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 27.1,
                "Y": 10.4,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 18.35,
                "Y": 10.5,
                "Flags": [
                    false,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 28.7,
                "Y": 11.35,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 23.65,
                "Y": 11.5,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.9,
                "Y": 13.8,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 18.25,
                "Y": 16.15,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 32.35,
                "Y": 18.5,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 24.6,
                "Y": 21.7,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 34.15,
                "Y": 26.6,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 23.6,
                "Y": 27.25,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 12.3,
                "Y": 30.6,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 17.65,
                "Y": 34.3,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 29.85,
                "Y": 35.3,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2411,
        "Key": "The Azim Steppe",
        "Name": "アジムステップ",
        "Filter": true,
        "Type": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "オルガナ"
            },
            {
                "Rank": "A",
                "Name": "ギリメカラ"
            },
            {
                "Rank": "A",
                "Name": "ソム"
            },
            {
                "Rank": "B",
                "Name": "クールマ"
            },
            {
                "Rank": "B",
                "Name": "アスワング"
            }
        ],
        "MobLocations": [
            {
                "X": 27.35,
                "Y": 9,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 19.35,
                "Y": 10.25,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 13.5,
                "Y": 10.35,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 34.65,
                "Y": 15.05,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 22.35,
                "Y": 15.95,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 12.45,
                "Y": 17.25,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 27.9,
                "Y": 18.8,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 17.4,
                "Y": 18.9,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 9.65,
                "Y": 22.35,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 14.95,
                "Y": 25.5,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 27.9,
                "Y": 25.7,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 9.75,
                "Y": 25.9,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 11.4,
                "Y": 28.35,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.6,
                "Y": 30.3,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 24.25,
                "Y": 30.3,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 21.85,
                "Y": 34.2,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 26.7,
                "Y": 34.25,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 17.45,
                "Y": 34.35,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "ID": 2953,
        "Key": "Lakeland",
        "Name": "レイクランド",
        "Type": 2,
        "Instance": 1,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "ティガー"
            },
            {
                "Rank": "A",
                "Name": "ナックラヴィー"
            },
            {
                "Rank": "A",
                "Name": "ナリーポン"
            },
            {
                "Rank": "B",
                "Name": "イツパパロツル"
            },
            {
                "Rank": "B",
                "Name": "ラ・ヴェリュ"
            }
        ],
        "MobLocations": [
            {
                "X": 19.76,
                "Y": 9.51,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 36.47,
                "Y": 12.2,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 22.88,
                "Y": 12.46,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 11.74,
                "Y": 12.73,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 27.34,
                "Y": 15.5,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 35.34,
                "Y": 16.06,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 11.54,
                "Y": 17.49,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 29.6,
                "Y": 19.27,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 30.74,
                "Y": 22.26,
                "Flags": [
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 8,
                "Y": 23.11,
                "Flags": [
                    false,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 18.57,
                "Y": 23.35,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 25.67,
                "Y": 23.73,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 13.89,
                "Y": 24.85,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 35.82,
                "Y": 26.92,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 23.15,
                "Y": 29.59,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 27.82,
                "Y": 30.87,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 35.24,
                "Y": 32.19,
                "Flags": [
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 27.01,
                "Y": 37.14,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            }
        ],
        "Mobs2": [
            {
                "Rank": "S",
                "Name": "フォーギヴン・リベリオン"
            },
            {
                "Rank": "S",
                "Name": "フォーギヴン・ゴシップ"
            }
        ],
        "MobLocations2": [
            {
                "X": 23.4,
                "Y": 22.1,
                "Flags": [
                    true,
                    false
                ]
            },
            {
                "X": 12.68,
                "Y": 10.6,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 33.48,
                "Y": 12.24,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 10.85,
                "Y": 25.13,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 30.11,
                "Y": 36.35,
                "Flags": [
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2954,
        "Key": "Kholusia",
        "Name": "コルシア島",
        "Type": 2,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "フォーギヴン・ペダントリー"
            },
            {
                "Rank": "A",
                "Name": "リルマーダー"
            },
            {
                "Rank": "A",
                "Name": "フラカン"
            },
            {
                "Rank": "B",
                "Name": "インドミタブル"
            },
            {
                "Rank": "B",
                "Name": "コクシグルー"
            }
        ],
        "MobLocations": [
            {
                "X": 16.93,
                "Y": 7.32,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 19.65,
                "Y": 10.84,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 24.81,
                "Y": 11.58,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.96,
                "Y": 14.16,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 14.98,
                "Y": 15.87,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 22.89,
                "Y": 17.52,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 11.5,
                "Y": 18.61,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 26.96,
                "Y": 19.27,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 31.27,
                "Y": 19.98,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.44,
                "Y": 22.74,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 15.26,
                "Y": 24.27,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 26.7,
                "Y": 24.37,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 34.48,
                "Y": 24.59,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 9.26,
                "Y": 25.48,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 29.87,
                "Y": 29.77,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 24.67,
                "Y": 30.39,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "X": 20.72,
                "Y": 31.35,
                "Flags": [
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            }
        ],
        "Mobs2": [
            {
                "Rank": "S",
                "Name": "フォーギヴン・リベリオン"
            },
            {
                "Rank": "S",
                "Name": "フォーギヴン・ゴシップ"
            }
        ],
        "MobLocations2": [
            {
                "X": 34.63,
                "Y": 10.51,
                "Flags": [
                    true,
                    false
                ]
            },
            {
                "X": 12.31,
                "Y": 14.97,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 23.94,
                "Y": 15.29,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 8.71,
                "Y": 28.8,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 33.54,
                "Y": 33.02,
                "Flags": [
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2955,
        "Key": "Amh Araeng",
        "Name": "アム・アレーン",
        "Filter": true,
        "Type": 2,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "タルキア"
            },
            {
                "Rank": "A",
                "Name": "マリクテンダー"
            },
            {
                "Rank": "A",
                "Name": "シュガール"
            },
            {
                "Rank": "B",
                "Name": "ジャグラー・ヘカトゥーム"
            },
            {
                "Rank": "B",
                "Name": "ウェルウォーム"
            }
        ],
        "MobLocations": [
            {
                "X": 22.48,
                "Y": 10.37,
                "Flags": [
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "X": 16.7,
                "Y": 10.43,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 10.31,
                "Y": 12,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 28.7,
                "Y": 12.77,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 30.91,
                "Y": 14.24,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 19.26,
                "Y": 16.1,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 11.74,
                "Y": 19.52,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 28.7,
                "Y": 20.27,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 33.42,
                "Y": 21.47,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.54,
                "Y": 24.04,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 19.14,
                "Y": 24.77,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 28.43,
                "Y": 26.24,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 19.83,
                "Y": 28.87,
                "Flags": [
                    false,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 23.29,
                "Y": 29.94,
                "Flags": [
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 17.2,
                "Y": 31.68,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 32.8,
                "Y": 33.93,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 30.51,
                "Y": 35.14,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 20.01,
                "Y": 36.53,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            }
        ],
        "Mobs2": [
            {
                "Rank": "S",
                "Name": "フォーギヴン・リベリオン"
            },
            {
                "Rank": "S",
                "Name": "フォーギヴン・ゴシップ"
            }
        ],
        "MobLocations2": [
            {
                "X": 27.4,
                "Y": 35.73,
                "Flags": [
                    true,
                    false
                ]
            },
            {
                "X": 30.43,
                "Y": 10.47,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 13.6,
                "Y": 12.1,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 30.3,
                "Y": 24.7,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 14.2,
                "Y": 32.5,
                "Flags": [
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2956,
        "Key": "Il Mheg",
        "Name": "イル・メグ",
        "Filter": true,
        "Type": 2,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "アグラオペ"
            },
            {
                "Rank": "A",
                "Name": "ポールディア"
            },
            {
                "Rank": "A",
                "Name": "泥人"
            },
            {
                "Rank": "B",
                "Name": "ドモヴォーイ"
            },
            {
                "Rank": "B",
                "Name": "ヴルパングエ"
            }
        ],
        "MobLocations": [
            {
                "X": 29.27,
                "Y": 5.37,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 25.64,
                "Y": 7.22,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 34.06,
                "Y": 7.31,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 20.11,
                "Y": 8.54,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 31.56,
                "Y": 13.71,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 11.02,
                "Y": 16.21,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 27.18,
                "Y": 18.79,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 10.22,
                "Y": 20.03,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 7.62,
                "Y": 22.89,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 8.23,
                "Y": 27.04,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 19.41,
                "Y": 27.53,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 22.96,
                "Y": 28.56,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 9.95,
                "Y": 30.76,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 24.48,
                "Y": 33.08,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 13.65,
                "Y": 34.08,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 19.58,
                "Y": 34.81,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 24.85,
                "Y": 37.42,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            }
        ],
        "Mobs2": [
            {
                "Rank": "S",
                "Name": "フォーギヴン・リベリオン"
            },
            {
                "Rank": "S",
                "Name": "フォーギヴン・ゴシップ"
            }
        ],
        "MobLocations2": [
            {
                "X": 13.6,
                "Y": 23.13,
                "Flags": [
                    true,
                    false
                ]
            },
            {
                "X": 32.51,
                "Y": 11.32,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 24.96,
                "Y": 22.14,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 5.9,
                "Y": 29.74,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 23.51,
                "Y": 35.78,
                "Flags": [
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2957,
        "Key": "The Rak'tika Greatwood",
        "Name": "ラケティカ大森林",
        "Type": 2,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "イシュタム"
            },
            {
                "Rank": "A",
                "Name": "グラスマン"
            },
            {
                "Rank": "A",
                "Name": "スペイ"
            },
            {
                "Rank": "B",
                "Name": "マインドメーカー"
            },
            {
                "Rank": "B",
                "Name": "パチャママ"
            }
        ],
        "MobLocations": [
            {
                "X": 22.56,
                "Y": 10.95,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 22.24,
                "Y": 13.58,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 26.3,
                "Y": 15.29,
                "Flags": [
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 9.45,
                "Y": 18.72,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 14.38,
                "Y": 22.42,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 33.23,
                "Y": 23.02,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 26.09,
                "Y": 24.27,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 9.86,
                "Y": 24.31,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 16.97,
                "Y": 24.35,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 29.42,
                "Y": 26.04,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 15.04,
                "Y": 30.3,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 25.1,
                "Y": 30.5,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 8.65,
                "Y": 34.92,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 17.93,
                "Y": 34.97,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 12.12,
                "Y": 36.02,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            }
        ],
        "Mobs2": [
            {
                "Rank": "S",
                "Name": "フォーギヴン・リベリオン"
            },
            {
                "Rank": "S",
                "Name": "フォーギヴン・ゴシップ"
            }
        ],
        "MobLocations2": [
            {
                "X": 24.4,
                "Y": 37.33,
                "Flags": [
                    true,
                    false
                ]
            },
            {
                "X": 29.9,
                "Y": 13.06,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 7.42,
                "Y": 21.46,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 18.9,
                "Y": 22.53,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 14.63,
                "Y": 36.69,
                "Flags": [
                    false,
                    true
                ]
            }
        ]
    },
    {
        "ID": 2958,
        "Key": "The Tempest",
        "Name": "テンペスト",
        "Type": 2,
        "Scale": {
            "Xmin": 1,
            "Ymin": 1,
            "Xmax": 41.9,
            "Ymax": 41.9
        },
        "Mobs": [
            {
                "Rank": "S",
                "Name": "グニット"
            },
            {
                "Rank": "A",
                "Name": "バール"
            },
            {
                "Rank": "A",
                "Name": "ルサルカ"
            },
            {
                "Rank": "B",
                "Name": "ディーコン"
            },
            {
                "Rank": "B",
                "Name": "手掴のギウスィー・アース"
            }
        ],
        "MobLocations": [
            {
                "X": 30.96,
                "Y": 4.32,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 11.18,
                "Y": 5.12,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 21.22,
                "Y": 7.65,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 8.91,
                "Y": 8.61,
                "Flags": [
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 28.76,
                "Y": 8.68,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.65,
                "Y": 10.7,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 30.77,
                "Y": 11.02,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 36.62,
                "Y": 11.55,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 25.29,
                "Y": 12.7,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 18.43,
                "Y": 13.27,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 37.56,
                "Y": 16.73,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 13.53,
                "Y": 17.43,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 36.03,
                "Y": 19.8,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 15.51,
                "Y": 20.25,
                "Flags": [
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "X": 33.77,
                "Y": 21.84,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 28.92,
                "Y": 23.1,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "X": 24.77,
                "Y": 25.23,
                "Flags": [
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            }
        ],
        "Mobs2": [
            {
                "Rank": "S",
                "Name": "フォーギヴン・リベリオン"
            },
            {
                "Rank": "S",
                "Name": "フォーギヴン・ゴシップ"
            }
        ],
        "MobLocations2": [
            {
                "X": 13,
                "Y": 22.14,
                "Flags": [
                    true,
                    false
                ]
            },
            {
                "X": 8.37,
                "Y": 7,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 25.68,
                "Y": 9.57,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 38.08,
                "Y": 14.06,
                "Flags": [
                    false,
                    true
                ]
            },
            {
                "X": 33.78,
                "Y": 30.2,
                "Flags": [
                    false,
                    true
                ]
            }
        ]
    }
];

class CacheService {
    static setProperty(key, value) {
        localStorage.setItem(key, value);
    }
    static getProperty(key, defaultValue = null) {
        let rtn = defaultValue;
        try {
            rtn = localStorage.getItem(key);
        }
        finally {
            return rtn;
        }
    }
    static setClientProperty(key, value) {
        localStorage.setItem(key, value);
    }
    static getClientProperty(key, defaultValue) {
        let rtn = defaultValue;
        try {
            rtn = localStorage.getItem(key);
        }
        finally {
            return rtn;
        }
    }
}

class MobZone {
    constructor(json) {
        Object.assign(this, json);
        const tmp = CacheService.getProperty(`Ins${this.ID}`);
        this._InsCount = isNaN(parseInt(tmp, 10)) ? 1 : parseInt(tmp, 10);
        this._InsCount = this.Instance ? this.Instance : 1; // 応急処置
    }

    get InsCount() {
        return this._InsCount;
    }

    set InsCount(count) {
        CacheService.setProperty(`Ins${this.ID}`, count.toString());
        this._InsCount = count;
    }

    getLocationIndex(loc) {
        let minDistance = 10000.0
        let minIndex = -1
        this.MobLocations.forEach((v, i) => {
            const distance = Math.sqrt((v.X - loc.X) * (v.X - loc.X) + (v.Y - loc.Y) * (v.Y - loc.Y))
            if (distance < minDistance) {
                minDistance = distance
                minIndex = i
            }
        })
        return (minDistance < 1.5) ? minIndex : -1
    }

    getFocusRegion() {
        const xarrays = this.MobLocations.map(loc=>loc.X).concat((this.MobLocations2) ? this.MobLocations2.map(loc=>loc.X) : [])
        const yarrays = this.MobLocations.map(loc=>loc.Y).concat((this.MobLocations2) ? this.MobLocations2.map(loc=>loc.Y) : [])
        const bounds = {
            xmin: xarrays.reduce((a,b)=>a<b?a:b),
            xmax: xarrays.reduce((a,b)=>a>b?a:b),
            ymin: yarrays.reduce((a,b)=>a<b?a:b),
            ymax: yarrays.reduce((a,b)=>a>b?a:b)
        }
        const p = 10.0;
        const outer = {
            xmin: Math.max(this.Scale.Xmin, ((p + 1) * bounds.xmin - bounds.xmax) / p),
            xmax: Math.min(this.Scale.Xmax, ((p + 1) * bounds.xmax - bounds.xmin) / p),
            ymin: Math.max(this.Scale.Ymin, ((p + 1) * bounds.ymin - bounds.ymax) / p),
            ymax: Math.min(this.Scale.Ymax, ((p + 1) * bounds.ymax - bounds.ymin) / p)
        }
        return {
            X: outer.xmin,
            Y: outer.ymin,
            W: outer.xmax - outer.xmin,
            H: outer.ymax - outer.ymin
        }
    }
}

class MobRegion {
    constructor(json, zoneMap) {
        Object.assign(this, json);
        this.Zones = this.ZoneIDs.map(id => zoneMap[id]);
    }

    get ZoneInstances() {
        const zi = [];
        this.Zones.forEach(z => {
            for (let idx = 1; idx <= z.InsCount; idx++) {
                zi.push(new MobZoneWithInstance(z, this.Class, idx));
            }
        });
        return zi;
    }
}

class MarkCache {
    constructor(id, MobLocations) {
        this.id = `cache${id}`;
        this.MobLocations = MobLocations;
        this.load();
    }

    load() {
        this.cache = JSON.parse(CacheService.getProperty(this.id));
        if (this.cache == null || this.cache.marked == null || this.cache.marked.length != this.MobLocations.length) {
            this.cache = {
                resetTime: null,
                marked: (new Array(this.MobLocations.length)).fill(false)
            };
        }
        this.cache.sTotalCount =this.MobLocations.filter(x=> x.Flags[0]).length;
        this.cache.sUnmarkedCount = this.MobLocations.filter((x, i) => x.Flags[0] && !this.cache.marked[i]).length;
    }

    set(index, val) {
        this.load();
        this.cache.marked[index] = val;
        this.cache.sUnmarkedCount = this.MobLocations.filter((x, i) => x.Flags[0] && !this.cache.marked[i]).length;
        if (this.cache.sUnmarkedCount === this.cache.sTotalCount) {
            this.cache.resetTime = null;
        }
        else {
            if (!this.cache.resetTime) {
                this.cache.resetTime = new Date();
            }
        }
        CacheService.setProperty(this.id, JSON.stringify(this.cache));
    }

    get(index) {
        return this.cache.marked[index];
    }

    toggle(index) {
        const tempVal = !(this.get(index));
        this.set(index, tempVal);
    }

    reset() {
        this.cache.resetTime = null
        this.cache.marked = (new Array(this.MobLocations.length)).fill(false)
        this.MobLocations.forEach((v, i) => {
            this.cache.marked[i] = !v.Flags[0];
        });
        this.cache.sUnmarkedCount = this.MobLocations.filter((x, i) => x.Flags[0] && !this.cache.marked[i]).length;
        if (this.cache.sUnmarkedCount === this.cache.sTotalCount) {
            this.cache.resetTime = null;
        }
        else {
            this.cache.resetTime = new Date();
        }
        CacheService.setProperty(this.id, JSON.stringify(this.cache));
    }

    get progress() {
        return this.cache.sUnmarkedCount === this.cache.sTotalCount ? '' : `${this.cache.sUnmarkedCount}/${this.cache.sTotalCount}`;
    }

}

class MobZoneWithInstance extends MobZone {
    constructor(mobZone, clazz, instance) {
        super(mobZone);
        this.Class = clazz;
        this.Instance = instance;
        this.ID2 = `${this.ID}-${this.Instance}`;
        this.Cache = new MarkCache(this.ID2, this.MobLocations);
    }

    get NameWithInstance() {
        return this.InsCount > 1 ?
            `${this.Name}(${this.Instance})` :
            `${this.Name}`;
    }

    get NameWithInstanceProgress() {
        return this.Cache.progress != '' ?
            `${this.NameWithInstance} (${this.Cache.progress})` :
            `${this.NameWithInstance}`;
    }

}

class MobMapCanvas {
    constructor(canvas) {
        this.canvas = canvas
        this.zoneInstance = null;
        this.mouseState = {
            isDown: false,
            selectedIndex: -1
        }
        this.image = new Image();
        this.image.onload = () => {
            this.focusRegion()
            this.draw()
        }
        this.showInfo = false
        this.lastPos = { X: 0, Y: 0 }
        this.touchState = {
            isTouched: false,
            mode: 0,
            lastDistance: 0.0
        }
        this.canvas.addEventListener('mousedown', (evt) => {
            this.lastPos = {
                X: evt.layerX,
                Y: evt.layerY
            }
            console.log('mousedown', evt)
            this.mouseState.isDown = true
            this.mouseState.selectedIndex = this.getLocationIndex(this.lastPos)
            if (this.mouseState.selectedIndex != -1) {
                this.draw()
            }
        }, false);
        this.canvas.addEventListener('mouseup', (evt) => {
            this.lastPos = {
                X: evt.layerX,
                Y: evt.layerY
            }
            const selectedIndex = this.getLocationIndex(this.lastPos)
            if (selectedIndex != -1 && selectedIndex == this.mouseState.selectedIndex) {
                console.log("toggling location:", selectedIndex)
                if (this.zoneInstance) {
                    this.zoneInstance.Cache.toggle(selectedIndex);
                    this.draw()
                }
            }
            this.mouseState.isDown = false
            this.mouseState.selectedIndex = -1
        }, false);
        this.canvas.addEventListener('mouseout', () => {
            this.mouseState.isDown = false
            this.mouseState.selectedIndex = -1
        }, false);
        this.canvas.addEventListener('mousemove', (evt) => {
            var lastMappedPos = this.canvas2map(this.lastPos)
            this.lastPos = {
                X: evt.layerX,
                Y: evt.layerY
            }
            var mappedPos = this.canvas2map(this.lastPos)
            if (this.mouseState.isDown && this.mouseState.selectedIndex == -1) {
                var diffX = mappedPos.X - lastMappedPos.X;
                var diffY = mappedPos.Y - lastMappedPos.Y;
                this.setRegion(
                    this.region.X - diffX,
                    this.region.Y - diffY,
                    this.region.W,
                    this.region.H);
            }
            this.draw();
        }, false);

        var multiTouchHandler = (evt) => {
            evt.preventDefault();
            if (evt.touches.length === 0) {
                // touchend only
                const pos = {
                    X: evt.changedTouches[0].clientX - this.canvas.offsetLeft,
                    Y: evt.changedTouches[0].clientY - this.canvas.offsetTop
                };
                const selectedIndex = this.getLocationIndex(pos);
                if (selectedIndex != -1 && selectedIndex == this.touchState.selectedIndex) {
                    if (this.zoneInstance) {
                        this.zoneInstance.Cache.toggle(selectedIndex);
                        this.draw()
                    }
                }
                this.lastPos = {X:0, Y:0};
                this.touchState.lastDistance = 0.0;
            }
            else if (evt.touches.length === 1) {
                let pos = {
                    X: evt.touches[0].clientX - this.canvas.offsetLeft,
                    Y: evt.touches[0].clientY - this.canvas.offsetTop
                };
                if (evt.type == 'touchstart' || evt.type == 'touchend') {
                    this.draw();
                }
                else if (evt.type == 'touchmove') {
                    let lastMappedPos = this.canvas2map(this.lastPos);
                    let mappedPos = this.canvas2map(pos);
                    let diffX = mappedPos.X - lastMappedPos.X;
                    let diffY = mappedPos.Y - lastMappedPos.Y;
                    this.setRegion(this.region.X-diffX, this.region.Y-diffY, this.region.W, this.region.H);
                    this.draw()
                }
                this.touchState.selectedIndex = this.getLocationIndex(pos)
                if (this.touchState.selectedIndex != -1) {
                    this.draw();
                }
                this.lastPos = pos;
                this.touchState.lastDistance = 0.0;
            }
            else if (evt.touches.length === 2) {
                let pos0 = {
                    X: evt.touches[0].clientX - this.canvas.offsetLeft,
                    Y: evt.touches[0].clientY - this.canvas.offsetTop
                };
                let pos1 = {
                    X: evt.touches[1].clientX - this.canvas.offsetLeft,
                    Y: evt.touches[1].clientY - this.canvas.offsetTop
                };
                let pos = {
                    X: (pos0.X + pos1.X) / 2,
                    Y: (pos0.Y + pos1.Y) / 2
                }
                let distance = Math.sqrt(
                    (pos1.X-pos0.X) * (pos1.X-pos0.X) + 
                    (pos1.y-pos0.Y) * (pos1.y-pos0.Y));
                let scale = 1.0;
                if (evt.type == 'touchstart' || evt.type == 'touchend') {
                    this.draw();
                }
                else if (evt.type == 'touchmove') {
                    scale = this.touchState.lastDistance / distance;
                    let lastMappedPos = this.canvas2map(this.lastPos);
                    let mappedPos = this.canvas2map(pos);
                    let diffX = mappedPos.X - lastMappedPos.X;
                    let diffY = mappedPos.Y - lastMappedPos.Y;
                    let newRegion = getZoomedRegion(pos, scale);
                    this.setRegion(newRegion.X-diffX, newRegion.Y-diffY, newRegion.W, newRegion.H);
                    this.draw()
                }
                this.lastPos = pos;
                this.touchState.lastDistance = distance;
            }
        }
        this.canvas.addEventListener('touchstart', multiTouchHandler, false);
        this.canvas.addEventListener('touchend', multiTouchHandler, false);
        this.canvas.addEventListener('touchmove', multiTouchHandler, false);

        const getZoomedRegion = (centerPos, scale) => {
            var mappedPos = this.canvas2map(centerPos);
            var newx = mappedPos.X * (1.0 - scale) + this.region.X * scale;
            var newy = mappedPos.Y * (1.0 - scale) + this.region.Y * scale;
            return {
                X: newx,
                Y: newy,
                W: this.region.W * scale,
                H: this.region.H * scale
            }
        }

        const scaleFactor = 1.018;
        const handleScroll = (evt) => {
            var delta = evt.wheelDelta ? -evt.wheelDelta / 40 : evt.detail ? evt.detail : 0;
            if (delta) {
                const scale = Math.pow(scaleFactor, delta);
                const newRegion = getZoomedRegion(this.lastPos, scale)
                this.setRegion(newRegion.X, newRegion.Y, newRegion.W, newRegion.H)
                this.draw()
            }
            return evt.preventDefault() && false;
        }
        canvas.addEventListener('DOMMouseScroll', handleScroll, false);
        canvas.addEventListener('mousewheel', handleScroll, false);

    }

    setArea(zoneInstance) {
        this.zoneInstance = zoneInstance
        this.areaRatio = this.canvas.width / this.canvas.height;
        //this.lastPos = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        this.lastPos = { X: 0, Y: 0 };
        console.log('setArea', this.lastPos)
        //this.image.src = `images/${this.mapDef.map}`;
        this.image.src = `https://res.cloudinary.com/lanaklein14/image/upload/v1567340018/small/${this.zoneInstance.Key}.jpg`
    }

    setSize(newWidth, newHeight) {
        // ここで古いcanvas.w, hのキャッシュと比べてregionの引数を考え直す
        var old = { w: this.canvas.width, h: this.canvas.height };
        if (this.canvas.width != newWidth) {
            this.canvas.width = newWidth;
        }
        if (this.canvas.height != newHeight) {
            this.canvas.height = newHeight;
        }
        if (this.region) {
            this.setRegion(this.region.X, this.region.Y, this.region.W * this.canvas.width / old.w, this.region.H * this.canvas.height / old.h);
        }
    }

    focusRegion() {
        if (!this.zoneInstance) {
            return
        }
        const region = this.zoneInstance.getFocusRegion()
        this.setRegion(region.X, region.Y, region.W, region.H);
    }

    getLocationIndex(loc) {
        if (!this.zoneInstance) {
            return -1
        }

        let minDistance = 10000.0
        let minIndex = -1
        this.zoneInstance.MobLocations.forEach((v, i) => {
            var canvasPos = this.map2canvas(v);
            var distance = Math.sqrt((canvasPos.X-loc.X)*(canvasPos.X-loc.X)+
                                    (canvasPos.Y-loc.Y)*(canvasPos.Y-loc.Y));
            if (distance < minDistance) {
                minDistance = distance
                minIndex = i
            }
        })
        return (minDistance < 20.0) ? minIndex : -1;
    }

    setRegion(x, y, w, h) {
        if (!this.zoneInstance) {
            return
        }
        const areaScale = this.zoneInstance.Scale
        const areaRatio = this.canvas.width / this.canvas.height;
        if (w / h > areaRatio) {
            const midy = y + (h / 2.0);
            h = w / areaRatio;
            y = midy - (h / 2.0);
        }
        else if (w / h < areaRatio) {
            const midx = x + (w / 2.0);
            w = h * areaRatio;
            x = midx - (w / 2.0);
        }
        this.region = { X: x, Y: y, W: w, H: h };
        //console.log("region", this.region);
        //なるべく枠に収まるように調整
        this.region.X = Math.max(Math.min(this.region.X, areaScale.Xmax - this.region.W), areaScale.Xmin);
        this.region.Y = Math.max(Math.min(this.region.Y, areaScale.Ymax - this.region.H), areaScale.Ymin);
        //両方とも余白を超える場合、余白の少ない方で倍率調整
        var f = Math.min((this.region.X + this.region.W) / (areaScale.Xmax), (this.region.Y + this.region.H) / (areaScale.Ymax));
        //console.log("factor", f);
        if (f > 1.0) {
            this.region.W = this.region.W / f,
                this.region.H = this.region.H / f
        }
    }

    draw() {
        var ctx = this.canvas.getContext('2d');
        if (ctx && this.zoneInstance) {
            const areaScale = this.zoneInstance.Scale
            var areaRegion = {
                X: areaScale.Xmin,
                Y: areaScale.Ymin,
                W: areaScale.Xmax - areaScale.Xmin,
                H: areaScale.Ymax - areaScale.Ymin
            };
            //console.log("areaRegion", areaRegion);

            var imageRegion = {
                X: this.image.width * (this.region.X - areaRegion.X) / areaRegion.W,
                Y: this.image.height * (this.region.Y - areaRegion.Y) / areaRegion.H,
                W: this.image.width * this.region.W / areaRegion.W,
                H: this.image.height * this.region.H / areaRegion.H
            }
            //console.log("imageRegion", imageRegion);

            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            ctx.drawImage(this.image, imageRegion.X, imageRegion.Y, imageRegion.W, imageRegion.H, 0, 0, this.canvas.width, this.canvas.height);
            //ctx.drawImage(this.image, 0, 0);
            this.drawMobPos(ctx);
            this.drawRebellion(ctx);
            this.drawCopyRight(ctx);
        }
    }

    drawMobPos(ctx) {
        if (this.showInfo) {
            ctx.fillStyle = "#770033";
            const point = this.canvas2map(this.lastPos)
            let text = '(' + Math.round(10 * point.X) / 10 + ', ' + Math.round(10 * point.Y) / 10 + ')';
            ctx.font = "bold 20px 'ＭＳ Ｐゴシック'";
            ctx.fillText(text, 30, 30);
        }

        const nearIndex = this.getLocationIndex(this.lastPos)

        this.zoneInstance.MobLocations.forEach((v, i) => {
            const radius = nearIndex == i ? 15 : 9
            const isMarked = this.zoneInstance.Cache.get(i)
            this.drawSpawnPoint(ctx, this.zoneInstance.Type, v, radius, isMarked)
        })
    }

    drawRebellion(ctx) {
        if (this.zoneInstance.MobLocations2) {
            this.zoneInstance.MobLocations2.forEach(v => {
                this.drawRebellionPoint(ctx, v)
            })
        }
    }

    drawSpawnPoint(ctx, type, spawnPoint, radius, isMarked) {
        var mappedPos = this.map2canvas(spawnPoint);

        ctx.save();
        ctx.translate(mappedPos.X, mappedPos.Y);
        let trans = isMarked ? '66' : 'ff';
        var arcs = [];
        if (type === 0) {
            if (spawnPoint.Flags[0]) { arcs.push({ fillStyle: "#f44336"+trans }); }
            if (spawnPoint.Flags[1]) { arcs.push({ fillStyle: "#ffeb3b"+trans }); }
            if (spawnPoint.Flags[2]) { arcs.push({ fillStyle: "#2196f3"+trans }); }
        }
        else { //type === 1
            if (spawnPoint.Flags[0]) { arcs.push({ fillStyle: "#f44336"+trans }); }
            if (spawnPoint.Flags[1]) { arcs.push({ fillStyle: "#ffeb3b"+trans }); }
            if (spawnPoint.Flags[2]) { arcs.push({ fillStyle: "#8bc34a"+trans }); }
            if (spawnPoint.Flags[3]) { arcs.push({ fillStyle: "#2196f3"+trans }); }
            if (spawnPoint.Flags[4]) { arcs.push({ fillStyle: "#9c27b0"+trans }); }
        }
        switch (arcs.length) {
            case 1:
                arcs[0].radStart = 0.0;
                arcs[0].radEnd = 2 * Math.PI;
                break;
            case 2:
                arcs[0].radStart = Math.PI;
                arcs[0].radEnd = 2 * Math.PI;
                arcs[1].radStart = 0.0;
                arcs[1].radEnd = Math.PI;
                break;
            case 3:
                arcs[0].radStart = Math.PI / 6.0 * 7.0;
                arcs[0].radEnd = Math.PI / 6.0 * 11.0;
                arcs[1].radStart = Math.PI / 6.0 * 3.0;
                arcs[1].radEnd = Math.PI / 6.0 * 7.0;
                arcs[2].radStart = Math.PI / 6.0 * 11.0;
                arcs[2].radEnd = Math.PI / 6.0 * 3.0;
                break;
            case 4:
                arcs[0].radStart = Math.PI / 4.0 * 5.0;
                arcs[0].radEnd = Math.PI / 4.0 * 7.0;
                arcs[1].radStart = Math.PI / 4.0 * 3.0;
                arcs[1].radEnd = Math.PI / 4.0 * 5.0;
                arcs[2].radStart = Math.PI / 4.0 * 7.0;
                arcs[2].radEnd = Math.PI / 4.0 * 1.0;
                arcs[3].radStart = Math.PI / 4.0 * 1.0;
                arcs[3].radEnd = Math.PI / 4.0 * 3.0;
                break;
            case 5:
                arcs[0].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 2.0;
                arcs[0].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 3.0;
                arcs[1].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 1.0;
                arcs[1].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 2.0;
                arcs[2].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 3.0;
                arcs[2].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 4.0;
                arcs[3].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 0.0;
                arcs[3].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 1.0;
                arcs[4].radStart = (Math.PI / 2) + (Math.PI * 2 / 5) * 4.0;
                arcs[4].radEnd = (Math.PI / 2) + (Math.PI * 2 / 5) * 0.0;
                break;
        }
        ctx.strokeStyle = "#000000"+trans;
        arcs.forEach(function (v) {
            ctx.beginPath();
            if (arcs.length != 1) {
                ctx.moveTo(0, 0);
            }
            ctx.fillStyle = v.fillStyle
            ctx.arc(0, 0, radius, v.radStart, v.radEnd, false);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        })
        if (isMarked) {
            ctx.lineWidth = 5;
            ctx.strokeStyle = "#000000";
            ctx.beginPath();
            ctx.moveTo(-5, -3);
            ctx.lineTo(0, 2);
            ctx.lineTo(10, -8);
            ctx.stroke();

            ctx.lineWidth = 3;
            ctx.strokeStyle = "#00ff00";
            ctx.beginPath();
            ctx.moveTo(-4, -2);
            ctx.lineTo(0, 2);
            ctx.lineTo(9, -7);
            ctx.stroke();
        }

        if (this.showInfo && arcs.length > 0) {
            ctx.fillStyle = "#330033";
            let text = '(' + Math.round(10 * spawnPoint.X) / 10 + ', ' + Math.round(10 * spawnPoint.Y) / 10 + ')';
            ctx.font = "bold 12px 'ＭＳ Ｐゴシック'";
            ctx.fillText(text, -30, 24);
        }

        ctx.restore();
    }

    drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius)
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.fill();
    }

    drawRebellionPoint(ctx, spawnPoint) {
        var mappedPos = this.map2canvas(spawnPoint);

        ctx.save();
        ctx.translate(mappedPos.X, mappedPos.Y);
        ctx.strokeStyle = "#000000ff";
        ctx.fillStyle = "#607d8bff";
        if (spawnPoint.Flags[0]) {
            this.drawStar(ctx, 0, 0, 6, 10, 6);
        }
        else if (spawnPoint.Flags[1]) {
            ctx.beginPath();
            ctx.moveTo(-10, 0);
            ctx.lineTo(0, 10);
            ctx.lineTo(10, 0);
            ctx.lineTo(0, -10);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        if (this.showInfo) {
            ctx.fillStyle = "#330033";
            let text = '(' + Math.round(10 * spawnPoint.X) / 10 + ', ' + Math.round(10 * spawnPoint.Y) / 10 + ')';
            ctx.font = "bold 12px 'ＭＳ Ｐゴシック'";
            ctx.fillText(text, -30, 24);
        }

        ctx.restore();
    }

    drawCopyRight(ctx) {
        const copyright = 'Copyright (C) 2010 - 2020 SQUARE ENIX CO., LTD. All Rights Reserved.'
        ctx.fillStyle = "#330033";
        ctx.font = "11px 'ＭＳ Ｐゴシック'";
        ctx.fillText(copyright, 10, this.canvas.height - 10);
    }


    canvas2map(point) {
        return {
            X: this.region.X + (point.X / this.canvas.width) * this.region.W,
            Y: this.region.Y + (point.Y / this.canvas.height) * this.region.H
        };
    }

    map2canvas(point) {
        return {
            X: (point.X - this.region.X) * this.canvas.width / this.region.W,
            Y: (point.Y - this.region.Y) * this.canvas.height / this.region.H
        };
    }
}  



class ActiveZoneInstances {
    constructor() {
        this._activeZoneInstances = [];
    }


}



class MobMapService {
    constructor() {
        this._showAll = CacheService.getClientProperty("showAll") == "true";
        this._zones = zones.map(z => new MobZone(z));
        this._zoneMap = {};
        this.zones.forEach(z => this._zoneMap[z.ID] = z);

        this._regions = regions.map(r => new MobRegion(r, this._zoneMap));
        this._zoneInstance = this._regions[0].ZoneInstances[0]
        this._openedZones = [];
        this._loadTabState();
        this.tab = 0;
    }

    get showAll() {
        return this._showAll;
    }

    set showAll(flag) {
        this._showAll = flag;
        CacheService.setClientProperty("showAll", flag.toString());
    }

    get zones() {
        return this._zones;
    }

    get regions() {
        return this._regions;
    }

    get openedZones() {
        return this._openedZones;
    }

    getZone(zoneID) {
        return this._zoneMap[zoneID];
    }


    getIndex(zoneID) {
        return 1;
    }

    openZone(zoneWithInstance) {
        const idx = this._openedZones.findIndex(z=>z.NameWithInstance == zoneWithInstance.NameWithInstance);
        if (idx >= 0) {
            return;
            //skip
            //this._openedZones.splice(idx, 1);
        }
        if (this._openedZones.length > 4) {
            this._openedZones.shift();
        }
        this._openedZones.push(zoneWithInstance);
        console.log(this._openedZones.map(z=>z.NameWithInstance).join(','));
        this._saveTabState();
    }

    closeZone(zoneWithInstance) {
        const idx = this._openedZones.findIndex(z=>z.NameWithInstance == zoneWithInstance.NameWithInstance);
        if (idx >= 0) {
            this._openedZones.splice(idx, 1);
        }
        console.log(this._openedZones.map(z=>z.NameWithInstance).join(','));
        this._saveTabState();
    }

    _saveTabState() {
        const tabState = this._openedZones.map(z => z.ID2);
        CacheService.setClientProperty("tab", JSON.stringify(tabState));
    }

    _loadTabState() {
        const json = CacheService.getClientProperty("tab");
        try {
            let allZoneInstances = [];
            this.regions.forEach(r=>allZoneInstances = allZoneInstances.concat(r.ZoneInstances));
            const tabStrings = JSON.parse(json);
            this._openedZones = []
            tabStrings.forEach(text=> {
                const targetZoneInstance = allZoneInstances.find(z=>z.ID2 == text);
                if (targetZoneInstance) {
                    this._openedZones.push(targetZoneInstance);
                }
            });
            this._saveTabState();
        }
        catch(e) {
            console.error(e);
        }
    }

    get zoneInstance() {
        return this._zoneInstance;
    }

    set zoneInstance(inst) {
        this._zoneInstance = inst;
    }
}

