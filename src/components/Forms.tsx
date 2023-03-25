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

const { Option } = Select;

const countryOptions = [
  { label: "USA", value: "us" },
  { label: "Canada", value: "can" },
  { label: "Argentina", value: "arg" },
  { label: "Bolivia", value: "bol" },
  { label: "Brasil", value: "bras" },
  { label: "Mexico", value: "mex" },
  { label: "Uruguay", value: "urug" },
];

const stateOptions = [
  { label: "New York", value: "ny" },
  { label: "California", value: "ca" },
  { label: "Los Angeles", value: "la" },
  { label: "Texas", value: "tex" },
  { label: "Chicago", value: "ch" },
  { label: "Houston", value: "hou" },
  { label: "San Antonio", value: "sa" },
  { label: "Lima", value: "li" },
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
        <Checkbox>OK.</Checkbox>
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
