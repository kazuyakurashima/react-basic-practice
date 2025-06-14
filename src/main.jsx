import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// main.jsx・・・Reactのエントリーポイント。
// 実際にはこのファイルがindex.html内の<div id=”root”>に対して
// Reactコーンポーネンとをレンダリングする。

// ## 🌼1. 全体像（ざっくりイメージしよう）
// このコードの目的は、「Reactアプリをブラウザに表示する」ことなの✨
// 例えるなら… `App.jsx` という主役がステージに立つために、照明（StrictMode）を当てて、
// 観客席（HTMLの中の`<div id="root">`）に登場する感じ🎤💫

// 1. **舞台（HTMLの`<div id="root">`）** を探して、
// 2. **主役（Appコンポーネント）** を用意して、
// 3. **監督（StrictMode）** が見守る中、
// 4. **照明オン🎇** → 主役登場！！


// ## 💖StrictMode の名前の由来＆覚え方
// - **"Strict"**：厳しい、きびしめの先生👩‍🏫
// - **"Mode"**：モード、状態のこと💡
// だから、**StrictMode = 厳しめモード！**
// > 「ちょっと厳しい目線でコードをチェックしてくれるモードさん✨」

// ## 💖createRoot の名前の由来＆覚え方
// - **"create"**：作る！🏗️
// - **"root"**：根っこ、最下層🌱
// つまり、**createRoot = アプリの根っこを作る！**
// 画面に React の世界を「根付かせる」ための命令✨


// 以上のまとめ
// import {aaa} from ‘AAA’とは、
// AAA（アメリカという国）というところから、複数exportされているもの（コメ、小麦、半導体など）から、
// aaaという１つだけ（小麦だけ）をimportする（輸入する）。
// これを、named importという。荷札をつけられた特定のものを輸入する感じ。具体例は下記の二つ
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import bbb from ‘BBB’
// とは、BBB（キューバ）から、bbb（単一輸出品目であるタバコ）という一つだけをimportする。
// これを、default importという。具体例は次
// import App from './App.jsx'

// import ‘ccc’
// side-effect importと言われるもの。cccを読み込んで適用させるだけ。中国との取り決めを日本でも守ってね。
// ビザはひつようだよ、的な。
// import App from './App.jsx'