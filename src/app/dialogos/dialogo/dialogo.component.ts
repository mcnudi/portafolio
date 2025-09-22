import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-dialogo',
  imports: [MatDialogModule, MatFormFieldModule,FormsModule,MatInputModule],
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.css'
})
export class DialogoComponent {
  area1:string="";
  area2:string="";
  enviar(){
    this.area1 += `\n${this.area2}`;
    this.area2 = "";
    //this.enviarCorreo();
  }

  enviarCorreo() {
    const templateParams = {
      mensaje: this.area1,
      email:'mcnudi@gmail.com'
    };

    emailjs.send("service_l2q5bys", "template_smgt7q7", templateParams, "j37vSPI28NYMwdbQf")
      .then(() => {
        alert("Correo enviado con éxito ✅");
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Error al enviar el correo ❌");
      });
  }
}

