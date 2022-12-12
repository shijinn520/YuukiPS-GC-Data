const path = require("path");
const fs = require("fs");
const jj = fs.readFileSync("s.json");
const se = JSON.parse(jj);
var count = 1;
se.shop.goods_list.forEach(function (x) {
    var str = "" + count
    var pad = "000"
    var ans = pad.substring(0, pad.length - str.length) + str;

    console.log("203"+ans+" 1004 201 1 100 100 3 1 2019-12-01 00:00:00 2035-01-01 00:00:00 1 1 99 1");
    count++;
});

/*

{
        "begin_time": 1575129600,
        "bought_num": 0,
        "buy_limit": 0,
        "cost_item_list": [],
        "disable_type": 0,
        "discount_begin_time": 0,
        "discount_end_time": 0,
        "discount_id": 0,
        "end_time": 2051193600,
        "goods_id": 204042,
        "goods_item": {
          "count": 1,
          "item_id": 100075
        },
id_unik (1) tipe_toko (2)  id_item  total
203001	1004       100075	1	   60	100	3	1 2019-12-01 00:00:00	2035-01-01 00:00:00	 1	1	99	1

CommodityID (1) StoreType (2) ItemID (3) Rotation Commodity ID Corresponding Item Quantity Consuming Gold Coins Consuming Crystals Consuming Genesis Crystals [Consumable Items] 1ID [Consumable Items] 1 Quantity [Consumable Items] 2ID [Consumable Items] 2 Quantities [Consumable Items] 3ID [ Consumable Items] 3 Quantities [Consumable Items] 4 ID [Consumable Items] 4 Quantities Purchase Limit Refresh Type Refresh Parameters Preview Days in Advance Shelf Time Unshelf Time Lifetime Purchase Limit Preconditions Precondition Parameters Condition Parameter 1 Condition Parameter 2 Precondition Shield Display Minimum Visible Level Minimum Team Level Maximum Team Level Sorting Level Secondary Tab ID n Select 1 Group ID Display Platform

*/