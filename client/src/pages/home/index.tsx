// // ** MUI Imports
// import Card from '@mui/material/Card'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import CardHeader from '@mui/material/CardHeader'
// import CardContent from '@mui/material/CardContent'

// const Home = () => {
//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         <Card>
//           <CardHeader title='Kick start your project 🚀'></CardHeader>
//           <CardContent>
//             <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography>
//             <Typography>
//               Please make sure to read our Template Documentation to understand where to go from here and how to use our
//               template.
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12}>
//         <Card>
//           <CardHeader title='ACL and JWT 🔒'></CardHeader>
//           <CardContent>
//             <Typography sx={{ mb: 2 }}>
//               Access Control (ACL) and Authentication (JWT) are the two main security features of our template and are implemented in the starter-kit as well.
//             </Typography>
//             <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   )
// }

// export default Home

// ** Next Import
import Link from 'next/link'
import dynamic from 'next/dynamic'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Styled Components
import RechartsWrapper from 'src/@core/styles/libs/recharts'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
const RechartsBarChart = dynamic(() => import('src/views/charts/recharts/RechartsBarChart'), { ssr: false })
const RechartsPieChart = dynamic(() => import('src/views/charts/recharts/RechartsPieChart'), { ssr: false })
const RechartsLineChart = dynamic(() => import('src/views/charts/recharts/RechartsLineChart'), { ssr: false })
const RechartsAreaChart = dynamic(() => import('src/views/charts/recharts/RechartsAreaChart'), { ssr: false })
const RechartsRadarChart = dynamic(() => import('src/views/charts/recharts/RechartsRadarChart'), { ssr: false })
const RechartsScatterChart = dynamic(() => import('src/views/charts/recharts/RechartsScatterChart'), { ssr: false })

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Home = () => {
  // ** Hooks
  const { settings } = useSettings()

  return (
    <RechartsWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <PageHeader
            title={
              <Typography variant='h5'>
                <LinkStyled href='https://github.com/recharts/recharts' target='_blank'>
                  Dashboards
                </LinkStyled>
              </Typography>
            }
            subtitle={<Typography variant='body2'>Redefined chart library built with React and D3</Typography>}
          />
          <Grid item xs={12}>
            <RechartsLineChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12}>
            <RechartsAreaChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12}>
            <RechartsScatterChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12}>
            <RechartsBarChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsRadarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsPieChart />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Home
