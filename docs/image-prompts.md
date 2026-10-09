# 商品圖 AI 生成 Prompt

共 23 張。每張都用同一段「共用風格」加上該商品的「商品描述」組成完整 prompt，確保背景、光線、角度一致。

---

## 操作步驟

### 第 1 步：選一個生圖工具

任何一個都可以，建議從上往下選：

| 工具 | 怎麼用 | 備註 |
| --- | --- | --- |
| ChatGPT（App 或網頁） | 直接把 prompt 貼進對話，說「請生成這張圖」 | 免費版也能生，但每天有張數限制。Plus 方案最順 |
| Google Gemini | 同上 | 免費 |
| Midjourney | 在 Discord 輸入 `/imagine` 再貼 prompt，結尾加 `--ar 1:1 --style raw` | 需付費 |

### 第 2 步：先生第 1 張當「風格基準」

1. 複製下面「共用風格」整段，接著貼上 **S01 草本全效皂** 的商品描述，一起送出。
2. 看結果是否符合：米白背景、柔光、正方形、沒有文字、只有一個商品。
3. 不滿意就回覆「背景再乾淨一點」或「光線再柔和一點」，直到你喜歡為止。
4. 滿意後，**同一個對話**繼續生其他張，並在每個 prompt 前加一句「用跟上一張完全一樣的背景、光線和角度」，風格才會一致。

### 第 3 步：依序生完 23 張

- 一張一張來，每張生完就用下面表格的「檔名」存檔。
- 若某張生出文字、多個商品或奇怪的手，就回覆「移除文字，只保留一個商品」重生。
- 禮盒類最容易跑掉，多試幾次沒關係。

### 第 4 步：存檔與命名

- 格式：PNG 或 JPG 都可以，我會統一轉成 WebP。
- 尺寸：至少 1024×1024，正方形最好。長方形我會幫你裁。
- 檔名請照下面表格，例如 `S01-herbal-complete-soap.png`。

### 第 5 步：把圖給我

二選一：
- **直接傳到這個對話**：一次 5 張左右，附上檔名。
- **上傳到 GitHub**：放進 repo 的 `incoming/` 資料夾（我會先建好），用 GitHub 網頁的「Add file → Upload files」。

我收到後會裁成正方形、轉 WebP、壓縮、放進網站並加上 alt 文字。

---

## 共用風格（每張都要貼）

```
Minimalist product photography. A single product centered on a seamless warm off-white studio background (#F7F4EE), soft diffused daylight from the upper left, gentle soft shadow beneath the product, slightly elevated 30-degree camera angle, shallow depth of field, clean and calm composition with generous empty space around the product, muted natural colors, no text, no labels, no logos, no props, no hands, no watermark. Square 1:1 format, high resolution, photorealistic.
```

中文說明：極簡商品攝影，單一商品置中，暖米白無縫背景，左上柔光，微微俯角 30 度，大量留白，不要有文字、標籤、Logo、道具、手。

---

## 檔名與商品描述

### 手工皂（14 張）

所有手工皂共同點：**圓形皂體、直徑約 7 公分、厚約 2 公分、邊緣圓潤，皂面有淺淺的手工壓印樹形浮雕**。

| 檔名 | 商品 | 商品描述（接在共用風格後面） |
| --- | --- | --- |
| `S01-herbal-complete-soap` | 草本全效皂 | A round handmade cold-process soap bar, deep charcoal black color with a matte natural texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S02-herbal-whitening-soap` | 草本嫩白皂 | A round handmade cold-process soap bar, light sand beige color with a smooth creamy texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S03-herbal-spot-soap` | 草本祛斑皂 | A round handmade cold-process soap bar, warm dark brown color like cocoa with a matte texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S04-herbal-youth-soap` | 草本青春皂 | A round handmade cold-process soap bar, very dark plum purple color almost black with a matte texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S05-horse-oil-soap` | 頂級日本馬油皂 | A round handmade cold-process soap bar, pale ivory cream color with a smooth waxy texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S06-feminine-care-soap` | 女性專用 草本私密呵護皂 | A round handmade cold-process soap bar, pure soft white color with a smooth delicate texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S07-baby-soap` | 草本寶貝皂 | A round handmade cold-process soap bar, rich dark coffee brown color with a smooth matte texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S08-soap-king` | 草本皂王 | A round handmade cold-process soap bar, soft olive yellow-green color with a natural slightly translucent texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S09-royal-argan-soap` | 皇室御用皂 | A round handmade cold-process soap bar, warm light caramel brown color with a smooth texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S10-laundry-soap` | 天然純萃高級衣物皂 | A round handmade cold-process laundry soap bar, soft lavender purple color with a matte texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S11-essential-oil-soap-innocence` | 草本精油皂 · 純真年代 | A round handmade cold-process soap bar, pure milky white color with a smooth creamy texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S12-essential-oil-soap-gardenia` | 草本精油皂 · 梔子花開 | A round handmade cold-process soap bar, soft pale yellow color like gardenia pollen with a smooth texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S13-essential-oil-soap-peach` | 草本精油皂 · 桃花滿園 | A round handmade cold-process soap bar, soft blush pink color like peach blossom with a smooth texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |
| `S14-essential-oil-soap-lavender` | 草本精油皂 · 紫衣佳人 | A round handmade cold-process soap bar, soft lilac purple color with a smooth texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges. |

### 植物調理（3 張）

| 檔名 | 商品 | 商品描述 |
| --- | --- | --- |
| `P01-rose-essence-oil` | 玫瑰保養精華油 30ml | A small 30 ml amber glass dropper bottle of facial oil with a plain black dropper cap, the golden-rose colored oil visible through the glass, standing upright, no label. |
| `P02-hokkaido-horse-oil-cream` | 北海道限定精純馬油霜 100ml | A round 100 ml frosted white glass cream jar with a brushed silver screw lid, standing upright, no label. |
| `P03-honey-silk-mask` | 蜂蜜嫩白蠶絲面膜 | A flat rectangular sheet mask sachet in matte pearl white, lying at a slight angle, with one folded thin white silk sheet mask partially resting on top, no text on the sachet. |

### 居家樂活（2 張）

| 檔名 | 商品 | 商品描述 |
| --- | --- | --- |
| `B01-laundry-soap-flakes` | 草本植萃洗衣皂絲 600g | A clear stand-up resealable pouch filled with fine ivory-white natural soap flakes, standing upright, a small loose pile of soap flakes in front of it, no label. |
| `B02-herbal-shampoo` | 草本植萃洗髮露 400ml | A tall 400 ml deep green pump bottle of shampoo with a matte black pump dispenser, standing upright, no label. |

### 精緻禮盒（4 張）

| 檔名 | 商品 | 商品描述 |
| --- | --- | --- |
| `G01-tea-gift-box` | 台灣茶香禮盒組(二入) | An elegant deep red rectangular gift box with a subtle brocade texture, lid slightly open to reveal two matte gold tea tins nestled in cream silk lining, no text on the box. |
| `G02-tea-soap-gift-box` | 台灣茶香+手工皂禮盒 | An open rectangular gift box with cream silk lining containing one matte gold tea tin on the left and two round handmade soap bars on the right, one charcoal black and one ivory cream, each with a subtle embossed tree emblem, no text. |
| `G03-wooden-soap-gift-box` | 四季花開 木製精油手工皂禮盒(四入) | An open natural light wood gift box containing four round handmade soap bars arranged in a 2 by 2 grid, colored milky white, pale yellow, blush pink and lilac purple, each with a subtle embossed tree emblem, no text. |
| `G04-three-soap-gift-box` | 台灣三入禮盒 | An open white rectangular gift box tied with a thin red ribbon, containing three small round handmade soap bars in a row, colored ivory cream, pale yellow and lilac purple, each with a subtle embossed tree emblem, no text. |

### 首頁主視覺（1 張，選配）

| 檔名 | 用途 | 商品描述 |
| --- | --- | --- |
| `hero-herbs` | 首頁橫幅 | Minimalist flat lay of dried Chinese herbs and botanicals: licorice root slices, dried gardenia, chrysanthemum, white poria, a few green leaves, arranged loosely and sparsely on a seamless warm off-white background (#F7F4EE), soft diffused daylight from the upper left, generous empty space in the center-left for text, muted natural colors, no text, no hands, no watermark. Wide 16:9 format, high resolution, photorealistic. |

這張不是商品圖，不用共用風格那段，直接貼上面整句。Midjourney 請把結尾換成 `--ar 16:9 --style raw`。

---

## 完整範例（S01）

把這整段貼進 ChatGPT 或 Gemini：

```
Minimalist product photography. A single product centered on a seamless warm off-white studio background (#F7F4EE), soft diffused daylight from the upper left, gentle soft shadow beneath the product, slightly elevated 30-degree camera angle, shallow depth of field, clean and calm composition with generous empty space around the product, muted natural colors, no text, no labels, no logos, no props, no hands, no watermark. Square 1:1 format, high resolution, photorealistic.

A round handmade cold-process soap bar, deep charcoal black color with a matte natural texture, a subtle embossed tree emblem on top, about 7 cm in diameter and 2 cm thick with softly rounded edges.
```

---

## 之後要微調或重生

- 顏色不對：改「商品描述」裡的顏色字眼，其餘不動。
- 整體風格要換：只改「共用風格」那段，然後 23 張全部重生，才會一致。
- 網站端替換圖片的步驟寫在 `README.md`。
