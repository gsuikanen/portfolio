import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlsComponent } from './urls/urls.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  {path: 'data', component: DataComponent},
  {path: 'url', component: UrlsComponent},
  {path: ':id', component: UrlsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
