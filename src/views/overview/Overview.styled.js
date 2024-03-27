import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const rowChartCtn = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: '0.625rem',
    height: '100%',
    width: '60%',
    flexDirection: 'column',
}))

export const rowChartText = styled(Box)(() => ({
    width: '100%',
    height: '10rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '2.5rem 0 0 1rem',
}))
export const ctnCircleChart = styled(Box)(() => ({
    width: 'calc(40% - 2rem)',
    height: '100%',
    borderRadius: '0.625rem',
    display: 'flex',
    flexDirection: 'column',
}))

export const ctnCircleTxt = styled(Box)(() => ({
    flex: '1',
    padding: '2.5rem 1rem 0 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
}))

export const lastPhase = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    marginTop: '2rem',
    height: '18rem',
    gap: '2rem',
}))

export const ctnTotalLine = styled(Box)(({ idx }) => ({
    flex: '1',
    backgroundColor: idx === 0 ? '#507bce' : '#0ac382',
    height: '100%',
    borderTopRightRadius: '0.625rem',
    borderBottomRightRadius: '0.625rem',
}))

export const boxTxtTotal = styled(Box)(() => ({
    flex: '1',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
}))

export const boxTotal = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0.625rem',
    height: '8rem',
    width: '100%',
}))
