import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ImprintComponent } from './imprint/imprint.component';
export const routes: Routes = [
    { path: '', component: MainpageComponent },
    { path: "app-imprint", component: ImprintComponent },
    { path: "app-mainpage", component: MainpageComponent }
];
