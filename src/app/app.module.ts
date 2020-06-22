import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { DateCountPipe } from './date-count.pipe';
import { GitService } from './git.service';

@NgModule({
  declarations: [ AppComponent, HomepageComponent ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule, FormsModule ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
