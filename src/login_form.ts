export interface LoginResult {
  success: boolean;
  infoMessage: string;
}

export class LoginForm {
  private username: string = '';
  private password: string = '';

  readonly minULength = 8;
  readonly maxULength = 20;
  readonly minPLength = 10;
  readonly maxPLength = 25;

  //установить значение поля usrname
  setUsername(value: string): this {
    this.username = value;
    return this;
  }

  //получить текущее значение username
  getUsername(): string {
    return this.username;
  }

  //установить значение поля password
  setPassword(value: string): this {
    this.password = value;
    return this;
  }

  //получить текущее значение password
  getPassword(): string {
    return this.password;
  }

  //проверка поля username на заполение
  isUsernameEmpty(): boolean {
    return this.username.trim().length === 0;
  }

  //проверка поля password на заполнение
  isPasswordEmpty(): boolean {
    return this.password.trim().length === 0;
  }

  //проверка длины значения поля username
  isUsernameLengthValid(): boolean {
    const usernameLength = this.username.length;
    return usernameLength >= this.minULength && usernameLength <= this.maxULength;
  }

  //проверка длины значения поля password
  isPasswordLengthValid(): boolean {
    const passwordLength = this.password.length;
    return passwordLength >= this.minPLength && passwordLength <= this.maxPLength;
  }

  /**
   * проверка формата ввода поля username
   * Username может содержать:
   * только латинские буквы: заглавные и строчные,
   * цифры от 0 до 9
   * символ нижнего подчеркивания
   */
  isUsernameFormatValid(): boolean {
    const usernameFormat = /^[A-za-z0-9_]+$/;
    return usernameFormat.test(this.username);
  }

  /**
   * проверка формата ввода поля password
   * Password должен содержать:
   * хотя бы одна латинская буква: заглавная и строчная,
   * хотя бы одна цифра
   * хотя бы один спец симво
   */
  isPasswordFormatValid(): boolean {
    const hasLetters = /[A-Za-z]/.test(this.password);
    const hasDigit = /\d/.test(this.password);
    const hasSymbol = /[!@#$%&*?_]/.test(this.password);
    return hasLetters && hasDigit && hasSymbol;
  }

  //общая валидация формы
  isFormValid(): boolean {
    return (
      !this.isUsernameEmpty() &&
      !this.isPasswordEmpty() &&
      this.isUsernameLengthValid() &&
      this.isPasswordLengthValid() &&
      this.isUsernameFormatValid() &&
      this.isPasswordFormatValid()
    );
  }

  login(): LoginResult {
    if (this.isUsernameEmpty()) {
      return {
        success: false,
        infoMessage: 'EMPTY USERNAME. Username is required'
      };
    }

    if (this.isPasswordEmpty()) {
      return {
        success: false,
        infoMessage: 'EMPTY PASSWORD. Password is required'
      };
    }

    if (!this.isUsernameLengthValid()) {
      return {
        success: false,
        infoMessage: `Username length must be between ${this.minULength} and ${this.maxULength} characters`
      };
    }

    if (!this.isPasswordLengthValid()) {
      return {
        success: false,
        infoMessage: `Password length must be between ${this.minPLength} and ${this.maxPLength} characters`
      };
    }

    if (!this.isUsernameFormatValid()) {
      return {
        success: false,
        infoMessage: 'Username can only contain letters, digits and underscore'
      };
    }

    if (!this.isPasswordFormatValid()) {
      return {
        success: false,
        infoMessage: 'Password must contain letters, digits and special characters: !@#$%&*?_'
      };
    }

    return {
      success: true,
      infoMessage: 'Login successful'
    };
  }
}
