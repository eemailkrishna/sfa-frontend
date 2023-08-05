import { AbstractControl } from "@angular/forms";
export function matchPassword(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const cPassword = control.get('c_password');
    if (password?.value !== cPassword?.value) {
      return { matchpassword: true };
    }
    return null;
}