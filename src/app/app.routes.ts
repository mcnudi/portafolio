import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';

export const routes: Routes = [
    {path: "", pathMatch:'full', redirectTo:'home'}, // Ruta por defecto
    {path: "home", component: HomeComponent },
    {path: "contacto", component: ContactoComponent },
    {path: "sobremi", component: SobremiComponent },
    {path: "experiencia", component: ExperienciaComponent},
    {path:"**",component: HomeComponent }
];

