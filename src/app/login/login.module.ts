import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,        
        HttpClientModule,
        ReactiveFormsModule,
        MatCardModule
    ],                
        providers: [
            
        ],
    declarations: [LoginComponent]
})
export class LoginModule {}
