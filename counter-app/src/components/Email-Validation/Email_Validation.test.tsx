import {screen,render, fireEvent} from '@testing-library/react';
import Email_Validation, { ValidateEmail } from './Email_Validation';
import { validateHeaderName } from 'http';
import userEvent from '@testing-library/user-event';
import exp from 'constants';
describe("Validate EmailValidation Comp",()=>{
    test("render Email Validation ",()=>{
        render(<Email_Validation/>)
        const myFun = jest.fn()
        const email = 'rajesh.com';
        expect(ValidateEmail(email)).not.toBeTruthy()

    })
    test("Test Invalid email and password",async()=>{
      const {getByTestId} = render(<Email_Validation/>)
       const Email = screen.getByPlaceholderText("Enter Name")
       const Password = screen.getByPlaceholderText("Enter Password")
       const Submit =  getByTestId("submit")
       fireEvent.click(Submit)
       const error = screen.getByText("invalid details")

       expect(error).toBeInTheDocument()
       expect(Email && Password && Submit).toBeInTheDocument()

    })
    test("Test Reset",async()=>{
      const {getByTestId} = render(<Email_Validation/>)
       const Email = screen.getByPlaceholderText("Enter Name") as HTMLInputElement
       const Password = screen.getByPlaceholderText("Enter Password") as HTMLInputElement
       const Reset = getByTestId("reset")
       fireEvent.click(Reset)
       expect(Email.value).toMatch("")
       expect(Password.value).toMatch("")

      

    })
    test("Test Valid email and password",async()=>{
      const {getByTestId} = render(<Email_Validation/>)
       const Email = screen.getByPlaceholderText("Enter Name")
       const Password = screen.getByPlaceholderText("Enter Password")
       const Submit =  getByTestId("submit")
       userEvent.type(Email,"rajesh@gmail.com")
       userEvent.type(Password,"123456")
       fireEvent.click(Submit)
      
       const valid = screen.getByText("valid details")
        expect(valid).toBeInTheDocument()
       expect(Email && Password && Submit).toBeInTheDocument()

    })
})