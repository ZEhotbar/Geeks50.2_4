import { Button, Form, Input } from "antd";
import axios from "axios";

export const TodoForm = () => {
  const handleFinish = async (formData) => {
    try {
      const response = await axios.post("https://dummyjson.com/todos/add", {
        ...formData,
        userId: 5,
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Успешно добавлено:", response.data);
      }
    } catch (error) {
      console.error("Ошибка при добавлении:", error);
    }
  };

  return (
    <Form onFinish={handleFinish}>
      <Form.Item
        name="todo"
        rules={[{ required: true, message: "Введите задачу!" }]}
      >
        <Input placeholder="Новая задача" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TodoForm;