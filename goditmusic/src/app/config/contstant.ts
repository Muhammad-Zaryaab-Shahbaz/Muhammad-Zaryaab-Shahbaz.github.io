export const CONFIG = {
  errorMessages: {
    email: 'Enter a valid email.',
    required: 'This field is required.',
    min: 'value too small',
    max: 'value too large',
    minLength: 'Value is too short',
    maxLength: 'Value is too big',
    notMatch: 'Password does not match',
    validAY: 'This field is not valid, please use format like (2019-2020)',
    validCC: 'This field is not valid, please use format like (CRES-1100)',
    invalidPassword: `<p>Invalid Password</p><strong>Your password needs to:</strong>
      <ul><li>Include both lowercase &amp; uppercase characters</li><li>Include at least one number</li>
      </ul></small>`,
    sameEmails: 'Same emails'
  }
};

export const CONSTRAINTS = {
  PASSWORD_MIN_LENGTH: 6
};

export const REGEX = {
  phoneNumberMask: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  alphaSpace: '^[A-Za-z]+(?: [A-Za-z]+)*$',
  postalCode: '^[A-Za-z0-9]+(?:[A-Za-z0-9]+)*$',
  phone: '^(\\d{3}\\-\\d{3}\\-\\d{4})$'
};

export const RESPONSE = {
  SUCCESS: 'Success',
  REGISTER_SUCCESS: 'Sign up success! Please verify your email address',
  VERIFICATION_SUCCESS: 'Email successfully verified!',
  RESET_SUCCESS: 'Password successfully updated!',
  LOGIN_FAILED: 'Login Failed!',
  EMAIL_VERIFY_SENT: 'Email has been sent, Please verify',
  EMAIL_REMOVED: 'Email removed successfully',
  EMAIL_ADDED: 'Email added successfully',
  USER_UPDATED: 'User updated.',
  USER_ENABLED: 'User Enabled',
  USER_DISABLED: 'User Disabled',
  ADMIN_CREATED: 'Admin Created',
  FACULTY_CREATED: 'Faculty Created',
  OPPS: 'Oppss!',
  COURSE_UPDATED: 'Course Updated'
};

export enum HOMEBASE_ENUM {
  NW = 'NW Campus',
  VIC = 'VIC Campus',
  PRINCE = 'Prince George - CNC'
}

export enum FACULTY_TYPES {
  COACH = 'Coach',
  INSTRUCTOR = 'Instructor'
}
