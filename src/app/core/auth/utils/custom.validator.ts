import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { startOfToday, addYears, compareAsc } from 'date-fns'

export class CustomValidator {

    static inputConfirm(sourceKey: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const sourceControl = control.parent?.get('sourceKey');
            if (!sourceControl) {
                return null;
            }
            return sourceControl?.value === control.value ? null : { [`${sourceKey}NotMatch`]: true };
        }
    }

    static over18YearsOld(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const today = startOfToday()
            const birthday = control.value
            if (!birthday || !(birthday instanceof Date)) {
                return null;
            }

            const birthdayPlus18 = addYears(birthday, 18);
            return compareAsc(birthdayPlus18, today) <= 0 ? null : { under18YearOld: true };
        }
    }
}