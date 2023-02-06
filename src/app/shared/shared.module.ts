import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule} from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    
  ],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMomentDateModule,
    ImageCropperModule,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class SharedModule { }
