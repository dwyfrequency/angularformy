import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
