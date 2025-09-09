import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

export const routes: Routes = [
    {path: "", pathMatch:'full', redirectTo:'home'}, // Ruta por defecto
    {path: "home", component: HomeComponent },
    {path: "contacto", component: ContactoComponent },
    {path: "sobremi", component: SobremiComponent },
    {path: "experiencia", component: ExperienciaComponent},
    {path:"**",component: HomeComponent }
];

