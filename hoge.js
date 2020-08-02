const aa = [
  {
    "ID": 30,
    "Name": "Middle La Noscea",
    "Name_ja": "中央ラノシア"
  },
  {
    "ID": 31,
    "Name": "Lower La Noscea",
    "Name_ja": "低地ラノシア",
    "Filter": true
  },
  {
    "ID": 32,
    "Name": "Eastern La Noscea",
    "Name_ja": "東ラノシア",
    "Filter": true
  },
  {
    "ID": 33,
    "Name": "Western La Noscea",
    "Name_ja": "西ラノシア"
  },
  {
    "ID": 34,
    "Name": "Upper La Noscea",
    "Name_ja": "高地ラノシア",
    "Filter": true
  },
  {
    "ID": 42,
    "Name": "Western Thanalan",
    "Name_ja": "西ザナラーン"
  },
  {
    "ID": 43,
    "Name": "Central Thanalan",
    "Name_ja": "中央ザナラーン",
    "Filter": true
  },
  {
    "ID": 44,
    "Name": "Eastern Thanalan",
    "Name_ja": "東ザナラーン"
  },
  {
    "ID": 45,
    "Name": "Southern Thanalan",
    "Name_ja": "南ザナラーン"
  },
  {
    "ID": 46,
    "Name": "Northern Thanalan",
    "Name_ja": "北ザナラーン"
  },
  {
    "ID": 54,
    "Name": "Central Shroud",
    "Name_ja": "黒衣森：中央森林",
    "Filter": true
  },
  {
    "ID": 55,
    "Name": "East Shroud",
    "Name_ja": "黒衣森：東部森林"
  },
  {
    "ID": 56,
    "Name": "South Shroud",
    "Name_ja": "黒衣森：南部森林",
    "Filter": true
  },
  {
    "ID": 57,
    "Name": "North Shroud",
    "Name_ja": "黒衣森：北部森林"
  },
  {
    "ID": 63,
    "Name": "Coerthas Central Highlands",
    "Name_ja": "クルザス中央高地"
  },
  {
    "ID": 67,
    "Name": "Mor Dhona",
    "Name_ja": "モードゥナ"
  },
  {
    "ID": 350,
    "Name": "Outer La Noscea",
    "Name_ja": "外地ラノシア"
  },
  {
    "ID": 2000,
    "Name": "The Dravanian Forelands",
    "Name_ja": "高地ドラヴァニア"
  },
  {
    "ID": 2001,
    "Name": "The Dravanian Hinterlands",
    "Name_ja": "低地ドラヴァニア"
  },
  {
    "ID": 2002,
    "Name": "The Churning Mists",
    "Name_ja": "ドラヴァニア雲海"
  },
  {
    "ID": 2100,
    "Name": "The Sea of Clouds",
    "Name_ja": "アバラシア雲海"
  },
  {
    "ID": 2101,
    "Name": "Azys Lla",
    "Name_ja": "アジス・ラー"
  },
  {
    "ID": 2200,
    "Name": "Coerthas Western Highlands",
    "Name_ja": "クルザス西部高地",
    "Filter": true
  },
  {
    "ID": 2406,
    "Name": "The Fringes",
    "Name_ja": "ギラバニア辺境地帯"
  },
  {
    "ID": 2407,
    "Name": "The Peaks",
    "Name_ja": "ギラバニア山岳地帯"
  },
  {
    "ID": 2408,
    "Name": "The Lochs",
    "Name_ja": "ギラバニア湖畔地帯"
  },
  {
    "ID": 2409,
    "Name": "The Ruby Sea",
    "Name_ja": "紅玉海",
    "Filter": true
  },
  {
    "ID": 2410,
    "Name": "Yanxia",
    "Name_ja": "ヤンサ",
    "Filter": true
  },
  {
    "ID": 2411,
    "Name": "The Azim Steppe",
    "Name_ja": "アジムステップ",
    "Filter": true
  },
  {
    "ID": 2953,
    "Name": "Lakeland",
    "Name_ja": "レイクランド"
  },
  {
    "ID": 2954,
    "Name": "Kholusia",
    "Name_ja": "コルシア島"
  },
  {
    "ID": 2955,
    "Name": "Amh Araeng",
    "Name_ja": "アム・アレーン",
    "Filter": true
  },
  {
    "ID": 2956,
    "Name": "Il Mheg",
    "Name_ja": "イル・メグ",
    "Filter": true
  },
  {
    "ID": 2957,
    "Name": "The Rak'tika Greatwood",
    "Name_ja": "ラケティカ大森林"
  },
  {
    "ID": 2958,
    "Name": "The Tempest",
    "Name_ja": "テンペスト"
  }
];

const fs = require('fs');

const jsonObject = JSON.parse(fs.readFileSync('./temp2.json', 'utf8'));

aa.forEach(z=>{
  const tmp = jsonObject[z.Name];
  z.Type = tmp.type;
  z.Scale = tmp.scale;
  z.Mobs = tmp.mobs;
  z.MobLocations = tmp.mobLocations;
  if (z.Type == 2) {
    z.Mobs2 = tmp.mobs2;
    z.MobLocations2 = tmp.mobLocations2;
  }
});

fs.writeFileSync('./out.json', JSON.stringify(aa, null, 4), 'utf8');