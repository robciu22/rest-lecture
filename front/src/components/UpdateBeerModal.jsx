import { Button, Input, InputWrapper, Modal, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'

const UpdateBeerModal = ({ isModalOpen, setIsModalOpen, beerId, beer, setNeedRefresh }) => {
  const form = useForm({
    initialValues: {
      name: '',
      tagline: '',
      volume: 0.35,
    },
  })

  useEffect(() => {
    form.setValues({
      name: beer.name,
      tagline: beer.tagline,
      volume: beer.volume,
    })
  }, [beer])

  const updateBeer = async newValues => {
    await fetch(`http://localhost:5005/api/beers/${beerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newValues),
    })
    setNeedRefresh(true)
    setIsModalOpen(false)
  }

  const handleSubmit = values => {
    updateBeer(values)
  }

  return (
    <Modal opened={isModalOpen} onClose={() => setIsModalOpen(false)} title='Update beer'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <InputWrapper required label='Name' description='The name of the new beer'>
          <Input {...form.getInputProps('name')} />
        </InputWrapper>
        <InputWrapper required label='Tagline' description='The tagline of the new beer'>
          <Input {...form.getInputProps('tagline')} />
        </InputWrapper>
        <InputWrapper required label='Volume' description='The volume of the new beer'>
          <NumberInput precision={2} min='0' {...form.getInputProps('volume')} />
        </InputWrapper>
        <Button type='submit'>Update</Button>
      </form>
    </Modal>
  )
}

export default UpdateBeerModal
