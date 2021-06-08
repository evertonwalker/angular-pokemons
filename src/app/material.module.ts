import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    exports: [MatSnackBarModule, ScrollingModule, MatProgressSpinnerModule, MatIconModule]
})
export class MaterialModule {

}