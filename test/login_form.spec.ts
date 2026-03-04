import { LoginForm } from '../src/login_form';
import { expect } from 'chai';

const validUsername: string = 'user_Name1';
const emptyUsername: string = '';
const username7Chars: string = '7charac';
const username8Chars: string = '8charact';
const username9Chars: string = '9characte';
const username19Chars: string = '19characters_userna';
const username20Chars: string = '20characters_usernam';
const username21Chars: string = '21characters_username';
const validPassword: string = 'Pas$word123';
const emptyPassword: string = '';
const password9Chars: string = '9chars_pa';
const password10Chars: string = '10chars_pa';
const password11Chars: string = '11chars_pas';
const password24Chars: string = '24characters_password_en';
const password25Chars: string = '25characters_password_ent';
const password26Chars: string = '26characters_password_ente';

describe('LoginForm', () => {
  let login: LoginForm;

  beforeEach(() => {
    login = new LoginForm();
  });

  describe('Positive cases', () => {
    it('setting and getting username/password', () => {
      login.setUsername(validUsername).setPassword(validPassword);

      expect(login.getUsername()).to.equal(validUsername);
      expect(login.getPassword()).to.equal(validPassword);
    });

    it('isUsernameEmpty/isPasswordEmpty return FALSE when the fields are filled in', () => {
      login.setUsername(validUsername).setPassword(validPassword);

      expect(login.isUsernameEmpty()).to.be.false;
      expect(login.isPasswordEmpty()).to.be.false;
    });

    describe('Checking the format of valid username', () => {
      const validUsernamesList = ['7User_Name', 'User_Name', 'user_name', 'UserName'];

      validUsernamesList.forEach(name => {
        it(`${name}`, () => {
          login.setUsername(name);
          expect(login.isUsernameFormatValid(), `entered ${name} has invalid format`).to.be.true;
        });
      });
    });

    describe('Checking the format of valid password', () => {
      const validPasswordList = ['Pas2sword#', 'passWor@pa9', 'Pa$$word2_', 'pas!word67'];

      validPasswordList.forEach(password => {
        it(`${password}`, () => {
          login.setPassword(password);
          expect(login.isPasswordFormatValid(), `entered ${password} has invalid format`).to.be.true;
        });
      });
    });

    it('verification of a correctly completed form', () => {
      login.setUsername(validUsername).setPassword(validPassword);

      expect(login.isFormValid(), `${validUsername} or ${validPassword} has incorrect length or format`).to.be.true;
    });

    it('login return success: the login form has been completed correctly', () => {
      login.setUsername(validUsername).setPassword(validPassword);

      const result = login.login();
      expect(result.success).to.be.true;
      expect(result.infoMessage).to.equal('Login successful');
    });
  });

  describe('Checking the username and password boundary values', () => {
    it('checking the boundary values for username field: 7 chars', () => {
      login.setUsername(username7Chars);

      expect(
        login.isUsernameLengthValid(),
        `Checking 7 chars. Username length should be ${login.minULength}-${login.maxULength} chars; got ${username7Chars.length}.`
      ).to.be.false;
    });

    it('checking the boundary values for username field: 8 chars', () => {
      login.setUsername(username8Chars);

      expect(
        login.isUsernameLengthValid(),
        `Checking 8 chars. Username length should be ${login.minULength}-${login.maxULength} chars; got ${username8Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for username field: 9 chars', () => {
      login.setUsername(username9Chars);

      expect(
        login.isUsernameLengthValid(),
        `Checking 9 chars. Username length should be ${login.minULength}-${login.maxULength} chars; got ${username9Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for username field: 19 chars', () => {
      login.setUsername(username19Chars);

      expect(
        login.isUsernameLengthValid(),
        `Checking 19 chars. Username length should be ${login.minULength}-${login.maxULength} chars; got ${username19Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for username field: 20 chars', () => {
      login.setUsername(username20Chars);

      expect(
        login.isUsernameLengthValid(),
        `Checking 20 chars. Username length should be ${login.minULength}-${login.maxULength} charss; got ${username20Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for username field: 21 chars', () => {
      login.setUsername(username21Chars);

      expect(
        login.isUsernameLengthValid(),
        `Checking 21 chars. Username length should be ${login.minULength}-${login.maxULength} charss; got ${username21Chars.length}.`
      ).to.be.false;
    });

    it('checking the boundary values for password field: 9 chars', () => {
      login.setPassword(password9Chars);

      expect(
        login.isPasswordLengthValid(),
        `Checking 9 chars. Password length should be ${login.minPLength}-${login.maxPLength} chars; got ${password9Chars.length}.`
      ).to.be.false;
    });

    it('checking the boundary values for password field: 10 chars', () => {
      login.setPassword(password10Chars);

      expect(
        login.isPasswordLengthValid(),
        `Checking 10 chars. Password length should be ${login.minPLength}-${login.maxPLength}; got ${password10Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for password field: 11 chars', () => {
      login.setPassword(password11Chars);

      expect(
        login.isPasswordLengthValid(),
        `Checking 11 chars. Password length should be ${login.minPLength}-${login.maxPLength}; got ${password11Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for password field: 24 chars', () => {
      login.setPassword(password24Chars);

      expect(
        login.isPasswordLengthValid(),
        `Checking 24 chars. Password length should be ${login.minPLength}-${login.maxPLength}; got ${password24Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for password field: 25 chars', () => {
      login.setPassword(password25Chars);

      expect(
        login.isPasswordLengthValid(),
        `Checking 25 chars. Password length should be ${login.minPLength}-${login.maxPLength}; got ${password25Chars.length}.`
      ).to.be.true;
    });

    it('checking the boundary values for password field: 26 chars', () => {
      login.setPassword(password26Chars);

      expect(
        login.isPasswordLengthValid(),
        `Checking 26 chars. Password length should be ${login.minPLength}-${login.maxPLength}; got ${password26Chars.length}.`
      ).to.be.false;
    });
  });

  describe('Negative cases', () => {
    it('short username length and valid password length', () => {
      login.setUsername(username7Chars).setPassword(validPassword);

      expect(login.isUsernameLengthValid()).to.be.false;

      const result = login.login();
      expect(result.success).to.be.false;
      expect(result.infoMessage).to.equal(`Username length must be between ${login.minULength} and ${login.maxULength} characters`);
    });

    it('long username length and valid password length', () => {
      login.setUsername(username21Chars).setPassword(validPassword);

      expect(login.isUsernameLengthValid()).to.be.false;

      const result = login.login();
      expect(result.success).to.be.false;
      expect(result.infoMessage).to.equal(`Username length must be between ${login.minULength} and ${login.maxULength} characters`);
    });

    it('short password length and valid username length', () => {
      login.setUsername(validUsername).setPassword(password9Chars);

      expect(login.isPasswordLengthValid()).to.be.false;

      const result = login.login();
      expect(result.success).to.be.false;
      expect(result.infoMessage).to.equal(`Password length must be between ${login.minPLength} and ${login.maxPLength} characters`);
    });

    it('long password length and valid username length', () => {
      login.setUsername(validUsername).setPassword(password26Chars);

      expect(login.isPasswordLengthValid()).to.be.false;

      const result = login.login();
      expect(result.success).to.be.false;
      expect(result.infoMessage).to.equal(`Password length must be between ${login.minPLength} and ${login.maxPLength} characters`);
    });

    describe('entered empty username and valid password', () => {
      const emptyUsernameList = ['', '  '];

      emptyUsernameList.forEach(name => {
        it(`${name}`, () => {
          login.setUsername(name).setPassword(validPassword);

          expect(login.isUsernameEmpty()).to.be.true;

          const result = login.login();
          expect(result.success).to.be.false;
          expect(result.infoMessage).to.equal('EMPTY USERNAME. Username is required');
        });
      });
    });

    describe('entered empty password and valid password', () => {
      const emptyPasswordList = ['', '  '];

      emptyPasswordList.forEach(password => {
        it(`${password}`, () => {
          login.setPassword(password).setUsername(validUsername);

          expect(login.isPasswordEmpty()).to.be.true;

          const result = login.login();
          expect(result.success).to.be.false;
          expect(result.infoMessage).to.equal('EMPTY PASSWORD. Password is required');
        });
      });
    });

    describe('Invalid username format and valid password format', () => {
      const invalidUsernamesList = ['%User_Name', 'User Name', 'name@mail.ru'];

      invalidUsernamesList.forEach(name => {
        it(`${name}`, () => {
          login.setUsername(name).setPassword(validPassword);
          expect(login.isUsernameFormatValid()).to.be.false;

          const result = login.login();
          expect(result.success).to.be.false;
          expect(result.infoMessage).to.equal('Username can only contain letters, digits and underscore');
        });
      });
    });

    describe('Invalid password format and valid username format', () => {
      const invalidPasswordList = ['Pas$worddd', 'mypassword', '123456789!'];

      invalidPasswordList.forEach(password => {
        it(`${password}`, () => {
          login.setUsername(validUsername).setPassword(password);
          expect(login.isPasswordFormatValid()).to.be.false;

          const result = login.login();
          expect(result.success).to.be.false;
          expect(result.infoMessage).to.equal('Password must contain letters, digits and special characters: !@#$%&*?_');
        });
      });
    });

    it('username and password are empty', () => {
      login.setUsername(emptyUsername).setPassword(emptyPassword);

      const result = login.login();
      expect(result.success).to.be.false;
      expect(result.infoMessage).to.equal('EMPTY USERNAME. Username is required');
    });
  });
});
