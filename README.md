# 蘋果莊園 Apple Manor 官方網站

純靜態網站，以 [Astro](https://astro.build) 建置，部署在 GitHub Pages。

- 公開網址：https://applemanortw.github.io/
- 原站盤點：`docs/site-inventory.md`
- 設計方向：`docs/design-direction.md`
- 商品圖 prompt 與生圖步驟：`docs/image-prompts.md`

## 專案結構

```
src/data/site.json         品牌名稱、標語、電話、LINE、分類
src/data/products.json     23 項商品（唯一的商品資料來源）
src/pages/                 首頁、分類頁、商品頁（自動從資料檔產生）
src/components/            頁首、頁尾、商品卡片、聯絡按鈕
src/assets/products/    商品圖（WebP，1200×1200）
incoming/                  放新圖片用，執行 npm run images 後會自動處理
scripts/                   圖片處理腳本
```

## 本機預覽

需要 Node.js 22 以上。

```bash
npm install
npm run dev        # 開發模式，開 http://localhost:4321/
npm run build      # 輸出靜態檔到 dist/
npm run preview    # 預覽 dist/
```

## 修改商品

所有商品都在 `src/data/products.json`，改完存檔、推上 GitHub 就會自動重新部署。

每一項商品的欄位：

| 欄位 | 說明 |
| --- | --- |
| `id` | 編號，如 `S01`，對應圖片檔名開頭 |
| `slug` | 網址用的英文代號，決定商品頁網址與圖片檔名，**改了要連圖片檔名一起改** |
| `category` | `soap`、`plant`、`bath`、`gift` 其中之一 |
| `name` | 商品名稱 |
| `summary` | 卡片上的一句話摘要 |
| `description` | 商品頁的段落，一個字串一段 |
| `specs` | 規格表，`label` 是左欄、`value` 是右欄 |
| `extras` | 選填，禮盒內容物說明 |
| `note` | 選填，底部的小字備註 |
| `color` | 佔位圖用的顏色，有真實圖片後不影響 |
| `alt` | 圖片的替代文字，給螢幕閱讀器與 SEO 用 |

新增商品：複製一個物件，改掉所有欄位，再放一張圖片。
刪除商品：把那個物件整段刪掉，順便刪掉對應的圖片。
分類名稱、電話、LINE 連結在 `src/data/site.json`。

## 替換商品圖片

1. 依照 `docs/image-prompts.md` 的檔名把圖片放進 `incoming/`，例如 `S01-herbal-complete-soap.png`。檔名開頭有商品編號或 slug 即可對應。
2. 執行：

   ```bash
   npm run images
   ```

   腳本會自動裁成正方形、縮到 1200×1200、轉成 WebP，放進 `src/assets/products/`。
3. 推上 GitHub 即完成。`incoming/` 裡的原始檔不會被加入 git。

想重做佔位圖（例如新增商品還沒有圖）：`npm run placeholders`。

## 重新部署

推上 `main` 分支就會自動觸發 `.github/workflows/deploy.yml`，約 1 到 2 分鐘完成。
也可以到 GitHub 的 Actions 分頁手動執行 "Deploy to GitHub Pages"。

第一次部署前，請確認 repo 的 Settings → Pages → Source 設為 **GitHub Actions**。

## 換網域

若之後要用自己的網域：
1. 在 `public/` 新增 `CNAME` 檔，內容是你的網域。
2. 到 Settings → Pages 設定 Custom domain。
3. Workflow 會自動把 `BASE` 改成 `/`，不用改程式。
