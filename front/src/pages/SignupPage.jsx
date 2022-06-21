import { Box, Button, Input, InputWrapper, PasswordInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { signup } from '../utils/helper'

const SignupPage = () => {
  const navigate = useNavigate()
  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  const createUser = async newUser => {
    try {
      const response = await signup(newUser)

      if (response.status === 'KO') {
        throw new Error(response.message)
      }

      navigate('/login')
    } catch (error) {
      form.setErrors({ username: error.message })
    }
  }

  const handleSubmit = values => {
    createUser(values)
  }

  return (
    <Box>
      <Title>Signup</Title>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper
          required
          label='Username'
          description='Your unique username'
          {...form.getInputProps('username')}
        >
          <Input {...form.getInputProps('username')} />
        </InputWrapper>
        <InputWrapper required label='Password' description='Your password'>
          <PasswordInput {...form.getInputProps('password')} />
        </InputWrapper>
        <Button type='submit'>Register</Button>
      </form>
    </Box>
  )
}

export default SignupPage
