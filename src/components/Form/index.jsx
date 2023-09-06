import {
  Button,
  FileInput,
  Text,
  TextInput,
  Textarea,
  rem,
} from '@mantine/core';
import React from 'react';
import PropTypes from 'prop-types';

import { IconPhoto } from '@tabler/icons-react';
import { modals } from '@mantine/modals';

const initialState = {
  title: '',
  author: '',
  year: '',
  image: '',
  description: '',
};

const MAX_IMAGE_SIZE = 100 * 1024; // 100KB in bytes

const Form = ({ onAddBook }) => {
  const [formState, setFormState] = React.useState(initialState);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleChangeImage = (val) => {
    if (val.size > MAX_IMAGE_SIZE) {
      setErrorMessage('Image size exceeds the maximum limit (100KB).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormState({
        ...formState,
        image: event.target.result,
      });
      setErrorMessage('');
    };
    reader.readAsDataURL(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(formState);
    modals.closeAll();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Title"
        name="title"
        onChange={handleChangeForm}
        withAsterisk
      />
      <TextInput
        label="Author"
        name="author"
        onChange={handleChangeForm}
        withAsterisk
      />
      <TextInput
        type="number"
        label="Published Year"
        name="year"
        onChange={handleChangeForm}
        maxLength={4}
        withAsterisk
      />
      <FileInput
        label="Book Cover"
        name="image"
        onChange={handleChangeImage}
        icon={<IconPhoto size={rem(14)} />}
        accept="image/*"
      />
      {errorMessage && (
        <Text c="red.4" fz="xs">
          {errorMessage}
        </Text>
      )}
      <Textarea
        label="Description"
        name="description"
        onChange={handleChangeForm}
        withAsterisk
      />
      <Button fullWidth type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
};

Form.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default Form;
