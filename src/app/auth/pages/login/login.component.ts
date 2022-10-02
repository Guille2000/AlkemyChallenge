import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showSpinner:boolean = false
  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  clickLogin() {

    let email = this.myForm.get('email')?.value;
    let password = this.myForm.get('password')?.value;

    console.info('email', email);
    console.info('password ', password);
    console.info('Valido', this.myForm.valid);

    if (this.myForm.valid) {
      this.showSpinner = true
      this.auth.obtenerToken(email, password).subscribe((data: any) => {
        localStorage.setItem('token', data.token);
        this.auth.iniciarSesion();
        this.showSpinner = false
        this.router.navigate(['home']);
      }, (err: any) => {
        this.showSpinner = false
        Swal.fire({
          title: "Error",
          text: 'Ingrese una contraseña y un email validos',
          icon: 'error',
          timer: 2000,
          confirmButtonColor: '#d33'

        });
      })
    }
    else {
      Swal.fire({
        title: "Error",
        text: "Hay datos invalidos",
        icon: 'error',
        timer: 2000,
        confirmButtonColor: '#d33'
      });
    }

  }

}
