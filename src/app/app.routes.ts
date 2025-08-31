import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    {path: "", pathMatch:'full', redirectTo:'home'}, // Ruta por defecto
    {path: "home", component: HomeComponent },
    {path: "contacto", component: ContactoComponent },
    {path:"**",component: HomeComponent }
];

