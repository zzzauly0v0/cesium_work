import { createRouter, createWebHistory } from 'vue-router'
import OneFlight from '@/components/OneFlight.vue'
import FlightData from '@/components/FlightData.vue'
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
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router