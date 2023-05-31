import React, { useEffect, useState } from "react";
import {
  Table,
  Divider,
  Tag,
  Drawer,
  Card,
  Form,
  Input,
  Select,
  Col,
  Row,
  DatePicker,
  InputNumber,
  Modal,
} from "antd";
import { Menu, Dropdown, Button, message, Tooltip } from "antd";

import {
  DownOutlined,
  UserOutlined,
  EditOutlined,
  DeleteOutlined,
  RadiusUprightOutlined,
  PlusCircleOutlined,
  FileDoneOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Option } from "antd/lib/mentions";
import confirm from "antd/lib/modal/confirm";
import FetcherService from "services/FetcherService";
import ButtonComponent from "../components/general/button";

const Patient_list = () => {
  const [nature_form] = Form.useForm();
  const [pred_form] = Form.useForm();

  const [visible, setVisible] = useState(false);

  const [visible_pred, setVisible_pred] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish_pred = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed_pred = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const Edit = (row) => {
    //history.push(`/app/apps/ecommerce/edit-product/${row.id}`);
    //setSolution_nature(row.name);

    showDrawer();
  };

  const deleteRow = (row) => {
    console.log(row);
  };

  const PredLayout = (row) => {
    showDrawer_pred();
  };

  function showDeleteConfirm(row) {
    confirm({
      title: "Suppression",
      content: (
        <p>
          Êtes-vous sûr de vouloir effectuer cette action ?
          <p type="danger">Cette action est irréversible</p>
        </p>
      ),
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk() {
        console.log("OK");
        deleteRow(row);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

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

  const showDrawer_pred = () => {
    setVisible_pred(true);
  };

  const onClose_pred = () => {
    setVisible_pred(false);
  };

  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

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
      title: "Email",
      dataIndex: "email",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <a href="/app/pred">
          <Button type="primary">
            <FileDoneOutlined />
            Effectuer la prediction
          </Button>
        </a>
      ),
    },
  ];

  const resetForm = () => {
    nature_form.resetFields();
  };

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

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  useEffect(() => {
    FetcherService.Predict({
      Pregnancies: 0,
      Glucose: 137,
      BloodPressure: 40,
      SkinThickness: 35,
      Insulin: 168,
      BMI: 43.1,
      DiabetesPedigreeFunction: 2.228,
      Age: 33,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/*********************************************************************************************** */
      /************************************************************************************************ */
      /************************************************************************************************ */
      /************************************************************************************************ */
      /************************************************************************************************ */}
      <Drawer
        title="Ajoute d'un patient"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
        width={720}
      >
        <Card>
          <Form
            form={nature_form}
            {...layout}
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ width: "48%" }}>
                <Form.Item
                  label={"Nom"}
                  name="nom"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrez le nom ",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ width: "48%" }}>
                <Form.Item
                  label={"Prenoms"}
                  name="prenoms"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrez le prenoms",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ width: "48%" }}>
                <Form.Item
                  label={"Age"}
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrez l'age",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ width: "48%" }}>
                <Form.Item
                  label={"Date de naissance"}
                  name="date_nais"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez selectionnez la date se naissance  !",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} onChange={onChange} />
                </Form.Item>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ width: "48%" }}>
                <Form.Item
                  label={"Numero de telephone"}
                  name="tel"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrez le Numero de telephone",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ width: "48%" }}>
                <Form.Item
                  label={"Email"}
                  name="tel"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrez l'email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ width: "48%" }}>
                <Form.Item
                  label={"Veuillez entrez l'adresse"}
                  name="tel"
                  rules={[
                    {
                      required: true,
                      message: "Veuillez entrez l'adresse",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Col style={{ marginRight: "10px" }}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Enregistrer
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="default" onClick={resetForm}>
                    Vider le formulaire
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Drawer>
      {/*********************************************************************************************** */
      /************************************************************************************************ */
      /************************************************************************************************ */
      /************************************************************************************************ */
      /************************************************************************************************ */}

      <br></br>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default Patient_list;
