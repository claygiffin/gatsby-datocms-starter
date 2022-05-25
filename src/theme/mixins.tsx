import { css } from '@emotion/react'

import { breakpoints } from './variables'

export const mq = (minMax = 'max') => {
  const bp = Object.create(breakpoints)
  Object.keys(breakpoints).forEach(key => {
    bp[key] = `@media (${minMax}-width: ${bp[key]}px)`
  })
  return bp
}

export const baseGrid = css`
  position: relative;
  display: grid;
  grid-template-columns: calc(2 * var(--gutter-md)) repeat(12, 1fr) calc(
      2 * var(--gutter-md)
    );
  grid-template-rows: auto;
  grid-column-gap: var(--gutter-md);
  width: 100%;
  ${mq().s} {
    grid-template-columns: var(--gutter-sm) repeat(12, 1fr) var(
        --gutter-sm
      );
  }
`

export const absoluteFill = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`