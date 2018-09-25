import * as React from "react";

export interface StudentFormProps {
  firstName: string;
  lastName: string;
  gender: string;
  age: string;
}

export interface StudentFormState {
  age: number;
  name: string;
}

export default class StudentForm extends React.Component<
  StudentFormProps,
  StudentFormState
> {
  constructor(props: StudentFormProps) {
    super(props);

    this.state = {
      age: 10,
      name: ""
    };
  }

  public render() {
    const { firstName, lastName, gender, age } = this.props;
    return (
      <div>
        <h1>Student Form</h1>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" value={firstName} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" value={lastName} />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <select name="gender">
            <option value="male" selected={gender === "male"}>
              Male
            </option>
            <option value="female" selected={gender === "female"}>
              Female
            </option>
          </select>
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="text" name="age" value={age} />
        </div>
        <p>
          I'm {firstName} {lastName} and {age} years old
        </p>
      </div>
    );
  }
}
