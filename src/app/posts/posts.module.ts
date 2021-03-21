import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, FormModule],
})
export class PostsModule {}
