import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, Typography } from "antd";
import styled from "styled-components";
const { Text } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function AddBookForm() {
  const { handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => console.log("Submit: ", data);

  return (
    <Container>
      <Form {...layout} name="basic" onFinish={handleSubmit(onSubmit)}>
        <Controller
          as={Form.Item}
          control={control}
          name="title"
          label="Title"
          rules={{ required: true }}
        >
          <Input />
          {errors.title && <Text type="danger">Title is required</Text>}
        </Controller>
        <Controller
          as={Form.Item}
          control={control}
          name="author"
          label="Author"
          rules={{ required: true }}
        >
          <Input />
          {errors.author && <Text type="danger">Author is required</Text>}
        </Controller>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  margin: 1rem;
`;

export default AddBookForm;
