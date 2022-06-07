import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { AuthHttpService } from './auth/services/http/auth-http.service';
import { AuthService } from './auth/services/auth/auth.service';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
  ],
  providers: [
    AuthHttpService,
    AuthService,
  ]
})
export class CoreModule { }
