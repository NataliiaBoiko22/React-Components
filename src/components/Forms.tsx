/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles.css";

import React, { useState } from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Checkbox,
  Switch,
  Upload,
  Button,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

const countryOptions = [
  { label: "USA", value: "usa" },
  { label: "Canada", value: "canada" },
];

const stateOptions = [
  { label: "New York", value: "ny" },
  { label: "California", value: "ca" },
];

const validateMessages = {
  required: "${label} is required!",
  types: {
    zip: "${label} is not a valid zip code!",
  },
};

export default function Subscribe() {
  const [form] = Form.useForm();
  const [profilePic, setProfilePic] = useState(null);

  const onFileUploadChange = (info: {
    file: { status: string; originFileObj: React.SetStateAction<null> };
  }) => {
    if (info.file.status === "done") {
      setProfilePic(info.file.originFileObj);
    }
  };

  const onFormSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <Form
      className="form-field"
      form={form}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 12 }}
      onFinish={onFormSubmit}
      // validateMessages={validateMessages}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="lastName" label="Last Name">
        <Input />
      </Form.Item>

      <Form.Item name="zipCode" label="Zip Code" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="birthday" label="Birthday">
        <DatePicker />
      </Form.Item>

      <Form.Item name="deliveryDate" label="Delivery Date">
        <DatePicker />
      </Form.Item>

      <Form.Item name="country" label="Country">
        <Select>
          {countryOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="state" label="State">
        <Select>
          {stateOptions.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item name="consent" label="Consent" valuePropName="checked">
        <Checkbox>
          I consent to my personal data being collected and processed.
        </Checkbox>
      </Form.Item>

      <Form.Item name="gifts" label="Gifts">
        <Checkbox.Group>
          <Checkbox value="chocolate">Chocolate</Checkbox>
          <Checkbox value="flowers">Flowers</Checkbox>
          <Checkbox value="giftCard">Gift Card</Checkbox>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Checkbox.Group options={genderOptions} />
      </Form.Item>

      <Form.Item
        name="notifications"
        label="Notifications"
        valuePropName="checked"
      >
        <Switch />
      </Form.Item>
    </Form>
  );
}
