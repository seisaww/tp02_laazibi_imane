import { Routes } from '@angular/router';
import { PollutionDetail } from './components/pollution-detail/pollution-detail';

export const routes: Routes = [
  { 
    path: 'pollutions/:id', 
    component: PollutionDetail
  },

];

