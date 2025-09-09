import pkg from '../package.json' with { type: 'json' }

import { Router } from '@oak/oak/router'
import { config } from './config.ts'

import { service60s } from './modules/60s.module.ts'
import { serviceAINews } from './modules/ai-news.module.ts'
import { serviceAnswer } from './modules/answer/answer.module.ts'
import { serviceAwesomeJs } from './modules/awesome-js/awesome-js.module.ts'
import { serviceBaike } from './modules/baike.module.ts'
import { serviceBili } from './modules/bili.module.ts'
import { serviceBing } from './modules/bing.module.ts'
import { serviceChangYa } from './modules/changya.module.ts'
import { serviceChemical } from './modules/chemical.module.ts'
import { serviceDouyin } from './modules/douyin.module.ts'
import { serviceDuanzi } from './modules/duanzi/duanzi.module.ts'
import { serviceEpic } from './modules/epic.module.ts'
import { serviceExRate } from './modules/exchange-rate.module.ts'
import { serviceFabing } from './modules/fabing/fabing.module.ts'
import { serviceFanyi } from './modules/fanyi/fanyi.module.ts'
import { serviceHash } from './modules/hash.module.ts'
import { serviceHitokoto } from './modules/hitokoto/hitokoto.module.ts'
import { serviceIP } from './modules/ip.module.ts'
import { serviceKfc } from './modules/kfc.module.ts'
import { serviceLuck } from './modules/luck/luck.module.ts'
import { serviceLunar } from './modules/lunar/lunar.module.ts'
import { serviceMaoyan } from './modules/maoyan.module.ts'
import { serviceNcm } from './modules/ncm.module.ts'
import { serviceOG } from './modules/og.module.ts'
import { serviceQRCode } from './modules/qrcode/qrcode.module.ts'
import { serviceTodayInHistory } from './modules/today-in-history.module.ts'
import { serviceToutiao } from './modules/toutiao.module.ts'
import { serviceWeather } from './modules/weather.module.ts'
import { serviceWeibo } from './modules/weibo.module.ts'
import { serviceZhihu } from './modules/zhihu.module.ts'
import { serviceDadJoke } from './modules/dad-joke/dad-joke.module.ts'
import { serviceHackerNews } from './modules/hacker-news.module.ts'
import { serviceRednote } from './modules/rednote.module.ts'
import { serviceBaidu } from './modules/baidu.module.ts'
import { serviceDongchedi } from './modules/dongchedi.module.ts'
import { serviceHealth } from './modules/health.module.ts'
import { servicePassword } from './modules/password/password.module.ts'
import { serviceColor } from './modules/color.module.ts'
// import { serviceSlackingCalendar } from './modules/slacking-calendar/slacking-calendar.module.ts'

export const rootRouter = new Router()

rootRouter.get('/', async (ctx) => {
  const res = await fetch('https://static.2025202.xyz/403.htm')
  const html = await res.text()

  ctx.response.status = 403
  ctx.response.type = 'text/html; charset=utf-8'
  ctx.response.body = html
})

rootRouter.get('/health', (ctx) => {
  ctx.response.body = 'ok'
})

const helpHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>60s-Api - 帮助文档</title>
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --primary-color: #007bff;
            --border-color: #e0e0e0;
            --code-bg: #f5f5f5;
            --header-bg: #f8f9fa;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: var(--bg-color);
            color: var(--text-color);
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 0 20px;
        }
        header, footer {
            text-align: center;
            padding: 20px 0;
            background-color: var(--header-bg);
            border-bottom: 1px solid var(--border-color);
        }
        footer {
            margin-top: 40px;
            border-top: 1px solid var(--border-color);
            border-bottom: none;
            font-size: 0.9em;
            color: #777;
        }
        h1, h2, h3 {
            color: #333;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 10px;
        }
        h1 { font-size: 2.5em; }
        h2 { font-size: 2em; margin-top: 40px; }
        h3 { font-size: 1.5em; margin-top: 30px; border-bottom: 1px solid #ccc; }
        code {
            background-color: var(--code-bg);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 0.9em;
        }
        .endpoint {
            background-color: #fdfdfd;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .endpoint-path {
            font-weight: bold;
            margin-bottom: 10px;
        }
        a {
            color: var(--primary-color);
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            border: 1px solid var(--border-color);
            padding: 8px 12px;
            text-align: left;
        }
        th {
            background-color: var(--header-bg);
        }
    </style>
</head>
<body>
    <header>
        <h1>60s-Api</h1>
        <p>一个简洁、有趣的免费 API 接口服务</p>
        <p><a href="https://github.com/vikiboss/60s" target="_blank">GitHub</a> | <a href="https://docs.60s-api.viki.moe" target="_blank">文档</a></p>
    </header>
    <div class="container">
        <section>
            <h2>基本说明</h2>
            <p>所有接口的根路径为：<code>https://api.viki.moe/v2</code></p>
            <p>大部分 <code>GET</code> 接口支持一个通用查询参数 <code>encoding</code>，用于指定返回的数据格式。</p>
            <table>
                <thead>
                    <tr>
                        <th>参数值</th>
                        <th>说明</th>
                        <th>示例</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>json</code> (默认)</td>
                        <td>返回标准的 JSON 格式数据。</td>
                        <td><code>/v2/60s?encoding=json</code></td>
                    </tr>
                    <tr>
                        <td><code>text</code></td>
                        <td>返回纯文本格式，方便直接展示。</td>
                        <td><code>/v2/60s?encoding=text</code></td>
                    </tr>
                     <tr>
                        <td><code>image</code> (部分支持)</td>
                        <td>返回 302 重定向到图片地址。</td>
                        <td><code>/v2/bing?encoding=image</code></td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section>
            <h2>接口列表</h2>
            <div class="endpoint">
                <h3>每日60秒新闻</h3>
                <p class="endpoint-path"><code>GET /60s</code></p>
                <p>获取每日 60 秒读懂世界新闻简报。</p>
                <p><b>参数：</b><code>date</code> (可选, 格式: YYYY-MM-DD) - 获取指定日期的新闻。</p>
            </div>
            <div class="endpoint">
                <h3>历史上的今天</h3>
                <p class="endpoint-path"><code>GET /today_in_history</code></p>
                <p>获取历史上的今天发生的事件。</p>
            </div>
             <div class="endpoint">
                <h3>AI 资讯快报</h3>
                <p class="endpoint-path"><code>GET /ai-news</code></p>
                <p>获取最新的 AI 行业资讯。</p>
                <p><b>参数：</b><code>date</code> (可选, 格式: YYYY-MM-DD) - 获取指定日期的资讯。</p>
                <p><b>参数：</b><code>all</code> (可选, 任意值) - 获取所有历史资讯。</p>
            </div>
            <div class="endpoint">
                <h3>必应每日壁纸</h3>
                <p class="endpoint-path"><code>GET /bing</code></p>
                <p>获取必应每日高清壁纸。</p>
            </div>
            <div class="endpoint">
                <h3>实时热搜榜</h3>
                <p class="endpoint-path"><code>GET /weibo</code> | <code>/bili</code> | <code>/douyin</code> | <code>/toutiao</code> | <code>/zhihu</code></p>
                <p>获取微博、B站、抖音、头条、知乎的实时热搜榜单。</p>
            </div>
            <div class="endpoint">
                <h3>农历/黄历</h3>
                <p class="endpoint-path"><code>GET /lunar</code></p>
                <p>获取公历和农历日期、节气、节日、宜忌等信息。</p>
                 <p><b>参数：</b><code>date</code> (可选, 格式: YYYY-MM-DD 或时间戳) - 查询指定日期的信息。</p>
            </div>
            <div class="endpoint">
                <h3>天气查询</h3>
                <p class="endpoint-path"><code>GET /weather</code> | <code>/weather/forecast</code></p>
                <p>根据城市名称查询实时天气或未来7天天气预报。</p>
                 <p><b>参数：</b><code>query</code> (必需) - 城市名称。</p>
            </div>
            <div class="endpoint">
                <h3>疯狂星期四</h3>
                <p class="endpoint-path"><code>GET /kfc</code></p>
                <p>随机获取一段 "疯狂星期四" 文案。</p>
            </div>
            <div class="endpoint">
                <h3>一言 (Hitokoto)</h3>
                <p class="endpoint-path"><code>GET /hitokoto</code></p>
                <p>随机获取一句有哲理或有意思的话。</p>
            </div>
            <div class="endpoint">
                <h3>发病语录</h3>
                <p class="endpoint-path"><code>GET /fabing</code></p>
                <p>随机获取一段发病语录。</p>
                <p><b>参数：</b><code>name</code> (可选) - 替换语录中的 \`[name]\` 占位符。</p>
            </div>
            <div class="endpoint">
                <h3>答案之书</h3>
                <p class="endpoint-path"><code>GET /answer</code></p>
                <p>随机获取一个答案，帮你做出决策。</p>
            </div>
            <div class="endpoint">
                <h3>随机段子</h3>
                <p class="endpoint-path"><code>GET /duanzi</code></p>
                <p>随机获取一个沙雕段子。</p>
            </div>
            <div class="endpoint">
                <h3>今日运势</h3>
                <p class="endpoint-path"><code>GET /luck</code></p>
                <p>获取今日的随机运势和建议。</p>
            </div>
            <div class="endpoint">
                <h3>Epic Games 喜加一</h3>
                <p class="endpoint-path"><code>GET /epic</code></p>
                <p>获取 Epic Games 平台当前和即将推出的免费游戏信息。</p>
            </div>
            <div class="endpoint">
                <h3>实时汇率</h3>
                <p class="endpoint-path"><code>GET /exchange_rate</code></p>
                <p>获取实时货币汇率。</p>
                 <p><b>参数：</b><code>currency</code> (可选, 默认: CNY) - 基础货币代码。</p>
            </div>
            <div class="endpoint">
                <h3>IP 地址查询</h3>
                <p class="endpoint-path"><code>GET /ip</code></p>
                <p>返回请求来源的公网 IP 地址。</p>
            </div>
            <div class="endpoint">
                <h3>翻译</h3>
                <p class="endpoint-path"><code>ALL /fanyi</code></p>
                <p>提供文本翻译服务。</p>
                <p><b>参数：</b><code>text</code> (必需) - 需要翻译的文本。</p>
                <p><b>参数：</b><code>from</code> (可选, 默认: auto) - 源语言代码。</p>
                <p><b>参数：</b><code>to</code> (可选, 默认: auto) - 目标语言代码。</p>
            </div>
            <div class="endpoint">
                <h3>网页 OG 信息</h3>
                <p class="endpoint-path"><code>ALL /og</code></p>
                <p>解析并返回指定 URL 页面的 Open Graph 信息 (标题、描述、图片)。</p>
                 <p><b>参数：</b><code>url</code> (必需) - 目标网页地址。</p>
            </div>
            <div class="endpoint">
                <h3>Hash/编码转换</h3>
                <p class="endpoint-path"><code>ALL /hash</code></p>
                <p>对输入内容进行多种 Hash 计算和编码转换 (MD5, SHA, Base64, URL, Gzip 等)。</p>
                 <p><b>参数：</b><code>content</code> (必需) - 需要处理的内容。</p>
            </div>
        </section>
    </div>
    <footer>
        <p>Lighthome | ${new Date().getFullYear()}</p>
    </footer>
</body>
</html>
`;

var appRouter = new Router({
  prefix: "/v2"
});

// 新增 /help 路由
appRouter.get("/help", (ctx) => {
  ctx.response.type = "text/html; charset=utf-8";
  ctx.response.body = helpHtml;
});

appRouter.get('/60s', service60s.handle())
appRouter.get('/answer', serviceAnswer.handle())
appRouter.get('/baike', serviceBaike.handle())
appRouter.get('/bili', serviceBili.handle())
appRouter.get('/bing', serviceBing.handle())
appRouter.get('/changya', serviceChangYa.handle())
appRouter.get('/chemical', serviceChemical.handle())
appRouter.get('/douyin', serviceDouyin.handle())
appRouter.get('/duanzi', serviceDuanzi.handle())
appRouter.get('/epic', serviceEpic.handle())
appRouter.get('/exchange_rate', serviceExRate.handle())
appRouter.get('/fabing', serviceFabing.handle())
appRouter.get('/hitokoto', serviceHitokoto.handle())
appRouter.get('/ip', serviceIP.handle())
appRouter.get('/kfc', serviceKfc.handle())
appRouter.get('/luck', serviceLuck.handle())
appRouter.get('/maoyan', serviceMaoyan.handle())
appRouter.get('/today_in_history', serviceTodayInHistory.handle())
appRouter.get('/toutiao', serviceToutiao.handle())
appRouter.get('/weibo', serviceWeibo.handle())
appRouter.get('/zhihu', serviceZhihu.handle())
appRouter.get('/lunar', serviceLunar.handle())
appRouter.get('/ai-news', serviceAINews.handle())
appRouter.get('/awesome-js', serviceAwesomeJs.handle())
appRouter.get('/qrcode', serviceQRCode.handle())
appRouter.get('/dad-joke', serviceDadJoke.handle())
appRouter.get('/hacker-news/:type', serviceHackerNews.handle())
appRouter.get('/rednote', serviceRednote.handle())
appRouter.get('/dongchedi', serviceDongchedi.handle())

appRouter.all('/health', serviceHealth.handle())

appRouter.all('/password', servicePassword.handle())
appRouter.all('/password/check', servicePassword.handleCheck())

appRouter.get('/baidu/realtime', serviceBaidu.handleRealtime())
appRouter.get('/baidu/teleplay', serviceBaidu.handleTeleplay())
appRouter.get('/baidu/tieba', serviceBaidu.handleTieba())

appRouter.all('/og', serviceOG.handle())
appRouter.all('/hash', serviceHash.handle())
// appRouter.get('/slacking-calendar', serviceSlackingCalendar.handle())

appRouter.all('/fanyi', serviceFanyi.handle())
appRouter.all('/fanyi/langs', serviceFanyi.langs())

appRouter.get('/weather', serviceWeather.handle())
appRouter.get('/weather/forecast', serviceWeather.handleForecast())

appRouter.get('/ncm-rank', serviceNcm.handleRank())
appRouter.get('/ncm-rank/:id', serviceNcm.handleRankDetail())

appRouter.all('/color', serviceColor.handle())
appRouter.all('/color/palette', serviceColor.handlePalette())
