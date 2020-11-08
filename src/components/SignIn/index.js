import React from 'react'
import { Container, FormButton, FormH1, FormLabel, FormWrap, Icon, FormContent, Form, FormInput, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">iron</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required></FormInput>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
