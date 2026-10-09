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

## 品牌壓印參考圖（手工皂與含皂禮盒都要附）

| 檔案 | 內容 |
| --- | --- |
| `docs/design/logo-reference.jpg` | 原站首頁的白色 Logo：蘋果樹 + 弧形 "Apple Manor" + 下方標語 |
| `docs/design/soap-emboss-reference.jpg` | 原站實品皂的壓印特寫：凸起的 "Apple Manor" 手寫字 + 蘋果樹，**沒有**下方標語 |

生圖時請把這兩張一起附在 ChatGPT 對話裡，prompt 裡寫「exactly like the attached reference images」。皂上只要「Apple Manor」+ 樹，不要下方那行 "Absolutely Natural…" 標語，字太小太長 AI 幾乎一定會拼錯。

**文字拼錯怎麼辦**：AI 生圖對短字通常沒問題，但偶爾會把 Apple Manor 拼成 Aple Manoe 之類。看到就回覆：

```
Regenerate. Keep everything identical, but the embossed text must read exactly "Apple Manor", spelled correctly, nothing else.
```

## 第 2 張以後的皂：接續寫法

第 1 張（S01）滿意後，在**同一個對話**裡，其餘的皂不用再貼整段，只要這樣寫，再把顏色換掉：

```
Same soap, same embossed "Apple Manor" tree emblem, same background, lighting, camera angle and composition as the previous image. Only change the soap color to: light sand beige with a smooth creamy texture.
```

各款皂的顏色句子請直接從下方表格的商品描述裡複製（color 那一段）。

---

## 共用風格（每張都要貼）

```
Minimalist product photography. A single product centered on a seamless warm off-white studio background (#F7F4EE), soft diffused daylight from the upper left, gentle soft shadow beneath the product, slightly elevated 30-degree camera angle, shallow depth of field, clean and calm composition with generous empty space around the product, muted natural colors, no labels, no packaging text, no props, no hands, no watermark. The only text allowed is the brand emblem embossed on the product itself, as described below. Square 1:1 format, high resolution, photorealistic.
```

中文說明：極簡商品攝影，單一商品置中，暖米白無縫背景，左上柔光，微微俯角 30 度，大量留白，不要有標籤、包裝文字、道具、手。唯一允許的文字是商品本體上壓印的品牌圖騰。

---

## 檔名與商品描述

### 手工皂（14 張）

所有手工皂共同點：**圓形皂體、直徑約 7 公分、厚約 2 公分、邊緣圓潤。皂面有凸起的品牌壓印：蘋果樹 + 弧形手寫字 "Apple Manor"**，生圖時要附上參考圖（見下方「品牌壓印參考圖」）。

| 檔名 | 商品 | 商品描述（接在共用風格後面） |
| --- | --- | --- |
| `S01-herbal-complete-soap` | 草本全效皂 | A round handmade cold-process soap bar, deep charcoal black color with a matte natural texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S02-herbal-whitening-soap` | 草本嫩白皂 | A round handmade cold-process soap bar, light sand beige color with a smooth creamy texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S03-herbal-spot-soap` | 草本祛斑皂 | A round handmade cold-process soap bar, warm dark brown color like cocoa with a matte texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S04-herbal-youth-soap` | 草本青春皂 | A round handmade cold-process soap bar, very dark plum purple color almost black with a matte texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S05-horse-oil-soap` | 頂級日本馬油皂 | A round handmade cold-process soap bar, pale ivory cream color with a smooth waxy texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S06-feminine-care-soap` | 女性專用 草本私密呵護皂 | A round handmade cold-process soap bar, pure soft white color with a smooth delicate texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S07-baby-soap` | 草本寶貝皂 | A round handmade cold-process soap bar, rich dark coffee brown color with a smooth matte texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S08-soap-king` | 草本皂王 | A round handmade cold-process soap bar, soft olive yellow-green color with a natural slightly translucent texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S09-royal-argan-soap` | 皇室御用皂 | A round handmade cold-process soap bar, warm light caramel brown color with a smooth texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S10-laundry-soap` | 天然純萃高級衣物皂 | A round handmade cold-process laundry soap bar, soft lavender purple color with a matte texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S11-essential-oil-soap-innocence` | 草本精油皂 · 純真年代 | A round handmade cold-process soap bar, pure milky white color with a smooth creamy texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S12-essential-oil-soap-gardenia` | 草本精油皂 · 梔子花開 | A round handmade cold-process soap bar, soft pale yellow color like gardenia pollen with a smooth texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S13-essential-oil-soap-peach` | 草本精油皂 · 桃花滿園 | A round handmade cold-process soap bar, soft blush pink color like peach blossom with a smooth texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |
| `S14-essential-oil-soap-lavender` | 草本精油皂 · 紫衣佳人 | A round handmade cold-process soap bar, soft lilac purple color with a smooth texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words. |

### 植物調理（3 張）

這三張以及後面的居家樂活、禮盒，**每張都請附上兩張圖**：`docs/design/logo-reference.jpg` 和該商品的原站實品圖（檔名在表格「參考圖」欄，都在 `docs/original/pics/`）。標籤上允許出現 Apple Manor 樹形 Logo，其餘文字不要。

| 檔名 | 商品 | 參考圖 | 商品描述（接在共用風格後面） |
| --- | --- | --- | --- |
| `P01-rose-essence-oil` | 玫瑰保養精華油 30ml | `3-1.jpg` | A white rectangular gift box with its lid lifted and leaning beside it, lined inside with glossy golden-yellow satin. Nestled in the satin is a slim 30 ml clear glass bottle of pale golden facial oil with a brushed silver screw cap and a small plain white label on the front bearing only the Apple Manor tree logo from the attached reference image. The box lid carries the same small logo. Elegant and gift-like, matching the attached product photo. |
| `P02-hokkaido-horse-oil-cream` | 北海道限定精純馬油霜 100ml | `3-2.jpg` | A round 100 ml frosted milky-white glass cream jar with a polished ridged silver screw lid, standing upright. A pale mint-green paper label wraps the lower half of the jar, bearing only the small Apple Manor tree logo from the attached reference image, no other text. Matching the attached product photo. |
| `P03-honey-silk-mask` | 蜂蜜嫩白蠶絲面膜 | （原站無實品圖） | A flat rectangular sheet mask sachet in matte pearl white, lying at a slight angle, with one folded thin white silk sheet mask partially resting on top. A small Apple Manor tree logo from the attached reference image printed in the center of the sachet, no other text. |

### 居家樂活（2 張）

| 檔名 | 商品 | 參考圖 | 商品描述 |
| --- | --- | --- | --- |
| `B01-laundry-soap-flakes` | 草本植萃洗衣皂絲 600g | `4-1.jpg` | A clear stand-up resealable zip pouch with a frosted matte front, filled with fine ivory-white natural soap flakes, standing upright, with a small loose pile of soap flakes in front of it. A white rectangular paper label on the front of the pouch bearing only the Apple Manor tree logo from the attached reference image, no other text. Matching the attached product photo. |
| `B02-herbal-shampoo` | 草本植萃洗髮露 400ml | `4-2.jpg` | A tall 400 ml dark olive-green plastic pump bottle of shampoo with a matte black pump dispenser, standing upright. A bright lime-green paper label wraps the bottle, bearing only the small Apple Manor tree logo from the attached reference image, no other text. Matching the attached product photo. |

### 精緻禮盒（4 張）

禮盒裡的每一塊皂都要有 "Apple Manor" 蘋果樹壓印，所以 Logo 參考圖一定要附。

| 檔名 | 商品 | 參考圖 | 商品描述 |
| --- | --- | --- | --- |
| `G01-tea-gift-box` | 台灣茶香禮盒組(二入) | `5-1-2.jpg` | An ornate Chinese-style gift box with two doors that open from the center, covered in rich red and gold silk brocade with cranes and floral patterns, closed, with a golden decorative knot clasp in the middle and a small round white paper tag hanging from it bearing the Apple Manor tree logo from the attached reference image. Two plain vertical red paper panels on the doors with no text. Festive and luxurious, matching the attached product photo. |
| `G02-tea-soap-gift-box` | 台灣茶香+手工皂禮盒 | `5-2-2.jpg` | An open rectangular gift box lined with glossy golden-yellow satin. Inside, on the left, a tall rectangular tea tin with a textured gold-foil surface; on the right, two square white soap boxes stacked, each with a small Apple Manor tree logo from the attached reference image. No other text. Matching the attached product photo. |
| `G03-wooden-soap-gift-box` | 四季花開 木製精油手工皂禮盒(四入) | `5-3-3.jpg` | A square natural light-wood tray gift box holding four round handmade soap bars arranged in a 2 by 2 grid, colored milky white, dusty rose pink, pale cream yellow and soft sage green, each with the raised embossed "Apple Manor" apple tree emblem from the attached reference image. The box is tied with a sheer silver-grey organza ribbon in a bow. Matching the attached product photo. |
| `G04-three-soap-gift-box` | 台灣三入禮盒 | `5-4-3.jpg` | A white rectangular gift box with its lid standing behind it, the lid tied with a red and white striped ribbon bow and bearing a small Apple Manor tree logo from the attached reference image. Inside the open box, three round handmade soap bars in a row on a bed of natural wood-wool shavings, colored pure white, pale cream and lilac purple, each with the raised embossed "Apple Manor" apple tree emblem. No other text. Matching the attached product photo. |

### 首頁主視覺（1 張，選配）

| 檔名 | 用途 | 商品描述 |
| --- | --- | --- |
| `hero-herbs` | 首頁橫幅 | Minimalist flat lay of dried Chinese herbs and botanicals: licorice root slices, dried gardenia, chrysanthemum, white poria, a few green leaves, arranged loosely and sparsely on a seamless warm off-white background (#F7F4EE), soft diffused daylight from the upper left, generous empty space in the center-left for text, muted natural colors, no text, no hands, no watermark. Wide 16:9 format, high resolution, photorealistic. |

這張不是商品圖，不用共用風格那段，直接貼上面整句。Midjourney 請把結尾換成 `--ar 16:9 --style raw`。

---

## 完整範例（S01）

先在 ChatGPT 對話裡**附上兩張參考圖**（`docs/design/logo-reference.jpg` 與 `docs/design/soap-emboss-reference.jpg`），再貼這整段：

```
Minimalist product photography. A single product centered on a seamless warm off-white studio background (#F7F4EE), soft diffused daylight from the upper left, gentle soft shadow beneath the product, slightly elevated 30-degree camera angle, shallow depth of field, clean and calm composition with generous empty space around the product, muted natural colors, no labels, no packaging text, no props, no hands, no watermark. The only text allowed is the brand emblem embossed on the product itself, as described below. Square 1:1 format, high resolution, photorealistic.

A round handmade cold-process soap bar, deep charcoal black color with a matte natural texture, about 7 cm in diameter and 2 cm thick with softly rounded edges. On the top face, inside a shallow circular stamped area, a raised embossed brand emblem exactly like the attached reference images: a tree with a round canopy made of many small apple-like dots, a thick trunk with spreading roots, and the words "Apple Manor" in a loose handwritten font arched above the tree. The embossed text must read exactly "Apple Manor" with no other words.
```

---

## 之後要微調或重生

- 顏色不對：改「商品描述」裡的顏色字眼，其餘不動。
- 整體風格要換：只改「共用風格」那段，然後 23 張全部重生，才會一致。
- 網站端替換圖片的步驟寫在 `README.md`。
