import { createRouter, createWebHistory } from 'vue-router'
import OneFlight from '@/components/OneFlight.vue'
import FlightData from '@/components/FlightData.vue'
import FlghtMovie from '@/components/FlghtMovie.vue'
const routes =[
    {
        path:'/OneFlghtData',
        name:'OneFlghtData',
        component:OneFlight,
    },
    {
        path:'/FlghtData',
        name:'FlightData',
        component:FlightData,
    },
    {
        path:'/FlghtMovie',
        name:'FlghtMovie',
        component:FlghtMovie,
    },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router