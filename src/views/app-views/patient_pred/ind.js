import React, { useState } from "react";
import { Table, Divider, Tag } from "antd";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";
import {
  DownOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
  RadiusUprightOutlined,
  PlusCircleOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const Patient_list = () => {
  const [visible, setVisible] = useState(false);

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <EditOutlined />
        Modifier
      </Menu.Item>
      <Menu.Item key="2">
        <DeleteOutlined />
        Supprimer
      </Menu.Item>
      <Menu.Item key="3">
        <RadiusUprightOutlined />
        Predict
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Nom",
      dataIndex: "nom",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Prenoms",
      dataIndex: "prenoms",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Numeros de telephone",
      dataIndex: "tel",
      key: "age",
    },
    {
      title: "Adresse",
      dataIndex: "adresse",
      key: "address",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Dropdown overlay={menu}>
          <Button>
            <MoreOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      nom: "John Brown",
      prenoms: "John Brown",
      email: "agbessi558@gmail.com",
      age: 32,
      tel: "67669136",
      adresse: "New York No. 1 Lake Park",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <Button type="primary" ghost>
          <PlusCircleOutlined />
          Ajouter un patient
        </Button>
      </div>
      <br></br>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Patient_list;
