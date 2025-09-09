import { Common } from '../common.ts'
import { COMMON_MSG } from '../config.ts'

import type { Middleware } from '@oak/oak'

export function notFound(): Middleware {
  return async (ctx, next) => {
    await next()

    const res = await fetch('https://static.2025202.xyz/403.htm')
    const html = await res.text()

    ctx.response.status = 403
    ctx.response.type = 'text/html; charset=utf-8'
    ctx.response.body = html
  }
}
